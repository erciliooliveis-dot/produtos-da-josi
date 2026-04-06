// ============================================================
// DATA.JS — Dados de produtos, combos, imagens e configurações
// Produtos da Josi — Distribuidora de Higiene e Limpeza
// ============================================================

// ============ CONFIGURAÇÃO DA LOJA ============
const STORE_CONFIG = {
  name: 'Produtos da Josi',
  slogan: 'Distribuidora de Produtos de Higiene e Limpeza',
  whatsapp: '5519999999999', // PLACEHOLDER — trocar pelo número real
  email: 'contato@produtosdajosi.com.br',
  telefone: '(19) 99999-9999',
  regiao: 'Campinas e Região',
  horario: 'Seg a Sex: 8h às 18h | Sáb: 8h às 13h',
  endereco: 'Campinas - SP',
};

// ============ ÍCONES POR CATEGORIA ============
const catIcons = {
  'Limpador multiuso': '\uD83E\uDDF9',
  'Sabao em po': '\uD83E\uDDFC',
  'Sabão em pó': '\uD83E\uDDFC',
  'Detergente': '\uD83E\uDDF4',
  'Amaciante': '\uD83C\uDF38',
  'Desinfetante': '\uD83E\uDDA0',
  'Desengordurante': '\uD83D\uDCA7',
  'Limpa vidro': '\u2728',
  'Alvejante': '\u2604\uFE0F',
  'Saponáceo': '\uD83E\uDDF1',
  'Saponaceo': '\uD83E\uDDF1',
  'Lava roupas': '\uD83D\uDC55',
  'Limpador banheiro': '\uD83D\uDEBF',
  'Limpador cozinha': '\uD83C\uDF73',
  'Aromatizador': '\uD83C\uDF3A',
  'Esponja': '\uD83E\uDDFD',
  'Produto profissional': '\u2699\uFE0F'
};

// ============ IMAGENS POR CATEGORIA ============
// Imagens de categoria REMOVIDAS - produtos sem foto própria mostram ícone da categoria
const realCatImages = {
};

// ============ IMAGENS POR MARCA+CATEGORIA ============
const realProductImages = {};

// ============ IMAGENS POR PRODUTO ESPECÍFICO ============
// Lookup por nome exato do produto para imagens individuais
// URLs verificadas do Atacadão (atacadaobr.vtexassets.com) e Carrefour (carrefourbrfood.vtexassets.com)
const perProductImages = {};

// ============ IMAGENS POR MARCA (fallback) ============
// NOTA: Marcas sem entrada aqui usam fallback por CATEGORIA (realCatImages)
// o que é melhor pois mostra imagens diferentes por tipo de produto
const realBrandImages = {
  'Veja':        '',
  'Omo':         '',
  'Ypê':         '',
  'Ype':         '',
  'Bombril':     '',
  'Minuano':     '',
  'Brilhante':   '',
  'Pinho Sol':   '',
  'Ajax':        '',
  'Ariel':       '',
  'Downy':       '',
  'Cif':         '',
  'Mr. Musculo': '',
  'Mr. Músculo': '',
  'Lysol':       '',
  'Comfort':     '',
  'Diversey':    '',
  'Urca':        '',
  'Zupp':        '',
  'Renko':       '',
  'Girando Sol': '',
  'Spartan':     '',
  'Casa KM':     '',
  'Start':       ''
};

// ============ CORES DAS MARCAS ============
const brandColors = {
  'Veja': '0066CC', 'Omo': 'E31837', 'Ypê': '00A651', 'Ype': '00A651',
  'Bombril': 'FFD700', 'Minuano': '0099CC', 'Brilhante': 'FF6600',
  'Ariel': '003DA5', 'Downy': '6B3FA0', 'Comfort': '1E88E5',
  'Pinho Sol': '8B4513', 'Lysol': '7B2D8B', 'Ajax': 'CC0000',
  'Cif': '4CAF50', 'Mr. Musculo': 'FF8C00', 'Mr. Músculo': 'FF8C00',
  'Start': '333399', 'Urca': '009688', 'Zupp': '4A90D9',
  'Girando Sol': 'FF5722', 'Casa KM': '795548', 'Spartan': '1565C0',
  'Diversey': '00695C', 'Renko': '283593'
};

// ============ COMBOS ============
const combos = [
  {
    title: 'Combo Cozinha Completa',
    icon: '\uD83C\uDF73',
    desc: 'Tudo para manter sua cozinha impecável: desengordurante, detergente, limpador e saponáceo.',
    tag: 'popular',
    tagText: 'Mais Vendido',
    items: [
      { categoria: 'Desengordurante', marcas: ['Mr. Músculo', 'Veja', 'Cif'] },
      { categoria: 'Detergente',      marcas: ['Ypê', 'Minuano', 'Start'] },
      { categoria: 'Limpador cozinha',marcas: ['Ajax', 'Cif', 'Veja'] },
      { categoria: 'Saponáceo',       marcas: ['Bombril', 'Cif', 'Ajax'] }
    ]
  },
  {
    title: 'Combo Banheiro Brilhante',
    icon: '\uD83D\uDEBF',
    desc: 'Desinfetante, limpador de banheiro e limpa vidro para um banheiro sempre limpo.',
    tag: 'popular',
    tagText: 'Mais Vendido',
    items: [
      { categoria: 'Desinfetante',     marcas: ['Pinho Sol', 'Lysol', 'Veja'] },
      { categoria: 'Limpador banheiro',marcas: ['Mr. Músculo', 'Cif', 'Ajax'] },
      { categoria: 'Limpa vidro',      marcas: ['Veja', 'Mr. Músculo', 'Renko'] },
      { categoria: 'Aromatizador',     marcas: ['Pinho Sol', 'Lysol'] }
    ]
  },
  {
    title: 'Combo Lavanderia Premium',
    icon: '\uD83D\uDC55',
    desc: 'Sabão em pó, lava roupas, amaciante e alvejante das melhores marcas.',
    tag: 'premium',
    tagText: 'Premium',
    items: [
      { categoria: 'Sabão em pó', marcas: ['Omo', 'Ariel', 'Brilhante'] },
      { categoria: 'Lava roupas', marcas: ['Omo', 'Ypê', 'Girando Sol'] },
      { categoria: 'Amaciante',   marcas: ['Downy', 'Comfort', 'Ypê'] },
      { categoria: 'Alvejante',   marcas: ['Ypê', 'Bombril', 'Zupp'] }
    ]
  },
  {
    title: 'Combo Limpeza Geral',
    icon: '\uD83E\uDDF9',
    desc: 'Limpador multiuso, desinfetante e limpa vidro para toda a casa.',
    tag: 'economia',
    tagText: 'Melhor Custo',
    items: [
      { categoria: 'Limpador multiuso', marcas: ['Veja', 'Ajax', 'Ypê'] },
      { categoria: 'Desinfetante',      marcas: ['Pinho Sol', 'Lysol', 'Zupp'] },
      { categoria: 'Limpa vidro',       marcas: ['Veja', 'Mr. Músculo', 'Renko'] },
      { categoria: 'Desengordurante',   marcas: ['Mr. Músculo', 'Cif', 'Veja'] }
    ]
  },
  {
    title: 'Combo Profissional',
    icon: '\u2699\uFE0F',
    desc: 'Produtos profissionais de alta performance para limpeza comercial e industrial.',
    tag: 'premium',
    tagText: 'Profissional',
    items: [
      { categoria: 'Produto profissional', marcas: ['Spartan', 'Diversey', 'Renko'] },
      { categoria: 'Desengordurante',      marcas: ['Spartan', 'Diversey', 'Renko'] },
      { categoria: 'Desinfetante',         marcas: ['Diversey', 'Renko', 'Start'] },
      { categoria: 'Limpador multiuso',    marcas: ['Renko', 'Spartan', 'Start'] }
    ]
  },
  {
    title: 'Combo Economia Doméstica',
    icon: '\uD83C\uDFE0',
    desc: 'Kit completo com marcas populares de ótimo custo-benefício para o dia a dia.',
    tag: 'economia',
    tagText: 'Economia',
    items: [
      { categoria: 'Detergente',   marcas: ['Ypê', 'Minuano', 'Girando Sol'] },
      { categoria: 'Sabão em pó',  marcas: ['Brilhante', 'Minuano', 'Girando Sol'] },
      { categoria: 'Desinfetante', marcas: ['Casa KM', 'Zupp', 'Start'] },
      { categoria: 'Amaciante',    marcas: ['Girando Sol', 'Downy', 'Comfort'] }
    ]
  },
  {
    title: 'Combo Vidros e Superfícies',
    icon: '\u2728',
    desc: 'Especializado em limpar vidros, espelhos e superfícies delicadas sem manchas.',
    tag: 'popular',
    tagText: 'Especialista',
    items: [
      { categoria: 'Limpa vidro',       marcas: ['Veja', 'Mr. Músculo', 'Renko'] },
      { categoria: 'Limpador multiuso', marcas: ['Ajax', 'Cif', 'Veja'] },
      { categoria: 'Saponáceo',         marcas: ['Cif', 'Ajax', 'Bombril'] }
    ]
  },
  {
    title: 'Combo Roupas Delicadas',
    icon: '\uD83C\uDF38',
    desc: 'Produtos suaves para roupas delicadas: lava roupas neutro, amaciante concentrado e alvejante sem cloro.',
    tag: 'premium',
    tagText: 'Cuidado Especial',
    items: [
      { categoria: 'Lava roupas', marcas: ['Downy', 'Comfort', 'Ariel'] },
      { categoria: 'Amaciante', marcas: ['Downy', 'Comfort', 'Brilhante'] },
      { categoria: 'Alvejante', marcas: ['Ariel', 'Brilhante', 'Omo'] }
    ]
  },
  {
    title: 'Combo Dia de Faxina',
    icon: '\uD83D\uDCAA',
    desc: 'O kit completo para aquela faxina pesada: todos os produtos essenciais.',
    tag: 'popular',
    tagText: 'Kit Completo',
    items: [
      { categoria: 'Limpador multiuso', marcas: ['Veja', 'Ajax', 'Mr. Músculo'] },
      { categoria: 'Desengordurante', marcas: ['Mr. Músculo', 'Veja', 'Cif'] },
      { categoria: 'Limpador banheiro', marcas: ['Cif', 'Mr. Músculo', 'Ajax'] },
      { categoria: 'Limpador cozinha', marcas: ['Mr. Músculo', 'Cif', 'Veja'] },
      { categoria: 'Desinfetante', marcas: ['Pinho Sol', 'Lysol', 'Veja'] }
    ]
  },
  {
    title: 'Combo Casa Perfumada',
    icon: '\uD83C\uDF3A',
    desc: 'Aromatizadores, amaciantes e desinfetantes perfumados para cada cantinho.',
    tag: 'economia',
    tagText: 'Fragrâncias',
    items: [
      { categoria: 'Aromatizador', marcas: ['Comfort', 'Downy', 'Brilhante'] },
      { categoria: 'Amaciante', marcas: ['Downy', 'Comfort', 'Brilhante'] },
      { categoria: 'Desinfetante', marcas: ['Pinho Sol', 'Lysol', 'Minuano'] }
    ]
  }
];

// ============ PRODUTOS ZUPP (ESPECÍFICOS) ============
const _base = 'https://www.zuppani.ind.br/static/arquivos/';
const specificProducts = [
  { id:9001, nome:'Esponja Dupla Face Zupp',          marca:'Zupp', categoria:'Saponáceo',          img:_base+'destaque-esponja-dupla-face-18916103.png' },
  { id:9002, nome:'Óleos e Essências Zupp 120ml',     marca:'Zupp', categoria:'Aromatizador',        img:_base+'essencia-floral-003714.png' },
  { id:9003, nome:'Desinfetante Zupp 500ml',          marca:'Zupp', categoria:'Desinfetante',        img:_base+'desinfetante-500ml-destaque-1915525.png' },
  { id:9004, nome:'Álcool Limpador Pesado Zupp',      marca:'Zupp', categoria:'Limpador multiuso',   img:_base+'alcool-191112114-1-214294.png' },
  { id:9005, nome:'Limpador Perfumado Zupp 500ml',    marca:'Zupp', categoria:'Limpador multiuso',   img:_base+'bem-estar-lavanda-500ml-1715101614.png' },
  { id:9006, nome:'Multiuso Power Zupp',              marca:'Zupp', categoria:'Limpador multiuso',   img:_base+'mockup-multiuso-power-131061518.png' },
  { id:9007, nome:'Limpa Vidros Zupp 500ml',          marca:'Zupp', categoria:'Limpa vidro',         img:_base+'limpa-vidros-gatilho-500ml-1811152.jpg' },
  { id:9008, nome:'Tira Limo Zupp',                   marca:'Zupp', categoria:'Limpador multiuso',   img:_base+'produto-zuppani-tira-limo-317590.png' },
  { id:9009, nome:'Detergente Zupp 500ml',            marca:'Zupp', categoria:'Detergente',          img:_base+'detergente-clear-10113145.png' },
  { id:9010, nome:'Água Sanitária Zupp 1L',           marca:'Zupp', categoria:'Alvejante',           img:_base+'agua-sanitaria-1l-10771919.png' },
  { id:9011, nome:'Alvejante Zupp 1L',                marca:'Zupp', categoria:'Alvejante',           img:_base+'mockup-alvejante-floral-zuppani-1l-1411552.png' },
  { id:9012, nome:'Esponja de Aço Inox Zupp',         marca:'Zupp', categoria:'Saponáceo',          img:_base+'esponja-de-aco-final-1-compressed-40151319.jpg' },
  { id:9013, nome:'Detergente Zupplin 1L',            marca:'Zupp', categoria:'Detergente',          img:_base+'produto-zuppani-detergente-zupplin-1l-112312.png' },
  { id:9014, nome:'Sabão em Barra Zupp 1kg',          marca:'Zupp', categoria:'Sabão em pó',         img:_base+'sabao-zupp-em-barra-glicerinado-1-kg-785121.jpg' },
  { id:9015, nome:'Limpa Inox Zupp',                  marca:'Zupp', categoria:'Limpador multiuso',   img:_base+'produto-zuppani-limpa-inox-71491512.png' },
  { id:9016, nome:'Amaciante Zupp 1,8L',              marca:'Zupp', categoria:'Amaciante',           img:_base+'romantico-318674-1273109.jpg' },
  { id:9017, nome:'Lava Louças em Pasta Zupp 500g',   marca:'Zupp', categoria:'Detergente',          img:_base+'lava-louca-500g-31116103.jpg' },
  { id:9018, nome:'Amaciante Zupp 5L',                marca:'Zupp', categoria:'Amaciante',           img:_base+'amaciante-conforto5l-copy-181261718.jpg' },
  { id:9019, nome:'Detergente Zupplin 5L',            marca:'Zupp', categoria:'Detergente',          img:_base+'zupplin-5l-14210814.png' },
  { id:9020, nome:'Água Sanitária Zupp 2L',           marca:'Zupp', categoria:'Alvejante',           img:_base+'agua-sanitaria-2l-31017815.png' },
  { id:9021, nome:'Esponja Antiaderente Zupp',        marca:'Zupp', categoria:'Saponáceo',          img:_base+'destaque-zuppani-esponja-antiaderente-15311415.png' },
  { id:9022, nome:'Limpador Perfumes e Encanto Zupp 1L', marca:'Zupp', categoria:'Limpador multiuso', img:_base+'bem-estar-lavanda-1l-1051942.png' },
  { id:9023, nome:'Lava Louças em Pasta Zupp 200g',   marca:'Zupp', categoria:'Detergente',          img:_base+'lava-louca200g-031429.jpg' },
  { id:9024, nome:'Detergente Zupp 5L',               marca:'Zupp', categoria:'Detergente',          img:_base+'detergente-neutro-561819.jpg' },
  { id:9025, nome:'Desinfetante Zupp 1L',             marca:'Zupp', categoria:'Desinfetante',        img:_base+'destaque-1l-16171610.png' },
  { id:9026, nome:'Água Sanitária Zupp 5L',           marca:'Zupp', categoria:'Alvejante',           img:_base+'agua-sanitaria-zupp-5l-19619141.png' },
  { id:9027, nome:'Esponja Lã de Aço Zupp',           marca:'Zupp', categoria:'Saponáceo',          img:_base+'mockup-esponja-la-aco-15901510.png' },
  { id:9028, nome:'Desinfetante Zupp 2L',             marca:'Zupp', categoria:'Desinfetante',        img:_base+'desinfetante-2l-destaque-101113194.png' },
];

// ============ PREÇOS DE REVENDA (varejo + 10%) ============
const MARGEM = 1.10;

const precosBase = {
  "Veja:Limpador multiuso": 7.99, "Veja:Desinfetante": 8.49, "Veja:Limpa vidro": 8.99,
  "Veja:Limpador banheiro": 12.90, "Veja:Desengordurante": 10.90, "Veja:Limpador cozinha": 10.90,
  "Omo:Sabão em pó": 14.90, "Omo:Lava roupas": 18.90,
  "Ypê:Detergente": 2.99, "Ypê:Desinfetante": 5.49, "Ypê:Limpador multiuso": 4.99,
  "Ypê:Lava roupas": 9.90, "Ypê:Sabão em pó": 8.90, "Ypê:Alvejante": 5.99, "Ypê:Amaciante": 7.49,
  "Bombril:Saponáceo": 4.99, "Bombril:Limpador multiuso": 5.49,
  "Minuano:Detergente": 1.99, "Minuano:Sabão em pó": 5.49, "Minuano:Amaciante": 6.99, "Minuano:Desinfetante": 4.49,
  "Brilhante:Sabão em pó": 9.90, "Brilhante:Lava roupas": 13.90, "Brilhante:Amaciante": 8.90, "Brilhante:Alvejante": 6.90,
  "Ariel:Sabão em pó": 16.90, "Ariel:Lava roupas": 22.90,
  "Downy:Amaciante": 14.90,
  "Comfort:Amaciante": 12.90, "Comfort:Aromatizador": 14.90,
  "Pinho Sol:Desinfetante": 6.90, "Pinho Sol:Limpador multiuso": 7.49, "Pinho Sol:Aromatizador": 8.90,
  "Lysol:Desinfetante": 14.90, "Lysol:Limpador banheiro": 16.90, "Lysol:Aromatizador": 15.90,
  "Ajax:Limpador multiuso": 5.90, "Ajax:Desengordurante": 10.99, "Ajax:Limpa vidro": 6.90,
  "Ajax:Limpador banheiro": 9.90, "Ajax:Limpador cozinha": 10.90,
  "Cif:Saponáceo": 8.99, "Cif:Limpador multiuso": 7.49, "Cif:Desengordurante": 12.90,
  "Cif:Limpador banheiro": 12.90, "Cif:Limpador cozinha": 12.90,
  "Mr. Músculo:Desengordurante": 13.99, "Mr. Músculo:Limpador banheiro": 14.90,
  "Mr. Músculo:Limpador cozinha": 13.99, "Mr. Músculo:Limpa vidro": 12.90,
  "Start:Detergente": 2.49, "Start:Desinfetante": 4.49, "Start:Limpador multiuso": 4.99,
  "Urca:Sabão em pó": 5.49, "Urca:Lava roupas": 7.90, "Urca:Amaciante": 5.99,
  "Urca:Desinfetante": 4.90, "Urca:Detergente": 3.99, "Urca:Limpador multiuso": 5.49,
  "Urca:Limpa vidro": 5.99, "Urca:Alvejante": 4.49, "Urca:Saponáceo": 4.49,
  "Girando Sol:Detergente": 2.49, "Girando Sol:Lava roupas": 8.90, "Girando Sol:Amaciante": 6.90, "Girando Sol:Sabão em pó": 5.99,
  "Girando Sol:Desinfetante": 5.49, "Girando Sol:Alvejante": 4.99, "Girando Sol:Limpador multiuso": 5.49,
  "Girando Sol:Limpador banheiro": 6.49, "Girando Sol:Saponáceo": 4.49,
  "Casa KM:Desinfetante": 5.49, "Casa KM:Limpador multiuso": 5.99,
  "Spartan:Produto profissional": 32.90, "Spartan:Desengordurante": 32.30, "Spartan:Desinfetante": 28.90, "Spartan:Limpador multiuso": 26.90,
  "Diversey:Produto profissional": 35.90, "Diversey:Desengordurante": 34.90, "Diversey:Desinfetante": 32.90,
  "Renko:Limpa vidro": 29.90, "Renko:Desinfetante": 28.90, "Renko:Limpador multiuso": 26.90, "Renko:Produto profissional": 32.90,
  "Renko:Desengordurante": 28.90, "Renko:Aromatizador": 24.90,
  "Omo:Alvejante": 9.90,
  "Bombril:Desinfetante": 4.99, "Bombril:Detergente": 2.99, "Bombril:Amaciante": 7.99, "Bombril:Esponja": 3.49,
  "Ajax:Desinfetante": 6.90,
  "Cif:Limpa vidro": 9.90, "Cif:Desengordurante": 12.90,
  "Mr. Músculo:Limpador multiuso": 13.99,
  "Minuano:Limpador multiuso": 4.99, "Minuano:Limpa vidro": 5.49, "Minuano:Sabão em pó": 5.49,
  "Ypê:Limpa vidro": 5.99, "Ypê:Limpador banheiro": 6.90,
  "Lysol:Limpador banheiro": 16.90,
  "Downy:Aromatizador": 14.90,
  "Start:Desengordurante": 5.49, "Start:Saponáceo": 4.49, "Start:Limpador banheiro": 5.99,
  "Start:Lava roupas": 9.90, "Start:Amaciante": 7.90, "Start:Alvejante": 4.49,
  "Diversey:Detergente": 24.90, "Diversey:Limpador multiuso": 28.90, "Diversey:Amaciante": 34.90, "Diversey:Alvejante": 32.90,
  "Spartan:Limpador multiuso": 26.90,
};

// Preços específicos Zupp (id: preço)
const precosZupp = {
  9001: 3.49, 9002: 10.44, 9003: 4.95, 9004: 6.99, 9005: 7.69, 9006: 5.29,
  9007: 10.69, 9008: 9.49, 9009: 2.89, 9010: 5.99, 9011: 7.49, 9012: 3.99,
  9013: 8.90, 9014: 6.49, 9015: 9.19, 9016: 15.90, 9017: 13.69, 9018: 34.90,
  9019: 29.90, 9020: 9.49, 9021: 7.19, 9022: 12.29, 9023: 7.59, 9024: 14.90,
  9025: 5.98, 9026: 18.90, 9027: 3.29, 9028: 9.89,
};

// Função para obter preço de revenda (base + 10%)
function getPrecoRevenda(produto) {
  const key = produto.marca + ':' + produto.categoria;
  const base = precosZupp[produto.id] || precosBase[key];
  if (!base) return null;
  return (base * MARGEM).toFixed(2);
}

// ============ CATÁLOGO COMPLETO DE PRODUTOS ============
const catalogProducts = [
  // ──────────── AJAX ────────────
  { nome: 'Ajax Multiuso Original 500ml', marca: 'Ajax', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/992318/m.jpg' },
  { nome: 'Ajax Multiuso Lavanda com Álcool 500ml', marca: 'Ajax', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1279578/p.jpg.jpg' },
  { nome: 'Ajax Fresh Original 500ml', marca: 'Ajax', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/907043/g.jpg' },
  { nome: 'Ajax Fresh Limão 500ml', marca: 'Ajax', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/907047/p.jpg' },
  { nome: 'Ajax Fresh Poder 500ml', marca: 'Ajax', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/907043/g.jpg' },
  { nome: 'Ajax Festa das Flores Bouquet de Flores 500ml', marca: 'Ajax', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1279441/m.jpg.jpg' },
  { nome: 'Ajax Festa das Flores Flores do Campo 500ml', marca: 'Ajax', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/908025/p.jpg' },
  { nome: 'Ajax Festa das Flores Flores de Lavanda 500ml', marca: 'Ajax', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1279578/p.jpg.jpg' },
  { nome: 'Ajax Festa das Flores Mar de Flores 500ml', marca: 'Ajax', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1279441/m.jpg.jpg' },
  { nome: 'Ajax Limpeza Pura Menta e Orquídea 500ml', marca: 'Ajax', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1279441/m.jpg.jpg' },
  { nome: 'Ajax Natural Essentials Lavanda 500ml', marca: 'Ajax', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1279578/p.jpg.jpg' },
  { nome: 'Ajax Natural Essentials Eucalipto e Citrus 500ml', marca: 'Ajax', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/907043/g.jpg' },
  { nome: 'Ajax Alternativa ao Cloro Floral 500ml', marca: 'Ajax', categoria: 'Desinfetante', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1279441/m.jpg.jpg' },
  { nome: 'Ajax Desengordurante Cozinha 500ml', marca: 'Ajax', categoria: 'Desengordurante', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/907047/p.jpg' },
  { nome: 'Ajax Limpador Banheiro 500ml', marca: 'Ajax', categoria: 'Limpador banheiro', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/907043/g.jpg' },
  { nome: 'Ajax Limpador Cozinha 500ml', marca: 'Ajax', categoria: 'Limpador cozinha', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/907043/g.jpg' },
  { nome: 'Ajax Limpa Vidros 500ml', marca: 'Ajax', categoria: 'Limpa vidro', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/907043/g.jpg' },

  // ──────────── ARIEL ────────────
  { nome: 'Ariel Sabão Líquido Expert Concentrado 3L', marca: 'Ariel', categoria: 'Lava roupas', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1144554/p.jpg' },
  { nome: 'Ariel Sabão Líquido Expert Concentrado 2L', marca: 'Ariel', categoria: 'Lava roupas', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1144554/p.jpg' },
  { nome: 'Ariel Sabão Líquido Expert Concentrado 1,2L', marca: 'Ariel', categoria: 'Lava roupas', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1151370/g.jpg' },
  { nome: 'Ariel Sabão Líquido 3 em 1 1,2L', marca: 'Ariel', categoria: 'Lava roupas', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1151370/g.jpg' },
  { nome: 'Ariel Sabão Líquido Toque de Downy 2L', marca: 'Ariel', categoria: 'Lava roupas', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1148575/p.jpg' },
  { nome: 'Ariel Sabão Líquido Cores Radiantes 2L', marca: 'Ariel', categoria: 'Lava roupas', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1146388/g.jpg' },
  { nome: 'Ariel Sabão Líquido Cores Radiantes Toque de Downy 2L', marca: 'Ariel', categoria: 'Lava roupas', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1148575/p.jpg' },
  { nome: 'Ariel Sabão Líquido Hipoalergênico Suave e Gentil 2L', marca: 'Ariel', categoria: 'Lava roupas', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1158502/p.jpg' },
  { nome: 'Ariel Sabão em Pó Expert 1,6kg', marca: 'Ariel', categoria: 'Sabão em pó', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/979613/p.jpg' },
  { nome: 'Ariel Sabão em Pó Expert 800g', marca: 'Ariel', categoria: 'Sabão em pó', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/979613/p.jpg' },
  { nome: 'Ariel Power Pods 3 em 1 Cápsulas', marca: 'Ariel', categoria: 'Lava roupas', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1151370/g.jpg' },

  // ──────────── BOMBRIL ────────────
  { nome: 'Esponja de Lã de Aço Bombril 60g', marca: 'Bombril', categoria: 'Esponja', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/971114/m.jpg' },
  { nome: 'Esponja Multiuso Amarela Bombril', marca: 'Bombril', categoria: 'Esponja', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1145746/m.jpg' },
  { nome: 'Esponja Sintética Bombril', marca: 'Bombril', categoria: 'Esponja', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1145746/m.jpg' },
  { nome: 'Sapólio Radium Cremoso Original 250ml', marca: 'Bombril', categoria: 'Saponáceo', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1156985/m.jpg' },
  { nome: 'Sapólio Radium Cremoso Cloro 250ml', marca: 'Bombril', categoria: 'Saponáceo', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1142013/m.jpg' },
  { nome: 'Sapólio Radium Cremoso Limão 250ml', marca: 'Bombril', categoria: 'Saponáceo', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1156985/m.jpg' },
  { nome: 'Sapólio Radium Cremoso Laranja 250ml', marca: 'Bombril', categoria: 'Saponáceo', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1156985/m.jpg' },
  { nome: 'Sapólio Radium Cremoso Limpa Inox 250ml', marca: 'Bombril', categoria: 'Saponáceo', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1156985/m.jpg' },
  { nome: 'Sapólio Radium Cremoso Multiuso Clássico 450ml', marca: 'Bombril', categoria: 'Saponáceo', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1156985/m.jpg' },
  { nome: 'Sapólio Radium em Pó Clássico 300g', marca: 'Bombril', categoria: 'Saponáceo', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1142013/m.jpg' },
  { nome: 'Sapólio Radium em Pó Limão 300g', marca: 'Bombril', categoria: 'Saponáceo', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1142013/m.jpg' },
  { nome: 'Pinho Bril Desinfetante Original 500ml', marca: 'Bombril', categoria: 'Desinfetante' },
  { nome: 'Pinho Bril Desinfetante Lavanda 500ml', marca: 'Bombril', categoria: 'Desinfetante' },
  { nome: 'Pinho Bril Desinfetante Brisa do Mar 500ml', marca: 'Bombril', categoria: 'Desinfetante' },
  { nome: 'Pinho Bril Desinfetante Floral 500ml', marca: 'Bombril', categoria: 'Desinfetante' },
  { nome: 'Limpol Detergente Neutro 500ml', marca: 'Bombril', categoria: 'Detergente', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/971405/p.jpg' },
  { nome: 'Limpol Detergente Limão 500ml', marca: 'Bombril', categoria: 'Detergente', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1140757/g.jpg' },
  { nome: 'Limpol Detergente Coco 500ml', marca: 'Bombril', categoria: 'Detergente', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/973375/g.jpg' },
  { nome: 'Mon Bijou Amaciante Concentrado 500ml', marca: 'Bombril', categoria: 'Amaciante' },
  { nome: 'Mon Bijou Amaciante Diluído 2L', marca: 'Bombril', categoria: 'Amaciante' },

  // ──────────── BRILHANTE ────────────
  { nome: 'Brilhante Sabão em Pó Limpeza Total 800g', marca: 'Brilhante', categoria: 'Sabão em pó' },
  { nome: 'Brilhante Sabão em Pó Limpeza Total 1,6kg', marca: 'Brilhante', categoria: 'Sabão em pó' },
  { nome: 'Brilhante Sabão em Pó Cuidado Total 800g', marca: 'Brilhante', categoria: 'Sabão em pó' },
  { nome: 'Brilhante Sabão em Pó Cuidado Total 1,6kg', marca: 'Brilhante', categoria: 'Sabão em pó' },
  { nome: 'Brilhante Sabão em Pó Sem Perfume Ação Total 800g', marca: 'Brilhante', categoria: 'Sabão em pó' },
  { nome: 'Brilhante Sabão em Pó Higiene Total 800g', marca: 'Brilhante', categoria: 'Sabão em pó' },
  { nome: 'Brilhante Sabão Líquido Limpeza Total 1L', marca: 'Brilhante', categoria: 'Lava roupas' },
  { nome: 'Brilhante Sabão Líquido Limpeza Total 3L', marca: 'Brilhante', categoria: 'Lava roupas' },
  { nome: 'Brilhante Sabão Líquido Ação Total Sem Perfume 1L', marca: 'Brilhante', categoria: 'Lava roupas' },
  { nome: 'Brilhante Sanitizante Higiene Total 1L', marca: 'Brilhante', categoria: 'Lava roupas' },
  { nome: 'Brilhante Tira Manchas Utile Antibac Líquido 2L', marca: 'Brilhante', categoria: 'Alvejante' },
  { nome: 'Brilhante Tira Manchas Utile Fresh Líquido 2L', marca: 'Brilhante', categoria: 'Alvejante' },
  { nome: 'Brilhante Tira Manchas Utile Floral Líquido 2L', marca: 'Brilhante', categoria: 'Alvejante' },
  { nome: 'Brilhante Tira Manchas Utile Fresh em Pó 380g', marca: 'Brilhante', categoria: 'Alvejante' },
  { nome: 'Brilhante Tira Manchas Utile Floral em Pó 380g', marca: 'Brilhante', categoria: 'Alvejante' },
  { nome: 'Brilhante Alvejante Cloro Ativo Fresh 1L', marca: 'Brilhante', categoria: 'Alvejante' },
  { nome: 'Brilhante Lava Roupas em Pó Profissional 4kg', marca: 'Brilhante', categoria: 'Sabão em pó' },

  // ──────────── CASA KM ────────────
  { nome: 'Casa KM Casa & Perfume Multiuso Agradable 500ml', marca: 'Casa KM', categoria: 'Limpador multiuso' },
  { nome: 'Casa KM Casa & Perfume Multiuso Agradable 1L', marca: 'Casa KM', categoria: 'Limpador multiuso' },
  { nome: 'Casa KM Casa & Perfume Multiuso Envolvente 500ml', marca: 'Casa KM', categoria: 'Limpador multiuso' },
  { nome: 'Casa KM Casa & Perfume Multiuso Sensações 500ml', marca: 'Casa KM', categoria: 'Limpador multiuso' },
  { nome: 'Casa KM Casa & Cuidado Desinfetante Brisa Serena 500ml', marca: 'Casa KM', categoria: 'Desinfetante' },
  { nome: 'Casa KM Casa & Cuidado Desinfetante Flores do Campo 500ml', marca: 'Casa KM', categoria: 'Desinfetante' },
  { nome: 'Casa KM Casa & Cuidado Desinfetante Original 500ml', marca: 'Casa KM', categoria: 'Desinfetante' },
  { nome: 'Casa KM Limpador Perfumado Concentrado 500ml', marca: 'Casa KM', categoria: 'Limpador multiuso' },

  // ──────────── CIF ────────────
  { nome: 'Cif Cremoso Original 250ml', marca: 'Cif', categoria: 'Saponáceo', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/985110/m.jpg' },
  { nome: 'Cif Cremoso Original 450ml', marca: 'Cif', categoria: 'Saponáceo', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/985110/m.jpg' },
  { nome: 'Cif Cremoso Limão 250ml', marca: 'Cif', categoria: 'Saponáceo', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1156231/p.jpg' },
  { nome: 'Cif Cremoso Limão 450ml', marca: 'Cif', categoria: 'Saponáceo', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1156231/p.jpg' },
  { nome: 'Cif Cremoso Laranja 250ml', marca: 'Cif', categoria: 'Saponáceo', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1158152/g.jpg' },
  { nome: 'Cif Cremoso Limpa Inox 250ml', marca: 'Cif', categoria: 'Saponáceo', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/985110/m.jpg' },
  { nome: 'Cif Ultra Rápido Banheiro Sem Cloro 500ml', marca: 'Cif', categoria: 'Limpador banheiro', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1147797/g.jpg' },
  { nome: 'Cif Ultra Rápido Banheiro com Cloro 500ml', marca: 'Cif', categoria: 'Limpador banheiro', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1147797/g.jpg' },
  { nome: 'Cif Ultra Rápido Cozinha Desengordurante 500ml', marca: 'Cif', categoria: 'Limpador cozinha', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1156233/p.jpg' },
  { nome: 'Cif Ultra Rápido Limpa Vidros Gatilho 500ml', marca: 'Cif', categoria: 'Limpa vidro', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/989735/m.jpg' },
  { nome: 'Cif Ultra Rápido Limpa Vidros Squeeze 500ml', marca: 'Cif', categoria: 'Limpa vidro', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/989735/m.jpg' },
  { nome: 'Cif Ultra Rápido Limpa Vidros Refil 450ml', marca: 'Cif', categoria: 'Limpa vidro', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/989735/m.jpg' },
  { nome: 'Cif Tira Limo com Cloro 500ml', marca: 'Cif', categoria: 'Limpador banheiro', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1139808/p.jpg' },
  { nome: 'Cif Desengordurante Cozinha 500ml', marca: 'Cif', categoria: 'Desengordurante', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1156233/p.jpg' },

  // ──────────── COMFORT ────────────
  { nome: 'Comfort Concentrado Puro Cuidado 500ml', marca: 'Comfort', categoria: 'Amaciante', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1105804/p.jpg' },
  { nome: 'Comfort Concentrado Puro Cuidado 1L', marca: 'Comfort', categoria: 'Amaciante', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1105804/p.jpg' },
  { nome: 'Comfort Concentrado Frescor Intenso 500ml', marca: 'Comfort', categoria: 'Amaciante', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1138795/g.jpg' },
  { nome: 'Comfort Concentrado Frescor Intenso 1L', marca: 'Comfort', categoria: 'Amaciante', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1138795/g.jpg' },
  { nome: 'Comfort Concentrado Frescor Intenso 1,5L', marca: 'Comfort', categoria: 'Amaciante', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1138795/g.jpg' },
  { nome: 'Comfort Concentrado Segredos 500ml', marca: 'Comfort', categoria: 'Amaciante', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1138795/g.jpg' },
  { nome: 'Comfort Concentrado Proteção Antiodor 500ml', marca: 'Comfort', categoria: 'Amaciante', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1105804/p.jpg' },
  { nome: 'Comfort Concentrado Proteção Micelar 500ml', marca: 'Comfort', categoria: 'Amaciante', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1105804/p.jpg' },
  { nome: 'Comfort Concentrado Detox Lavanda 500ml', marca: 'Comfort', categoria: 'Amaciante', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1105804/p.jpg' },
  { nome: 'Comfort Concentrado Original 500ml', marca: 'Comfort', categoria: 'Amaciante', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1105804/p.jpg' },
  { nome: 'Comfort Concentrado Profissional 5L', marca: 'Comfort', categoria: 'Amaciante', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1138795/g.jpg' },
  { nome: 'Comfort Intense Perfumador para Roupas', marca: 'Comfort', categoria: 'Aromatizador', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1139338/p.jpg' },

  // ──────────── DIVERSEY ────────────
  { nome: 'Diversey Detergente Vero Clean 5L', marca: 'Diversey', categoria: 'Detergente' },
  { nome: 'Diversey Detergente Vero Plus 5L', marca: 'Diversey', categoria: 'Detergente' },
  { nome: 'Diversey Clarax Desinfetante 5L', marca: 'Diversey', categoria: 'Desinfetante' },
  { nome: 'Diversey Alpha HP Desinfetante 5L', marca: 'Diversey', categoria: 'Desinfetante' },
  { nome: 'Diversey Desolim Max Floral 5L', marca: 'Diversey', categoria: 'Detergente' },
  { nome: 'Diversey Desolim Max Lavanda 5L', marca: 'Diversey', categoria: 'Detergente' },
  { nome: 'Diversey All Clean Limpador Alcalino 5L', marca: 'Diversey', categoria: 'Limpador multiuso' },
  { nome: 'Diversey Cera Vero Plus 5L', marca: 'Diversey', categoria: 'Produto profissional' },
  { nome: 'Diversey Clarax Removedor 5L', marca: 'Diversey', categoria: 'Produto profissional' },
  { nome: 'Diversey Clax 200 Detergente Lavanderia 20L', marca: 'Diversey', categoria: 'Produto profissional' },
  { nome: 'Diversey Clax Deosoft Concentrado Amaciante 20L', marca: 'Diversey', categoria: 'Amaciante' },
  { nome: 'Diversey Clax Hypo Concentrado Alvejante 20L', marca: 'Diversey', categoria: 'Alvejante' },
  { nome: 'Diversey Acifoam Limpador Ácido Espumante 5L', marca: 'Diversey', categoria: 'Produto profissional' },
  { nome: 'Diversey Breltak Plus Limpador Alcalino CIP 20L', marca: 'Diversey', categoria: 'Produto profissional' },
  { nome: 'Diversey Clorocide Desinfetante Hospitalar 5L', marca: 'Diversey', categoria: 'Desinfetante' },

  // ──────────── DOWNY ────────────
  { nome: 'Downy Amaciante Concentrado Brisa de Verão 500ml', marca: 'Downy', categoria: 'Amaciante', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1139602/g.jpg' },
  { nome: 'Downy Amaciante Concentrado Lírios do Campo 500ml', marca: 'Downy', categoria: 'Amaciante', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1143933/g.jpg' },
  { nome: 'Downy Amaciante Concentrado Frescor da Primavera 500ml', marca: 'Downy', categoria: 'Amaciante', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/969021/g.jpg' },
  { nome: 'Downy Amaciante Concentrado Frescor da Primavera 1L', marca: 'Downy', categoria: 'Amaciante', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1143933/g.jpg' },
  { nome: 'Downy Amaciante Concentrado Água Fresca 500ml', marca: 'Downy', categoria: 'Amaciante', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/969021/g.jpg' },
  { nome: 'Downy Amaciante Concentrado Brisa Intenso 500ml', marca: 'Downy', categoria: 'Amaciante', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1139605/p.jpg' },
  { nome: 'Downy Amaciante Concentrado Brisa Intenso 1L', marca: 'Downy', categoria: 'Amaciante', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1139605/p.jpg' },
  { nome: 'Downy Amaciante Concentrado Brisa Suave 500ml', marca: 'Downy', categoria: 'Amaciante', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/969021/g.jpg' },
  { nome: 'Downy Amaciante Concentrado Verão Tropical 500ml', marca: 'Downy', categoria: 'Amaciante', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1139602/g.jpg' },
  { nome: 'Downy Amaciante Concentrado Verão Tropical 1,5L', marca: 'Downy', categoria: 'Amaciante', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1139599/p.jpg' },
  { nome: 'Downy Amaciante Concentrado Lavanda Seiva de Alfazema 1,5L', marca: 'Downy', categoria: 'Amaciante', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/969017/p.jpg' },
  { nome: 'Downy Amaciante Concentrado Lírios do Campo 3L', marca: 'Downy', categoria: 'Amaciante', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1143933/g.jpg' },
  { nome: 'Downy Amaciante Concentrado Sensitive 450ml', marca: 'Downy', categoria: 'Amaciante', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/969021/g.jpg' },
  { nome: 'Downy Perfumador para Roupas', marca: 'Downy', categoria: 'Aromatizador', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1157851/g.jpg' },

  // ──────────── GIRANDO SOL ────────────
  { nome: 'Girando Sol Sabão em Pó Coco e Baunilha 1,6kg', marca: 'Girando Sol', categoria: 'Sabão em pó', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1148916/p.jpg' },
  { nome: 'Girando Sol Sabão em Pó Coco e Baunilha 4kg', marca: 'Girando Sol', categoria: 'Sabão em pó', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1148916/p.jpg' },
  { nome: 'Girando Sol Sabão em Pó Floral Paris 1,6kg', marca: 'Girando Sol', categoria: 'Sabão em pó', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1148908/p.jpg' },
  { nome: 'Girando Sol Sabão em Pó Rosa Floral 4kg', marca: 'Girando Sol', categoria: 'Sabão em pó', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1148908/p.jpg' },
  { nome: 'Girando Sol Detergente Neutro 500ml', marca: 'Girando Sol', categoria: 'Detergente', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1142481/p.jpg' },
  { nome: 'Girando Sol Detergente Natural 500ml', marca: 'Girando Sol', categoria: 'Detergente', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1142481/p.jpg' },
  { nome: 'Girando Sol Detergente Natural 2L', marca: 'Girando Sol', categoria: 'Detergente', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1142481/p.jpg' },
  { nome: 'Girando Sol Detergente Coco 500ml', marca: 'Girando Sol', categoria: 'Detergente', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1142481/p.jpg' },
  { nome: 'Girando Sol Detergente Maçã 500ml', marca: 'Girando Sol', categoria: 'Detergente', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1142482/m.jpg' },
  { nome: 'Girando Sol Detergente Glicerina 500ml', marca: 'Girando Sol', categoria: 'Detergente', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1142485/p.jpg' },
  { nome: 'Girando Sol Amaciante Concentrado Coco e Baunilha 1L', marca: 'Girando Sol', categoria: 'Amaciante', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1099799/g.jpg' },
  { nome: 'Girando Sol Amaciante Rosas e Lavanda 2L', marca: 'Girando Sol', categoria: 'Amaciante', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1099799/g.jpg' },
  { nome: 'Girando Sol Amaciante Rosas e Lavanda 5L', marca: 'Girando Sol', categoria: 'Amaciante', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1099799/g.jpg' },
  { nome: 'Girando Sol Amaciante Floral Paris 2L', marca: 'Girando Sol', categoria: 'Amaciante', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1099799/g.jpg' },
  { nome: 'Girando Sol Amaciante Floral Paris 5L', marca: 'Girando Sol', categoria: 'Amaciante', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1099799/g.jpg' },
  { nome: 'Girando Sol Amaciante Paixão Secreta 2L', marca: 'Girando Sol', categoria: 'Amaciante', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1099799/g.jpg' },
  { nome: 'Girando Sol Amaciante Paixão Secreta 5L', marca: 'Girando Sol', categoria: 'Amaciante', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1099799/g.jpg' },
  { nome: 'Girando Sol Amaciante Hipoalergênico 2L', marca: 'Girando Sol', categoria: 'Amaciante', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1099799/g.jpg' },
  { nome: 'Girando Sol Amaciante Hipoalergênico 5L', marca: 'Girando Sol', categoria: 'Amaciante', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1099799/g.jpg' },
  { nome: 'Girando Sol Amaciante Hipoalergênico Talco Delicado 2L', marca: 'Girando Sol', categoria: 'Amaciante', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1099799/g.jpg' },
  { nome: 'Girando Sol Lava Roupas Líquido Ação Total 1L', marca: 'Girando Sol', categoria: 'Lava roupas' },
  { nome: 'Girando Sol Lava Roupas Líquido Ação Total 5L', marca: 'Girando Sol', categoria: 'Lava roupas' },
  { nome: 'Girando Sol Lava Roupas Líquido Hipoalergênico 2L', marca: 'Girando Sol', categoria: 'Lava roupas' },
  { nome: 'Girando Sol Desinfetante Jasmim 5L', marca: 'Girando Sol', categoria: 'Desinfetante', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1148977/m.jpg' },
  { nome: 'Girando Sol Água Sanitária 1L', marca: 'Girando Sol', categoria: 'Alvejante' },
  { nome: 'Girando Sol Água Sanitária 2L', marca: 'Girando Sol', categoria: 'Alvejante' },
  { nome: 'Girando Sol Água Sanitária 5L', marca: 'Girando Sol', categoria: 'Alvejante' },
  { nome: 'Girando Sol Tira Manchas em Pó Sem Cloro 400g', marca: 'Girando Sol', categoria: 'Alvejante' },
  { nome: 'Girando Sol Tira Manchas Líquido Sem Cloro 2L', marca: 'Girando Sol', categoria: 'Alvejante' },
  { nome: 'Girando Sol Limpador Tira Limo Cloro Ativo 500ml', marca: 'Girando Sol', categoria: 'Limpador banheiro' },
  { nome: 'Girando Sol Limpador Limpeza Pesada Original 500ml', marca: 'Girando Sol', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1099800/g.jpg' },
  { nome: 'Girando Sol Saponáceo Cremoso Limão 300ml', marca: 'Girando Sol', categoria: 'Saponáceo' },
  { nome: 'Girando Sol Sabão em Barra Coco 200g', marca: 'Girando Sol', categoria: 'Sabão em pó' },
  { nome: 'Girando Sol Sabão em Barra Coco 400g', marca: 'Girando Sol', categoria: 'Sabão em pó' },
  { nome: 'Girando Sol Sabão em Barra Glicerinado Neutro 200g', marca: 'Girando Sol', categoria: 'Sabão em pó' },
  { nome: 'Girando Sol Sabão em Barra Tradicional 180g', marca: 'Girando Sol', categoria: 'Sabão em pó' },

  // ──────────── LYSOL ────────────
  { nome: 'Lysol Desinfetante Aerossol Pureza do Algodão 360ml', marca: 'Lysol', categoria: 'Desinfetante' },
  { nome: 'Lysol Desinfetante Aerossol Brisa da Manhã 360ml', marca: 'Lysol', categoria: 'Desinfetante' },
  { nome: 'Lysol Desinfetante Aerossol Flores de Lima e Limão 360ml', marca: 'Lysol', categoria: 'Desinfetante' },
  { nome: 'Lysol Toalhetes Desinfetantes Brisa da Manhã 36un', marca: 'Lysol', categoria: 'Desinfetante' },
  { nome: 'Lysol Toalhetes Desinfetantes Frescor Marinho 36un', marca: 'Lysol', categoria: 'Desinfetante' },
  { nome: 'Lysol Limpador Banheiro Power 500ml', marca: 'Lysol', categoria: 'Limpador banheiro' },

  // ──────────── MINUANO ────────────
  { nome: 'Minuano Detergente Lava-Louças Neutro 500ml', marca: 'Minuano', categoria: 'Detergente', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1140558/m.jpg' },
  { nome: 'Minuano Detergente Lava-Louças Coco 500ml', marca: 'Minuano', categoria: 'Detergente', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1141575/g.jpg' },
  { nome: 'Minuano Detergente Lava-Louças Marine 500ml', marca: 'Minuano', categoria: 'Detergente', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/970701/g.jpg' },
  { nome: 'Minuano Detergente Lava-Louças Micelar 500ml', marca: 'Minuano', categoria: 'Detergente', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/975285/g.jpg' },
  { nome: 'Minuano Sabão em Pó Máximo Cuidado 800g', marca: 'Minuano', categoria: 'Sabão em pó', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1156164/g.jpg' },
  { nome: 'Minuano Sabão em Pó Máxima Limpeza 800g', marca: 'Minuano', categoria: 'Sabão em pó', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1156164/g.jpg' },
  { nome: 'Minuano Sabão em Pó Máxima Perfumação 800g', marca: 'Minuano', categoria: 'Sabão em pó', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1156164/g.jpg' },
  { nome: 'Minuano Sabão em Pó Máximo Cuidado 4kg', marca: 'Minuano', categoria: 'Sabão em pó', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1141730/m.jpg' },
  { nome: 'Minuano Sabão Glicerinado Neutro 5un', marca: 'Minuano', categoria: 'Sabão em pó' },
  { nome: 'Minuano Sabão Glicerinado Controle de Odor 5un', marca: 'Minuano', categoria: 'Sabão em pó' },
  { nome: 'Minuano Sabão Glicerinado Tira-Manchas 5un', marca: 'Minuano', categoria: 'Sabão em pó' },
  { nome: 'Minuano Sabão Glicerinado Limpeza Perfumada 5un', marca: 'Minuano', categoria: 'Sabão em pó' },
  { nome: 'Minuano Amaciante Concentrado Noite de Luar 500ml', marca: 'Minuano', categoria: 'Amaciante' },
  { nome: 'Minuano Amaciante Concentrado Noite de Luar 1L', marca: 'Minuano', categoria: 'Amaciante' },
  { nome: 'Minuano Amaciante Diluído 2L', marca: 'Minuano', categoria: 'Amaciante' },
  { nome: 'Minuano Desinfetante Aerossol Lavanda 300ml', marca: 'Minuano', categoria: 'Desinfetante' },
  { nome: 'Minuano Desinfetante Aerossol Sem Fragrância 300ml', marca: 'Minuano', categoria: 'Desinfetante' },
  { nome: 'Minuano Desinfetante Aerossol Cítrico 300ml', marca: 'Minuano', categoria: 'Desinfetante' },
  { nome: 'Minuano Desinfetante Líquido Lavanda 500ml', marca: 'Minuano', categoria: 'Desinfetante', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1156304/p.jpg' },
  { nome: 'Minuano Multiuso 500ml', marca: 'Minuano', categoria: 'Limpador multiuso' },
  { nome: 'Minuano Limpa Vidros 500ml', marca: 'Minuano', categoria: 'Limpa vidro' },
  { nome: 'Minuano Sabão em Barra Coco 200g', marca: 'Minuano', categoria: 'Sabão em pó' },
  { nome: 'Minuano Lava Roupas em Pó Linha Coco 800g', marca: 'Minuano', categoria: 'Sabão em pó', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1156164/g.jpg' },

  // ──────────── MR. MÚSCULO ────────────
  { nome: 'Mr. Músculo Cozinha Desengordurante Laranja 500ml', marca: 'Mr. Músculo', categoria: 'Desengordurante' },
  { nome: 'Mr. Músculo Cozinha Desengordurante Limão 500ml', marca: 'Mr. Músculo', categoria: 'Desengordurante' },
  { nome: 'Mr. Músculo Cozinha Desengordurante Limão Refil 400ml', marca: 'Mr. Músculo', categoria: 'Desengordurante' },
  { nome: 'Mr. Músculo Cozinha Desengordurante Laranja Refil 400ml', marca: 'Mr. Músculo', categoria: 'Desengordurante' },
  { nome: 'Mr. Músculo Banheiro Total 500ml', marca: 'Mr. Músculo', categoria: 'Limpador banheiro' },
  { nome: 'Mr. Músculo Banheiro Total Refil 400ml', marca: 'Mr. Músculo', categoria: 'Limpador banheiro' },
  { nome: 'Mr. Músculo Limpa Vidros 500ml', marca: 'Mr. Músculo', categoria: 'Limpa vidro' },
  { nome: 'Mr. Músculo Limpa Vidros Refil 400ml', marca: 'Mr. Músculo', categoria: 'Limpa vidro' },
  { nome: 'Mr. Músculo Cremoso Multiuso Desinfetante 450ml', marca: 'Mr. Músculo', categoria: 'Limpador multiuso' },
  { nome: 'Mr. Músculo Limpa Limo Refil 400ml', marca: 'Mr. Músculo', categoria: 'Limpador banheiro' },
  { nome: 'Mr. Músculo Uso Geral Perfumado by Glade Lavanda 5L', marca: 'Mr. Músculo', categoria: 'Limpador multiuso' },

  // ──────────── OMO ────────────
  { nome: 'Omo Sabão em Pó Lavagem Perfeita 800g', marca: 'Omo', categoria: 'Sabão em pó', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1147839/p.jpg' },
  { nome: 'Omo Sabão em Pó Lavagem Perfeita 1,6kg', marca: 'Omo', categoria: 'Sabão em pó', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1269742/g.jpg.jpg' },
  { nome: 'Omo Sabão em Pó Lavagem Perfeita 2,2kg', marca: 'Omo', categoria: 'Sabão em pó', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1269742/g.jpg.jpg' },
  { nome: 'Omo Sabão em Pó Lavagem Perfeita Sanitiza & Higieniza 800g', marca: 'Omo', categoria: 'Sabão em pó', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1147839/p.jpg' },
  { nome: 'Omo Sabão em Pó Lavagem Perfeita Sanitiza & Higieniza 1,6kg', marca: 'Omo', categoria: 'Sabão em pó', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1269742/g.jpg.jpg' },
  { nome: 'Omo Sabão em Pó Puro Cuidado 800g', marca: 'Omo', categoria: 'Sabão em pó', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1147839/p.jpg' },
  { nome: 'Omo Sabão em Pó Puro Cuidado 1,6kg', marca: 'Omo', categoria: 'Sabão em pó', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1269742/g.jpg.jpg' },
  { nome: 'Omo Sabão em Pó Lavanda 800g', marca: 'Omo', categoria: 'Sabão em pó', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1147839/p.jpg' },
  { nome: 'Omo Sabão Líquido Lavagem Perfeita 1L', marca: 'Omo', categoria: 'Lava roupas', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/972014/p.jpg' },
  { nome: 'Omo Sabão Líquido Lavagem Perfeita 3L', marca: 'Omo', categoria: 'Lava roupas', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/972014/p.jpg' },
  { nome: 'Omo Sabão Líquido Puro Cuidado 1L', marca: 'Omo', categoria: 'Lava roupas', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/972016/g.jpg' },
  { nome: 'Omo Sabão Líquido Puro Cuidado Refil 900ml', marca: 'Omo', categoria: 'Lava roupas', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/972016/g.jpg' },
  { nome: 'Omo Sabão Líquido Sanitiza & Higieniza 1L', marca: 'Omo', categoria: 'Lava roupas', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1089036/07451.png' },
  { nome: 'Omo Sabão Líquido Roupas Finas e Delicadas 900ml', marca: 'Omo', categoria: 'Lava roupas', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1151240/g.jpg' },
  { nome: 'Omo Sabão Líquido Peças Íntimas e Biquínis 900ml', marca: 'Omo', categoria: 'Lava roupas', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1151240/g.jpg' },
  { nome: 'Omo Sabão Líquido Branco Absoluto 1L', marca: 'Omo', categoria: 'Lava roupas', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/972014/p.jpg' },
  { nome: 'Omo Sabão Líquido Lavanda 1L', marca: 'Omo', categoria: 'Lava roupas', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/972014/p.jpg' },
  { nome: 'Omo Tira Manchas Líquido 1L', marca: 'Omo', categoria: 'Alvejante' },
  { nome: 'Omo Tira Manchas em Pó 380g', marca: 'Omo', categoria: 'Alvejante' },
  { nome: 'Omo Cápsulas 3 em 1 Lavagem Perfeita', marca: 'Omo', categoria: 'Lava roupas' },

  // ──────────── PINHO SOL ────────────
  { nome: 'Pinho Sol Desinfetante Original 500ml', marca: 'Pinho Sol', categoria: 'Desinfetante' },
  { nome: 'Pinho Sol Desinfetante Original 1L', marca: 'Pinho Sol', categoria: 'Desinfetante' },
  { nome: 'Pinho Sol Desinfetante Original 3,8L', marca: 'Pinho Sol', categoria: 'Desinfetante' },
  { nome: 'Pinho Sol Desinfetante Lavanda 500ml', marca: 'Pinho Sol', categoria: 'Desinfetante' },
  { nome: 'Pinho Sol Desinfetante Lavanda 1L', marca: 'Pinho Sol', categoria: 'Desinfetante' },
  { nome: 'Pinho Sol Desinfetante Lavanda 3,8L', marca: 'Pinho Sol', categoria: 'Desinfetante' },
  { nome: 'Pinho Sol Desinfetante Eucalipto 500ml', marca: 'Pinho Sol', categoria: 'Desinfetante' },
  { nome: 'Pinho Sol Desinfetante Citronela 500ml', marca: 'Pinho Sol', categoria: 'Desinfetante' },
  { nome: 'Pinho Sol Desinfetante Naturals 500ml', marca: 'Pinho Sol', categoria: 'Desinfetante' },
  { nome: 'Pinho Sol Limpador Multiuso Original 500ml', marca: 'Pinho Sol', categoria: 'Limpador multiuso' },
  { nome: 'Pinho Sol Limpador Multiuso Lavanda 500ml', marca: 'Pinho Sol', categoria: 'Limpador multiuso' },

  // ──────────── RENKO ────────────
  { nome: 'Renko Klyo Limpa Vidros 1L', marca: 'Renko', categoria: 'Limpa vidro' },
  { nome: 'Renko Klyo Limpa Vidros 5L', marca: 'Renko', categoria: 'Limpa vidro' },
  { nome: 'Renko Klyo Limpa Inox 1L', marca: 'Renko', categoria: 'Limpador multiuso' },
  { nome: 'Renko Klyo Oxy Limpador de Uso Geral 1L', marca: 'Renko', categoria: 'Limpador multiuso' },
  { nome: 'Renko Klyo Oxy Limpador de Uso Geral 5L', marca: 'Renko', categoria: 'Limpador multiuso' },
  { nome: 'Renko Klyo Oxy Floral Limpador de Uso Geral 5L', marca: 'Renko', categoria: 'Limpador multiuso' },
  { nome: 'Renko Klyo Floor Limpador Pesado Pisos e Porcelanato 1L', marca: 'Renko', categoria: 'Limpador multiuso' },
  { nome: 'Renko Chef Detergente Desengordurante Alcalino 1L', marca: 'Renko', categoria: 'Desengordurante' },
  { nome: 'Renko Chef Clor Detergente Desinfetante Clorado 1L', marca: 'Renko', categoria: 'Desinfetante' },
  { nome: 'Renko Magic Flot Limpador por Flotação 1L', marca: 'Renko', categoria: 'Produto profissional' },
  { nome: 'Renko Magic Flot Limpador por Flotação 5L', marca: 'Renko', categoria: 'Produto profissional' },
  { nome: 'Renko Mirax Air Neutralizador de Odor 1L', marca: 'Renko', categoria: 'Aromatizador' },
  { nome: 'Renko Mirax Tecido e Ar Neutralizador de Odor 5L', marca: 'Renko', categoria: 'Aromatizador' },
  { nome: 'Renko Eco Orange Removedor Desengraxante 1L', marca: 'Renko', categoria: 'Desengordurante' },
  { nome: 'Renko Nixx Flot Removedor de Manchas em Tecidos 1L', marca: 'Renko', categoria: 'Produto profissional' },
  { nome: 'Renko Nixx Flot Removedor de Manchas em Tecidos 5L', marca: 'Renko', categoria: 'Produto profissional' },
  { nome: 'Renko HT Nixx Prof Finalizador de Passadoria 1L', marca: 'Renko', categoria: 'Produto profissional' },

  // ──────────── START ────────────
  { nome: 'Start Azulim Limpa Cerâmicas e Azulejos Lavanda 1L', marca: 'Start', categoria: 'Limpador multiuso' },
  { nome: 'Start Azulim Limpa Porcelanato Lavanda 750ml', marca: 'Start', categoria: 'Limpador multiuso' },
  { nome: 'Start Azulim Limpa Pedras Pedrex 1L', marca: 'Start', categoria: 'Limpador multiuso' },
  { nome: 'Start Azulim Limpador Gel 500ml', marca: 'Start', categoria: 'Limpador multiuso' },
  { nome: 'Start Azulim Desinfetante Diluível Eucalipto 500ml', marca: 'Start', categoria: 'Desinfetante' },
  { nome: 'Start Azulim Clorogel 1L', marca: 'Start', categoria: 'Desinfetante' },
  { nome: 'Start Azulim Flotador 5L', marca: 'Start', categoria: 'Limpador multiuso' },
  { nome: 'Start Azulim Flotador 500ml', marca: 'Start', categoria: 'Limpador multiuso' },
  { nome: 'Start Azulim Desengordurante 500ml', marca: 'Start', categoria: 'Desengordurante' },
  { nome: 'Start Azulim Saponáceo Cremoso 300ml', marca: 'Start', categoria: 'Saponáceo' },
  { nome: 'Start Azulim Tira Limo 500ml', marca: 'Start', categoria: 'Limpador banheiro' },
  { nome: 'Start Tuff Lava Roupas Concentrado 3L', marca: 'Start', categoria: 'Lava roupas' },
  { nome: 'Start Tuff Amaciante Concentrado Winter 1,5L', marca: 'Start', categoria: 'Amaciante' },
  { nome: 'Start Azulim Água Sanitária 1L', marca: 'Start', categoria: 'Alvejante' },

  // ──────────── URCA ────────────
  { nome: 'Urca Lava Roupas em Pó 800g', marca: 'Urca', categoria: 'Sabão em pó', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1152906/p.jpg' },
  { nome: 'Urca Lava Roupas em Pó Concentrado 2,2kg', marca: 'Urca', categoria: 'Sabão em pó', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1156968/g.jpg' },
  { nome: 'Urca Lava Roupas em Pó Sachê 2,4kg', marca: 'Urca', categoria: 'Sabão em pó', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1152905/m.jpg' },
  { nome: 'Urca Lava Roupas em Pó Sachê 4kg', marca: 'Urca', categoria: 'Sabão em pó', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1152905/m.jpg' },
  { nome: 'Urca Lava Roupas em Pó Sachê 400g', marca: 'Urca', categoria: 'Sabão em pó', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1152906/p.jpg' },
  { nome: 'Urca Lava Roupas em Pó PRO 8kg', marca: 'Urca', categoria: 'Sabão em pó', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1152905/m.jpg' },
  { nome: 'Urca Lava Roupas Líquido 1L', marca: 'Urca', categoria: 'Lava roupas', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1156345/m.jpg' },
  { nome: 'Urca Lava Roupas Líquido 3L', marca: 'Urca', categoria: 'Lava roupas', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1156345/m.jpg' },
  { nome: 'Urca Lava Roupas Líquido 5L', marca: 'Urca', categoria: 'Lava roupas', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1156345/m.jpg' },
  { nome: 'Urca Lava Roupas Líquido Coco 500ml', marca: 'Urca', categoria: 'Lava roupas', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1156345/m.jpg' },
  { nome: 'Urca Lava Roupas Líquido Coco 3L', marca: 'Urca', categoria: 'Lava roupas', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1156345/m.jpg' },
  { nome: 'Urca Amaciante Concentrado 500ml', marca: 'Urca', categoria: 'Amaciante' },
  { nome: 'Urca Amaciante Concentrado 1,5L', marca: 'Urca', categoria: 'Amaciante' },
  { nome: 'Urca Amaciante Diluído 2L', marca: 'Urca', categoria: 'Amaciante' },
  { nome: 'Urca Amaciante Diluído 3L', marca: 'Urca', categoria: 'Amaciante' },
  { nome: 'Urca Amaciante Diluído 5L', marca: 'Urca', categoria: 'Amaciante' },
  { nome: 'Urca Desinfetante 500ml', marca: 'Urca', categoria: 'Desinfetante', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1141365/m.jpg' },
  { nome: 'Urca Desinfetante 2L', marca: 'Urca', categoria: 'Desinfetante', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1146661/g.jpg' },
  { nome: 'Urca Desinfetante 5L', marca: 'Urca', categoria: 'Desinfetante', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/975319/g.jpg' },
  { nome: 'Urca Lava Louças Clear 5L', marca: 'Urca', categoria: 'Detergente', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1276941/m.jpg.jpg' },
  { nome: 'Urca Lava Louças Neutro 5L', marca: 'Urca', categoria: 'Detergente', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1276941/m.jpg.jpg' },
  { nome: 'Urca Multiuso com Álcool 500ml', marca: 'Urca', categoria: 'Limpador multiuso' },
  { nome: 'Urca Multiuso Lavanda 500ml', marca: 'Urca', categoria: 'Limpador multiuso' },
  { nome: 'Urca Multiuso Hortelã 500ml', marca: 'Urca', categoria: 'Limpador multiuso' },
  { nome: 'Urca Limpa Vidros 500ml', marca: 'Urca', categoria: 'Limpa vidro', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1145154/p.jpg' },
  { nome: 'Urca Limpador Perfumado 500ml', marca: 'Urca', categoria: 'Limpador multiuso' },
  { nome: 'Urca Limpador Perfumado 1L', marca: 'Urca', categoria: 'Limpador multiuso' },
  { nome: 'Urca Água Sanitária 1L', marca: 'Urca', categoria: 'Alvejante' },
  { nome: 'Urca Água Sanitária 2L', marca: 'Urca', categoria: 'Alvejante' },
  { nome: 'Urca Água Sanitária 5L', marca: 'Urca', categoria: 'Alvejante' },
  { nome: 'Urca Tira Manchas 500ml', marca: 'Urca', categoria: 'Alvejante' },
  { nome: 'Urca Tira Manchas 1,5L', marca: 'Urca', categoria: 'Alvejante' },
  { nome: 'Urca Tira Manchas 5L', marca: 'Urca', categoria: 'Alvejante' },
  { nome: 'Urca Sabão em Pedra Coco 180g', marca: 'Urca', categoria: 'Sabão em pó', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1152904/p.jpg' },
  { nome: 'Urca Sabão em Pedra Coco 450g', marca: 'Urca', categoria: 'Sabão em pó', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1152904/p.jpg' },
  { nome: 'Urca Sabão em Pedra Coco 900g', marca: 'Urca', categoria: 'Sabão em pó', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1152904/p.jpg' },
  { nome: 'Urca Sabão de Coco em Pasta', marca: 'Urca', categoria: 'Sabão em pó', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1152904/p.jpg' },
  { nome: 'Urca Sabão em Pasta Tradicional 200g', marca: 'Urca', categoria: 'Sabão em pó', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1152906/p.jpg' },
  { nome: 'Urca Sabão em Pasta Tradicional 500g', marca: 'Urca', categoria: 'Sabão em pó', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1152906/p.jpg' },
  { nome: 'Urca Saponáceo em Pasta Cristal', marca: 'Urca', categoria: 'Saponáceo' },
  { nome: 'Urca Sabão em Pó Coco', marca: 'Urca', categoria: 'Sabão em pó', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/1152904/p.jpg' },
  { nome: 'Urca Pedra Sanitária Lavanda', marca: 'Urca', categoria: 'Desinfetante' },
  { nome: 'Urca Pedra Sanitária Floral', marca: 'Urca', categoria: 'Desinfetante' },

  // ──────────── VEJA ────────────
  { nome: 'Veja Multiuso Original 500ml', marca: 'Veja', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/970784/m.jpg' },
  { nome: 'Veja Multiuso Lavanda com Álcool 500ml', marca: 'Veja', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/970793/p.jpg' },
  { nome: 'Veja Multiuso Campestre 500ml', marca: 'Veja', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/970784/m.jpg' },
  { nome: 'Veja Multiuso Bio Álcool 500ml', marca: 'Veja', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/970784/m.jpg' },
  { nome: 'Veja Multiuso Power Fusion Limão 500ml', marca: 'Veja', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/970794/g.jpg' },
  { nome: 'Veja Multiuso Power Fusion Coco 500ml', marca: 'Veja', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/970794/g.jpg' },
  { nome: 'Veja Multiuso Original 5L', marca: 'Veja', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/970784/m.jpg' },
  { nome: 'Veja Uso Direto Original 900ml', marca: 'Veja', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/970784/m.jpg' },
  { nome: 'Veja Uso Direto Floral 900ml', marca: 'Veja', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/970793/p.jpg' },
  { nome: 'Veja Limpeza Pesada Original com Álcool 500ml', marca: 'Veja', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/970798/m.jpg' },
  { nome: 'Veja Limpeza Pesada X14 Cloro Ativo 500ml', marca: 'Veja', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/970798/m.jpg' },
  { nome: 'Veja Limpeza Pesada Pro Line 5L', marca: 'Veja', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/970784/m.jpg' },
  { nome: 'Veja Banheiro X14 Tira Limo 500ml', marca: 'Veja', categoria: 'Limpador banheiro', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/970798/m.jpg' },
  { nome: 'Veja Banheiro Oxi Antibac Ativo 500ml', marca: 'Veja', categoria: 'Limpador banheiro', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/970798/m.jpg' },
  { nome: 'Veja Banheiro X14 Sem Cloro 500ml', marca: 'Veja', categoria: 'Limpador banheiro', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/970784/m.jpg' },
  { nome: 'Veja Cozinha Desengordurante Original 500ml', marca: 'Veja', categoria: 'Desengordurante', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/970794/g.jpg' },
  { nome: 'Veja Cozinha Desengordurante Laranja 500ml', marca: 'Veja', categoria: 'Desengordurante', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/970794/g.jpg' },
  { nome: 'Veja Vidrex Limpa Vidros Squeeze 500ml', marca: 'Veja', categoria: 'Limpa vidro', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/968399/m.jpg' },
  { nome: 'Veja Vidrex Limpa Vidros Cristal Pulverizador 500ml', marca: 'Veja', categoria: 'Limpa vidro', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/968399/m.jpg' },
  { nome: 'Veja Vidrex Limpa Vidros Refil 500ml', marca: 'Veja', categoria: 'Limpa vidro', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/968399/m.jpg' },
  { nome: 'Veja Vidrex Cristal Pro Line 5L', marca: 'Veja', categoria: 'Limpa vidro', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/968399/m.jpg' },
  { nome: 'Veja Perfumes Flores do Mediterrâneo 500ml', marca: 'Veja', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/973437/g.jpg' },
  { nome: 'Veja Perfumes Lavanda da França 500ml', marca: 'Veja', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/970793/p.jpg' },
  { nome: 'Veja Perfumes Tulipa da Holanda 500ml', marca: 'Veja', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/973437/g.jpg' },
  { nome: 'Veja Perfumes Jasmim do Caribe 500ml', marca: 'Veja', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vteximg.com.br/arquivos/ids/973437/g.jpg' },

  // ──────────── YPÊ ────────────
  { nome: 'Ypê Detergente Neutro 500ml', marca: 'Ypê', categoria: 'Detergente' },
  { nome: 'Ypê Detergente Limão 500ml', marca: 'Ypê', categoria: 'Detergente' },
  { nome: 'Ypê Detergente Coco 500ml', marca: 'Ypê', categoria: 'Detergente' },
  { nome: 'Ypê Detergente Maçã 500ml', marca: 'Ypê', categoria: 'Detergente' },
  { nome: 'Ypê Detergente Clear 500ml', marca: 'Ypê', categoria: 'Detergente' },
  { nome: 'Ypê Detergente Antibac 500ml', marca: 'Ypê', categoria: 'Detergente' },
  { nome: 'Ypê Detergente Green 500ml', marca: 'Ypê', categoria: 'Detergente' },
  { nome: 'Ypê Detergente Concentrado Antibac 416ml', marca: 'Ypê', categoria: 'Detergente' },
  { nome: 'Ypê Detergente Pro 7L', marca: 'Ypê', categoria: 'Detergente' },
  { nome: 'Ypê Sabão em Pó Power Act 800g', marca: 'Ypê', categoria: 'Sabão em pó' },
  { nome: 'Ypê Sabão em Pó Power Act 1,6kg', marca: 'Ypê', categoria: 'Sabão em pó' },
  { nome: 'Ypê Sabão em Pó Antibac 800g', marca: 'Ypê', categoria: 'Sabão em pó' },
  { nome: 'Ypê Sabão em Pó Premium 800g', marca: 'Ypê', categoria: 'Sabão em pó' },
  { nome: 'Ypê Sabão em Pó Pro 8kg', marca: 'Ypê', categoria: 'Sabão em pó' },
  { nome: 'Ypê Lava Roupas Líquido Power Act 1L', marca: 'Ypê', categoria: 'Lava roupas' },
  { nome: 'Ypê Lava Roupas Líquido Power Act Refil 900ml', marca: 'Ypê', categoria: 'Lava roupas' },
  { nome: 'Ypê Lava Roupas Líquido Antibac 1L', marca: 'Ypê', categoria: 'Lava roupas' },
  { nome: 'Ypê Amaciante Concentrado 500ml', marca: 'Ypê', categoria: 'Amaciante' },
  { nome: 'Ypê Amaciante Concentrado 1L', marca: 'Ypê', categoria: 'Amaciante' },
  { nome: 'Ypê Amaciante Concentrado Antibac 500ml', marca: 'Ypê', categoria: 'Amaciante' },
  { nome: 'Ypê Amaciante Diluído 2L', marca: 'Ypê', categoria: 'Amaciante' },
  { nome: 'Ypê Amaciante Pro 5L', marca: 'Ypê', categoria: 'Amaciante' },
  { nome: 'Ypê Desinfetante Pinho Tradição 500ml', marca: 'Ypê', categoria: 'Desinfetante' },
  { nome: 'Ypê Desinfetante Pinho Citrus 500ml', marca: 'Ypê', categoria: 'Desinfetante' },
  { nome: 'Ypê Desinfetante Bak Lavanda 1L', marca: 'Ypê', categoria: 'Desinfetante' },
  { nome: 'Ypê Desinfetante Bak Lavanda 5L', marca: 'Ypê', categoria: 'Desinfetante' },
  { nome: 'Ypê Alvejante Sem Cloro 1L', marca: 'Ypê', categoria: 'Alvejante' },
  { nome: 'Ypê Alvejante Sem Cloro 2L', marca: 'Ypê', categoria: 'Alvejante' },
  { nome: 'Ypê Água Sanitária 1L', marca: 'Ypê', categoria: 'Alvejante' },
  { nome: 'Ypê Água Sanitária 2L', marca: 'Ypê', categoria: 'Alvejante' },
  { nome: 'Ypê Água Sanitária Pro 5L', marca: 'Ypê', categoria: 'Alvejante' },
  { nome: 'Ypê Multiuso Antibac 500ml', marca: 'Ypê', categoria: 'Limpador multiuso' },
  { nome: 'Ypê Multiuso Original 500ml', marca: 'Ypê', categoria: 'Limpador multiuso' },
  { nome: 'Ypê Limpador Perfumado 500ml', marca: 'Ypê', categoria: 'Limpador multiuso' },
  { nome: 'Ypê Limpador Perfumado Pro 5L', marca: 'Ypê', categoria: 'Limpador multiuso' },
  { nome: 'Ypê Limpa Vidros 500ml', marca: 'Ypê', categoria: 'Limpa vidro' },
  { nome: 'Ypê Tira Manchas em Pó 450g', marca: 'Ypê', categoria: 'Alvejante' },
  { nome: 'Ypê Tira Manchas Líquido 1L', marca: 'Ypê', categoria: 'Alvejante' },
  { nome: 'Ypê Tira Limo 500ml', marca: 'Ypê', categoria: 'Limpador banheiro' },
  { nome: 'Ypê Sabão em Barra Neutro 180g 5un', marca: 'Ypê', categoria: 'Sabão em pó' },
  { nome: 'Ypê Sabão em Barra Multiativo Azul 180g 5un', marca: 'Ypê', categoria: 'Sabão em pó' },
  { nome: 'Ypê Sabão em Barra Coco 180g 5un', marca: 'Ypê', categoria: 'Sabão em pó' },
  { nome: 'Ypê Sabão em Barra Aloe Vera 180g 5un', marca: 'Ypê', categoria: 'Sabão em pó' },
  { nome: 'Ypê Lustra Móveis Lavanda 200ml', marca: 'Ypê', categoria: 'Limpador multiuso' },

  // ──────────── SPARTAN ────────────
  { nome: 'Spartan Detergente Desengordurante Alcalino 5L', marca: 'Spartan', categoria: 'Desengordurante' },
  { nome: 'Spartan Desinfetante Hospitalar 5L', marca: 'Spartan', categoria: 'Desinfetante' },
  { nome: 'Spartan Limpador Multiuso Profissional 5L', marca: 'Spartan', categoria: 'Limpador multiuso' },
  { nome: 'Spartan Detergente Neutro Profissional 5L', marca: 'Spartan', categoria: 'Produto profissional' },
  { nome: 'Spartan Limpador de Pisos Profissional 5L', marca: 'Spartan', categoria: 'Produto profissional' },
];

// ============ MATRIZ DE MARCAS X CATEGORIAS (gerada automaticamente) ============
const brandCategories = (() => {
  const map = {};
  catalogProducts.forEach(p => {
    if (!map[p.marca]) map[p.marca] = new Set();
    map[p.marca].add(p.categoria);
  });
  specificProducts.forEach(p => {
    if (!map[p.marca]) map[p.marca] = new Set();
    map[p.marca].add(p.categoria);
  });
  return Object.entries(map).map(([marca, cats]) => [marca, [...cats]]);
})();
