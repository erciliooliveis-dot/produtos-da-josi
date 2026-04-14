// ============================================================
// DATA.JS — Dados de produtos, combos, imagens e configurações
// Produtos da Josi — Distribuidora de Higiene e Limpeza
// ============================================================

// ============ CONFIGURAÇÃO DA LOJA ============
const STORE_CONFIG = {
  name: 'Produtos da Josi',
  slogan: 'Distribuidora de Produtos de Higiene e Limpeza',
  whatsapp: '5519953212247',
  email: 'produtos.da.josi1@gmail.com',
  telefone: '(19) 95321-2247',
  regiao: 'Campinas e Região',
  horario: 'Seg a Sex: 8h às 18h | Sáb: 8h às 13h',
  endereco: 'Campinas - SP',
  pixChave: '00397092300',
  pixTipo: 'CPF',
  pixNome: 'Produtos da Josi',
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

// Nomes amigáveis das categorias para exibição no menu
const catDisplayNames = {
  'Limpador multiuso': 'Multiuso',
  'Sabão em pó': 'Sabão em Pó',
  'Detergente': 'Detergente',
  'Amaciante': 'Amaciante',
  'Desinfetante': 'Desinfetante',
  'Desengordurante': 'Desengordurante',
  'Limpa vidro': 'Limpa Vidros',
  'Alvejante': 'Alvejante',
  'Saponáceo': 'Saponáceo',
  'Lava roupas': 'Lava Roupas',
  'Limpador banheiro': 'Banheiro',
  'Limpador cozinha': 'Cozinha',
  'Aromatizador': 'Aromatizador',
  'Esponja': 'Esponja',
  'Produto profissional': 'Profissional'
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

// ============ ÍCONES SVG DOS COMBOS ============
const comboIcons = {
  'Combo Cozinha Completa': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8h1a4 4 0 0 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" y1="2" x2="6" y2="4"/><line x1="10" y1="2" x2="10" y2="4"/><line x1="14" y1="2" x2="14" y2="4"/></svg>',
  'Combo Banheiro Brilhante': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"/><line x1="10" y1="5" x2="8" y2="7"/><line x1="2" y1="21" x2="22" y2="21"/><line x1="7" y1="19" x2="7" y2="21"/><line x1="17" y1="19" x2="17" y2="21"/></svg>',
  'Combo Lavanderia Premium': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="12" cy="13" r="5"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>',
  'Combo Limpeza Geral': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19.5 14.5L15 19m-5-5 2-2m3 3-2 2M12 3L3 12l3 3 9-9z"/><path d="m14 7 3 3"/><path d="M5 6v4"/><path d="M19 14v4"/><path d="M10 2v2"/><path d="M7 8H3"/><path d="M21 16h-4"/><path d="M11 3H9"/></svg>',
  'Combo Profissional': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.91 8.84 8.56 2.23a1.93 1.93 0 0 0-1.81 0L3.1 4.13a2.12 2.12 0 0 0-.05 3.69l12.22 6.93a2 2 0 0 0 1.94 0L21 12.51a2.12 2.12 0 0 0-.09-3.67Z"/><path d="m3.09 8.84 12.35-6.61a1.93 1.93 0 0 1 1.81 0l3.65 1.9a2.12 2.12 0 0 1 .1 3.69L8.73 14.75a2 2 0 0 1-1.94 0L3 12.51a2.12 2.12 0 0 1 .09-3.67Z"/><line x1="12" y1="22" x2="12" y2="13"/><path d="M20 13.5v3.37a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13.5"/></svg>',
  'Combo Economia Doméstica': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
  'Combo Vidros e Superfícies': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>',
  'Combo Roupas Delicadas': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/></svg>',
  'Combo Dia de Faxina': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
  'Combo Casa Perfumada': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v8"/><path d="M18.4 6.6 12 13 5.6 6.6"/><path d="M12 22a10 10 0 0 0 10-10"/><path d="M2 12a10 10 0 0 0 10 10"/><circle cx="12" cy="13" r="3"/></svg>'
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
  { id:9001, nome:'Esponja Dupla Face Zupp',          marca:'Zupp', categoria:'Esponja',          img:_base+'destaque-esponja-dupla-face-18916103.png' },
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
  { id:9012, nome:'Esponja de Aço Inox Zupp',         marca:'Zupp', categoria:'Esponja',          img:_base+'esponja-de-aco-final-1-compressed-40151319.jpg' },
  { id:9013, nome:'Detergente Zupplin 1L',            marca:'Zupp', categoria:'Detergente',          img:_base+'produto-zuppani-detergente-zupplin-1l-112312.png' },
  { id:9014, nome:'Sabão em Barra Zupp 1kg',          marca:'Zupp', categoria:'Sabão em pó',         img:_base+'sabao-zupp-em-barra-glicerinado-1-kg-785121.jpg' },
  { id:9015, nome:'Limpa Inox Zupp',                  marca:'Zupp', categoria:'Limpador multiuso',   img:_base+'produto-zuppani-limpa-inox-71491512.png' },
  { id:9016, nome:'Amaciante Zupp 1,8L',              marca:'Zupp', categoria:'Amaciante',           img:_base+'romantico-318674-1273109.jpg' },
  { id:9017, nome:'Lava Louças em Pasta Zupp 500g',   marca:'Zupp', categoria:'Detergente',          img:_base+'lava-louca-500g-31116103.jpg' },
  { id:9018, nome:'Amaciante Zupp 5L',                marca:'Zupp', categoria:'Amaciante',           img:_base+'amaciante-conforto5l-copy-181261718.jpg' },
  { id:9019, nome:'Detergente Zupplin 5L',            marca:'Zupp', categoria:'Detergente',          img:_base+'zupplin-5l-14210814.png' },
  { id:9020, nome:'Água Sanitária Zupp 2L',           marca:'Zupp', categoria:'Alvejante',           img:_base+'agua-sanitaria-2l-31017815.png' },
  { id:9021, nome:'Esponja Antiaderente Zupp',        marca:'Zupp', categoria:'Esponja',          img:_base+'destaque-zuppani-esponja-antiaderente-15311415.png' },
  { id:9022, nome:'Limpador Perfumes e Encanto Zupp 1L', marca:'Zupp', categoria:'Limpador multiuso', img:_base+'bem-estar-lavanda-1l-1051942.png' },
  { id:9023, nome:'Lava Louças em Pasta Zupp 200g',   marca:'Zupp', categoria:'Detergente',          img:_base+'lava-louca200g-031429.jpg' },
  { id:9024, nome:'Detergente Zupp 5L',               marca:'Zupp', categoria:'Detergente',          img:_base+'detergente-neutro-561819.jpg' },
  { id:9025, nome:'Desinfetante Zupp 1L',             marca:'Zupp', categoria:'Desinfetante',        img:_base+'destaque-1l-16171610.png' },
  { id:9026, nome:'Água Sanitária Zupp 5L',           marca:'Zupp', categoria:'Alvejante',           img:_base+'agua-sanitaria-zupp-5l-19619141.png' },
  { id:9027, nome:'Esponja Lã de Aço Zupp',           marca:'Zupp', categoria:'Esponja',          img:_base+'mockup-esponja-la-aco-15901510.png' },
  { id:9028, nome:'Desinfetante Zupp 2L',             marca:'Zupp', categoria:'Desinfetante',        img:_base+'desinfetante-2l-destaque-101113194.png' },
];

// ============ PREÇOS (varejo + 25%) ============
const MARGEM = 1.25;

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

// Função para obter preço (atacado + 25%)
// precosBase = preço de atacado para tamanho padrão (500ml/800g)
// Multiplica proporcionalmente para tamanhos maiores (baseado em preços reais do Atacadão)
function getPrecoRevenda(produto) {
  const key = produto.marca + ':' + produto.categoria;
  let base = precosZupp[produto.id] || precosBase[key];
  if (!base) return null;
  // Ajuste proporcional real por volume (baseado em preços do Atacadão)
  const nome = produto.nome || '';
  if (nome.match(/\b20\s*[Ll]\b/)) base = base * 8;
  else if (nome.match(/\b10\s*kg\b/i)) base = base * 5;
  else if (nome.match(/\b8\s*kg\b/i)) base = base * 4.5;
  else if (nome.match(/\b5[\.,]?\d*\s*kg\b/i) || nome.match(/\b5\s*[Ll]\b/)) base = base * 3;
  else if (nome.match(/\b4\s*kg\b/i)) base = base * 2.8;
  else if (nome.match(/\b3\s*[Ll]\b/)) base = base * 2.2;
  else if (nome.match(/\b2[\.,]?\d*\s*kg\b/i) || nome.match(/\b2\s*[Ll]\b/)) base = base * 1.6;
  else if (nome.match(/\b1[\.,]?\d*\s*kg\b/i) || nome.match(/\b1[\.,]?\d*\s*[Ll]\b/) || nome.match(/\b1000\s*ml\b/i)) base = base * 1.3;
  else if (nome.match(/\b900\s*ml\b/i) || nome.match(/\b950\s*ml\b/i)) base = base * 1.2;
  else if (nome.match(/\b750\s*ml\b/i)) base = base * 1.1;
  // 500ml/800g/400g/300g = preço base
  return (base * MARGEM).toFixed(2);
}

// ============ CATÁLOGO COMPLETO DE PRODUTOS ============
const catalogProducts = [
  // ──────────── AJAX ────────────
  { nome: 'Ajax Multiuso Original 500ml', marca: 'Ajax', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/992318/m.jpg' },
  { nome: 'Ajax Multiuso Lavanda com Álcool 500ml', marca: 'Ajax', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1279578/p.jpg.jpg' },
  { nome: 'Ajax Fresh Original 500ml', marca: 'Ajax', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/907043/g.jpg' },
  { nome: 'Ajax Fresh Limão 500ml', marca: 'Ajax', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/907047/p.jpg' },
  { nome: 'Ajax Fresh Poder 500ml', marca: 'Ajax', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1141768/m.jpg' },
  { nome: 'Ajax Festa das Flores Bouquet de Flores 500ml', marca: 'Ajax', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1279441/m.jpg.jpg' },
  { nome: 'Ajax Festa das Flores Flores do Campo 500ml', marca: 'Ajax', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/908025/p.jpg' },
  { nome: 'Ajax Festa das Flores Flores de Lavanda 500ml', marca: 'Ajax', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1279601/m.jpg.jpg' },
  { nome: 'Ajax Festa das Flores Mar de Flores 500ml', marca: 'Ajax', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/986679/p.jpg' },
  { nome: 'Ajax Limpeza Pura Menta e Orquídea 500ml', marca: 'Ajax', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/985128/m.jpg' },
  { nome: 'Ajax Natural Essentials Lavanda 500ml', marca: 'Ajax', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1279578/p.jpg.jpg' },
  { nome: 'Ajax Natural Essentials Eucalipto e Citrus 500ml', marca: 'Ajax', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/970586/m.jpg' },
  { nome: 'Ajax Alternativa ao Cloro Floral 500ml', marca: 'Ajax', categoria: 'Desinfetante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1280409/g.jpg.jpg' },
  { nome: 'Ajax Desengordurante Cozinha 500ml', marca: 'Ajax', categoria: 'Desengordurante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1280512/m.jpg.jpg' },
  { nome: 'Ajax Limpador Banheiro 500ml', marca: 'Ajax', categoria: 'Limpador banheiro', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1280114/m.jpg.jpg' },
  { nome: 'Ajax Limpador Cozinha 500ml', marca: 'Ajax', categoria: 'Limpador cozinha', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1280412/g.jpg.jpg' },
  { nome: 'Ajax Limpa Vidros 500ml', marca: 'Ajax', categoria: 'Limpa vidro', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1280506/g.jpg.jpg' },
  // ──────────── ARIEL ────────────
  { nome: 'Ariel Sabão Líquido Expert Concentrado', marca: 'Ariel', categoria: 'Lava roupas', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1151370/g.jpg', tamanhos: [
    { label: '1,2L', preco: 22.90 },
    { label: '2L', preco: 35.32 },
    { label: '3L', preco: 49.81 }
  ] },
  { nome: 'Ariel Sabão Líquido 3 em 1 1,2L', marca: 'Ariel', categoria: 'Lava roupas', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/982841/m.jpg' },
  { nome: 'Ariel Sabão Líquido Toque de Downy 2L', marca: 'Ariel', categoria: 'Lava roupas', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1148575/p.jpg' },
  { nome: 'Ariel Sabão Líquido Cores Radiantes 2L', marca: 'Ariel', categoria: 'Lava roupas', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1146388/g.jpg' },
  { nome: 'Ariel Sabão Líquido Cores Radiantes Toque de Downy 2L', marca: 'Ariel', categoria: 'Lava roupas', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1144721/g.jpg' },
  { nome: 'Ariel Sabão Líquido Hipoalergênico Suave e Gentil 2L', marca: 'Ariel', categoria: 'Lava roupas', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1158502/p.jpg' },
  { nome: 'Ariel Sabão em Pó Expert', marca: 'Ariel', categoria: 'Sabão em pó', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/979613/p.jpg', tamanhos: [
    { label: '800g', preco: 16.90 },
    { label: '1,6kg', preco: 30.42 }
  ] },
  { nome: 'Ariel Power Pods 3 em 1 Cápsulas', marca: 'Ariel', categoria: 'Lava roupas', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1144554/p.jpg' },
  // ──────────── BOMBRIL ────────────
  { nome: 'Esponja de Lã de Aço Bombril 60g', marca: 'Bombril', categoria: 'Esponja', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/971114/m.jpg' },
  { nome: 'Esponja Multiuso Amarela Bombril', marca: 'Bombril', categoria: 'Esponja', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1145746/m.jpg' },
  { nome: 'Esponja Sintética Bombril', marca: 'Bombril', categoria: 'Esponja', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1143348/p.jpg' },
  { nome: 'Sapólio Radium Cremoso Original 250ml', marca: 'Bombril', categoria: 'Saponáceo', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1156985/m.jpg' },
  { nome: 'Sapólio Radium Cremoso Cloro 250ml', marca: 'Bombril', categoria: 'Saponáceo', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1142013/m.jpg' },
  { nome: 'Sapólio Radium Cremoso Limão 250ml', marca: 'Bombril', categoria: 'Saponáceo', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1146561/g.jpg' },
  { nome: 'Sapólio Radium Cremoso Laranja 250ml', marca: 'Bombril', categoria: 'Saponáceo', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/988444/m.jpg' },
  { nome: 'Sapólio Radium Cremoso Limpa Inox 250ml', marca: 'Bombril', categoria: 'Saponáceo', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1146563/g.jpg' },
  { nome: 'Sapólio Radium Cremoso Multiuso Clássico 450ml', marca: 'Bombril', categoria: 'Saponáceo', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1156191/g.jpg' },
  { nome: 'Sapólio Radium em Pó Clássico 300g', marca: 'Bombril', categoria: 'Saponáceo', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1146568/m.jpg' },
  { nome: 'Sapólio Radium em Pó Limão 300g', marca: 'Bombril', categoria: 'Saponáceo', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1158251/g.jpg' },
  { nome: 'Pinho Bril Desinfetante Original 500ml', marca: 'Bombril', categoria: 'Desinfetante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1141540/m.jpg' },
  { nome: 'Pinho Bril Desinfetante Lavanda 500ml', marca: 'Bombril', categoria: 'Desinfetante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1139196/m.jpg' },
  { nome: 'Pinho Bril Desinfetante Brisa do Mar 500ml', marca: 'Bombril', categoria: 'Desinfetante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/998309/m.jpg' },
  { nome: 'Pinho Bril Desinfetante Floral 500ml', marca: 'Bombril', categoria: 'Desinfetante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/971455/m.jpg' },
  { nome: 'Limpol Detergente Neutro 500ml', marca: 'Bombril', categoria: 'Detergente', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/971405/p.jpg' },
  { nome: 'Limpol Detergente Limão 500ml', marca: 'Bombril', categoria: 'Detergente', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1140757/g.jpg' },
  { nome: 'Limpol Detergente Coco 500ml', marca: 'Bombril', categoria: 'Detergente', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/973375/g.jpg' },
  { nome: 'Mon Bijou Amaciante Concentrado 500ml', marca: 'Bombril', categoria: 'Amaciante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1156988/m.jpg' },
  { nome: 'Mon Bijou Amaciante Diluído 2L', marca: 'Bombril', categoria: 'Amaciante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1158253/m.jpg' },
  // ──────────── BRILHANTE ────────────
  { nome: 'Brilhante Sabão em Pó Limpeza Total', marca: 'Brilhante', categoria: 'Sabão em pó', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1158183/g.jpg', tamanhos: [
    { label: '800g', preco: 9.90 },
    { label: '1,6kg', preco: 17.82 }
  ] },
  { nome: 'Brilhante Sabão em Pó Cuidado Total', marca: 'Brilhante', categoria: 'Sabão em pó', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1156226/m.jpg', tamanhos: [
    { label: '800g', preco: 9.90 },
    { label: '1,6kg', preco: 17.82 }
  ] },
  { nome: 'Brilhante Sabão em Pó Sem Perfume Ação Total 800g', marca: 'Brilhante', categoria: 'Sabão em pó', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1154402/g.jpg' },
  { nome: 'Brilhante Sabão em Pó Higiene Total 800g', marca: 'Brilhante', categoria: 'Sabão em pó', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1157252/p.jpg' },
  { nome: 'Brilhante Sabão Líquido Limpeza Total', marca: 'Brilhante', categoria: 'Lava roupas', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1157253/g.jpg', tamanhos: [
    { label: '1L', preco: 13.90 },
    { label: '3L', preco: 35.29 }
  ] },
  { nome: 'Brilhante Sabão Líquido Ação Total Sem Perfume 1L', marca: 'Brilhante', categoria: 'Lava roupas', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1139033/m.jpg' },
  { nome: 'Brilhante Sanitizante Higiene Total 1L', marca: 'Brilhante', categoria: 'Lava roupas', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/992202/g.jpg' },
  { nome: 'Brilhante Tira Manchas Utile Antibac Líquido 2L', marca: 'Brilhante', categoria: 'Alvejante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/983306/p.jpg' },
  { nome: 'Brilhante Tira Manchas Utile Fresh Líquido 2L', marca: 'Brilhante', categoria: 'Alvejante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1147640/g.jpg' },
  { nome: 'Brilhante Tira Manchas Utile Floral Líquido 2L', marca: 'Brilhante', categoria: 'Alvejante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/989161/p.jpg' },
  { nome: 'Brilhante Tira Manchas Utile Fresh em Pó 380g', marca: 'Brilhante', categoria: 'Alvejante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1147642/g.jpg' },
  { nome: 'Brilhante Tira Manchas Utile Floral em Pó 380g', marca: 'Brilhante', categoria: 'Alvejante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/982954/m.jpg' },
  { nome: 'Brilhante Alvejante Cloro Ativo Fresh 1L', marca: 'Brilhante', categoria: 'Alvejante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/988443/m.jpg' },
  { nome: 'Brilhante Lava Roupas em Pó Profissional 4kg', marca: 'Brilhante', categoria: 'Sabão em pó', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1154126/p.jpg' },
  // ──────────── CASA KM ────────────
  { nome: 'Casa KM Casa & Perfume Multiuso Agradable', marca: 'Casa KM', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1141679/p.jpg', tamanhos: [
    { label: '500ml', preco: 5.99 },
    { label: '1L', preco: 10.78 }
  ] },
  { nome: 'Casa KM Casa & Perfume Multiuso Envolvente 500ml', marca: 'Casa KM', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1143808/g.jpg' },
  { nome: 'Casa KM Casa & Perfume Multiuso Sensações 500ml', marca: 'Casa KM', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1153468/p.jpg' },
  { nome: 'Casa KM Casa & Cuidado Desinfetante Brisa Serena 500ml', marca: 'Casa KM', categoria: 'Desinfetante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/989841/p.jpg' },
  { nome: 'Casa KM Casa & Cuidado Desinfetante Flores do Campo 500ml', marca: 'Casa KM', categoria: 'Desinfetante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1273172/g.jpg.jpg' },
  { nome: 'Casa KM Casa & Cuidado Desinfetante Original 500ml', marca: 'Casa KM', categoria: 'Desinfetante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/989841/p.jpg' },
  { nome: 'Casa KM Limpador Perfumado Concentrado 500ml', marca: 'Casa KM', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1141680/g.jpg' },
  // ──────────── CIF ────────────
  { nome: 'Cif Cremoso Original', marca: 'Cif', categoria: 'Saponáceo', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/985110/m.jpg', tamanhos: [
    { label: '250ml', preco: 8.99 },
    { label: '450ml', preco: 14.80 }
  ] },
  { nome: 'Cif Cremoso Limão', marca: 'Cif', categoria: 'Saponáceo', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1156231/p.jpg', tamanhos: [
    { label: '250ml', preco: 8.99 },
    { label: '450ml', preco: 14.80 }
  ] },
  { nome: 'Cif Cremoso Laranja 250ml', marca: 'Cif', categoria: 'Saponáceo', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1158152/g.jpg' },
  { nome: 'Cif Cremoso Limpa Inox 250ml', marca: 'Cif', categoria: 'Saponáceo', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1158152/g.jpg' },
  { nome: 'Cif Ultra Rápido Banheiro Sem Cloro 500ml', marca: 'Cif', categoria: 'Limpador banheiro', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1147797/g.jpg' },
  { nome: 'Cif Ultra Rápido Banheiro com Cloro 500ml', marca: 'Cif', categoria: 'Limpador banheiro', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1151248/p.jpg' },
  { nome: 'Cif Ultra Rápido Cozinha Desengordurante 500ml', marca: 'Cif', categoria: 'Limpador cozinha', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1156233/p.jpg' },
  { nome: 'Cif Ultra Rápido Limpa Vidros Gatilho 500ml', marca: 'Cif', categoria: 'Limpa vidro', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/989735/m.jpg' },
  { nome: 'Cif Ultra Rápido Limpa Vidros Squeeze 500ml', marca: 'Cif', categoria: 'Limpa vidro', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/997123/p.jpg' },
  { nome: 'Cif Ultra Rápido Limpa Vidros Refil 450ml', marca: 'Cif', categoria: 'Limpa vidro', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/974846/p.jpg' },
  { nome: 'Cif Tira Limo com Cloro 500ml', marca: 'Cif', categoria: 'Limpador banheiro', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1139808/p.jpg' },
  { nome: 'Cif Desengordurante Cozinha 500ml', marca: 'Cif', categoria: 'Desengordurante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1144587/g.jpg' },
  // ──────────── COMFORT ────────────
  { nome: 'Comfort Concentrado Puro Cuidado', marca: 'Comfort', categoria: 'Amaciante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1105804/p.jpg', tamanhos: [
    { label: '500ml', preco: 12.90 },
    { label: '1L', preco: 23.22 }
  ] },
  { nome: 'Comfort Concentrado Frescor Intenso', marca: 'Comfort', categoria: 'Amaciante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1138795/g.jpg', tamanhos: [
    { label: '500ml', preco: 12.90 },
    { label: '1L', preco: 23.22 },
    { label: '1,5L', preco: 32.75 }
  ] },
  { nome: 'Comfort Concentrado Segredos 500ml', marca: 'Comfort', categoria: 'Amaciante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1151224/m.jpg' },
  { nome: 'Comfort Concentrado Proteção Antiodor 500ml', marca: 'Comfort', categoria: 'Amaciante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1139796/m.jpg' },
  { nome: 'Comfort Concentrado Proteção Micelar 500ml', marca: 'Comfort', categoria: 'Amaciante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1139784/p.jpg' },
  { nome: 'Comfort Concentrado Detox Lavanda 500ml', marca: 'Comfort', categoria: 'Amaciante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1139791/m.jpg' },
  { nome: 'Comfort Concentrado Original 500ml', marca: 'Comfort', categoria: 'Amaciante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/981978/m.jpg' },
  { nome: 'Comfort Concentrado Profissional 5L', marca: 'Comfort', categoria: 'Amaciante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1150479/g.jpg' },
  { nome: 'Comfort Intense Perfumador para Roupas', marca: 'Comfort', categoria: 'Aromatizador', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1139338/p.jpg' },
  // ──────────── DIVERSEY ────────────
  { nome: 'Diversey Detergente Vero Clean 5L', marca: 'Diversey', categoria: 'Detergente', img: 'https://www.dialever.com.br/conteudos/fot_124p.jpg' },
  { nome: 'Diversey Detergente Vero Plus 5L', marca: 'Diversey', categoria: 'Detergente', img: 'https://www.dialever.com.br/conteudos/fot_121p.jpg' },
  { nome: 'Diversey Clarax Desinfetante 5L', marca: 'Diversey', categoria: 'Desinfetante', img: 'https://www.dialever.com.br/conteudos/fot_127p.jpg' },
  { nome: 'Diversey Alpha HP Desinfetante 5L', marca: 'Diversey', categoria: 'Desinfetante', img: 'https://www.dialever.com.br/conteudos/fot_129p.jpg' },
  { nome: 'Diversey Desolim Max Floral 5L', marca: 'Diversey', categoria: 'Detergente', img: 'https://www.dialever.com.br/conteudos/fot_120p.jpg' },
  { nome: 'Diversey Desolim Max Lavanda 5L', marca: 'Diversey', categoria: 'Detergente', img: 'https://www.dialever.com.br/conteudos/fot_136p.jpg' },
  { nome: 'Diversey All Clean Limpador Alcalino 5L', marca: 'Diversey', categoria: 'Limpador multiuso', img: 'https://www.dialever.com.br/conteudos/fot_125p.jpg' },
  { nome: 'Diversey Cera Vero Plus 5L', marca: 'Diversey', categoria: 'Produto profissional', img: 'https://www.dialever.com.br/conteudos/fot_122p.jpg' },
  { nome: 'Diversey Clarax Removedor 5L', marca: 'Diversey', categoria: 'Produto profissional', img: 'https://www.dialever.com.br/conteudos/fot_123p.jpg' },
  { nome: 'Diversey Clax 200 Detergente Lavanderia 20L', marca: 'Diversey', categoria: 'Produto profissional', img: 'https://www.dialever.com.br/conteudos/fot_131p.jpg' },
  { nome: 'Diversey Clax Deosoft Concentrado Amaciante 20L', marca: 'Diversey', categoria: 'Amaciante', img: 'https://www.dialever.com.br/conteudos/fot_130p.jpg' },
  { nome: 'Diversey Clax Hypo Concentrado Alvejante 20L', marca: 'Diversey', categoria: 'Alvejante', img: 'https://www.dialever.com.br/conteudos/fot_126p.jpg' },
  { nome: 'Diversey Acifoam Limpador Ácido Espumante 5L', marca: 'Diversey', categoria: 'Produto profissional', img: 'https://www.dialever.com.br/conteudos/fot_132p.jpg' },
  { nome: 'Diversey Breltak Plus Limpador Alcalino CIP 20L', marca: 'Diversey', categoria: 'Produto profissional', img: 'https://www.dialever.com.br/conteudos/fot_133p.jpg' },
  { nome: 'Diversey Clorocide Desinfetante Hospitalar 5L', marca: 'Diversey', categoria: 'Desinfetante', img: 'https://www.dialever.com.br/conteudos/fot_134p.jpg' },
  // ──────────── DOWNY ────────────
  { nome: 'Downy Amaciante Concentrado Brisa de Verão 500ml', marca: 'Downy', categoria: 'Amaciante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1139602/g.jpg' },
  { nome: 'Downy Amaciante Concentrado Lírios do Campo', marca: 'Downy', categoria: 'Amaciante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1143933/g.jpg', tamanhos: [
    { label: '500ml', preco: 14.90 },
    { label: '3L', preco: 68.09 }
  ] },
  { nome: 'Downy Amaciante Concentrado Frescor da Primavera', marca: 'Downy', categoria: 'Amaciante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1272779/g.jpg.jpg', tamanhos: [
    { label: '500ml', preco: 14.90 },
    { label: '1L', preco: 26.82 }
  ] },
  { nome: 'Downy Amaciante Concentrado Água Fresca 500ml', marca: 'Downy', categoria: 'Amaciante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1270958/p.jpg.jpg' },
  { nome: 'Downy Amaciante Concentrado Brisa Intenso', marca: 'Downy', categoria: 'Amaciante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1139605/p.jpg', tamanhos: [
    { label: '500ml', preco: 14.90 },
    { label: '1L', preco: 26.82 }
  ] },
  { nome: 'Downy Amaciante Concentrado Brisa Suave 500ml', marca: 'Downy', categoria: 'Amaciante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1003769/m.jpg' },
  { nome: 'Downy Amaciante Concentrado Verão Tropical', marca: 'Downy', categoria: 'Amaciante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1139604/g.jpg', tamanhos: [
    { label: '500ml', preco: 14.90 },
    { label: '1,5L', preco: 37.83 }
  ] },
  { nome: 'Downy Amaciante Concentrado Lavanda Seiva de Alfazema 1,5L', marca: 'Downy', categoria: 'Amaciante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/969017/p.jpg' },
  { nome: 'Downy Amaciante Concentrado Sensitive 450ml', marca: 'Downy', categoria: 'Amaciante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/969021/g.jpg' },
  { nome: 'Downy Perfumador para Roupas', marca: 'Downy', categoria: 'Aromatizador', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1157851/g.jpg' },
  // ──────────── GIRANDO SOL ────────────
  { nome: 'Girando Sol Sabão em Pó Coco e Baunilha', marca: 'Girando Sol', categoria: 'Sabão em pó', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1148916/p.jpg', tamanhos: [
    { label: '1,6kg', preco: 5.99 },
    { label: '4kg', preco: 13.03 }
  ] },
  { nome: 'Girando Sol Sabão em Pó Floral Paris 1,6kg', marca: 'Girando Sol', categoria: 'Sabão em pó', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1148908/p.jpg' },
  { nome: 'Girando Sol Sabão em Pó Rosa Floral 4kg', marca: 'Girando Sol', categoria: 'Sabão em pó', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1148913/g.jpg' },
  { nome: 'Girando Sol Detergente Neutro 500ml', marca: 'Girando Sol', categoria: 'Detergente', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1142481/p.jpg' },
  { nome: 'Girando Sol Detergente Natural', marca: 'Girando Sol', categoria: 'Detergente', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1149256/p.jpg', tamanhos: [
    { label: '500ml', preco: 2.49 },
    { label: '2L', preco: 8.07 }
  ] },
  { nome: 'Girando Sol Detergente Coco 500ml', marca: 'Girando Sol', categoria: 'Detergente', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1109864/p.jpg' },
  { nome: 'Girando Sol Detergente Maçã 500ml', marca: 'Girando Sol', categoria: 'Detergente', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1142482/m.jpg' },
  { nome: 'Girando Sol Detergente Glicerina 500ml', marca: 'Girando Sol', categoria: 'Detergente', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1142485/p.jpg' },
  { nome: 'Girando Sol Amaciante Concentrado Coco e Baunilha 1L', marca: 'Girando Sol', categoria: 'Amaciante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1099799/g.jpg' },
  { nome: 'Girando Sol Amaciante Rosas e Lavanda', marca: 'Girando Sol', categoria: 'Amaciante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1141454/m.jpg', tamanhos: [
    { label: '2L', preco: 6.90 },
    { label: '5L', preco: 15.01 }
  ] },
  { nome: 'Girando Sol Amaciante Floral Paris', marca: 'Girando Sol', categoria: 'Amaciante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1149254/g.jpg', tamanhos: [
    { label: '2L', preco: 6.90 },
    { label: '5L', preco: 15.01 }
  ] },
  { nome: 'Girando Sol Amaciante Paixão Secreta', marca: 'Girando Sol', categoria: 'Amaciante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1146579/m.jpg', tamanhos: [
    { label: '2L', preco: 6.90 },
    { label: '5L', preco: 15.01 }
  ] },
  { nome: 'Girando Sol Amaciante Hipoalergênico', marca: 'Girando Sol', categoria: 'Amaciante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1153030/m.jpg', tamanhos: [
    { label: '2L', preco: 6.90 },
    { label: '5L', preco: 15.01 }
  ] },
  { nome: 'Girando Sol Amaciante Hipoalergênico Talco Delicado 2L', marca: 'Girando Sol', categoria: 'Amaciante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1142498/p.jpg' },
  { nome: 'Girando Sol Lava Roupas Líquido Ação Total', marca: 'Girando Sol', categoria: 'Lava roupas', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1153031/p.jpg', tamanhos: [
    { label: '1L', preco: 8.90 },
    { label: '5L', preco: 34.84 }
  ] },
  { nome: 'Girando Sol Lava Roupas Líquido Hipoalergênico 2L', marca: 'Girando Sol', categoria: 'Lava roupas', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1109869/p.jpg' },
  { nome: 'Girando Sol Desinfetante Jasmim 5L', marca: 'Girando Sol', categoria: 'Desinfetante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1148977/m.jpg' },
  { nome: 'Girando Sol Água Sanitária', marca: 'Girando Sol', categoria: 'Alvejante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1141457/m.jpg', tamanhos: [
    { label: '1L', preco: 4.99 },
    { label: '2L', preco: 8.98 },
    { label: '5L', preco: 19.54 }
  ] },
  { nome: 'Girando Sol Tira Manchas em Pó Sem Cloro 400g', marca: 'Girando Sol', categoria: 'Alvejante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1099801/m.jpg' },
  { nome: 'Girando Sol Tira Manchas Líquido Sem Cloro 2L', marca: 'Girando Sol', categoria: 'Alvejante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1148911/p.jpg' },
  { nome: 'Girando Sol Limpador Tira Limo Cloro Ativo 500ml', marca: 'Girando Sol', categoria: 'Limpador banheiro', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1269339/m.jpg.jpg' },
  { nome: 'Girando Sol Limpador Limpeza Pesada Original 500ml', marca: 'Girando Sol', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1099800/g.jpg' },
  { nome: 'Girando Sol Saponáceo Cremoso Limão 300ml', marca: 'Girando Sol', categoria: 'Saponáceo', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1269345/g.jpg.jpg' },
  { nome: 'Girando Sol Sabão em Barra Coco', marca: 'Girando Sol', categoria: 'Sabão em pó', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1099825/g.jpg', tamanhos: [
    { label: '200g', preco: 5.99 },
    { label: '400g', preco: 10.78 }
  ] },
  { nome: 'Girando Sol Sabão em Barra Glicerinado Neutro 200g', marca: 'Girando Sol', categoria: 'Sabão em pó', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1269250/p.jpg.jpg' },
  { nome: 'Girando Sol Sabão em Barra Tradicional 180g', marca: 'Girando Sol', categoria: 'Sabão em pó', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1148912/g.jpg' },
  // ──────────── LYSOL ────────────
  { nome: 'Lysol Desinfetante Aerossol Pureza do Algodão 360ml', marca: 'Lysol', categoria: 'Desinfetante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1147805/p.jpg' },
  { nome: 'Lysol Desinfetante Aerossol Brisa da Manhã 360ml', marca: 'Lysol', categoria: 'Desinfetante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/991551/p.jpg' },
  { nome: 'Lysol Desinfetante Aerossol Flores de Lima e Limão 360ml', marca: 'Lysol', categoria: 'Desinfetante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/989706/p.jpg' },
  { nome: 'Lysol Toalhetes Desinfetantes Brisa da Manhã 36un', marca: 'Lysol', categoria: 'Desinfetante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/991552/m.jpg' },
  { nome: 'Lysol Toalhetes Desinfetantes Frescor Marinho 36un', marca: 'Lysol', categoria: 'Desinfetante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/991555/g.jpg' },
  { nome: 'Lysol Limpador Banheiro Power 500ml', marca: 'Lysol', categoria: 'Limpador banheiro', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/991554/p.jpg' },
  // ──────────── MINUANO ────────────
  { nome: 'Minuano Detergente Lava-Louças Neutro 500ml', marca: 'Minuano', categoria: 'Detergente', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1140558/m.jpg' },
  { nome: 'Minuano Detergente Lava-Louças Coco 500ml', marca: 'Minuano', categoria: 'Detergente', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1141575/g.jpg' },
  { nome: 'Minuano Detergente Lava-Louças Marine 500ml', marca: 'Minuano', categoria: 'Detergente', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/970701/g.jpg' },
  { nome: 'Minuano Detergente Lava-Louças Micelar 500ml', marca: 'Minuano', categoria: 'Detergente', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/975285/g.jpg' },
  { nome: 'Minuano Sabão em Pó Máximo Cuidado', marca: 'Minuano', categoria: 'Sabão em pó', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1156164/g.jpg', tamanhos: [
    { label: '800g', preco: 5.49 },
    { label: '4kg', preco: 21.49 }
  ] },
  { nome: 'Minuano Sabão em Pó Máxima Limpeza 800g', marca: 'Minuano', categoria: 'Sabão em pó', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1151812/p.jpg' },
  { nome: 'Minuano Sabão em Pó Máxima Perfumação 800g', marca: 'Minuano', categoria: 'Sabão em pó', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1153039/m.jpg' },
  { nome: 'Minuano Sabão Glicerinado Neutro 5un', marca: 'Minuano', categoria: 'Sabão em pó', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1270351/p.jpg.jpg' },
  { nome: 'Minuano Sabão Glicerinado Controle de Odor 5un', marca: 'Minuano', categoria: 'Sabão em pó', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1156409/p.jpg' },
  { nome: 'Minuano Sabão Glicerinado Tira-Manchas 5un', marca: 'Minuano', categoria: 'Sabão em pó', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1144030/p.jpg' },
  { nome: 'Minuano Sabão Glicerinado Limpeza Perfumada 5un', marca: 'Minuano', categoria: 'Sabão em pó', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1156405/p.jpg' },
  { nome: 'Minuano Amaciante Concentrado Noite de Luar', marca: 'Minuano', categoria: 'Amaciante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/970117/p.jpg', tamanhos: [
    { label: '500ml', preco: 6.99 },
    { label: '1L', preco: 12.58 }
  ] },
  { nome: 'Minuano Amaciante Diluído 2L', marca: 'Minuano', categoria: 'Amaciante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1144138/p.jpg' },
  { nome: 'Minuano Desinfetante Aerossol Lavanda 300ml', marca: 'Minuano', categoria: 'Desinfetante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/912197/g.jpg' },
  { nome: 'Minuano Desinfetante Aerossol Sem Fragrância 300ml', marca: 'Minuano', categoria: 'Desinfetante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/912198/p.jpg' },
  { nome: 'Minuano Desinfetante Aerossol Cítrico 300ml', marca: 'Minuano', categoria: 'Desinfetante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/969168/g.jpg' },
  { nome: 'Minuano Desinfetante Líquido Lavanda 500ml', marca: 'Minuano', categoria: 'Desinfetante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1156304/p.jpg' },
  { nome: 'Minuano Multiuso 500ml', marca: 'Minuano', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1156297/m.jpg' },
  { nome: 'Minuano Limpa Vidros 500ml', marca: 'Minuano', categoria: 'Limpa vidro', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1141566/p.jpg' },
  { nome: 'Minuano Sabão em Barra Coco 200g', marca: 'Minuano', categoria: 'Sabão em pó', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/970114/m.jpg' },
  { nome: 'Minuano Lava Roupas em Pó Linha Coco 800g', marca: 'Minuano', categoria: 'Sabão em pó', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/987929/g.jpg' },
  // ──────────── MR. MÚSCULO ────────────
  { nome: 'Mr. Músculo Cozinha Desengordurante Laranja 500ml', marca: 'Mr. Músculo', categoria: 'Desengordurante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1153338/g.jpg' },
  { nome: 'Mr. Músculo Cozinha Desengordurante Limão 500ml', marca: 'Mr. Músculo', categoria: 'Desengordurante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1151183/g.jpg' },
  { nome: 'Mr. Músculo Cozinha Desengordurante Limão Refil 400ml', marca: 'Mr. Músculo', categoria: 'Desengordurante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1146652/m.jpg' },
  { nome: 'Mr. Músculo Cozinha Desengordurante Laranja Refil 400ml', marca: 'Mr. Músculo', categoria: 'Desengordurante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1153400/m.jpg' },
  { nome: 'Mr. Músculo Banheiro Total 500ml', marca: 'Mr. Músculo', categoria: 'Limpador banheiro', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1153311/m.jpg' },
  { nome: 'Mr. Músculo Banheiro Total Refil 400ml', marca: 'Mr. Músculo', categoria: 'Limpador banheiro', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/985497/p.jpg' },
  { nome: 'Mr. Músculo Limpa Vidros 500ml', marca: 'Mr. Músculo', categoria: 'Limpa vidro', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1153399/m.jpg' },
  { nome: 'Mr. Músculo Limpa Vidros Refil 400ml', marca: 'Mr. Músculo', categoria: 'Limpa vidro', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1151161/p.jpg' },
  { nome: 'Mr. Músculo Cremoso Multiuso Desinfetante 450ml', marca: 'Mr. Músculo', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1001040/m.jpg' },
  { nome: 'Mr. Músculo Limpa Limo Refil 400ml', marca: 'Mr. Músculo', categoria: 'Limpador banheiro', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/996967/g.jpg' },
  { nome: 'Mr. Músculo Uso Geral Perfumado by Glade Lavanda 5L', marca: 'Mr. Músculo', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/981665/g.jpg' },
  // ──────────── OMO ────────────
  { nome: 'Omo Sabão em Pó Lavagem Perfeita', marca: 'Omo', categoria: 'Sabão em pó', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1147839/p.jpg', tamanhos: [
    { label: '800g', preco: 14.90 },
    { label: '1,6kg', preco: 26.82 },
    { label: '2,2kg', preco: 35.13 }
  ] },
  { nome: 'Omo Sabão em Pó Lavagem Perfeita Sanitiza & Higieniza', marca: 'Omo', categoria: 'Sabão em pó', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1148338/p.jpg', tamanhos: [
    { label: '800g', preco: 14.90 },
    { label: '1,6kg', preco: 26.82 }
  ] },
  { nome: 'Omo Sabão em Pó Puro Cuidado', marca: 'Omo', categoria: 'Sabão em pó', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1146471/p.jpg', tamanhos: [
    { label: '800g', preco: 14.90 },
    { label: '1,6kg', preco: 26.82 }
  ] },
  { nome: 'Omo Sabão em Pó Lavanda 800g', marca: 'Omo', categoria: 'Sabão em pó', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1152859/g.jpg' },
  { nome: 'Omo Sabão Líquido Lavagem Perfeita', marca: 'Omo', categoria: 'Lava roupas', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/972014/p.jpg', tamanhos: [
    { label: '1L', preco: 18.90 },
    { label: '3L', preco: 47.98 }
  ] },
  { nome: 'Omo Sabão Líquido Puro Cuidado 1L', marca: 'Omo', categoria: 'Lava roupas', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/972016/g.jpg' },
  { nome: 'Omo Sabão Líquido Puro Cuidado Refil 900ml', marca: 'Omo', categoria: 'Lava roupas', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/993659/p.jpg' },
  { nome: 'Omo Sabão Líquido Sanitiza & Higieniza 1L', marca: 'Omo', categoria: 'Lava roupas', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1089036/07451.png' },
  { nome: 'Omo Sabão Líquido Roupas Finas e Delicadas 900ml', marca: 'Omo', categoria: 'Lava roupas', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1151240/g.jpg' },
  { nome: 'Omo Sabão Líquido Peças Íntimas e Biquínis 900ml', marca: 'Omo', categoria: 'Lava roupas', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1151308/g.jpg' },
  { nome: 'Omo Sabão Líquido Branco Absoluto 1L', marca: 'Omo', categoria: 'Lava roupas', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1149424/g.jpg' },
  { nome: 'Omo Sabão Líquido Lavanda 1L', marca: 'Omo', categoria: 'Lava roupas', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1148717/g.jpg' },
  { nome: 'Omo Tira Manchas Líquido 1L', marca: 'Omo', categoria: 'Alvejante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/980026/p.jpg' },
  { nome: 'Omo Tira Manchas em Pó 380g', marca: 'Omo', categoria: 'Alvejante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1146185/m.jpg' },
  { nome: 'Omo Cápsulas 3 em 1 Lavagem Perfeita', marca: 'Omo', categoria: 'Lava roupas', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1151865/p.jpg' },
  // ──────────── PINHO SOL ────────────
  { nome: 'Pinho Sol Desinfetante Original', marca: 'Pinho Sol', categoria: 'Desinfetante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/968385/m.jpg', tamanhos: [
    { label: '500ml', preco: 6.90 },
    { label: '1L', preco: 12.42 },
    { label: '3,8L', preco: 38.53 }
  ] },
  { nome: 'Pinho Sol Desinfetante Lavanda', marca: 'Pinho Sol', categoria: 'Desinfetante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1279516/g.jpg.jpg', tamanhos: [
    { label: '500ml', preco: 6.90 },
    { label: '1L', preco: 12.42 },
    { label: '3,8L', preco: 38.53 }
  ] },
  { nome: 'Pinho Sol Desinfetante Eucalipto 500ml', marca: 'Pinho Sol', categoria: 'Desinfetante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1145820/g.jpg' },
  { nome: 'Pinho Sol Desinfetante Citronela 500ml', marca: 'Pinho Sol', categoria: 'Desinfetante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/971361/g.jpg' },
  { nome: 'Pinho Sol Desinfetante Naturals 500ml', marca: 'Pinho Sol', categoria: 'Desinfetante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1141766/m.jpg' },
  { nome: 'Pinho Sol Limpador Multiuso Original 500ml', marca: 'Pinho Sol', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1148334/p.jpg' },
  { nome: 'Pinho Sol Limpador Multiuso Lavanda 500ml', marca: 'Pinho Sol', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/987720/m.jpg' },
  // ──────────── RENKO ────────────
  { nome: 'Renko Klyo Limpa Vidros', marca: 'Renko', categoria: 'Limpa vidro', img: 'https://images.tcdn.com.br/img/img_prod/435415/limpa_vidros_klyo_1l_renko_4748_1_255f5d77958d0fb5f2cd167b543cdf24.jpg', tamanhos: [
    { label: '1L', preco: 29.90 },
    { label: '5L', preco: 117.06 }
  ] },
  { nome: 'Renko Klyo Limpa Inox 1L', marca: 'Renko', categoria: 'Limpador multiuso', img: 'https://images.tcdn.com.br/img/img_prod/435415/klyo_limpa_inox_1l_renko_4744_1_c18ebb07104822708aa781322c3cec1a.jpg' },
  { nome: 'Renko Klyo Oxy Limpador de Uso Geral', marca: 'Renko', categoria: 'Limpador multiuso', img: 'https://images.tcdn.com.br/img/img_prod/435415/limpador_de_uso_geral_a_base_de_peroxido_klyo_oxy_1l_renko_2842_1_fd4db715a201b0a5b8746a5739ad7f92.jpg', tamanhos: [
    { label: '1L', preco: 26.90 },
    { label: '5L', preco: 105.31 }
  ] },
  { nome: 'Renko Klyo Oxy Floral Limpador de Uso Geral 5L', marca: 'Renko', categoria: 'Limpador multiuso', img: 'https://images.tcdn.com.br/img/img_prod/435415/limpador_de_uso_geral_a_base_de_peroxido_klyo_oxy_floral_1l_renko_3515_1_d410bd1864a34e193e4fc64ebaedb4b9.jpg' },
  { nome: 'Renko Klyo Floor Limpador Pesado Pisos e Porcelanato 1L', marca: 'Renko', categoria: 'Limpador multiuso', img: 'https://images.tcdn.com.br/img/img_prod/435415/klyo_floor_limpador_pesado_para_piso_1l_2850_1_20231229112833.jpg' },
  { nome: 'Renko Chef Detergente Desengordurante Alcalino 1L', marca: 'Renko', categoria: 'Desengordurante', img: 'https://images.tcdn.com.br/img/img_prod/435415/detergente_desengordurante_alcalino_chef_1l_renko_2941_1_5d8e5571ce8db1b0a7ed874aff65ff4d.jpg' },
  { nome: 'Renko Chef Clor Detergente Desinfetante Clorado 1L', marca: 'Renko', categoria: 'Desinfetante', img: 'https://images.tcdn.com.br/img/img_prod/435415/desinfetante_uso_geral_mirax_floral_bouquet_concentrado_5l_renko_2258_1_20231229112924.png' },
  { nome: 'Renko Magic Flot Limpador por Flotação', marca: 'Renko', categoria: 'Produto profissional', img: 'https://images.tcdn.com.br/img/img_prod/435415/limpador_por_flotacao_magic_flot_1l_renko_3331_1_ab1b7ea19b5ef345a288045842338b18_20231229112836.jpg', tamanhos: [
    { label: '1L', preco: 32.90 },
    { label: '5L', preco: 128.80 }
  ] },
  { nome: 'Renko Mirax Air Neutralizador de Odor 1L', marca: 'Renko', categoria: 'Aromatizador', img: 'https://images.tcdn.com.br/img/img_prod/435415/mirax_air_odorizador_de_ambiente_limao_siciliano_500ml_renko_4742_1_7f2b1ec069163cce466e427e2652ff9b.jpg' },
  { nome: 'Renko Mirax Tecido e Ar Neutralizador de Odor 5L', marca: 'Renko', categoria: 'Aromatizador', img: 'https://images.tcdn.com.br/img/img_prod/435415/neutralizador_de_odor_mirax_tecido_e_ar_5l_renko_2284_1_169004f25a6a106d4b3f5bc38f5187c1.jpg' },
  { nome: 'Renko Eco Orange Removedor Desengraxante 1L', marca: 'Renko', categoria: 'Desengordurante', img: 'https://images.tcdn.com.br/img/img_prod/435415/removedor_desengraxante_a_base_de_d_limoneno_eco_orange_1l_1472_1_a03fd6dded3f1be71b011f1235751f25.jpg' },
  { nome: 'Renko Nixx Flot Removedor de Manchas em Tecidos', marca: 'Renko', categoria: 'Produto profissional', img: 'https://images.tcdn.com.br/img/img_prod/435415/removedor_de_manchas_em_tecidos_nixx_flot_1l_renko_3213_1_c1c9b2266ad4a64ef58f8ebc98fd2e35_20231229112922.jpg', tamanhos: [
    { label: '1L', preco: 32.90 },
    { label: '5L', preco: 128.80 }
  ] },
  { nome: 'Renko HT Nixx Prof Finalizador de Passadoria 1L', marca: 'Renko', categoria: 'Produto profissional', img: 'https://images.tcdn.com.br/img/img_prod/435415/finalizador_de_passadoria_ht_nixx_prof_1l_renko_3325_1_4620f31a714266138220b3ddc66d989c_20231229112833.jpg' },
  // ──────────── START ────────────
  { nome: 'Start Azulim Limpa Cerâmicas e Azulejos Lavanda 1L', marca: 'Start', categoria: 'Limpador multiuso', img: 'https://www.startquimica.com.br/storage/PIM_b63af9ba-2f20-4b2b-9140-d190d7c95c59.webp' },
  { nome: 'Start Azulim Limpa Porcelanato Lavanda 750ml', marca: 'Start', categoria: 'Limpador multiuso', img: 'https://www.startquimica.com.br/storage/PIM_3e8657ae-ff82-4d16-8d3d-788d39a18c3f.webp' },
  { nome: 'Start Azulim Limpa Pedras Pedrex 1L', marca: 'Start', categoria: 'Limpador multiuso', img: 'https://www.startquimica.com.br/storage/PIM_4b356751-d074-4de2-b4b4-7232c97be599.webp' },
  { nome: 'Start Azulim Limpador Gel 500ml', marca: 'Start', categoria: 'Limpador multiuso', img: 'https://www.startquimica.com.br/storage/PIM_e707e1ed-5fe6-4c3c-b4ec-cc17df912c08.webp' },
  { nome: 'Start Azulim Desinfetante Diluível Eucalipto 500ml', marca: 'Start', categoria: 'Desinfetante', img: 'https://www.startquimica.com.br/storage/PIM_44a1dd3c-c3db-4104-9e17-0123afc9ef36.webp' },
  { nome: 'Start Azulim Clorogel 1L', marca: 'Start', categoria: 'Desinfetante', img: 'https://www.startquimica.com.br/storage/PIM_7360ef76-074a-451f-a168-8f2e2e39ad80.webp' },
  { nome: 'Start Azulim Flotador', marca: 'Start', categoria: 'Limpador multiuso', img: 'https://www.startquimica.com.br/storage/PIM_464155f4-2f2d-4ef2-afd5-959f32c82d25.webp', tamanhos: [
    { label: '500ml', preco: 4.99 },
    { label: '5L', preco: 35.16 }
  ] },
  { nome: 'Start Azulim Desengordurante 500ml', marca: 'Start', categoria: 'Desengordurante', img: 'https://www.startquimica.com.br/storage/PIM_79620d92-7910-43a1-80a6-a15e7734f514.webp' },
  { nome: 'Start Azulim Saponáceo Cremoso 300ml', marca: 'Start', categoria: 'Saponáceo', img: 'https://www.startquimica.com.br/storage/PIM_d485bd8c-c0a7-4694-a301-26754cf384fa.webp' },
  { nome: 'Start Azulim Tira Limo 500ml', marca: 'Start', categoria: 'Limpador banheiro', img: 'https://www.startquimica.com.br/storage/PIM_8882ea4c-bb1f-49de-ba6f-4a820be4a216.webp' },
  { nome: 'Start Tuff Lava Roupas Concentrado 3L', marca: 'Start', categoria: 'Lava roupas', img: 'https://www.startquimica.com.br/storage/PIM_e7f6b20e-1cc0-46f3-afa7-c843d9ad3e4a.webp' },
  { nome: 'Start Tuff Amaciante Concentrado Winter 1,5L', marca: 'Start', categoria: 'Amaciante', img: 'https://www.startquimica.com.br/storage/PIM_c3aba9b0-ad6c-4537-a78a-1aca0535f6a9.webp' },
  { nome: 'Start Azulim Água Sanitária 1L', marca: 'Start', categoria: 'Alvejante', img: 'https://www.startquimica.com.br/storage/PIM_1439ae35-0f92-4fb4-9980-35aaab7096a5.webp' },
  // ──────────── URCA ────────────
  { nome: 'Urca Lava Roupas em Pó 800g', marca: 'Urca', categoria: 'Sabão em pó', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1152906/p.jpg' },
  { nome: 'Urca Lava Roupas em Pó Concentrado 2,2kg', marca: 'Urca', categoria: 'Sabão em pó', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1156968/g.jpg' },
  { nome: 'Urca Lava Roupas em Pó Sachê', marca: 'Urca', categoria: 'Sabão em pó', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1144375/p.jpg', tamanhos: [
    { label: '400g', preco: 5.49 },
    { label: '2,4kg', preco: 25.09 },
    { label: '4kg', preco: 38.69 }
  ] },
  { nome: 'Urca Lava Roupas em Pó PRO 8kg', marca: 'Urca', categoria: 'Sabão em pó', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1152905/m.jpg' },
  { nome: 'Urca Lava Roupas Líquido', marca: 'Urca', categoria: 'Lava roupas', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1156345/m.jpg', tamanhos: [
    { label: '1L', preco: 7.90 },
    { label: '3L', preco: 20.06 },
    { label: '5L', preco: 30.93 }
  ] },
  { nome: 'Urca Lava Roupas Líquido Coco', marca: 'Urca', categoria: 'Lava roupas', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1143617/p.jpg', tamanhos: [
    { label: '500ml', preco: 7.90 },
    { label: '3L', preco: 36.10 }
  ] },
  { nome: 'Urca Amaciante Concentrado', marca: 'Urca', categoria: 'Amaciante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/992052/g.jpg', tamanhos: [
    { label: '500ml', preco: 5.99 },
    { label: '1,5L', preco: 15.21 }
  ] },
  { nome: 'Urca Amaciante Diluído', marca: 'Urca', categoria: 'Amaciante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1141364/p.jpg', tamanhos: [
    { label: '2L', preco: 5.99 },
    { label: '3L', preco: 8.45 },
    { label: '5L', preco: 13.03 }
  ] },
  { nome: 'Urca Desinfetante', marca: 'Urca', categoria: 'Desinfetante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1141365/m.jpg', tamanhos: [
    { label: '500ml', preco: 4.90 },
    { label: '2L', preco: 15.88 },
    { label: '5L', preco: 34.53 }
  ] },
  { nome: 'Urca Lava Louças Clear 5L', marca: 'Urca', categoria: 'Detergente', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1276941/m.jpg.jpg' },
  { nome: 'Urca Lava Louças Neutro 5L', marca: 'Urca', categoria: 'Detergente', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1145815/g.jpg' },
  { nome: 'Urca Multiuso com Álcool 500ml', marca: 'Urca', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1145154/p.jpg' },
  { nome: 'Urca Multiuso Lavanda 500ml', marca: 'Urca', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/987251/m.jpg' },
  { nome: 'Urca Multiuso Hortelã 500ml', marca: 'Urca', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1146661/g.jpg' },
  { nome: 'Urca Limpa Vidros 500ml', marca: 'Urca', categoria: 'Limpa vidro', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1141363/p.jpg' },
  { nome: 'Urca Limpador Perfumado', marca: 'Urca', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1141361/m.jpg', tamanhos: [
    { label: '500ml', preco: 5.49 },
    { label: '1L', preco: 9.88 }
  ] },
  { nome: 'Urca Água Sanitária', marca: 'Urca', categoria: 'Alvejante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1144655/m.jpg', tamanhos: [
    { label: '1L', preco: 4.49 },
    { label: '2L', preco: 8.08 },
    { label: '5L', preco: 17.58 }
  ] },
  { nome: 'Urca Tira Manchas', marca: 'Urca', categoria: 'Alvejante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1143618/p.jpg', tamanhos: [
    { label: '500ml', preco: 4.49 },
    { label: '1,5L', preco: 11.40 },
    { label: '5L', preco: 31.64 }
  ] },
  { nome: 'Urca Sabão em Pedra Coco', marca: 'Urca', categoria: 'Sabão em pó', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1152904/p.jpg', tamanhos: [
    { label: '180g', preco: 5.49 },
    { label: '450g', preco: 11.94 },
    { label: '900g', preco: 21.49 }
  ] },
  { nome: 'Urca Sabão de Coco em Pasta', marca: 'Urca', categoria: 'Sabão em pó', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1145812/g.jpg' },
  { nome: 'Urca Sabão em Pasta Tradicional', marca: 'Urca', categoria: 'Sabão em pó', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1145147/p.jpg', tamanhos: [
    { label: '200g', preco: 5.49 },
    { label: '500g', preco: 11.94 }
  ] },
  { nome: 'Urca Saponáceo em Pasta Cristal', marca: 'Urca', categoria: 'Saponáceo', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1001188/m.jpg' },
  { nome: 'Urca Sabão em Pó Coco', marca: 'Urca', categoria: 'Sabão em pó', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/977363/p.jpg' },
  { nome: 'Urca Pedra Sanitária Lavanda', marca: 'Urca', categoria: 'Desinfetante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1152798/p.jpg' },
  { nome: 'Urca Pedra Sanitária Floral', marca: 'Urca', categoria: 'Desinfetante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1001937/g.jpg' },
  // ──────────── VEJA ────────────
  { nome: 'Veja Multiuso Original', marca: 'Veja', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/991559/g.jpg', tamanhos: [
    { label: '500ml', preco: 7.99 },
    { label: '5L', preco: 56.30 }
  ] },
  { nome: 'Veja Multiuso Lavanda com Álcool 500ml', marca: 'Veja', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/985117/m.jpg' },
  { nome: 'Veja Multiuso Campestre 500ml', marca: 'Veja', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/985118/m.jpg' },
  { nome: 'Veja Multiuso Bio Álcool 500ml', marca: 'Veja', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/975043/m.jpg' },
  { nome: 'Veja Multiuso Power Fusion Limão 500ml', marca: 'Veja', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/980864/p.jpg' },
  { nome: 'Veja Multiuso Power Fusion Coco 500ml', marca: 'Veja', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1283407/m.jpg' },
  { nome: 'Veja Multiuso Power Fusion Laranja 500ml', marca: 'Veja', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1283331/p.jpg' },
  { nome: 'Veja Uso Direto Original 900ml', marca: 'Veja', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/982484/g.jpg' },
  { nome: 'Veja Uso Direto Floral 900ml', marca: 'Veja', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/981328/p.jpg' },
  { nome: 'Veja Limpeza Pesada Original com Álcool 500ml', marca: 'Veja', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/971257/p.jpg' },
  { nome: 'Veja Limpeza Pesada X14 Cloro Ativo 500ml', marca: 'Veja', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/965938/m.jpg' },
  { nome: 'Veja Limpeza Pesada Pro Line 5L', marca: 'Veja', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1283403/m.jpg' },
  { nome: 'Veja Multiuso Pro Line Original 5L', marca: 'Veja', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1283405/p.jpg' },
  { nome: 'Veja Banheiro X14 Tira Limo 500ml', marca: 'Veja', categoria: 'Limpador banheiro', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/976258/g.jpg' },
  { nome: 'Veja Banheiro Oxi Antibac Ativo 500ml', marca: 'Veja', categoria: 'Limpador banheiro', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/989923/g.jpg' },
  { nome: 'Veja Banheiro X14 Sem Cloro 500ml', marca: 'Veja', categoria: 'Limpador banheiro', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/982485/p.jpg' },
  { nome: 'Veja Cozinha Desengordurante Original 500ml', marca: 'Veja', categoria: 'Desengordurante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/980175/g.jpg' },
  { nome: 'Veja Cozinha Desengordurante Laranja 500ml', marca: 'Veja', categoria: 'Desengordurante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1283330/g.jpg' },
  { nome: 'Veja Vidrex Limpa Vidros Squeeze 500ml', marca: 'Veja', categoria: 'Limpa vidro', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1283327/p.jpg' },
  { nome: 'Veja Vidrex Limpa Vidros Cristal Pulverizador 500ml', marca: 'Veja', categoria: 'Limpa vidro', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/975040/p.jpg' },
  { nome: 'Veja Vidrex Limpa Vidros Refil 500ml', marca: 'Veja', categoria: 'Limpa vidro', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1283181/g.jpg' },
  { nome: 'Veja Perfumes Flores do Mediterrâneo 500ml', marca: 'Veja', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/985231/p.jpg' },
  { nome: 'Veja Perfumes Lavanda da França 500ml', marca: 'Veja', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/986652/g.jpg' },
  { nome: 'Veja Perfumes Tulipa da Holanda 500ml', marca: 'Veja', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1148417/m.jpg' },
  { nome: 'Veja Perfumes Jasmim do Caribe 500ml', marca: 'Veja', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1151348/m.jpg' },
  // ──────────── YPÊ ────────────
  { nome: 'Ypê Detergente Neutro 500ml', marca: 'Ypê', categoria: 'Detergente', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1139623/g.jpg' },
  { nome: 'Ypê Detergente Limão 500ml', marca: 'Ypê', categoria: 'Detergente', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1140167/g.jpg' },
  { nome: 'Ypê Detergente Coco 500ml', marca: 'Ypê', categoria: 'Detergente', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1140870/m.jpg' },
  { nome: 'Ypê Detergente Maçã 500ml', marca: 'Ypê', categoria: 'Detergente', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1140176/m.jpg' },
  { nome: 'Ypê Detergente Clear 500ml', marca: 'Ypê', categoria: 'Detergente', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1141014/g.jpg' },
  { nome: 'Ypê Detergente Antibac 500ml', marca: 'Ypê', categoria: 'Detergente', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1273786/p.jpg.jpg' },
  { nome: 'Ypê Detergente Green 500ml', marca: 'Ypê', categoria: 'Detergente', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1139957/g.jpg' },
  { nome: 'Ypê Detergente Concentrado Antibac 416ml', marca: 'Ypê', categoria: 'Detergente', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/985377/g.jpg' },
  { nome: 'Ypê Detergente Pro 7L', marca: 'Ypê', categoria: 'Detergente', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1272478/p.jpg.jpg' },
  { nome: 'Ypê Sabão em Pó Power Act', marca: 'Ypê', categoria: 'Sabão em pó', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1279670/p.jpg.jpg', tamanhos: [
    { label: '800g', preco: 8.90 },
    { label: '1,6kg', preco: 16.02 }
  ] },
  { nome: 'Ypê Sabão em Pó Antibac 800g', marca: 'Ypê', categoria: 'Sabão em pó', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/984439/g.jpg' },
  { nome: 'Ypê Sabão em Pó Premium 800g', marca: 'Ypê', categoria: 'Sabão em pó', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/976700/m.jpg' },
  { nome: 'Ypê Sabão em Pó Pro 8kg', marca: 'Ypê', categoria: 'Sabão em pó', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1148402/m.jpg' },
  { nome: 'Ypê Lava Roupas Líquido Power Act 1L', marca: 'Ypê', categoria: 'Lava roupas', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/991469/g.jpg' },
  { nome: 'Ypê Lava Roupas Líquido Power Act Refil 900ml', marca: 'Ypê', categoria: 'Lava roupas', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1279835/g.jpg.jpg' },
  { nome: 'Ypê Lava Roupas Líquido Antibac 1L', marca: 'Ypê', categoria: 'Lava roupas', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1279700/m.jpg.jpg' },
  { nome: 'Ypê Amaciante Concentrado', marca: 'Ypê', categoria: 'Amaciante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/970914/m.jpg', tamanhos: [
    { label: '500ml', preco: 7.49 },
    { label: '1L', preco: 13.48 }
  ] },
  { nome: 'Ypê Amaciante Concentrado Antibac 500ml', marca: 'Ypê', categoria: 'Amaciante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/998811/m.jpg' },
  { nome: 'Ypê Amaciante Diluído 2L', marca: 'Ypê', categoria: 'Amaciante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/970918/p.jpg' },
  { nome: 'Ypê Amaciante Pro 5L', marca: 'Ypê', categoria: 'Amaciante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1269299/g.jpg.jpg' },
  { nome: 'Ypê Desinfetante Pinho Tradição 500ml', marca: 'Ypê', categoria: 'Desinfetante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1270451/m.jpg.jpg' },
  { nome: 'Ypê Desinfetante Pinho Citrus 500ml', marca: 'Ypê', categoria: 'Desinfetante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/993709/g.jpg' },
  { nome: 'Ypê Desinfetante Bak Lavanda', marca: 'Ypê', categoria: 'Desinfetante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1270901/p.jpg.jpg', tamanhos: [
    { label: '1L', preco: 5.49 },
    { label: '5L', preco: 21.49 }
  ] },
  { nome: 'Ypê Alvejante Sem Cloro', marca: 'Ypê', categoria: 'Alvejante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/982124/p.jpg', tamanhos: [
    { label: '1L', preco: 5.99 },
    { label: '2L', preco: 10.78 }
  ] },
  { nome: 'Ypê Água Sanitária', marca: 'Ypê', categoria: 'Alvejante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1270843/g.jpg.jpg', tamanhos: [
    { label: '1L', preco: 5.99 },
    { label: '2L', preco: 10.78 }
  ] },
  { nome: 'Ypê Água Sanitária Pro 5L', marca: 'Ypê', categoria: 'Alvejante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1271396/m.jpg.jpg' },
  { nome: 'Ypê Multiuso Antibac 500ml', marca: 'Ypê', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1273784/m.jpg.jpg' },
  { nome: 'Ypê Multiuso Original 500ml', marca: 'Ypê', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/969951/p.jpg' },
  { nome: 'Ypê Limpador Perfumado 500ml', marca: 'Ypê', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1139681/g.jpg' },
  { nome: 'Ypê Limpador Perfumado Pro 5L', marca: 'Ypê', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1269298/g.jpg.jpg' },
  { nome: 'Ypê Limpa Vidros 500ml', marca: 'Ypê', categoria: 'Limpa vidro', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1269300/p.jpg.jpg' },
  { nome: 'Ypê Tira Manchas em Pó 450g', marca: 'Ypê', categoria: 'Alvejante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/929119/g.jpg' },
  { nome: 'Ypê Tira Manchas Líquido 1L', marca: 'Ypê', categoria: 'Alvejante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1150872/p.jpg' },
  { nome: 'Ypê Tira Limo 500ml', marca: 'Ypê', categoria: 'Limpador banheiro', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1141812/m.jpg' },
  { nome: 'Ypê Sabão em Barra Neutro 180g 5un', marca: 'Ypê', categoria: 'Sabão em pó', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1269076/m.jpg.jpg' },
  { nome: 'Ypê Sabão em Barra Multiativo Azul 180g 5un', marca: 'Ypê', categoria: 'Sabão em pó', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1273904/p.jpg.jpg' },
  { nome: 'Ypê Sabão em Barra Coco 180g 5un', marca: 'Ypê', categoria: 'Sabão em pó', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1273917/p.jpg.jpg' },
  { nome: 'Ypê Sabão em Barra Aloe Vera 180g 5un', marca: 'Ypê', categoria: 'Sabão em pó', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1273915/m.jpg.jpg' },
  { nome: 'Ypê Lustra Móveis Lavanda 200ml', marca: 'Ypê', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/970912/m.jpg' },
  // ──────────── SPARTAN ────────────
  { nome: 'Spartan Detergente Desengordurante Alcalino 5L', marca: 'Spartan', categoria: 'Desengordurante', img: 'https://images.tcdn.com.br/img/img_prod/435415/marine_fresh_5_litros_spartan_1444_1_29d5ba901ce6bb8e12e9374a3bd755af.jpg' },
  { nome: 'Spartan Desinfetante Hospitalar 5L', marca: 'Spartan', categoria: 'Desinfetante', img: 'https://images.tcdn.com.br/img/img_prod/435415/desinfetante_para_roupas_hospitalares_chlorofresh_5l_spartan_4057_1_ff59f13ff9eec9f8e642d01515bbf8ed.jpg' },
  { nome: 'Spartan Limpador Multiuso Profissional 5L', marca: 'Spartan', categoria: 'Limpador multiuso', img: 'https://images.tcdn.com.br/img/img_prod/435415/limpador_de_uso_geral_clean_by_peroxy_2l_1214_1_0cde68388740fecb664154a5bcbcdd70.jpg' },
  { nome: 'Spartan Detergente Neutro Profissional 5L', marca: 'Spartan', categoria: 'Produto profissional', img: 'https://images.tcdn.com.br/img/img_prod/435415/detergente_para_lavar_roupas_com_braqueador_optico_brightenfresh_5l_spartan_3145_1_19f32d61ed7cb8fba066a2c30427bd9d.jpg' },
  { nome: 'Spartan Limpador de Pisos Profissional 5L', marca: 'Spartan', categoria: 'Produto profissional', img: 'https://www.lojadoprofissional.com.br/cdn/imagens/produtos/det/cj-24-limpador-desincrustante-de-pisos-5-litros-spartan-98489d056897f19677d5eeffb9ab9db3.jpg' },
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
