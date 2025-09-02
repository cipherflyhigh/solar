import React from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQItem[];
}

export const FAQSchema: React.FC<FAQSchemaProps> = ({ faqs }) => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqSchema, null, 2)
      }}
    />
  );
};

// FAQ padrão para piscinas e aquecedores
export const defaultFAQs: FAQItem[] = [
  {
    question: "Quanto custa um aquecedor solar para piscina em Oliveira/MG?",
    answer: "O preço varia conforme o tamanho da piscina e tipo de sistema. Oferecemos orçamento gratuito personalizado. Entre em contato pelo WhatsApp (37) 99110-6828 para receber sua cotação sem compromisso."
  },
  {
    question: "Qual a economia com aquecedor solar para piscina?",
    answer: "Com nossos aquecedores solares você pode economizar até 80% na conta de energia elétrica, mantendo a piscina aquecida o ano todo de forma sustentável e ecológica."
  },
  {
    question: "Vocês atendem toda a região de Oliveira/MG?",
    answer: "Sim! Atendemos Oliveira e região num raio de 50km, incluindo Divinópolis, Formiga, Itaúna, Lavras, Campo Belo e outras cidades próximas com instalação e manutenção completa."
  },
  {
    question: "Qual a garantia dos aquecedores solares e piscinas?",
    answer: "Oferecemos garantia de 5 anos nos equipamentos de aquecimento solar, 2 anos na instalação e garantia total nas piscinas construídas, com suporte técnico completo."
  },
  {
    question: "Como funciona a manutenção de piscinas?",
    answer: "Realizamos manutenção completa: troca de areia do filtro, limpeza de casa de máquina, manutenção de bomba e filtro, tratamento químico da água com cloro e produtos de qualidade."
  },
  {
    question: "Quais tipos de piscinas vocês constroem?",
    answer: "Construímos piscinas personalizadas sob medida e oferecemos mais de 100 modelos pré-fabricados em fibra de vidro e vinil, todos com sistemas de filtragem completos."
  },
  {
    question: "Vocês vendem banheiras de hidromassagem?",
    answer: "Sim! Oferecemos banheiras de hidromassagem personalizadas para relaxamento e imersão, em diferentes tamanhos, com instalação completa e acabamentos de luxo."
  },
  {
    question: "Que acessórios para piscinas vocês têm?",
    answer: "Temos linha completa: iluminação LED colorida, coberturas automáticas, escadas de segurança, móveis externos, redes de limpeza e kit completo de manutenção."
  }
];

export default FAQSchema;