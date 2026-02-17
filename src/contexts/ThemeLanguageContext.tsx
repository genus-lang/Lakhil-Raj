import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'light' | 'dark';
type Language = 'en' | 'hi' | 'es' | 'fr' | 'de' | 'pt' | 'zh';

type ThemeLanguageContextType = {
  theme: Theme;
  language: Language;
  toggleTheme: () => void;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const ThemeLanguageContext = createContext<ThemeLanguageContextType | undefined>(undefined);

// Comprehensive translation dictionary for all 7 languages
const translations: Record<string, Record<Language, string>> = {
  // Header
  'nav.home': { 
    en: 'Home', 
    hi: 'होम', 
    es: 'Inicio', 
    fr: 'Accueil', 
    de: 'Startseite', 
    pt: 'Início', 
    zh: '首页' 
  },
  'nav.about': { 
    en: 'About Us', 
    hi: 'हमारे बारे में', 
    es: 'Sobre Nosotros', 
    fr: 'À Propos', 
    de: 'Über Uns', 
    pt: 'Sobre Nós', 
    zh: '关于我们' 
  },
  'nav.whatWeDo': { 
    en: 'What We Do', 
    hi: 'हम क्या करते हैं', 
    es: 'Qué Hacemos', 
    fr: 'Ce Que Nous Faisons', 
    de: 'Was Wir Tun', 
    pt: 'O Que Fazemos', 
    zh: '我们的工作' 
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
  'nav.contact': { 
    en: 'Contact', 
    hi: 'संपर्क', 
    es: 'Contacto', 
    fr: 'Contact', 
    de: 'Kontakt', 
    pt: 'Contato', 
    zh: '联系' 
  },
  'nav.faq': { 
    en: 'FAQ', 
    hi: 'अक्सर पूछे जाने वाले प्रश्न', 
    es: 'Preguntas Frecuentes', 
    fr: 'FAQ', 
    de: 'Häufige Fragen', 
    pt: 'Perguntas Frequentes', 
    zh: '常见问题' 
  },
  'nav.registration': { 
    en: 'Registration', 
    hi: 'पंजीकरण', 
    es: 'Registro', 
    fr: 'Enregistrement', 
    de: 'Registrierung', 
    pt: 'Registro', 
    zh: '注册信息' 
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
  
  // About submenu
  'nav.ourStory': { 
    en: 'Our Story', 
    hi: 'हमारी कहानी', 
    es: 'Nuestra Historia', 
    fr: 'Notre Histoire', 
    de: 'Unsere Geschichte', 
    pt: 'Nossa História', 
    zh: '我们的故事' 
  },
  'nav.missionVision': { 
    en: 'Mission & Vision', 
    hi: 'मिशन और विजन', 
    es: 'Misión y Visión', 
    fr: 'Mission et Vision', 
    de: 'Mission & Vision', 
    pt: 'Missão e Visão', 
    zh: '使命与愿景' 
  },
  'nav.team': { 
    en: 'Our Team', 
    hi: 'हमारी टीम', 
    es: 'Nuestro Equipo', 
    fr: 'Notre Équipe', 
    de: 'Unser Team', 
    pt: 'Nossa Equipe', 
    zh: '我们的团队' 
  },
  'nav.partners': { 
    en: 'Partners & Supporters', 
    hi: 'साझेदार और समर्थक', 
    es: 'Socios y Patrocinadores', 
    fr: 'Partenaires et Supporters', 
    de: 'Partner & Unterstützer', 
    pt: 'Parceiros e Apoiadores', 
    zh: '合作伙伴与支持者' 
  },
  
  // Programs submenu
  'nav.digitalEducation': { 
    en: 'Digital Education', 
    hi: 'डिजिटल शिक्षा', 
    es: 'Educación Digital', 
    fr: 'Éducation Numérique', 
    de: 'Digitale Bildung', 
    pt: 'Educação Digital', 
    zh: '数字教育' 
  },
  'nav.careerAwareness': { 
    en: 'Career Awareness', 
    hi: 'करियर मार्गदर्शन', 
    es: 'Orientación Profesional', 
    fr: 'Orientation Professionnelle', 
    de: 'Karrierebewusstsein', 
    pt: 'Orientação de Carreira', 
    zh: '职业指导' 
  },
  'nav.cyberSafety': { 
    en: 'Cyber Safety', 
    hi: 'साइबर सुरक्षा', 
    es: 'Seguridad Cibernética', 
    fr: 'Sécurité Cyber', 
    de: 'Cybersicherheit', 
    pt: 'Segurança Cibernética', 
    zh: '网络安全' 
  },
  'nav.communityOutreach': { 
    en: 'Community Outreach', 
    hi: 'सामुदायिक आउटरीच', 
    es: 'Alcance Comunitario', 
    fr: 'Sensibilisation Communautaire', 
    de: 'Gemeindearbeit', 
    pt: 'Alcance Comunitário', 
    zh: '社区推广' 
  },
  'nav.viewAllPrograms': { 
    en: 'View All Programs →', 
    hi: 'सभी कार्यक्रम देखें →', 
    es: 'Ver Todos los Programas →', 
    fr: 'Voir Tous les Programmes →', 
    de: 'Alle Programme Anzeigen →', 
    pt: 'Ver Todos os Programas →', 
    zh: '查看所有项目 →' 
  },
  
  // Impact submenu
  'nav.successStories': { 
    en: 'Success Stories', 
    hi: 'सफलता की कहानियाँ', 
    es: 'Historias de Éxito', 
    fr: 'Histoires de Succès', 
    de: 'Erfolgsgeschichten', 
    pt: 'Histórias de Sucesso', 
    zh: '成功故事' 
  },
  'nav.statistics': { 
    en: 'Our Statistics', 
    hi: 'हमारे आंकड़े', 
    es: 'Nuestras Estadísticas', 
    fr: 'Nos Statistiques', 
    de: 'Unsere Statistiken', 
    pt: 'Nossas Estatísticas', 
    zh: '我们的统计数据' 
  },
  'nav.gallery': { 
    en: 'Photo Gallery', 
    hi: 'फोटो गैलरी', 
    es: 'Galería de Fotos', 
    fr: 'Galerie Photos', 
    de: 'Fotogalerie', 
    pt: 'Galeria de Fotos', 
    zh: '照片画廊' 
  },
  'nav.testimonials': { 
    en: 'Testimonials', 
    hi: 'प्रशंसापत्र', 
    es: 'Testimonios', 
    fr: 'Témoignages', 
    de: 'Referenzen', 
    pt: 'Depoimentos', 
    zh: '推荐' 
  },
  
  // Get Involved submenu
  'nav.volunteer': { 
    en: 'Volunteer', 
    hi: 'स्वयंसेवक बनें', 
    es: 'Voluntariado', 
    fr: 'Bénévolat', 
    de: 'Freiwilliger', 
    pt: 'Voluntariado', 
    zh: '志愿者' 
  },
  'nav.internship': { 
    en: 'Internship', 
    hi: 'इंटर्नशिप', 
    es: 'Pasantía', 
    fr: 'Stage', 
    de: 'Praktikum', 
    pt: 'Estágio', 
    zh: '实习' 
  },
  'nav.mentor': { 
    en: 'Become a Mentor', 
    hi: 'मार्गदर्शक बनें', 
    es: 'Conviértete en Mentor', 
    fr: 'Devenir Mentor', 
    de: 'Mentor Werden', 
    pt: 'Torne-se um Mentor', 
    zh: '成为导师' 
  },
  'nav.partnerships': { 
    en: 'CSR Partnerships', 
    hi: 'CSR साझेदारी', 
    es: 'Asociaciones RSC', 
    fr: 'Partenariats RSE', 
    de: 'CSR-Partnerschaften', 
    pt: 'Parcerias RSC', 
    zh: 'CSR合作伙伴' 
  },
  
  // Hero Section
  'hero.eyebrow': { 
    en: 'A Grassroots Initiative for Change', 
    hi: 'बदलाव के लिए एक जमीनी पहल', 
    es: 'Una Iniciativa de Base para el Cambio', 
    fr: 'Une Initiative Populaire pour le Changement', 
    de: 'Eine Basisinitiative für Veränderung', 
    pt: 'Uma Iniciativa de Base para Mudança', 
    zh: '基层变革倡议' 
  },
  'hero.heading': { 
    en: 'Making Change Possible, One Child at a Time', 
    hi: 'एक-एक बच्चे के माध्यम से बदलाव को संभव बनाना', 
    es: 'Haciendo Posible el Cambio, Un Niño a la Vez', 
    fr: 'Rendre le Changement Possible, Un Enfant à la Fois', 
    de: 'Veränderung Möglich Machen, Ein Kind nach dem Anderen', 
    pt: 'Tornando a Mudança Possível, Uma Criança de Cada Vez', 
    zh: '让改变成为可能，一次一个孩子' 
  },
  'hero.description': { 
    en: 'Lakhil Raj Welfare Foundation works at the grassroots to provide education, digital skills, and awareness to underserved communities.', 
    hi: 'लखिल राज वेलफेयर फाउंडेशन जमीनी स्तर पर काम करता है ताकि वंचित समुदायों को शिक्षा, डिजिटल कौशल और जागरूकता प्रदान की जा सके।', 
    es: 'Lakhil Raj Welfare Foundation trabaja a nivel comunitario para proporcionar educación, habilidades digitales y conciencia a comunidades desatendidas.', 
    fr: 'Lakhil Raj Welfare Foundation travaille au niveau local pour fournir éducation, compétences numériques et sensibilisation aux communautés défavorisées.', 
    de: 'Lakhil Raj Welfare Foundation arbeitet an der Basis, um Bildung, digitale Fähigkeiten und Bewusstsein für unterversorgte Gemeinschaften zu bieten.', 
    pt: 'Lakhil Raj Welfare Foundation trabalha na base para fornecer educação, habilidades digitais e conscientização a comunidades carentes.', 
    zh: 'Lakhil Raj Welfare Foundation在基层工作，为服务不足的社区提供教育、数字技能和意识。' 
  },
  'hero.getInvolved': { 
    en: 'Get Involved', 
    hi: 'शामिल हों', 
    es: 'Participa', 
    fr: 'Participez', 
    de: 'Mitmachen', 
    pt: 'Participe', 
    zh: '参与我们' 
  },
  'hero.explorePrograms': { 
    en: 'Explore Our Programs', 
    hi: 'हमारे कार्यक्रम देखें', 
    es: 'Explorar Programas', 
    fr: 'Découvrir nos Programmes', 
    de: 'Programme Erkunden', 
    pt: 'Explorar Programas', 
    zh: '探索我们的项目' 
  },
  'hero.students': { 
    en: 'Students', 
    hi: 'छात्र', 
    es: 'Estudiantes', 
    fr: 'Étudiants', 
    de: 'Schüler', 
    pt: 'Estudantes', 
    zh: '学生' 
  },
  'hero.volunteers': { 
    en: 'Volunteers', 
    hi: 'स्वयंसेवक', 
    es: 'Voluntarios', 
    fr: 'Bénévoles', 
    de: 'Freiwillige', 
    pt: 'Voluntários', 
    zh: '志愿者' 
  },
  'hero.villages': { 
    en: 'Multiple Villages', 
    hi: 'कई गाँव', 
    es: 'Múltiples Pueblos', 
    fr: 'Plusieurs Villages', 
    de: 'Mehrere Dörfer', 
    pt: 'Várias Aldeias', 
    zh: '多个村庄' 
  },
  
  // Impact Section
  'impact.heading': { 
    en: 'Our Impact', 
    hi: 'हमारा प्रभाव', 
    es: 'Nuestro Impacto', 
    fr: 'Notre Impact', 
    de: 'Unsere Wirkung', 
    pt: 'Nosso Impacto', 
    zh: '我们的影响' 
  },
  'impact.students': { 
    en: 'Students Impacted', 
    hi: 'छात्रों पर प्रभाव', 
    es: 'Estudiantes Impactados', 
    fr: 'Étudiants Impactés', 
    de: 'Erreichte Schüler', 
    pt: 'Estudantes Impactados', 
    zh: '影响的学生' 
  },
  'impact.volunteers': { 
    en: 'Active Volunteers', 
    hi: 'सक्रिय स्वयंसेवक', 
    es: 'Voluntarios Activos', 
    fr: 'Bénévoles Actifs', 
    de: 'Aktive Freiwillige', 
    pt: 'Voluntários Ativos', 
    zh: '活跃志愿者' 
  },
  'impact.communities': { 
    en: 'Communities Reached', 
    hi: 'समुदायों तक पहुँच', 
    es: 'Comunidades Alcanzadas', 
    fr: 'Communautés Atteintes', 
    de: 'Erreichte Gemeinden', 
    pt: 'Comunidades Alcançadas', 
    zh: '覆盖社区' 
  },
  'impact.programs': { 
    en: 'Our Programs', 
    hi: 'हमारे कार्यक्रम', 
    es: 'Nuestros Programas', 
    fr: 'Nos Programmes', 
    de: 'Unsere Programme', 
    pt: 'Nossos Programas', 
    zh: '我们的项目' 
  },
  'impact.digitalEducation': { 
    en: 'Digital Education', 
    hi: 'डिजिटल शिक्षा', 
    es: 'Educación Digital', 
    fr: 'Éducation Numérique', 
    de: 'Digitale Bildung', 
    pt: 'Educação Digital', 
    zh: '数字教育' 
  },
  'impact.digitalDesc': { 
    en: 'Teaching computer skills and digital literacy', 
    hi: 'कंप्यूटर कौशल और डिजिटल साक्षरता सिखाना', 
    es: 'Enseñando habilidades informáticas y alfabetización digital', 
    fr: 'Enseigner les compétences informatiques et la littératie numérique', 
    de: 'Vermittlung von Computerkenntnissen und digitaler Kompetenz', 
    pt: 'Ensinando habilidades de computador e alfabetização digital', 
    zh: '教授计算机技能和数字素养' 
  },
  'impact.careerAwareness': { 
    en: 'Career Awareness', 
    hi: 'करियर जागरूकता', 
    es: 'Conciencia Profesional', 
    fr: 'Sensibilisation aux Carrières', 
    de: 'Karrierebewusstsein', 
    pt: 'Consciência de Carreira', 
    zh: '职业意识' 
  },
  'impact.careerDesc': { 
    en: 'Guiding students toward informed career choices', 
    hi: 'छात्रों को सूचित करियर विकल्पों की ओर मार्गदर्शन करना', 
    es: 'Guiando a los estudiantes hacia elecciones profesionales informadas', 
    fr: 'Guider les étudiants vers des choix de carrière éclairés', 
    de: 'Schüler zu informierten Karriereentscheidungen führen', 
    pt: 'Orientando estudantes para escolhas de carreira informadas', 
    zh: '引导学生做出明智的职业选择' 
  },
  'impact.cyberSafety': { 
    en: 'Cyber Safety', 
    hi: 'साइबर सुरक्षा', 
    es: 'Seguridad Cibernética', 
    fr: 'Sécurité Cyber', 
    de: 'Cybersicherheit', 
    pt: 'Segurança Cibernética', 
    zh: '网络安全' 
  },
  'impact.cyberDesc': { 
    en: 'Spreading awareness about online safety', 
    hi: 'ऑनलाइन सुरक्षा के बारे में जागरूकता फैलाना', 
    es: 'Difundiendo conciencia sobre seguridad en línea', 
    fr: 'Sensibiliser à la sécurité en ligne', 
    de: 'Bewusstsein für Online-Sicherheit schaffen', 
    pt: 'Espalhando conscientização sobre segurança online', 
    zh: '传播在线安全意识' 
  },
  
  // CTA Strip
  'cta.heading': { 
    en: 'Your small support can create lifelong impact', 
    hi: 'आपका छोटा सहयोग जीवनभर का प्रभाव बना सकता है', 
    es: 'Tu pequeño apoyo puede crear un impacto para toda la vida', 
    fr: 'Votre petit soutien peut créer un impact durable', 
    de: 'Ihre kleine Unterstützung kann lebenslange Wirkung erzielen', 
    pt: 'Seu pequeno apoio pode criar um impacto para toda a vida', 
    zh: '您的小小支持可以产生终身影响' 
  },
  'cta.description': { 
    en: 'Join our mission to empower communities through education', 
    hi: 'शिक्षा के माध्यम से समुदायों को सशक्त बनाने के हमारे मिशन में शामिल हों', 
    es: 'Únete a nuestra misión de empoderar comunidades a través de la educación', 
    fr: 'Rejoignez notre mission pour autonomiser les communautés par l\'éducation', 
    de: 'Schließen Sie sich unserer Mission an, Gemeinschaften durch Bildung zu stärken', 
    pt: 'Junte-se à nossa missão de capacitar comunidades através da educação', 
    zh: '加入我们通过教育赋能社区的使命' 
  },
  'cta.volunteer': { 
    en: 'Become a Volunteer', 
    hi: 'स्वयंसेवक बनें', 
    es: 'Conviértete en Voluntario', 
    fr: 'Devenir Bénévole', 
    de: 'Freiwilliger Werden', 
    pt: 'Torne-se um Voluntário', 
    zh: '���为志愿者' 
  },
  
  // Footer
  'footer.tagline': { 
    en: 'Making Change Possible, One Child at a Time', 
    hi: 'एक-एक बच्चे के माध्यम से बदलाव को संभव बनाना', 
    es: 'Haciendo Posible el Cambio, Un Niño a la Vez', 
    fr: 'Rendre le Changement Possible, Un Enfant à la Fois', 
    de: 'Veränderung Möglich Machen, Ein Kind nach dem Anderen', 
    pt: 'Tornando a Mudança Possível, Uma Criança de Cada Vez', 
    zh: '让改变成为可能，一次一个孩子' 
  },
  'footer.description': { 
    en: 'A grassroots initiative focused on education, digital skills, and awareness.', 
    hi: 'शिक्षा, डिजिटल कौशल और जागरूकता पर केंद्रित एक जमीनी पहल।', 
    es: 'Una iniciativa comunitaria centrada en educación, habilidades digitales y conciencia.', 
    fr: 'Une initiative locale axée sur l\'éducation, les compétences numériques et la sensibilisation.', 
    de: 'Eine Basisinitiative mit Fokus auf Bildung, digitale Fähigkeiten und Bewusstsein.', 
    pt: 'Uma iniciativa de base focada em educação, habilidades digitais e conscientização.', 
    zh: '一项专注于教育、数字技能和意识的基层倡议。' 
  },
  'footer.quickLinks': { 
    en: 'Quick Links', 
    hi: 'त्वरित लिंक', 
    es: 'Enlaces Rápidos', 
    fr: 'Liens Rapides', 
    de: 'Schnelllinks', 
    pt: 'Links Rápidos', 
    zh: '快速链接' 
  },
  'footer.programs': { 
    en: 'Our Programs', 
    hi: 'हमारे कार्यक्रम', 
    es: 'Nuestros Programas', 
    fr: 'Nos Programmes', 
    de: 'Unsere Programme', 
    pt: 'Nossos Programas', 
    zh: '我们的项目' 
  },
  'footer.getInTouch': { 
    en: 'Get in Touch', 
    hi: 'संपर्क करें', 
    es: 'Póngase en Contacto', 
    fr: 'Contactez-nous', 
    de: 'Kontaktieren Sie uns', 
    pt: 'Entre em Contato', 
    zh: '联系我们' 
  },
  'footer.volunteerWithUs': { 
    en: 'Volunteer With Us', 
    hi: 'हमारे साथ स्वयंसेवक बनें', 
    es: 'Voluntariado con Nosotros', 
    fr: 'Bénévolat avec Nous', 
    de: 'Freiwillig mit Uns', 
    pt: 'Voluntariado Conosco', 
    zh: '与我们一起做志愿者' 
  },
  'footer.copyright': { 
    en: 'Lakhil Raj Welfare Foundation. All rights reserved.', 
    hi: 'लखिल राज वेलफेयर फाउंडेशन। सर्वाधिकार सुरक्षित।', 
    es: 'Lakhil Raj Welfare Foundation. Todos los derechos reservados.', 
    fr: 'Lakhil Raj Welfare Foundation. Tous droits réservés.', 
    de: 'Lakhil Raj Welfare Foundation. Alle Rechte vorbehalten.', 
    pt: 'Lakhil Raj Welfare Foundation. Todos os direitos reservados.', 
    zh: 'Lakhil Raj Welfare Foundation。版权所有。' 
  },
  'footer.privacy': { 
    en: 'Privacy Policy', 
    hi: 'गोपनीयता नीति', 
    es: 'Política de Privacidad', 
    fr: 'Politique de Confidentialité', 
    de: 'Datenschutzrichtlinie', 
    pt: 'Política de Privacidade', 
    zh: '隐私政策' 
  },
  'footer.terms': { 
    en: 'Terms & Conditions', 
    hi: 'नियम और शर्तें', 
    es: 'Términos y Condiciones', 
    fr: 'Termes et Conditions', 
    de: 'Allgemeine Geschäftsbedingungen', 
    pt: 'Termos e Condições', 
    zh: '条款和条件' 
  },
  'footer.refund': { 
    en: 'Refund Policy', 
    hi: 'रिफंड नीति', 
    es: 'Política de Reembolso', 
    fr: 'Politique de Remboursement', 
    de: 'Rückerstattungsrichtlinie', 
    pt: 'Política de Reembolso', 
    zh: '退款政策' 
  },
  'footer.switchToDark': { 
    en: 'Switch to Dark Mode', 
    hi: 'डार्क मोड पर स्विच करें', 
    es: 'Cambiar a Modo Oscuro', 
    fr: 'Passer en Mode Sombre', 
    de: 'Zum Dunkelmodus Wechseln', 
    pt: 'Mudar para Modo Escuro', 
    zh: '切换到深色模式' 
  },
  'footer.switchToLight': { 
    en: 'Switch to Light Mode', 
    hi: 'लाइट मोड पर स्विच करें', 
    es: 'Cambiar a Modo Claro', 
    fr: 'Passer en Mode Clair', 
    de: 'Zum Hellmodus Wechseln', 
    pt: 'Mudar para Modo Claro', 
    zh: '切换到浅色模式' 
  },
  'footer.language': { 
    en: 'Language', 
    hi: 'भाषा', 
    es: 'Idioma', 
    fr: 'Langue', 
    de: 'Sprache', 
    pt: 'Idioma', 
    zh: '语言' 
  },

  // Registration Page
  'registration.hero.eyebrow': {
    en: 'Official Documentation',
    hi: 'आधिकारिक दस्तावेज़',
    es: 'Documentación Oficial',
    fr: 'Documentation Officielle',
    de: 'Offizielle Dokumentation',
    pt: 'Documentação Oficial',
    zh: '官方文件'
  },
  'registration.hero.heading': {
    en: 'NGO Registration Details',
    hi: 'एनजीओ पंजीकरण विवरण',
    es: 'Detalles de Registro de ONG',
    fr: 'Détails d\'Enregistrement ONG',
    de: 'NGO-Registrierungsdetails',
    pt: 'Detalhes de Registro da ONG',
    zh: '非政府组织注册详情'
  },
  'registration.hero.subtext': {
    en: 'Complete transparency with our official registration information and legal documentation',
    hi: 'हमारी आधिकारिक पंजीकरण जानकारी और कानूनी दस्तावेज़ीकरण के साथ पूर्ण पारदर्शिता',
    es: 'Transparencia completa con nuestra información de registro oficial y documentación legal',
    fr: 'Transparence totale avec nos informations d\'enregistrement officielles et notre documentation légale',
    de: 'Vollständige Transparenz mit unseren offiziellen Registrierungsinformationen und rechtlichen Dokumentationen',
    pt: 'Transparência completa com nossas informações de registro oficiais e documentação legal',
    zh: '通过我们的官方注册信息和法律文件保持完全透明'
  },
  'registration.table.title': {
    en: 'Verified Registration Information',
    hi: 'सत्यापित पंजीकरण जानकारी',
    es: 'Información de Registro Verificada',
    fr: 'Informations d\'Enregistrement Vérifiées',
    de: 'Verifizierte Registrierungsinformationen',
    pt: 'Informações de Registro Verificadas',
    zh: '已验证的注册信息'
  },
  'registration.table.subtitle': {
    en: 'All details verified and certified by government authorities for complete trust and transparency',
    hi: 'पूर्ण विश्वास और पारदर्शिता के लिए सरकारी अधिकारियों द्वारा सत्यापित और प्रमाणित सभी विवरण',
    es: 'Todos los detalles verificados y certificados por autoridades gubernamentales para total confianza y transparencia',
    fr: 'Tous les détails vérifiés et certifiés par les autorités gouvernementales pour une confiance et une transparence totales',
    de: 'Alle Details von Regierungsbehörden verifiziert und zertifiziert für vollständiges Vertrauen und Transparenz',
    pt: 'Todos os detalhes verificados e certificados por autoridades governamentais para total confiança e transparência',
    zh: '所有详细信息均经政府机构验证和认证，确保完全的信任和透明度'
  },
  'registration.data.ngoName': {
    en: 'Lakhil Raj Welfare Foundation - Building Better Futures',
    hi: 'लखिल राज वेलफेयर फाउंडेशन - बेहतर भविष्य का निर्माण',
    es: 'Lakhil Raj Welfare Foundation - Construyendo Mejores Futuros',
    fr: 'Lakhil Raj Welfare Foundation - Construire de Meilleurs Avenirs',
    de: 'Lakhil Raj Welfare Foundation - Eine Bessere Zukunft Aufbauen',
    pt: 'Lakhil Raj Welfare Foundation - Construindo Futuros Melhores',
    zh: 'Lakhil Raj Welfare Foundation - 建设美好未来'
  },
  'registration.data.registrationNo': {
    en: 'NGO/2015/DEL/12345',
    hi: 'NGO/2015/DEL/12345',
    es: 'NGO/2015/DEL/12345',
    fr: 'NGO/2015/DEL/12345',
    de: 'NGO/2015/DEL/12345',
    pt: 'NGO/2015/DEL/12345',
    zh: 'NGO/2015/DEL/12345'
  },
  'registration.data.year': {
    en: '2015',
    hi: '2015',
    es: '2015',
    fr: '2015',
    de: '2015',
    pt: '2015',
    zh: '2015'
  },
  'registration.data.address': {
    en: 'Block A-12, Connaught Place, New Delhi - 110001, India',
    hi: 'ब्लॉक ए-12, कनॉट प्लेस, नई दिल्ली - 110001, भारत',
    es: 'Bloque A-12, Connaught Place, Nueva Delhi - 110001, India',
    fr: 'Bloc A-12, Connaught Place, New Delhi - 110001, Inde',
    de: 'Block A-12, Connaught Place, Neu-Delhi - 110001, Indien',
    pt: 'Bloco A-12, Connaught Place, Nova Délhi - 110001, Índia',
    zh: 'A-12栋, Connaught Place, 新德里 - 110001, 印度'
  },
  'registration.labels.ngoName': {
    en: 'NGO Name',
    hi: 'एनजीओ नाम',
    es: 'Nombre de ONG',
    fr: 'Nom de l\'ONG',
    de: 'NGO-Name',
    pt: 'Nome da ONG',
    zh: '非政府组织名称'
  },
  'registration.labels.registrationNo': {
    en: 'Registration Number',
    hi: 'पंजीकरण संख्या',
    es: 'Número de Registro',
    fr: 'Numéro d\'Enregistrement',
    de: 'Registrierungsnummer',
    pt: 'Número de Registro',
    zh: '注册号'
  },
  'registration.labels.year': {
    en: 'Year of Registration',
    hi: 'पंजीकरण वर्ष',
    es: 'Año de Registro',
    fr: 'Année d\'Enregistrement',
    de: 'Registrierungsjahr',
    pt: 'Ano de Registro',
    zh: '注册年份'
  },
  'registration.labels.address': {
    en: 'Registered Address',
    hi: 'पंजीकृत पता',
    es: 'Dirección Registrada',
    fr: 'Adresse Enregistrée',
    de: 'Registrierte Adresse',
    pt: 'Endereço Registrado',
    zh: '注册地址'
  },
  'registration.labels.download': {
    en: 'Download Registration Certificate',
    hi: 'पंजीकरण प्रमाणपत्र डाउनलोड करें',
    es: 'Descargar Certificado de Registro',
    fr: 'Télécharger le Certificat d\'Enregistrement',
    de: 'Registrierungszertifikat Herunterladen',
    pt: 'Baixar Certificado de Registro',
    zh: '下载注册证书'
  },
  'registration.cta.title': {
    en: 'Questions About Our Registration?',
    hi: 'हमारे पंजीकरण के बारे में प्रश्न?',
    es: '¿Preguntas sobre nuestro registro?',
    fr: 'Des questions sur notre enregistrement?',
    de: 'Fragen zu unserer Registrierung?',
    pt: 'Perguntas sobre nosso registro?',
    zh: '关于我们注册的问题？'
  },
  'registration.cta.description': {
    en: 'Our team is here to provide any additional documentation or verification you may need',
    hi: 'हमारी टीम आपको आवश्यक किसी भी अतिरिक्त दस्तावेज़ या सत्यापन प्रदान करने के लिए यहां है',
    es: 'Nuestro equipo está aquí para proporcionar cualquier documentación o verificación adicional que pueda necesitar',
    fr: 'Notre équipe est là pour fournir toute documentation ou vérification supplémentaire dont vous pourriez avoir besoin',
    de: 'Unser Team ist hier, um Ihnen zusätzliche Dokumentation oder Verifizierung zu bieten',
    pt: 'Nossa equipe está aqui para fornecer qualquer documentação ou verificação adicional que você possa precisar',
    zh: '我们的团队随时为您提供所需的任何额外文件或验证'
  },
  'registration.cta.button': {
    en: 'Contact Us',
    hi: 'हमसे संपर्क करें',
    es: 'Contáctenos',
    fr: 'Contactez-nous',
    de: 'Kontaktieren Sie uns',
    pt: 'Entre em contato',
    zh: '联系我们'
  },
  'registration.badges.title': {
    en: 'Trust & Verification',
    hi: 'विश्वास और सत्यापन',
    es: 'Confianza y Verificación',
    fr: 'Confiance et Vérification',
    de: 'Vertrauen und Verifizierung',
    pt: 'Confiança e Verificação',
    zh: '信任与验证'
  },
};

// Language names in native script
export const languageNames: Record<Language, string> = {
  en: 'English',
  hi: 'हिंदी',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
  pt: 'Português',
  zh: '中文（简体）'
};

export function ThemeLanguageProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');
  const [language, setLanguageState] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  // Detect browser language and map to supported language
  const detectBrowserLanguage = (): Language => {
    const browserLang = navigator.language.toLowerCase();
    
    // Check for exact matches or language prefixes
    if (browserLang.includes('hi')) return 'hi';
    if (browserLang.includes('es')) return 'es';
    if (browserLang.includes('fr')) return 'fr';
    if (browserLang.includes('de')) return 'de';
    if (browserLang.includes('pt')) return 'pt';
    if (browserLang.includes('zh')) return 'zh';
    
    // Default to English
    return 'en';
  };

  // Initialize theme and language on mount
  useEffect(() => {
    // Get saved preferences
    const savedTheme = localStorage.getItem('sambhav-theme') as Theme | null;
    const savedLanguage = localStorage.getItem('sambhav-language') as Language | null;

    // Detect system preference for theme
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Detect browser language
    const browserLanguage = detectBrowserLanguage();

    // Apply theme (priority: saved > system > light)
    const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    setTheme(initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');

    // Apply language (priority: saved > browser > en)
    const initialLanguage = savedLanguage || browserLanguage;
    setLanguageState(initialLanguage);

    setMounted(true);
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('sambhav-theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  // Set language
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('sambhav-language', lang);
  };

  // Translation function with fallback to English
  const t = (key: any): string => {
    const translation = translations[key];
    if (!translation) return key;
    return translation[language] || translation.en || key;
  };

  // Prevent flash of wrong theme/language
  if (!mounted) {
    return null;
  }

  return (
    <ThemeLanguageContext.Provider value={{ theme, language, toggleTheme, setLanguage, t }}>
      {children}
    </ThemeLanguageContext.Provider>
  );
}

export function useThemeLanguage() {
  const context = useContext(ThemeLanguageContext);
  if (context === undefined) {
    throw new Error('useThemeLanguage must be used within a ThemeLanguageProvider');
  }
  return context;
}
