import React, { useState } from 'react';
import { Calendar, Clock, User, Tag, ArrowLeft, Share2 } from 'lucide-react';
import { BlogPost, blogPosts } from '../data/blogPosts';
import BlogCard from './BlogCard';
import SEOMetaTags from './SEOMetaTags';
import BreadcrumbSchema from './BreadcrumbSchema';

interface BlogPageProps {
  onBack: () => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onBack }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const handleReadMore = (post: BlogPost) => {
    setSelectedPost(post);
  };

  const handleBackToBlog = () => {
    setSelectedPost(null);
  };

  const sharePost = (post: BlogPost) => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href
      });
    } else {
      // Fallback para copiar URL
      navigator.clipboard.writeText(window.location.href);
      alert('Link copiado para a área de transferência!');
    }
  };

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-gray-50">
        <SEOMetaTags 
          customTitle={selectedPost.seoTitle}
          customDescription={selectedPost.seoDescription}
          customKeywords={selectedPost.seoKeywords.join(', ')}
          customCanonicalUrl={selectedPost.canonicalUrl}
        />
        <BreadcrumbSchema items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: selectedPost.title, url: `/blog/${selectedPost.slug}` }
        ]} />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <button
            onClick={handleBackToBlog}
            className="flex items-center space-x-2 text-orange-500 hover:text-orange-600 mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Voltar ao Blog</span>
          </button>

          <article className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-64 md:h-96 overflow-hidden">
              <img
                src={selectedPost.featuredImage}
                alt={selectedPost.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(selectedPost.publishDate).toLocaleDateString('pt-BR')}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{selectedPost.readTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{selectedPost.author}</span>
                  </div>
                </div>
                
                <button
                  onClick={() => sharePost(selectedPost)}
                  className="flex items-center space-x-1 text-gray-500 hover:text-orange-500 transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                  <span>Compartilhar</span>
                </button>
              </div>
              
              <div className="mb-4">
                <span className="inline-block bg-orange-100 text-orange-800 text-sm font-medium px-3 py-1 rounded-full">
                  {selectedPost.category}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {selectedPost.title}
              </h1>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {selectedPost.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center space-x-1 text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full"
                  >
                    <Tag className="w-3 h-3" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
              
              <div 
                className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: selectedPost.content }}
              />
              
              <div className="mt-12 p-6 bg-orange-50 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Precisa de ajuda com piscinas ou aquecimento solar?
                </h3>
                <p className="text-gray-700 mb-4">
                  Nossa equipe especializada está pronta para ajudar você com soluções personalizadas 
                  em Oliveira/MG e região.
                </p>
                <button 
                  onClick={() => {
                    const phoneNumber = '5537991106828';
                    const message = `Olá! Li o artigo "${selectedPost.title}" e gostaria de mais informações sobre os serviços da Solar Aquecedores e Piscinas.`;
                    const encodedMessage = encodeURIComponent(message);
                    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
                    window.open(whatsappUrl, '_blank');
                  }}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Falar com Especialista
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOMetaTags 
        customTitle="Blog - Dicas de Piscinas e Aquecimento Solar | Solar Aquecedores Oliveira/MG"
        customDescription="Dicas especializadas sobre piscinas, aquecimento solar, manutenção e cuidados. Conteúdo exclusivo da Solar Aquecedores e Piscinas em Oliveira/MG."
        customKeywords="blog piscinas, dicas aquecimento solar, manutenção piscina, cuidados piscina, oliveira mg"
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Blog", url: "/blog" }
      ]} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-orange-500 hover:text-orange-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Voltar ao Site</span>
          </button>
        </div>

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Blog - Piscinas e Aquecimento Solar
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dicas especializadas, guias completos e informações técnicas sobre piscinas, 
            aquecimento solar e manutenção em Oliveira/MG
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.id}
              post={post}
              onReadMore={handleReadMore}
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Precisa de Ajuda Especializada?
            </h2>
            <p className="text-gray-600 mb-6">
              Nossa equipe está pronta para ajudar você com soluções personalizadas 
              em piscinas e aquecimento solar em Oliveira/MG e região.
            </p>
            <button 
              onClick={() => {
                const phoneNumber = '5537991106828';
                const message = 'Olá! Visitei o blog e gostaria de mais informações sobre os serviços da Solar Aquecedores e Piscinas.';
                const encodedMessage = encodeURIComponent(message);
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
                window.open(whatsappUrl, '_blank');
              }}
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105"
            >
              Falar com Especialista
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;