// Shop Page Translations
// Supports 7 languages: English, Hindi, Spanish, French, German, Portuguese, Chinese (Simplified)

type Language = 'en' | 'hi' | 'es' | 'fr' | 'de' | 'pt' | 'zh';

export const shopTranslations: Record<string, Record<Language, string>> = {
  // Page Intro
  'shop.heading': {
    en: 'Shop Handmade Products',
    hi: 'हस्तनिर्मित उत्पाद खरीदें',
    es: 'Comprar Productos Hechos a Mano',
    fr: 'Acheter des Produits Artisanaux',
    de: 'Handgefertigte Produkte Kaufen',
    pt: 'Comprar Produtos Artesanais',
    zh: '购买手工产品'
  },
  'shop.subtext': {
    en: 'Ethically made products that support women artisans and communities.',
    hi: 'नैतिक रूप से बने उत्पाद जो महिला शिल्पकारों और समुदायों का समर्थन करते हैं।',
    es: 'Productos hechos éticamente que apoyan a las artesanas y comunidades.',
    fr: 'Produits fabriqués de manière éthique qui soutiennent les artisanes et les communautés.',
    de: 'Ethisch hergestellte Produkte, die Handwerkerinnen und Gemeinschaften unterstützen.',
    pt: 'Produtos feitos eticamente que apoiam artesãs e comunidades.',
    zh: '道德制造的产品，支持女工匠和社区。'
  },
  'shop.badge': {
    en: 'Handmade • Women-Led • Ethical',
    hi: 'हस्तनिर्मित • महिला-नेतृत्व • नैतिक',
    es: 'Hecho a Mano • Liderado por Mujeres • Ético',
    fr: 'Artisanal • Dirigé par des Femmes • Éthique',
    de: 'Handgefertigt • Von Frauen Geführt • Ethisch',
    pt: 'Artesanal • Liderado por Mulheres • Ético',
    zh: '手工 • 女性主导 • 道德'
  },

  // Filters
  'shop.filter.title': {
    en: 'Filter & Sort',
    hi: 'फ़िल्टर और सॉर्ट',
    es: 'Filtrar y Ordenar',
    fr: 'Filtrer et Trier',
    de: 'Filtern und Sortieren',
    pt: 'Filtrar e Ordenar',
    zh: '筛选和排序'
  },
  'shop.filter.category': {
    en: 'Category',
    hi: 'श्रेणी',
    es: 'Categoría',
    fr: 'Catégorie',
    de: 'Kategorie',
    pt: 'Categoria',
    zh: '类别'
  },
  'shop.filter.price': {
    en: 'Price Range',
    hi: 'मूल्य सीमा',
    es: 'Rango de Precio',
    fr: 'Gamme de Prix',
    de: 'Preisspanne',
    pt: 'Faixa de Preço',
    zh: '价格范围'
  },
  'shop.filter.sort': {
    en: 'Sort By',
    hi: 'इसके अनुसार क्रमबद्ध करें',
    es: 'Ordenar por',
    fr: 'Trier par',
    de: 'Sortieren nach',
    pt: 'Ordenar por',
    zh: '排序方式'
  },
  'shop.filter.all': {
    en: 'All Products',
    hi: 'सभी उत्पाद',
    es: 'Todos los Productos',
    fr: 'Tous les Produits',
    de: 'Alle Produkte',
    pt: 'Todos os Produtos',
    zh: '所有产品'
  },
  'shop.filter.bags': {
    en: 'Handmade Bags',
    hi: 'हस्तनिर्मित बैग',
    es: 'Bolsas Hechas a Mano',
    fr: 'Sacs Artisanaux',
    de: 'Handgefertigte Taschen',
    pt: 'Bolsas Artesanais',
    zh: '手工包'
  },
  'shop.filter.accessories': {
    en: 'Accessories',
    hi: 'एक्सेसरीज',
    es: 'Accesorios',
    fr: 'Accessoires',
    de: 'Accessoires',
    pt: 'Acessórios',
    zh: '配件'
  },
  'shop.filter.eco': {
    en: 'Eco-Friendly Products',
    hi: 'पर्यावरण के अनुकूल उत्पाद',
    es: 'Productos Ecológicos',
    fr: 'Produits Écologiques',
    de: 'Umweltfreundliche Produkte',
    pt: 'Produtos Ecológicos',
    zh: '环保产品'
  },
  'shop.filter.price1': {
    en: 'Under ₹500',
    hi: '₹500 से कम',
    es: 'Menos de ₹500',
    fr: 'Moins de ₹500',
    de: 'Unter ₹500',
    pt: 'Abaixo de ₹500',
    zh: '₹500以下'
  },
  'shop.filter.price2': {
    en: '₹500 – ₹1000',
    hi: '₹500 – ₹1000',
    es: '₹500 – ₹1000',
    fr: '₹500 – ₹1000',
    de: '₹500 – ₹1000',
    pt: '₹500 – ₹1000',
    zh: '₹500 – ₹1000'
  },
  'shop.filter.price3': {
    en: 'Above ₹1000',
    hi: '₹1000 से ऊपर',
    es: 'Más de ₹1000',
    fr: 'Plus de ₹1000',
    de: 'Über ₹1000',
    pt: 'Acima de ₹1000',
    zh: '₹1000以上'
  },
  'shop.sort.newest': {
    en: 'Newest',
    hi: 'नवीनतम',
    es: 'Más Nuevo',
    fr: 'Le Plus Récent',
    de: 'Neueste',
    pt: 'Mais Novo',
    zh: '最新'
  },
  'shop.sort.priceLow': {
    en: 'Price: Low to High',
    hi: 'मूल्य: कम से अधिक',
    es: 'Precio: Menor a Mayor',
    fr: 'Prix: Croissant',
    de: 'Preis: Niedrig bis Hoch',
    pt: 'Preço: Menor para Maior',
    zh: '价格：从低到高'
  },
  'shop.sort.priceHigh': {
    en: 'Price: High to Low',
    hi: 'मूल्य: अधिक से कम',
    es: 'Precio: Mayor a Menor',
    fr: 'Prix: Décroissant',
    de: 'Preis: Hoch bis Niedrig',
    pt: 'Preço: Maior para Menor',
    zh: '价格：从高到低'
  },
  'shop.filter.apply': {
    en: 'Apply',
    hi: 'लागू करें',
    es: 'Aplicar',
    fr: 'Appliquer',
    de: 'Anwenden',
    pt: 'Aplicar',
    zh: '应用'
  },
  'shop.filter.reset': {
    en: 'Reset',
    hi: 'रीसेट',
    es: 'Restablecer',
    fr: 'Réinitialiser',
    de: 'Zurücksetzen',
    pt: 'Redefinir',
    zh: '重置'
  },

  // Impact Reminder
  'shop.impact.text': {
    en: 'Every product you buy supports women artisans and their families.',
    hi: 'आप जो भी उत्पाद खरीदते हैं, वह महिला शिल्पकारों और उनके परिवारों का समर्थन करता है।',
    es: 'Cada producto que compras apoya a las artesanas y sus familias.',
    fr: 'Chaque produit que vous achetez soutient les artisanes et leurs familles.',
    de: 'Jedes Produkt, das Sie kaufen, unterstützt Handwerkerinnen und ihre Familien.',
    pt: 'Cada produto que você compra apoia as artesãs e suas famílias.',
    zh: '您购买的每件产品都支持女工匠及其家人。'
  },
  'shop.impact.link': {
    en: 'Learn how',
    hi: 'जानें कैसे',
    es: 'Aprende cómo',
    fr: 'Apprendre comment',
    de: 'Erfahren Sie wie',
    pt: 'Saiba como',
    zh: '了解如何'
  },

  // Pagination
  'shop.loadMore': {
    en: 'Load More Products',
    hi: 'और उत्पाद लोड करें',
    es: 'Cargar Más Productos',
    fr: 'Charger Plus de Produits',
    de: 'Weitere Produkte Laden',
    pt: 'Carregar Mais Produtos',
    zh: '加载更多产品'
  },
  'shop.showing': {
    en: 'Showing',
    hi: 'दिखा रहे हैं',
    es: 'Mostrando',
    fr: 'Affichage',
    de: 'Anzeigen',
    pt: 'Mostrando',
    zh: '显示'
  },
  'shop.of': {
    en: 'of',
    hi: 'में से',
    es: 'de',
    fr: 'de',
    de: 'von',
    pt: 'de',
    zh: '的'
  },
  'shop.products': {
    en: 'products',
    hi: 'उत्पाद',
    es: 'productos',
    fr: 'produits',
    de: 'Produkte',
    pt: 'produtos',
    zh: '产品'
  },

  // Badges
  'shop.badge.handmade': {
    en: 'Handmade',
    hi: 'हस्तनिर्मित',
    es: 'Hecho a Mano',
    fr: 'Artisanal',
    de: 'Handgefertigt',
    pt: 'Artesanal',
    zh: '手工制作'
  },
  'shop.badge.womenMade': {
    en: 'Women-Made',
    hi: 'महिला-निर्मित',
    es: 'Hecho por Mujeres',
    fr: 'Fait par des Femmes',
    de: 'Von Frauen Gemacht',
    pt: 'Feito por Mulheres',
    zh: '女性制作'
  },

  // Size Categories
  'shop.size.small': {
    en: 'Small Bags',
    hi: 'छोटे बैग',
    es: 'Bolsas Pequeñas',
    fr: 'Petits Sacs',
    de: 'Kleine Taschen',
    pt: 'Bolsas Pequenas',
    zh: '小包'
  },
  'shop.size.medium': {
    en: 'Medium Bags',
    hi: 'मध्यम बैग',
    es: 'Bolsas Medianas',
    fr: 'Sacs Moyens',
    de: 'Mittlere Taschen',
    pt: 'Bolsas Médias',
    zh: '中包'
  },
  'shop.size.large': {
    en: 'Large Bags',
    hi: 'बड़े बैग',
    es: 'Bolsas Grandes',
    fr: 'Grands Sacs',
    de: 'Große Taschen',
    pt: 'Bolsas Grandes',
    zh: '大包'
  },
  'shop.shopBy': {
    en: 'Shop by Size',
    hi: 'आकार के अनुसार खरीदें',
    es: 'Comprar por Tamaño',
    fr: 'Acheter par Taille',
    de: 'Nach Größe Einkaufen',
    pt: 'Comprar por Tamanho',
    zh: '按尺寸购买'
  }
};
