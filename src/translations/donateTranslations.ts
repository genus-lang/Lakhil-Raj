// Comprehensive Donation Page Translations
// Supports 7 languages: English, Hindi, Spanish, French, German, Portuguese, Chinese (Simplified)

type Language = 'en' | 'hi' | 'es' | 'fr' | 'de' | 'pt' | 'zh';

export const donateTranslations: Record<string, Record<Language, string>> = {
  // Page Intro
  'donate.intro.heading': {
    en: 'Support Lakhil Raj Welfare Foundation',
    hi: 'लखिल राज वेलफेयर फाउंडेशन का समर्थन करें',
    es: 'Apoya a Lakhil Raj Welfare Foundation',
    fr: 'Soutenez Lakhil Raj Welfare Foundation',
    de: 'Unterstützen Sie Lakhil Raj Welfare Foundation',
    pt: 'Apoie a Lakhil Raj Welfare Foundation',
    zh: '支持Lakhil Raj Welfare Foundation'
  },
  'donate.intro.subtext': {
    en: 'Your contribution helps us educate, guide, and uplift communities at the grassroots.',
    hi: 'आपका योगदान हमें जमीनी स्तर पर समुदायों को शिक्षित करने, मार्गदर्शन करने और उत्थान करने में मदद करता है।',
    es: 'Tu contribución nos ayuda a educar, guiar y elevar comunidades en la base.',
    fr: 'Votre contribution nous aide à éduquer, guider et élever les communautés au niveau local.',
    de: 'Ihr Beitrag hilft uns, Gemeinschaften an der Basis zu bilden, zu führen und zu fördern.',
    pt: 'Sua contribuição nos ajuda a educar, orientar e elevar comunidades na base.',
    zh: '您的贡献帮助我们在基层教育、指导和提升社区。'
  },

  // Why Donate Section
  'donate.why.title1': {
    en: 'Education First',
    hi: 'शिक्षा सर्वप्रथम',
    es: 'Educación Primero',
    fr: 'Éducation d\'Abord',
    de: 'Bildung Zuerst',
    pt: 'Educação em Primeiro',
    zh: '教育优先'
  },
  'donate.why.desc1': {
    en: 'Your donation supports learning opportunities for underserved children.',
    hi: 'आपका दान वंचित बच्चों के लिए सीखने के अवसरों का समर्थन करता है।',
    es: 'Tu donación apoya oportunidades de aprendizaje para niños desatendidos.',
    fr: 'Votre don soutient les opportunités d\'apprentissage pour les enfants défavorisés.',
    de: 'Ihre Spende unterstützt Lernmöglichkeiten für benachteiligte Kinder.',
    pt: 'Sua doação apoia oportunidades de aprendizado para crianças carentes.',
    zh: '您的捐赠支持服务不足儿童的学习机会。'
  },
  'donate.why.title2': {
    en: 'Community Impact',
    hi: 'समुदाय प्रभाव',
    es: 'Impacto Comunitario',
    fr: 'Impact Communautaire',
    de: 'Gemeinschaftswirkung',
    pt: 'Impacto Comunitário',
    zh: '社区影响'
  },
  'donate.why.desc2': {
    en: 'Funds directly help local programs and awareness initiatives.',
    hi: 'फंड सीधे स्थानीय कार्यक्रमों और जागरूकता पहलों में मदद करते हैं।',
    es: 'Los fondos ayudan directamente a programas locales e iniciativas de concienciación.',
    fr: 'Les fonds aident directement les programmes locaux et les initiatives de sensibilisation.',
    de: 'Mittel helfen direkt lokalen Programmen und Sensibilisierungsinitiativen.',
    pt: 'Os fundos ajudam diretamente programas locais e iniciativas de conscientização.',
    zh: '资金直接帮助当地项目和意识倡议。'
  },
  'donate.why.title3': {
    en: 'Long-Term Change',
    hi: 'दीर्घकालिक परिवर्तन',
    es: 'Cambio a Largo Plazo',
    fr: 'Changement à Long Terme',
    de: 'Langfristige Veränderung',
    pt: 'Mudança de Longo Prazo',
    zh: '长期变革'
  },
  'donate.why.desc3': {
    en: 'We focus on sustainable impact, not one-time solutions.',
    hi: 'हम स्थायी प्रभाव पर ध्यान केंद्रित करते हैं, एक बार के समाधान पर नहीं।',
    es: 'Nos enfocamos en impacto sostenible, no en soluciones únicas.',
    fr: 'Nous nous concentrons sur un impact durable, pas sur des solutions ponctuelles.',
    de: 'Wir konzentrieren uns auf nachhaltige Wirkung, nicht auf einmalige Lösungen.',
    pt: 'Focamos em impacto sustentável, não em soluções únicas.',
    zh: '我们专注于可持续影响，而非一次性解决方案。'
  },

  // Donation Card
  'donate.card.monthly': {
    en: 'Donate Monthly',
    hi: 'मासिक दान करें',
    es: 'Donar Mensualmente',
    fr: 'Faire un Don Mensuel',
    de: 'Monatlich Spenden',
    pt: 'Doar Mensalmente',
    zh: '每月捐赠'
  },
  'donate.card.onetime': {
    en: 'Donate One-Time',
    hi: 'एक बार दान करें',
    es: 'Donar Una Vez',
    fr: 'Faire un Don Unique',
    de: 'Einmalig Spenden',
    pt: 'Doar Uma Vez',
    zh: '一次性捐赠'
  },
  'donate.card.otherAmount': {
    en: 'Other Amount',
    hi: 'अन्य राशि',
    es: 'Otra Cantidad',
    fr: 'Autre Montant',
    de: 'Anderer Betrag',
    pt: 'Outro Valor',
    zh: '其他金额'
  },
  'donate.card.fullName': {
    en: 'Full Name',
    hi: 'पूरा नाम',
    es: 'Nombre Completo',
    fr: 'Nom Complet',
    de: 'Vollständiger Name',
    pt: 'Nome Completo',
    zh: '全名'
  },
  'donate.card.dob': {
    en: 'Date of Birth',
    hi: 'जन्म तिथि',
    es: 'Fecha de Nacimiento',
    fr: 'Date de Naissance',
    de: 'Geburtsdatum',
    pt: 'Data de Nascimento',
    zh: '出生日期'
  },
  'donate.card.email': {
    en: 'Email',
    hi: 'ईमेल',
    es: 'Correo Electrónico',
    fr: 'Email',
    de: 'E-Mail',
    pt: 'E-mail',
    zh: '电子邮件'
  },
  'donate.card.mobile': {
    en: 'Mobile Number',
    hi: 'मोबाइल नंबर',
    es: 'Número de Móvil',
    fr: 'Numéro de Mobile',
    de: 'Mobilnummer',
    pt: 'Número de Celular',
    zh: '手机号码'
  },
  'donate.card.address': {
    en: 'Address',
    hi: 'पता',
    es: 'Dirección',
    fr: 'Adresse',
    de: 'Adresse',
    pt: 'Endereço',
    zh: '地址'
  },
  'donate.card.pincode': {
    en: 'Pincode',
    hi: 'पिनकोड',
    es: 'Código Postal',
    fr: 'Code Postal',
    de: 'Postleitzahl',
    pt: 'CEP',
    zh: '邮政编码'
  },
  'donate.card.city': {
    en: 'City',
    hi: 'शहर',
    es: 'Ciudad',
    fr: 'Ville',
    de: 'Stadt',
    pt: 'Cidade',
    zh: '城市'
  },
  'donate.card.state': {
    en: 'State',
    hi: 'राज्य',
    es: 'Estado',
    fr: 'État',
    de: 'Bundesland',
    pt: 'Estado',
    zh: '州/省'
  },
  'donate.card.country': {
    en: 'Country',
    hi: 'देश',
    es: 'País',
    fr: 'Pays',
    de: 'Land',
    pt: 'País',
    zh: '国家'
  },
  'donate.card.pan': {
    en: 'PAN Number',
    hi: 'पैन नंबर',
    es: 'Número PAN',
    fr: 'Numéro PAN',
    de: 'PAN-Nummer',
    pt: 'Número PAN',
    zh: 'PAN号码'
  },
  'donate.card.complianceText': {
    en: 'Information is being collected to comply with government regulations and will be kept confidential.',
    hi: 'सरकारी नियमों का पालन करने के लिए जानकारी एकत्र की जा रही है और इसे गोपनीय रखा जाएगा।',
    es: 'La información se recopila para cumplir con las regulaciones gubernamentales y se mantendrá confidencial.',
    fr: 'Les informations sont collectées pour se conformer aux réglementations gouvernementales et resteront confidentielles.',
    de: 'Informationen werden gesammelt, um staatliche Vorschriften einzuhalten und werden vertraulich behandelt.',
    pt: 'As informações estão sendo coletadas para cumprir regulamentos governamentais e serão mantidas confidenciais.',
    zh: '收集信息是为了遵守政府法规，并将保密。'
  },
  'donate.card.declaration': {
    en: 'I hereby declare that I am a citizen of India and this donation is made from my own funds.',
    hi: 'मैं एतद्द्वारा घोषणा करता हूँ कि मैं भारत का नागरिक हूँ और यह दान मेरे अपने फंड से किया गया है।',
    es: 'Por la presente declaro que soy ciudadano de India y esta donación se realiza con mis propios fondos.',
    fr: 'Je déclare par la présente que je suis citoyen de l\'Inde et que ce don provient de mes propres fonds.',
    de: 'Hiermit erkläre ich, dass ich Staatsbürger Indiens bin und diese Spende aus meinen eigenen Mitteln erfolgt.',
    pt: 'Declaro que sou cidadão da Índia e esta doação é feita com meus próprios fundos.',
    zh: '我特此声明我是印度公民，此捐赠来自我自己的资金。'
  },
  'donate.card.securePayments': {
    en: 'Secure payments supported through trusted gateways.',
    hi: 'विश्वसनीय गेटवे के माध्यम से सुरक्षित भुगतान समर्थित।',
    es: 'Pagos seguros respaldados por pasarelas confiables.',
    fr: 'Paiements sécurisés pris en charge par des passerelles de confiance.',
    de: 'Sichere Zahlungen über vertrauenswürdige Gateways unterstützt.',
    pt: 'Pagamentos seguros suportados por gateways confiáveis.',
    zh: '通过可信网关支持安全支付。'
  },
  'donate.card.continue': {
    en: 'Continue to Payment',
    hi: 'भुगतान के लिए जारी रखें',
    es: 'Continuar al Pago',
    fr: 'Continuer vers le Paiement',
    de: 'Weiter zur Zahlung',
    pt: 'Continuar para Pagamento',
    zh: '继续付款'
  },

  // Goodies Section
  'donate.goodies.heading': {
    en: 'A Small Thank You From Us 💛',
    hi: 'हमारी ओर से एक छोटा सा धन्यवाद 💛',
    es: 'Un Pequeño Agradecimiento de Nuestra Parte 💛',
    fr: 'Un Petit Merci de Notre Part 💛',
    de: 'Ein Kleines Dankeschön von Uns 💛',
    pt: 'Um Pequeno Agradecimento Nosso 💛',
    zh: '我们的小小感谢 💛'
  },
  'donate.goodies.text': {
    en: 'As a token of appreciation, donors contributing ₹500 or more receive special goodies from Lakhil Raj Welfare Foundation.',
    hi: 'प्रशंसा के रूप में, ₹500 या अधिक का योगदान देने वाले दाताओं को लखिल राज वेलफेयर फाउंडेशन से विशेष उपहार मिलते हैं।',
    es: 'Como muestra de agradecimiento, los donantes que contribuyan con ₹500 o más reciben obsequios especiales de Lakhil Raj Welfare Foundation.',
    fr: 'En signe d\'appréciation, les donateurs contribuant ₹500 ou plus reçoivent des cadeaux spéciaux de Lakhil Raj Welfare Foundation.',
    de: 'Als Zeichen der Wertschätzung erhalten Spender, die ₹500 oder mehr beitragen, besondere Geschenke von Lakhil Raj Welfare Foundation.',
    pt: 'Como sinal de apreço, doadores que contribuírem com ₹500 ou mais recebem brindes especiais da Lakhil Raj Welfare Foundation.',
    zh: '作为感谢的象征，捐赠₹500或以上的捐赠者将收到Lakhil Raj Welfare Foundation的特别礼品。'
  },
  'donate.goodies.certificate': {
    en: 'Certificate of Appreciation',
    hi: 'प्रशंसा प्रमाणपत्र',
    es: 'Certificado de Apreciación',
    fr: 'Certificat d\'Appréciation',
    de: 'Anerkennungszertifikat',
    pt: 'Certificado de Apreciação',
    zh: '感谢证书'
  },
  'donate.goodies.merchandise': {
    en: 'Foundation Merchandise',
    hi: 'फाउंडेशन मर्चेंडाइज',
    es: 'Mercancía de la Fundación',
    fr: 'Marchandise de la Fondation',
    de: 'Stiftungswaren',
    pt: 'Mercadorias da Fundação',
    zh: '基金会商品'
  },
  'donate.goodies.kit': {
    en: 'Thank-You Kit',
    hi: 'धन्यवाद किट',
    es: 'Kit de Agradecimiento',
    fr: 'Kit de Remerciement',
    de: 'Dankeschön-Kit',
    pt: 'Kit de Agradecimento',
    zh: '感谢套装'
  },
  'donate.goodies.note': {
    en: 'Goodies may vary based on availability and location.',
    hi: 'उपलब्धता और स्थान के आधार पर उपहार भिन्न हो सकते हैं।',
    es: 'Los obsequios pueden variar según disponibilidad y ubicación.',
    fr: 'Les cadeaux peuvent varier selon la disponibilité et l\'emplacement.',
    de: 'Geschenke können je nach Verfügbarkeit und Standort variieren.',
    pt: 'Os brindes podem variar de acordo com disponibilidade e localização.',
    zh: '礼品可能因可用性和地点而异。'
  },

  // Usage Section
  'donate.usage.heading': {
    en: 'How Your Donation is Used',
    hi: 'आपका दान कैसे उपयोग किया जाता है',
    es: 'Cómo se Utiliza Tu Donación',
    fr: 'Comment Votre Don est Utilisé',
    de: 'Wie Ihre Spende Verwendet Wird',
    pt: 'Como Sua Doação é Usada',
    zh: '您的捐赠如何使用'
  },
  'donate.usage.education': {
    en: 'Education Programs',
    hi: 'शिक्षा कार्यक्रम',
    es: 'Programas Educativos',
    fr: 'Programmes Éducatifs',
    de: 'Bildungsprogramme',
    pt: 'Programas Educacionais',
    zh: '教育项目'
  },
  'donate.usage.awareness': {
    en: 'Awareness Workshops',
    hi: 'जागरूकता कार्यशालाएँ',
    es: 'Talleres de Concienciación',
    fr: 'Ateliers de Sensibilisation',
    de: 'Sensibilisierungs-Workshops',
    pt: 'Workshops de Conscientização',
    zh: '意识研讨会'
  },
  'donate.usage.outreach': {
    en: 'Community Outreach',
    hi: 'सामुदायिक आउटरीच',
    es: 'Alcance Comunitario',
    fr: 'Sensibilisation Communautaire',
    de: 'Gemeinschaftsarbeit',
    pt: 'Alcance Comunitário',
    zh: '社区外展'
  },
  'donate.usage.operational': {
    en: 'Operational Essentials',
    hi: 'परिचालन आवश्यकताएँ',
    es: 'Esenciales Operacionales',
    fr: 'Essentiels Opérationnels',
    de: 'Operative Grundlagen',
    pt: 'Essenciais Operacionais',
    zh: '运营必需品'
  },
  'donate.usage.note': {
    en: 'We believe in transparent and responsible use of funds.',
    hi: 'हम फंड के पारदर्शी और जिम्मेदार उपयोग में विश्वास करते हैं।',
    es: 'Creemos en el uso transparente y responsable de los fondos.',
    fr: 'Nous croyons en une utilisation transparente et responsable des fonds.',
    de: 'Wir glauben an eine transparente und verantwortungsvolle Verwendung von Mitteln.',
    pt: 'Acreditamos no uso transparente e responsável de fundos.',
    zh: '我们相信资金的透明和负责任使用。'
  },

  // Trust Strip
  'donate.trust.registered': {
    en: 'Registered NGO',
    hi: 'पंजीकृत एनजीओ',
    es: 'ONG Registrada',
    fr: 'ONG Enregistrée',
    de: 'Registrierte NGO',
    pt: 'ONG Registrada',
    zh: '注册NGO'
  },
  'donate.trust.secure': {
    en: 'Secure Payments',
    hi: 'सुरक्षित भुगतान',
    es: 'Pagos Seguros',
    fr: 'Paiements Sécurisés',
    de: 'Sichere Zahlungen',
    pt: 'Pagamentos Seguros',
    zh: '安全支付'
  },
  'donate.trust.receipt': {
    en: 'Donation Receipt Provided',
    hi: 'दान रसीद प्रदान की गई',
    es: 'Recibo de Donación Proporcionado',
    fr: 'Reçu de Don Fourni',
    de: 'Spendenbescheinigung Bereitgestellt',
    pt: 'Recibo de Doação Fornecido',
    zh: '提供捐赠收据'
  },
  'donate.trust.transparent': {
    en: 'Transparent Operations',
    hi: 'पारदर्शी संचालन',
    es: 'Operaciones Transparentes',
    fr: 'Opérations Transparentes',
    de: 'Transparente Operationen',
    pt: 'Operações Transparentes',
    zh: '透明运营'
  },

  // Validation Messages
  'donate.validation.required': {
    en: 'This field is required',
    hi: 'यह फ़ील्ड आवश्यक है',
    es: 'Este campo es obligatorio',
    fr: 'Ce champ est requis',
    de: 'Dieses Feld ist erforderlich',
    pt: 'Este campo é obrigatório',
    zh: '此字段为必填项'
  },
  'donate.validation.email': {
    en: 'Please enter a valid email',
    hi: 'कृपया एक मान्य ईमेल दर्ज करें',
    es: 'Por favor ingrese un correo válido',
    fr: 'Veuillez entrer un email valide',
    de: 'Bitte geben Sie eine gültige E-Mail ein',
    pt: 'Por favor, insira um e-mail válido',
    zh: '请输入有效的电子邮件'
  },
  'donate.validation.mobile': {
    en: 'Please enter a valid 10-digit mobile number',
    hi: 'कृपया एक मान्य 10 अंकों का मोबाइल नंबर दर्ज करें',
    es: 'Por favor ingrese un número móvil válido de 10 dígitos',
    fr: 'Veuillez entrer un numéro de mobile valide à 10 chiffres',
    de: 'Bitte geben Sie eine gültige 10-stellige Mobilnummer ein',
    pt: 'Por favor, insira um número de celular válido de 10 dígitos',
    zh: '请输入有效的10位手机号码'
  },
  'donate.validation.pincode': {
    en: 'Please enter a valid 6-digit pincode',
    hi: 'कृपया एक मान्य 6 अंकों का पिनकोड दर्ज करें',
    es: 'Por favor ingrese un código postal válido de 6 dígitos',
    fr: 'Veuillez entrer un code postal valide à 6 chiffres',
    de: 'Bitte geben Sie eine gültige 6-stellige Postleitzahl ein',
    pt: 'Por favor, insira um CEP válido de 6 dígitos',
    zh: '请输入有效的6位邮政编码'
  },
  'donate.validation.pan': {
    en: 'Please enter a valid PAN number (e.g., ABCDE1234F)',
    hi: 'कृपया एक मान्य पैन नंबर दर्ज करें (जैसे, ABCDE1234F)',
    es: 'Por favor ingrese un número PAN válido (ej., ABCDE1234F)',
    fr: 'Veuillez entrer un numéro PAN valide (par ex., ABCDE1234F)',
    de: 'Bitte geben Sie eine gültige PAN-Nummer ein (z.B. ABCDE1234F)',
    pt: 'Por favor, insira um número PAN válido (ex., ABCDE1234F)',
    zh: '请输入有效的PAN号码（例如，ABCDE1234F）'
  },
  'donate.validation.amount': {
    en: 'Please enter an amount of at least ₹100',
    hi: 'कृपया कम से कम ₹100 की राशि दर्ज करें',
    es: 'Por favor ingrese una cantidad de al menos ₹100',
    fr: 'Veuillez entrer un montant d\'au moins ₹100',
    de: 'Bitte geben Sie einen Betrag von mindestens ₹100 ein',
    pt: 'Por favor, insira um valor de pelo menos ₹100',
    zh: '请输入至少₹100的金额'
  }
};
