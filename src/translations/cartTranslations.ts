// Cart, Checkout, and Order Confirmation Translations
// Supports 7 languages: English, Hindi, Spanish, French, German, Portuguese, Chinese (Simplified)

type Language = 'en' | 'hi' | 'es' | 'fr' | 'de' | 'pt' | 'zh';

export const cartTranslations: Record<string, Record<Language, string>> = {
  // Cart Page
  'cart.title': {
    en: 'Shopping Cart',
    hi: 'शॉपिंग कार्ट',
    es: 'Carrito de Compras',
    fr: 'Panier',
    de: 'Warenkorb',
    pt: 'Carrinho',
    zh: '购物车'
  },
  'cart.items': {
    en: 'items',
    hi: 'आइटम',
    es: 'artículos',
    fr: 'articles',
    de: 'Artikel',
    pt: 'itens',
    zh: '件商品'
  },
  'cart.empty': {
    en: 'Your cart is empty',
    hi: 'आपकी कार्ट खाली है',
    es: 'Tu carrito está vacío',
    fr: 'Votre panier est vide',
    de: 'Ihr Warenkorb ist leer',
    pt: 'Seu carrinho está vazio',
    zh: '您的购物车是空的'
  },
  'cart.continueShopping': {
    en: 'Continue Shopping',
    hi: 'खरीदारी जारी रखें',
    es: 'Continuar Comprando',
    fr: 'Continuer les Achats',
    de: 'Weiter Einkaufen',
    pt: 'Continuar Comprando',
    zh: '继续购物'
  },
  'cart.soldBy': {
    en: 'Sold by',
    hi: 'द्वारा बेचा गया',
    es: 'Vendido por',
    fr: 'Vendu par',
    de: 'Verkauft von',
    pt: 'Vendido por',
    zh: '销售方'
  },
  'cart.saveForLater': {
    en: 'Save for later',
    hi: 'बाद के लिए सहेजें',
    es: 'Guardar para más tarde',
    fr: 'Enregistrer pour plus tard',
    de: 'Für später speichern',
    pt: 'Salvar para depois',
    zh: '稍后保存'
  },
  'cart.remove': {
    en: 'Remove',
    hi: 'हटाएं',
    es: 'Eliminar',
    fr: 'Supprimer',
    de: 'Entfernen',
    pt: 'Remover',
    zh: '移除'
  },
  'cart.qty': {
    en: 'Qty',
    hi: 'मात्रा',
    es: 'Cant',
    fr: 'Qté',
    de: 'Anz',
    pt: 'Qtd',
    zh: '数量'
  },

  // Price Details
  'cart.priceDetails': {
    en: 'Price Details',
    hi: 'मूल्य विवरण',
    es: 'Detalles del Precio',
    fr: 'Détails du Prix',
    de: 'Preisdetails',
    pt: 'Detalhes do Preço',
    zh: '价格详情'
  },
  'cart.subtotal': {
    en: 'Subtotal',
    hi: 'उपयोग',
    es: 'Subtotal',
    fr: 'Sous-total',
    de: 'Zwischensumme',
    pt: 'Subtotal',
    zh: '小计'
  },
  'cart.discount': {
    en: 'Discount',
    hi: 'छूट',
    es: 'Descuento',
    fr: 'Réduction',
    de: 'Rabatt',
    pt: 'Desconto',
    zh: '折扣'
  },
  'cart.delivery': {
    en: 'Delivery',
    hi: 'डिलीवरी',
    es: 'Entrega',
    fr: 'Livraison',
    de: 'Lieferung',
    pt: 'Entrega',
    zh: '配送'
  },
  'cart.free': {
    en: 'Free',
    hi: 'मुफ्त',
    es: 'Gratis',
    fr: 'Gratuit',
    de: 'Kostenlos',
    pt: 'Grátis',
    zh: '免费'
  },
  'cart.taxes': {
    en: 'Taxes',
    hi: 'कर',
    es: 'Impuestos',
    fr: 'Taxes',
    de: 'Steuern',
    pt: 'Impostos',
    zh: '税费'
  },
  'cart.included': {
    en: 'Included',
    hi: 'शामिल',
    es: 'Incluido',
    fr: 'Inclus',
    de: 'Inbegriffen',
    pt: 'Incluído',
    zh: '包含'
  },
  'cart.total': {
    en: 'Total',
    hi: 'कुल',
    es: 'Total',
    fr: 'Total',
    de: 'Gesamt',
    pt: 'Total',
    zh: '总计'
  },
  'cart.proceedToCheckout': {
    en: 'Proceed to Checkout',
    hi: 'चेकआउट के लिए आगे बढ़ें',
    es: 'Proceder al Pago',
    fr: 'Passer à la Caisse',
    de: 'Zur Kasse Gehen',
    pt: 'Prosseguir para Checkout',
    zh: '前往结账'
  },
  'cart.securePayments': {
    en: 'Secure payments',
    hi: 'सुरक्षित भुगतान',
    es: 'Pagos seguros',
    fr: 'Paiements sécurisés',
    de: 'Sichere Zahlungen',
    pt: 'Pagamentos seguros',
    zh: '安全支付'
  },
  'cart.easyReturns': {
    en: 'Easy returns',
    hi: 'आसान रिटर्न',
    es: 'Devoluciones fáciles',
    fr: 'Retours faciles',
    de: 'Einfache Rücksendungen',
    pt: 'Devoluções fáceis',
    zh: '轻松退货'
  },

  // Checkout Page
  'checkout.title': {
    en: 'Checkout',
    hi: 'चेकआउट',
    es: 'Pagar',
    fr: 'Paiement',
    de: 'Kasse',
    pt: 'Finalizar Compra',
    zh: '结账'
  },
  'checkout.step1': {
    en: 'Address',
    hi: 'पता',
    es: 'Dirección',
    fr: 'Adresse',
    de: 'Adresse',
    pt: 'Endereço',
    zh: '地址'
  },
  'checkout.step2': {
    en: 'Payment',
    hi: 'भुगतान',
    es: 'Pago',
    fr: 'Paiement',
    de: 'Zahlung',
    pt: 'Pagamento',
    zh: '支付'
  },
  'checkout.step3': {
    en: 'Review',
    hi: 'समीक्षा',
    es: 'Revisar',
    fr: 'Réviser',
    de: 'Überprüfen',
    pt: 'Revisar',
    zh: '审核'
  },
  'checkout.deliverHere': {
    en: 'Deliver Here',
    hi: 'यहाँ डिलीवर करें',
    es: 'Entregar Aquí',
    fr: 'Livrer Ici',
    de: 'Hier Liefern',
    pt: 'Entregar Aqui',
    zh: '送到这里'
  },
  'checkout.addNewAddress': {
    en: 'Add New Address',
    hi: 'नया पता जोड़ें',
    es: 'Agregar Nueva Dirección',
    fr: 'Ajouter une Nouvelle Adresse',
    de: 'Neue Adresse Hinzufügen',
    pt: 'Adicionar Novo Endereço',
    zh: '添加新地址'
  },
  'checkout.fullName': {
    en: 'Full Name',
    hi: 'पूरा नाम',
    es: 'Nombre Completo',
    fr: 'Nom Complet',
    de: 'Vollständiger Name',
    pt: 'Nome Completo',
    zh: '全名'
  },
  'checkout.phone': {
    en: 'Phone Number',
    hi: 'फ़ोन नंबर',
    es: 'Número de Teléfono',
    fr: 'Numéro de Téléphone',
    de: 'Telefonnummer',
    pt: 'Número de Telefone',
    zh: '电话号码'
  },
  'checkout.pincode': {
    en: 'Pincode',
    hi: 'पिनकोड',
    es: 'Código Postal',
    fr: 'Code Postal',
    de: 'Postleitzahl',
    pt: 'CEP',
    zh: '邮编'
  },
  'checkout.address': {
    en: 'Address',
    hi: 'पता',
    es: 'Dirección',
    fr: 'Adresse',
    de: 'Adresse',
    pt: 'Endereço',
    zh: '地址'
  },
  'checkout.city': {
    en: 'City',
    hi: 'शहर',
    es: 'Ciudad',
    fr: 'Ville',
    de: 'Stadt',
    pt: 'Cidade',
    zh: '城市'
  },
  'checkout.state': {
    en: 'State',
    hi: 'राज्य',
    es: 'Estado',
    fr: 'État',
    de: 'Bundesland',
    pt: 'Estado',
    zh: '州/省'
  },
  'checkout.addressType': {
    en: 'Address Type',
    hi: 'पता प्रकार',
    es: 'Tipo de Dirección',
    fr: 'Type d\'Adresse',
    de: 'Adresstyp',
    pt: 'Tipo de Endereço',
    zh: '地址类型'
  },
  'checkout.home': {
    en: 'Home',
    hi: 'घर',
    es: 'Casa',
    fr: 'Domicile',
    de: 'Zuhause',
    pt: 'Casa',
    zh: '家'
  },
  'checkout.work': {
    en: 'Work',
    hi: 'काम',
    es: 'Trabajo',
    fr: 'Travail',
    de: 'Arbeit',
    pt: 'Trabalho',
    zh: '工作'
  },
  'checkout.saveAddress': {
    en: 'Save Address',
    hi: 'पता सहेजें',
    es: 'Guardar Dirección',
    fr: 'Enregistrer l\'Adresse',
    de: 'Adresse Speichern',
    pt: 'Salvar Endereço',
    zh: '保存地址'
  },
  'checkout.cancel': {
    en: 'Cancel',
    hi: 'रद्द करें',
    es: 'Cancelar',
    fr: 'Annuler',
    de: 'Abbrechen',
    pt: 'Cancelar',
    zh: '取消'
  },
  'checkout.standardDelivery': {
    en: 'Standard Delivery - Free (3-5 days)',
    hi: 'मानक डिलीवरी - मुफ्त (3-5 दिन)',
    es: 'Entrega Estándar - Gratis (3-5 días)',
    fr: 'Livraison Standard - Gratuite (3-5 jours)',
    de: 'Standardlieferung - Kostenlos (3-5 Tage)',
    pt: 'Entrega Padrão - Grátis (3-5 dias)',
    zh: '标准配送 - 免费（3-5天）'
  },
  'checkout.paymentMethod': {
    en: 'Payment Method',
    hi: 'भुगतान विधि',
    es: 'Método de Pago',
    fr: 'Mode de Paiement',
    de: 'Zahlungsmethode',
    pt: 'Método de Pagamento',
    zh: '支付方式'
  },
  'checkout.upi': {
    en: 'UPI',
    hi: 'यूपीआई',
    es: 'UPI',
    fr: 'UPI',
    de: 'UPI',
    pt: 'UPI',
    zh: 'UPI'
  },
  'checkout.card': {
    en: 'Credit / Debit Card',
    hi: 'क्रेडिट / डेबिट कार्ड',
    es: 'Tarjeta de Crédito / Débito',
    fr: 'Carte de Crédit / Débit',
    de: 'Kredit- / Debitkarte',
    pt: 'Cartão de Crédito / Débito',
    zh: '信用卡/借记卡'
  },
  'checkout.netBanking': {
    en: 'Net Banking',
    hi: 'नेट बैंकिंग',
    es: 'Banca en Línea',
    fr: 'Services Bancaires en Ligne',
    de: 'Online-Banking',
    pt: 'Internet Banking',
    zh: '网上银行'
  },
  'checkout.cod': {
    en: 'Cash on Delivery',
    hi: 'कैश ऑन डिलीवरी',
    es: 'Pago Contra Entrega',
    fr: 'Paiement à la Livraison',
    de: 'Nachnahme',
    pt: 'Pagamento na Entrega',
    zh: '货到付款'
  },
  'checkout.upiId': {
    en: 'UPI ID',
    hi: 'यूपीआई आईडी',
    es: 'ID de UPI',
    fr: 'ID UPI',
    de: 'UPI-ID',
    pt: 'ID UPI',
    zh: 'UPI ID'
  },
  'checkout.verifyAndPay': {
    en: 'Verify & Pay',
    hi: 'सत्यापित करें और भुगतान करें',
    es: 'Verificar y Pagar',
    fr: 'Vérifier et Payer',
    de: 'Verifizieren und Bezahlen',
    pt: 'Verificar e Pagar',
    zh: '验证并支付'
  },
  'checkout.cardNumber': {
    en: 'Card Number',
    hi: 'कार्ड नंबर',
    es: 'Número de Tarjeta',
    fr: 'Numéro de Carte',
    de: 'Kartennummer',
    pt: 'Número do Cartão',
    zh: '卡号'
  },
  'checkout.expiry': {
    en: 'Expiry (MM/YY)',
    hi: 'समाप्ति (MM/YY)',
    es: 'Vencimiento (MM/AA)',
    fr: 'Expiration (MM/AA)',
    de: 'Ablauf (MM/JJ)',
    pt: 'Validade (MM/AA)',
    zh: '有效期（MM/YY）'
  },
  'checkout.cvv': {
    en: 'CVV',
    hi: 'सीवीवी',
    es: 'CVV',
    fr: 'CVV',
    de: 'CVV',
    pt: 'CVV',
    zh: 'CVV'
  },
  'checkout.pciCompliant': {
    en: 'PCI compliant',
    hi: 'PCI अनुपालन',
    es: 'Cumple con PCI',
    fr: 'Conforme PCI',
    de: 'PCI-konform',
    pt: 'Compatível com PCI',
    zh: 'PCI合规'
  },
  'checkout.noCardStored': {
    en: 'No card data stored',
    hi: 'कोई कार्ड डेटा संग्रहीत नहीं',
    es: 'No se almacenan datos de tarjeta',
    fr: 'Aucune donnée de carte stockée',
    de: 'Keine Kartendaten gespeichert',
    pt: 'Nenhum dado de cartão armazenado',
    zh: '不存储卡数据'
  },
  'checkout.orderSummary': {
    en: 'Order Summary',
    hi: 'ऑर्डर सारांश',
    es: 'Resumen del Pedido',
    fr: 'Résumé de la Commande',
    de: 'Bestellübersicht',
    pt: 'Resumo do Pedido',
    zh: '订单摘要'
  },
  'checkout.deliveryAddress': {
    en: 'Delivery Address',
    hi: 'डिलीवरी पता',
    es: 'Dirección de Entrega',
    fr: 'Adresse de Livraison',
    de: 'Lieferadresse',
    pt: 'Endereço de Entrega',
    zh: '送货地址'
  },
  'checkout.edit': {
    en: 'Edit',
    hi: 'संपादित करें',
    es: 'Editar',
    fr: 'Modifier',
    de: 'Bearbeiten',
    pt: 'Editar',
    zh: '编辑'
  },
  'checkout.placeOrder': {
    en: 'Place Order',
    hi: 'ऑर्डर दें',
    es: 'Realizar Pedido',
    fr: 'Passer la Commande',
    de: 'Bestellung Aufgeben',
    pt: 'Fazer Pedido',
    zh: '下订单'
  },

  // Order Confirmation
  'order.confirmed': {
    en: 'Order Confirmed!',
    hi: 'ऑर्डर कन्फर्म!',
    es: '¡Pedido Confirmado!',
    fr: 'Commande Confirmée!',
    de: 'Bestellung Bestätigt!',
    pt: 'Pedido Confirmado!',
    zh: '订单已确认！'
  },
  'order.thankYou': {
    en: 'Thank you for your purchase',
    hi: 'आपकी खरीदारी के लिए धन्यवाद',
    es: 'Gracias por tu compra',
    fr: 'Merci pour votre achat',
    de: 'Vielen Dank für Ihren Einkauf',
    pt: 'Obrigado pela sua compra',
    zh: '感谢您的购买'
  },
  'order.orderId': {
    en: 'Order ID',
    hi: 'ऑर्डर आईडी',
    es: 'ID de Pedido',
    fr: 'ID de Commande',
    de: 'Bestellnummer',
    pt: 'ID do Pedido',
    zh: '订单号'
  },
  'order.details': {
    en: 'Order Details',
    hi: 'ऑर्डर विवरण',
    es: 'Detalles del Pedido',
    fr: 'Détails de la Commande',
    de: 'Bestelldetails',
    pt: 'Detalhes do Pedido',
    zh: '订单详情'
  },
  'order.deliveryInfo': {
    en: 'Delivery Information',
    hi: 'डिलीवरी जानकारी',
    es: 'Información de Entrega',
    fr: 'Informations de Livraison',
    de: 'Lieferinformationen',
    pt: 'Informações de Entrega',
    zh: '配送信息'
  },
  'order.expectedDelivery': {
    en: 'Expected Delivery',
    hi: 'अपेक्षित डिलीवरी',
    es: 'Entrega Esperada',
    fr: 'Livraison Prévue',
    de: 'Voraussichtliche Lieferung',
    pt: 'Entrega Esperada',
    zh: '预计送达'
  },
  'order.deliveredTo': {
    en: 'Delivered to',
    hi: 'को डिलीवर किया गया',
    es: 'Entregado a',
    fr: 'Livré à',
    de: 'Geliefert an',
    pt: 'Entregue para',
    zh: '送达至'
  },
  'order.paymentSummary': {
    en: 'Payment Summary',
    hi: 'भुगतान सारांश',
    es: 'Resumen de Pago',
    fr: 'Résumé du Paiement',
    de: 'Zahlungsübersicht',
    pt: 'Resumo do Pagamento',
    zh: '支付摘要'
  },
  'order.amountPaid': {
    en: 'Amount Paid',
    hi: 'भुगतान की गई राशि',
    es: 'Monto Pagado',
    fr: 'Montant Payé',
    de: 'Bezahlter Betrag',
    pt: 'Valor Pago',
    zh: '支付金额'
  },
  'order.trackOrder': {
    en: 'Track Order',
    hi: 'ऑर्डर ट्रैक करें',
    es: 'Rastrear Pedido',
    fr: 'Suivre la Commande',
    de: 'Bestellung Verfolgen',
    pt: 'Rastrear Pedido',
    zh: '跟踪订单'
  },
  'order.emailConfirmation': {
    en: 'A confirmation has been sent to your email & phone',
    hi: 'एक पुष्टि आपके ईमेल और फोन पर भेजी गई है',
    es: 'Se ha enviado una confirmación a tu correo y teléfono',
    fr: 'Une confirmation a été envoyée à votre email et téléphone',
    de: 'Eine Bestätigung wurde an Ihre E-Mail und Telefon gesendet',
    pt: 'Uma confirmação foi enviada para seu email e telefone',
    zh: '确认信息已发送至您的电子邮件和手机'
  }
};
