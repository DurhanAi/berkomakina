export type Language = 'tr' | 'en' | 'bg';

export interface Translations {
  // Header
  home: string;
  about: string;
  products: string;
  contact: string;
  
  // Homepage
  heroTitle: string;
  heroSubtitle: string;
  heroButton: string;
  
  // About section
  aboutTitle: string;
  aboutText: string;
  
  // Products
  productsTitle: string;
  productsSubtitle: string;
  viewDetails: string;
  
  // Contact
  contactTitle: string;
  contactSubtitle: string;
  contactForm: {
    name: string;
    email: string;
    phone: string;
    company: string;
    message: string;
    send: string;
  };
  contactInfo: {
    address: string;
    phone: string;
    email: string;
    workingHours: string;
  };
  
  // Footer
  quickLinks: string;
  mission: string;
  vision: string;
  qualityPolicy: string;
  followUs: string;
  allRightsReserved: string;
  
  // Common
  whyUs: string;
  localProduction: string;
  localProductionDesc: string;
  support24x7: string;
  support24x7Desc: string;
  customSolutions: string;
  customSolutionsDesc: string;
  qualityAssurance: string;
  qualityAssuranceDesc: string;
  
  // Product categories
  categories: {
    filling: string;
    packaging: string;
    labeling: string;
    automation: string;
    hotFoilStamping: string;
    screenPrinting: string;
    shrinkSleeving: string;
    assemblyLine: string;
  };
  
  // Machine names
  machines: {
    volumetricFilling: string;
    peristalticFilling: string;
    servoFilling: string;
    liquidFilling: string;
    rotaryCanFilling: string;
    shrinkPackaging: string;
    cartonPackaging: string;
    rollLabeler: string;
    lineAutomation: string;
  };
}

export const translations: Record<Language, Translations> = {
  tr: {
    home: "Ana Sayfa",
    about: "Hakkımızda",
    products: "Ürünler",
    contact: "İletişim",
    
    heroTitle: "Endüstriyel Dolum ve Paketleme Makineleri",
    heroSubtitle: "Gıda, içecek, kozmetik, ilaç ve kimya sektörleri için yenilikçi çözümler sunuyoruz.",
    heroButton: "Ürünlerimizi Keşfedin",
    
    aboutTitle: "BERKO MAKİNA",
    aboutText: "1995 yılından bu yana endüstriyel dolum, paketleme ve etiketleme makineleri alanında faaliyet gösteren firmamız, müşteri memnuniyetini ön planda tutarak kaliteli ve güvenilir çözümler sunmaktadır.",
    
    productsTitle: "Ürünlerimiz",
    productsSubtitle: "Endüstriyel ihtiyaçlarınıza uygun geniş makine yelpazesi",
    viewDetails: "Detayları Görüntüle",
    
    contactTitle: "İletişime Geçin",
    contactSubtitle: "Projeleriniz için en uygun çözümü birlikte bulalım",
    contactForm: {
      name: "Ad Soyad",
      email: "E-posta",
      phone: "Telefon",
      company: "Şirket",
      message: "Mesajınız",
      send: "Gönder"
    },
    contactInfo: {
      address: "Adres",
      phone: "Telefon",
      email: "E-posta",
      workingHours: "Çalışma Saatleri"
    },
    
    quickLinks: "Hızlı Bağlantılar",
    mission: "Misyon",
    vision: "Vizyon",
    qualityPolicy: "Kalite Politikası",
    followUs: "Bizi Takip Edin",
    allRightsReserved: "Tüm hakları saklıdır",
    
    whyUs: "Neden Berko Machine?",
    localProduction: "Yerli Üretim",
    localProductionDesc: "Türkiye'de tasarlanıp üretilen yüksek kaliteli dolum makineleri",
    support24x7: "7/24 Teknik Destek",
    support24x7Desc: "Kesintisiz teknik servis ve bakım hizmetleri",
    customSolutions: "Özel Çözümler",
    customSolutionsDesc: "İhtiyaçlarınıza özel tasarlanmış dolum makineleri",
    qualityAssurance: "Kalite Güvencesi",
    qualityAssuranceDesc: "CE belgeli ve uluslararası standartlara uygun ürünler",
    
    categories: {
      filling: "Dolum Makineleri",
      packaging: "Paketleme Makineleri",
      labeling: "Etiketleme Makineleri",
      automation: "Otomasyon Çözümleri",
      hotFoilStamping: "Hot Foil Stamping",
      screenPrinting: "Serigrafi Baskı",
      shrinkSleeving: "Shrink Sleeving",
      assemblyLine: "Montaj Hatları"
    },
    
    machines: {
      volumetricFilling: "Volumetrik Dolum Makinesi",
      peristalticFilling: "Peristaltik Pompalı Dolum",
      servoFilling: "Servo Kontrollü Dolum",
      liquidFilling: "Sıvı Dolum Makinesi",
      rotaryCanFilling: "Rotary Teneke Dolum Makinesi",
      shrinkPackaging: "Shrink Paketleme Makinesi",
      cartonPackaging: "Karton Kutu Paketleme Sistemi",
      rollLabeler: "Rulo Etiket Uygulayıcı",
      lineAutomation: "Hat Otomasyon Sistemi"
    }
  },
  
  en: {
    home: "Home",
    about: "About",
    products: "Products",
    contact: "Contact",
    
    heroTitle: "Industrial Filling and Packaging Machines",
    heroSubtitle: "We provide innovative solutions for food, beverage, cosmetic, pharmaceutical and chemical industries.",
    heroButton: "Explore Our Products",
    
    aboutTitle: "BERKO MACHINE",
    aboutText: "Since 1995, our company has been operating in the field of industrial filling, packaging and labeling machines, providing quality and reliable solutions with customer satisfaction as our priority.",
    
    productsTitle: "Our Products",
    productsSubtitle: "Wide range of machinery suitable for your industrial needs",
    viewDetails: "View Details",
    
    contactTitle: "Get In Touch",
    contactSubtitle: "Let's find the most suitable solution for your projects together",
    contactForm: {
      name: "Full Name",
      email: "Email",
      phone: "Phone",
      company: "Company",
      message: "Your Message",
      send: "Send"
    },
    contactInfo: {
      address: "Address",
      phone: "Phone",
      email: "Email",
      workingHours: "Working Hours"
    },
    
    quickLinks: "Quick Links",
    mission: "Mission",
    vision: "Vision",
    qualityPolicy: "Quality Policy",
    followUs: "Follow Us",
    allRightsReserved: "All rights reserved",
    
    whyUs: "Why Berko Machine?",
    localProduction: "Local Production",
    localProductionDesc: "High quality filling machines designed and manufactured in Turkey",
    support24x7: "24/7 Technical Support",
    support24x7Desc: "Continuous technical service and maintenance support",
    customSolutions: "Custom Solutions",
    customSolutionsDesc: "Filling machines designed specifically for your needs",
    qualityAssurance: "Quality Assurance",
    qualityAssuranceDesc: "CE certified products compliant with international standards",
    
    categories: {
      filling: "Filling Machines",
      packaging: "Packaging Machines",
      labeling: "Labeling Machines",
      automation: "Automation Solutions",
      hotFoilStamping: "Hot Foil Stamping",
      screenPrinting: "Screen Printing",
      shrinkSleeving: "Shrink Sleeving",
      assemblyLine: "Assembly Lines"
    },
    
    machines: {
      volumetricFilling: "Volumetric Filling Machine",
      peristalticFilling: "Peristaltic Pump Filling",
      servoFilling: "Servo Controlled Filling",
      liquidFilling: "Liquid Filling Machine",
      rotaryCanFilling: "Rotary Can Filling Machine",
      shrinkPackaging: "Shrink Packaging Machine",
      cartonPackaging: "Carton Box Packaging System",
      rollLabeler: "Roll Label Applicator",
      lineAutomation: "Line Automation System"
    }
  },
  
  bg: {
    home: "Начало",
    about: "За нас",
    products: "Продукти",
    contact: "Контакт",
    
    heroTitle: "Индустриални машини за пълнене и опаковане",
    heroSubtitle: "Предоставяме иновативни решения за хранително-вкусовата, козметичната, фармацевтичната и химическата индустрии.",
    heroButton: "Разгледайте нашите продукти",
    
    aboutTitle: "БЕРКО МАШИНА",
    aboutText: "От 1995 година нашата компания работи в областта на индустриалните машини за пълнене, опаковане и етикетиране, предоставяйки качествени и надеждни решения с приоритет удовлетвореността на клиентите.",
    
    productsTitle: "Нашите продукти",
    productsSubtitle: "Широка гама от машини, подходящи за вашите индустриални нужди",
    viewDetails: "Вижте подробности",
    
    contactTitle: "Свържете се с нас",
    contactSubtitle: "Нека заедно намерим най-подходящото решение за вашите проекти",
    contactForm: {
      name: "Пълно име",
      email: "Имейл",
      phone: "Телефон",
      company: "Компания",
      message: "Вашето съобщение",
      send: "Изпрати"
    },
    contactInfo: {
      address: "Адрес",
      phone: "Телефон",
      email: "Имейл",
      workingHours: "Работно време"
    },
    
    quickLinks: "Бързи връзки",
    mission: "Мисия",
    vision: "Визия",
    qualityPolicy: "Политика за качество",
    followUs: "Последвайте ни",
    allRightsReserved: "Всички права запазени",
    
    whyUs: "Защо Берко Машина?",
    localProduction: "Местно производство",
    localProductionDesc: "Висококачествени машини за пълнене, проектирани и произведени в Турция",
    support24x7: "24/7 Техническа поддръжка",
    support24x7Desc: "Непрекъсната техническа поддръжка и сервизни услуги",
    customSolutions: "Персонализирани решения",
    customSolutionsDesc: "Машини за пълнене, проектирани специално за вашите нужди",
    qualityAssurance: "Гаранция за качество",
    qualityAssuranceDesc: "CE сертифицирани продукти, съответстващи на международните стандарти",
    
    categories: {
      filling: "Машини за пълнене",
      packaging: "Машини за опаковане",
      labeling: "Машини за етикетиране",
      automation: "Решения за автоматизация",
      hotFoilStamping: "Горещо фолио щамповане",
      screenPrinting: "Ситопечат",
      shrinkSleeving: "Термосвиваеми ръкави",
      assemblyLine: "Сглобителни линии"
    },
    
    machines: {
      volumetricFilling: "Волуметрична машина за пълнене",
      peristalticFilling: "Перисталтична помпа за пълнене",
      servoFilling: "Серво контролирано пълнене",
      liquidFilling: "Машина за пълнене с течности",
      rotaryCanFilling: "Ротационна машина за пълнене на консерви",
      shrinkPackaging: "Машина за термосвиваемо опаковане",
      cartonPackaging: "Система за опаковане в картонени кутии",
      rollLabeler: "Апликатор за етикети на ролка",
      lineAutomation: "Система за автоматизация на линията"
    }
  }
};

export function getTranslation(language: Language): Translations {
  return translations[language];
}