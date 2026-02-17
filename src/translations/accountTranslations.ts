// My Account, Wishlist, Track Order, Notifications, Bulk Orders Translations
// Supports 7 languages: English, Hindi, Spanish, French, German, Portuguese, Chinese (Simplified)

type Language = 'en' | 'hi' | 'es' | 'fr' | 'de' | 'pt' | 'zh';

export const accountTranslations: Record<string, Record<Language, string>> = {
  // My Account
  'account.title': {
    en: 'My Account',
    hi: 'मेरा खाता',
    es: 'Mi Cuenta',
    fr: 'Mon Compte',
    de: 'Mein Konto',
    pt: 'Minha Conta',
    zh: '我的账户'
  },
  'account.hello': {
    en: 'Hello',
    hi: 'नमस्ते',
    es: 'Hola',
    fr: 'Bonjour',
    de: 'Hallo',
    pt: 'Olá',
    zh: '你好'
  },
  'account.viewOrders': {
    en: 'View Orders',
    hi: 'ऑर्डर देखें',
    es: 'Ver Pedidos',
    fr: 'Voir les Commandes',
    de: 'Bestellungen Ansehen',
    pt: 'Ver Pedidos',
    zh: '查看订单'
  },
  'account.editProfile': {
    en: 'Edit Profile',
    hi: 'प्रोफ़ाइल संपादित करें',
    es: 'Editar Perfil',
    fr: 'Modifier le Profil',
    de: 'Profil Bearbeiten',
    pt: 'Editar Perfil',
    zh: '编辑资料'
  },
  'account.profile': {
    en: 'Profile',
    hi: 'प्रोफ़ाइल',
    es: 'Perfil',
    fr: 'Profil',
    de: 'Profil',
    pt: 'Perfil',
    zh: '个人资料'
  },
  'account.orders': {
    en: 'Orders',
    hi: 'ऑर्डर',
    es: 'Pedidos',
    fr: 'Commandes',
    de: 'Bestellungen',
    pt: 'Pedidos',
    zh: '订单'
  },
  'account.wishlist': {
    en: 'Wishlist',
    hi: 'इच्छा सूची',
    es: 'Lista de Deseos',
    fr: 'Liste de Souhaits',
    de: 'Wunschliste',
    pt: 'Lista de Desejos',
    zh: '心愿单'
  },
  'account.addresses': {
    en: 'Addresses',
    hi: 'पते',
    es: 'Direcciones',
    fr: 'Adresses',
    de: 'Adressen',
    pt: 'Endereços',
    zh: '地址'
  },
  'account.notifications': {
    en: 'Notifications',
    hi: 'सूचनाएं',
    es: 'Notificaciones',
    fr: 'Notifications',
    de: 'Benachrichtigungen',
    pt: 'Notificações',
    zh: '通知'
  },
  'account.payments': {
    en: 'Payments',
    hi: 'भुगतान',
    es: 'Pagos',
    fr: 'Paiements',
    de: 'Zahlungen',
    pt: 'Pagamentos',
    zh: '支付'
  },
  'account.logout': {
    en: 'Logout',
    hi: 'लॉगआउट',
    es: 'Cerrar Sesión',
    fr: 'Se Déconnecter',
    de: 'Abmelden',
    pt: 'Sair',
    zh: '退出登录'
  },
  'account.fullName': {
    en: 'Full Name',
    hi: 'पूरा नाम',
    es: 'Nombre Completo',
    fr: 'Nom Complet',
    de: 'Vollständiger Name',
    pt: 'Nome Completo',
    zh: '全名'
  },
  'account.email': {
    en: 'Email',
    hi: 'ईमेल',
    es: 'Email',
    fr: 'Email',
    de: 'E-Mail',
    pt: 'Email',
    zh: '电子邮箱'
  },
  'account.phone': {
    en: 'Phone Number',
    hi: 'फ़ोन नंबर',
    es: 'Número de Teléfono',
    fr: 'Numéro de Téléphone',
    de: 'Telefonnummer',
    pt: 'Número de Telefone',
    zh: '电话号码'
  },
  'account.saveChanges': {
    en: 'Save Changes',
    hi: 'परिवर्तन सहेजें',
    es: 'Guardar Cambios',
    fr: 'Enregistrer les Modifications',
    de: 'Änderungen Speichern',
    pt: 'Salvar Alterações',
    zh: '保存更改'
  },
  'account.security': {
    en: 'Security',
    hi: 'सुरक्षा',
    es: 'Seguridad',
    fr: 'Sécurité',
    de: 'Sicherheit',
    pt: 'Segurança',
    zh: '安全'
  },
  'account.changePassword': {
    en: 'Change Password',
    hi: 'पासवर्ड बदलें',
    es: 'Cambiar Contraseña',
    fr: 'Changer le Mot de Passe',
    de: 'Passwort Ändern',
    pt: 'Alterar Senha',
    zh: '更改密码'
  },
  'account.manageLogin': {
    en: 'Manage Login Methods',
    hi: 'लॉगिन विधियां प्रबंधित करें',
    es: 'Administrar Métodos de Inicio de Sesión',
    fr: 'Gérer les Méthodes de Connexion',
    de: 'Anmeldemethoden Verwalten',
    pt: 'Gerenciar Métodos de Login',
    zh: '管理登录方式'
  },

  // Wishlist
  'wishlist.title': {
    en: 'My Wishlist',
    hi: 'मेरी इच्छा सूची',
    es: 'Mi Lista de Deseos',
    fr: 'Ma Liste de Souhaits',
    de: 'Meine Wunschliste',
    pt: 'Minha Lista de Desejos',
    zh: '我的心愿单'
  },
  'wishlist.items': {
    en: 'items',
    hi: 'आइटम',
    es: 'artículos',
    fr: 'articles',
    de: 'Artikel',
    pt: 'itens',
    zh: '件商品'
  },
  'wishlist.addToCart': {
    en: 'Add to Cart',
    hi: 'कार्ट में जोड़ें',
    es: 'Añadir al Carrito',
    fr: 'Ajouter au Panier',
    de: 'In den Warenkorb',
    pt: 'Adicionar ao Carrinho',
    zh: '加入购物车'
  },
  'wishlist.remove': {
    en: 'Remove',
    hi: 'हटाएं',
    es: 'Eliminar',
    fr: 'Supprimer',
    de: 'Entfernen',
    pt: 'Remover',
    zh: '移除'
  },
  'wishlist.empty': {
    en: 'Your wishlist is empty',
    hi: 'आपकी इच्छा सूची खाली है',
    es: 'Tu lista de deseos está vacía',
    fr: 'Votre liste de souhaits est vide',
    de: 'Ihre Wunschliste ist leer',
    pt: 'Sua lista de desejos está vazia',
    zh: '您的心愿单是空的'
  },
  'wishlist.emptySubtext': {
    en: 'Start saving products you love',
    hi: 'अपने पसंदीदा उत्पाद सहेजना शुरू करें',
    es: 'Comienza a guardar productos que amas',
    fr: 'Commencez à enregistrer les produits que vous aimez',
    de: 'Beginnen Sie, Produkte zu speichern, die Sie lieben',
    pt: 'Comece a salvar produtos que você ama',
    zh: '开始保存您喜欢的产品'
  },
  'wishlist.continueShopping': {
    en: 'Continue Shopping',
    hi: 'खरीदारी जारी रखें',
    es: 'Continuar Comprando',
    fr: 'Continuer les Achats',
    de: 'Weiter Einkaufen',
    pt: 'Continuar Comprando',
    zh: '继续购物'
  },

  // Track Order
  'track.title': {
    en: 'Track Order',
    hi: 'ऑर्डर ट्रैक करें',
    es: 'Rastrear Pedido',
    fr: 'Suivre la Commande',
    de: 'Bestellung Verfolgen',
    pt: 'Rastrear Pedido',
    zh: '追踪订单'
  },
  'track.orderId': {
    en: 'Order',
    hi: 'ऑर्डर',
    es: 'Pedido',
    fr: 'Commande',
    de: 'Bestellung',
    pt: 'Pedido',
    zh: '订单'
  },
  'track.placedOn': {
    en: 'Placed on',
    hi: 'पर रखा गया',
    es: 'Realizado el',
    fr: 'Passé le',
    de: 'Aufgegeben am',
    pt: 'Feito em',
    zh: '下单于'
  },
  'track.orderPlaced': {
    en: 'Order Placed',
    hi: 'ऑर्डर दिया',
    es: 'Pedido Realizado',
    fr: 'Commande Passée',
    de: 'Bestellung Aufgegeben',
    pt: 'Pedido Feito',
    zh: '订单已下'
  },
  'track.shipped': {
    en: 'Shipped',
    hi: 'भेज दिया',
    es: 'Enviado',
    fr: 'Expédié',
    de: 'Versendet',
    pt: 'Enviado',
    zh: '已发货'
  },
  'track.outForDelivery': {
    en: 'Out for Delivery',
    hi: 'डिलीवरी के लिए निकला',
    es: 'En Camino',
    fr: 'En Livraison',
    de: 'Unterwegs',
    pt: 'Saiu para Entrega',
    zh: '派送中'
  },
  'track.delivered': {
    en: 'Delivered',
    hi: 'डिलीवर हो गया',
    es: 'Entregado',
    fr: 'Livré',
    de: 'Zugestellt',
    pt: 'Entregue',
    zh: '已送达'
  },
  'track.expectedDelivery': {
    en: 'Expected Delivery',
    hi: 'अपेक्षित डिलीवरी',
    es: 'Entrega Esperada',
    fr: 'Livraison Prévue',
    de: 'Voraussichtliche Lieferung',
    pt: 'Entrega Esperada',
    zh: '预计送达'
  },
  'track.courier': {
    en: 'Courier',
    hi: 'कूरियर',
    es: 'Mensajero',
    fr: 'Coursier',
    de: 'Kurier',
    pt: 'Transportadora',
    zh: '快递'
  },
  'track.trackingId': {
    en: 'Tracking ID',
    hi: 'ट्रैकिंग आईडी',
    es: 'ID de Seguimiento',
    fr: 'ID de Suivi',
    de: 'Sendungsnummer',
    pt: 'ID de Rastreamento',
    zh: '追踪号'
  },
  'track.trackOnCourier': {
    en: 'Track on Courier Site',
    hi: 'कूरियर साइट पर ट्रैक करें',
    es: 'Rastrear en el Sitio del Mensajero',
    fr: 'Suivre sur le Site du Coursier',
    de: 'Auf Kurier-Website Verfolgen',
    pt: 'Rastrear no Site da Transportadora',
    zh: '在快递网站追踪'
  },
  'track.downloadInvoice': {
    en: 'Download Invoice',
    hi: 'चालान डाउनलोड करें',
    es: 'Descargar Factura',
    fr: 'Télécharger la Facture',
    de: 'Rechnung Herunterladen',
    pt: 'Baixar Fatura',
    zh: '下载发票'
  },
  'track.needHelp': {
    en: 'Need Help?',
    hi: 'मदद चाहिए?',
    es: '¿Necesitas Ayuda?',
    fr: 'Besoin d\'Aide?',
    de: 'Brauchen Sie Hilfe?',
    pt: 'Precisa de Ajuda?',
    zh: '需要帮助？'
  },

  // Notifications
  'notif.title': {
    en: 'Notifications',
    hi: 'सूचनाएं',
    es: 'Notificaciones',
    fr: 'Notifications',
    de: 'Benachrichtigungen',
    pt: 'Notificações',
    zh: '通知'
  },
  'notif.all': {
    en: 'All',
    hi: 'सभी',
    es: 'Todas',
    fr: 'Toutes',
    de: 'Alle',
    pt: 'Todas',
    zh: '全部'
  },
  'notif.orders': {
    en: 'Orders',
    hi: 'ऑर्डर',
    es: 'Pedidos',
    fr: 'Commandes',
    de: 'Bestellungen',
    pt: 'Pedidos',
    zh: '订单'
  },
  'notif.offers': {
    en: 'Offers',
    hi: 'ऑफर',
    es: 'Ofertas',
    fr: 'Offres',
    de: 'Angebote',
    pt: 'Ofertas',
    zh: '优惠'
  },
  'notif.account': {
    en: 'Account',
    hi: 'खाता',
    es: 'Cuenta',
    fr: 'Compte',
    de: 'Konto',
    pt: 'Conta',
    zh: '账户'
  },
  'notif.empty': {
    en: 'No new notifications',
    hi: 'कोई नई सूचना नहीं',
    es: 'No hay nuevas notificaciones',
    fr: 'Aucune nouvelle notification',
    de: 'Keine neuen Benachrichtigungen',
    pt: 'Sem novas notificações',
    zh: '没有新通知'
  },

  // Bulk Orders
  'bulk.title': {
    en: 'Bulk & Corporate Orders',
    hi: 'थोक और कॉर्पोरेट ऑर्डर',
    es: 'Pedidos al Por Mayor y Corporativos',
    fr: 'Commandes en Gros et d\'Entreprise',
    de: 'Großhandels- und Firmenbestellungen',
    pt: 'Pedidos em Massa e Corporativos',
    zh: '批量和企业订单'
  },
  'bulk.subtitle': {
    en: 'Special pricing and support for large quantity orders.',
    hi: 'बड़ी मात्रा के ऑर्डर के लिए विशेष मूल्य और समर्थन।',
    es: 'Precios especiales y soporte para pedidos de gran cantidad.',
    fr: 'Tarifs spéciaux et assistance pour les commandes en grande quantité.',
    de: 'Sonderpreise und Support für Großbestellungen.',
    pt: 'Preços especiais e suporte para pedidos de grande quantidade.',
    zh: '为大批量订单提供特别定价和支持。'
  },
  'bulk.companyName': {
    en: 'Company Name',
    hi: 'कंपनी का नाम',
    es: 'Nombre de la Empresa',
    fr: 'Nom de l\'Entreprise',
    de: 'Firmenname',
    pt: 'Nome da Empresa',
    zh: '公司名称'
  },
  'bulk.contactPerson': {
    en: 'Contact Person',
    hi: 'संपर्क व्यक्ति',
    es: 'Persona de Contacto',
    fr: 'Personne de Contact',
    de: 'Kontaktperson',
    pt: 'Pessoa de Contato',
    zh: '联系人'
  },
  'bulk.productName': {
    en: 'Product Name / Link',
    hi: 'उत्पाद नाम / लिंक',
    es: 'Nombre del Producto / Enlace',
    fr: 'Nom du Produit / Lien',
    de: 'Produktname / Link',
    pt: 'Nome do Produto / Link',
    zh: '产品名称/链接'
  },
  'bulk.quantity': {
    en: 'Estimated Quantity',
    hi: 'अनुमानित मात्रा',
    es: 'Cantidad Estimada',
    fr: 'Quantité Estimée',
    de: 'Geschätzte Menge',
    pt: 'Quantidade Estimada',
    zh: '预估数量'
  },
  'bulk.message': {
    en: 'Message (optional)',
    hi: 'संदेश (वैकल्पिक)',
    es: 'Mensaje (opcional)',
    fr: 'Message (facultatif)',
    de: 'Nachricht (optional)',
    pt: 'Mensagem (opcional)',
    zh: '留言（可选）'
  },
  'bulk.submit': {
    en: 'Submit Request',
    hi: 'अनुरोध भेजें',
    es: 'Enviar Solicitud',
    fr: 'Soumettre la Demande',
    de: 'Anfrage Senden',
    pt: 'Enviar Solicitação',
    zh: '提交请求'
  },
  'bulk.responseTime': {
    en: 'Our team will contact you within 24 hours.',
    hi: 'हमारी टीम 24 घंटे के भीतर आपसे संपर्क करेगी।',
    es: 'Nuestro equipo se pondrá en contacto contigo en 24 horas.',
    fr: 'Notre équipe vous contactera dans les 24 heures.',
    de: 'Unser Team wird Sie innerhalb von 24 Stunden kontaktieren.',
    pt: 'Nossa equipe entrará em contato em 24 horas.',
    zh: '我们的团队将在24小时内与您联系。'
  }
};
