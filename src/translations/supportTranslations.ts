// Shipping & Returns, Contact Us, Login/Signup Translations
// Supports 7 languages: English, Hindi, Spanish, French, German, Portuguese, Chinese (Simplified)

type Language = 'en' | 'hi' | 'es' | 'fr' | 'de' | 'pt' | 'zh';

export const supportTranslations: Record<string, Record<Language, string>> = {
  // Shipping & Returns
  'shipping.title': {
    en: 'Shipping & Returns',
    hi: 'शिपिंग और रिटर्न',
    es: 'Envío y Devoluciones',
    fr: 'Expédition et Retours',
    de: 'Versand und Rückgabe',
    pt: 'Envio e Devoluções',
    zh: '配送与退货'
  },
  'shipping.subtitle': {
    en: 'Clear, transparent policies for a smooth shopping experience.',
    hi: 'सुचारू खरीदारी अनुभव के लिए स्पष्ट, पारदर्शी नीतियां।',
    es: 'Políticas claras y transparentes para una experiencia de compra fluida.',
    fr: 'Politiques claires et transparentes pour une expérience d\'achat fluide.',
    de: 'Klare, transparente Richtlinien für ein reibungsloses Einkaufserlebnis.',
    pt: 'Políticas claras e transparentes para uma experiência de compra tranquila.',
    zh: '清晰透明的政策，带来顺畅的购物体验。'
  },
  'shipping.policy': {
    en: 'Shipping Information',
    hi: 'शिपिंग जानकारी',
    es: 'Información de Envío',
    fr: 'Informations d\'Expédition',
    de: 'Versandinformationen',
    pt: 'Informações de Envio',
    zh: '配送信息'
  },
  'shipping.returns': {
    en: 'Returns & Refunds',
    hi: 'रिटर्न और रिफंड',
    es: 'Devoluciones y Reembolsos',
    fr: 'Retours et Remboursements',
    de: 'Rücksendungen und Rückerstattungen',
    pt: 'Devoluções e Reembolsos',
    zh: '退货与退款'
  },
  'shipping.faq': {
    en: 'Frequently Asked Questions',
    hi: 'अक्सर पूछे जाने वाले प्रश्न',
    es: 'Preguntas Frecuentes',
    fr: 'Questions Fréquemment Posées',
    de: 'Häufig Gestellte Fragen',
    pt: 'Perguntas Frequentes',
    zh: '常见问题'
  },

  // Contact Us
  'contact.title': {
    en: 'Contact Us',
    hi: 'हमसे संपर्क करें',
    es: 'Contáctenos',
    fr: 'Contactez-nous',
    de: 'Kontaktieren Sie uns',
    pt: 'Fale Conosco',
    zh: '联系我们'
  },
  'contact.subtitle': {
    en: 'How can we help you?',
    hi: 'हम आपकी कैसे मदद कर सकते हैं?',
    es: '¿Cómo podemos ayudarte?',
    fr: 'Comment pouvons-nous vous aider?',
    de: 'Wie können wir Ihnen helfen?',
    pt: 'Como podemos ajudá-lo?',
    zh: '我们能如何帮助您？'
  },
  'contact.trackOrder': {
    en: 'Track an Order',
    hi: 'ऑर्डर ट्रैक करें',
    es: 'Rastrear un Pedido',
    fr: 'Suivre une Commande',
    de: 'Bestellung Verfolgen',
    pt: 'Rastrear um Pedido',
    zh: '追踪订单'
  },
  'contact.returnItem': {
    en: 'Return an Item',
    hi: 'आइटम वापस करें',
    es: 'Devolver un Artículo',
    fr: 'Retourner un Article',
    de: 'Artikel Zurücksenden',
    pt: 'Devolver um Item',
    zh: '退货'
  },
  'contact.paymentIssue': {
    en: 'Payment Issue',
    hi: 'भुगतान समस्या',
    es: 'Problema de Pago',
    fr: 'Problème de Paiement',
    de: 'Zahlungsproblem',
    pt: 'Problema de Pagamento',
    zh: '支付问题'
  },
  'contact.shippingReturns': {
    en: 'Shipping & Returns',
    hi: 'शिपिंग और रिटर्न',
    es: 'Envío y Devoluciones',
    fr: 'Expédition et Retours',
    de: 'Versand und Rückgabe',
    pt: 'Envio e Devoluções',
    zh: '配送与退货'
  },
  'contact.formTitle': {
    en: 'Send us a message',
    hi: 'हमें संदेश भेजें',
    es: 'Envíanos un mensaje',
    fr: 'Envoyez-nous un message',
    de: 'Senden Sie uns eine Nachricht',
    pt: 'Envie-nos uma mensagem',
    zh: '给我们留言'
  },
  'contact.fullName': {
    en: 'Full Name',
    hi: 'पूरा नाम',
    es: 'Nombre Completo',
    fr: 'Nom Complet',
    de: 'Vollständiger Name',
    pt: 'Nome Completo',
    zh: '全名'
  },
  'contact.email': {
    en: 'Email Address',
    hi: 'ईमेल पता',
    es: 'Correo Electrónico',
    fr: 'Adresse Email',
    de: 'E-Mail-Adresse',
    pt: 'Endereço de Email',
    zh: '电子邮箱'
  },
  'contact.orderId': {
    en: 'Order ID (optional)',
    hi: 'ऑर्डर आईडी (वैकल्पिक)',
    es: 'ID de Pedido (opcional)',
    fr: 'ID de Commande (facultatif)',
    de: 'Bestellnummer (optional)',
    pt: 'ID do Pedido (opcional)',
    zh: '订单号（可选）'
  },
  'contact.issueType': {
    en: 'Issue Type',
    hi: 'समस्या प्रकार',
    es: 'Tipo de Problema',
    fr: 'Type de Problème',
    de: 'Art des Problems',
    pt: 'Tipo de Problema',
    zh: '问题类型'
  },
  'contact.message': {
    en: 'Message',
    hi: 'संदेश',
    es: 'Mensaje',
    fr: 'Message',
    de: 'Nachricht',
    pt: 'Mensagem',
    zh: '留言'
  },
  'contact.submit': {
    en: 'Submit Request',
    hi: 'अनुरोध भेजें',
    es: 'Enviar Solicitud',
    fr: 'Soumettre la Demande',
    de: 'Anfrage Senden',
    pt: 'Enviar Solicitação',
    zh: '提交请求'
  },
  'contact.responseTime': {
    en: 'We usually respond within 24 hours.',
    hi: 'हम आमतौर पर 24 घंटे के भीतर जवाब देते हैं।',
    es: 'Normalmente respondemos en 24 horas.',
    fr: 'Nous répondons généralement sous 24 heures.',
    de: 'Wir antworten normalerweise innerhalb von 24 Stunden.',
    pt: 'Geralmente respondemos em 24 horas.',
    zh: '我们通常在24小时内回复。'
  },
  'contact.supportEmail': {
    en: 'Email',
    hi: 'ईमेल',
    es: 'Email',
    fr: 'Email',
    de: 'E-Mail',
    pt: 'Email',
    zh: '电子邮箱'
  },
  'contact.supportPhone': {
    en: 'Phone',
    hi: 'फ़ोन',
    es: 'Teléfono',
    fr: 'Téléphone',
    de: 'Telefon',
    pt: 'Telefone',
    zh: '电话'
  },
  'contact.supportHours': {
    en: 'Hours',
    hi: 'समय',
    es: 'Horario',
    fr: 'Heures',
    de: 'Öffnungszeiten',
    pt: 'Horário',
    zh: '工作时间'
  },

  // Issue Types
  'issue.orderRelated': {
    en: 'Order Related',
    hi: 'ऑर्डर संबंधित',
    es: 'Relacionado con el Pedido',
    fr: 'Lié à la Commande',
    de: 'Bestellbezogen',
    pt: 'Relacionado ao Pedido',
    zh: '订单相关'
  },
  'issue.payment': {
    en: 'Payment Issue',
    hi: 'भुगतान समस्या',
    es: 'Problema de Pago',
    fr: 'Problème de Paiement',
    de: 'Zahlungsproblem',
    pt: 'Problema de Pagamento',
    zh: '支付问题'
  },
  'issue.returns': {
    en: 'Returns & Refunds',
    hi: 'रिटर्न और रिफंड',
    es: 'Devoluciones y Reembolsos',
    fr: 'Retours et Remboursements',
    de: 'Rücksendungen und Rückerstattungen',
    pt: 'Devoluções e Reembolsos',
    zh: '退货与退款'
  },
  'issue.account': {
    en: 'Account Issue',
    hi: 'खाता समस्या',
    es: 'Problema de Cuenta',
    fr: 'Problème de Compte',
    de: 'Kontoproblem',
    pt: 'Problema de Conta',
    zh: '账户问题'
  },
  'issue.other': {
    en: 'Other',
    hi: 'अन्य',
    es: 'Otro',
    fr: 'Autre',
    de: 'Andere',
    pt: 'Outro',
    zh: '其他'
  },

  // Login
  'login.title': {
    en: 'Login to your account',
    hi: 'अपने खाते में लॉगिन करें',
    es: 'Inicia sesión en tu cuenta',
    fr: 'Connectez-vous à votre compte',
    de: 'Melden Sie sich bei Ihrem Konto an',
    pt: 'Faça login na sua conta',
    zh: '登录您的账户'
  },
  'login.subtitle': {
    en: 'Welcome back. Please enter your details.',
    hi: 'वापसी पर स्वागत है। कृपया अपना विवरण दर्ज करें।',
    es: 'Bienvenido de nuevo. Por favor ingrese sus datos.',
    fr: 'Bon retour. Veuillez entrer vos informations.',
    de: 'Willkommen zurück. Bitte geben Sie Ihre Daten ein.',
    pt: 'Bem-vindo de volta. Por favor, insira seus dados.',
    zh: '欢迎回来。请输入您的详细信息。'
  },
  'login.email': {
    en: 'Email / Phone',
    hi: 'ईमेल / फ़ोन',
    es: 'Email / Teléfono',
    fr: 'Email / Téléphone',
    de: 'E-Mail / Telefon',
    pt: 'Email / Telefone',
    zh: '电子邮箱/手机'
  },
  'login.password': {
    en: 'Password',
    hi: 'पासवर्ड',
    es: 'Contraseña',
    fr: 'Mot de passe',
    de: 'Passwort',
    pt: 'Senha',
    zh: '密码'
  },
  'login.forgotPassword': {
    en: 'Forgot Password?',
    hi: 'पासवर्ड भूल गए?',
    es: '¿Olvidaste tu contraseña?',
    fr: 'Mot de passe oublié?',
    de: 'Passwort vergessen?',
    pt: 'Esqueceu a senha?',
    zh: '忘记密码？'
  },
  'login.button': {
    en: 'Login',
    hi: 'लॉगिन',
    es: 'Iniciar Sesión',
    fr: 'Se Connecter',
    de: 'Anmelden',
    pt: 'Entrar',
    zh: '登录'
  },
  'login.or': {
    en: 'OR',
    hi: 'या',
    es: 'O',
    fr: 'OU',
    de: 'ODER',
    pt: 'OU',
    zh: '或'
  },
  'login.otpLogin': {
    en: 'Login with OTP',
    hi: 'OTP से लॉगिन करें',
    es: 'Iniciar sesión con OTP',
    fr: 'Se connecter avec OTP',
    de: 'Mit OTP anmelden',
    pt: 'Entrar com OTP',
    zh: '使用OTP登录'
  },
  'login.noAccount': {
    en: 'Don\'t have an account?',
    hi: 'खाता नहीं है?',
    es: '¿No tienes una cuenta?',
    fr: 'Vous n\'avez pas de compte?',
    de: 'Haben Sie kein Konto?',
    pt: 'Não tem uma conta?',
    zh: '没有账户？'
  },
  'login.signup': {
    en: 'Sign up',
    hi: 'साइन अप करें',
    es: 'Regístrate',
    fr: 'S\'inscrire',
    de: 'Anmelden',
    pt: 'Cadastre-se',
    zh: '注册'
  },

  // Sign Up
  'signup.title': {
    en: 'Create your account',
    hi: 'अपना खाता बनाएं',
    es: 'Crea tu cuenta',
    fr: 'Créez votre compte',
    de: 'Erstellen Sie Ihr Konto',
    pt: 'Crie sua conta',
    zh: '创建您的账户'
  },
  'signup.fullName': {
    en: 'Full Name',
    hi: 'पूरा नाम',
    es: 'Nombre Completo',
    fr: 'Nom Complet',
    de: 'Vollständiger Name',
    pt: 'Nome Completo',
    zh: '全名'
  },
  'signup.button': {
    en: 'Create Account',
    hi: 'खाता बनाएं',
    es: 'Crear Cuenta',
    fr: 'Créer un Compte',
    de: 'Konto Erstellen',
    pt: 'Criar Conta',
    zh: '创建账户'
  },
  'signup.passwordHelper': {
    en: 'Min 8 characters',
    hi: 'कम से कम 8 अक्षर',
    es: 'Mínimo 8 caracteres',
    fr: 'Min 8 caractères',
    de: 'Min. 8 Zeichen',
    pt: 'Mínimo 8 caracteres',
    zh: '最少8个字符'
  },
  'signup.terms': {
    en: 'By continuing, you agree to our Terms & Privacy Policy.',
    hi: 'जारी रखते हुए, आप हमारी शर्तों और गोपनीयता नीति से सहमत हैं।',
    es: 'Al continuar, aceptas nuestros Términos y Política de Privacidad.',
    fr: 'En continuant, vous acceptez nos Conditions et notre Politique de Confidentialité.',
    de: 'Indem Sie fortfahren, stimmen Sie unseren Bedingungen und Datenschutzrichtlinien zu.',
    pt: 'Ao continuar, você concorda com nossos Termos e Política de Privacidade.',
    zh: '继续即表示您同意我们的条款和隐私政策。'
  },
  'signup.hasAccount': {
    en: 'Already have an account?',
    hi: 'पहले से खाता है?',
    es: '¿Ya tienes una cuenta?',
    fr: 'Vous avez déjà un compte?',
    de: 'Haben Sie bereits ein Konto?',
    pt: 'Já tem uma conta?',
    zh: '已有账户？'
  },
  'signup.login': {
    en: 'Login',
    hi: 'लॉगिन',
    es: 'Iniciar Sesión',
    fr: 'Se Connecter',
    de: 'Anmelden',
    pt: 'Entrar',
    zh: '登录'
  }
};
