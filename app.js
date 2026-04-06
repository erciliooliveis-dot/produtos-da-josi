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

// ============ INICIALIZAÇÃO ============
function init() {
  // Combinar catalogProducts + specificProducts e atribuir IDs
  const combined = [...catalogProducts, ...specificProducts];
  combined.forEach((p, i) => { if (!p.id) p.id = i + 1; });
  allProducts = combined;
  filteredProducts = [...allProducts];

  loadCartFromStorage();
  loadFavoritesFromStorage();
  renderBestsellers();
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
  const img = realProductImages[marca + ':' + categoria] || realBrandImages[marca] || realCatImages[categoria];
  const color = brandColors[marca] || '5B2C8E';
  const icon = catIcons[categoria] || '\uD83E\uDDF4';
  if (img) {
    return `<img src="${img}" alt="${marca}" style="max-width:100%;max-height:100%;object-fit:contain" loading="lazy" onerror="this.parentNode.innerHTML='<span style=font-size:24px>${icon}</span>'">`;
  }
  return `<span style="font-size:24px">${icon}</span>`;
}

// ============ RENDER COMBOS ============
function renderCombos() {
  const grid = document.getElementById('comboGrid');
  grid.innerHTML = combos.map((combo, idx) => `
    <div class="combo-card animate-on-scroll">
      <div class="combo-header">
        <div class="combo-title">${combo.title}</div>
        <div class="combo-icon">${combo.icon}</div>
      </div>
      <div class="combo-desc">${combo.desc}</div>
      <div class="combo-products">
        ${combo.items.map(item => `
          <div class="combo-item">
            <div class="combo-item-img">
              ${getProductImg(item.marcas[0], item.categoria)}
            </div>
            <div class="combo-item-info">
              <div class="combo-item-name">${item.categoria} — <strong>${item.marcas[0]}</strong></div>
              <div class="combo-item-cat" style="font-size:11px;color:#999;margin-top:2px">Marcas: ${item.marcas.join(' · ')}</div>
            </div>
          </div>
        `).join('')}
      </div>
      <span class="combo-tag tag-${combo.tag}">${combo.tagText}</span>
      <button class="combo-add-btn" onclick="addComboToCart(${idx})">
        \uD83D\uDED2 Adicionar Combo ao Carrinho
      </button>
    </div>
  `).join('');
}

function addComboToCart(idx) {
  const combo = combos[idx];
  let added = 0;
  combo.items.forEach(item => {
    const marca = item.marcas[0];
    const p = allProducts.find(x => x.marca === marca && x.categoria === item.categoria)
            || allProducts.find(x => x.categoria === item.categoria);
    if (!p) return;
    const existing = cart.find(x => x.id === p.id);
    if (existing) { existing.qty++; }
    else { cart.push({ id: p.id, nome: p.nome, marca: p.marca, categoria: p.categoria, qty: 1 }); }
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
    cats.map(c => `<button class="tab" onclick="filterByCategory('${c}', this)">${catIcons[c] || ''} ${c}</button>`).join('');
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
    document.getElementById('combosSection').style.display = 'block';
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
    combosSection.style.display = 'block';
    productsSection.style.display = 'block';
  }
}

function applyFilters() {
  const search = document.getElementById('searchInput').value.toLowerCase();
  filteredProducts = allProducts.filter(p => {
    const matchBrand = !currentBrand || p.marca === currentBrand;
    const matchCat = !currentCategory || p.categoria === currentCategory;
    const matchSearch = !search ||
      p.nome.toLowerCase().includes(search) ||
      p.marca.toLowerCase().includes(search) ||
      p.categoria.toLowerCase().includes(search);
    return matchBrand && matchCat && matchSearch;
  });
  renderProducts();
  updateResultsInfo();
}

// ============ SEARCH ============
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('searchInput').addEventListener('input', () => {
    currentPage = 1;
    applyFilters();
  });
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
    const imgContent = realImg
      ? `<img src="${realImg}" alt="${p.marca}" style="max-width:85%;max-height:85%;object-fit:contain" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`
      + `<div style="display:none;flex-direction:column;align-items:center;gap:6px"><span style="font-size:48px">${icon}</span><span style="font-size:14px;font-weight:800;color:#${color};background:rgba(255,255,255,0.1);padding:3px 10px;border-radius:8px">${p.marca}</span></div>`
      : `<div style="display:flex;flex-direction:column;align-items:center;gap:6px"><span style="font-size:48px">${icon}</span><span style="font-size:14px;font-weight:800;color:#${color};background:rgba(255,255,255,0.1);padding:3px 10px;border-radius:8px">${p.marca}</span></div>`;
    return `
    <div class="product-card animate-on-scroll" onclick="abrirModal(${p.id})">
      <div class="product-img" style="background:linear-gradient(135deg, #${color}22, #1a1a2e)">
        ${imgContent}
        <span class="product-badge badge-marca">${p.marca}</span>
        <button class="fav-btn ${favorites.includes(p.id) ? 'active' : ''}" onclick="event.stopPropagation();toggleFavorite(${p.id})" title="Favoritar">
          <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        </button>
      </div>
      <div class="product-info">
        <div class="product-name">${p.nome}</div>
        <div class="product-marca">${p.marca}</div>
        <div class="product-categoria">${p.categoria}</div>
        ${(() => {
          if (p.tamanhos && p.tamanhos.length > 1) {
            const menor = Math.min(...p.tamanhos.map(t => t.preco));
            const precoMenor = (menor * MARGEM).toFixed(2).replace('.', ',');
            return `<div class="product-price">A partir de R$ ${precoMenor}</div><div class="product-price-label">${p.tamanhos.length} tamanhos dispon\u00edveis</div>`;
          }
          const pr = p.tamanhos ? (p.tamanhos[0].preco * MARGEM).toFixed(2) : getPrecoRevenda(p);
          return pr ? `<div class="product-price">R$ ${pr.replace('.', ',')}</div><div class="product-price-label">pre\u00e7o/un</div>` : `<div class="product-price-tag">Consulte pre\u00e7o</div>`;
        })()}
        <button class="btn-add-cart" onclick="event.stopPropagation();addToCart(${p.id})">+ Adicionar ao Carrinho</button>
      </div>
    </div>`;
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
    combosSection.style.display = 'block';
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
function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem('produtosDaJosi_cart');
    if (saved) {
      cart = JSON.parse(saved);
      renderCart();
    }
  } catch (e) {
    cart = [];
  }
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
  const cartKey = sizeLabel ? id + '_' + sizeLabel : id;
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

function changeQty(id, delta) {
  const item = cart.find(x => x.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(x => x.id !== id);
  saveCartToStorage();
  renderCart();
}

function removeFromCart(id) {
  cart = cart.filter(x => x.id !== id);
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
    const prod = allProducts.find(x => x.id === item.id);
    const preco = item.sizePreco ? (item.sizePreco * MARGEM).toFixed(2) : (prod ? getPrecoRevenda(prod) : null);
    const subtotal = preco ? (parseFloat(preco) * item.qty) : 0;
    totalValue += subtotal;
    return `
    <div class="cart-item-card">
      <div class="cart-item-icon">${icon}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.nome}${item.size ? ' <span style="color:#FFD700;font-weight:800"> ' + item.size + '</span>' : ''}</div>
        <div class="cart-item-marca">${item.marca}${preco ? ` \u2014 R$ ${preco.replace('.', ',')}` : ''}</div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="changeQty(${item.id},-1)">\u2212</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${item.id},1)">+</button>
        </div>
        ${subtotal > 0 ? `<div style="font-size:12px;color:#FFD700;font-weight:700;margin-top:4px">Subtotal: R$ ${subtotal.toFixed(2).replace('.', ',')}</div>` : ''}
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${item.id})">\uD83D\uDDD1</button>
    </div>`;
  }).join('');

  const totalStr = totalValue > 0 ? `R$ ${totalValue.toFixed(2).replace('.', ',')}` : count + ' item(s)';
  document.getElementById('cartTotalLabel').textContent = totalStr;
  footer.style.display = 'block';
  updateBottomNavBadges();
}

function openCart() {
  document.getElementById('cartDrawer').classList.add('open');
  document.getElementById('cartOverlay').classList.add('open');
}

function toggleCart() {
  document.getElementById('cartDrawer').classList.toggle('open');
  document.getElementById('cartOverlay').classList.toggle('open');
}

// ============ FINALIZAR VIA WHATSAPP ============
function finalizarWhatsApp() {
  const count = cart.reduce((s, x) => s + x.qty, 0);
  if (count === 0) return;

  let totalVal = 0;
  const lista = cart.map(x => {
    const prod = allProducts.find(p => p.id === x.id);
    const preco = prod ? getPrecoRevenda(prod) : null;
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
    const prod = allProducts.find(p => p.id === x.id);
    const preco = x.sizePreco ? (x.sizePreco * MARGEM).toFixed(2) : (prod ? getPrecoRevenda(prod) : null);
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
      <div style="font-size:14px;font-weight:800;color:#00C853;margin-bottom:12px">Pagar com PIX</div>
      <div style="background:#fff;border-radius:12px;padding:12px;display:inline-block;margin-bottom:12px">
        <img src="${qrUrl}" alt="QR Code PIX" width="180" height="180" style="display:block">
      </div>
      <div style="font-size:12px;color:#ccc;margin-bottom:4px">Nome: <strong style="color:#fff">${STORE_CONFIG.pixNome}</strong></div>
      <div style="font-size:12px;color:#ccc;margin-bottom:12px">Valor: <strong style="color:#FFD700;font-size:18px">${totalStr}</strong></div>
      <button onclick="copiarPixCopiaECola()" id="btnCopiarPix" style="width:100%;padding:10px;background:#00C853;border:none;border-radius:8px;color:#fff;font-size:13px;font-weight:700;cursor:pointer;font-family:inherit">Copiar Pix Copia e Cola</button>
      <p style="font-size:10px;color:#999;margin-top:8px">Escaneie o QR Code ou copie o codigo. Apos pagar, envie o comprovante pelo WhatsApp.</p>
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
  // Merchant Account Information (chave PIX)
  const gui = tlv('00', 'br.gov.bcb.pix');
  const key = tlv('01', chave);
  const mai = tlv('26', gui + key);
  // Campos obrigatórios
  let payload = '';
  payload += tlv('00', '01'); // Payload Format Indicator
  payload += mai; // Merchant Account Info
  payload += tlv('52', '0000'); // Merchant Category Code
  payload += tlv('53', '986'); // Transaction Currency (BRL)
  if (valor && parseFloat(valor) > 0) {
    payload += tlv('54', valor); // Transaction Amount
  }
  payload += tlv('58', 'BR'); // Country Code
  const nomeClean = nome.substring(0, 25).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase();
  payload += tlv('59', nomeClean); // Merchant Name
  payload += tlv('60', 'CAMPINAS'); // Merchant City
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
        btn.style.background = '#00695C';
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
    alert('Codigo PIX copiado!');
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
  imgEl.style.background = `linear-gradient(135deg, #${color}33, #1a1a2e)`;
  imgEl.innerHTML = realImg
    ? `<img src="${realImg}" style="max-width:80%;max-height:180px;object-fit:contain" onerror="this.parentNode.innerHTML='<span style=font-size:80px>${icon}</span>'">`
    : `<span style="font-size:80px">${icon}</span>`;

  // Tamanhos e preço
  let selectedSize = null;
  let tamanhosHtml = '';
  let precoHtml = '';

  if (p.tamanhos && p.tamanhos.length > 0) {
    selectedSize = p.tamanhos[0];
    tamanhosHtml = `
      <div style="margin-bottom:14px">
        <div style="font-size:12px;color:#ccc;margin-bottom:8px;font-weight:600">Escolha o tamanho:</div>
        <div class="size-chips" id="modalSizeChips">
          ${p.tamanhos.map((t, i) => `<button class="size-chip ${i === 0 ? 'active' : ''}" onclick="selectSize(${id},${i})" data-idx="${i}">${t.label}</button>`).join('')}
        </div>
      </div>`;
    const precoRevenda = (selectedSize.preco * MARGEM).toFixed(2).replace('.', ',');
    precoHtml = `<div id="modalPrecoBox" style="margin-bottom:16px;padding:14px;background:linear-gradient(135deg,rgba(255,215,0,0.12),rgba(255,165,0,0.08));border:1px solid rgba(255,215,0,0.3);border-radius:12px;text-align:center">
        <div id="modalPrecoValor" style="font-size:28px;font-weight:900;color:#FFD700">R$ ${precoRevenda}</div>
        <div id="modalPrecoLabel" style="font-size:11px;color:#ccc;margin-top:4px">Pre\u00e7o /${selectedSize.label}</div>
      </div>`;
  } else {
    const preco = getPrecoRevenda(p);
    precoHtml = preco
      ? `<div id="modalPrecoBox" style="margin-bottom:16px;padding:14px;background:linear-gradient(135deg,rgba(255,215,0,0.12),rgba(255,165,0,0.08));border:1px solid rgba(255,215,0,0.3);border-radius:12px;text-align:center">
          <div style="font-size:28px;font-weight:900;color:#FFD700">R$ ${preco.replace('.', ',')}</div>
          <div style="font-size:11px;color:#ccc;margin-top:4px">Pre\u00e7o /unidade</div>
        </div>`
      : '';
  }

  document.getElementById('modalDesc').innerHTML = `
    ${tamanhosHtml}
    ${precoHtml}
    <p style="color:#ccc;line-height:1.7;margin-bottom:12px">${p.marca} \u2014 produto de higiene e limpeza de alta qualidade. Ideal para uso dom\u00e9stico e profissional.</p>
    <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:8px">
      <span style="background:rgba(139,95,191,0.2);border:1px solid #8B5FBF;padding:5px 14px;border-radius:20px;font-size:13px">${icon} ${p.categoria}</span>
      <span style="background:rgba(139,95,191,0.2);border:1px solid #8B5FBF;padding:5px 14px;border-radius:20px;font-size:13px">\uD83C\uDFF7\uFE0F ${p.marca}</span>
      <span style="background:rgba(255,215,0,0.15);border:1px solid rgba(255,215,0,0.3);padding:5px 14px;border-radius:20px;font-size:13px;color:#FFD700">Distribuidora</span>
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

  document.getElementById('modalConsultarPreco').onclick = function() {
    const sizeIdx = window._modalSelectedSize || 0;
    const size = p.tamanhos ? p.tamanhos[sizeIdx] : null;
    consultarPreco(p.nome + (size ? ' ' + size.label : ''), p.marca);
  };

  const modal = document.getElementById('produtoModal');
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function fecharModal() {
  document.getElementById('produtoModal').classList.remove('open');
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
    if (saved) favorites = JSON.parse(saved);
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
    document.getElementById('combosSection').style.display = 'block';
    document.getElementById('bestsellersSection').style.display = 'block';
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

  grid.innerHTML = bestsellers.map(p => {
    const color = brandColors[p.marca] || '5B2C8E';
    const icon = catIcons[p.categoria] || '\uD83E\uDDF4';
    const realImg = p.img || (typeof perProductImages !== 'undefined' && perProductImages[p.nome]) || realProductImages[p.marca + ':' + p.categoria] || realBrandImages[p.marca] || realCatImages[p.categoria];
    const preco = getPrecoRevenda(p);
    const imgHtml = realImg
      ? `<img src="${realImg}" alt="${p.marca}" style="max-width:85%;max-height:85%;object-fit:contain" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`
      + `<div style="display:none;flex-direction:column;align-items:center;gap:4px"><span style="font-size:40px">${icon}</span></div>`
      : `<div style="display:flex;flex-direction:column;align-items:center"><span style="font-size:40px">${icon}</span></div>`;
    return `
    <div class="product-card animate-on-scroll" onclick="abrirModal(${p.id})" style="cursor:pointer">
      <div class="product-img" style="background:linear-gradient(135deg, #${color}22, #1a1a2e);height:150px">
        ${imgHtml}
        <span class="product-badge badge-marca">${p.marca}</span>
      </div>
      <div class="product-info" style="padding:12px">
        <div class="product-name" style="font-size:13px">${p.nome}</div>
        <div class="product-marca">${p.marca}</div>
        ${preco ? `<div class="product-price" style="font-size:18px">R$ ${preco.replace('.', ',')}</div>` : ''}
        <button class="btn-add-cart" onclick="event.stopPropagation();addToCart(${p.id})" style="font-size:11px;padding:7px">+ Carrinho</button>
      </div>
    </div>`;
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
