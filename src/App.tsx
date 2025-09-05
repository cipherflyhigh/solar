import React, { useState } from 'react';
import { Thermometer, Leaf, DollarSign, Target, Award, Users, CheckCircle as CircleCheck, Heart, Waves, Droplets, Wrench, Bath, Home, Zap, Settings, ShoppingBag, Palette, Star, Menu, X } from 'lucide-react';
import SEOMetaTags from './components/SEOMetaTags';
import BreadcrumbSchema from './components/BreadcrumbSchema';
import ProductSchema from './components/ProductSchema';
import FAQSchema, { defaultFAQs } from './components/FAQSchema';
import { seoPages } from './data/seoPages';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const openWhatsApp = (message: string) => {
    const phoneNumber = '5537991106828';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Rastrear conversão do Google Ads
    if (typeof (window as any).gtag_report_conversion === 'function') {
      (window as any).gtag_report_conversion(whatsappUrl);
    } else {
      window.open(whatsappUrl, '_blank');
    }
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const navigation = [
    { id: 'home', label: 'Home' },
    { id: 'sobre', label: 'Sobre' },
    { id: 'produtos', label: 'Produtos' },
    { id: 'servicos', label: 'Serviços' },
    { id: 'avaliacoes', label: 'Avaliações' },
  ];

  const features = [
    {
      icon: <Thermometer className="w-8 h-8" />,
      title: 'Alta Eficiência',
      subtitle: 'Aquecimento rápido',
      color: 'text-orange-500'
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: 'Sustentável',
      subtitle: 'Energia renovável',
      color: 'text-green-500'
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Baixo Custo',
      subtitle: 'Economia garantida',
      color: 'text-yellow-500'
    }
  ];

  const aboutFeatures = [
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Excelência',
      description: 'Compromisso com a qualidade em todos os nossos produtos e serviços.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Experiência',
      description: 'Equipe especializada com anos de experiência no setor.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Precisão',
      description: 'Soluções personalizadas para atender suas necessidades específicas.'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Satisfação',
      description: 'Foco total na satisfação e bem-estar dos nossos clientes.'
    }
  ];

  const products = [
    {
      title: 'Aquecedores',
      description: 'Aquecedores de piscina de alta eficiência com fonte de energia renovável',
      image: 'https://i.imgur.com/oIR52mn.png',
      icon: <Thermometer className="w-8 h-8" />,
      color: 'bg-orange-100',
      iconColor: 'text-orange-500',
      buttonColor: 'bg-orange-500 hover:bg-orange-600',
      items: [
        'Trocadores de calor',
        'Placas solares',
        'Aquecedor elétrico',
        'Instalação completa'
      ]
    },
    {
      title: 'Infláveis',
      description: 'Produtos infláveis para diversão e lazer na água',
      image: 'https://i.imgur.com/Dtp5l9T.png',
      icon: <Waves className="w-8 h-8" />,
      color: 'bg-blue-100',
      iconColor: 'text-blue-500',
      buttonColor: 'bg-blue-500 hover:bg-blue-600',
      items: [
        'Bóias e anéis',
        'Colchões de ar',
        'Jogos aquáticos',
        'Materiais resistentes'
      ]
    },
    {
      title: 'Manutenção',
      description: 'Produtos e equipamentos para manutenção e limpeza da piscina',
      image: 'https://i.imgur.com/N0CBXu8.png',
      icon: <Wrench className="w-8 h-8" />,
      color: 'bg-cyan-100',
      iconColor: 'text-cyan-500',
      buttonColor: 'bg-cyan-500 hover:bg-cyan-600',
      items: [
        'Troca de areia do filtro',
        'Manutenção de casa de máquina',
        'Manutenção de bomba e filtro',
        'Cloro e desinfetantes'
      ]
    },
    {
      title: 'Banheiras',
      description: 'Banheiras de hidromassagem e imersão para relaxamento',
      image: 'https://i.imgur.com/qwRc7Hc.png',
      icon: <Bath className="w-8 h-8" />,
      color: 'bg-purple-100',
      iconColor: 'text-purple-500',
      buttonColor: 'bg-purple-500 hover:bg-purple-600',
      items: [
        'Hidromassagem',
        'Imersão',
        'Diferentes tamanhos',
        'Instalação completa'
      ]
    },
    {
      title: 'Piscinas',
      description: 'Piscinas personalizadas e pré-fabricadas de alta qualidade',
      image: 'https://i.imgur.com/JL35eAM.png',
      icon: <Home className="w-8 h-8" />,
      color: 'bg-green-100',
      iconColor: 'text-green-500',
      buttonColor: 'bg-green-500 hover:bg-green-600',
      items: [
        'Mais de 100 modelos de fibra e vinil',
        'Sistemas de filtragem',
        'Acessórios personalizáveis',
        'Garantia total'
      ]
    },
    {
      title: 'Acessórios',
      description: 'Completa linha de acessórios para piscinas e áreas de lazer',
      image: 'https://i.imgur.com/91QBvrj.png',
      icon: <Zap className="w-8 h-8" />,
      color: 'bg-yellow-100',
      iconColor: 'text-yellow-600',
      buttonColor: 'bg-yellow-500 hover:bg-yellow-600',
      items: [
        'Iluminação LED',
        'Coberturas',
        'Escadas',
        'Móveis externos'
      ]
    }
  ];

  const services = [
    {
      title: 'Construção de Piscinas Personalizadas',
      description: 'Projetos únicos desenvolvidos especialmente para seu espaço, desde o conceito até a entrega final.',
      icon: <Settings className="w-8 h-8" />,
      color: 'bg-orange-500',
      features: [
        'Projeto personalizado',
        'Instalação profissional',
        'Materiais de qualidade',
        'Garantia completa'
      ]
    },
    {
      title: 'Venda de Piscinas Pré-fabricadas',
      description: 'Ampla variedade de piscinas prontas com diferentes tamanhos e modelos para sua escolha.',
      icon: <ShoppingBag className="w-8 h-8" />,
      color: 'bg-blue-500',
      features: [
        'Diversos modelos',
        'Melhor custo-benefício',
        'Instalação rápida',
        'Entrega garantida'
      ]
    },
    {
      title: 'Manutenção e Renovação',
      description: 'Serviços completos de manutenção preventiva e renovação para manter sua piscina sempre perfeita.',
      icon: <Wrench className="w-8 h-8" />,
      color: 'bg-cyan-500',
      features: [
        'Limpeza regular',
        'Reparos',
        'Tratamento químico',
        'Renovação completa'
      ]
    },
    {
      title: 'Projeto de Áreas de Lazer',
      description: 'Criação de espaços completos de lazer com decks, pátios e ambientes integrados.',
      icon: <Palette className="w-8 h-8" />,
      color: 'bg-green-500',
      features: [
        'Design personalizado',
        'Iluminação',
        'Decks e pergolados',
        'Paisagismo'
      ]
    }
  ];

  const reviews = [
    {
      name: 'Maria Silva',
      rating: 5,
      comment: 'Excelente atendimento e qualidade impecável! Nossa piscina ficou perfeita e o aquecimento solar funciona muito bem.',
      location: 'Oliveira, MG'
    },
    {
      name: 'João Santos',
      rating: 5,
      comment: 'Profissionais muito competentes. Fizeram a instalação completa em tempo record e com acabamento perfeito.',
      location: 'Belo Horizonte, MG'
    },
    {
      name: 'Ana Costa',
      rating: 5,
      comment: 'Recomendo! Tivemos uma excelente experiência desde o orçamento até a entrega. Produto de alta qualidade.',
      location: 'Divinópolis, MG'
    },
    {
      name: 'Carlos Ferreira',
      rating: 5,
      comment: 'A equipe da Solar Piscinas é fantástica. Cumpriram todos os prazos e a piscina superou nossas expectativas.',
      location: 'Lavras, MG'
    },
    {
      name: 'Luciana Oliveira',
      rating: 5,
      comment: 'Atendimento personalizado e resultado final incrível. Nossa família está adorando a nova área de lazer!',
      location: 'Formiga, MG'
    },
    {
      name: 'Roberto Alves',
      rating: 5,
      comment: 'Investimento que valeu a pena! Sistema de aquecimento solar muito eficiente e economia na conta de energia.',
      location: 'Itaúna, MG'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Components */}
      <SEOMetaTags page="home" />
      <BreadcrumbSchema items={seoPages.home.breadcrumbs} />
      <ProductSchema 
        name="Aquecedores Solares para Piscinas"
        description="Sistemas de aquecimento solar com trocadores de calor e placas solares para piscinas. Economia de até 80% na energia elétrica."
        image="https://i.imgur.com/oIR52mn.png"
        category="Aquecimento de Piscinas"
        rating={4.9}
        reviewCount={150}
      />
      <FAQSchema faqs={defaultFAQs} />
      
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img 
                src="https://i.imgur.com/VJUO0cN.png" 
                alt="Solar Aquecedores e Piscinas" 
                className="h-10 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-gray-700 hover:text-orange-500 font-medium transition-colors ${
                    activeSection === item.id ? 'text-orange-500' : ''
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => openWhatsApp('Olá! Gostaria de mais informações sobre os produtos e serviços da Solar Aquecedores e Piscinas.')}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium transition-colors"
              >
                Contato
              </button>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-orange-500"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              Contato
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-3">
                {navigation.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left text-gray-700 hover:text-orange-500 font-medium transition-colors ${
                      activeSection === item.id ? 'text-orange-500' : ''
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium transition-colors text-center mt-4">
                  <span onClick={() => openWhatsApp('Olá! Gostaria de mais informações sobre os produtos e serviços da Solar Aquecedores e Piscinas.')}>Contato</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-orange-600 font-medium">
                <Star className="w-4 h-4 fill-current" />
                <span>Nota 4.9/5 • 150+ clientes satisfeitos</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-orange-500">Aquecedores Solares</span> para <br />
                Piscinas em <span className="text-blue-500">Oliveira/MG</span>
              </h1>
            </div>
            <h2 className="text-xl md:text-2xl text-gray-600 leading-relaxed font-normal">
              🔥 <strong>Economia de até 80%</strong> na conta de energia! Especialistas em aquecimento solar, 
              trocadores de calor, piscinas personalizadas e manutenção completa. 
              <span className="text-orange-600 font-semibold">Orçamento grátis!</span>
            </h2>
            
            {/* Benefícios em destaque */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Thermometer className="w-6 h-6 text-orange-500" />
                </div>
                <p className="text-sm font-medium text-gray-900">Aquecimento Solar</p>
                <p className="text-xs text-gray-600">Sustentável</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <DollarSign className="w-6 h-6 text-green-500" />
                </div>
                <p className="text-sm font-medium text-gray-900">Economia 80%</p>
                <p className="text-xs text-gray-600">Na energia</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Award className="w-6 h-6 text-blue-500" />
                </div>
                <p className="text-sm font-medium text-gray-900">Garantia 5 Anos</p>
                <p className="text-xs text-gray-600">Equipamentos</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Target className="w-6 h-6 text-purple-500" />
                </div>
                <p className="text-sm font-medium text-gray-900">Oliveira/MG</p>
                <p className="text-xs text-gray-600">E região</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => openWhatsApp('🏊‍♂️ Olá! Gostaria de solicitar um ORÇAMENTO GRÁTIS para aquecedores solares de piscina em Oliveira/MG. Quero economizar até 80% na energia!')}
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
              >
                <span>🔥 Orçamento Grátis</span>
                <CircleCheck className="w-5 h-5" />
              </button>
              <button 
                onClick={() => scrollToSection('produtos')}
                className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105"
              >
                Ver Produtos
              </button>
            </div>
            
            {/* Trust indicators */}
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <CircleCheck className="w-4 h-4 text-green-500" />
                <span>Orçamento Grátis</span>
              </div>
              <div className="flex items-center space-x-1">
                <CircleCheck className="w-4 h-4 text-green-500" />
                <span>Instalação Profissional</span>
              </div>
              <div className="flex items-center space-x-1">
                <CircleCheck className="w-4 h-4 text-green-500" />
                <span>Garantia Total</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://i.imgur.com/DRQJpVo.jpeg"
              alt="Piscina Solar"
              className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
            />
            
            {/* Features Cards */}
            <div className="absolute -bottom-8 -left-8 right-8 grid grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-4 rounded-xl shadow-lg">
                  <div className={`${feature.color} mb-2`}>
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm">{feature.title}</h3>
                  <p className="text-xs text-gray-600">{feature.subtitle}</p>
                </div>
              ))}
            </div>

            {/* Floating Card */}
            <div className="absolute top-4 right-4 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <Thermometer className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Aquecimento Perfeito</h4>
                  <p className="text-xs text-gray-600">Temperatura ideal o ano todo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🏆 Especialistas em Aquecimento Solar para Piscinas em Oliveira/MG
            </h2>
            <h3 className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              <strong>Mais de 10 anos</strong> transformando piscinas com <strong>tecnologia solar sustentável</strong>. 
              Atendemos Oliveira, Divinópolis, Formiga, Itaúna, Lavras e toda região centro-oeste de MG.
            </h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                A Solar Aquecedores e Piscinas, localizada em Oliveira, Minas Gerais, é uma empresa que 
                se destaca no setor de piscinas e acessórios. Oferece uma ampla variedade de produtos e 
                serviços, desde a construção de piscinas personalizadas até a venda de piscinas pré-fabricadas, 
                além de manutenção e acessórios.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Com um compromisso com a satisfação do cliente, a Solar Piscinas busca proporcionar 
                experiências únicas e inesquecíveis, tornando cada piscina um espaço de lazer, 
                relaxamento e diversão para famílias e amigos.
              </p>
            </div>

            <div className="relative">
              <img
                src="https://i.imgur.com/7gWrNBt.jpeg"
                alt="Sobre a Solar"
                className="rounded-xl shadow-lg w-full h-96 object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-lg">
                <h4 className="font-semibold text-gray-900">Solar Aquecedores e Piscinas</h4>
                <p className="text-sm text-gray-600">Av. Maracaí, 510 - Centro, Oliveira/MG</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-500 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produtos" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🛍️ Produtos para Piscinas e Aquecimento Solar em Oliveira/MG
            </h2>
            <h3 className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
              Linha completa: <strong>aquecedores solares</strong>, <strong>trocadores de calor</strong>, 
              <strong>piscinas personalizadas</strong>, acessórios e produtos para manutenção
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className={`w-16 h-16 ${product.color} rounded-xl flex items-center justify-center ${product.iconColor} mb-4`}>
                    {product.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {product.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <button 
                    onClick={() => openWhatsApp(`Olá! Tenho interesse em ${product.title.toLowerCase()}. Gostaria de mais informações sobre ${product.description.toLowerCase()}.`)}
                    className={`w-full ${product.buttonColor} text-white py-3 rounded-lg font-semibold transition-colors`}
                  >
                    Saiba Mais
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🔧 Serviços de Piscinas e Aquecimento Solar em Oliveira/MG
            </h2>
            <h3 className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
              <strong>Instalação profissional</strong>, <strong>manutenção preventiva</strong> e 
              <strong>construção de piscinas</strong> com aquecimento solar sustentável
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center text-white`}>
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => openWhatsApp(`Olá! Gostaria de solicitar um orçamento para ${service.title.toLowerCase()}. ${service.description}`)}
                  className={`${service.color} text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity`}
                >
                  Solicitar Orçamento
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="avaliacoes" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ⭐ Avaliações - Aquecedores Solares e Piscinas Oliveira/MG
            </h2>
            <h3 className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
              <strong>150+ clientes satisfeitos</strong> com nossos aquecedores solares, piscinas e serviços em Oliveira/MG e região
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(review.rating)].map((_, starIndex) => (
                    <Star key={starIndex} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">"{review.comment}"</p>
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-600">{review.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-2 bg-yellow-50 px-6 py-3 rounded-full">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="font-semibold text-yellow-800">4.9/5</span>
              <span className="text-yellow-700">• Baseado em 150+ avaliações</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">SP</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Solar Aquecedores e Piscinas</h3>
                  <p className="text-gray-300 text-sm">Oliveira/MG</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Transformando sonhos em realidade através de piscinas e áreas de lazer perfeitas.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Contato</h4>
              <div className="space-y-2 text-gray-300">
                <p>Av. Maracaí, 510 - Centro</p>
                <p>Oliveira/MG - CEP: 35540-000</p>
                <p>Telefone: (37) 3331-1234</p>
                <p>WhatsApp: (37) 99999-1234</p>
                <p>contato@solarpiscinas.com.br</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Horário de Funcionamento</h4>
              <div className="space-y-2 text-gray-300">
                <p>Segunda a Sexta: 8h às 18h</p>
                <p>Sábados: 8h às 12h</p>
                <p>Domingos: Fechado</p>
              </div>
              <button 
                onClick={() => openWhatsApp('Olá! Gostaria de solicitar um orçamento para produtos e serviços da Solar Aquecedores e Piscinas.')}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium transition-colors mt-4"
              >
                Solicitar Orçamento
              </button>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Solar Aquecedores e Piscinas. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;