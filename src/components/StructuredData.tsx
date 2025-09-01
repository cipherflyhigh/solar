import React from 'react';

interface StructuredDataProps {
  data: object;
}

export const StructuredData: React.FC<StructuredDataProps> = ({ data }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data, null, 2)
      }}
    />
  );
};

// Dados estruturados para produtos
export const productStructuredData = {
  aquecedores: {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Aquecedores Solares para Piscina",
    "description": "Sistemas de aquecimento solar para piscinas com alta eficiência energética, trocadores de calor e placas solares",
    "brand": {
      "@type": "Brand",
      "name": "Solar Aquecedores e Piscinas"
    },
    "category": "Aquecimento de Piscinas",
    "image": "https://i.imgur.com/oIR52mn.png",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "BRL",
      "seller": {
        "@type": "Organization",
        "name": "Solar Aquecedores e Piscinas",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Av. Maracaí, 510",
          "addressLocality": "Oliveira",
          "addressRegion": "MG",
          "postalCode": "35540-000",
          "addressCountry": "BR"
        }
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150"
    }
  },
  
  piscinas: {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Piscinas Personalizadas e Pré-fabricadas",
    "description": "Mais de 100 modelos de piscinas em fibra e vinil com sistemas de filtragem e acessórios personalizáveis",
    "brand": {
      "@type": "Brand",
      "name": "Solar Aquecedores e Piscinas"
    },
    "category": "Piscinas",
    "image": "https://i.imgur.com/JL35eAM.png",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "BRL",
      "seller": {
        "@type": "Organization",
        "name": "Solar Aquecedores e Piscinas"
      }
    }
  }
};

// Dados estruturados para serviços
export const serviceStructuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Instalação e Manutenção de Piscinas",
  "description": "Serviços completos de instalação, manutenção e renovação de piscinas com aquecimento solar",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Solar Aquecedores e Piscinas",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Maracaí, 510",
      "addressLocality": "Oliveira",
      "addressRegion": "MG",
      "postalCode": "35540-000",
      "addressCountry": "BR"
    },
    "telephone": "+55-37-99110-6828"
  },
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "-20.6967",
      "longitude": "-44.8278"
    },
    "geoRadius": "50000"
  },
  "serviceType": "Instalação e Manutenção de Piscinas"
};