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
  'Produto profissional': '\u2699\uFE0F',
  'Sabão em barra': '\uD83E\uDDFC',
  'Pedra sanitária': '\uD83E\uDEA8',
  'Cápsulas de lavar': '\uD83D\uDC8A',
  'Saco de lixo': '\uD83D\uDDD1',
  'Álcool': '\uD83E\uDDF4',
  'Removedor': '\uD83E\uDDFD',
  'Tira manchas': '\u2728',
  'Brilha móveis': '\u2728',
  'Rodo': '\uD83E\uDDF9',
  'Vassoura': '\uD83E\uDDF9',
  'Bucha': '\uD83E\uDDFD'
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
  'Produto profissional': 'Profissional',
  'Sabão em barra': 'Sabão em Barra',
  'Pedra sanitária': 'Pedra Sanitária',
  'Cápsulas de lavar': 'Cápsulas',
  'Saco de lixo': 'Saco de Lixo',
  'Álcool': 'Álcool',
  'Removedor': 'Removedor',
  'Tira manchas': 'Tira Manchas',
  'Brilha móveis': 'Brilha Móveis',
  'Rodo': 'Rodo',
  'Vassoura': 'Vassoura',
  'Bucha': 'Bucha'
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
// Fallback usado quando img do produto retorna 404. Cada URL foi validada como 200 OK.
// Evita emoji genérico aparecendo no catálogo quando o Atacadão faz migração VTex.
const realBrandImages = {
  'Veja':        'https://atacadaobr.vtexassets.com/arquivos/ids/991559/g.jpg',     // Veja Multiuso Original
  'Omo':         'https://atacadaobr.vtexassets.com/arquivos/ids/984439/g.jpg',     // Omo referência
  'Ypê':         'https://atacadaobr.vtexassets.com/arquivos/ids/1139623/g.jpg',    // Ypê Detergente Neutro
  'Ype':         'https://atacadaobr.vtexassets.com/arquivos/ids/1139623/g.jpg',
  'Bombril':     'https://atacadaobr.vtexassets.com/arquivos/ids/969435/m.jpg',
  'Minuano':     'https://atacadaobr.vtexassets.com/arquivos/ids/1270351/p.jpg',
  'Brilhante':   'https://atacadaobr.vtexassets.com/arquivos/ids/1139278/m.jpg',
  'Pinho Sol':   'https://atacadaobr.vtexassets.com/arquivos/ids/993709/g.jpg',
  'Ajax':        'https://atacadaobr.vtexassets.com/arquivos/ids/992318/m.jpg',
  'Ariel':       'https://atacadaobr.vtexassets.com/arquivos/ids/982841/m.jpg',
  'Downy':       'https://atacadaobr.vtexassets.com/arquivos/ids/969017/p.jpg',
  'Cif':         'https://atacadaobr.vtexassets.com/arquivos/ids/1156527/p.jpg',
  'Mr. Musculo': 'https://atacadaobr.vtexassets.com/arquivos/ids/1156408/g.jpg',
  'Mr. Músculo': 'https://atacadaobr.vtexassets.com/arquivos/ids/1156408/g.jpg',
  'Lysol':       'https://atacadaobr.vtexassets.com/arquivos/ids/977526/p.jpg',
  'Comfort':     'https://atacadaobr.vtexassets.com/arquivos/ids/970914/m.jpg',
  'Diversey':    '',
  'Urca':        'https://atacadaobr.vtexassets.com/arquivos/ids/1156968/g.jpg',
  'Zupp':        'https://atacadaobr.vtexassets.com/arquivos/ids/1004040/g.jpg',
  'Renko':       '',
  'Girando Sol': 'https://atacadaobr.vtexassets.com/arquivos/ids/1148908/p.jpg',
  'Spartan':     '',
  'Casa KM':     '',
  'Start':       '',
  'Branquinho':  '',
  'UAU':         'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/992590.jpg',
  'Castelo':     'https://t76496.vtexassets.com/arquivos/ids/155438-800-auto?v=637516767918600000',
  'Pato':        'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/7894650016084-29-01-2026-14-59-30-574.jpg',
  'Lysoform':    'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/3700-19-02-2024-13-10-19-06.jpg',
  'Embalixo':    'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/6585.jpg',
  'Tixan':       'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/938413-1-11-11-2025-13-14-42-975.jpg',
  'Vim':         'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/969210-1-19-09-2024-13-58-44-431.jpg',
  'Destac':      'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/87602-1-08-11-2023-14-27-44-935.jpg',
  'Búfalo':      'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/4163.jpg',
  'Tupi':        'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/2137.jpg',
  'Coperalcool': 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/alcool_liquido_1l_classico.jpg',
  'Candura':     'https://coopsp.vtexassets.com/arquivos/ids/244676-800-800?v=638660637358230000',
  'Luar':        'https://www.luarmagico.com.br/wp-content/uploads/2021/12/gel_70_500ml_227.gif'
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
  'Diversey': '00695C', 'Renko': '283593', 'Branquinho': '4A90D9',
  'UAU': 'E91E63', 'Castelo': 'D32F2F',
  'Pato': '1976D2', 'Lysoform': 'C62828', 'Embalixo': '2E7D32',
  'Tixan': 'F57C00', 'Vim': '0277BD', 'Destac': '6A1B9A',
  'Búfalo': '424242', 'Tupi': '00796B', 'Coperalcool': '4527A0',
  'Candura': '00ACC1', 'Luar': '5E35B1',
  'Bulnez': '795548', 'Condor': '1565C0', 'Santa Maria': '00897B',
  'Mileva': 'C2185B', 'Alklin': 'F57C00', 'Alkin': 'EF6C00', 'Brilhus': '7B1FA2',
  'Plasútil': '388E3C', 'Bonitta': 'FBC02D', "Natu's Fran": '6D4C41',
  'Celeste': '0288D1', 'Esfrebom': '00897B', 'Assolan': 'F44336', 'Lanux': '5D4037'
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
  { id:9001, nome:'Esponja Dupla Face Zupp',          marca:'Zupp', categoria:'Esponja',          img:'https://www.zuppani.ind.br/static/arquivos/produto-zuppani-esponja-1-552411.png' },
  { id:9002, nome:'Óleos e Essências Zupp 120ml',     marca:'Zupp', categoria:'Aromatizador',        img:'https://atacadaobr.vtexassets.com/arquivos/ids/1148469/g.jpg' },
  { id:9003, nome:'Desinfetante Zupp 500ml',          marca:'Zupp', categoria:'Desinfetante',        img:'https://atacadaobr.vtexassets.com/arquivos/ids/1145223/g.jpg' },
  { id:9004, nome:'Álcool Limpador Pesado Zupp',      marca:'Zupp', categoria:'Limpador multiuso',   img:'https://atacadaobr.vtexassets.com/arquivos/ids/1158034/g.jpg' },
  { id:9005, nome:'Limpador Perfumado Zupp 500ml',    marca:'Zupp', categoria:'Limpador multiuso',   img:'https://atacadaobr.vtexassets.com/arquivos/ids/1145227/g.jpg' },
  { id:9006, nome:'Multiuso Power Zupp',              marca:'Zupp', categoria:'Limpador multiuso',   img:'https://atacadaobr.vtexassets.com/arquivos/ids/1148464/g.jpg' },
  { id:9007, nome:'Limpa Vidros Zupp 500ml',          marca:'Zupp', categoria:'Limpa vidro',         img:'https://atacadaobr.vtexassets.com/arquivos/ids/1149977/g.jpg' },
  { id:9008, nome:'Tira Limo Zupp',                   marca:'Zupp', categoria:'Limpador multiuso',   img:'https://atacadaobr.vtexassets.com/arquivos/ids/1151632/g.jpg' },
  { id:9009, nome:'Detergente Zupp 500ml',            marca:'Zupp', categoria:'Detergente',          img:'https://atacadaobr.vtexassets.com/arquivos/ids/1004040/g.jpg' },
  { id:9010, nome:'Água Sanitária Zupp 1L',           marca:'Zupp', categoria:'Alvejante',           img:'https://atacadaobr.vtexassets.com/arquivos/ids/1141960/g.jpg' },
  { id:9011, nome:'Alvejante Zupp 1L',                marca:'Zupp', categoria:'Alvejante',           img:'https://atacadaobr.vtexassets.com/arquivos/ids/994757/g.jpg' },
  { id:9012, nome:'Esponja de Aço Inox Zupp',         marca:'Zupp', categoria:'Esponja',          img:'https://www.zuppani.ind.br/static/arquivos/esponja-de-aco-final-1-compressed-12671613.jpg' },
  { id:9013, nome:'Detergente Zupplin 1L',            marca:'Zupp', categoria:'Detergente',          img:'https://atacadaobr.vtexassets.com/arquivos/ids/994761/g.jpg' },
  { id:9014, nome:'Sabão em Barra Zupp 1kg',          marca:'Zupp', categoria:'Sabão em barra',         img:'https://atacadaobr.vtexassets.com/arquivos/ids/1004045/g.jpg' },
  { id:9015, nome:'Limpa Inox Zupp',                  marca:'Zupp', categoria:'Limpador multiuso',   img:'https://atacadaobr.vtexassets.com/arquivos/ids/994760/g.jpg' },
  { id:9016, nome:'Amaciante Zupp 1,8L',              marca:'Zupp', categoria:'Amaciante',           img:'https://atacadaobr.vtexassets.com/arquivos/ids/1148484/g.jpg' },
  { id:9017, nome:'Lava Louças em Pasta Zupp 500g',   marca:'Zupp', categoria:'Detergente',          img:'https://atacadaobr.vtexassets.com/arquivos/ids/1004045/g.jpg' },
  { id:9018, nome:'Amaciante Zupp 5L',                marca:'Zupp', categoria:'Amaciante',           img:'https://atacadaobr.vtexassets.com/arquivos/ids/1148483/g.jpg' },
  { id:9019, nome:'Detergente Zupplin 5L',            marca:'Zupp', categoria:'Detergente'          },
  { id:9020, nome:'Água Sanitária Zupp 2L',           marca:'Zupp', categoria:'Alvejante',           img:'https://atacadaobr.vtexassets.com/arquivos/ids/1142130/g.jpg' },
  { id:9021, nome:'Esponja Antiaderente Zupp',        marca:'Zupp', categoria:'Esponja',          img:'https://www.zuppani.ind.br/static/arquivos/produto-zuppani-esponja-antiaderente-3781119.png' },
  { id:9022, nome:'Limpador Perfumes e Encanto Zupp 1L', marca:'Zupp', categoria:'Limpador multiuso', img:'https://atacadaobr.vtexassets.com/arquivos/ids/1145227/g.jpg' },
  { id:9023, nome:'Lava Louças em Pasta Zupp 200g',   marca:'Zupp', categoria:'Detergente',          img:'https://atacadaobr.vtexassets.com/arquivos/ids/1004045/g.jpg' },
  { id:9024, nome:'Detergente Zupp 5L',               marca:'Zupp', categoria:'Detergente',          img:'https://atacadaobr.vtexassets.com/arquivos/ids/1004040/g.jpg' },
  { id:9025, nome:'Desinfetante Zupp 1L',             marca:'Zupp', categoria:'Desinfetante',        img:'https://atacadaobr.vtexassets.com/arquivos/ids/1145227/g.jpg' },
  { id:9026, nome:'Água Sanitária Zupp 5L',           marca:'Zupp', categoria:'Alvejante',           img:'https://atacadaobr.vtexassets.com/arquivos/ids/1142738/g.jpg' },
  { id:9027, nome:'Esponja Lã de Aço Zupp',           marca:'Zupp', categoria:'Esponja',          img:'https://www.zuppani.ind.br/static/arquivos/mockup-esponja-la-aco-1131775.png' },
  { id:9028, nome:'Desinfetante Zupp 2L',             marca:'Zupp', categoria:'Desinfetante',        img:'https://atacadaobr.vtexassets.com/arquivos/ids/1145223/g.jpg' },
];

// ============ PREÇOS (atacado + 70%) ============
const MARGEM = 1.28;

const precosBase = {
  "Veja:Limpador multiuso": 11.19, "Veja:Desinfetante": 11.89, "Veja:Limpa vidro": 12.59,
  "Veja:Limpador banheiro": 18.06, "Veja:Desengordurante": 15.26, "Veja:Limpador cozinha": 15.26,
  "Omo:Sabão em pó": 20.86, "Omo:Lava roupas": 26.46,
  "Ypê:Detergente": 4.19, "Ypê:Desinfetante": 7.69, "Ypê:Limpador multiuso": 6.99,
  "Ypê:Lava roupas": 13.86, "Ypê:Sabão em pó": 12.46, "Ypê:Alvejante": 8.39, "Ypê:Amaciante": 10.49,
  "Bombril:Saponáceo": 6.99, "Bombril:Limpador multiuso": 7.69,
  "Minuano:Detergente": 2.79, "Minuano:Sabão em pó": 7.69, "Minuano:Amaciante": 9.79, "Minuano:Desinfetante": 6.29,
  "Brilhante:Sabão em pó": 13.86, "Brilhante:Lava roupas": 19.46, "Brilhante:Amaciante": 12.46, "Brilhante:Alvejante": 9.66,
  "Ariel:Sabão em pó": 23.66, "Ariel:Lava roupas": 32.06,
  "Downy:Amaciante": 20.86,
  "Comfort:Amaciante": 18.06, "Comfort:Aromatizador": 20.86,
  "Pinho Sol:Desinfetante": 9.66, "Pinho Sol:Limpador multiuso": 10.49, "Pinho Sol:Aromatizador": 12.46,
  "Lysol:Desinfetante": 20.86, "Lysol:Limpador banheiro": 23.66, "Lysol:Aromatizador": 22.26,
  "Ajax:Limpador multiuso": 7.5, "Ajax:Desengordurante": 9.5, "Ajax:Limpa vidro": 7.0,
  "Ajax:Limpador banheiro": 8.5, "Ajax:Limpador cozinha": 8.5, "Ajax:Desinfetante": 9.5,
  "Cif:Saponáceo": 12.59, "Cif:Limpador multiuso": 10.49, "Cif:Desengordurante": 18.06,
  "Cif:Limpador banheiro": 18.06, "Cif:Limpador cozinha": 18.06,
  "Mr. Músculo:Desengordurante": 19.59, "Mr. Músculo:Limpador banheiro": 20.86,
  "Mr. Músculo:Limpador cozinha": 19.59, "Mr. Músculo:Limpa vidro": 18.06,
  "Start:Detergente": 3.49, "Start:Desinfetante": 6.29, "Start:Limpador multiuso": 6.99,
  "Urca:Sabão em pó": 7.69, "Urca:Lava roupas": 11.06, "Urca:Amaciante": 8.39,
  "Urca:Desinfetante": 6.86, "Urca:Detergente": 5.59, "Urca:Limpador multiuso": 7.69,
  "Urca:Limpa vidro": 8.39, "Urca:Alvejante": 6.29, "Urca:Saponáceo": 6.29,
  "Girando Sol:Detergente": 3.49, "Girando Sol:Lava roupas": 12.46, "Girando Sol:Amaciante": 9.66, "Girando Sol:Sabão em pó": 8.39,
  "Girando Sol:Desinfetante": 7.69, "Girando Sol:Alvejante": 6.99, "Girando Sol:Limpador multiuso": 7.69,
  "Girando Sol:Limpador banheiro": 9.09, "Girando Sol:Saponáceo": 6.29,
  "Casa KM:Desinfetante": 7.69, "Casa KM:Limpador multiuso": 8.39,
  "Spartan:Produto profissional": 46.06, "Spartan:Desengordurante": 45.22, "Spartan:Desinfetante": 40.46, "Spartan:Limpador multiuso": 37.66,
  "Diversey:Produto profissional": 50.26, "Diversey:Desengordurante": 48.86, "Diversey:Desinfetante": 46.06,
  "Renko:Limpa vidro": 41.86, "Renko:Desinfetante": 40.46, "Renko:Limpador multiuso": 37.66, "Renko:Produto profissional": 46.06,
  "Renko:Desengordurante": 40.46, "Renko:Aromatizador": 34.86,
  "Omo:Alvejante": 13.86,
  "Bombril:Desinfetante": 6.99, "Bombril:Detergente": 4.19, "Bombril:Amaciante": 11.19, "Bombril:Esponja": 4.89,
  "Ajax:Desinfetante": 8.5,
  "Cif:Limpa vidro": 13.86, "Cif:Desengordurante": 18.06,
  "Mr. Músculo:Limpador multiuso": 19.59,
  "Minuano:Limpador multiuso": 6.99, "Minuano:Limpa vidro": 7.69, "Minuano:Sabão em pó": 7.69,
  "Ypê:Limpa vidro": 8.39, "Ypê:Limpador banheiro": 9.66,
  "Lysol:Limpador banheiro": 23.66,
  "Downy:Aromatizador": 20.86,
  "Start:Desengordurante": 7.69, "Start:Saponáceo": 6.29, "Start:Limpador banheiro": 8.39,
  "Start:Lava roupas": 13.86, "Start:Amaciante": 11.06, "Start:Alvejante": 6.29,
  "Diversey:Detergente": 34.86, "Diversey:Limpador multiuso": 40.46, "Diversey:Amaciante": 48.86, "Diversey:Alvejante": 46.06,
  "Spartan:Limpador multiuso": 37.66,
  "Zupp:Sabão em barra": 9.09, "Girando Sol:Sabão em barra": 4.89, "Minuano:Sabão em barra": 4.19,
  "Ypê:Sabão em barra": 4.89, "Urca:Pedra sanitária": 4.89, "Ariel:Cápsulas de lavar": 41.86,
};

// Preços específicos Zupp (id: preço)
const precosZupp = {
  9001: 4.89, 9002: 14.62, 9003: 6.93, 9004: 9.79, 9005: 10.77, 9006: 7.41,
  9007: 14.97, 9008: 13.29, 9009: 4.05, 9010: 8.39, 9011: 10.49, 9012: 5.59,
  9013: 12.46, 9014: 9.09, 9015: 12.87, 9016: 22.26, 9017: 19.17, 9018: 48.86,
  9019: 41.86, 9020: 13.29, 9021: 10.07, 9022: 17.21, 9023: 10.63, 9024: 20.86,
  9025: 8.37, 9026: 26.46, 9027: 4.61, 9028: 13.85,
};

// Função para obter preço (atacado + 25%)
// precosBase = preço de atacado para tamanho padrão (500ml/800g)
// Parser robusto extrai volume real do nome e aplica multiplicador tabelado.
// Evita bugs como "1,8L" casar com regra de 8L, ou "1,6kg" casar com regra de 6kg.
function extractVolumeMl(nome) {
  // Procura primeiro padrão <numero><unidade>. Ordem importa: kg antes de g, L antes de ml.
  // Aceita vírgula ou ponto como separador decimal.
  const patterns = [
    { re: /(\d+(?:[.,]\d+)?)\s*kg\b/i,   factor: 1000 },
    { re: /(\d+(?:[.,]\d+)?)\s*[Ll]\b/,  factor: 1000 },
    { re: /(\d+(?:[.,]\d+)?)\s*ml\b/i,   factor: 1    },
    { re: /(\d+(?:[.,]\d+)?)\s*g\b/i,    factor: 1    },
  ];
  for (const p of patterns) {
    const m = nome.match(p.re);
    if (m) return parseFloat(m[1].replace(',', '.')) * p.factor;
  }
  return null;
}

// Multiplicador de volume baseado em mL (1g ≈ 1ml para fins de preço).
// Calibrado empiricamente pela curva de atacado do Atacadão — referência 500ml = 1.0x.
function volumeMultiplier(ml) {
  if (ml <= 350)   return 0.85;  // 300g/ml
  if (ml <= 450)   return 0.95;  // 400g/ml
  if (ml <= 550)   return 1.00;  // 500ml = base
  if (ml <= 670)   return 1.05;  // 600ml
  if (ml <= 770)   return 1.10;  // 700-750ml
  if (ml <= 870)   return 1.15;  // 800g/ml
  if (ml <= 970)   return 1.20;  // 900-950ml
  if (ml <= 1100)  return 1.30;  // 1L/1kg/1000ml
  if (ml <= 1350)  return 1.40;  // 1,2L / 1,3L
  if (ml <= 1550)  return 1.50;  // 1,5L
  if (ml <= 1750)  return 1.55;  // 1,6-1,7kg
  if (ml <= 1950)  return 1.60;  // 1,8-1,9L
  if (ml <= 2100)  return 1.65;  // 2L
  if (ml <= 2350)  return 1.80;  // 2,2-2,3kg
  if (ml <= 2700)  return 1.95;  // 2,4-2,6L/kg
  if (ml <= 3300)  return 2.20;  // 3L/kg
  if (ml <= 4100)  return 2.80;  // 3,5-4L/kg
  if (ml <= 5500)  return 3.20;  // 5L/kg
  if (ml <= 6500)  return 3.70;  // 6L
  if (ml <= 7500)  return 4.20;  // 7L
  if (ml <= 9500)  return 4.80;  // 8-9L/kg
  if (ml <= 11000) return 5.50;  // 10L/kg
  if (ml <= 16000) return 7.50;  // 15L
  if (ml <= 21000) return 9.50;  // 20L
  // > 20L: extrapolação linear (cada 5L = +1.5x)
  return 9.5 + ((ml - 20000) / 5000) * 1.5;
}

// Detecta pack ("5un", "4x") — só aplica desconto suave quando há volume líquido definido
// (evita overpricing em sabão em barra cuja base compartilha preço com sabão em pó).
function packMultiplier(nome, ml) {
  // Sabão em barra não tem base própria; skip pack pra não inflar
  if (/barra/i.test(nome)) return 1;
  // Sem volume líquido extraído, não sabemos o ref — skip pack
  if (ml == null) return 1;
  const m = nome.match(/(\d+)\s*(?:un|unidades?)\b/i) || nome.match(/\b(\d+)\s*x\b/i);
  if (!m) return 1;
  const n = parseInt(m[1], 10);
  if (!isFinite(n) || n <= 1 || n > 24) return 1;
  // Desconto de pack (atacado): 3un→2.5x, 5un→3.7x, 10un→6.3x
  return Math.pow(n, 0.8);
}

function getPrecoRevenda(produto) {
  const key = produto.marca + ':' + produto.categoria;
  let base = precosZupp[produto.id] || precosBase[key];
  if (!base) return null;
  const nome = produto.nome || '';
  const ml = extractVolumeMl(nome);
  if (ml != null) base = base * volumeMultiplier(ml);
  base = base * packMultiplier(nome, ml);
  const result = base * MARGEM;
  if (!isFinite(result) || result <= 0) return null;
  return result.toFixed(2);
}

// ============ CATÁLOGO COMPLETO DE PRODUTOS ============
const catalogProducts = [
  // ──────────── AJAX ────────────
  { nome: 'Ajax Multiuso Original 500ml', marca: 'Ajax', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/992318/m.jpg' },
  { nome: 'Ajax Multiuso Lavanda com Álcool 500ml', marca: 'Ajax', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1279578/p.jpg' },
  { nome: 'Ajax Fresh Original 500ml', marca: 'Ajax', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/907043/g.jpg' },
  { nome: 'Ajax Fresh Limão 500ml', marca: 'Ajax', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/907047/p.jpg' },
  { nome: 'Ajax Fresh Poder 500ml', marca: 'Ajax', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1141768/m.jpg' },
  { nome: 'Ajax Festa das Flores Bouquet de Flores 500ml', marca: 'Ajax', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1279441/m.jpg' },
  { nome: 'Ajax Festa das Flores Flores do Campo 500ml', marca: 'Ajax', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/908025/p.jpg' },
  { nome: 'Ajax Festa das Flores Flores de Lavanda 500ml', marca: 'Ajax', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1279601/m.jpg' },
  { nome: 'Ajax Festa das Flores Mar de Flores 500ml', marca: 'Ajax', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/986679/p.jpg' },
  { nome: 'Ajax Limpeza Pura Menta e Orquídea 500ml', marca: 'Ajax', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/985128/m.jpg' },
  { nome: 'Ajax Natural Essentials Lavanda 500ml', marca: 'Ajax', categoria: 'Limpador multiuso', img: 'https://acdn-us.mitiendanube.com/stores/002/328/045/products/d1956749b76710e42b1a6e04fac2ca63-dd0c5ef7d3834e0c8416839226177184-1024-1024.webp' },
  { nome: 'Ajax Natural Essentials Eucalipto e Citrus 500ml', marca: 'Ajax', categoria: 'Limpador multiuso', img: 'https://gbarbosa.vtexassets.com/arquivos/ids/244642-800-auto?v=638367098743930000' },
  { nome: 'Ajax Alternativa ao Cloro Floral 1,75L', marca: 'Ajax', categoria: 'Desinfetante', img: 'https://zonasul.vtexassets.com/arquivos/ids/3038720-800-auto?v=637792446765070000' },
  { nome: 'Ajax Desengordurante Cozinha 500ml', marca: 'Ajax', categoria: 'Desengordurante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1280512/m.jpg' },
  { nome: 'Ajax Limpador Banheiro 500ml', marca: 'Ajax', categoria: 'Limpador banheiro', img: 'https://coopsp.vtexassets.com/arquivos/ids/234503-800-800?v=638337715727300000' },
  { nome: 'Ajax Limpador Cozinha 500ml', marca: 'Ajax', categoria: 'Limpador cozinha', img: 'https://superangeloni.vtexassets.com/arquivos/ids/234357-800-auto?v=638515763732100000' },
  { nome: 'Ajax Limpa Vidros 500ml', marca: 'Ajax', categoria: 'Limpa vidro', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1280506/g.jpg' },
  // ──────────── ARIEL ────────────
  { nome: 'Ariel Sabão Líquido Expert Concentrado', marca: 'Ariel', categoria: 'Lava roupas', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1151370/g.jpg', tamanhos: [
    { label: '1,2L', preco: 22.9 },
    { label: '2L', preco: 35.32 },
    { label: '3L', preco: 49.81 }
  ] },
  { nome: 'Ariel Sabão Líquido 3 em 1 1,2L', marca: 'Ariel', categoria: 'Lava roupas', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/982841/m.jpg' },
  { nome: 'Ariel Sabão Líquido Toque de Downy 2L', marca: 'Ariel', categoria: 'Lava roupas', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1148575/p.jpg' },
  { nome: 'Ariel Sabão Líquido Cores Radiantes 2L', marca: 'Ariel', categoria: 'Lava roupas', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1146388/g.jpg' },
  { nome: 'Ariel Sabão Líquido Cores Radiantes Toque de Downy 2L', marca: 'Ariel', categoria: 'Lava roupas', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1144721/g.jpg' },
  { nome: 'Ariel Sabão Líquido Hipoalergênico Suave e Gentil 2L', marca: 'Ariel', categoria: 'Lava roupas', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1158502/p.jpg' },
  { nome: 'Ariel Sabão em Pó Expert', marca: 'Ariel', categoria: 'Sabão em pó', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/979613/p.jpg', tamanhos: [
    { label: '800g', preco: 16.9 },
    { label: '1,6kg', preco: 30.42 }
  ] },
  { nome: 'Ariel Power Pods 3 em 1 Cápsulas', marca: 'Ariel', categoria: 'Cápsulas de lavar', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1144554/p.jpg' },
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
    { label: '800g', preco: 9.9 },
    { label: '1,6kg', preco: 17.82 }
  ] },
  { nome: 'Brilhante Sabão em Pó Cuidado Total', marca: 'Brilhante', categoria: 'Sabão em pó', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1156226/m.jpg', tamanhos: [
    { label: '800g', preco: 9.9 },
    { label: '1,6kg', preco: 17.82 }
  ] },
  { nome: 'Brilhante Sabão em Pó Sem Perfume Ação Total 800g', marca: 'Brilhante', categoria: 'Sabão em pó', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1154402/g.jpg' },
  { nome: 'Brilhante Sabão em Pó Higiene Total 800g', marca: 'Brilhante', categoria: 'Sabão em pó', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1157252/p.jpg' },
  { nome: 'Brilhante Sabão Líquido Limpeza Total', marca: 'Brilhante', categoria: 'Lava roupas', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1157253/g.jpg', tamanhos: [
    { label: '1L', preco: 13.9 },
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
  { nome: 'Casa KM Casa & Cuidado Desinfetante Flores do Campo 500ml', marca: 'Casa KM', categoria: 'Desinfetante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1273172/g.jpg' },
  { nome: 'Casa KM Casa & Cuidado Desinfetante Original 500ml', marca: 'Casa KM', categoria: 'Desinfetante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/989841/p.jpg' },
  { nome: 'Casa KM Limpador Perfumado Concentrado 500ml', marca: 'Casa KM', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1141680/g.jpg' },
  // ──────────── CIF ────────────
  { nome: 'Cif Cremoso Original', marca: 'Cif', categoria: 'Saponáceo', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/985110/m.jpg', tamanhos: [
    { label: '250ml', preco: 8.99 },
    { label: '450ml', preco: 14.8 }
  ] },
  { nome: 'Cif Cremoso Limão', marca: 'Cif', categoria: 'Saponáceo', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1156231/p.jpg', tamanhos: [
    { label: '250ml', preco: 8.99 },
    { label: '450ml', preco: 14.8 }
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
    { label: '500ml', preco: 12.9 },
    { label: '1L', preco: 23.22 }
  ] },
  { nome: 'Comfort Concentrado Frescor Intenso', marca: 'Comfort', categoria: 'Amaciante', tamanhos: [
    { label: '500ml', preco: 12.9 },
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
  { nome: 'Downy Amaciante Concentrado Brisa de Verão 500ml', marca: 'Downy', categoria: 'Amaciante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1146379/p.jpg' },
  { nome: 'Downy Amaciante Concentrado Lírios do Campo', marca: 'Downy', categoria: 'Amaciante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1143933/g.jpg', tamanhos: [
    { label: '500ml', preco: 14.9 },
    { label: '3L', preco: 68.09 }
  ] },
  { nome: 'Downy Amaciante Concentrado Frescor da Primavera', marca: 'Downy', categoria: 'Amaciante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1272779/g.jpg', tamanhos: [
    { label: '500ml', preco: 14.9 },
    { label: '1L', preco: 26.82 }
  ] },
  { nome: 'Downy Amaciante Concentrado Água Fresca 500ml', marca: 'Downy', categoria: 'Amaciante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1270958/p.jpg' },
  { nome: 'Downy Amaciante Concentrado Brisa Intenso', marca: 'Downy', categoria: 'Amaciante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1149858/p.jpg', tamanhos: [
    { label: '500ml', preco: 14.9 },
    { label: '1L', preco: 26.82 }
  ] },
  { nome: 'Downy Amaciante Concentrado Brisa Suave 500ml', marca: 'Downy', categoria: 'Amaciante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1003769/m.jpg' },
  { nome: 'Downy Amaciante Concentrado Verão Tropical', marca: 'Downy', categoria: 'Amaciante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1287782/p.jpg', tamanhos: [
    { label: '500ml', preco: 14.9 },
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
  { nome: 'Girando Sol Detergente Coco 500ml', marca: 'Girando Sol', categoria: 'Detergente', img: 'https://girandosol.com.br/wp-content/uploads/2025/08/Coco_550x700-1.png' },
  { nome: 'Girando Sol Detergente Maçã 500ml', marca: 'Girando Sol', categoria: 'Detergente', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1142482/m.jpg' },
  { nome: 'Girando Sol Detergente Glicerina 500ml', marca: 'Girando Sol', categoria: 'Detergente', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1142485/p.jpg' },
  { nome: 'Girando Sol Amaciante Concentrado Coco e Baunilha 1L', marca: 'Girando Sol', categoria: 'Amaciante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1099799/g.jpg' },
  { nome: 'Girando Sol Amaciante Rosas e Lavanda', marca: 'Girando Sol', categoria: 'Amaciante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1141454/m.jpg', tamanhos: [
    { label: '2L', preco: 6.9 },
    { label: '5L', preco: 15.01 }
  ] },
  { nome: 'Girando Sol Amaciante Floral Paris', marca: 'Girando Sol', categoria: 'Amaciante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1149254/g.jpg', tamanhos: [
    { label: '2L', preco: 6.9 },
    { label: '5L', preco: 15.01 }
  ] },
  { nome: 'Girando Sol Amaciante Paixão Secreta', marca: 'Girando Sol', categoria: 'Amaciante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1146579/m.jpg', tamanhos: [
    { label: '2L', preco: 6.9 },
    { label: '5L', preco: 15.01 }
  ] },
  { nome: 'Girando Sol Amaciante Hipoalergênico', marca: 'Girando Sol', categoria: 'Amaciante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1153030/m.jpg', tamanhos: [
    { label: '2L', preco: 6.9 },
    { label: '5L', preco: 15.01 }
  ] },
  { nome: 'Girando Sol Amaciante Hipoalergênico Talco Delicado 2L', marca: 'Girando Sol', categoria: 'Amaciante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1142498/p.jpg' },
  { nome: 'Girando Sol Lava Roupas Líquido Ação Total', marca: 'Girando Sol', categoria: 'Lava roupas', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1153031/p.jpg', tamanhos: [
    { label: '1L', preco: 8.9 },
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
  { nome: 'Girando Sol Limpador Tira Limo Cloro Ativo 500ml', marca: 'Girando Sol', categoria: 'Limpador banheiro', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1269339/m.jpg' },
  { nome: 'Girando Sol Limpador Limpeza Pesada Original 500ml', marca: 'Girando Sol', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1099800/g.jpg' },
  { nome: 'Girando Sol Saponáceo Cremoso Limão 300ml', marca: 'Girando Sol', categoria: 'Saponáceo', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1269345/g.jpg' },
  { nome: 'Girando Sol Sabão em Barra Coco', marca: 'Girando Sol', categoria: 'Sabão em barra', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1099825/g.jpg', tamanhos: [
    { label: '200g', preco: 5.99 },
    { label: '400g', preco: 10.78 }
  ] },
  { nome: 'Girando Sol Sabão em Barra Glicerinado Neutro 200g', marca: 'Girando Sol', categoria: 'Sabão em barra', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1269250/p.jpg' },
  { nome: 'Girando Sol Sabão em Barra Tradicional 180g', marca: 'Girando Sol', categoria: 'Sabão em barra', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1148912/g.jpg' },
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
  { nome: 'Minuano Sabão Glicerinado Neutro 5un', marca: 'Minuano', categoria: 'Sabão em pó', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1270351/p.jpg' },
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
  { nome: 'Minuano Sabão em Barra Coco 200g', marca: 'Minuano', categoria: 'Sabão em barra', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/970114/m.jpg' },
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
    { label: '800g', preco: 14.9 },
    { label: '1,6kg', preco: 26.82 },
    { label: '2,2kg', preco: 35.13 }
  ] },
  { nome: 'Omo Sabão em Pó Lavagem Perfeita Sanitiza & Higieniza', marca: 'Omo', categoria: 'Sabão em pó', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1148338/p.jpg', tamanhos: [
    { label: '800g', preco: 14.9 },
    { label: '1,6kg', preco: 26.82 }
  ] },
  { nome: 'Omo Sabão em Pó Puro Cuidado', marca: 'Omo', categoria: 'Sabão em pó', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1146471/p.jpg', tamanhos: [
    { label: '800g', preco: 14.9 },
    { label: '1,6kg', preco: 26.82 }
  ] },
  { nome: 'Omo Sabão em Pó Lavanda 800g', marca: 'Omo', categoria: 'Sabão em pó', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1152859/g.jpg' },
  { nome: 'Omo Sabão Líquido Lavagem Perfeita', marca: 'Omo', categoria: 'Lava roupas', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/972014/p.jpg', tamanhos: [
    { label: '1L', preco: 18.9 },
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
    { label: '500ml', preco: 6.9 },
    { label: '1L', preco: 12.42 },
    { label: '3,8L', preco: 38.53 }
  ] },
  { nome: 'Pinho Sol Desinfetante Lavanda', marca: 'Pinho Sol', categoria: 'Desinfetante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1279516/g.jpg', tamanhos: [
    { label: '500ml', preco: 6.9 },
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
    { label: '1L', preco: 29.9 },
    { label: '5L', preco: 117.06 }
  ] },
  { nome: 'Renko Klyo Limpa Inox 1L', marca: 'Renko', categoria: 'Limpador multiuso', img: 'https://images.tcdn.com.br/img/img_prod/435415/klyo_limpa_inox_1l_renko_4744_1_c18ebb07104822708aa781322c3cec1a.jpg' },
  { nome: 'Renko Klyo Oxy Limpador de Uso Geral', marca: 'Renko', categoria: 'Limpador multiuso', tamanhos: [
    { label: '1L', preco: 26.9 },
    { label: '5L', preco: 105.31 }
  ] },
  { nome: 'Renko Klyo Oxy Floral Limpador de Uso Geral 5L', marca: 'Renko', categoria: 'Limpador multiuso', img: 'https://images.tcdn.com.br/img/img_prod/435415/limpador_de_uso_geral_a_base_de_peroxido_klyo_oxy_floral_1l_renko_3515_1_d410bd1864a34e193e4fc64ebaedb4b9.jpg' },
  { nome: 'Renko Klyo Floor Limpador Pesado Pisos e Porcelanato 1L', marca: 'Renko', categoria: 'Limpador multiuso', img: 'https://images.tcdn.com.br/img/img_prod/435415/klyo_floor_limpador_pesado_para_piso_1l_2850_1_20231229112833.jpg' },
  { nome: 'Renko Chef Detergente Desengordurante Alcalino 1L', marca: 'Renko', categoria: 'Desengordurante', img: 'https://images.tcdn.com.br/img/img_prod/435415/detergente_desengordurante_alcalino_chef_1l_renko_2941_1_5d8e5571ce8db1b0a7ed874aff65ff4d.jpg' },
  { nome: 'Renko Chef Clor Detergente Desinfetante Clorado 1L', marca: 'Renko', categoria: 'Desinfetante', img: 'https://images.tcdn.com.br/img/img_prod/435415/desinfetante_uso_geral_mirax_floral_bouquet_concentrado_5l_renko_2258_1_20231229112924.png' },
  { nome: 'Renko Magic Flot Limpador por Flotação', marca: 'Renko', categoria: 'Produto profissional', img: 'https://images.tcdn.com.br/img/img_prod/435415/limpador_por_flotacao_magic_flot_1l_renko_3331_1_ab1b7ea19b5ef345a288045842338b18_20231229112836.jpg', tamanhos: [
    { label: '1L', preco: 32.9 },
    { label: '5L', preco: 128.8 }
  ] },
  { nome: 'Renko Mirax Air Neutralizador de Odor 1L', marca: 'Renko', categoria: 'Aromatizador', img: 'https://images.tcdn.com.br/img/img_prod/435415/mirax_air_odorizador_de_ambiente_limao_siciliano_500ml_renko_4742_1_7f2b1ec069163cce466e427e2652ff9b.jpg' },
  { nome: 'Renko Mirax Tecido e Ar Neutralizador de Odor 5L', marca: 'Renko', categoria: 'Aromatizador', img: 'https://images.tcdn.com.br/img/img_prod/435415/neutralizador_de_odor_mirax_tecido_e_ar_5l_renko_2284_1_169004f25a6a106d4b3f5bc38f5187c1.jpg' },
  { nome: 'Renko Eco Orange Removedor Desengraxante 1L', marca: 'Renko', categoria: 'Desengordurante', img: 'https://images.tcdn.com.br/img/img_prod/435415/removedor_desengraxante_a_base_de_d_limoneno_eco_orange_1l_1472_1_a03fd6dded3f1be71b011f1235751f25.jpg' },
  { nome: 'Renko Nixx Flot Removedor de Manchas em Tecidos', marca: 'Renko', categoria: 'Produto profissional', img: 'https://images.tcdn.com.br/img/img_prod/435415/removedor_de_manchas_em_tecidos_nixx_flot_1l_renko_3213_1_c1c9b2266ad4a64ef58f8ebc98fd2e35_20231229112922.jpg', tamanhos: [
    { label: '1L', preco: 32.9 },
    { label: '5L', preco: 128.8 }
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
    { label: '1L', preco: 7.9 },
    { label: '3L', preco: 20.06 },
    { label: '5L', preco: 30.93 }
  ] },
  { nome: 'Urca Lava Roupas Líquido Coco', marca: 'Urca', categoria: 'Lava roupas', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1143617/p.jpg', tamanhos: [
    { label: '500ml', preco: 7.9 },
    { label: '3L', preco: 36.1 }
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
    { label: '500ml', preco: 4.9 },
    { label: '2L', preco: 15.88 },
    { label: '5L', preco: 34.53 }
  ] },
  { nome: 'Urca Lava Louças Clear 5L', marca: 'Urca', categoria: 'Detergente', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1276941/m.jpg', tamanhos: [{ label: '5L', preco: 16.9 }] },
  { nome: 'Urca Lava Louças Neutro 5L', marca: 'Urca', categoria: 'Detergente', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1145815/g.jpg', tamanhos: [{ label: '5L', preco: 16.9 }] },
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
    { label: '1,5L', preco: 11.4 },
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
  { nome: 'Urca Pedra Sanitária Lavanda', marca: 'Urca', categoria: 'Pedra sanitária' },
  { nome: 'Urca Pedra Sanitária Floral', marca: 'Urca', categoria: 'Pedra sanitária', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1001937/g.jpg' },
  // ──────────── VEJA ────────────
  { nome: 'Veja Multiuso Original', marca: 'Veja', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/991559/g.jpg', tamanhos: [
    { label: '500ml', preco: 7.99 },
    { label: '5L', preco: 56.3 }
  ] },
  { nome: 'Veja Multiuso Lavanda com Álcool 500ml', marca: 'Veja', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/985117/m.jpg' },
  { nome: 'Veja Multiuso Campestre 500ml', marca: 'Veja', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/985118/m.jpg' },
  { nome: 'Veja Multiuso Bio Álcool 500ml', marca: 'Veja', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/975043/m.jpg' },
  { nome: 'Veja Multiuso Power Fusion Limão 500ml', marca: 'Veja', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/980864/p.jpg' },
  { nome: 'Veja Multiuso Power Fusion Coco 500ml', marca: 'Veja', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1283791/m.jpg' },
  { nome: 'Veja Multiuso Power Fusion Laranja 500ml', marca: 'Veja', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1283716/p.jpg' },
  { nome: 'Veja Uso Direto Original 900ml', marca: 'Veja', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/982484/g.jpg' },
  { nome: 'Veja Uso Direto Floral 900ml', marca: 'Veja', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/981328/p.jpg' },
  { nome: 'Veja Limpeza Pesada Original com Álcool 500ml', marca: 'Veja', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/971257/p.jpg' },
  { nome: 'Veja Limpeza Pesada X14 Cloro Ativo 500ml', marca: 'Veja', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/965938/m.jpg' },
  { nome: 'Veja Limpeza Pesada Pro Line 5L', marca: 'Veja', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1283786/m.jpg' },
  { nome: 'Veja Multiuso Pro Line Original 5L', marca: 'Veja', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1283782/p.jpg' },
  { nome: 'Veja Banheiro X14 Tira Limo 500ml', marca: 'Veja', categoria: 'Limpador banheiro', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/976258/g.jpg' },
  { nome: 'Veja Banheiro Oxi Antibac Ativo 500ml', marca: 'Veja', categoria: 'Limpador banheiro', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/989923/g.jpg' },
  { nome: 'Veja Banheiro X14 Sem Cloro 500ml', marca: 'Veja', categoria: 'Limpador banheiro', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/982485/p.jpg' },
  { nome: 'Veja Cozinha Desengordurante Original 500ml', marca: 'Veja', categoria: 'Desengordurante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/980175/g.jpg' },
  { nome: 'Veja Cozinha Desengordurante Laranja 500ml', marca: 'Veja', categoria: 'Desengordurante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1283711/g.jpg' },
  { nome: 'Veja Vidrex Limpa Vidros Squeeze 500ml', marca: 'Veja', categoria: 'Limpa vidro', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1283709/p.jpg' },
  { nome: 'Veja Vidrex Limpa Vidros Cristal Pulverizador 500ml', marca: 'Veja', categoria: 'Limpa vidro', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/975040/p.jpg' },
  { nome: 'Veja Vidrex Limpa Vidros Refil 500ml', marca: 'Veja', categoria: 'Limpa vidro', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1283562/g.jpg' },
  { nome: 'Veja Perfumes Flores do Mediterrâneo 500ml', marca: 'Veja', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/985231/p.jpg' },
  { nome: 'Veja Perfumes Lavanda da França 500ml', marca: 'Veja', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/986652/g.jpg' },
  { nome: 'Veja Perfumes Tulipa da Holanda 500ml', marca: 'Veja', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1148417/m.jpg' },
  { nome: 'Veja Perfumes Jasmim do Caribe 500ml', marca: 'Veja', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1151348/m.jpg' },
  // ──────────── YPÊ ────────────
  { nome: 'Ypê Detergente Neutro', marca: 'Ypê', categoria: 'Detergente', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1139623/g.jpg', tamanhos: [{ label: '500ml', preco: 2.99, img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1139623/g.jpg' }, { label: '5L', preco: 20.95, img: 'https://coopsp.vtexassets.com/arquivos/ids/218348-800-800?v=637919544676630000' }] },
  { nome: 'Ypê Detergente Limão 500ml', marca: 'Ypê', categoria: 'Detergente', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1140167/g.jpg' },
  { nome: 'Ypê Detergente Coco 500ml', marca: 'Ypê', categoria: 'Detergente', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1140870/m.jpg' },
  { nome: 'Ypê Detergente Maçã 500ml', marca: 'Ypê', categoria: 'Detergente', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1140176/m.jpg' },
  { nome: 'Ypê Detergente Clear 500ml', marca: 'Ypê', categoria: 'Detergente', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1141014/g.jpg' },
  { nome: 'Ypê Detergente Antibac 500ml', marca: 'Ypê', categoria: 'Detergente', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1273786/p.jpg' },
  { nome: 'Ypê Detergente Green 500ml', marca: 'Ypê', categoria: 'Detergente', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1139957/g.jpg' },
  { nome: 'Ypê Detergente Concentrado Antibac 416ml', marca: 'Ypê', categoria: 'Detergente' },
  { nome: 'Ypê Detergente Pro 7L', marca: 'Ypê', categoria: 'Detergente', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1272478/p.jpg', tamanhos: [{ label: '7L', preco: 39.9 }] },
  { nome: 'Ypê Sabão em Pó Power Act', marca: 'Ypê', categoria: 'Sabão em pó', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1279670/p.jpg', tamanhos: [
    { label: '800g', preco: 8.9 },
    { label: '1,6kg', preco: 16.02 }
  ] },
  { nome: 'Ypê Sabão em Pó Antibac 800g', marca: 'Ypê', categoria: 'Sabão em pó', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/984439/g.jpg' },
  { nome: 'Ypê Sabão em Pó Premium 800g', marca: 'Ypê', categoria: 'Sabão em pó', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/976700/m.jpg' },
  { nome: 'Ypê Sabão em Pó Pro 8kg', marca: 'Ypê', categoria: 'Sabão em pó', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1148402/m.jpg' },
  { nome: 'Ypê Lava Roupas Líquido Power Act 1L', marca: 'Ypê', categoria: 'Lava roupas', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/991469/g.jpg' },
  { nome: 'Ypê Lava Roupas Líquido Power Act Refil 900ml', marca: 'Ypê', categoria: 'Lava roupas', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1279835/g.jpg' },
  { nome: 'Ypê Lava Roupas Líquido Antibac 1L', marca: 'Ypê', categoria: 'Lava roupas', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1279700/m.jpg' },
  { nome: 'Ypê Amaciante Concentrado', marca: 'Ypê', categoria: 'Amaciante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/970914/m.jpg', tamanhos: [
    { label: '500ml', preco: 7.49 },
    { label: '1L', preco: 13.48 }
  ] },
  { nome: 'Ypê Amaciante Concentrado Antibac 500ml', marca: 'Ypê', categoria: 'Amaciante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/998811/m.jpg' },
  { nome: 'Ypê Amaciante Diluído 2L', marca: 'Ypê', categoria: 'Amaciante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/970918/p.jpg' },
  { nome: 'Ypê Amaciante Pro 5L', marca: 'Ypê', categoria: 'Amaciante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1269299/g.jpg' },
  { nome: 'Ypê Desinfetante Pinho Tradição 500ml', marca: 'Ypê', categoria: 'Desinfetante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1270451/m.jpg' },
  { nome: 'Ypê Desinfetante Pinho Citrus 500ml', marca: 'Ypê', categoria: 'Desinfetante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/993709/g.jpg' },
  { nome: 'Ypê Desinfetante Bak Lavanda', marca: 'Ypê', categoria: 'Desinfetante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1270901/p.jpg', tamanhos: [
    { label: '1L', preco: 5.49 },
    { label: '5L', preco: 21.49 }
  ] },
  { nome: 'Ypê Alvejante Sem Cloro', marca: 'Ypê', categoria: 'Alvejante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/929119/g.jpg', tamanhos: [
    { label: '1L', preco: 5.99 },
    { label: '2L', preco: 10.78 }
  ] },
  { nome: 'Ypê Água Sanitária', marca: 'Ypê', categoria: 'Alvejante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1270843/g.jpg', tamanhos: [
    { label: '1L', preco: 5.99 },
    { label: '2L', preco: 10.78 }
  ] },
  { nome: 'Ypê Água Sanitária Pro 5L', marca: 'Ypê', categoria: 'Alvejante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1271396/m.jpg' },
  { nome: 'Ypê Multiuso Antibac 500ml', marca: 'Ypê', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1273784/m.jpg' },
  { nome: 'Ypê Multiuso Original 500ml', marca: 'Ypê', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/969951/p.jpg' },
  { nome: 'Ypê Limpador Perfumado 500ml', marca: 'Ypê', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1139681/g.jpg' },
  { nome: 'Ypê Limpador Perfumado Pro 5L', marca: 'Ypê', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1269298/g.jpg', tamanhos: [{ label: '5L', preco: 22.9 }] },
  { nome: 'Ypê Limpa Vidros 500ml', marca: 'Ypê', categoria: 'Limpa vidro', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1269300/p.jpg' },
  { nome: 'Ypê Tira Manchas em Pó 450g', marca: 'Ypê', categoria: 'Alvejante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/929119/g.jpg' },
  { nome: 'Ypê Tira Manchas Líquido 1L', marca: 'Ypê', categoria: 'Alvejante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/929119/g.jpg' },
  { nome: 'Ypê Tira Limo 500ml', marca: 'Ypê', categoria: 'Limpador banheiro', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1141812/m.jpg' },
  { nome: 'Ypê Sabão em Barra Neutro 180g 5un', marca: 'Ypê', categoria: 'Sabão em barra', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1269076/m.jpg' },
  { nome: 'Ypê Sabão em Barra Multiativo Azul 180g 5un', marca: 'Ypê', categoria: 'Sabão em barra', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1273904/p.jpg' },
  { nome: 'Ypê Sabão em Barra Coco 180g 5un', marca: 'Ypê', categoria: 'Sabão em barra', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1273917/p.jpg' },
  { nome: 'Ypê Sabão em Barra Aloe Vera 180g 5un', marca: 'Ypê', categoria: 'Sabão em barra', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1273915/m.jpg' },
  { nome: 'Ypê Lustra Móveis Lavanda 200ml', marca: 'Ypê', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/970912/m.jpg' },
  // ──────────── SPARTAN ────────────
  { nome: 'Spartan Detergente Desengordurante Alcalino 5L', marca: 'Spartan', categoria: 'Desengordurante', img: 'https://images.tcdn.com.br/img/img_prod/435415/marine_fresh_5_litros_spartan_1444_1_29d5ba901ce6bb8e12e9374a3bd755af.jpg' },
  { nome: 'Spartan Desinfetante Hospitalar 5L', marca: 'Spartan', categoria: 'Desinfetante', img: 'https://images.tcdn.com.br/img/img_prod/435415/desinfetante_para_roupas_hospitalares_chlorofresh_5l_spartan_4057_1_ff59f13ff9eec9f8e642d01515bbf8ed.jpg' },
  { nome: 'Spartan Limpador Multiuso Profissional 5L', marca: 'Spartan', categoria: 'Limpador multiuso', img: 'https://images.tcdn.com.br/img/img_prod/435415/limpador_de_uso_geral_clean_by_peroxy_2l_1214_1_0cde68388740fecb664154a5bcbcdd70.jpg' },
  { nome: 'Spartan Detergente Neutro Profissional 5L', marca: 'Spartan', categoria: 'Produto profissional', img: 'https://images.tcdn.com.br/img/img_prod/435415/detergente_para_lavar_roupas_com_braqueador_optico_brightenfresh_5l_spartan_3145_1_19f32d61ed7cb8fba066a2c30427bd9d.jpg' },
  { nome: 'Spartan Limpador de Pisos Profissional 5L', marca: 'Spartan', categoria: 'Produto profissional', img: 'https://www.lojadoprofissional.com.br/cdn/imagens/produtos/det/cj-24-limpador-desincrustante-de-pisos-5-litros-spartan-98489d056897f19677d5eeffb9ab9db3.jpg' },
  // ──────────── UAU (Ingleza) ────────────
  { nome: 'Limpador UAU Multiuso Lavanda', marca: 'UAU', categoria: 'Limpador multiuso', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/992590.jpg', tamanhos: [{ label: '500ml', preco: 4.12 }, { label: '1L', preco: 7.99 }, { label: '2L', preco: 11.5 }] },
  { nome: 'Limpador UAU Multiuso Flores Vermelhas e Sedução', marca: 'UAU', categoria: 'Limpador multiuso', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/6839.jpg', tamanhos: [{ label: '500ml', preco: 6.99 }, { label: '1,8L', preco: 11.9 }] },
  { nome: 'Limpador UAU Multiuso Flores e Frescor 500ml', marca: 'UAU', categoria: 'Limpador multiuso', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/990649-31-10-2023-17-06-26-47.jpg', tamanhos: [{ label: '500ml', preco: 6.99 }] },
  { nome: 'Limpador UAU Multiuso Chá Branco 480ml', marca: 'UAU', categoria: 'Limpador multiuso', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/7891242811263-04-02-2026-16-31-03-461.jpg', tamanhos: [{ label: '480ml', preco: 6.99 }] },
  { nome: 'Limpador UAU Multiuso Limão Siciliano 500ml', marca: 'UAU', categoria: 'Limpador multiuso', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/960858-31-10-2023-17-20-11-930.jpg', tamanhos: [{ label: '500ml', preco: 6.99 }] },
  { nome: 'UAU Neutraliza Odores Multiuso 500ml', marca: 'UAU', categoria: 'Limpador multiuso', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/970065-31-10-2023-17-10-57-465.jpg', tamanhos: [{ label: '500ml', preco: 4.19 }] },
  { nome: 'Limpador UAU Desengordurante Limão 500ml', marca: 'UAU', categoria: 'Desengordurante', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/5983.jpg', tamanhos: [{ label: '500ml', preco: 7.9 }] },
  { nome: 'UAU Cloro Ativo 4 em 1 500ml', marca: 'UAU', categoria: 'Desinfetante', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/986983-31-10-2023-16-58-58-476.jpg', tamanhos: [{ label: '500ml', preco: 6.29 }] },
  { nome: 'UAU Banheiro 7 em 1 Gatilho 500ml', marca: 'UAU', categoria: 'Limpador banheiro', img: 'https://uauingleza.com.br/wp-content/uploads/2024/02/Banheiro-7-em-1-gatilho-500mL.webp', tamanhos: [{ label: '500ml', preco: 12.9 }] },
  { nome: 'UAU Banheiro 7 em 1 Squeeze 500ml', marca: 'UAU', categoria: 'Limpador banheiro', img: 'https://uauingleza.com.br/wp-content/uploads/2024/03/UAU-Banheiro-500ml.webp', tamanhos: [{ label: '500ml', preco: 9.9 }] },
  { nome: 'Limpa Vidros UAU Blindex Gatilho 500ml', marca: 'UAU', categoria: 'Limpa vidro', img: 'https://uauingleza.com.br/wp-content/uploads/2024/03/UAU-Blindex-Limpa-Vidros-Gatilho-500ml.webp', tamanhos: [{ label: '500ml', preco: 10.23 }] },
  { nome: 'Limpa Box UAU 200ml', marca: 'UAU', categoria: 'Limpador banheiro', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/986985-limp-uau-box-200ml.jpg', tamanhos: [{ label: '200ml', preco: 9.9 }] },
  { nome: 'Limpador UAU Pisos Laminados 750ml', marca: 'UAU', categoria: 'Limpador multiuso', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/994434-1.jpg', tamanhos: [{ label: '750ml', preco: 12.9 }] },
  { nome: 'Limpa Pisos UAU Porcelanato 750ml', marca: 'UAU', categoria: 'Limpador multiuso', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/994435.jpg', tamanhos: [{ label: '750ml', preco: 12.9 }] },
  { nome: 'Limpador UAU Pisos de Madeira 750ml', marca: 'UAU', categoria: 'Limpador multiuso', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/7390.jpg', tamanhos: [{ label: '750ml', preco: 12.9 }] },
  { nome: 'Lava Roupas Líquido UAU Active', marca: 'UAU', categoria: 'Lava roupas', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/962032-1-22-11-2024-15-00-45-51.jpg', tamanhos: [{ label: '3L', preco: 24.9 }, { label: '5L', preco: 34.9 }] },
  { nome: 'Amaciante UAU Rosas e Sedução', marca: 'UAU', categoria: 'Amaciante', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/959339-1-22-11-2024-16-13-36-134.jpg', tamanhos: [{ label: '500ml', preco: 9.9 }, { label: '2L', preco: 12.9 }] },
  // ──────────── CASTELO (VINAGRE DE LIMPEZA) ────────────
  { nome: 'Vinagre de Álcool Castelo 750ml', marca: 'Castelo', categoria: 'Limpador multiuso', img: 'https://t76496.vtexassets.com/arquivos/ids/155438-800-auto?v=637516767918600000', tamanhos: [{ label: '750ml', preco: 4.49 }] },
  { nome: 'Vinagre de Álcool Castelo 6% Limpeza', marca: 'Castelo', categoria: 'Limpador multiuso', img: 'https://t76496.vtexassets.com/arquivos/ids/155508-800-auto?v=637539134473730000', tamanhos: [{ label: '2L', preco: 12.9, img: 'https://t76496.vtexassets.com/arquivos/ids/155508-800-auto?v=637539134473730000' }, { label: '10L', preco: 55.0, img: 'https://t76496.vtexassets.com/arquivos/ids/155509-800-auto?v=637539134482800000' }] },
  { nome: 'Vinagre de Álcool Castelo 6% Maçã Verde 2L', marca: 'Castelo', categoria: 'Limpador multiuso', img: 'https://t76496.vtexassets.com/arquivos/ids/155510-800-auto?v=637539134489070000', tamanhos: [{ label: '2L', preco: 13.9 }] },
  { nome: 'Vinagre de Álcool Castelo 6% Citrus 2L', marca: 'Castelo', categoria: 'Limpador multiuso', img: 'https://t76496.vtexassets.com/arquivos/ids/156134-800-auto?v=638731539749500000', tamanhos: [{ label: '2L', preco: 13.9 }] },
  { nome: 'Vinagre de Álcool Castelo 6% Limpeza e Bactericida 5L', marca: 'Castelo', categoria: 'Limpador multiuso', img: 'https://t76496.vtexassets.com/arquivos/ids/155509-800-auto?v=637539134482800000', tamanhos: [{ label: '5L', preco: 24.2 }] },
  // ──────────── BRANQUINHO ────────────
  { nome: 'Branquinho Sabão Querosene 5L', marca: 'Branquinho', categoria: 'Limpador multiuso', img: 'https://images.tcdn.com.br/img/img_prod/739678/limpador_multiuso_branquinho_5lt_mp_39691_1_fa7da032dba6281a0fbae35e9fde1c73.jpg', tamanhos: [{ label: '5L', preco: 15.3 }] },
  { nome: 'Branquinho Limpador Multiuso 5L', marca: 'Branquinho', categoria: 'Limpador multiuso', img: 'https://images.tcdn.com.br/img/img_prod/739678/limpador_multiuso_branquinho_5lt_mp_39691_1_fa7da032dba6281a0fbae35e9fde1c73.jpg', tamanhos: [{ label: '5L', preco: 15.3 }] },
  { nome: 'Branquinho Limpeza Pesada', marca: 'Branquinho', categoria: 'Limpador multiuso', img: 'https://images.tcdn.com.br/img/img_prod/739678/limpador_multiuso_branquinho_5lt_mp_39691_1_fa7da032dba6281a0fbae35e9fde1c73.jpg', tamanhos: [{ label: '2L', preco: 6.4, img: 'https://images.tcdn.com.br/img/img_prod/739678/limpador_multiuso_branquinho_5lt_mp_39691_1_fa7da032dba6281a0fbae35e9fde1c73.jpg' }, { label: '5L', preco: 18.9, img: 'https://images.tcdn.com.br/img/img_prod/739678/limpador_multiuso_branquinho_5lt_mp_39691_1_fa7da032dba6281a0fbae35e9fde1c73.jpg' }] },
  { nome: 'Branquinho Desengordurante', marca: 'Branquinho', categoria: 'Desengordurante', img: 'https://valescaind.com.br/wp-content/uploads/2021/05/Untitled-1.jpg', tamanhos: [{ label: '1L', preco: 8.9, img: 'https://valescaind.com.br/wp-content/uploads/2021/05/Untitled-1.jpg' }, { label: '2L', preco: 14.9, img: 'https://valescaind.com.br/wp-content/uploads/2021/05/branquinho-2.jpg' }] },
  { nome: 'Branquinho Sabão Líquido 2L', marca: 'Branquinho', categoria: 'Lava roupas', img: 'https://images.tcdn.com.br/img/img_prod/739678/limpador_multiuso_branquinho_5lt_mp_39691_1_fa7da032dba6281a0fbae35e9fde1c73.jpg', tamanhos: [{ label: '2L', preco: 24.9 }] },
  // ──────────── PRODUTOS 5L (ECONÔMICOS) ────────────
  { nome: 'Omo Lava Roupas Líquido Lavagem Perfeita 5L', marca: 'Omo', categoria: 'Lava roupas', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1156232/p.jpg', tamanhos: [{ label: '5L', preco: 72.9 }] },
  { nome: 'Brilhante Lava Roupas Líquido Limpeza Total 5L', marca: 'Brilhante', categoria: 'Lava roupas', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1145004/g.jpg', tamanhos: [{ label: '5L', preco: 55.9 }] },
  { nome: 'Comfort Amaciante Azul 5L', marca: 'Comfort', categoria: 'Amaciante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1145003/g.jpg', tamanhos: [{ label: '5L', preco: 49.9 }] },
  { nome: 'Ypê Amaciante Aconchego Azul 5L', marca: 'Ypê', categoria: 'Amaciante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1270469/g.jpg', tamanhos: [{ label: '5L', preco: 28.9 }] },
  { nome: 'Veja Multiuso Original Pro Line 5L', marca: 'Veja', categoria: 'Limpador multiuso', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1283521/g.jpg', tamanhos: [{ label: '5L', preco: 52.9 }] },
  // ──────────── PRODUTOS 7L / 10L / 20L (PROFISSIONAIS - GRANDE VOLUME) ────────────
  { nome: 'Omo Lavagem Perfeita PRO 7L', marca: 'Omo', categoria: 'Lava roupas', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1148340/g.jpg', tamanhos: [{ label: '7L', preco: 109.9 }] },
  { nome: 'Omo Perfect White PRO 7L', marca: 'Omo', categoria: 'Lava roupas', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1151512/m.jpg', tamanhos: [{ label: '7L', preco: 109.9 }] },
  { nome: 'Omo PRO Lavanderia Concentrado Original 7L', marca: 'Omo', categoria: 'Lava roupas', img: 'https://tb0932.vtexassets.com/arquivos/ids/174505-800-auto', tamanhos: [{ label: '7L', preco: 165.0 }] },
  { nome: 'Brilhante Alta Performance PRO 7L', marca: 'Brilhante', categoria: 'Lava roupas', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1152683/g.jpg', tamanhos: [{ label: '7L', preco: 78.9 }] },
  { nome: 'Comfort PRO Original 7L', marca: 'Comfort', categoria: 'Amaciante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1150479/g.jpg', tamanhos: [{ label: '7L', preco: 63.9 }] },
  { nome: 'Comfort Profissional Classic 10L', marca: 'Comfort', categoria: 'Amaciante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1150479/g.jpg', tamanhos: [{ label: '10L', preco: 95.9 }] },
  { nome: 'Comfort Lavanderia Concentrado 10L', marca: 'Comfort', categoria: 'Amaciante', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1150479/g.jpg', tamanhos: [{ label: '10L', preco: 185.0 }] },
  { nome: 'Comfort Super Concentrado PRO 20L', marca: 'Comfort', categoria: 'Amaciante', img: 'https://tb0932.vtexassets.com/arquivos/ids/169104/Amaciante-Roupas-Perfumadas-20L-105358.png', tamanhos: [{ label: '20L', preco: 480.0 }] },
  // ──────────── PATO ────────────
  { nome: 'Pato Desinfetante Violeta Virt 750ml', marca: 'Pato', categoria: 'Desinfetante', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/7894650016084-29-01-2026-14-59-30-574.jpg', tamanhos: [{ label: '750ml', preco: 7.99 }] },
  { nome: 'Pato Desodorante Block Lavanda 60ml', marca: 'Pato', categoria: 'Pedra sanitária', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/7894650015773_1-09-03-2026-10-17-03-280.jpg', tamanhos: [{ label: '60ml', preco: 9.49 }] },
  { nome: 'Pato Gel Adesivo Marine', marca: 'Pato', categoria: 'Pedra sanitária', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/995989-30-11-2023-17-00-58-528.jpg', tamanhos: [{ label: 'Refil 38g', preco: 9.99 }] },
  { nome: 'Pato Pastilha Adesiva Floral', marca: 'Pato', categoria: 'Pedra sanitária', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/937403-07-12-2023-15-22-03-769.jpeg', tamanhos: [{ label: 'Refil', preco: 10.49 }] },
  { nome: 'Pato Gel Adesivo Citrus', marca: 'Pato', categoria: 'Pedra sanitária', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/7894650009147_1-09-03-2026-10-25-11-184.jpg', tamanhos: [{ label: 'Refil 38g', preco: 9.99 }] },
  // ──────────── LYSOFORM ────────────
  { nome: 'Lysoform Desinfetante Bruto Original', marca: 'Lysoform', categoria: 'Desinfetante', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/3700-19-02-2024-13-10-19-06.jpg', tamanhos: [{ label: '500ml', preco: 11.9 }, { label: '1L', preco: 18.9 }, { label: '5L', preco: 46.9 }] },
  { nome: 'Lysoform Desinfetante Uso Geral Lavanda', marca: 'Lysoform', categoria: 'Desinfetante', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/942357-19-02-2024-11-26-52-213.jpg', tamanhos: [{ label: '1L', preco: 12.9 }, { label: '2L', preco: 22.9 }, { label: '5L', preco: 49.9 }] },
  { nome: 'Lysoform Desinfetante Uso Geral Citrus', marca: 'Lysoform', categoria: 'Desinfetante', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/937685-02-03-2023-17-11-03-767.jpg', tamanhos: [{ label: '1L', preco: 12.9 }, { label: '2L', preco: 22.9 }] },
  { nome: 'Lysoform Desinfetante Uso Geral Suave Odor', marca: 'Lysoform', categoria: 'Desinfetante', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/936807-29-09-2022-18-06-38-876.jpg', tamanhos: [{ label: '1L', preco: 12.9 }, { label: '2L', preco: 22.9 }] },
  { nome: 'Lysoform Desinfetante Uso Geral Original 2L', marca: 'Lysoform', categoria: 'Desinfetante', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/936808-29-09-2022-18-01-51-776.jpg', tamanhos: [{ label: '2L', preco: 22.9 }] },
  { nome: 'Lysoform Desinfetante Aerossol Original 432ml', marca: 'Lysoform', categoria: 'Desinfetante', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/937687-21-03-2023-19-01-44-103.jpg', tamanhos: [{ label: '432ml', preco: 24.9 }] },
  { nome: 'Lysoform Tira Limo Trigga 500ml', marca: 'Lysoform', categoria: 'Limpador banheiro', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/imagem-provisoria-28-04-2026-15-59-34-363.jpeg', tamanhos: [{ label: '500ml', preco: 14.9 }] },
  // ──────────── EMBALIXO (SACO DE LIXO) ────────────
  { nome: 'Embalixo Saco Lixo Resistente 50L 20un', marca: 'Embalixo', categoria: 'Saco de lixo', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/947132-13-08-2025-14-48-14-423.jpg', tamanhos: [{ label: '50L 20un', preco: 14.9 }] },
  { nome: 'Embalixo Saco Lixo Alça Bloqueadora de Odores 50L 20un', marca: 'Embalixo', categoria: 'Saco de lixo', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/946210-27-05-2025-10-31-12-417.jpg', tamanhos: [{ label: '50L 20un', preco: 16.9 }] },
  { nome: 'Embalixo Saco Lixo Alça Rolo Preto 100L 15un', marca: 'Embalixo', categoria: 'Saco de lixo', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/939963-23-05-2023-11-51-53-701.jpg', tamanhos: [{ label: '100L 15un', preco: 18.9 }] },
  { nome: 'Embalixo Saco Lixo Reforçado Rolo Preto 50L 50un', marca: 'Embalixo', categoria: 'Saco de lixo', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/6585.jpg', tamanhos: [{ label: '50L 50un', preco: 22.9 }] },
  { nome: 'Embalixo Saco Lixo Reforçado Rolo Preto Oceano 100L 25un', marca: 'Embalixo', categoria: 'Saco de lixo', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/942219-25-01-2024-10-02-45-176.jpg', tamanhos: [{ label: '100L 25un', preco: 28.9 }] },
  { nome: 'Embalixo Saco Lixo Reciclado Rolo Preto 50L 30un', marca: 'Embalixo', categoria: 'Saco de lixo', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/936358-04-11-2022-10-17-21-629.jpg', tamanhos: [{ label: '50L 30un', preco: 17.9 }] },
  { nome: 'Embalixo Saco Lixo Reforçado Fecha Fácil Azul 50L 30un', marca: 'Embalixo', categoria: 'Saco de lixo', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/5700.jpg', tamanhos: [{ label: '50L 30un', preco: 19.9 }] },
  { nome: 'Embalixo Saco Lixo Reforçado Fecha Fácil Azul 100L 15un', marca: 'Embalixo', categoria: 'Saco de lixo', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/5702.jpg', tamanhos: [{ label: '100L 15un', preco: 22.9 }] },
  { nome: 'Embalixo Saco Lixo Econômico Rolo Preto 30L 80un + 20un', marca: 'Embalixo', categoria: 'Saco de lixo', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/6935.jpg', tamanhos: [{ label: '30L 100un', preco: 26.9 }] },
  { nome: 'Embalixo Saco Lixo Reforçado Rolo Preto 50L 30un', marca: 'Embalixo', categoria: 'Saco de lixo', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/936353-07-06-2023-14-44-28-404.jpg', tamanhos: [{ label: '50L 30un', preco: 17.9 }] },
  { nome: 'Embalixo Saco Lixo Alça Rolo Preto 50L 30un', marca: 'Embalixo', categoria: 'Saco de lixo', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/939962-23-05-2023-11-50-59-160.jpg', tamanhos: [{ label: '50L 30un', preco: 18.9 }] },
  { nome: 'Embalixo Saco Lixo Reforçado Rolo Preto 110L 25un', marca: 'Embalixo', categoria: 'Saco de lixo', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/1732.jpg', tamanhos: [{ label: '110L 25un', preco: 32.9 }] },
  { nome: 'Embalixo Saco Lixo Econômico Rolo Preto 50L 80un + 20un', marca: 'Embalixo', categoria: 'Saco de lixo', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/6934.jpg', tamanhos: [{ label: '50L 100un', preco: 32.9 }] },
  { nome: 'Embalixo Saco Lixo Reforçado Rolo Preto 30L 30un', marca: 'Embalixo', categoria: 'Saco de lixo', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/7316.jpg', tamanhos: [{ label: '30L 30un', preco: 12.9 }] },
  { nome: 'Embalixo Saco Lixo Econômico Rolo Azul 100L 25un', marca: 'Embalixo', categoria: 'Saco de lixo', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/9533.jpg', tamanhos: [{ label: '100L 25un', preco: 25.9 }] },
  { nome: 'Embalixo Saco Lixo Econômico Rolo Preto 100L 25un', marca: 'Embalixo', categoria: 'Saco de lixo', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/1368.jpg', tamanhos: [{ label: '100L 25un', preco: 25.9 }] },
  { nome: 'Embalixo Saco Lixo Extra Forte Almofada Preto 110L 25un', marca: 'Embalixo', categoria: 'Saco de lixo', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/950248.jpg', tamanhos: [{ label: '110L 25un', preco: 38.9 }] },
  // ──────────── TIXAN (Ypê) ────────────
  { nome: 'Tixan Sabão em Pó Maciez', marca: 'Tixan', categoria: 'Sabão em pó', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/938413-1-11-11-2025-13-14-42-975.jpg', tamanhos: [{ label: '800g', preco: 12.9 }, { label: '2,4kg', preco: 32.9 }] },
  { nome: 'Tixan Sabão em Pó Primavera', marca: 'Tixan', categoria: 'Sabão em pó', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/935093-1-18-06-2025-17-46-34-632.jpg', tamanhos: [{ label: '800g', preco: 12.9 }, { label: '2,4kg', preco: 32.9 }] },
  { nome: 'Tixan Tira Manchas Pó Roupas Color 420g', marca: 'Tixan', categoria: 'Tira manchas', img: 'https://phygital-files.mercafacil.com/catalogo/uploads/produto/tira_manchas_em_p_tixan_roupa_colorida_420_g_71cd3e78-be09-4ba1-a2c2-f2eaceea63c6.jpg', tamanhos: [{ label: '420g', preco: 9.9 }] },
  // ──────────── VIM ────────────
  { nome: 'Vim Cloro Gel Floral 700ml', marca: 'Vim', categoria: 'Limpador banheiro', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/7022.jpg', tamanhos: [{ label: '700ml', preco: 11.9 }] },
  { nome: 'Vim Cloro Gel Lavanda 700ml', marca: 'Vim', categoria: 'Limpador banheiro', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/7021.jpg', tamanhos: [{ label: '700ml', preco: 11.9 }] },
  { nome: 'Vim Cloro Gel Original 700ml', marca: 'Vim', categoria: 'Limpador banheiro', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/969210-1-19-09-2024-13-58-44-431.jpg', tamanhos: [{ label: '700ml', preco: 11.9 }] },
  { nome: 'Vim Desinfetante Original Espuma Poderosa 450ml', marca: 'Vim', categoria: 'Desinfetante', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/947719-1-05-09-2025-16-45-52-536.jpg', tamanhos: [{ label: '450ml', preco: 13.9 }] },
  { nome: 'Vim Desinfetante Espuma Poderosa Refil 450ml', marca: 'Vim', categoria: 'Desinfetante', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/947720-1-05-09-2025-16-53-00-840.jpg', tamanhos: [{ label: 'Refil 450ml', preco: 11.9 }] },
  // ──────────── DESTAC ────────────
  { nome: 'Destac Brilha Móveis Lavanda', marca: 'Destac', categoria: 'Brilha móveis', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/87602-1-08-11-2023-14-27-44-935.jpg', tamanhos: [{ label: '200ml', preco: 6.9 }, { label: '500ml', preco: 12.9 }] },
  { nome: 'Destac Limpa Piso Laminados Flores e Lavanda 750ml', marca: 'Destac', categoria: 'Limpador multiuso', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/904921-1-01-04-2024-19-44-49-213.jpg', tamanhos: [{ label: '750ml', preco: 13.9 }] },
  { nome: 'Destac Limpa Piso Madeira Lavanda e Vanilla 750ml', marca: 'Destac', categoria: 'Limpador multiuso', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/909144-1-01-04-2024-19-42-36-801.jpg', tamanhos: [{ label: '750ml', preco: 13.9 }] },
  { nome: 'Destac Limpa Piso Porcelanato Lavanda e Alfazema 750ml', marca: 'Destac', categoria: 'Limpador multiuso', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/965283-1-03-11-2023-17-16-08-273.jpg', tamanhos: [{ label: '750ml', preco: 13.9 }] },
  // ──────────── BÚFALO ────────────
  { nome: 'Búfalo Querosene Perfumado Lavanda 500ml', marca: 'Búfalo', categoria: 'Removedor', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/2082.jpg', tamanhos: [{ label: '500ml', preco: 7.49 }] },
  { nome: 'Búfalo Querosene PVC', marca: 'Búfalo', categoria: 'Removedor', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/2610.jpg', tamanhos: [{ label: '500ml', preco: 7.49 }, { label: '1L', preco: 13.9 }] },
  { nome: 'Búfalo Removedor PVC', marca: 'Búfalo', categoria: 'Removedor', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/4163.jpg', tamanhos: [{ label: '500ml', preco: 7.99 }, { label: '1L', preco: 14.9 }] },
  { nome: 'Búfalo Removedor Perfumado Jasmim 500ml', marca: 'Búfalo', categoria: 'Removedor', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/989795.jpg', tamanhos: [{ label: '500ml', preco: 7.99 }] },
  { nome: 'Búfalo Removedor Perfumado Lavanda 500ml', marca: 'Búfalo', categoria: 'Removedor', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/2084.jpg', tamanhos: [{ label: '500ml', preco: 7.99 }] },
  { nome: 'Búfalo Removedor Multiuso Eco 500ml', marca: 'Búfalo', categoria: 'Removedor', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/968939.jpg', tamanhos: [{ label: '500ml', preco: 8.49 }] },
  { nome: 'Búfalo Limpador Perfumado Chá Branco 500ml', marca: 'Búfalo', categoria: 'Limpador multiuso', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/947736-08-09-2025-11-19-01-430.jpg', tamanhos: [{ label: '500ml', preco: 8.49 }] },
  { nome: 'Búfalo Desinfetante Eucalipto', marca: 'Búfalo', categoria: 'Desinfetante', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/1150.jpg', tamanhos: [{ label: '2L', preco: 11.9 }, { label: '6L', preco: 28.9 }] },
  { nome: 'Búfalo Desinfetante Lavanda 2L', marca: 'Búfalo', categoria: 'Desinfetante', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/1268.jpg', tamanhos: [{ label: '2L', preco: 11.9 }] },
  { nome: 'Búfalo Desinfetante Tradicional Pinho 2L', marca: 'Búfalo', categoria: 'Desinfetante', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/4838.jpg', tamanhos: [{ label: '2L', preco: 11.9 }] },
  { nome: 'Búfalo Tira Manchas Pó Multiuso Eco 500g', marca: 'Búfalo', categoria: 'Tira manchas', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/947737-08-09-2025-11-29-32-737.jpg', tamanhos: [{ label: '500g', preco: 11.9 }] },
  // ──────────── TUPI ────────────
  { nome: 'Tupi Álcool Líquido 46% Neutro 1L', marca: 'Tupi', categoria: 'Álcool', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/2137.jpg', tamanhos: [{ label: '1L', preco: 9.9 }] },
  { nome: 'Tupi Álcool Líquido 46% Lavanda 1L', marca: 'Tupi', categoria: 'Álcool', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/4207.jpg', tamanhos: [{ label: '1L', preco: 10.49 }] },
  { nome: 'Tupi Álcool com Bicarbonato 1L', marca: 'Tupi', categoria: 'Álcool', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/943021-14-05-2024-10-08-10-314.jpg', tamanhos: [{ label: '1L', preco: 11.49 }] },
  { nome: 'Tupi Álcool com Bicarbonato e Limão 1L', marca: 'Tupi', categoria: 'Álcool', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/944258-01-10-2024-10-51-37-543.jpg', tamanhos: [{ label: '1L', preco: 11.49 }] },
  { nome: 'Tupi Álcool Líquido Zerobac 46% 1L', marca: 'Tupi', categoria: 'Álcool', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/936773-10-11-2022-15-57-57-316.jpg', tamanhos: [{ label: '1L', preco: 10.49 }] },
  { nome: 'Tupi Álcool em Gel 70% 500g', marca: 'Tupi', categoria: 'Álcool', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/936801-14-11-2022-16-45-17-798.jpg', tamanhos: [{ label: '500g', preco: 9.9 }] },
  { nome: 'Tupi Álcool Acendedor Gel 5kg', marca: 'Tupi', categoria: 'Álcool', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/2869.jpg', tamanhos: [{ label: '5kg', preco: 35.9 }] },
  // ──────────── COPERALCOOL ────────────
  { nome: 'Coperalcool Álcool Tradicional 46% 1L', marca: 'Coperalcool', categoria: 'Álcool', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/alcool_liquido_1l_classico.jpg', tamanhos: [{ label: '1L', preco: 11.9 }] },
  { nome: 'Coperalcool Álcool Líquido Chá Branco 46% 1L', marca: 'Coperalcool', categoria: 'Álcool', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/948188-03-10-2025-12-19-17-763.jpg', tamanhos: [{ label: '1L', preco: 12.9 }] },
  { nome: 'Coperalcool Álcool Gel 500g', marca: 'Coperalcool', categoria: 'Álcool', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/987052.jpg', tamanhos: [{ label: '500g', preco: 11.9 }] },
  { nome: 'Coperalcool Álcool Gel Antisséptico Bacfree 400g', marca: 'Coperalcool', categoria: 'Álcool', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/000000000000953220-un-27-01-2026-10-45-56-970.jpg', tamanhos: [{ label: '400g', preco: 10.9 }] },
  { nome: 'Coperalcool Álcool Gel Chá Branco Bacfree 400g', marca: 'Coperalcool', categoria: 'Álcool', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/947107-04-08-2025-17-49-42-677.jpg', tamanhos: [{ label: '400g', preco: 11.9 }] },
  { nome: 'Coperalcool Panos Umedecidos Bacfree 35un', marca: 'Coperalcool', categoria: 'Álcool', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/plu-964934.jpg', tamanhos: [{ label: '35un', preco: 14.9 }, { label: 'Refil 35un', preco: 12.9 }] },
  { nome: 'Coperalcool Balde Panos Umedecidos Bacfree 150un', marca: 'Coperalcool', categoria: 'Álcool', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/974770.jpg', tamanhos: [{ label: '150un', preco: 49.9 }] },
  { nome: 'Coperalcool Limpador Perfumado Chá Branco 500ml', marca: 'Coperalcool', categoria: 'Limpador multiuso', img: 'https://d3gdr9n5lqb5z7.cloudfront.net/fotos/000000000000948337-un-15-12-2025-14-27-54-898.jpg', tamanhos: [{ label: '500ml', preco: 9.9 }] },
  // ──────────── CANDURA ────────────
  { nome: 'Candura Água Sanitária', marca: 'Candura', categoria: 'Alvejante', img: 'https://coopsp.vtexassets.com/arquivos/ids/244676-800-800?v=638660637358230000', tamanhos: [{ label: '2L', preco: 8.49 }, { label: '5L', preco: 18.9 }] },
  { nome: 'Candura Cloro Gel', marca: 'Candura', categoria: 'Alvejante', img: 'https://coopsp.vtexassets.com/arquivos/ids/238712-800-800?v=638514737780530000', tamanhos: [{ label: '1L', preco: 9.49 }, { label: '2L', preco: 16.9 }] },
  { nome: 'Candura Lava Louças Neutro', marca: 'Candura', categoria: 'Detergente', img: 'https://coopsp.vtexassets.com/arquivos/ids/247195-800-800?v=638830160070330000', tamanhos: [{ label: '500ml', preco: 3.49, img: 'https://coopsp.vtexassets.com/arquivos/ids/247195-800-800?v=638830160070330000' }, { label: '5L', preco: 19.9, img: 'https://coopsp.vtexassets.com/arquivos/ids/247195-800-800?v=638830160070330000' }] },
  { nome: 'Candura Lava Louças Limão', marca: 'Candura', categoria: 'Detergente', img: 'https://coopsp.vtexassets.com/arquivos/ids/247193-800-800?v=638830160060400000', tamanhos: [{ label: '500ml', preco: 3.49 }] },
  { nome: 'Candura Lava Louças Coco', marca: 'Candura', categoria: 'Detergente', tamanhos: [{ label: '500ml', preco: 3.79 }] },
  { nome: 'Candura Amaciante Concentrado', marca: 'Candura', categoria: 'Amaciante', img: 'https://coopsp.vtexassets.com/arquivos/ids/232753-800-800?v=638252158367800000', tamanhos: [{ label: '500ml', preco: 6.99 }, { label: '2L', preco: 14.9 }, { label: '5L', preco: 28.99 }] },
  { nome: 'Candura Desinfetante Lavanda', marca: 'Candura', categoria: 'Desinfetante', img: 'https://comper.vteximg.com.br/arquivos/ids/160270-1000-1000/294063.jpg?v=637210537243300000', tamanhos: [{ label: '2L', preco: 9.9 }, { label: '5L', preco: 19.9 }] },
  { nome: 'Candura Desinfetante Pinho', marca: 'Candura', categoria: 'Desinfetante', img: 'https://comper.vteximg.com.br/arquivos/ids/162752-1000-1000/294250.jpg?v=637210598793000000', tamanhos: [{ label: '2L', preco: 9.9 }] },
  { nome: 'Candura Multiuso', marca: 'Candura', categoria: 'Limpador multiuso', img: 'https://coopsp.vtexassets.com/arquivos/ids/247099-800-800?v=638821523008500000', tamanhos: [{ label: '500ml', preco: 5.49 }] },
  { nome: 'Candura Tira Manchas Sem Cloro', marca: 'Candura', categoria: 'Tira manchas', img: 'https://comper.vteximg.com.br/arquivos/ids/179853-1000-1000/610810-Tira-Manchas-Candura-sem-Cloro-Roupas-Brancas-e-Coloridas-2-Litros.jpg?v=637388200285770000', tamanhos: [{ label: '1L', preco: 12.9 }] },
  // ──────────── LUAR (Luar Mágico) ────────────
  { nome: 'Luar Álcool Gel Bactericida 70%', marca: 'Luar', categoria: 'Álcool', img: 'https://www.luarmagico.com.br/wp-content/uploads/2021/12/gel_70_500ml_227.gif', tamanhos: [{ label: '500ml', preco: 11.9 }, { label: '1L', preco: 19.9 }] },
  { nome: 'Luar Álcool Gel Acendedor', marca: 'Luar', categoria: 'Álcool', img: 'https://www.luarmagico.com.br/wp-content/uploads/2017/02/mini-alcool-gel-acendedor-300g.png', tamanhos: [{ label: '300g', preco: 6.9 }, { label: '5kg', preco: 39.9 }, { label: '10kg', preco: 69.9 }, { label: '13kg', preco: 89.9 }] },
  { nome: 'Luar Álcool Líquido Bactericida 70%', marca: 'Luar', categoria: 'Álcool', img: 'https://www.luarmagico.com.br/wp-content/uploads/2021/12/balcao_500ml_227.gif', tamanhos: [{ label: '500ml', preco: 9.9 }, { label: '1L', preco: 16.9 }, { label: '5L', preco: 49.9 }] },
  { nome: 'Luar Álcool Líquido 96%', marca: 'Luar', categoria: 'Álcool', img: 'https://www.luarmagico.com.br/wp-content/uploads/2016/05/ALCOOL-LIQUIDO-96-PROIBIDO-1-LITRO.png', tamanhos: [{ label: '1L', preco: 17.9 }] },
  { nome: 'Luar Álcool Líquido 46% Tradicional', marca: 'Luar', categoria: 'Álcool', img: 'https://www.luarmagico.com.br/wp-content/uploads/2016/04/ALCOOL-LIQUIDO-46%C2%BA-LUAR-500-ML.png', tamanhos: [{ label: '500ml', preco: 7.9 }, { label: '1L', preco: 13.9 }] },
  { nome: 'Luar Álcool Líquido 46% Lavanda', marca: 'Luar', categoria: 'Álcool', img: 'https://www.luarmagico.com.br/wp-content/uploads/2016/04/ALCOOL-LIQUIDO-46%C2%BA-LUAR-LAVANDA-500-ML.png', tamanhos: [{ label: '500ml', preco: 8.49 }, { label: '1L', preco: 14.9 }] },
  { nome: 'Luar Álcool Líquido 46% Eucalipto', marca: 'Luar', categoria: 'Álcool', img: 'https://www.luarmagico.com.br/wp-content/uploads/2016/04/ALCOOL-LIQUIDO-46%C2%BA-LUAR-EUCALIPTO-500-ML.png', tamanhos: [{ label: '500ml', preco: 8.49 }, { label: '1L', preco: 14.9 }] },
  { nome: 'Luar Multiuso Tradicional 500ml', marca: 'Luar', categoria: 'Limpador multiuso', img: 'https://www.luarmagico.com.br/wp-content/uploads/2016/04/MULTIUSO-TRADICIONAL-LUAR-500-ML.png', tamanhos: [{ label: '500ml', preco: 5.49 }] },
  { nome: 'Luar Multiuso Campestre 500ml', marca: 'Luar', categoria: 'Limpador multiuso', img: 'https://www.luarmagico.com.br/wp-content/uploads/2016/04/MULTIUSO-CAMPESTRE-LUAR-500-ML.png', tamanhos: [{ label: '500ml', preco: 5.49 }] },
  { nome: 'Luar Limpa Vidros 500ml', marca: 'Luar', categoria: 'Limpa vidro', img: 'https://www.luarmagico.com.br/wp-content/uploads/2016/04/LIMPA-VIDROS-LUAR-500ML.png', tamanhos: [{ label: '500ml', preco: 6.49 }] },
  { nome: 'Luar Limpa Limo 500ml', marca: 'Luar', categoria: 'Limpador banheiro', img: 'https://www.luarmagico.com.br/wp-content/uploads/2016/04/LIMPA-LIMO-LUAR-500-ML.png', tamanhos: [{ label: '500ml', preco: 7.49 }] },
  { nome: 'Luar Limpa Alumínio', marca: 'Luar', categoria: 'Removedor', img: 'https://www.luarmagico.com.br/wp-content/uploads/2016/04/LIMPA-ALUMINIO-LUAR-500-ML.png', tamanhos: [{ label: '500ml', preco: 6.9 }, { label: '5L', preco: 39.9 }] },
  { nome: 'Luar Removedor Ecológico 1L', marca: 'Luar', categoria: 'Removedor', img: 'https://www.luarmagico.com.br/wp-content/uploads/2021/12/removedor_1L_227.gif', tamanhos: [{ label: '1L', preco: 11.9 }] },
  { nome: 'Luar Puri Lar', marca: 'Luar', categoria: 'Aromatizador', img: 'https://www.luarmagico.com.br/wp-content/uploads/2021/12/purilar_227.gif', tamanhos: [{ label: '500ml', preco: 7.9 }] },
  { nome: 'Luar Cheirinho Citronela', marca: 'Luar', categoria: 'Aromatizador', img: 'https://www.luarmagico.com.br/wp-content/uploads/2021/12/cheirinho_citronela_227.gif', tamanhos: [{ label: '140ml', preco: 4.9 }] },
  { nome: 'Luar Cheirinho Talco', marca: 'Luar', categoria: 'Aromatizador', img: 'https://www.luarmagico.com.br/wp-content/uploads/2021/12/cheirinho_talco_227.gif', tamanhos: [{ label: '140ml', preco: 4.9 }] },
  { nome: 'Luar Cheirinho Eucalipto', marca: 'Luar', categoria: 'Aromatizador', img: 'https://www.luarmagico.com.br/wp-content/uploads/2021/12/cheirinho_eucalipto_227.gif', tamanhos: [{ label: '140ml', preco: 4.9 }] },
  { nome: 'Luar Cheirinho Lavanda', marca: 'Luar', categoria: 'Aromatizador', img: 'https://www.luarmagico.com.br/wp-content/uploads/2021/12/cheirinho_lavanda_227.gif', tamanhos: [{ label: '140ml', preco: 4.9 }] },
  // ──────────── COPERALCOOL EXTRA (Companhia Nacional de Álcool) ────────────
  { nome: 'Coperalcool Bacfree Segredos Frescor das Águas Oceano 500ml', marca: 'Coperalcool', categoria: 'Limpador multiuso', img: 'https://images.tcdn.com.br/img/img_prod/1276830/coperalcool_bacfree_segredos_da_natureza_500ml_frescor_das_aguas_137_1_20faa80552a4c0d9968a0fa28e34799b.jpg', tamanhos: [{ label: '500ml', preco: 14.9 }] },
  { nome: 'Coperalcool Bacfree Segredos Energia do Campo Capim-Limão 500ml', marca: 'Coperalcool', categoria: 'Limpador multiuso', img: 'https://images.tcdn.com.br/img/img_prod/1276830/coperalcool_bacfree_segredos_da_natureza_500ml_energia_do_campo_131_1_fe4573cdf8426ee6cf5c165e338d18a1.jpg', tamanhos: [{ label: '500ml', preco: 14.9 }] },
  { nome: 'Coperalcool Bacfree Segredos Refúgio da Mente Lavanda 500ml', marca: 'Coperalcool', categoria: 'Limpador multiuso', img: 'https://images.tcdn.com.br/img/img_prod/1276830/coperalcool_bacfree_segredos_da_natureza_500ml_refugio_da_mente_129_1_26f0a4b2d6c3468d607c220bd6910afa.jpg', tamanhos: [{ label: '500ml', preco: 14.9 }] },
  { nome: 'Coperalcool Bacfree Segredos Bosque do Aconchego Jasmim 500ml', marca: 'Coperalcool', categoria: 'Limpador multiuso', img: 'https://images.tcdn.com.br/img/img_prod/1276830/coperalcool_bacfree_segredos_da_natureza_500ml_bosque_do_aconchego_133_1_6d76591ebe6936091690e1ff0271a058.jpg', tamanhos: [{ label: '500ml', preco: 14.9 }] },
  { nome: 'Coperalcool Bacfree Segredos Jardim da Harmonia Flores Brancas 500ml', marca: 'Coperalcool', categoria: 'Limpador multiuso', img: 'https://images.tcdn.com.br/img/img_prod/1276830/coperalcool_bacfree_segredos_da_natureza_500ml_jardim_da_harmonia_135_1_8dd0d800ff069767ee3f9fbb65459d4d.jpg', tamanhos: [{ label: '500ml', preco: 14.9 }] },
  { nome: 'Coperalcool Bacfree Lavanda Oriental 1L', marca: 'Coperalcool', categoria: 'Álcool', img: 'https://images.tcdn.com.br/img/img_prod/1276830/coperalcool_bacfree_46_inpm_lavanda_oriental_1_1_20251017113953_4c73f6969549.jpg', tamanhos: [{ label: '1L', preco: 14.99 }] },
  { nome: 'Coperalcool Spray Higienizador de Mãos 60ml', marca: 'Coperalcool', categoria: 'Álcool', img: 'https://images.tcdn.com.br/img/img_prod/1276830/spray_higienizador_de_maos_coperalcool_bacfree_60ml_113_1_8380c78f0f6b210309c39b07b121bfd0.jpg', tamanhos: [{ label: '60ml', preco: 7.4 }] },
  // ---------------- RODO / VASSOURA / BUCHA ----------------
  { nome: 'Rodo Plástico Santa Maria 45cm sem Cabo', marca: 'Santa Maria', categoria: 'Rodo', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1269759/g.jpg', tamanhos: [{ label: '45cm', preco: 13.98 }] },
  { nome: 'Rodo Alklin 40cm sem Cabo', marca: 'Alklin', categoria: 'Rodo', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1280599/g.jpg', tamanhos: [{ label: '40cm', preco: 12.9 }] },
  { nome: 'Rodo de Plástico Brilhus com Cabo', marca: 'Brilhus', categoria: 'Rodo', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/996947/g.jpg', tamanhos: [{ label: 'unidade', preco: 16.9 }] },
  { nome: 'Rodo Mop Sek+ Brilhus com Cabo', marca: 'Brilhus', categoria: 'Rodo', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/996950/g.jpg', tamanhos: [{ label: 'unidade', preco: 24.9 }] },
  { nome: 'Rodo de Pia Plasútil', marca: 'Plasútil', categoria: 'Rodo', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/997553/g.jpg', tamanhos: [{ label: 'unidade', preco: 7.9 }] },
  { nome: 'Rodo para Pia Plasútil Tear 16cm', marca: 'Plasútil', categoria: 'Rodo', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1139841/g.jpg', tamanhos: [{ label: '16cm', preco: 3.99 }] },
  { nome: 'Rodo Mop Celeste Fácil', marca: 'Celeste', categoria: 'Rodo', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1142994/g.jpg', tamanhos: [{ label: 'unidade', preco: 22.9 }] },
  { nome: 'Rodo Mop Celeste Twist', marca: 'Celeste', categoria: 'Rodo', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1144052/g.jpg', tamanhos: [{ label: 'unidade', preco: 39.9 }] },
  { nome: 'Vassoura Bulnez sem Cabo', marca: 'Bulnez', categoria: 'Vassoura', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1270084/g.jpg', tamanhos: [{ label: 'unidade', preco: 5.48 }] },
  { nome: 'Vassoura Condor Limpa Piso com Cabo', marca: 'Condor', categoria: 'Vassoura', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1276468/g.jpg', tamanhos: [{ label: 'unidade', preco: 6.98 }] },
  { nome: 'Vassoura Santa Maria Multiuso sem Cabo', marca: 'Santa Maria', categoria: 'Vassoura', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1269758/g.jpg', tamanhos: [{ label: 'unidade', preco: 10.98 }] },
  { nome: 'Vassoura Santa Maria Uso Interno sem Cabo', marca: 'Santa Maria', categoria: 'Vassoura', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1269762/g.jpg', tamanhos: [{ label: 'unidade', preco: 13.98 }] },
  { nome: 'Vassoura Alkin Dentro e Fora com Cabo', marca: 'Alkin', categoria: 'Vassoura', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1283857/g.jpg', tamanhos: [{ label: 'unidade', preco: 11.9 }] },
  { nome: 'Vassoura Mileva Lindoca', marca: 'Mileva', categoria: 'Vassoura', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/997548/g.jpg', tamanhos: [{ label: 'unidade', preco: 14.9 }] },
  { nome: 'Vassoura Mileva Safira', marca: 'Mileva', categoria: 'Vassoura', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1274667/g.jpg', tamanhos: [{ label: 'unidade', preco: 15.9 }] },
  { nome: 'Vassoura Mileva Girasol', marca: 'Mileva', categoria: 'Vassoura', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/997547/g.jpg', tamanhos: [{ label: 'unidade', preco: 14.9 }] },
  { nome: 'Esponja Multiuso Bombril (amarela/verde)', marca: 'Bombril', categoria: 'Bucha', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1145746/g.jpg', tamanhos: [{ label: 'unidade', preco: 1.89 }] },
  { nome: 'Lã de Aço Bombril 45g', marca: 'Bombril', categoria: 'Bucha', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/971114/g.jpg', tamanhos: [{ label: '45g', preco: 2.65 }] },
  { nome: 'Esponja Bombril Antiaderente 3 unidades', marca: 'Bombril', categoria: 'Bucha', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1270432/g.jpg', tamanhos: [{ label: '3 unidades', preco: 5.9 }] },
  { nome: 'Esponja Multiuso Bulnez', marca: 'Bulnez', categoria: 'Bucha', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1270085/g.jpg', tamanhos: [{ label: 'unidade', preco: 0.69 }] },
  { nome: 'Esponja Multiuso Brilhus 4 unidades', marca: 'Brilhus', categoria: 'Bucha', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1155278/g.jpg', tamanhos: [{ label: '4 unidades', preco: 3.9 }] },
  { nome: 'Esponja Multiuso Ypê 4 unidades', marca: 'Ypê', categoria: 'Bucha', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1275843/g.jpg', tamanhos: [{ label: '4 unidades', preco: 4.79 }] },
  { nome: 'Esponja Multiuso Esfrebom 4 unidades', marca: 'Esfrebom', categoria: 'Bucha', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1155273/g.jpg', tamanhos: [{ label: '4 unidades', preco: 5.19 }] },
  { nome: 'Lã de Aço Assolan 8 unidades 45g', marca: 'Assolan', categoria: 'Bucha', img: 'https://atacadaobr.vtexassets.com/arquivos/ids/1283531/g.jpg', tamanhos: [{ label: '8 unidades', preco: 6.9 }] },
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
