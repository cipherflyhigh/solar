import React, { useEffect } from 'react';
import { seoPages } from '../data/seoPages';

interface SEOMetaTagsProps {
  page?: string;
  customTitle?: string;
  customDescription?: string;
  customKeywords?: string;
  customCanonicalUrl?: string;
  customOgImage?: string;
}

export const SEOMetaTags: React.FC<SEOMetaTagsProps> = ({
  page = 'home',
  customTitle,
  customDescription,
  customKeywords,
  customCanonicalUrl,
  customOgImage
}) => {
  useEffect(() => {
    const seoData = seoPages[page] || seoPages.home;
    
    // Usar dados customizados se fornecidos
    const title = customTitle || seoData.title;
    const description = customDescription || seoData.description;
    const keywords = customKeywords || seoData.keywords;
    const canonicalUrl = customCanonicalUrl || seoData.canonicalUrl;
    const ogImage = customOgImage || seoData.ogImage;

    // Atualizar title
    document.title = title;
    
    // Atualizar meta description
    updateMetaTag('name', 'description', description);
    
    // Atualizar meta keywords
    updateMetaTag('name', 'keywords', keywords);
    
    // Atualizar canonical URL
    updateLinkTag('rel', 'canonical', 'href', canonicalUrl);
    
    // Atualizar Open Graph tags
    updateMetaTag('property', 'og:title', title);
    updateMetaTag('property', 'og:description', description);
    updateMetaTag('property', 'og:url', canonicalUrl);
    updateMetaTag('property', 'og:image', ogImage);
    
    // Atualizar Twitter Cards
    updateMetaTag('property', 'twitter:title', title);
    updateMetaTag('property', 'twitter:description', description);
    updateMetaTag('property', 'twitter:image', ogImage);

  }, [page, customTitle, customDescription, customKeywords, customCanonicalUrl, customOgImage]);

  const updateMetaTag = (attribute: string, value: string, content: string) => {
    let meta = document.querySelector(`meta[${attribute}="${value}"]`);
    if (meta) {
      meta.setAttribute('content', content);
    } else {
      meta = document.createElement('meta');
      meta.setAttribute(attribute, value);
      meta.setAttribute('content', content);
      document.head.appendChild(meta);
    }
  };

  const updateLinkTag = (attribute: string, value: string, contentAttr: string, content: string) => {
    let link = document.querySelector(`link[${attribute}="${value}"]`);
    if (link) {
      link.setAttribute(contentAttr, content);
    } else {
      link = document.createElement('link');
      link.setAttribute(attribute, value);
      link.setAttribute(contentAttr, content);
      document.head.appendChild(link);
    }
  };

  return null;
};

export default SEOMetaTags;