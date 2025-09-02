import React, { useEffect } from 'react';

interface SEOOptimizerProps {
  page?: string;
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
}

export const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  page = 'home',
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage
}) => {
  useEffect(() => {
    // Dados SEO por página
    const seoData = {
      home: {
        title: "🏊‍♂️ Aquecedores Solares para Piscinas Oliveira/MG | Economia 80% | Orçamento Grátis",
        description: "⭐ Especialistas em aquecedores solares para piscinas em Oliveira/MG! Trocadores de calor, piscinas personalizadas, manutenção completa. 🔥 Economia até 80% na energia! Orçamento grátis WhatsApp!",
        keywords: "aquecedor solar piscina oliveira mg, trocador calor piscina, placas solares aquecimento, piscinas personalizadas oliveira, manutenção piscina oliveira mg, banheira hidromassagem, aquecimento solar sustentável, economia energia piscina, instalação aquecedor solar, piscinas fibra vinil oliveira",
        canonicalUrl: "https://site-solar-aquecedor-hp5l.bolt.host/",
        ogImage: "https://i.imgur.com/DRQJpVo.jpeg"
      },
      aquecedores: {
        title: "🔥 Aquecedores Solares para Piscina Oliveira/MG | Trocadores de Calor | Economia 80%",
        description: "Aquecedores solares para piscina com trocadores de calor de alta eficiência! Placas solares, aquecedores elétricos. Instalação completa em Oliveira/MG. Economia até 80% na energia! Orçamento grátis!",
        keywords: "aquecedor solar piscina oliveira mg, trocador calor piscina alta eficiência, placas solares aquecimento piscina, aquecedor elétrico piscina backup, instalação aquecedor solar completa, sistema aquecimento piscina sustentável, economia energia aquecedor solar",
        canonicalUrl: "https://site-solar-aquecedor-hp5l.bolt.host/aquecedores-solares-piscina-oliveira-mg",
        ogImage: "https://i.imgur.com/oIR52mn.png"
      },
      piscinas: {
        title: "🏊‍♀️ Piscinas Personalizadas Oliveira/MG | +100 Modelos Fibra e Vinil | Orçamento Grátis",
        description: "Piscinas personalizadas e pré-fabricadas em Oliveira/MG! +100 modelos em fibra e vinil, sistemas de filtragem completos, garantia total. Construção profissional, melhor preço da região!",
        keywords: "piscinas personalizadas oliveira mg, piscinas pré fabricadas fibra vinil, construção piscina oliveira mg, sistemas filtragem piscina completos, piscinas sob medida projeto personalizado, garantia piscina construção oliveira",
        canonicalUrl: "https://site-solar-aquecedor-hp5l.bolt.host/piscinas-personalizadas-oliveira-mg",
        ogImage: "https://i.imgur.com/JL35eAM.png"
      }
    };

    const currentSeoData = seoData[page as keyof typeof seoData] || seoData.home;
    
    // Usar dados customizados se fornecidos, senão usar dados padrão da página
    const finalTitle = title || currentSeoData.title;
    const finalDescription = description || currentSeoData.description;
    const finalKeywords = keywords || currentSeoData.keywords;
    const finalCanonicalUrl = canonicalUrl || currentSeoData.canonicalUrl;
    const finalOgImage = ogImage || currentSeoData.ogImage;

    // Atualizar title
    document.title = finalTitle;
    
    // Atualizar meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', finalDescription);
    }
    
    // Atualizar meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', finalKeywords);
    }
    
    // Atualizar canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', finalCanonicalUrl);
    }
    
    // Atualizar Open Graph
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', finalTitle);
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', finalDescription);
    }
    
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', finalCanonicalUrl);
    }
    
    const ogImageMeta = document.querySelector('meta[property="og:image"]');
    if (ogImageMeta) {
      ogImageMeta.setAttribute('content', finalOgImage);
    }
    
    // Atualizar Twitter Cards
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', finalTitle);
    }
    
    const twitterDescription = document.querySelector('meta[property="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', finalDescription);
    }
    
    const twitterImage = document.querySelector('meta[property="twitter:image"]');
    if (twitterImage) {
      twitterImage.setAttribute('content', finalOgImage);
    }

  }, [page, title, description, keywords, canonicalUrl, ogImage]);

  return null;
};

export default SEOOptimizer;