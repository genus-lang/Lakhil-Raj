// Comprehensive Navigation Translations for Sambhav NGO
// Supports 7 languages: English, Hindi, Spanish, French, German, Portuguese, Chinese (Simplified)

type Language = 'en' | 'hi' | 'es' | 'fr' | 'de' | 'pt' | 'zh';

export const navTranslations: Record<string, Record<Language, string>> = {
  // Top-level navigation
  'nav.home': { 
    en: 'Home', 
    hi: 'होम', 
    es: 'Inicio', 
    fr: 'Accueil', 
    de: 'Startseite', 
    pt: 'Início', 
    zh: '首页' 
  },
  'nav.aboutUs': { 
    en: 'About Us', 
    hi: 'हमारे बारे में', 
    es: 'Sobre Nosotros', 
    fr: 'À Propos', 
    de: 'Über Uns', 
    pt: 'Sobre Nós', 
    zh: '关于我们' 
  },
  'nav.programs': { 
    en: 'Programs', 
    hi: 'कार्यक्रम', 
    es: 'Programas', 
    fr: 'Programmes', 
    de: 'Programme', 
    pt: 'Programas', 
    zh: '项目' 
  },
  'nav.impact': { 
    en: 'Impact', 
    hi: 'प्रभाव', 
    es: 'Impacto', 
    fr: 'Impact', 
    de: 'Wirkung', 
    pt: 'Impacto', 
    zh: '影响' 
  },
  'nav.getInvolved': { 
    en: 'Get Involved', 
    hi: 'शामिल हों', 
    es: 'Participa', 
    fr: 'Participez', 
    de: 'Mitmachen', 
    pt: 'Participe', 
    zh: '参与我们' 
  },
  'nav.resources': { 
    en: 'Resources', 
    hi: 'संसाधन', 
    es: 'Recursos', 
    fr: 'Ressources', 
    de: 'Ressourcen', 
    pt: 'Recursos', 
    zh: '资源' 
  },
  'nav.contact': { 
    en: 'Contact', 
    hi: 'संपर्क', 
    es: 'Contacto', 
    fr: 'Contact', 
    de: 'Kontakt', 
    pt: 'Contato', 
    zh: '联系' 
  },
  'nav.login': { 
    en: 'Login', 
    hi: 'लॉगिन', 
    es: 'Iniciar Sesión', 
    fr: 'Connexion', 
    de: 'Anmelden', 
    pt: 'Entrar', 
    zh: '登录' 
  },
  'nav.donate': { 
    en: 'Donate', 
    hi: 'दान करें', 
    es: 'Donar', 
    fr: 'Faire un Don', 
    de: 'Spenden', 
    pt: 'Doar', 
    zh: '捐赠' 
  },

  // ABOUT US Dropdown
  'nav.about.aboutSambhav': { 
    en: 'About Lakhil Raj Welfare Foundation', 
    hi: 'लखिल राज वेलफेयर फाउंडेशन के बारे में', 
    es: 'Sobre Lakhil Raj Welfare Foundation', 
    fr: 'À Propos de Lakhil Raj Welfare Foundation', 
    de: 'Über Lakhil Raj Welfare Foundation', 
    pt: 'Sobre Lakhil Raj Welfare Foundation', 
    zh: '关于Lakhil Raj Welfare Foundation' 
  },
  'nav.about.visionMission': { 
    en: 'Vision & Mission', 
    hi: 'विजन और मिशन', 
    es: 'Visión y Misión', 
    fr: 'Vision et Mission', 
    de: 'Vision & Mission', 
    pt: 'Visão e Missão', 
    zh: '愿景与使命' 
  },
  'nav.about.foundersMessage': { 
    en: "Founder's Message", 
    hi: 'संस्थापक का संदेश', 
    es: 'Mensaje del Fundador', 
    fr: 'Message du Fondateur', 
    de: 'Botschaft des Gründers', 
    pt: 'Mensagem do Fundador', 
    zh: '创始人致辞' 
  },
  'nav.about.ourStory': { 
    en: 'Our Story', 
    hi: 'हमारी कहानी', 
    es: 'Nuestra Historia', 
    fr: 'Notre Histoire', 
    de: 'Unsere Geschichte', 
    pt: 'Nossa História', 
    zh: '我们的故事' 
  },
  'nav.about.ourValues': { 
    en: 'Our Values', 
    hi: 'हमारे मूल्य', 
    es: 'Nuestros Valores', 
    fr: 'Nos Valeurs', 
    de: 'Unsere Werte', 
    pt: 'Nossos Valores', 
    zh: '我们的价值观' 
  },
  'nav.about.teamSambhav': { 
    en: 'Our Team', 
    hi: 'हमारी टीम', 
    es: 'Nuestro Equipo', 
    fr: 'Notre Équipe', 
    de: 'Unser Team', 
    pt: 'Nossa Equipe', 
    zh: '我们的团队' 
  },
  'nav.about.advisoryBoard': { 
    en: 'Advisory Board', 
    hi: 'सलाहकार बोर्ड', 
    es: 'Consejo Asesor', 
    fr: 'Conseil Consultatif', 
    de: 'Beirat', 
    pt: 'Conselho Consultivo', 
    zh: '咨询委员会' 
  },
  'nav.about.partners': { 
    en: 'Partners & Supporters', 
    hi: 'साझेदार और समर्थक', 
    es: 'Socios y Patrocinadores', 
    fr: 'Partenaires et Supporters', 
    de: 'Partner & Unterstützer', 
    pt: 'Parceiros e Apoiadores', 
    zh: '合作伙伴与支持者' 
  },
  'nav.about.registration': { 
    en: 'NGO Registration Details', 
    hi: 'एनजीओ पंजीकरण विवरण', 
    es: 'Detalles de Registro de ONG', 
    fr: "Détails d'Enregistrement ONG", 
    de: 'NGO-Registrierungsdetails', 
    pt: 'Detalhes de Registro da ONG', 
    zh: '非政府组织注册详情' 
  },

  // PROGRAMS Dropdown
  'nav.programs.overview': { 
    en: 'Programs Overview', 
    hi: 'कार्यक्रम अवलोकन', 
    es: 'Resumen de Programas', 
    fr: 'Aperçu des Programmes', 
    de: 'Programmübersicht', 
    pt: 'Visão Geral dos Programas', 
    zh: '项目概述' 
  },
  'nav.programs.education': { 
    en: 'Education & Awareness', 
    hi: 'शिक्षा और जागरूकता', 
    es: 'Educación y Conciencia', 
    fr: 'Éducation et Sensibilisation', 
    de: 'Bildung & Bewusstsein', 
    pt: 'Educação e Conscientização', 
    zh: '教育与意识' 
  },
  'nav.programs.digitalEducation': { 
    en: 'Digital Education', 
    hi: 'डिजिटल शिक्षा', 
    es: 'Educación Digital', 
    fr: 'Éducation Numérique', 
    de: 'Digitale Bildung', 
    pt: 'Educação Digital', 
    zh: '数字教育' 
  },
  'nav.programs.careerGuidance': { 
    en: 'Career Guidance', 
    hi: 'करियर मार्गदर्शन', 
    es: 'Orientación Profesional', 
    fr: 'Orientation Professionnelle', 
    de: 'Karriereberatung', 
    pt: 'Orientação de Carreira', 
    zh: '职业指导' 
  },
  'nav.programs.cyberSafety': { 
    en: 'Cyber Safety Awareness', 
    hi: 'साइबर सुरक्षा जागरूकता', 
    es: 'Conciencia de Seguridad Cibernética', 
    fr: 'Sensibilisation à la Sécurité Cyber', 
    de: 'Cybersicherheitsbewusstsein', 
    pt: 'Conscientização sobre Segurança Cibernética', 
    zh: '网络安全意识' 
  },
  'nav.programs.environmental': { 
    en: 'Environmental Awareness', 
    hi: 'पर्यावरण जागरूकता', 
    es: 'Conciencia Ambiental', 
    fr: 'Sensibilisation Environnementale', 
    de: 'Umweltbewusstsein', 
    pt: 'Conscientização Ambiental', 
    zh: '环境意识' 
  },
  'nav.programs.health': { 
    en: 'Health & Hygiene', 
    hi: 'स्वास्थ्य और स्वच्छता', 
    es: 'Salud e Higiene', 
    fr: 'Santé et Hygiène', 
    de: 'Gesundheit & Hygiene', 
    pt: 'Saúde e Higiene', 
    zh: '健康与卫生' 
  },
  'nav.programs.womenEmpowerment': { 
    en: 'Women Empowerment', 
    hi: 'महिला सशक्तिकरण', 
    es: 'Empoderamiento de la Mujer', 
    fr: 'Autonomisation des Femmes', 
    de: 'Frauenförderung', 
    pt: 'Empoderamento Feminino', 
    zh: '妇女赋权' 
  },
  'nav.programs.skillDevelopment': { 
    en: 'Skill Development', 
    hi: 'कौशल विकास', 
    es: 'Desarrollo de Habilidades', 
    fr: 'Développement des Compétences', 
    de: 'Kompetenzentwicklung', 
    pt: 'Desenvolvimento de Habilidades', 
    zh: '技能发展' 
  },
  'nav.programs.ruralDevelopment': { 
    en: 'Rural Development', 
    hi: 'ग्रामीण विकास', 
    es: 'Desarrollo Rural', 
    fr: 'Développement Rural', 
    de: 'Ländliche Entwicklung', 
    pt: 'Desenvolvimento Rural', 
    zh: '农村发展' 
  },

  // IMPACT Dropdown
  'nav.impact.overview': { 
    en: 'Our Impact', 
    hi: 'हमारा प्रभाव', 
    es: 'Nuestro Impacto', 
    fr: 'Notre Impact', 
    de: 'Unsere Wirkung', 
    pt: 'Nosso Impacto', 
    zh: '我们的影响' 
  },
  'nav.impact.numbers': { 
    en: 'Impact by Numbers', 
    hi: 'संख्या में प्रभाव', 
    es: 'Impacto en Números', 
    fr: 'Impact en Chiffres', 
    de: 'Wirkung in Zahlen', 
    pt: 'Impacto em Números', 
    zh: '数字影响' 
  },
  'nav.impact.successStories': { 
    en: 'Success Stories', 
    hi: 'सफलता की कहानियाँ', 
    es: 'Historias de Éxito', 
    fr: 'Histoires de Succès', 
    de: 'Erfolgsgeschichten', 
    pt: 'Histórias de Sucesso', 
    zh: '成功故事' 
  },
  'nav.impact.caseStudies': { 
    en: 'Case Studies', 
    hi: 'केस स्टडी', 
    es: 'Estudios de Caso', 
    fr: 'Études de Cas', 
    de: 'Fallstudien', 
    pt: 'Estudos de Caso', 
    zh: '案例研究' 
  },
  'nav.impact.beforeAfter': { 
    en: 'Before & After Stories', 
    hi: 'पहले और बाद की कहानियाँ', 
    es: 'Historias de Antes y Después', 
    fr: 'Histoires Avant et Après', 
    de: 'Vorher-Nachher-Geschichten', 
    pt: 'Histórias de Antes e Depois', 
    zh: '前后故事' 
  },
  'nav.impact.testimonials': { 
    en: 'Testimonials', 
    hi: 'प्रशंसापत्र', 
    es: 'Testimonios', 
    fr: 'Témoignages', 
    de: 'Referenzen', 
    pt: 'Depoimentos', 
    zh: '推荐' 
  },
  'nav.impact.annualReport': { 
    en: 'Annual Impact Report', 
    hi: 'वार्षिक प्रभाव रिपोर्ट', 
    es: 'Informe de Impacto Anual', 
    fr: "Rapport d'Impact Annuel", 
    de: 'Jährlicher Wirkungsbericht', 
    pt: 'Relatório Anual de Impacto', 
    zh: '年度影响报告' 
  },
  'nav.impact.outcomes': { 
    en: 'Program Outcomes', 
    hi: 'कार्यक्रम परिणाम', 
    es: 'Resultados del Programa', 
    fr: 'Résultats du Programme', 
    de: 'Programmergebnisse', 
    pt: 'Resultados do Programa', 
    zh: '项目成果' 
  },
  'nav.impact.reports': { 
    en: 'Program Reports', 
    hi: 'कार्यक्रम रिपोर्ट', 
    es: 'Informes de Programas', 
    fr: 'Rapports de Programme', 
    de: 'Programmberichte', 
    pt: 'Relatórios de Programas', 
    zh: '项目报告' 
  },

  // GET INVOLVED Dropdown
  'nav.involved.overview': { 
    en: 'Get Involved', 
    hi: 'शामिल हों', 
    es: 'Participa', 
    fr: 'Participez', 
    de: 'Mitmachen', 
    pt: 'Participe', 
    zh: '参与我们' 
  },
  'nav.involved.volunteer': { 
    en: 'Volunteer with Us', 
    hi: 'हमारे साथ स्वयंसेवक बनें', 
    es: 'Voluntariado con Nosotros', 
    fr: 'Bénévolat avec Nous', 
    de: 'Freiwillig bei Uns', 
    pt: 'Voluntariado Conosco', 
    zh: '与我们做志愿者' 
  },
  'nav.involved.internship': { 
    en: 'Internship Opportunities', 
    hi: 'इंटर्नशिप के अवसर', 
    es: 'Oportunidades de Pasantía', 
    fr: 'Opportunités de Stage', 
    de: 'Praktikumsmöglichkeiten', 
    pt: 'Oportunidades de Estágio', 
    zh: '实习机会' 
  },
  'nav.involved.campusAmbassador': { 
    en: 'Campus Ambassador Program', 
    hi: 'कैंपस एंबेसडर कार्यक्रम', 
    es: 'Programa de Embajador del Campus', 
    fr: 'Programme Ambassadeur de Campus', 
    de: 'Campus-Botschafter-Programm', 
    pt: 'Programa de Embaixador do Campus', 
    zh: '校园大使计划' 
  },
  'nav.involved.mentor': { 
    en: 'Become a Mentor', 
    hi: 'मार्गदर्शक बनें', 
    es: 'Conviértete en Mentor', 
    fr: 'Devenir Mentor', 
    de: 'Mentor Werden', 
    pt: 'Torne-se um Mentor', 
    zh: '成为导师' 
  },
  'nav.involved.individualSupport': { 
    en: 'Individual Supporters', 
    hi: 'व्यक्तिगत समर्थक', 
    es: 'Partidarios Individuales', 
    fr: 'Supporters Individuels', 
    de: 'Individuelle Unterstützer', 
    pt: 'Apoiadores Individuais', 
    zh: '个人支持者' 
  },
  'nav.involved.csrCollaboration': { 
    en: 'CSR Collaboration', 
    hi: 'CSR सहयोग', 
    es: 'Colaboración RSC', 
    fr: 'Collaboration RSE', 
    de: 'CSR-Zusammenarbeit', 
    pt: 'Colaboração RSC', 
    zh: 'CSR合作' 
  },
  'nav.involved.corporatePartnerships': { 
    en: 'Corporate Partnerships', 
    hi: 'कॉर्पोरेट साझेदारी', 
    es: 'Asociaciones Corporativas', 
    fr: 'Partenariats d\'Entreprise', 
    de: 'Unternehmenspartnerschaften', 
    pt: 'Parcerias Corporativas', 
    zh: '企业合作伙伴' 
  },

  // RESOURCES Dropdown
  'nav.resources.blog': { 
    en: 'Blog & Articles', 
    hi: 'ब्लॉग और लेख', 
    es: 'Blog y Artículos', 
    fr: 'Blog et Articles', 
    de: 'Blog & Artikel', 
    pt: 'Blog e Artigos', 
    zh: '博客与文章' 
  },
  'nav.resources.awareness': { 
    en: 'Awareness Resources', 
    hi: 'जागरूकता संसाधन', 
    es: 'Recursos de Concienciación', 
    fr: 'Ressources de Sensibilisation', 
    de: 'Bewusstseinsressourcen', 
    pt: 'Recursos de Conscientização', 
    zh: '意识资源' 
  },
  'nav.resources.careerResources': { 
    en: 'Career Guidance Resources', 
    hi: 'करियर मार्गदर्शन संसाधन', 
    es: 'Recursos de Orientación Profesional', 
    fr: 'Ressources d\'Orientation Professionnelle', 
    de: 'Karriereberatungsressourcen', 
    pt: 'Recursos de Orientação de Carreira', 
    zh: '职业指导资源' 
  },
  'nav.resources.digitalLiteracy': { 
    en: 'Digital Literacy', 
    hi: 'डिजिटल साक्षरता', 
    es: 'Alfabetización Digital', 
    fr: 'Littératie Numérique', 
    de: 'Digitale Kompetenz', 
    pt: 'Alfabetização Digital', 
    zh: '数字素养' 
  },
  'nav.resources.cyberSafetyRes': { 
    en: 'Cyber Safety Resources', 
    hi: 'साइबर सुरक्षा संसाधन', 
    es: 'Recursos de Seguridad Cibernética', 
    fr: 'Ressources de Sécurité Cyber', 
    de: 'Cybersicherheitsressourcen', 
    pt: 'Recursos de Segurança Cibernética', 
    zh: '网络安全资源' 
  },
  'nav.resources.environmental': { 
    en: 'Environmental Education', 
    hi: 'पर्यावरण शिक्षा', 
    es: 'Educación Ambiental', 
    fr: 'Éducation Environnementale', 
    de: 'Umweltbildung', 
    pt: 'Educação Ambiental', 
    zh: '环境教育' 
  },
  'nav.resources.media': { 
    en: 'Media & Updates', 
    hi: 'मीडिया और अपडेट', 
    es: 'Medios y Actualizaciones', 
    fr: 'Médias et Mises à Jour', 
    de: 'Medien & Updates', 
    pt: 'Mídia e Atualizações', 
    zh: '媒体与更新' 
  },
  'nav.resources.news': { 
    en: 'News & Announcements', 
    hi: 'समाचार और घोषणाएं', 
    es: 'Noticias y Anuncios', 
    fr: 'Actualités et Annonces', 
    de: 'Neuigkeiten & Ankündigungen', 
    pt: 'Notícias e Anúncios', 
    zh: '新闻与公告' 
  },
  'nav.resources.events': { 
    en: 'Events & Activities', 
    hi: 'इवेंट और गतिविधियाँ', 
    es: 'Eventos y Actividades', 
    fr: 'Événements et Activités', 
    de: 'Veranstaltungen & Aktivitäten', 
    pt: 'Eventos e Atividades', 
    zh: '活动与活动' 
  },
  'nav.resources.gallery': { 
    en: 'Gallery', 
    hi: 'गैलरी', 
    es: 'Galería', 
    fr: 'Galerie', 
    de: 'Galerie', 
    pt: 'Galeria', 
    zh: '画廊' 
  },

  // CONTACT Dropdown
  'nav.contact.contactUs': { 
    en: 'Contact Us', 
    hi: 'हमसे संपर्क करें', 
    es: 'Contáctenos', 
    fr: 'Contactez-nous', 
    de: 'Kontaktieren Sie uns', 
    pt: 'Entre em Contato', 
    zh: '联系我们' 
  },
  'nav.contact.faqs': { 
    en: 'FAQs', 
    hi: 'अक्सर पूछे जाने वाले प्रश्न', 
    es: 'Preguntas Frecuentes', 
    fr: 'FAQ', 
    de: 'Häufige Fragen', 
    pt: 'Perguntas Frequentes', 
    zh: '常见问题' 
  },
  'nav.contact.support': { 
    en: 'Support / Help Center', 
    hi: 'सपोर्ट / हेल्प सेंटर', 
    es: 'Soporte / Centro de Ayuda', 
    fr: 'Support / Centre d\'Aide', 
    de: 'Support / Hilfe-Center', 
    pt: 'Suporte / Centro de Ajuda', 
    zh: '支持/帮助中心' 
  },
  'nav.contact.requestWorkshop': { 
    en: 'Request a Workshop', 
    hi: 'कार्यशाला का अनुरोध करें', 
    es: 'Solicitar un Taller', 
    fr: 'Demander un Atelier', 
    de: 'Workshop Anfragen', 
    pt: 'Solicitar um Workshop', 
    zh: '申请研讨会' 
  },
  'nav.contact.inviteSchool': { 
    en: 'Invite Sambhav to Your School', 
    hi: 'संभव को अपने स्कूल में आमंत्रित करें', 
    es: 'Invita a Sambhav a tu Escuela', 
    fr: 'Invitez Sambhav dans votre École', 
    de: 'Sambhav in Ihre Schule Einladen', 
    pt: 'Convide Sambhav para sua Escola', 
    zh: '邀请Sambhav到您的学校' 
  },
  'nav.contact.location': { 
    en: 'Location & Reach', 
    hi: 'स्थान और पहुंच', 
    es: 'Ubicación y Alcance', 
    fr: 'Localisation et Portée', 
    de: 'Standort & Reichweite', 
    pt: 'Localização e Alcance', 
    zh: '位置与覆盖' 
  },

  // LOGIN Dropdown
  'nav.login.userLogin': { 
    en: 'User Login', 
    hi: 'यूजर लॉगिन', 
    es: 'Inicio de Sesión de Usuario', 
    fr: 'Connexion Utilisateur', 
    de: 'Benutzeranmeldung', 
    pt: 'Login de Usuário', 
    zh: '用户登录' 
  },
  'nav.login.adminLogin': { 
    en: 'Admin Login', 
    hi: 'एडमिन लॉगिन', 
    es: 'Inicio de Sesión de Administrador', 
    fr: 'Connexion Administrateur', 
    de: 'Administrator-Anmeldung', 
    pt: 'Login de Administrador', 
    zh: '管理员登录' 
  },
};
