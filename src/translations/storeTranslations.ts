// E-Commerce Store Translations
// Supports 7 languages: English, Hindi, Spanish, French, German, Portuguese, Chinese (Simplified)

type Language = 'en' | 'hi' | 'es' | 'fr' | 'de' | 'pt' | 'zh';

export const storeTranslations: Record<string, Record<Language, string>> = {
  // Navbar
  'store.nav.shop': {
    en: 'Shop',
    hi: 'खरीदें',
    es: 'Comprar',
    fr: 'Boutique',
    de: 'Shop',
    pt: 'Loja',
    zh: '购物'
  },
  'store.nav.categories': {
    en: 'Categories',
    hi: 'श्रेणियां',
    es: 'Categorías',
    fr: 'Catégories',
    de: 'Kategorien',
    pt: 'Categorias',
    zh: '分类'
  },
  'store.nav.artisans': {
    en: 'Artisans',
    hi: 'शिल्पकार',
    es: 'Artesanas',
    fr: 'Artisanes',
    de: 'Handwerker',
    pt: 'Artesãs',
    zh: '工匠'
  },
  'store.nav.impact': {
    en: 'Impact',
    hi: 'प्रभाव',
    es: 'Impacto',
    fr: 'Impact',
    de: 'Wirkung',
    pt: 'Impacto',
    zh: '影响'
  },
  'store.nav.cart': {
    en: 'Cart',
    hi: 'कार्ट',
    es: 'Carrito',
    fr: 'Panier',
    de: 'Warenkorb',
    pt: 'Carrinho',
    zh: '购物车'
  },

  // Hero
  'store.hero.eyebrow': {
    en: 'Handmade • Ethical • Women-Led',
    hi: 'हस्तनिर्मित • नैतिक • महिला-नेतृत्व',
    es: 'Hecho a Mano • Ético • Liderado por Mujeres',
    fr: 'Artisanal • Éthique • Dirigé par des Femmes',
    de: 'Handgefertigt • Ethisch • Von Frauen Geführt',
    pt: 'Artesanal • Ético • Liderado por Mulheres',
    zh: '手工 • 道德 • 女性主导'
  },
  'store.hero.heading': {
    en: 'Crafted by Hands. Powered by Hope.',
    hi: 'हाथों से शिल्पित। आशा से संचालित।',
    es: 'Elaborado a Mano. Impulsado por Esperanza.',
    fr: 'Fabriqué à la Main. Alimenté par l\'Espoir.',
    de: 'Von Hand Gefertigt. Durch Hoffnung Angetrieben.',
    pt: 'Feito à Mão. Movido pela Esperança.',
    zh: '手工制作。希望驱动。'
  },
  'store.hero.subtext': {
    en: 'Handmade bags and essentials created by women artisans. Every purchase supports livelihoods and dignity.',
    hi: 'महिला शिल्पकारों द्वारा बनाए गए हस्तनिर्मित बैग और आवश्यक वस्तुएं। हर खरीद आजीविका और सम्मान का समर्थन करती है।',
    es: 'Bolsas artesanales y esenciales creadas por artesanas. Cada compra apoya medios de vida y dignidad.',
    fr: 'Sacs artisanaux et produits essentiels créés par des artisanes. Chaque achat soutient les moyens de subsistance et la dignité.',
    de: 'Handgefertigte Taschen und Essentials von Handwerkerinnen. Jeder Kauf unterstützt Lebensunterhalt und Würde.',
    pt: 'Bolsas artesanais e essenciais criadas por artesãs. Cada compra apoia meios de subsistência e dignidade.',
    zh: '女工匠制作的手工包和必需品。每次购买都支持生计和尊严。'
  },
  'store.hero.cta': {
    en: 'Shop Handmade Products',
    hi: 'हस्तनिर्मित उत्पाद खरीदें',
    es: 'Comprar Productos Hechos a Mano',
    fr: 'Acheter des Produits Artisanaux',
    de: 'Handgefertigte Produkte Kaufen',
    pt: 'Comprar Produtos Artesanais',
    zh: '购买手工产品'
  },
  'store.hero.secondary': {
    en: 'Learn about our artisans',
    hi: 'हमारे शिल्पकारों के बारे में जानें',
    es: 'Conoce a nuestras artesanas',
    fr: 'En savoir plus sur nos artisanes',
    de: 'Erfahren Sie mehr über unsere Handwerker',
    pt: 'Conheça nossas artesãs',
    zh: '了解我们的工匠'
  },

  // Why Buy
  'store.why.title1': {
    en: 'Handmade with Care',
    hi: 'देखभाल से हस्तनिर्मित',
    es: 'Hecho a Mano con Cuidado',
    fr: 'Fabriqué à la Main avec Soin',
    de: 'Handgefertigt mit Sorgfalt',
    pt: 'Feito à Mão com Cuidado',
    zh: '用心手工制作'
  },
  'store.why.desc1': {
    en: 'Each product is crafted, not mass-produced.',
    hi: 'प्रत्येक उत्पाद शिल्पित है, बड़े पैमाने पर उत्पादित नहीं।',
    es: 'Cada producto está elaborado, no producido en masa.',
    fr: 'Chaque produit est fabriqué, non produit en série.',
    de: 'Jedes Produkt wird gefertigt, nicht massenweise hergestellt.',
    pt: 'Cada produto é feito, não produzido em massa.',
    zh: '每件产品都是手工制作，而非批量生产。'
  },
  'store.why.title2': {
    en: 'Women-Led Livelihoods',
    hi: 'महिला-नेतृत्व वाली आजीविका',
    es: 'Medios de Vida Liderados por Mujeres',
    fr: 'Moyens de Subsistance Dirigés par des Femmes',
    de: 'Von Frauen Geführter Lebensunterhalt',
    pt: 'Meios de Subsistência Liderados por Mulheres',
    zh: '女性主导的生计'
  },
  'store.why.desc2': {
    en: 'Your purchase supports women artisans directly.',
    hi: 'आपकी खरीद सीधे महिला शिल्पकारों का समर्थन करती है।',
    es: 'Tu compra apoya directamente a las artesanas.',
    fr: 'Votre achat soutient directement les artisanes.',
    de: 'Ihr Kauf unterstützt direkt Handwerkerinnen.',
    pt: 'Sua compra apoia diretamente as artesãs.',
    zh: '您的购买直接支持女工匠。'
  },
  'store.why.title3': {
    en: 'Affordable & Ethical',
    hi: 'किफायती और नैतिक',
    es: 'Asequible y Ético',
    fr: 'Abordable et Éthique',
    de: 'Erschwinglich und Ethisch',
    pt: 'Acessível e Ético',
    zh: '实惠且道德'
  },
  'store.why.desc3': {
    en: 'Fair pricing without compromising values.',
    hi: 'मूल्यों से समझौता किए बिना उचित मूल्य निर्धारण।',
    es: 'Precios justos sin comprometer valores.',
    fr: 'Prix équitables sans compromettre les valeurs.',
    de: 'Faire Preise ohne Werte zu kompromittieren.',
    pt: 'Preços justos sem comprometer valores.',
    zh: '公平定价，不妥协价值观。'
  },

  // Featured Products
  'store.featured.heading': {
    en: 'Featured Handmade Products',
    hi: 'विशेष हस्तनिर्मित उत्पाद',
    es: 'Productos Destacados Hechos a Mano',
    fr: 'Produits Artisanaux en Vedette',
    de: 'Ausgewählte Handgefertigte Produkte',
    pt: 'Produtos Artesanais em Destaque',
    zh: '精选手工产品'
  },
  'store.featured.viewAll': {
    en: 'View All Products',
    hi: 'सभी उत्पाद देखें',
    es: 'Ver Todos los Productos',
    fr: 'Voir Tous les Produits',
    de: 'Alle Produkte Ansehen',
    pt: 'Ver Todos os Produtos',
    zh: '查看所有产品'
  },
  'store.badge.handmade': {
    en: 'Handmade',
    hi: 'हस्तनिर्मित',
    es: 'Hecho a Mano',
    fr: 'Artisanal',
    de: 'Handgefertigt',
    pt: 'Artesanal',
    zh: '手工制作'
  },

  // Artisans
  'store.artisans.heading': {
    en: 'Behind Every Product Is a Woman\'s Story',
    hi: 'हर उत्पाद के पीछे एक महिला की कहानी है',
    es: 'Detrás de Cada Producto Hay una Historia de Mujer',
    fr: 'Derrière Chaque Produit Se Trouve l\'Histoire d\'une Femme',
    de: 'Hinter Jedem Produkt Steht die Geschichte einer Frau',
    pt: 'Por Trás de Cada Produto Está a História de uma Mulher',
    zh: '每件产品背后都有一个女性的故事'
  },
  'store.artisans.text': {
    en: 'Our products are made by women who are building skills, confidence, and independence through meaningful work.',
    hi: 'हमारे उत्पाद उन महिलाओं द्वारा बनाए जाते हैं जो सार्थक काम के माध्यम से कौशल, आत्मविश्वास और स्वतंत्रता का निर्माण कर रही हैं।',
    es: 'Nuestros productos están hechos por mujeres que están construyendo habilidades, confianza e independencia a través del trabajo significativo.',
    fr: 'Nos produits sont fabriqués par des femmes qui développent des compétences, de la confiance et de l\'indépendance grâce à un travail significatif.',
    de: 'Unsere Produkte werden von Frauen hergestellt, die durch sinnvolle Arbeit Fähigkeiten, Selbstvertrauen und Unabhängigkeit aufbauen.',
    pt: 'Nossos produtos são feitos por mulheres que estão construindo habilidades, confiança e independência através de trabalho significativo.',
    zh: '我们的产品由女性制作，她们通过有意义的工作建立技能、信心和独立性。'
  },
  'store.artisans.cta': {
    en: 'Meet the Artisans',
    hi: 'शिल्पकारों से मिलें',
    es: 'Conoce a las Artesanas',
    fr: 'Rencontrez les Artisanes',
    de: 'Treffen Sie die Handwerker',
    pt: 'Conheça as Artesãs',
    zh: '认识工匠'
  },

  // Impact
  'store.impact.heading': {
    en: 'How Your Purchase Helps',
    hi: 'आपकी खरीद कैसे मदद करती है',
    es: 'Cómo Ayuda Tu Compra',
    fr: 'Comment Votre Achat Aide',
    de: 'Wie Ihr Kauf Hilft',
    pt: 'Como Sua Compra Ajuda',
    zh: '您的购买如何帮助'
  },
  'store.impact.step1.title': {
    en: 'You Buy',
    hi: 'आप खरीदते हैं',
    es: 'Tú Compras',
    fr: 'Vous Achetez',
    de: 'Sie Kaufen',
    pt: 'Você Compra',
    zh: '您购买'
  },
  'store.impact.step1.desc': {
    en: 'A handmade product',
    hi: 'एक हस्तनिर्मित उत्पाद',
    es: 'Un producto hecho a mano',
    fr: 'Un produit artisanal',
    de: 'Ein handgefertigtes Produkt',
    pt: 'Um produto artesanal',
    zh: '一件手工产品'
  },
  'store.impact.step2.title': {
    en: 'Women Earn',
    hi: 'महिलाएं कमाती हैं',
    es: 'Mujeres Ganan',
    fr: 'Les Femmes Gagnent',
    de: 'Frauen Verdienen',
    pt: 'Mulheres Ganham',
    zh: '妇女赚钱'
  },
  'store.impact.step2.desc': {
    en: 'Fair income for their work',
    hi: 'अपने काम के लिए उचित आय',
    es: 'Ingresos justos por su trabajo',
    fr: 'Un revenu équitable pour leur travail',
    de: 'Fairer Lohn für ihre Arbeit',
    pt: 'Renda justa por seu trabalho',
    zh: '工作获得公平收入'
  },
  'store.impact.step3.title': {
    en: 'Skills Grow',
    hi: 'कौशल बढ़ता है',
    es: 'Habilidades Crecen',
    fr: 'Les Compétences Grandissent',
    de: 'Fähigkeiten Wachsen',
    pt: 'Habilidades Crescem',
    zh: '技能增长'
  },
  'store.impact.step3.desc': {
    en: 'Training & confidence',
    hi: 'प्रशिक्षण और आत्मविश्वास',
    es: 'Capacitación y confianza',
    fr: 'Formation et confiance',
    de: 'Schulung und Selbstvertrauen',
    pt: 'Treinamento e confiança',
    zh: '培训和信心'
  },
  'store.impact.step4.title': {
    en: 'Communities Rise',
    hi: 'समुदाय उभरते हैं',
    es: 'Comunidades Surgen',
    fr: 'Les Communautés S\'Élèvent',
    de: 'Gemeinschaften Steigen',
    pt: 'Comunidades Se Elevam',
    zh: '社区崛起'
  },
  'store.impact.step4.desc': {
    en: 'Sustainable change',
    hi: 'स्थायी परिवर्तन',
    es: 'Cambio sostenible',
    fr: 'Changement durable',
    de: 'Nachhaltige Veränderung',
    pt: 'Mudança sustentável',
    zh: '可持续变革'
  },

  // Categories
  'store.categories.heading': {
    en: 'Shop by Category',
    hi: 'श्रेणी के अनुसार खरीदें',
    es: 'Comprar por Categoría',
    fr: 'Acheter par Catégorie',
    de: 'Nach Kategorie Einkaufen',
    pt: 'Comprar por Categoria',
    zh: '按类别购物'
  },
  'store.category.bags': {
    en: 'Handmade Bags',
    hi: 'हस्तनिर्मित बैग',
    es: 'Bolsas Hechas a Mano',
    fr: 'Sacs Artisanaux',
    de: 'Handgefertigte Taschen',
    pt: 'Bolsas Artesanais',
    zh: '手工包'
  },
  'store.category.accessories': {
    en: 'Daily-Use Accessories',
    hi: 'दैनिक उपयोग की एक्सेसरीज',
    es: 'Accesorios de Uso Diario',
    fr: 'Accessoires d\'Usage Quotidien',
    de: 'Accessoires für den Täglichen Gebrauch',
    pt: 'Acessórios de Uso Diário',
    zh: '日常用品'
  },
  'store.category.eco': {
    en: 'Eco-Friendly Products',
    hi: 'पर्यावरण के अनुकूल उत्पाद',
    es: 'Productos Ecológicos',
    fr: 'Produits Écologiques',
    de: 'Umweltfreundliche Produkte',
    pt: 'Produtos Ecológicos',
    zh: '环保产品'
  },

  // Trust Strip
  'store.trust.handmade': {
    en: 'Handmade Products',
    hi: 'हस्तनिर्मित उत्पाद',
    es: 'Productos Hechos a Mano',
    fr: 'Produits Artisanaux',
    de: 'Handgefertigte Produkte',
    pt: 'Produtos Artesanais',
    zh: '手工产品'
  },
  'store.trust.empowerment': {
    en: 'Women Empowerment Initiative',
    hi: 'महिला सशक्तिकरण पहल',
    es: 'Iniciativa de Empoderamiento de Mujeres',
    fr: 'Initiative d\'Autonomisation des Femmes',
    de: 'Initiative zur Stärkung von Frauen',
    pt: 'Iniciativa de Empoderamento Feminino',
    zh: '妇女赋权倡议'
  },
  'store.trust.ethical': {
    en: 'Ethical Production',
    hi: 'नैतिक उत्पादन',
    es: 'Producción Ética',
    fr: 'Production Éthique',
    de: 'Ethische Produktion',
    pt: 'Produção Ética',
    zh: '道德生产'
  },
  'store.trust.linked': {
    en: 'Linked to Lakhil Raj Welfare Foundation',
    hi: 'लखिल राज वेलफेयर फाउंडेशन से जुड़ा',
    es: 'Vinculado a Lakhil Raj Welfare Foundation',
    fr: 'Lié à Lakhil Raj Welfare Foundation',
    de: 'Verbunden mit Lakhil Raj Welfare Foundation',
    pt: 'Vinculado à Lakhil Raj Welfare Foundation',
    zh: '与Lakhil Raj Welfare Foundation相关联'
  },
  'store.trust.note': {
    en: 'This store supports programs run by Lakhil Raj Welfare Foundation.',
    hi: 'यह स्टोर लखिल राज वेलफेयर फाउंडेशन द्वारा संचालित कार्यक्रमों का समर्थन करता है।',
    es: 'Esta tienda apoya programas dirigidos por Lakhil Raj Welfare Foundation.',
    fr: 'Ce magasin soutient les programmes gérés par Lakhil Raj Welfare Foundation.',
    de: 'Dieser Shop unterstützt Programme der Lakhil Raj Welfare Foundation.',
    pt: 'Esta loja apoia programas administrados pela Lakhil Raj Welfare Foundation.',
    zh: '此商店支持Lakhil Raj Welfare Foundation运营的项目。'
  },

  // Soft CTA
  'store.cta.text': {
    en: 'Shop with purpose. Support real change.',
    hi: 'उद्देश्य के साथ खरीदें। वास्तविक परिवर्तन का समर्थन करें।',
    es: 'Compra con propósito. Apoya el cambio real.',
    fr: 'Achetez avec un but. Soutenez le vrai changement.',
    de: 'Mit Zweck Einkaufen. Echten Wandel Unterstützen.',
    pt: 'Compre com propósito. Apoie mudanças reais.',
    zh: '有目的地购物。支持真正的变革。'
  },
  'store.cta.button': {
    en: 'Explore the Store',
    hi: 'स्टोर देखें',
    es: 'Explorar la Tienda',
    fr: 'Explorer le Magasin',
    de: 'Shop Erkunden',
    pt: 'Explorar a Loja',
    zh: '探索商店'
  },

  // Footer
  'store.footer.shop': {
    en: 'Shop',
    hi: 'खरीदें',
    es: 'Comprar',
    fr: 'Boutique',
    de: 'Shop',
    pt: 'Loja',
    zh: '购物'
  },
  'store.footer.allProducts': {
    en: 'All Products',
    hi: 'सभी उत्पाद',
    es: 'Todos los Productos',
    fr: 'Tous les Produits',
    de: 'Alle Produkte',
    pt: 'Todos os Produtos',
    zh: '所有产品'
  },
  'store.footer.about': {
    en: 'About',
    hi: 'के बारे में',
    es: 'Acerca de',
    fr: 'À Propos',
    de: 'Über',
    pt: 'Sobre',
    zh: '关于'
  },
  'store.footer.ourStory': {
    en: 'Our Story',
    hi: 'हमारी कहानी',
    es: 'Nuestra Historia',
    fr: 'Notre Histoire',
    de: 'Unsere Geschichte',
    pt: 'Nossa História',
    zh: '我们的故事'
  },
  'store.footer.meetArtisans': {
    en: 'Meet the Artisans',
    hi: 'शिल्पकारों से मिलें',
    es: 'Conoce a las Artesanas',
    fr: 'Rencontrez les Artisanes',
    de: 'Treffen Sie die Handwerker',
    pt: 'Conheça as Artesãs',
    zh: '认识工匠'
  },
  'store.footer.ourImpact': {
    en: 'Our Impact',
    hi: 'हमारा प्रभाव',
    es: 'Nuestro Impacto',
    fr: 'Notre Impact',
    de: 'Unsere Wirkung',
    pt: 'Nosso Impacto',
    zh: '我们的影响'
  },
  'store.footer.support': {
    en: 'Support',
    hi: 'सहायता',
    es: 'Soporte',
    fr: 'Assistance',
    de: 'Unterstützung',
    pt: 'Suporte',
    zh: '支持'
  },
  'store.footer.faqs': {
    en: 'FAQs',
    hi: 'सामान्य प्रश्न',
    es: 'Preguntas Frecuentes',
    fr: 'FAQ',
    de: 'Häufige Fragen',
    pt: 'Perguntas Frequentes',
    zh: '常见问题'
  },
  'store.footer.shipping': {
    en: 'Shipping & Returns',
    hi: 'शिपिंग और रिटर्न',
    es: 'Envío y Devoluciones',
    fr: 'Livraison et Retours',
    de: 'Versand und Rücksendungen',
    pt: 'Envio e Devoluções',
    zh: '运输与退货'
  },
  'store.footer.contact': {
    en: 'Contact Us',
    hi: 'संपर्क करें',
    es: 'Contáctanos',
    fr: 'Contactez-nous',
    de: 'Kontaktieren Sie uns',
    pt: 'Entre em Contato',
    zh: '联系我们'
  },
  'store.footer.trust': {
    en: 'Trust',
    hi: 'विश्वास',
    es: 'Confianza',
    fr: 'Confiance',
    de: 'Vertrauen',
    pt: 'Confiança',
    zh: '信任'
  },
  'store.footer.linkedNGO': {
    en: 'Linked NGO',
    hi: 'संबद्ध एनजीओ',
    es: 'ONG Vinculada',
    fr: 'ONG Liée',
    de: 'Verbundene NGO',
    pt: 'ONG Vinculada',
    zh: '关联NGO'
  },
  'store.footer.policies': {
    en: 'Policies',
    hi: 'नीतियां',
    es: 'Políticas',
    fr: 'Politiques',
    de: 'Richtlinien',
    pt: 'Políticas',
    zh: '政策'
  },
  'store.footer.copyright': {
    en: '© Lakhil Raj Welfare Foundation – Handmade Store',
    hi: '© लखिल राज वेलफेयर फाउंडेशन – हस्तनिर्मित स्टोर',
    es: '© Lakhil Raj Welfare Foundation – Tienda Artesanal',
    fr: '© Lakhil Raj Welfare Foundation – Boutique Artisanale',
    de: '© Lakhil Raj Welfare Foundation – Handgefertigter Shop',
    pt: '© Lakhil Raj Welfare Foundation – Loja Artesanal',
    zh: '© Lakhil Raj Welfare Foundation – 手工商店'
  },

  // Product Details
  'store.product.addToCart': {
    en: 'Add to Cart',
    hi: 'कार्ट में जोड़ें',
    es: 'Añadir al Carrito',
    fr: 'Ajouter au Panier',
    de: 'In den Warenkorb',
    pt: 'Adicionar ao Carrinho',
    zh: '添加到购物车'
  },
  'store.product.viewDetails': {
    en: 'View Details',
    hi: 'विवरण देखें',
    es: 'Ver Detalles',
    fr: 'Voir les Détails',
    de: 'Details Anzeigen',
    pt: 'Ver Detalhes',
    zh: '查看详情'
  }
};
