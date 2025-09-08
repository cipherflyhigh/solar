import React from 'react';

interface ProductSchemaProps {
  name: string;
  description: string;
  image: string;
  category: string;
  brand?: string;
  price?: string;
  availability?: string;
  rating?: number;
  reviewCount?: number;
}

export const ProductSchema: React.FC<ProductSchemaProps> = ({
  name,
  description,
  image,
  category,
  brand = "Solar Aquecedores e Piscinas",
  price,
  availability = "InStock",
  rating = 4.9,
  reviewCount = 150
}) => {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": name,
    "description": description,
    "image": image,
    "brand": {
      "@type": "Brand",
      "name": brand
    },
    "category": category,
    "manufacturer": {
      "@type": "Organization",
      "name": "Solar Aquecedores e Piscinas",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Av. Maracanã, 510",
        "addressLocality": "Oliveira",
        "addressRegion": "MG",
        "postalCode": "35540-000",
        "addressCountry": "BR"
      }
    },
    "offers": {
      "@type": "Offer",
      "availability": `https://schema.org/${availability}`,
      "priceCurrency": "BRL",
      ...(price && { "price": price }),
      "seller": {
        "@type": "Organization",
        "name": "Solar Aquecedores e Piscinas"
      },
      "priceValidUntil": new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": rating.toString(),
      "reviewCount": reviewCount.toString(),
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(productSchema, null, 2)
      }}
    />
  );
};

export default ProductSchema;