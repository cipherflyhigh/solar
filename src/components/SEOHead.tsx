import React from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Solar Aquecedores e Piscinas | Aquecimento Solar, Piscinas e Acessórios em Oliveira/MG",
  description = "Especialistas em aquecedores solares para piscinas, construção de piscinas personalizadas, manutenção e acessórios em Oliveira/MG. Orçamento grátis! ⭐ Melhor custo-benefício da região.",
  keywords = "aquecedor solar piscina, piscinas oliveira mg, aquecimento piscina, trocador calor, placas solares piscina, piscinas personalizadas, manutenção piscina, banheira hidromassagem, acessórios piscina, infláveis piscina",
  canonicalUrl = "https://site-solar-aquecedor-hp5l.bolt.host/",
  ogImage = "https://i.imgur.com/DRQJpVo.jpeg"
}) => {
  React.useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }
    
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', canonicalUrl);
    }
    
    const ogImageMeta = document.querySelector('meta[property="og:image"]');
    if (ogImageMeta) {
      ogImageMeta.setAttribute('content', ogImage);
    }
    
    // Add canonical link if it doesn't exist
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);
    
  }, [title, description, keywords, canonicalUrl, ogImage]);

  return null;
};

export default SEOHead;