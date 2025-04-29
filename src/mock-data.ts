
import { Product } from "./types";

// Mock Banner Items
export const mockBanners = [
  {
    id: 1,
    title: "Novos Produtos",
    subtitle: "Confira nossa nova coleção com descontos especiais!",
    imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=1200&auto=format&fit=crop",
    buttonText: "Comprar Agora",
    link: "/produtos",
  },
  {
    id: 2,
    title: "Ofertas Imperdíveis",
    subtitle: "Até 50% de desconto em produtos selecionados",
    imageUrl: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80&w=1200&auto=format&fit=crop",
    buttonText: "Ver Ofertas",
    link: "/produtos",
  },
  {
    id: 3,
    title: "Produtos Exclusivos",
    subtitle: "Os melhores produtos para o seu estilo de vida",
    imageUrl: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?q=80&w=1200&auto=format&fit=crop",
    buttonText: "Descobrir",
    link: "/produtos",
  },
];

// Mock Categories
export const mockCategories = [
  {
    id: "electronics",
    name: "Eletrônicos",
    image: "https://images.unsplash.com/photo-1661961110144-12ac85918e40?q=80&w=600&h=600&auto=format&fit=crop",
    productCount: 24,
  },
  {
    id: "fashion",
    name: "Moda",
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=600&h=600&auto=format&fit=crop",
    productCount: 36,
  },
  {
    id: "home",
    name: "Casa & Decoração",
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=600&h=600&auto=format&fit=crop",
    productCount: 18,
  },
  {
    id: "beauty",
    name: "Beleza & Saúde",
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=600&h=600&auto=format&fit=crop",
    productCount: 15,
  },
];

// Mock Products
export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Smartwatch Fitness Premium",
    description: "Monitore sua saúde, receba notificações e acompanhe seus exercícios com este smartwatch completo e elegante. Resistente à água, com bateria de longa duração e compatível com Android e iOS.",
    price: 299.99,
    discountPercentage: 10,
    image: "https://images.unsplash.com/photo-1617043786394-f977fa12eddf?q=80&w=600&h=600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1617043786394-f977fa12eddf?q=80&w=600&h=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=600&h=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1575311373937-040b8e1fd1b0?q=80&w=600&h=600&auto=format&fit=crop"
    ],
    category: "electronics",
    stock: 15,
    rating: 4.7,
    reviewCount: 142,
    slug: "smartwatch-fitness-premium",
    features: [
      "Monitor de batimentos cardíacos",
      "Resistente à água (5ATM)",
      "Bateria com duração de até 7 dias",
      "Notificações de mensagens e chamadas",
      "GPS integrado"
    ],
    isFeatured: true,
    isBestSeller: true,
  },
  {
    id: "2",
    name: "Fones de Ouvido Bluetooth sem Fio",
    description: "Experimente uma qualidade de som excepcional com estes fones de ouvido sem fio. Com cancelamento de ruído, resistência à água e bateria de longa duração, são perfeitos para qualquer atividade.",
    price: 149.99,
    discountPercentage: 0,
    image: "https://images.unsplash.com/photo-1600086827875-a63b01f1335c?q=80&w=600&h=600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600086827875-a63b01f1335c?q=80&w=600&h=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606400082777-ef05f3c5e327?q=80&w=600&h=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?q=80&w=600&h=600&auto=format&fit=crop"
    ],
    category: "electronics",
    stock: 8,
    rating: 4.5,
    reviewCount: 89,
    slug: "fones-bluetooth-sem-fio",
    features: [
      "Cancelamento ativo de ruído",
      "Resistente à água e suor (IPX5)",
      "Até 24 horas de bateria com case",
      "Microfone integrado para chamadas",
      "Controles sensíveis ao toque"
    ],
    isFeatured: false,
    isBestSeller: true,
  },
  {
    id: "3",
    name: "Câmera Instantânea Retro",
    description: "Registre momentos especiais e obtenha fotos impressas instantaneamente com esta câmera vintage. Ideal para festas, viagens e para criar memórias físicas na era digital.",
    price: 199.90,
    discountPercentage: 15,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=600&h=600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=600&h=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1587075125757-861d03df3cb6?q=80&w=600&h=600&auto=format&fit=crop", 
      "https://images.unsplash.com/photo-1495240248539-006df5f1143d?q=80&w=600&h=600&auto=format&fit=crop"
    ],
    category: "electronics",
    stock: 12,
    rating: 4.2,
    reviewCount: 65,
    slug: "camera-instantanea-retro",
    features: [
      "Impressão instantânea",
      "Design retro e elegante",
      "Flash automático",
      "Bateria recarregável",
      "Filme colorido incluído"
    ],
    isFeatured: true,
    isBestSeller: false,
  },
  {
    id: "4",
    name: "Mochila Impermeável Antifurto",
    description: "Mochila moderna e segura para seu notebook e pertences. Com tecnologia antifurto, porta USB para carregamento externo e compartimentos bem planejados, é ideal para trabalho e viagens.",
    price: 89.90,
    discountPercentage: 0,
    image: "https://images.unsplash.com/photo-1622560480654-d96214fdc887?q=80&w=600&h=600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1622560480654-d96214fdc887?q=80&w=600&h=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=600&h=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?q=80&w=600&h=600&auto=format&fit=crop"
    ],
    category: "fashion",
    stock: 20,
    rating: 4.8,
    reviewCount: 103,
    slug: "mochila-impermeavel-antifurto",
    features: [
      "Impermeável",
      "Tecnologia antifurto",
      "Porta USB para carregamento externo",
      "Compartimento para notebook até 15.6\"",
      "Material resistente a cortes"
    ],
    isFeatured: true,
    isBestSeller: true,
  },
  {
    id: "5",
    name: "Conjunto de Organizadores para Casa",
    description: "Kit com 6 organizadores de diferentes tamanhos para manter sua casa sempre organizada. Perfeito para armazenar roupas, brinquedos, acessórios e muito mais.",
    price: 69.90,
    discountPercentage: 20,
    image: "https://images.unsplash.com/photo-1597348989645-46b190ce4918?q=80&w=600&h=600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1597348989645-46b190ce4918?q=80&w=600&h=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591129841117-3adfd313bf34?q=80&w=600&h=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1594226801341-41427b4e5c22?q=80&w=600&h=600&auto=format&fit=crop"
    ],
    category: "home",
    stock: 25,
    rating: 4.6,
    reviewCount: 78,
    slug: "conjunto-organizadores-casa",
    features: [
      "Kit com 6 organizadores",
      "Material durável e lavável",
      "Design empilhável",
      "Alças resistentes",
      "Disponível em várias cores"
    ],
    isFeatured: true,
    isBestSeller: false,
  },
  {
    id: "6",
    name: "Kit Skincare Premium",
    description: "Kit completo para cuidados com a pele, contendo limpador facial, tônico, sérum de vitamina C, hidratante e protetor solar. Produtos veganos e sem testes em animais.",
    price: 159.90,
    discountPercentage: 5,
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=600&h=600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=600&h=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614859691231-d8c9e0432ec8?q=80&w=600&h=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=600&h=600&auto=format&fit=crop"
    ],
    category: "beauty",
    stock: 15,
    rating: 4.9,
    reviewCount: 56,
    slug: "kit-skincare-premium",
    features: [
      "Produtos veganos",
      "Sem parabenos e sulfatos",
      "Sem testes em animais",
      "Fórmulas hipoalergênicas",
      "Para todos os tipos de pele"
    ],
    isFeatured: false,
    isBestSeller: true,
  },
  {
    id: "7",
    name: "Tênis Esportivo Confortável",
    description: "Tênis leve e confortável, perfeito para caminhadas, corridas leves e uso diário. Com tecnologia de amortecimento e material respirável, proporciona conforto o dia todo.",
    price: 119.90,
    discountPercentage: 0,
    image: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80&w=600&h=600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80&w=600&h=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=600&h=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1608667508764-33cf0726b13a?q=80&w=600&h=600&auto=format&fit=crop"
    ],
    category: "fashion",
    stock: 10,
    rating: 4.3,
    reviewCount: 95,
    slug: "tenis-esportivo-confortavel",
    features: [
      "Material respirável",
      "Solado com amortecimento",
      "Palmilha removível",
      "Leve e flexível",
      "Disponível em várias cores"
    ],
    isFeatured: false,
    isBestSeller: true,
  },
  {
    id: "8",
    name: "Luminária de Mesa Ajustável",
    description: "Luminária moderna com luz LED ajustável em intensidade e temperatura. Design minimalista que combina com qualquer ambiente, ideal para home office ou mesa de cabeceira.",
    price: 79.90,
    discountPercentage: 10,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=600&h=600&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=600&h=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=600&h=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=600&h=600&auto=format&fit=crop"
    ],
    category: "home",
    stock: 18,
    rating: 4.5,
    reviewCount: 47,
    slug: "luminaria-mesa-ajustavel",
    features: [
      "Luz LED de baixo consumo",
      "3 temperaturas de cor",
      "Ajuste de intensidade",
      "Braço articulado",
      "Carregador USB integrado"
    ],
    isFeatured: true,
    isBestSeller: false,
  },
];

// Mock Reviews
export const mockReviews = [
  {
    id: "r1",
    productId: "1",
    customerName: "Carlos Silva",
    avatar: "https://i.pravatar.cc/150?img=1",
    date: "15/04/2023",
    rating: 5,
    comment: "Excelente smartwatch! As funções de monitoramento de saúde são muito precisas e a bateria dura realmente uma semana como prometido. A conexão com o celular é estável e as notificações chegam instantaneamente."
  },
  {
    id: "r2",
    productId: "1",
    customerName: "Maria Oliveira",
    avatar: "https://i.pravatar.cc/150?img=5",
    date: "02/05/2023",
    rating: 4,
    comment: "O relógio é muito bom, mas o app poderia ser mais intuitivo. De qualquer forma, estou muito satisfeita com a qualidade e o design. A função de monitoramento de sono é surpreendentemente precisa."
  },
  {
    id: "r3",
    productId: "1",
    customerName: "João Mendes",
    date: "18/06/2023",
    rating: 5,
    comment: "Melhor smartwatch que já tive! A duração da bateria é impressionante e o monitoramento de atividades físicas é muito completo. Vale cada centavo."
  },
  {
    id: "r4",
    productId: "2",
    customerName: "Ana Costa",
    avatar: "https://i.pravatar.cc/150?img=9",
    date: "05/04/2023",
    rating: 4,
    comment: "O som é excelente e o cancelamento de ruído funciona muito bem. As chamadas ficam claras mesmo em ambientes barulhentos. A única coisa que poderia melhorar é o encaixe nas orelhas."
  },
  {
    id: "r5",
    productId: "2",
    customerName: "Pedro Santos",
    date: "13/05/2023",
    rating: 5,
    comment: "Ótima qualidade sonora e bateria que dura bastante. Uso diariamente no trabalho e para exercícios. Totalmente satisfeito!"
  },
  {
    id: "r6",
    productId: "3",
    customerName: "Juliana Almeida",
    avatar: "https://i.pravatar.cc/150?img=6",
    date: "22/05/2023",
    rating: 4,
    comment: "A câmera é linda e as fotos têm um charme especial. Demorei um pouco para entender como funciona corretamente, mas depois é muito fácil de usar. Os filmes são um pouco caros, mas vale a pena pela experiência."
  },
  {
    id: "r7",
    productId: "4",
    customerName: "Marcos Rodrigues",
    date: "30/03/2023",
    rating: 5,
    comment: "Mochila super espaçosa e confortável. O sistema antifurto realmente funciona e me sinto muito seguro andando com meu notebook e outros itens de valor. A porta USB é um diferencial incrível!"
  }
];
