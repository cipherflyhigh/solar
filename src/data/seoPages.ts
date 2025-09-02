// Dados SEO otimizados para cada página/produto
export interface SEOPageData {
  title: string;
  description: string;
  keywords: string;
  h1: string;
  h2: string;
  h3?: string;
  canonicalUrl: string;
  ogImage: string;
  breadcrumbs: Array<{name: string, url: string}>;
}

export const seoPages: Record<string, SEOPageData> = {
  // Página Principal
  home: {
    title: "🏊‍♂️ Aquecedores Solares para Piscinas Oliveira/MG | Economia 80% | Orçamento Grátis",
    description: "⭐ Especialistas em aquecedores solares para piscinas em Oliveira/MG! Trocadores de calor, piscinas personalizadas, manutenção completa. 🔥 Economia até 80% na energia! Orçamento grátis WhatsApp!",
    keywords: "aquecedor solar piscina oliveira mg, trocador calor piscina, placas solares aquecimento, piscinas personalizadas oliveira, manutenção piscina oliveira mg, banheira hidromassagem, aquecimento solar sustentável, economia energia piscina, instalação aquecedor solar, piscinas fibra vinil oliveira",
    h1: "Aquecedores Solares para Piscinas em Oliveira/MG",
    h2: "Especialistas em aquecimento solar, trocadores de calor e piscinas personalizadas. Economia de até 80% na energia!",
    h3: "Atendemos Oliveira, Divinópolis, Formiga, Itaúna, Lavras e toda região centro-oeste de MG",
    canonicalUrl: "https://site-solar-aquecedor-hp5l.bolt.host/",
    ogImage: "https://i.imgur.com/DRQJpVo.jpeg",
    breadcrumbs: [
      { name: "Home", url: "/" }
    ]
  },

  // Aquecedores Solares
  aquecedores: {
    title: "🔥 Aquecedores Solares para Piscina Oliveira/MG | Trocadores de Calor | Economia 80%",
    description: "Aquecedores solares para piscina com trocadores de calor de alta eficiência! Placas solares, aquecedores elétricos. Instalação completa em Oliveira/MG. Economia até 80% na energia! Orçamento grátis!",
    keywords: "aquecedor solar piscina oliveira mg, trocador calor piscina alta eficiência, placas solares aquecimento piscina, aquecedor elétrico piscina backup, instalação aquecedor solar completa, sistema aquecimento piscina sustentável, economia energia aquecedor solar",
    h1: "Aquecedores Solares para Piscina - Alta Eficiência em Oliveira/MG",
    h2: "Trocadores de calor, placas solares e aquecedores elétricos com economia de até 80% na energia",
    h3: "Instalação profissional completa com garantia de 5 anos nos equipamentos",
    canonicalUrl: "https://site-solar-aquecedor-hp5l.bolt.host/aquecedores-solares-piscina-oliveira-mg",
    ogImage: "https://i.imgur.com/oIR52mn.png",
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Produtos", url: "/produtos" },
      { name: "Aquecedores Solares", url: "/aquecedores-solares-piscina-oliveira-mg" }
    ]
  },

  // Piscinas
  piscinas: {
    title: "🏊‍♀️ Piscinas Personalizadas Oliveira/MG | +100 Modelos Fibra e Vinil | Orçamento Grátis",
    description: "Piscinas personalizadas e pré-fabricadas em Oliveira/MG! +100 modelos em fibra e vinil, sistemas de filtragem completos, garantia total. Construção profissional, melhor preço da região!",
    keywords: "piscinas personalizadas oliveira mg, piscinas pré fabricadas fibra vinil, construção piscina oliveira mg, sistemas filtragem piscina completos, piscinas sob medida projeto personalizado, garantia piscina construção oliveira",
    h1: "Piscinas Personalizadas e Pré-fabricadas em Oliveira/MG",
    h2: "Mais de 100 modelos em fibra e vinil com sistemas de filtragem e garantia total",
    h3: "Construção profissional com projeto personalizado e melhor custo-benefício da região",
    canonicalUrl: "https://site-solar-aquecedor-hp5l.bolt.host/piscinas-personalizadas-oliveira-mg",
    ogImage: "https://i.imgur.com/JL35eAM.png",
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Produtos", url: "/produtos" },
      { name: "Piscinas", url: "/piscinas-personalizadas-oliveira-mg" }
    ]
  },

  // Manutenção
  manutencao: {
    title: "🔧 Manutenção de Piscinas Oliveira/MG | Troca Areia Filtro | Casa de Máquina",
    description: "Manutenção completa de piscinas em Oliveira/MG! Troca de areia do filtro, manutenção casa de máquina, bomba, filtro, cloro e produtos químicos. Equipe especializada, orçamento grátis!",
    keywords: "manutenção piscina oliveira mg, troca areia filtro piscina, manutenção casa máquina piscina, manutenção bomba filtro piscina, cloro desinfetantes piscina, produtos químicos piscina tratamento água, limpeza piscina oliveira mg",
    h1: "Manutenção de Piscinas Completa em Oliveira/MG",
    h2: "Troca de areia do filtro, manutenção de casa de máquina, bomba, filtro e produtos químicos",
    h3: "Equipe técnica especializada com produtos de qualidade e atendimento regular",
    canonicalUrl: "https://site-solar-aquecedor-hp5l.bolt.host/manutencao-piscinas-oliveira-mg",
    ogImage: "https://i.imgur.com/N0CBXu8.png",
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Serviços", url: "/servicos" },
      { name: "Manutenção", url: "/manutencao-piscinas-oliveira-mg" }
    ]
  },

  // Banheiras
  banheiras: {
    title: "🛁 Banheiras de Hidromassagem Oliveira/MG | Relaxamento | Diferentes Tamanhos",
    description: "Banheiras de hidromassagem personalizadas em Oliveira/MG! Para relaxamento e imersão, diferentes tamanhos, instalação completa. Transforme seu banheiro em spa! Orçamento grátis!",
    keywords: "banheira hidromassagem oliveira mg, banheira imersão relaxamento, banheiras personalizadas diferentes tamanhos, instalação banheira hidromassagem completa, spa casa banheiro, banheira casal hidromassagem oliveira",
    h1: "Banheiras de Hidromassagem em Oliveira/MG",
    h2: "Relaxamento e imersão com banheiras personalizadas em diferentes tamanhos",
    h3: "Instalação completa e acabamentos de luxo para transformar seu banheiro em spa",
    canonicalUrl: "https://site-solar-aquecedor-hp5l.bolt.host/banheiras-hidromassagem-oliveira-mg",
    ogImage: "https://i.imgur.com/qwRc7Hc.png",
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Produtos", url: "/produtos" },
      { name: "Banheiras", url: "/banheiras-hidromassagem-oliveira-mg" }
    ]
  },

  // Acessórios
  acessorios: {
    title: "💡 Acessórios para Piscinas Oliveira/MG | LED, Coberturas, Escadas | Kit Completo",
    description: "Acessórios completos para piscinas em Oliveira/MG! Iluminação LED, coberturas, escadas, móveis externos, rede limpeza, kit manutenção. Transforme sua área de lazer! Orçamento grátis!",
    keywords: "acessórios piscina oliveira mg, iluminação led piscina colorida, coberturas piscina automática, escadas piscina segurança, móveis externos área lazer, rede limpeza piscina equipamentos, kit manutenção piscina completo",
    h1: "Acessórios para Piscinas - Linha Completa em Oliveira/MG",
    h2: "Iluminação LED, coberturas, escadas, móveis externos e equipamentos de manutenção",
    h3: "Kit completo de acessórios para transformar sua área de lazer com segurança e estilo",
    canonicalUrl: "https://site-solar-aquecedor-hp5l.bolt.host/acessorios-piscinas-oliveira-mg",
    ogImage: "https://i.imgur.com/91QBvrj.png",
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Produtos", url: "/produtos" },
      { name: "Acessórios", url: "/acessorios-piscinas-oliveira-mg" }
    ]
  },

  // Infláveis
  inflaveis: {
    title: "🏖️ Infláveis para Piscina Oliveira/MG | Bóias, Colchões, Jogos Aquáticos",
    description: "Infláveis para piscina de alta qualidade em Oliveira/MG! Bóias, anéis, colchões de ar, jogos aquáticos com materiais resistentes. Diversão garantida para toda família! Entrega rápida!",
    keywords: "infláveis piscina oliveira mg, bóias anéis piscina materiais resistentes, colchões ar piscina relaxamento, jogos aquáticos diversão família, materiais resistentes infláveis piscina, acessórios piscina inflável lazer",
    h1: "Infláveis para Piscina - Diversão Garantida em Oliveira/MG",
    h2: "Bóias, anéis, colchões de ar e jogos aquáticos com materiais resistentes",
    h3: "Produtos de alta qualidade para máxima diversão e segurança na água",
    canonicalUrl: "https://site-solar-aquecedor-hp5l.bolt.host/inflaveis-piscina-oliveira-mg",
    ogImage: "https://i.imgur.com/Dtp5l9T.png",
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Produtos", url: "/produtos" },
      { name: "Infláveis", url: "/inflaveis-piscina-oliveira-mg" }
    ]
  }
};

// URLs amigáveis para SEO
export const friendlyUrls = {
  // Páginas principais
  home: "/",
  sobre: "/sobre-solar-aquecedores-piscinas-oliveira-mg",
  contato: "/contato-orcamento-piscinas-aquecedores-oliveira-mg",
  
  // Aquecedores Solares
  aquecedores: "/aquecedores-solares-piscina-oliveira-mg",
  trocadoresCalor: "/trocadores-calor-piscina-alta-eficiencia-oliveira-mg",
  placasSolares: "/placas-solares-aquecimento-piscina-sustentavel",
  aquecedorEletrico: "/aquecedor-eletrico-piscina-backup-instalacao",
  instalacaoCompleta: "/instalacao-aquecedor-solar-piscina-profissional",
  
  // Piscinas
  piscinas: "/piscinas-personalizadas-pre-fabricadas-oliveira-mg",
  piscinasPersonalizadas: "/piscinas-personalizadas-projeto-sob-medida-oliveira",
  piscinasFibra: "/piscinas-fibra-vidro-100-modelos-qualidade-oliveira-mg",
  piscinasVinil: "/piscinas-vinil-pre-fabricadas-instalacao-oliveira-mg",
  
  // Manutenção
  manutencao: "/manutencao-piscinas-oliveira-mg-completa",
  trocaAreia: "/troca-areia-filtro-piscina-manutencao-oliveira-mg",
  casaMaquina: "/manutencao-casa-maquina-piscina-oliveira-mg",
  bombaFiltro: "/manutencao-bomba-filtro-piscina-especializada",
  produtosQuimicos: "/cloro-desinfetantes-piscina-tratamento-agua-oliveira",
  
  // Banheiras
  banheiras: "/banheiras-hidromassagem-oliveira-mg-relaxamento",
  hidromassagem: "/banheira-hidromassagem-spa-casa-oliveira-mg",
  imersao: "/banheira-imersao-diferentes-tamanhos-personalizada",
  banheiraPersonalizada: "/banheiras-personalizadas-instalacao-completa-oliveira",
  
  // Acessórios
  acessorios: "/acessorios-piscinas-completos-oliveira-mg",
  iluminacaoLed: "/iluminacao-led-piscina-colorida-area-lazer-oliveira",
  coberturas: "/coberturas-piscina-automatica-protecao-oliveira-mg",
  escadas: "/escadas-piscina-seguranca-antiderrapante-oliveira",
  moveisExternos: "/moveis-externos-area-lazer-piscina-resistente",
  redeLimpeza: "/rede-limpeza-piscina-equipamentos-manutencao",
  kitCompleto: "/kit-completo-acessorios-piscina-oliveira-mg",
  
  // Infláveis
  inflaveis: "/inflaveis-piscina-boia-colchao-jogos-oliveira-mg",
  boias: "/boias-aneis-piscina-materiais-resistentes-oliveira",
  colchoes: "/colchoes-ar-piscina-relaxamento-diversao",
  jogosAquaticos: "/jogos-aquaticos-diversao-piscina-familia",
  
  // Páginas de serviços
  construcao: "/construcao-piscinas-personalizadas-oliveira-mg",
  vendaPiscinas: "/venda-piscinas-pre-fabricadas-melhor-preco-oliveira",
  renovacao: "/renovacao-piscinas-manutencao-preventiva-oliveira-mg",
  projetoAreaLazer: "/projeto-area-lazer-deck-pergolado-oliveira-mg",
  
  // Páginas locais
  atendimentoRegiao: "/atendimento-regiao-oliveira-divinopolis-formiga-itauna",
  orcamentoGratuito: "/orcamento-gratuito-piscinas-aquecedores-solares-oliveira-mg"
};

// Palavras-chave long tail por categoria
export const longTailKeywords = {
  aquecedores: [
    "aquecedor solar piscina preço oliveira mg",
    "instalação aquecedor solar piscina profissional",
    "trocador calor piscina melhor marca oliveira",
    "placas solares aquecimento piscina custo benefício",
    "aquecedor elétrico piscina backup sistema",
    "sistema aquecimento piscina completo sustentável",
    "economia energia aquecedor solar piscina 80%",
    "manutenção aquecedor solar piscina oliveira mg"
  ],
  
  piscinas: [
    "piscina personalizada preço oliveira mg",
    "piscina fibra vidro melhor qualidade oliveira",
    "piscina vinil pré fabricada instalação oliveira mg",
    "construção piscina projeto personalizado oliveira",
    "piscina pequena quintal residencial oliveira mg",
    "piscina grande área lazer família oliveira",
    "sistema filtragem piscina completo oliveira mg",
    "garantia piscina construção oliveira mg"
  ],
  
  manutencao: [
    "manutenção piscina mensal oliveira mg",
    "troca areia filtro piscina quando fazer oliveira",
    "limpeza casa máquina piscina oliveira mg",
    "manutenção bomba piscina preventiva oliveira",
    "produtos químicos piscina água cristalina oliveira",
    "cloro piscina dosagem correta oliveira mg",
    "ph piscina balanceamento água oliveira",
    "algicida piscina prevenção algas oliveira mg"
  ],
  
  banheiras: [
    "banheira hidromassagem preço oliveira mg",
    "banheira imersão relaxamento casa oliveira",
    "instalação banheira hidromassagem oliveira mg",
    "banheira personalizada diferentes tamanhos oliveira",
    "spa casa banheira relaxamento oliveira mg",
    "banheira casal hidromassagem oliveira",
    "manutenção banheira hidromassagem oliveira mg"
  ],
  
  acessorios: [
    "iluminação led piscina colorida oliveira mg",
    "cobertura piscina automática preço oliveira",
    "escada piscina segurança antiderrapante oliveira",
    "móveis área lazer piscina resistente oliveira mg",
    "rede limpeza piscina equipamentos oliveira",
    "kit manutenção piscina completo oliveira mg",
    "acessórios piscina decoração oliveira",
    "equipamentos piscina profissionais oliveira mg"
  ],
  
  inflaveis: [
    "infláveis piscina alta qualidade oliveira mg",
    "bóias anéis piscina materiais resistentes oliveira",
    "colchões ar piscina relaxamento oliveira mg",
    "jogos aquáticos diversão família oliveira",
    "materiais resistentes infláveis piscina oliveira",
    "acessórios piscina inflável lazer oliveira mg"
  ]
};

// Palavras-chave de localização
export const locationKeywords = [
  "oliveira mg",
  "oliveira minas gerais",
  "região oliveira mg",
  "centro oeste mg",
  "divinópolis mg",
  "formiga mg", 
  "itaúna mg",
  "lavras mg",
  "campo belo mg",
  "santo antônio do monte mg"
];

// Palavras-chave de conversão
export const conversionKeywords = [
  "orçamento grátis",
  "orçamento gratuito",
  "melhor preço",
  "custo benefício",
  "instalação completa",
  "garantia total",
  "atendimento personalizado",
  "entrega rápida",
  "profissionais especializados",
  "qualidade superior",
  "economia garantida"
];