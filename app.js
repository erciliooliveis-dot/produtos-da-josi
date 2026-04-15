// ============================================================
// APP.JS — Lógica principal do catálogo
// Produtos da Josi — Distribuidora de Higiene e Limpeza
// ============================================================

const PRODUCTS_PER_PAGE = 24;
let allProducts = [];
let filteredProducts = [];
let currentPage = 1;
let currentView = 'all';
let currentBrand = null;
let currentCategory = null;
let cart = [];
let favorites = [];
let showingFavorites = false;

// ============ IDS ESTÁVEIS ============
// Hash determinístico a partir de marca+nome do produto. Substitui IDs baseados
// em índice (que quebravam carrinhos/favoritos quando adicionávamos/reordenávamos
// itens). Algoritmo: variante do djb2 (base 5381, fator 33) truncado a int32 positivo.
// Colisões resolvidas com probing: se bater, soma 1 e tenta de novo.
function stableProductId(produto) {
  const key = (produto.marca || '') + '|' + (produto.nome || '');
  let hash = 5381;
  for (let i = 0; i < key.length; i++) {
    hash = ((hash << 5) + hash + key.charCodeAt(i)) | 0; // hash * 33 + char
  }
  // int32 positivo, mantém IDs acima de 10000 pra não colidir com IDs Zupp (9001-9028)
  return (Math.abs(hash) % 900000) + 100000;
}

// ============ INICIALIZAÇÃO ============
function init() {
  // Combinar catalogProducts + specificProducts
  // IDs: Zupp já tem IDs fixos 9001-9028 (em data.js). Catálogo recebe hash estável.
  const combined = [...catalogProducts, ...specificProducts];
  const usedIds = new Set(specificProducts.map(p => p.id).filter(Boolean));
  combined.forEach(p => {
    if (p.id) { usedIds.add(p.id); return; }
    let id = stableProductId(p);
    while (usedIds.has(id)) id++; // probing em caso de colisão
    p.id = id;
    usedIds.add(id);
  });
  allProducts = combined;
  filteredProducts = [...allProducts];

  loadCartFromStorage();
  loadFavoritesFromStorage();
  renderCombos();
  renderBrands();
  renderCategoryTabs();
  renderProducts();
  updateResultsInfo();
  setupScrollAnimations();
  updateBottomNavBadges();
}

// ============ IMAGEM DO PRODUTO ============
function getProductImg(marca, categoria) {
  if (typeof allProducts !== 'undefined' && allProducts.length > 0) {
    // 1. Produto com marca+categoria exatas
    let prod = allProducts.find(p => p.marca === marca && p.categoria === categoria && p.img);
    if (prod) return `<img src="${prod.img}" alt="${marca}" style="max-width:100%;max-height:100%;object-fit:contain" loading="lazy">`;
    // 2. Qualquer produto da mesma categoria (qualquer marca)
    prod = allProducts.find(p => p.categoria === categoria && p.img);
    if (prod) return `<img src="${prod.img}" alt="${marca}" style="max-width:100%;max-height:100%;object-fit:contain" loading="lazy">`;
    // 3. Qualquer produto da mesma marca (qualquer categoria)
    prod = allProducts.find(p => p.marca === marca && p.img);
    if (prod) return `<img src="${prod.img}" alt="${marca}" style="max-width:100%;max-height:100%;object-fit:contain" loading="lazy">`;
  }
  // 4. Último fallback: ícone SVG genérico de frasco
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:70%;height:70%;color:#7C3AED"><path d="M 10 2 L 14 2 L 14 5 L 10 5 Z"/><path d="M 8 5 L 16 5 L 16 8 L 18 10 L 18 20 Q 18 22 16 22 L 8 22 Q 6 22 6 20 L 6 10 L 8 8 Z"/></svg>`;
}

// ============ RENDER COMBOS ============
function renderCombos() {
  const grid = document.getElementById('comboGrid');
  grid.innerHTML = combos.map((combo, idx) => {
    const svgIcon = (typeof comboIcons !== 'undefined' && comboIcons[combo.title]) || combo.icon;
    return `
    <div class="combo-card animate-on-scroll">
      <div class="combo-header">
        <div class="combo-title">${combo.title}</div>
        <div class="combo-icon">${svgIcon}</div>
      </div>
      <div class="combo-desc">${combo.desc}</div>
      <div class="combo-products">
        ${combo.items.map(item => `
          <div class="combo-item">
            <div class="combo-item-img">
              ${getProductImg(item.marcas[0], item.categoria)}
            </div>
            <div class="combo-item-info">
              <div class="combo-item-name">${(typeof catDisplayNames !== 'undefined' && catDisplayNames[item.categoria]) || item.categoria} \u2014 <strong>${item.marcas[0]}</strong></div>
              <div class="combo-item-cat" style="font-size:11px;color:#6B7280;margin-top:2px">Marcas: ${item.marcas.join(' \u00b7 ')}</div>
            </div>
          </div>
        `).join('')}
      </div>
      <span class="combo-tag tag-${combo.tag}">${combo.tagText}</span>
      <button class="combo-add-btn" onclick="addComboToCart(${idx})">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
        Adicionar Combo ao Carrinho
      </button>
    </div>
    `;
  }).join('');
}

function addComboToCart(idx) {
  const combo = combos[idx];
  let added = 0;
  combo.items.forEach(item => {
    const marca = item.marcas[0];
    const p = allProducts.find(x => x.marca === marca && x.categoria === item.categoria)
            || allProducts.find(x => x.categoria === item.categoria);
    if (!p) return;
    // Se tem tamanhos, usa o primeiro; caso contrário cartKey é o id
    let sizeLabel = null, sizePreco = null;
    if (p.tamanhos && p.tamanhos.length > 0) {
      sizeLabel = p.tamanhos[0].label;
      sizePreco = p.tamanhos[0].preco;
    }
    const cartKey = sizeLabel ? p.id + '_' + sizeLabel : String(p.id);
    const existing = cart.find(x => x.cartKey === cartKey);
    if (existing) { existing.qty++; }
    else { cart.push({ id: p.id, cartKey: cartKey, nome: p.nome, marca: p.marca, categoria: p.categoria, qty: 1, size: sizeLabel, sizePreco: sizePreco }); }
    added++;
  });
  saveCartToStorage();
  renderCart();
  openCart();
  const btn = document.querySelectorAll('.combo-add-btn')[idx];
  if (btn) {
    const orig = btn.innerHTML;
    btn.innerHTML = `\u2705 ${added} itens adicionados!`;
    setTimeout(() => { btn.innerHTML = orig; }, 2000);
  }
}

// ============ RENDER BRANDS ============
function renderBrands() {
  const brands = [...new Set(allProducts.map(p => p.marca))].sort();
  const grid = document.getElementById('brandGrid');
  grid.innerHTML = brands.map(b => {
    const count = allProducts.filter(p => p.marca === b).length;
    return `<div class="brand-chip animate-on-scroll" onclick="filterByBrand('${b}')">${b}<span class="count">${count} produtos</span></div>`;
  }).join('');
}

// ============ RENDER CATEGORY TABS ============
function renderCategoryTabs() {
  const cats = [...new Set(allProducts.map(p => p.categoria))];
  const tabs = document.getElementById('categoryTabs');
  tabs.innerHTML = `<button class="tab active" onclick="filterByCategory(null, this)">Todas</button>` +
    cats.map(c => `<button class="tab" onclick="filterByCategory('${c}', this)">${(typeof catDisplayNames !== 'undefined' && catDisplayNames[c]) || c}</button>`).join('');
}

// ============ FILTROS ============
function filterByBrand(brand) {
  currentBrand = currentBrand === brand ? null : brand;
  currentPage = 1;
  applyFilters();
  document.querySelectorAll('.brand-chip').forEach(el => {
    el.classList.toggle('active', el.textContent.includes(brand) && currentBrand === brand);
  });
}

function filterByCategory(cat, btn) {
  if (currentCategory === cat) {
    currentCategory = null;
    currentPage = 1;
    applyFilters();
    document.querySelectorAll('.tab, .filter-btn').forEach(t => t.classList.remove('active'));
    document.getElementById('combosSection').style.display = 'none';
    document.getElementById('productsSection').style.display = 'block';
    return;
  }
  currentCategory = cat;
  currentPage = 1;
  applyFilters();
  document.querySelectorAll('.tab, .filter-btn').forEach(t => t.classList.remove('active'));
  if (btn) btn.classList.add('active');
  const combosSection = document.getElementById('combosSection');
  const productsSection = document.getElementById('productsSection');
  if (cat) {
    combosSection.style.display = 'none';
    productsSection.style.display = 'block';
    productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    combosSection.style.display = 'none';
    productsSection.style.display = 'block';
  }
}

function applyFilters() {
  const searchEl = document.getElementById('searchInput');
  const rawSearch = searchEl ? searchEl.value.trim() : '';
  const search = normalize(rawSearch);

  // Se ha busca e ela bate com uma marca exata, filtrar SOMENTE por marca
  // (ignora currentBrand/currentCategory para evitar que filtros antigos zerem o resultado)
  if (search) {
    const isExactBrand = allProducts.some(x => normalize(x.marca) === search);
    if (isExactBrand) {
      filteredProducts = allProducts.filter(p => normalize(p.marca) === search);
      renderProducts();
      updateResultsInfo();
      return;
    }
    // Busca textual com acentos normalizados
    filteredProducts = allProducts.filter(p =>
      normalize(p.nome).includes(search) ||
      normalize(p.marca).includes(search) ||
      normalize(p.categoria).includes(search)
    );
    renderProducts();
    updateResultsInfo();
    return;
  }

  // Sem busca: aplica filtros de marca/categoria normalmente
  filteredProducts = allProducts.filter(p => {
    const matchBrand = !currentBrand || p.marca === currentBrand;
    const matchCat = !currentCategory || p.categoria === currentCategory;
    return matchBrand && matchCat;
  });
  renderProducts();
  updateResultsInfo();
}

// ============ UTILITARIOS ============
// Previne XSS em textos injetados via innerHTML (nomes de produtos externos).
function escapeHtml(str) {
  if (str == null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Debounce para eventos frequentes (search input). Evita re-render a cada tecla.
function debounce(fn, wait) {
  let t;
  return function debounced(...args) {
    clearTimeout(t);
    t = setTimeout(() => fn.apply(this, args), wait);
  };
}

// Normaliza acentos na busca: "acucar" casa com "acucar" E "acucar" (acento).
function normalize(str) {
  return String(str || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

// ============ SEARCH ============
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  if (!searchInput) return;
  const handleSearch = debounce(() => {
    const val = searchInput.value;
    if (val.length > 0) {
      showingFavorites = false;
      currentBrand = null;
      currentCategory = null;
      currentView = 'all';
      document.getElementById('combosSection').style.display = 'none';
      const best = document.getElementById('bestsellersSection');
      if (best) best.style.display = 'none';
      document.getElementById('productsSection').style.display = 'block';
      document.querySelectorAll('.nav-bar .filter-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    } else {
      document.getElementById('combosSection').style.display = 'none';
    }
    currentPage = 1;
    applyFilters();
  }, 180);
  searchInput.addEventListener('input', handleSearch);

  // ESC fecha modal e carrinho
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    const modal = document.getElementById('produtoModal');
    if (modal && modal.classList.contains('active')) { fecharModal(); return; }
    const drawer = document.getElementById('cartDrawer');
    if (drawer && drawer.classList.contains('active')) { toggleCart(); return; }
  });

  // Ano dinamico no footer
  const yearEl = document.getElementById('footerYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

// ============ RENDER PRODUCTS ============
function renderProducts() {
  const grid = document.getElementById('productGrid');
  const start = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const end = start + PRODUCTS_PER_PAGE;
  const pageProducts = filteredProducts.slice(start, end);

  grid.innerHTML = pageProducts.map(p => {
    const color = brandColors[p.marca] || '5B2C8E';
    const icon = catIcons[p.categoria] || '\uD83E\uDDF4';
    const realImg = p.img || (typeof perProductImages !== 'undefined' && perProductImages[p.nome]) || realProductImages[p.marca + ':' + p.categoria] || realBrandImages[p.marca] || realCatImages[p.categoria];
    const marcaEsc = escapeHtml(p.marca);
    const nomeEsc = escapeHtml(p.nome);
    const catEsc = escapeHtml(p.categoria);
    const imgContent = realImg
      ? `<img src="${escapeHtml(realImg)}" alt="${nomeEsc}" width="200" height="200" style="max-width:85%;max-height:85%;object-fit:contain" loading="lazy" decoding="async" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`
      + `<div style="display:none;flex-direction:column;align-items:center;gap:6px"><span style="font-size:48px" aria-hidden="true">${icon}</span><span style="font-size:14px;font-weight:800;color:#${color};background:rgba(124,58,237,0.06);padding:3px 10px;border-radius:8px">${marcaEsc}</span></div>`
      : `<div style="display:flex;flex-direction:column;align-items:center;gap:6px"><span style="font-size:48px" aria-hidden="true">${icon}</span><span style="font-size:14px;font-weight:800;color:#${color};background:rgba(124,58,237,0.06);padding:3px 10px;border-radius:8px">${marcaEsc}</span></div>`;
    return `
    <article class="product-card animate-on-scroll" onclick="abrirModal(${p.id})" tabindex="0" role="button" aria-label="Ver detalhes de ${nomeEsc}" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();abrirModal(${p.id})}">
      <div class="product-img" style="background:linear-gradient(135deg, #${color}22, #EDE9FE)">
        ${imgContent}
        <span class="product-badge badge-marca">${marcaEsc}</span>
        <button type="button" class="fav-btn ${favorites.includes(p.id) ? 'active' : ''}" onclick="event.stopPropagation();toggleFavorite(${p.id})" title="Favoritar" aria-label="Favoritar ${nomeEsc}" aria-pressed="${favorites.includes(p.id)}">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        </button>
      </div>
      <div class="product-info">
        <div class="product-name">${nomeEsc}</div>
        <div class="product-marca">${marcaEsc}</div>
        <div class="product-categoria">${catEsc}</div>
        ${(() => {
          if (p.tamanhos && p.tamanhos.length > 1) {
            const menor = Math.min(...p.tamanhos.map(t => t.preco));
            const precoMenor = (menor * MARGEM).toFixed(2).replace('.', ',');
            return `<div class="product-price">A partir de R$ ${precoMenor}</div><div class="product-price-label">${p.tamanhos.length} tamanhos disponiveis</div>`;
          }
          const pr = p.tamanhos ? (p.tamanhos[0].preco * MARGEM).toFixed(2) : getPrecoRevenda(p);
          return pr ? `<div class="product-price">R$ ${pr.replace('.', ',')}</div><div class="product-price-label">preco/un</div>` : `<div class="product-price-tag">Consulte preco</div>`;
        })()}
        <button type="button" class="btn-add-cart" onclick="event.stopPropagation();addToCart(${p.id})" aria-label="Adicionar ${nomeEsc} ao carrinho">+ Adicionar ao Carrinho</button>
      </div>
    </article>`;
  }).join('');

  renderPagination();
  setupScrollAnimations();
}

// ============ PAGINATION ============
function renderPagination() {
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const pag = document.getElementById('pagination');
  if (totalPages <= 1) { pag.innerHTML = ''; return; }

  let html = `<button class="page-btn nav" onclick="goToPage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>Anterior</button>`;

  const maxVisible = 7;
  let startPage = Math.max(1, currentPage - 3);
  let endPage = Math.min(totalPages, startPage + maxVisible - 1);
  if (endPage - startPage < maxVisible - 1) startPage = Math.max(1, endPage - maxVisible + 1);

  if (startPage > 1) {
    html += `<button class="page-btn" onclick="goToPage(1)">1</button>`;
    if (startPage > 2) html += `<span style="color:var(--cinza)">...</span>`;
  }

  for (let i = startPage; i <= endPage; i++) {
    html += `<button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="goToPage(${i})">${i}</button>`;
  }

  if (endPage < totalPages) {
    if (endPage < totalPages - 1) html += `<span style="color:var(--cinza)">...</span>`;
    html += `<button class="page-btn" onclick="goToPage(${totalPages})">${totalPages}</button>`;
  }

  html += `<button class="page-btn nav" onclick="goToPage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}>Pr\u00f3ximo</button>`;
  pag.innerHTML = html;
}

function goToPage(page) {
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  if (page < 1 || page > totalPages) return;
  currentPage = page;
  renderProducts();
  document.getElementById('productGrid').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ============ VIEW TOGGLE ============
function setView(view, btn) {
  currentView = view;
  document.querySelectorAll('.nav-bar .filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  const combosSection = document.getElementById('combosSection');
  const brandsSection = document.getElementById('brandsSection');
  const productsSection = document.getElementById('productsSection');

  if (view === 'all') {
    currentCategory = null;
    currentBrand = null;
    currentPage = 1;
    applyFilters();
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    const todaTab = document.querySelector('.tab');
    if (todaTab) todaTab.classList.add('active');
    combosSection.style.display = 'none';
    brandsSection.style.display = 'none';
    productsSection.style.display = 'block';
  } else if (view === 'combos') {
    combosSection.style.display = 'block';
    brandsSection.style.display = 'none';
    productsSection.style.display = 'none';
    combosSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else if (view === 'brands') {
    combosSection.style.display = 'none';
    brandsSection.style.display = 'block';
    productsSection.style.display = 'block';
  }
}

// ============ RESULTS INFO ============
function updateResultsInfo() {
  const info = document.getElementById('resultsInfo');
  const label = document.getElementById('filterLabel');
  let text = `Exibindo ${filteredProducts.length.toLocaleString('pt-BR')} produtos`;
  if (currentBrand) text += ` da marca ${currentBrand}`;
  if (currentCategory) text += ` na categoria ${currentCategory}`;
  info.textContent = text;
  label.textContent = currentBrand ? `- ${currentBrand}` : currentCategory ? `- ${currentCategory}` : '';
}

// ============ CARRINHO COM LOCALSTORAGE ============
// Migração: carrinhos antigos tinham IDs baseados em índice (1, 2, 3...) que
// mudavam a cada alteração do catálogo. Agora matchamos por nome+marca para
// reencontrar o produto e atualizar pro novo ID estável.
function migrateCartItem(item) {
  // Match direto pelo ID novo (carrinho já migrado)
  let prod = allProducts.find(p => p.id === item.id);
  if (prod) return { item, prod };
  // Fallback 1: match por nome+marca (carrinho antigo)
  if (item.nome && item.marca) {
    prod = allProducts.find(p => p.nome === item.nome && p.marca === item.marca);
    if (prod) { item.id = prod.id; return { item, prod }; }
  }
  // Fallback 2: match só por nome (último recurso)
  if (item.nome) {
    prod = allProducts.find(p => p.nome === item.nome);
    if (prod) { item.id = prod.id; return { item, prod }; }
  }
  return null;
}

function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem('produtosDaJosi_cart');
    if (saved) {
      const loaded = JSON.parse(saved);
      cart = loaded.map(migrateCartItem)
                   .filter(Boolean)
                   .map(({ item }) => {
                     // cartKey também precisa ser reconstruído com ID novo
                     item.cartKey = item.size ? item.id + '_' + item.size : String(item.id);
                     return item;
                   });
      saveCartToStorage();
      renderCart();
    }
  } catch (e) {
    cart = [];
  }
}

// Função única para calcular o preço de um item do carrinho (já com margem)
function getItemPrice(item) {
  const prod = allProducts.find(p => p.id === item.id);
  if (!prod) return null;
  // Se tem tamanho selecionado, usar o preço desse tamanho
  if (item.sizePreco != null) {
    return (item.sizePreco * MARGEM).toFixed(2);
  }
  // Caso contrário, usar getPrecoRevenda (que já aplica margem e volume)
  return getPrecoRevenda(prod);
}

function saveCartToStorage() {
  try {
    localStorage.setItem('produtosDaJosi_cart', JSON.stringify(cart));
  } catch (e) {}
}

function selectSize(productId, idx) {
  const p = allProducts.find(x => x.id === productId);
  if (!p || !p.tamanhos) return;
  window._modalSelectedSize = idx;
  const size = p.tamanhos[idx];
  const precoRevenda = (size.preco * MARGEM).toFixed(2).replace('.', ',');
  const valorEl = document.getElementById('modalPrecoValor');
  const labelEl = document.getElementById('modalPrecoLabel');
  if (valorEl) valorEl.textContent = 'R$ ' + precoRevenda;
  if (labelEl) labelEl.textContent = 'Pre\u00e7o /' + size.label;
  document.querySelectorAll('.size-chip').forEach(function(btn, i) {
    btn.classList.toggle('active', i === idx);
  });
}

function addToCart(id, sizeLabel, sizePreco) {
  const p = allProducts.find(x => x.id === id);
  if (!p) return;
  // Se tem tamanhos e nenhum foi passado, usar o primeiro
  if (p.tamanhos && !sizeLabel) {
    sizeLabel = p.tamanhos[0].label;
    sizePreco = p.tamanhos[0].preco;
  }
  const cartKey = sizeLabel ? id + '_' + sizeLabel : String(id);
  const existing = cart.find(x => x.cartKey === cartKey);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ id: p.id, cartKey: cartKey, nome: p.nome, marca: p.marca, categoria: p.categoria, qty: 1, size: sizeLabel || null, sizePreco: sizePreco || null });
  }
  saveCartToStorage();
  renderCart();
  openCart();
}

function changeQty(cartKey, delta) {
  const item = cart.find(x => x.cartKey === cartKey || String(x.id) === cartKey);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(x => x !== item);
  saveCartToStorage();
  renderCart();
}

function removeFromCart(cartKey) {
  const idx = cart.findIndex(x => x.cartKey === cartKey || String(x.id) === cartKey);
  if (idx > -1) cart.splice(idx, 1);
  saveCartToStorage();
  renderCart();
}

function renderCart() {
  const list = document.getElementById('cartItemsList');
  const footer = document.getElementById('cartFooter');
  const count = cart.reduce((s, x) => s + x.qty, 0);
  document.getElementById('cartCount').textContent = count;

  if (cart.length === 0) {
    list.innerHTML = '<div class="cart-empty">Seu carrinho est\u00e1 vazio.<br>Adicione produtos para continuar!</div>';
    footer.style.display = 'none';
    return;
  }

  let totalValue = 0;
  list.innerHTML = cart.map(item => {
    const icon = catIcons[item.categoria] || '\uD83E\uDDF4';
    // Resolve a imagem especifica do produto pelo id no carrinho
    // (mesma cadeia de fallbacks do renderProducts).
    const prod = allProducts.find(p => p.id === item.id);
    const realImg = (prod && prod.img)
      || (typeof perProductImages !== 'undefined' && perProductImages[item.nome])
      || (typeof realProductImages !== 'undefined' && realProductImages[item.marca + ':' + item.categoria])
      || (typeof realBrandImages !== 'undefined' && realBrandImages[item.marca])
      || (typeof realCatImages !== 'undefined' && realCatImages[item.categoria])
      || null;
    const nomeEsc = escapeHtml(item.nome);
    const marcaEsc = escapeHtml(item.marca);
    const iconEsc = escapeHtml(icon);
    const imgHtml = realImg
      ? `<img src="${escapeHtml(realImg)}" alt="${marcaEsc}" loading="lazy" decoding="async" onerror="this.replaceWith(Object.assign(document.createElement('span'),{textContent:'${iconEsc}'}))">`
      : icon;
    const preco = getItemPrice(item);
    const subtotal = preco ? (parseFloat(preco) * item.qty) : 0;
    totalValue += subtotal;
    return `
    <div class="cart-item-card">
      <div class="cart-item-icon" aria-hidden="true">${imgHtml}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${nomeEsc}${item.size ? ' <span style="color:#D97706;font-weight:800"> ' + escapeHtml(item.size) + '</span>' : ''}</div>
        <div class="cart-item-marca">${marcaEsc}${preco ? ` \u2014 R$ ${preco.replace('.', ',')}` : ''}</div>
        <div class="cart-item-qty">
          <button type="button" class="qty-btn" onclick="changeQty('${item.cartKey}',-1)" aria-label="Diminuir quantidade">\u2212</button>
          <span class="qty-num">${item.qty}</span>
          <button type="button" class="qty-btn" onclick="changeQty('${item.cartKey}',1)" aria-label="Aumentar quantidade">+</button>
        </div>
        ${subtotal > 0 ? `<div style="font-size:12px;color:#D97706;font-weight:700;margin-top:4px">Subtotal: R$ ${subtotal.toFixed(2).replace('.', ',')}</div>` : ''}
      </div>
      <button type="button" class="cart-item-remove" onclick="removeFromCart('${item.cartKey}')" aria-label="Remover ${nomeEsc}">\uD83D\uDDD1</button>
    </div>`;
  }).join('');

  const totalStr = totalValue > 0 ? `R$ ${totalValue.toFixed(2).replace('.', ',')}` : count + ' item(s)';
  document.getElementById('cartTotalLabel').textContent = totalStr;
  footer.style.display = 'block';
  updateBottomNavBadges();
  // Se o PIX estiver aberto, atualizar o QR Code com novo valor
  const pixBox = document.getElementById('pixDataBox');
  if (pixBox && pixBox.style.display === 'block') {
    mostrarPix();
  }
}

function openCart() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  drawer.classList.add('open', 'active');
  overlay.classList.add('open');
  drawer.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function toggleCart() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  const wasOpen = drawer.classList.contains('open');
  drawer.classList.toggle('open');
  drawer.classList.toggle('active');
  overlay.classList.toggle('open');
  drawer.setAttribute('aria-hidden', wasOpen ? 'true' : 'false');
  document.body.style.overflow = wasOpen ? '' : 'hidden';
}

// ============ ENVIAR COMPROVANTE PIX VIA WHATSAPP ============
function enviarComprovante() {
  const count = cart.reduce((s, x) => s + x.qty, 0);
  if (count === 0) return;

  let totalVal = 0;
  const lista = cart.map(x => {
    const preco = getItemPrice(x);
    const sub = preco ? (parseFloat(preco) * x.qty) : 0;
    totalVal += sub;
    const precoStr = preco ? ` - R$ ${preco.replace('.', ',')} un` : '';
    const sizeStr = x.size ? ' ' + x.size : '';
    return `\u2022 ${x.qty}x ${x.nome}${sizeStr} (${x.marca})${precoStr}`;
  }).join('\n');
  const totalStr = totalVal > 0 ? `R$ ${totalVal.toFixed(2).replace('.', ',')}` : '';
  const msg = encodeURIComponent(
    `Ol\u00e1! J\u00e1 realizei o pagamento via PIX.\n\n` +
    `Segue meu pedido:\n\n${lista}\n\n` +
    `Total pago: ${totalStr}\n\n` +
    `Segue o comprovante em anexo.`
  );
  const url = `https://wa.me/${STORE_CONFIG.whatsapp}?text=${msg}`;
  window.open(url, '_blank');
}

// ============ FINALIZAR VIA WHATSAPP ============
function finalizarWhatsApp() {
  const count = cart.reduce((s, x) => s + x.qty, 0);
  if (count === 0) return;

  let totalVal = 0;
  const lista = cart.map(x => {
    const preco = getItemPrice(x);
    const sub = preco ? (parseFloat(preco) * x.qty) : 0;
    totalVal += sub;
    const precoStr = preco ? ` - R$ ${preco.replace('.', ',')} un` : '';
    const sizeStr = x.size ? ' ' + x.size : '';
    return `\u2022 ${x.qty}x ${x.nome}${sizeStr} (${x.marca})${precoStr}`;
  }).join('\n');
  const totalStr = totalVal > 0 ? `\nTotal estimado: R$ ${totalVal.toFixed(2).replace('.', ',')}` : '';
  const msg = encodeURIComponent(
    `Ol\u00e1! Gostaria de fazer um pedido:\n\n${lista}\n${totalStr}\n\n` +
    `Total: ${count} item(s)\n\n` +
    `Aguardo confirma\u00e7\u00e3o. Obrigado(a)!`
  );
  const url = `https://wa.me/${STORE_CONFIG.whatsapp}?text=${msg}`;
  window.open(url, '_blank');
}

// ============ PIX ============
function mostrarPix() {
  const count = cart.reduce((s, x) => s + x.qty, 0);
  if (count === 0) return;

  let totalVal = 0;
  cart.forEach(x => {
    const preco = getItemPrice(x);
    if (preco) totalVal += parseFloat(preco) * x.qty;
  });

  const box = document.getElementById('pixDataBox');
  const totalStr = totalVal > 0 ? `R$ ${totalVal.toFixed(2).replace('.', ',')}` : 'A combinar';

  // Gerar payload PIX EMV
  const pixPayload = gerarPixPayload(STORE_CONFIG.pixChave, STORE_CONFIG.pixNome, totalVal > 0 ? totalVal.toFixed(2) : null);
  const qrUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=' + encodeURIComponent(pixPayload);

  box.style.display = 'block';
  box.innerHTML = `
    <div style="background:linear-gradient(135deg,rgba(0,200,83,0.1),rgba(0,105,92,0.1));border:1px solid rgba(0,200,83,0.3);border-radius:12px;padding:16px;margin-top:12px;text-align:center">
      <div style="font-size:14px;font-weight:800;color:#059669;margin-bottom:12px">Pagar com PIX</div>
      <div style="background:#fff;border-radius:12px;padding:12px;display:inline-block;margin-bottom:12px">
        <img src="${qrUrl}" alt="QR Code PIX" width="180" height="180" style="display:block">
      </div>
      <div style="font-size:12px;color:#6B7280;margin-bottom:4px">Nome: <strong style="color:#1E1B4B">${STORE_CONFIG.pixNome}</strong></div>
      <div style="font-size:12px;color:#6B7280;margin-bottom:12px">Valor: <strong style="color:#D97706;font-size:18px">${totalStr}</strong></div>
      <button onclick="copiarPixCopiaECola()" id="btnCopiarPix" style="width:100%;padding:10px;background:#059669;border:none;border-radius:8px;color:#1E1B4B;font-size:13px;font-weight:700;cursor:pointer;font-family:inherit">Copiar Pix Copia e Cola</button>
      <button onclick="enviarComprovante()" style="width:100%;margin-top:12px;padding:14px;background:linear-gradient(135deg,#25D366,#128C7E);border:none;border-radius:8px;color:#1E1B4B;font-size:14px;font-weight:800;cursor:pointer;font-family:inherit;display:flex;align-items:center;justify-content:center;gap:8px">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/></svg>
        Já paguei! Enviar comprovante
      </button>
    </div>`;
  // Salvar payload para copiar
  window._pixPayload = pixPayload;
}

// Gera payload PIX no formato EMV (padrão Banco Central)
function gerarPixPayload(chave, nome, valor) {
  function tlv(id, val) {
    const len = val.length.toString().padStart(2, '0');
    return id + len + val;
  }
  // Formatar CPF com 11 dígitos (zeros à esquerda)
  let chaveFormatada = chave;
  if (/^\d+$/.test(chave) && chave.length <= 11) {
    chaveFormatada = chave.padStart(11, '0');
  }
  // Merchant Account Information (chave PIX)
  const gui = tlv('00', 'br.gov.bcb.pix');
  const key = tlv('01', chaveFormatada);
  const mai = tlv('26', gui + key);
  // Campos obrigatórios
  let payload = '';
  payload += tlv('00', '01'); // Payload Format Indicator
  payload += mai; // Merchant Account Info
  payload += tlv('52', '0000'); // Merchant Category Code
  payload += tlv('53', '986'); // Transaction Currency (BRL)
  if (valor && parseFloat(valor) > 0) {
    // Valor com 2 casas decimais
    const valorStr = parseFloat(valor).toFixed(2);
    payload += tlv('54', valorStr); // Transaction Amount
  }
  payload += tlv('58', 'BR'); // Country Code
  const nomeClean = nome.substring(0, 25).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase();
  payload += tlv('59', nomeClean); // Merchant Name
  payload += tlv('60', 'CAMPINAS'); // Merchant City
  // Additional Data Field (txid)
  const addData = tlv('05', '***');
  payload += tlv('62', addData);
  // CRC16 placeholder
  payload += '6304';
  // Calcular CRC16
  const crc = crc16(payload);
  return payload + crc;
}

function crc16(str) {
  let crc = 0xFFFF;
  for (let i = 0; i < str.length; i++) {
    crc ^= str.charCodeAt(i) << 8;
    for (let j = 0; j < 8; j++) {
      if (crc & 0x8000) crc = (crc << 1) ^ 0x1021;
      else crc <<= 1;
      crc &= 0xFFFF;
    }
  }
  return crc.toString(16).toUpperCase().padStart(4, '0');
}

function copiarPixCopiaECola() {
  const payload = window._pixPayload || STORE_CONFIG.pixChave;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(payload).then(() => {
      const btn = document.getElementById('btnCopiarPix');
      if (btn) {
        btn.textContent = 'Copiado!';
        btn.style.background = '#047857';
        setTimeout(() => { btn.textContent = 'Copiar Pix Copia e Cola'; btn.style.background = '#00C853'; }, 2000);
      }
    });
  } else {
    const input = document.createElement('input');
    input.value = payload;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    alert('C\u00f3digo PIX copiado!');
  }
}

// ============ CONSULTAR PREÇO VIA WHATSAPP ============
function consultarPreco(nome, marca) {
  const msg = encodeURIComponent(
    `Ol\u00e1! Gostaria de saber o pre\u00e7o do produto:\n\n` +
    `\uD83D\uDCE6 ${nome}\n` +
    `\uD83C\uDFF7\uFE0F Marca: ${marca}\n\n` +
    `Aguardo retorno. Obrigado(a)!`
  );
  const url = `https://wa.me/${STORE_CONFIG.whatsapp}?text=${msg}`;
  window.open(url, '_blank');
}

// ============ MODAL PRODUTO ============
function abrirModal(id) {
  const p = allProducts.find(x => x.id === id);
  if (!p) return;
  const color = brandColors[p.marca] || '5B2C8E';
  const icon = catIcons[p.categoria] || '\uD83E\uDDF4';
  const realImg = p.img || (typeof perProductImages !== 'undefined' && perProductImages[p.nome]) || realProductImages[p.marca + ':' + p.categoria] || realBrandImages[p.marca] || realCatImages[p.categoria];

  document.getElementById('modalBadge').textContent = p.categoria;
  document.getElementById('modalNome').textContent = p.nome;
  document.getElementById('modalMarca').textContent = '\uD83C\uDFF7\uFE0F ' + p.marca;
  document.getElementById('modalCategoria').textContent = icon + ' ' + p.categoria;

  const imgEl = document.getElementById('modalImg');
  imgEl.style.background = `linear-gradient(135deg, #${color}33, #EDE9FE)`;
  const iconEscModal = escapeHtml(icon);
  imgEl.innerHTML = realImg
    ? `<img src="${escapeHtml(realImg)}" style="max-width:80%;max-height:180px;object-fit:contain" onerror="this.parentNode.innerHTML='<span style=font-size:80px>${iconEscModal}</span>'">`
    : `<span style="font-size:80px">${icon}</span>`;

  // Tamanhos e preço
  let selectedSize = null;
  let tamanhosHtml = '';
  let precoHtml = '';

  if (p.tamanhos && p.tamanhos.length > 0) {
    selectedSize = p.tamanhos[0];
    tamanhosHtml = `
      <div style="margin-bottom:14px">
        <div style="font-size:12px;color:#6B7280;margin-bottom:8px;font-weight:600">Escolha o tamanho:</div>
        <div class="size-chips" id="modalSizeChips">
          ${p.tamanhos.map((t, i) => `<button class="size-chip ${i === 0 ? 'active' : ''}" onclick="selectSize(${id},${i})" data-idx="${i}">${t.label}</button>`).join('')}
        </div>
      </div>`;
    const precoRevenda = (selectedSize.preco * MARGEM).toFixed(2).replace('.', ',');
    precoHtml = `<div id="modalPrecoBox" style="margin-bottom:16px;padding:14px;background:linear-gradient(135deg,rgba(217,119,6,0.08),rgba(245,158,11,0.05));border:1px solid rgba(217,119,6,0.15);border-radius:12px;text-align:center">
        <div id="modalPrecoValor" style="font-size:28px;font-weight:900;color:#D97706">R$ ${precoRevenda}</div>
        <div id="modalPrecoLabel" style="font-size:11px;color:#6B7280;margin-top:4px">Pre\u00e7o /${selectedSize.label}</div>
      </div>`;
  } else {
    const preco = getPrecoRevenda(p);
    precoHtml = preco
      ? `<div id="modalPrecoBox" style="margin-bottom:16px;padding:14px;background:linear-gradient(135deg,rgba(217,119,6,0.08),rgba(245,158,11,0.05));border:1px solid rgba(217,119,6,0.15);border-radius:12px;text-align:center">
          <div style="font-size:28px;font-weight:900;color:#D97706">R$ ${preco.replace('.', ',')}</div>
          <div style="font-size:11px;color:#6B7280;margin-top:4px">Pre\u00e7o /unidade</div>
        </div>`
      : '';
  }

  document.getElementById('modalDesc').innerHTML = `
    ${tamanhosHtml}
    ${precoHtml}
    <p style="color:#6B7280;line-height:1.7;margin-bottom:12px">${p.marca} \u2014 produto de higiene e limpeza de alta qualidade. Ideal para uso dom\u00e9stico e profissional.</p>
    <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:8px">
      <span style="background:rgba(167,139,250,0.1);border:1px solid rgba(167,139,250,0.3);padding:5px 14px;border-radius:20px;font-size:13px">${icon} ${(typeof catDisplayNames !== 'undefined' && catDisplayNames[p.categoria]) || p.categoria}</span>
      <span style="background:rgba(167,139,250,0.1);border:1px solid rgba(167,139,250,0.3);padding:5px 14px;border-radius:20px;font-size:13px">\uD83C\uDFF7\uFE0F ${p.marca}</span>
    </div>`;

  // Store current product for size selection
  window._modalProduct = p;
  window._modalSelectedSize = 0;

  document.getElementById('modalAddCart').onclick = function() {
    const sizeIdx = window._modalSelectedSize || 0;
    const size = p.tamanhos ? p.tamanhos[sizeIdx] : null;
    addToCart(id, size ? size.label : null, size ? size.preco : null);
    fecharModal();
  };


  const modal = document.getElementById('produtoModal');
  modal.classList.add('open', 'active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  // Foco no botao de fechar para acessibilidade por teclado
  const closeBtn = modal.querySelector('.modal-close');
  if (closeBtn) setTimeout(() => closeBtn.focus(), 50);
}

function fecharModal() {
  const modal = document.getElementById('produtoModal');
  modal.classList.remove('open', 'active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('produtoModal').addEventListener('click', function(e) {
    if (e.target === this) fecharModal();
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') fecharModal();
  });
});

// ============ SCROLL ANIMATIONS ============
function setupScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 50);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

  document.querySelectorAll('.animate-on-scroll:not(.visible)').forEach(el => {
    observer.observe(el);
  });
}

// ============ FAVORITOS ============
function loadFavoritesFromStorage() {
  try {
    const saved = localStorage.getItem('produtosDaJosi_favorites');
    if (saved) {
      const loaded = JSON.parse(saved);
      // Purga IDs inválidos (mudança de hash, produto removido, etc.)
      favorites = loaded.filter(id => allProducts.some(p => p.id === id));
      if (favorites.length !== loaded.length) saveFavoritesToStorage();
    }
  } catch (e) { favorites = []; }
}

function saveFavoritesToStorage() {
  try { localStorage.setItem('produtosDaJosi_favorites', JSON.stringify(favorites)); } catch (e) {}
}

function toggleFavorite(id) {
  const idx = favorites.indexOf(id);
  if (idx > -1) favorites.splice(idx, 1);
  else favorites.push(id);
  saveFavoritesToStorage();
  renderProducts();
  updateBottomNavBadges();
}

function toggleFavoritesView() {
  showingFavorites = !showingFavorites;
  if (showingFavorites) {
    filteredProducts = allProducts.filter(p => favorites.includes(p.id));
    document.getElementById('filterLabel').textContent = '- Favoritos';
    document.getElementById('combosSection').style.display = 'none';
    document.getElementById('bestsellersSection').style.display = 'none';
    const about = document.getElementById('aboutSection');
    if (about) about.style.display = 'none';
  } else {
    currentCategory = null;
    currentBrand = null;
    applyFilters();
    document.getElementById('combosSection').style.display = 'none';
    const about = document.getElementById('aboutSection');
    if (about) about.style.display = 'block';
  }
  currentPage = 1;
  renderProducts();
  updateResultsInfo();
  document.getElementById('productsSection').scrollIntoView({ behavior: 'smooth' });
}

// ============ ORDENAÇÃO ============
function applySort() {
  const sort = document.getElementById('sortSelect').value;
  if (!sort) return;
  switch (sort) {
    case 'az':
      filteredProducts.sort((a, b) => a.nome.localeCompare(b.nome));
      break;
    case 'za':
      filteredProducts.sort((a, b) => b.nome.localeCompare(a.nome));
      break;
    case 'price-asc':
      filteredProducts.sort((a, b) => {
        const pa = parseFloat(getPrecoRevenda(a) || '9999');
        const pb = parseFloat(getPrecoRevenda(b) || '9999');
        return pa - pb;
      });
      break;
    case 'price-desc':
      filteredProducts.sort((a, b) => {
        const pa = parseFloat(getPrecoRevenda(a) || '0');
        const pb = parseFloat(getPrecoRevenda(b) || '0');
        return pb - pa;
      });
      break;
    case 'brand':
      filteredProducts.sort((a, b) => a.marca.localeCompare(b.marca));
      break;
  }
  currentPage = 1;
  renderProducts();
}

// ============ MAIS VENDIDOS ============
function renderBestsellers() {
  const grid = document.getElementById('bestsellersGrid');
  if (!grid) return;
  const topBrands = ['Omo', 'Veja', 'Ypê', 'Ariel', 'Downy', 'Mr. Músculo', 'Pinho Sol', 'Cif'];
  const bestsellers = [];
  topBrands.forEach(marca => {
    const p = allProducts.find(x => x.marca === marca);
    if (p) bestsellers.push(p);
  });

  grid.innerHTML = bestsellers.map((p, i) => {
    const color = brandColors[p.marca] || '5B2C8E';
    const icon = catIcons[p.categoria] || '\uD83E\uDDF4';
    const realImg = p.img || (typeof perProductImages !== 'undefined' && perProductImages[p.nome]) || realProductImages[p.marca + ':' + p.categoria] || realBrandImages[p.marca] || realCatImages[p.categoria];
    const preco = getPrecoRevenda(p);
    const nomeEsc = escapeHtml(p.nome);
    const marcaEsc = escapeHtml(p.marca);
    const imgHtml = realImg
      ? `<img src="${escapeHtml(realImg)}" alt="${marcaEsc}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`
      + `<div class="best-fallback">${icon}</div>`
      : `<div class="best-fallback" style="display:flex">${icon}</div>`;
    const rank = i + 1;
    return `
    <article class="best-card animate-on-scroll" onclick="abrirModal(${p.id})">
      <div class="best-img">
        ${imgHtml}
        <span class="best-rank">${rank}°</span>
        <span class="best-badge" style="background:#${color}">${marcaEsc}</span>
      </div>
      <div class="best-body">
        <p class="best-name">${nomeEsc}</p>
        ${preco
          ? `<div class="best-price-row"><span class="best-price">R$ ${preco.replace('.', ',')}</span><span class="best-unit">un.</span></div>`
          : '<span class="best-consult">Consulte</span>'}
        <button class="best-add" onclick="event.stopPropagation();addToCart(${p.id})" aria-label="Adicionar ${marcaEsc}">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
          Adicionar
        </button>
      </div>
    </article>`;
  }).join('');
}

// ============ BOTTOM NAV ============
function updateBottomNavBadges() {
  const cartBadge = document.getElementById('cartCountBadge');
  const favBadge = document.getElementById('favCountBadge');
  const cartTotal = cart.reduce((s, x) => s + x.qty, 0);
  if (cartBadge) {
    cartBadge.textContent = cartTotal;
    cartBadge.style.display = cartTotal > 0 ? 'block' : 'none';
  }
  if (favBadge) {
    favBadge.textContent = favorites.length;
    favBadge.style.display = favorites.length > 0 ? 'block' : 'none';
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============ START ============
init();
