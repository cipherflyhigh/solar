import React from 'react';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export const BreadcrumbSchema: React.FC<BreadcrumbSchemaProps> = ({ items }) => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": {
        "@type": "WebPage",
        "@id": `https://site-solar-aquecedor-hp5l.bolt.host${item.url}`
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumbSchema, null, 2)
      }}
    />
  );
};

export const BreadcrumbNavigation: React.FC<BreadcrumbSchemaProps> = ({ items }) => {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <span className="text-gray-400">/</span>}
          <a 
            href={item.url}
            className={`hover:text-orange-500 transition-colors ${
              index === items.length - 1 ? 'text-gray-900 font-medium' : 'text-gray-600'
            }`}
          >
            {item.name}
          </a>
        </React.Fragment>
      ))}
    </nav>
  );
};

export default BreadcrumbSchema;