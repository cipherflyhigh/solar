export interface SEOPageData {
  title: string;
  description: string;
  keywords: string;
  h1: string;
  h2: string;
  url: string;
  ogImage: string;
}

export const seoPages: Record<string, SEOPageData> = {
  home: {
    title: "Solar Aquecedores e Piscinas | Aquecimento Solar, Piscinas e Acessórios em Oliveira/MG",
    description: "Especialistas em aquecedores solares para piscinas, construção de piscinas personalizadas, manutenção e acessórios em Oliveira/MG. Orçamento grátis! ⭐ Melhor custo-benefício da região.",
    keywords: "aquecedor solar piscina, piscinas oliveira mg, aquecimento piscina, trocador calor, placas solares piscina, piscinas personalizadas, manutenção piscina, banheira hidromassagem, acessórios piscina, infláveis piscina",
    h1: "Aquecedores Solares para Piscinas em Oliveira/MG",
    h2: "Especialistas em aquecimento solar para piscinas, trocadores de calor, piscinas personalizadas e manutenção completa. Economia de até 80% na conta de energia!",
    url: "https://site-solar-aquecedor-hp5l.bolt.host/",
    ogImage: "https://i.imgur.com/DRQJpVo.jpeg"
  },
  
  aquecedores: {
    title: "Aquecedores Solares para Piscina | Trocadores de Calor | Oliveira/MG",
    description: "Aquecedores solares para piscina com alta eficiência. Trocadores de calor, placas solares e aquecedores elétricos. Instalação completa em Oliveira/MG. Orçamento grátis!",
    keywords: "aquecedor solar piscina, trocador calor piscina, placas solares aquecimento, aquecedor elétrico piscina, instalação aquecedor solar, aquecimento piscina oliveira mg",
    h1: "Aquecedores Solares para Piscina - Alta Eficiência",
    h2: "Sistemas de aquecimento solar com trocadores de calor e placas solares para manter sua piscina aquecida o ano todo",
    url: "https://site-solar-aquecedor-hp5l.bolt.host/aquecedores-solares-piscina",
    ogImage: "https://i.imgur.com/oIR52mn.png"
  },
  
  inflaveis: {
    title: "Infláveis para Piscina | Bóias, Colchões e Jogos Aquáticos | Oliveira/MG",
    description: "Infláveis para piscina de alta qualidade: bóias, anéis, colchões de ar e jogos aquáticos. Materiais resistentes e duráveis. Entrega em Oliveira/MG e região.",
    keywords: "infláveis piscina, bóias piscina, colchões ar piscina, jogos aquáticos, materiais resistentes piscina, acessórios piscina inflável, diversão piscina",
    h1: "Infláveis para Piscina - Diversão Garantida",
    h2: "Bóias, colchões de ar e jogos aquáticos com materiais resistentes para máxima diversão na água",
    url: "https://site-solar-aquecedor-hp5l.bolt.host/inflaveis-piscina",
    ogImage: "https://i.imgur.com/Dtp5l9T.png"
  },
  
  manutencao: {
    title: "Manutenção de Piscinas | Troca de Areia, Bomba e Filtro | Oliveira/MG",
    description: "Serviços completos de manutenção de piscinas: troca de areia do filtro, manutenção de casa de máquina, bomba e filtro. Cloro e produtos químicos. Oliveira/MG.",
    keywords: "manutenção piscina, troca areia filtro, manutenção bomba piscina, manutenção filtro piscina, casa máquina piscina, cloro piscina, produtos químicos piscina, limpeza piscina oliveira mg",
    h1: "Manutenção de Piscinas - Serviço Completo",
    h2: "Troca de areia do filtro, manutenção de bomba, filtro e casa de máquina com produtos químicos de qualidade",
    url: "https://site-solar-aquecedor-hp5l.bolt.host/manutencao-piscinas",
    ogImage: "https://i.imgur.com/N0CBXu8.png"
  },
  
  banheiras: {
    title: "Banheiras de Hidromassagem | Relaxamento e Imersão | Oliveira/MG",
    description: "Banheiras de hidromassagem personalizadas para relaxamento e imersão. Diferentes tamanhos e modelos. Instalação completa em Oliveira/MG. Transforme seu banheiro!",
    keywords: "banheira hidromassagem, banheira imersão, banheiras personalizadas, relaxamento, spa casa, banheira diferentes tamanhos, instalação banheira oliveira mg",
    h1: "Banheiras de Hidromassagem - Relaxamento Total",
    h2: "Banheiras personalizadas para imersão e hidromassagem com instalação completa e diferentes tamanhos",
    url: "https://site-solar-aquecedor-hp5l.bolt.host/banheiras-hidromassagem",
    ogImage: "https://i.imgur.com/qwRc7Hc.png"
  },
  
  piscinas: {
    title: "Piscinas Personalizadas e Pré-fabricadas | +100 Modelos | Oliveira/MG",
    description: "Piscinas personalizadas e pré-fabricadas com mais de 100 modelos em fibra e vinil. Sistemas de filtragem e acessórios. Construção completa em Oliveira/MG.",
    keywords: "piscinas personalizadas, piscinas pré-fabricadas, piscinas fibra, piscinas vinil, construção piscina, sistemas filtragem piscina, piscinas oliveira mg, modelos piscina",
    h1: "Piscinas Personalizadas e Pré-fabricadas",
    h2: "Mais de 100 modelos de piscinas em fibra e vinil com sistemas de filtragem e acessórios personalizáveis",
    url: "https://site-solar-aquecedor-hp5l.bolt.host/piscinas-personalizadas",
    ogImage: "https://i.imgur.com/JL35eAM.png"
  },
  
  acessorios: {
    title: "Acessórios para Piscinas | Iluminação LED, Coberturas e Escadas | Oliveira/MG",
    description: "Acessórios completos para piscinas: iluminação LED, coberturas, escadas e móveis externos. Transforme sua área de lazer com qualidade e estilo em Oliveira/MG.",
    keywords: "acessórios piscina, iluminação led piscina, coberturas piscina, escadas piscina, móveis externos, área lazer, equipamentos piscina, acessórios completos oliveira mg",
    h1: "Acessórios para Piscinas - Linha Completa",
    h2: "Iluminação LED, coberturas, escadas e móveis externos para transformar sua área de lazer",
    url: "https://site-solar-aquecedor-hp5l.bolt.host/acessorios-piscinas",
    ogImage: "https://i.imgur.com/91QBvrj.png"
  }
};

export const productKeywords = {
  aquecedores: [
    "aquecedor solar piscina",
    "trocador calor piscina", 
    "placas solares aquecimento",
    "aquecedor elétrico piscina",
    "instalação aquecedor solar",
    "sistema aquecimento piscina",
    "economia energia piscina",
    "aquecimento sustentável"
  ],
  
  inflaveis: [
    "infláveis piscina",
    "bóias piscina",
    "colchões ar piscina", 
    "jogos aquáticos",
    "materiais resistentes",
    "diversão piscina",
    "acessórios infláveis",
    "lazer aquático"
  ],
  
  manutencao: [
    "manutenção piscina",
    "troca areia filtro",
    "manutenção bomba piscina",
    "manutenção filtro",
    "casa máquina piscina",
    "cloro piscina",
    "produtos químicos piscina",
    "limpeza piscina"
  ],
  
  banheiras: [
    "banheira hidromassagem",
    "banheira imersão",
    "banheiras personalizadas",
    "relaxamento",
    "spa casa",
    "diferentes tamanhos",
    "instalação banheira"
  ],
  
  piscinas: [
    "piscinas personalizadas",
    "piscinas pré-fabricadas", 
    "piscinas fibra",
    "piscinas vinil",
    "construção piscina",
    "sistemas filtragem",
    "modelos piscina",
    "garantia piscina"
  ],
  
  acessorios: [
    "acessórios piscina",
    "iluminação led piscina",
    "coberturas piscina", 
    "escadas piscina",
    "móveis externos",
    "área lazer",
    "equipamentos piscina",
    "rede limpeza piscina"
  ]
};

export const locationKeywords = [
  "oliveira mg",
  "oliveira minas gerais", 
  "região oliveira",
  "centro oeste mg",
  "divinópolis",
  "formiga mg",
  "itaúna mg",
  "lavras mg"
];

export const serviceKeywords = [
  "orçamento grátis",
  "instalação completa",
  "garantia total",
  "melhor preço",
  "qualidade superior",
  "atendimento personalizado",
  "entrega rápida",
  "profissionais especializados"
];