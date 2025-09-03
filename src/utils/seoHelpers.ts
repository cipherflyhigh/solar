// Utilitários para otimização de SEO

export const generateMetaTitle = (
  mainKeyword: string,
  location: string = "Oliveira/MG",
  benefit?: string,
  emoji?: string
): string => {
  const parts = [
    emoji && emoji,
    mainKeyword,
    location,
    benefit && `| ${benefit}`,
    "| Orçamento Grátis"
  ].filter(Boolean);
  
  return parts.join(" ");
};

export const generateMetaDescription = (
  service: string,
  keywords: string[],
  location: string = "Oliveira/MG",
  benefit?: string,
  cta: string = "Orçamento grátis!"
): string => {
  const keywordText = keywords.slice(0, 3).join(", ");
  const parts = [
    `⭐ ${service} em ${location}!`,
    keywordText,
    benefit && `🔥 ${benefit}!`,
    cta
  ].filter(Boolean);
  
  return parts.join(" ");
};

export const optimizeHeading = (
  text: string,
  keywords: string[],
  location?: string
): string => {
  let optimized = text;
  
  // Adicionar localização se não estiver presente
  if (location && !text.toLowerCase().includes(location.toLowerCase())) {
    optimized += ` em ${location}`;
  }
  
  // Adicionar palavra-chave principal se não estiver presente
  const mainKeyword = keywords[0];
  if (mainKeyword && !text.toLowerCase().includes(mainKeyword.toLowerCase())) {
    optimized = `${mainKeyword} - ${optimized}`;
  }
  
  return optimized;
};

export const generateKeywordString = (
  primaryKeywords: string[],
  secondaryKeywords: string[],
  locationKeywords: string[]
): string => {
  const allKeywords = [
    ...primaryKeywords.slice(0, 5),
    ...secondaryKeywords.slice(0, 5),
    ...locationKeywords.slice(0, 3)
  ];
  
  return allKeywords.join(", ");
};

export const createCanonicalUrl = (
  baseUrl: string,
  path: string
): string => {
  return `${baseUrl.replace(/\/$/, "")}${path}`;
};

export const generateSlug = (text: string): string => {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove acentos
    .replace(/[^a-z0-9\s-]/g, '') // Remove caracteres especiais
    .replace(/\s+/g, '-') // Substitui espaços por hífens
    .replace(/-+/g, '-') // Remove hífens duplicados
    .replace(/^-|-$/g, ''); // Remove hífens do início e fim
};

export const validateSEO = (
  title: string,
  description: string,
  keywords: string
): {
  isValid: boolean;
  warnings: string[];
  suggestions: string[];
} => {
  const warnings: string[] = [];
  const suggestions: string[] = [];
  
  // Validar title
  if (title.length < 30) {
    warnings.push("Title muito curto (mínimo 30 caracteres)");
  }
  if (title.length > 60) {
    warnings.push("Title muito longo (máximo 60 caracteres)");
  }
  
  // Validar description
  if (description.length < 120) {
    warnings.push("Meta description muito curta (mínimo 120 caracteres)");
  }
  if (description.length > 160) {
    warnings.push("Meta description muito longa (máximo 160 caracteres)");
  }
  
  // Validar keywords
  const keywordArray = keywords.split(",").map(k => k.trim());
  if (keywordArray.length < 5) {
    suggestions.push("Adicione mais palavras-chave (mínimo 5)");
  }
  if (keywordArray.length > 15) {
    suggestions.push("Muitas palavras-chave (máximo 15)");
  }
  
  // Verificar presença de localização
  if (!title.toLowerCase().includes("oliveira") && !title.toLowerCase().includes("mg")) {
    suggestions.push("Considere adicionar localização no title");
  }
  
  // Verificar call-to-action
  if (!description.toLowerCase().includes("orçamento") && !description.toLowerCase().includes("grátis")) {
    suggestions.push("Adicione call-to-action na description");
  }
  
  return {
    isValid: warnings.length === 0,
    warnings,
    suggestions
  };
};

export const trackSEOEvent = (eventName: string, parameters?: Record<string, any>) => {
  // Rastrear eventos de SEO para análise
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, {
      event_category: 'SEO',
      ...parameters
    });
  }
};

export default {
  generateMetaTitle,
  generateMetaDescription,
  optimizeHeading,
  generateKeywordString,
  createCanonicalUrl,
  generateSlug,
  validateSEO,
  trackSEOEvent
};