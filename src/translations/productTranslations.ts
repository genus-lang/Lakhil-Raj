// Product Detail Page Translations
// Supports 7 languages: English, Hindi, Spanish, French, German, Portuguese, Chinese (Simplified)

type Language = 'en' | 'hi' | 'es' | 'fr' | 'de' | 'pt' | 'zh';

export const productTranslations: Record<string, Record<Language, string>> = {
  // Product Info
  'product.brand': {
    en: 'Brand',
    hi: 'ब्रांड',
    es: 'Marca',
    fr: 'Marque',
    de: 'Marke',
    pt: 'Marca',
    zh: '品牌'
  },
  'product.ratings': {
    en: 'ratings',
    hi: 'रेटिंग',
    es: 'calificaciones',
    fr: 'évaluations',
    de: 'Bewertungen',
    pt: 'avaliações',
    zh: '评分'
  },
  'product.mrp': {
    en: 'MRP',
    hi: 'एमआरपी',
    es: 'PVP',
    fr: 'PVC',
    de: 'UVP',
    pt: 'PVP',
    zh: '建议零售价'
  },
  'product.off': {
    en: 'off',
    hi: 'छूट',
    es: 'descuento',
    fr: 'réduction',
    de: 'Rabatt',
    pt: 'desconto',
    zh: '折扣'
  },
  'product.inclusive': {
    en: 'Inclusive of all taxes',
    hi: 'सभी करों सहित',
    es: 'Impuestos incluidos',
    fr: 'Taxes incluses',
    de: 'Inklusive aller Steuern',
    pt: 'Impostos inclusos',
    zh: '含所有税费'
  },
  'product.size': {
    en: 'Size',
    hi: 'आकार',
    es: 'Tamaño',
    fr: 'Taille',
    de: 'Größe',
    pt: 'Tamanho',
    zh: '尺寸'
  },
  'product.color': {
    en: 'Color',
    hi: 'रंग',
    es: 'Color',
    fr: 'Couleur',
    de: 'Farbe',
    pt: 'Cor',
    zh: '颜色'
  },
  'product.addToCart': {
    en: 'Add to Cart',
    hi: 'कार्ट में जोड़ें',
    es: 'Añadir al Carrito',
    fr: 'Ajouter au Panier',
    de: 'In den Warenkorb',
    pt: 'Adicionar ao Carrinho',
    zh: '添加到购物车'
  },
  'product.buyNow': {
    en: 'Buy Now',
    hi: 'अभी खरीदें',
    es: 'Comprar Ahora',
    fr: 'Acheter Maintenant',
    de: 'Jetzt Kaufen',
    pt: 'Comprar Agora',
    zh: '立即购买'
  },
  'product.wishlist': {
    en: 'Wishlist',
    hi: 'विशलिस्ट',
    es: 'Lista de Deseos',
    fr: 'Liste de Souhaits',
    de: 'Wunschliste',
    pt: 'Lista de Desejos',
    zh: '心愿单'
  },

  // Highlights
  'product.highlights': {
    en: 'Key Highlights',
    hi: 'मुख्य विशेषताएं',
    es: 'Características Clave',
    fr: 'Points Clés',
    de: 'Hauptmerkmale',
    pt: 'Destaques Principais',
    zh: '主要亮点'
  },

  // Offers & Delivery
  'product.offers': {
    en: 'Offers',
    hi: 'ऑफ़र',
    es: 'Ofertas',
    fr: 'Offres',
    de: 'Angebote',
    pt: 'Ofertas',
    zh: '优惠'
  },
  'product.delivery': {
    en: 'Delivery',
    hi: 'डिलीवरी',
    es: 'Entrega',
    fr: 'Livraison',
    de: 'Lieferung',
    pt: 'Entrega',
    zh: '配送'
  },
  'product.enterPincode': {
    en: 'Enter Pincode',
    hi: 'पिनकोड दर्ज करें',
    es: 'Ingrese Código Postal',
    fr: 'Entrez le Code Postal',
    de: 'Postleitzahl Eingeben',
    pt: 'Digite o CEP',
    zh: '输入邮编'
  },
  'product.check': {
    en: 'Check',
    hi: 'जांचें',
    es: 'Verificar',
    fr: 'Vérifier',
    de: 'Prüfen',
    pt: 'Verificar',
    zh: '检查'
  },
  'product.deliveryBy': {
    en: 'Delivery by',
    hi: 'डिलीवरी तक',
    es: 'Entrega el',
    fr: 'Livraison le',
    de: 'Lieferung bis',
    pt: 'Entrega até',
    zh: '送达日期'
  },
  'product.freeShipping': {
    en: 'Free Shipping',
    hi: 'मुफ्त शिपिंग',
    es: 'Envío Gratis',
    fr: 'Livraison Gratuite',
    de: 'Kostenloser Versand',
    pt: 'Frete Grátis',
    zh: '免费送货'
  },
  'product.replacement': {
    en: '7 Days Replacement',
    hi: '7 दिनों की प्रतिस्थापन',
    es: '7 Días de Reemplazo',
    fr: '7 Jours de Remplacement',
    de: '7 Tage Ersatz',
    pt: '7 Dias de Substituição',
    zh: '7天更换'
  },

  // Description
  'product.description': {
    en: 'Product Description',
    hi: 'उत्पाद विवरण',
    es: 'Descripción del Producto',
    fr: 'Description du Produit',
    de: 'Produktbeschreibung',
    pt: 'Descrição do Produto',
    zh: '产品描述'
  },
  'product.readMore': {
    en: 'Read More',
    hi: 'और पढ़ें',
    es: 'Leer Más',
    fr: 'Lire Plus',
    de: 'Mehr Lesen',
    pt: 'Leia Mais',
    zh: '阅读更多'
  },
  'product.readLess': {
    en: 'Read Less',
    hi: 'कम पढ़ें',
    es: 'Leer Menos',
    fr: 'Lire Moins',
    de: 'Weniger Lesen',
    pt: 'Leia Menos',
    zh: '收起'
  },

  // Specifications
  'product.specifications': {
    en: 'Specifications',
    hi: 'विशिष्टताएँ',
    es: 'Especificaciones',
    fr: 'Spécifications',
    de: 'Spezifikationen',
    pt: 'Especificações',
    zh: '规格'
  },

  // Reviews
  'product.reviews': {
    en: 'Reviews & Ratings',
    hi: 'समीक्षा और रेटिंग',
    es: 'Reseñas y Calificaciones',
    fr: 'Avis et Évaluations',
    de: 'Bewertungen und Rezensionen',
    pt: 'Avaliações e Classificações',
    zh: '评论和评分'
  },
  'product.basedOn': {
    en: 'Based on',
    hi: 'के आधार पर',
    es: 'Basado en',
    fr: 'Basé sur',
    de: 'Basierend auf',
    pt: 'Baseado em',
    zh: '基于'
  },
  'product.verifiedPurchase': {
    en: 'Verified Purchase',
    hi: 'सत्यापित खरीद',
    es: 'Compra Verificada',
    fr: 'Achat Vérifié',
    de: 'Verifizierter Kauf',
    pt: 'Compra Verificada',
    zh: '已验证购买'
  },
  'product.writeReview': {
    en: 'Write a Review',
    hi: 'समीक्षा लिखें',
    es: 'Escribir una Reseña',
    fr: 'Écrire un Avis',
    de: 'Bewertung Schreiben',
    pt: 'Escrever uma Avaliação',
    zh: '写评论'
  },
  'product.yourRating': {
    en: 'Your Rating',
    hi: 'आपकी रेटिंग',
    es: 'Tu Calificación',
    fr: 'Votre Évaluation',
    de: 'Ihre Bewertung',
    pt: 'Sua Avaliação',
    zh: '您的评分'
  },
  'product.yourReview': {
    en: 'Your Review',
    hi: 'आपकी समीक्षा',
    es: 'Tu Reseña',
    fr: 'Votre Avis',
    de: 'Ihre Bewertung',
    pt: 'Sua Avaliação',
    zh: '您的评论'
  },
  'product.submitReview': {
    en: 'Submit Review',
    hi: 'समीक्षा सबमिट करें',
    es: 'Enviar Reseña',
    fr: 'Soumettre l\'Avis',
    de: 'Bewertung Absenden',
    pt: 'Enviar Avaliação',
    zh: '提交评论'
  },

  // Q&A
  'product.qa': {
    en: 'Questions & Answers',
    hi: 'प्रश्न और उत्तर',
    es: 'Preguntas y Respuestas',
    fr: 'Questions et Réponses',
    de: 'Fragen und Antworten',
    pt: 'Perguntas e Respostas',
    zh: '问答'
  },
  'product.askQuestion': {
    en: 'Ask a Question',
    hi: 'प्रश्न पूछें',
    es: 'Hacer una Pregunta',
    fr: 'Poser une Question',
    de: 'Frage Stellen',
    pt: 'Fazer uma Pergunta',
    zh: '提问'
  },

  // Similar Products
  'product.similar': {
    en: 'Similar Products',
    hi: 'समान उत्पाद',
    es: 'Productos Similares',
    fr: 'Produits Similaires',
    de: 'Ähnliche Produkte',
    pt: 'Produtos Similares',
    zh: '类似产品'
  },

  // Impact Message
  'product.impact': {
    en: 'This purchase supports women artisans and their families',
    hi: 'यह खरीद महिला शिल्पकारों और उनके परिवारों का समर्थन करती है',
    es: 'Esta compra apoya a las artesanas y sus familias',
    fr: 'Cet achat soutient les artisanes et leurs familles',
    de: 'Dieser Kauf unterstützt Handwerkerinnen und ihre Familien',
    pt: 'Esta compra apoia artesãs e suas famílias',
    zh: '此次购买支持女工匠及其家人'
  },

  // Size Options
  'product.size.small': {
    en: 'Small',
    hi: 'छोटा',
    es: 'Pequeño',
    fr: 'Petit',
    de: 'Klein',
    pt: 'Pequeno',
    zh: '小'
  },
  'product.size.medium': {
    en: 'Medium',
    hi: 'मध्यम',
    es: 'Mediano',
    fr: 'Moyen',
    de: 'Mittel',
    pt: 'Médio',
    zh: '中'
  },
  'product.size.large': {
    en: 'Large',
    hi: 'बड़ा',
    es: 'Grande',
    fr: 'Grand',
    de: 'Groß',
    pt: 'Grande',
    zh: '大'
  }
};
