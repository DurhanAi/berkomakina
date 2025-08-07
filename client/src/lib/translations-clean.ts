export type Language = "tr" | "en" | "bg";

export const translations = {
  tr: {
    // Header
    home: "Ana Sayfa",
    about: "Hakkımızda",
    products: "Ürünler",
    contact: "İletişim",
    vision: "Vizyon",
    mission: "Misyon",
    qualityPolicy: "Kalite Politikası",

    // Homepage
    heroTitle: "Endüstriyel Dolum ve Paketleme Makineleri",
    heroSubtitle:
      "Gıda, içecek, kozmetik, ilaç ve kimya sektörleri için yenilikçi çözümler sunuyoruz.",
    whyUs: "Neden Berko Machine?",
    localProduction: "Yerli Üretim",
    localProductionDesc:
      "Türkiye'de tasarlanıp üretilen yüksek kaliteli dolum makineleri",
    support24x7: "7/24 Teknik Destek",
    support24x7Desc: "Kesintisiz teknik servis ve bakım hizmetleri",
    customSolutions: "Özel Çözümler",
    customSolutionsDesc: "İhtiyaçlarınıza özel tasarlanmış dolum makineleri",
    qualityAssurance: "Kalite Güvencesi",
    qualityAssuranceDesc:
      "CE belgeli ve uluslararası standartlara uygun ürünler",

    // CTA Section
    ctaTitle: "Projeniz İçin Teklif Alın",
    ctaSubtitle:
      "Uzman ekibimizle iletişime geçin ve size en uygun çözümü bulalım.",
    ctaButton: "İletişime Geçin",

    // Language
    selectLanguage: "Dil Seçin",
    ourProducts: "Ürünlerimiz",
    ourVision: "Vizyonumuz",
    ourMission: "Misyonumuz",
    ourQualityPolicy: "Kalite Politikamız",
    contactUs: "İletişim",
    addressInfo: "Adres Bilgileri",

    // Product Names and Descriptions
    volumetricFillingMachine: "Volumetrik Dolum Makinesi",
    volumetricFillingDesc:
      "Düşük ve orta viskoziteli sıvılar için yüksek hassasiyetli dolum makinesi.",
    peristalticFillingMachine: "Peristaltik Pompali Dolum",
    peristalticFillingDesc:
      "Yüksek viskoziteli sıvılar ve kremler için ideal dolum sistemi.",
    servoFillingSystem: "Servo Kontrollü Dolum Sistemi",
    servoFillingDesc: "Yüksek hassasiyetli, hızlı ve esnek dolum çözümü.",

    // Features
    fillingCapacity5to500: "5-500ml dolum kapasitesi",
    bottlesPerHour3600: "Saatte 3600 şişeye kadar dolum",
    stainlessSteel: "Paslanmaz çelik gövde",
    plcControl: "PLC kontrol sistemi",
    easyMaintenance: "Kolay temizlik ve bakım",
    fillingCapacity10to1000: "10-1000ml dolum kapasitesi",
    bottlesPerHour2400: "Saatte 2400 şişeye kadar dolum",
    easyHoseChange: "Kolay hortum değişimi",
    autoCleanFunction: "Otomatik temizlik fonksiyonu",
    digitalControlPanel: "Dijital kontrol paneli",
    fillingCapacity1to5000: "1-5000ml dolum kapasitesi",
    bottlesPerHour6000: "Saatte 6000 şişeye kadar dolum",
    precisionRate: "±%0.5 hassasiyet oranı",
    touchscreenInterface: "Dokunmatik ekran arayüzü",
    autoFormatChange: "Otomatik format değişimi",

    // Additional Product Names
    monoblokRinserFillerCapper: "Monoblok Yıkama-Dolum-Kapatma",
    monoblokDesc: "Küçük ve orta ölçekli üretim için kompakt dolum hattı.",
    shrinkPackagingMachine: "Shrink Paketleme Makinesi",
    shrinkPackagingDesc: "Otomatik shrink film paketleme sistemi.",
    rollLabelApplicator: "Rulo Etiket Uygulayıcı",
    rollLabelDesc: "Yüksek hızlı etiket uygulama sistemi.",
    lineAutomationSystem: "Hat Otomasyon Sistemi",
    lineAutomationDesc: "Tam entegre üretim hattı kontrolü.",
    rotaryCanFillingMachine: "Rotary Teneke Dolum Makinesi",
    rotaryCanDesc: "Yüksek kapasiteli teneke ve konserve dolum sistemi.",
    hotFoilStampingMachine: "Hot Foil Stamping Makinesi",
    screenPrintingSystem: "Screen Printing Sistemi",
    shrinkSleevingMachine: "Shrink Sleeving Makinesi",
    shrinkSleevingDesc: "Tam çevre etiketleme shrink sleeve sistemi.",
    advancedLabelingSystem: "Gelişmiş Etiketleme Sistemi",
    advancedLabelingSystemDesc:
      "Çok fonksiyonlu etiketleme ve kontrol sistemi.",
    assemblyLineMachine: "Assembly Line Makinesi",
    assemblyLineMachineDesc: "Tam otomatik montaj hattı sistemi.",

    // View Details
    viewDetails: "Detayları Görüntüle",

    // Products Page
    productsHeroTitle: "Endüstriyel Dolum ve Paketleme Çözümleri",
    productsHeroSubtitle:
      "Gıda, içecek, kozmetik, ilaç ve kimya sektörleri için kapsamlı makine yelpazesi",
    productCategories: "Ürün Kategorileri",
    productCategoriesSubtitle:
      "İhtiyaçlarınıza uygun çözümler için ürün kategorilerimizi keşfedin",

    // Product Categories
    liquidFillingTitle: "Sıvı Dolum Makineleri",
    liquidFillingDesc:
      "Çeşitli viskozitelerdeki sıvılar için hassas dolum çözümleri",
    bottleFillingTitle: "Şişe Dolum Sistemleri",
    bottleFillingDesc:
      "PET ve cam şişeler için yüksek kapasiteli dolum sistemleri",
    canFillingTitle: "Teneke Dolum Makineleri",
    canFillingDesc: "Teneke kutu ve konserve dolumu için özel sistemler",
    packagingTitle: "Paketleme Makineleri",
    packagingDesc: "Shrink film ve karton paketleme çözümleri",
    labelingTitle: "Etiketleme Sistemleri",
    labelingDesc: "Otomatik etiket uygulama ve pozisyonlama sistemleri",
    automationTitle: "Otomasyon Sistemleri",
    automationDesc: "Tam entegre üretim hattı kontrolü ve izleme",
    hotFoilTitle: "Hot Foil Stamping",
    screenPrintingTitle: "Serigrafi Baskı",
    shrinkSleeveTitle: "Shrink Sleeve",
    shrinkSleeveDesc: "Tam çevre etiketleme shrink sleeve sistemleri",
    advancedLabelingTitle: "Gelişmiş Etiketleme",
    advancedLabelingDesc: "Çok fonksiyonlu etiketleme ve kontrol sistemleri",
    assemblyLineTitle: "Montaj Hattı",
    assemblyLineDesc: "Tam otomatik montaj hattı sistemleri",

    // Custom Solution Section
    customSolutionTitle: "Özel Çözüme İhtiyacınız mı Var?",
    customSolutionSubtitle:
      "İhtiyaçlarınıza özel tasarlanmış makine çözümleri için bizimle iletişime geçin.",
    contactNowButton: "Hemen İletişime Geçin",

    // Why Berko Section
    whyBerkoTitle: "Neden Berko Makina?",
    whyBerkoSubtitle:
      "Size güvenilir ve kaliteli hizmet sunmak için çalışıyoruz",
    highQualityTitle: "Yüksek Kalite",
    highQualityDesc: "CE belgeli ve uluslararası standartlara uygun ürünler",
    technicalServiceTitle: "Teknik Servis",
    technicalServiceDesc: "7/24 teknik destek ve bakım hizmetleri",
    sparePartsTitle: "Yedek Parça",
    sparePartsDesc: "Geniş yedek parça stoğu ve hızlı tedarik",
    customerSupportTitle: "Müşteri Desteği",
    customerSupportDesc: "Uzman ekibimizle kesintisiz müşteri desteği",

    // Product Detail Categories
    liquidFillingCategoryTitle: "Sıvı Dolum Makineleri",
    liquidFillingCategoryDesc:
      "Çeşitli viskozitelerdeki sıvılar için hassas dolum çözümleri",
    bottleFillingCategoryTitle: "Şişe Dolum Sistemleri",
    bottleFillingCategoryDesc:
      "PET ve cam şişeler için yüksek kapasiteli dolum sistemleri",
    canFillingCategoryTitle: "Teneke Dolum Makineleri",
    canFillingCategoryDesc:
      "Teneke kutu ve konserve dolumu için özel sistemler",
    packagingCategoryTitle: "Paketleme Makineleri",
    packagingCategoryDesc: "Shrink film ve karton paketleme çözümleri",
    labelingCategoryTitle: "Etiketleme Sistemleri",
    labelingCategoryDesc: "Otomatik etiket uygulama ve pozisyonlama sistemleri",
    automationCategoryTitle: "Otomasyon Sistemleri",
    automationCategoryDesc: "Tam entegre üretim hattı kontrolü ve izleme",
    hotFoilCategoryTitle: "Hot Foil Stamping",
    hotFoilCategoryDesc: "Lüks paketleme için folyo yaldızlama sistemleri",
    screenPrintingCategoryTitle: "Serigrafi Baskı",
    screenPrintingCategoryDesc: "Yüksek kaliteli serigrafi baskı çözümleri",
    shrinkSleeveCategoryTitle: "Shrink Sleeve",
    shrinkSleeveCategoryDesc: "Tam çevre etiketleme shrink sleeve sistemleri",
    advancedLabelingCategoryTitle: "Gelişmiş Etiketleme",
    advancedLabelingCategoryDesc:
      "Çok fonksiyonlu etiketleme ve kontrol sistemleri",
    assemblyLineCategoryTitle: "Montaj Hattı",
    assemblyLineCategoryDesc: "Tam otomatik montaj hattı sistemleri",

    // Product Features
    bottles1000to3000PerHour: "Saatte 1000-3000 şişe kapasitesi",
    petGlassHdpeCompatible: "PET, Cam ve HDPE uyumluluğu",
    autoFormatChangeSystem: "Otomatik format değişim sistemi",
    lowSpaceRequirement: "Düşük alan gereksinimi",
    easyUseAndMaintenance: "Kolay kullanım ve bakım",
    multiProductSizeSupport: "Çoklu ürün boyutu desteği",
    autoFilmCutting: "Otomatik film kesme",
    heatTunnelIntegration: "Isı tüneli entegrasyonu",
    highSpeedCapacity: "Yüksek hız kapasitesi",
    energyEfficient: "Enerji verimli",
    bottles6000PerHour: "Saatte 6000 şişe kapasitesi",
    autoLabelPosition: "Otomatik etiket pozisyonlama",
    multiLabelSize: "Çoklu etiket boyutu",
    precisePositioning: "Hassas pozisyonlama",
    easyLabelChange: "Kolay etiket değişimi",
    plcBasedControl: "PLC tabanlı kontrol",
    hmiTouchPanel: "HMI dokunmatik panel",
    remoteMonitoring: "Uzaktan izleme",
    errorDiagnosisSystem: "Hata teşhis sistemi",
    productionReporting: "Üretim raporlama",
    cans12000PerHour: "Saatte 12000 kutu kapasitesi",
    autoCapPlacement: "Otomatik kapak yerleştirme",
    vacuumFillingSystem: "Vakum dolum sistemi",
    weightControl: "Ağırlık kontrolü",
    bottles18000PerHour: "Saatte 18000 şişe kapasitesi",
    servoControlledFilmFeed: "Servo kontrollü film besleme",
    autoCutAndApply: "Otomatik kesme ve uygulama",
    multiLabelApplication: "Çoklu etiket uygulama",
    visualControlSystem: "Görsel kontrol sistemi",
    codingIntegration: "Kodlama entegrasyonu",
    autoReject: "Otomatik red",
    qualityControl: "Kalite kontrolü",
    modularDesign: "Modüler tasarım",
    flexibleConfiguration: "Esnek konfigürasyon",
    qualityControlIntegration: "Kalite kontrol entegrasyonu",
    fastFormatChange: "Hızlı format değişimi",
    productionMonitoring: "Üretim izleme",

    // Navigation
    notFound: "Sayfa Bulunamadı",
    notFoundDesc: "Aradığınız sayfa mevcut değil",
    backToProducts: "Ürünlere Dön",
    getQuote: "Teklif Al",
    requestQuote: "Teklif Talep Et",
    contactForQuote: "Teklif için iletişime geçin",
    downloadCatalog: "Katalog İndir",
    productsTab: "Ürünler",
    features: "Özellikler",
    technicalSupport: "Teknik Destek",

    // Hot Foil Stamping Features
    hotFoilStampingDesc: "Lüks paketleme için folyo yaldızlama sistemleri",
    goldSilverFoilSupport: "Altın ve gümüş folyo desteği",
    preciseTemperatureControl: "Hassas sıcaklık kontrolü",
    multiDesignMolds: "Çoklu tasarım kalıpları",
    autoFeeding: "Otomatik besleme",
    highQualityPrint: "Yüksek kalite baskı",

    // Screen Printing Features
    screenPrintingSystemDesc: "Yüksek kaliteli serigrafi baskı çözümleri",
    multiColorPrint: "Çok renkli baskı",
    autoMoldChange: "Otomatik kalıp değişimi",
    uvDryingSystem: "UV kurutma sistemi",
    preciseRegistration: "Hassas kayıt",
    fastSetup: "Hızlı kurulum",

    // Additional Features
    hygienicDesign: "Hijyenik tasarım",

    // Footer
    companyDescription:
      "Endüstriyel dolum ve paketleme makineleri konusunda uzman, yenilikçi çözümler sunan güvenilir partner.",
    liquidFillingMachines: "Sıvı Dolum Makineleri",
    bottleFillingLines: "Şişe Dolum Hatları",
    canFillingSystems: "Teneke Dolum Sistemleri",
    packagingSystems: "Paketleme Sistemleri",
    labelingMachines: "Etiketleme Makineleri",
    automationSolutions: "Otomasyon Çözümleri",

    // Vision Page
    visionTitle: "Vizyonumuz",
    visionDetailTitle1: "Küresel Liderlik",
    visionDetailDesc1:
      "Dolum makineleri sektöründe dünya çapında tanınan, güvenilir ve yenilikçi bir marka olmak.",
    visionDetailTitle2: "Teknolojik Öncülük",
    visionDetailDesc2:
      "En son teknolojileri kullanarak, müşterilerimizin ihtiyaçlarını karşılayan yenilikçi çözümler geliştirmek.",
    visionDetailTitle3: "Sürdürülebilir Büyüme",
    visionDetailDesc3:
      "Çevre dostu üretim süreçleri ile sürdürülebilir kalkınmaya katkıda bulunmak.",

    // Mission Page
    missionTitle: "Misyonumuz",
    missionDetailTitle1: "Müşteri Odaklı Hizmet",
    missionDetailDesc1:
      "Müşterilerimizin beklentilerini aşan kaliteli ürünler ve hizmetler sunmak.",
    missionDetailTitle2: "Kalite Güvencesi",
    missionDetailDesc2:
      "En yüksek kalite standartlarında ürün üretimi ve hizmet sunumu.",
    missionDetailTitle3: "İnovasyon",
    missionDetailDesc3:
      "Sürekli araştırma ve geliştirme ile sektörde öncü çözümler üretmek.",
    missionDetailTitle4: "Müşteri Memnuniyeti",
    missionDetailDesc4:
      "7/24 teknik destek ve satış sonrası hizmetlerle müşteri memnuniyetini sağlamak.",

    // Quality Policy Page
    qualityPolicyTitle: "Kalite Politikamız",
    qualityCommitmentTitle: "Kalite Taahhüdümüz",
    qualityCommitmentDesc:
      "Berko Makina olarak, kaliteyi her zaman önceliğimiz olarak görür ve müşterilerimize en yüksek standartlarda ürünler sunmayı taahhüt ederiz.",
    qualityStandardsTitle: "Kalite Standartlarımız",
    qualityStandard1: "CE Belgeli Ürünler:",
    qualityStandardDesc1:
      "Tüm ürünlerimiz Avrupa standartlarına uygun olarak üretilir ve CE belgeli olarak teslim edilir.",
    qualityStandard2: "Kaliteli Malzeme:",
    qualityStandardDesc2:
      "Sadece 304 ve 316 kalite paslanmaz çelik malzemeler kullanarak uzun ömürlü makineler üretiyoruz.",
    qualityStandard3: "Test ve Kontrol:",
    qualityStandardDesc3:
      "Her makine üretim sonrası kapsamlı test süreçlerinden geçirilir.",
    qualityStandard4: "Sürekli İyileştirme:",
    qualityStandardDesc4:
      "Müşteri geri bildirimlerini değerlendirerek ürünlerimizi sürekli geliştiriyoruz.",
    qualityStandard5: "Eğitimli Personel:",
    qualityStandardDesc5:
      "Alanında uzman ve sürekli eğitim alan personelimizle hizmet veriyoruz.",
    qualityGuaranteeTitle: "Kalite Garantimiz",
    qualityGuaranteeDesc:
      "Tüm ürünlerimiz 1 yıl garanti kapsamında olup, kalite sorunlarında teknik destek sağlanır.",
    warrantyInfo: "1 Yıl Garanti",
    backToAbout: "Hakkımızda'ya Dön",
    callUsButton: "Bizi Arayın",

    // About Page
    aboutTitle: "Hakkımızda",
    aboutDescription:
      "Berko Makina, 2005 yılından bu yana dolum makineleri sektöründe faaliyet gösteren yenilikçi ve güvenilir bir üreticidir. Müşteri memnuniyetini her zaman ön planda tutarak, kaliteli ve dayanıklı makineler üretmeyi hedefliyoruz.",
    aboutCompanyTitle: "Firmamız Hakkında",
    aboutParagraph1:
      "Berko Makina, 2005 yılında İstanbul'da kurulmuş olup, dolum makineleri sektöründe uzmanlaşmış bir firmadır. Kurulduğumuz günden bu yana, müşterilerimize en kaliteli ve en uygun fiyatlı ürünleri sunmayı ilke edindik.",
    aboutParagraph2:
      "Firmamız, gıda, kimya, kozmetik ve ilaç sektörlerine yönelik dolum makineleri üretmektedir. Ürünlerimiz arasında sıvı dolum makineleri, toz dolum makineleri, kapak kapatma makineleri ve etiketleme makineleri bulunmaktadır.",
    aboutParagraph3:
      "Uzman ekibimiz ve güçlü teknik altyapımız sayesinde, müşterilerimizin ihtiyaçlarına uygun özel çözümler sunuyoruz. Satış sonrası hizmetlerimiz ile de müşterilerimizin her zaman yanındayız.",

    // Contact Page
    contactTitle: "İletişim",
    contactSubtitle:
      "Sorularınız veya detaylı bilgi için bizimle iletişime geçin.",
    contactInfo: "İletişim Bilgileri",
    phone: "Telefon",
    email: "E-posta",
    address: "Adres",
    workingHours: "Çalışma Saatleri",
    workingHoursText:
      "Pazartesi - Cuma: 08:30 - 18:00\nCumartesi: 09:00 - 14:00",
    contactForm: "İletişim Formu",
    nameLabel: "Ad Soyad",
    namePlaceholder: "Ad Soyad",
    emailLabel: "E-posta",
    emailPlaceholder: "E-posta adresi",
    phoneLabel: "Telefon",
    phonePlaceholder: "Telefon numarası",
    subjectLabel: "Konu",
    subjectPlaceholder: "Konu",
    messageLabel: "Mesajınız",
    messagePlaceholder: "Mesajınız",
    sendButton: "Gönder",
    openInGoogleMaps: "Google Maps'te Aç",
    messageSent: "Mesajınız gönderildi",
    messageDescription: "En kısa sürede size dönüş yapacağız.",

    // Form Validation Messages
    nameMinError: "İsim en az 2 karakter olmalıdır",
    emailError: "Lütfen geçerli bir e-posta adresi girin",
    phoneMinError: "Lütfen geçerli bir telefon numarası girin",
    subjectMinError: "Konu en az 2 karakter olmalıdır",
    messageMinError: "Mesaj en az 10 karakter olmalıdır",
  },

  en: {
    // Header
    home: "Home",
    about: "About",
    products: "Products",
    contact: "Contact",
    vision: "Vision",
    mission: "Mission",
    qualityPolicy: "Quality Policy",

    // Homepage
    heroTitle: "Industrial Filling and Packaging Machines",
    heroSubtitle:
      "We offer innovative solutions for food, beverage, cosmetic, pharmaceutical and chemical industries.",
    whyUs: "Why Berko Machine?",
    localProduction: "Local Production",
    localProductionDesc:
      "High quality filling machines designed and manufactured in Turkey",
    support24x7: "24/7 Technical Support",
    support24x7Desc: "Uninterrupted technical service and maintenance services",
    customSolutions: "Custom Solutions",
    customSolutionsDesc: "Filling machines specially designed for your needs",
    qualityAssurance: "Quality Assurance",
    qualityAssuranceDesc:
      "CE certified products that comply with international standards",

    // CTA Section
    ctaTitle: "Get a Quote for Your Project",
    ctaSubtitle:
      "Contact our expert team and let us find the most suitable solution for you.",
    ctaButton: "Contact Us",

    // Language
    selectLanguage: "Select Language",
    ourProducts: "Our Products",
    ourVision: "Our Vision",
    ourMission: "Our Mission",
    ourQualityPolicy: "Our Quality Policy",
    contactUs: "Contact Us",
    addressInfo: "Address Information",

    // Product Names and Descriptions
    volumetricFillingMachine: "Volumetric Filling Machine",
    volumetricFillingDesc:
      "High precision filling machine for low and medium viscosity liquids.",
    peristalticFillingMachine: "Peristaltic Pump Filling",
    peristalticFillingDesc:
      "Ideal filling system for high viscosity liquids and creams.",
    servoFillingSystem: "Servo Controlled Filling System",
    servoFillingDesc: "High precision, fast and flexible filling solution.",

    // Features
    fillingCapacity5to500: "5-500ml filling capacity",
    bottlesPerHour3600: "Up to 3600 bottles per hour filling",
    stainlessSteel: "Stainless steel body",
    plcControl: "PLC control system",
    easyMaintenance: "Easy cleaning and maintenance",
    fillingCapacity10to1000: "10-1000ml filling capacity",
    bottlesPerHour2400: "Up to 2400 bottles per hour filling",
    easyHoseChange: "Easy hose replacement",
    autoCleanFunction: "Automatic cleaning function",
    digitalControlPanel: "Digital control panel",
    fillingCapacity1to5000: "1-5000ml filling capacity",
    bottlesPerHour6000: "Up to 6000 bottles per hour filling",
    precisionRate: "±0.5% precision rate",
    touchscreenInterface: "Touchscreen interface",
    autoFormatChange: "Automatic format change",

    // Additional Product Names
    monoblokRinserFillerCapper: "Monoblock Rinser-Filler-Capper",
    monoblokDesc: "Compact filling line for small and medium scale production.",
    shrinkPackagingMachine: "Shrink Packaging Machine",
    shrinkPackagingDesc: "Automatic shrink film packaging system.",
    rollLabelApplicator: "Roll Label Applicator",
    rollLabelDesc: "High-speed label application system.",
    lineAutomationSystem: "Line Automation System",
    lineAutomationDesc: "Fully integrated production line control.",
    rotaryCanFillingMachine: "Rotary Can Filling Machine",
    rotaryCanDesc: "High capacity can and preserve filling system.",
    hotFoilStampingMachine: "Hot Foil Stamping Machine",
    screenPrintingSystem: "Screen Printing System",
    shrinkSleevingMachine: "Shrink Sleeving Machine",
    shrinkSleevingDesc: "Full wrap labeling shrink sleeve system.",
    advancedLabelingSystem: "Advanced Labeling System",
    advancedLabelingSystemDesc: "Multi-functional labeling and control system.",
    assemblyLineMachine: "Assembly Line Machine",
    assemblyLineMachineDesc: "Fully automatic assembly line system.",

    // View Details
    viewDetails: "View Details",

    // Products Page
    productsHeroTitle: "Industrial Filling and Packaging Solutions",
    productsHeroSubtitle:
      "Comprehensive machine range for food, beverage, cosmetic, pharmaceutical and chemical industries",
    productCategories: "Product Categories",
    productCategoriesSubtitle:
      "Discover our product categories for solutions that suit your needs",

    // Product Categories
    liquidFillingTitle: "Liquid Filling Machines",
    liquidFillingDesc:
      "Precise filling solutions for liquids of various viscosities",
    bottleFillingTitle: "Bottle Filling Systems",
    bottleFillingDesc:
      "High capacity filling systems for PET and glass bottles",
    canFillingTitle: "Can Filling Machines",
    canFillingDesc: "Special systems for tin can and preserve filling",
    packagingTitle: "Packaging Machines",
    packagingDesc: "Shrink film and carton packaging solutions",
    labelingTitle: "Labeling Systems",
    labelingDesc: "Automatic label application and positioning systems",
    automationTitle: "Automation Systems",
    automationDesc: "Fully integrated production line control and monitoring",
    hotFoilTitle: "Hot Foil Stamping",
    screenPrintingTitle: "Screen Printing",
    shrinkSleeveTitle: "Shrink Sleeve",
    shrinkSleeveDesc: "Full wrap labeling shrink sleeve systems",
    advancedLabelingTitle: "Advanced Labeling",
    advancedLabelingDesc: "Multi-functional labeling and control systems",
    assemblyLineTitle: "Assembly Line",
    assemblyLineDesc: "Fully automatic assembly line systems",

    // Custom Solution Section
    customSolutionTitle: "Need a Custom Solution?",
    customSolutionSubtitle:
      "Contact us for machine solutions specially designed for your needs.",
    contactNowButton: "Contact Now",

    // Why Berko Section
    whyBerkoTitle: "Why Berko Makina?",
    whyBerkoSubtitle:
      "We work to provide you with reliable and quality service",
    highQualityTitle: "High Quality",
    highQualityDesc:
      "CE certified products that comply with international standards",
    technicalServiceTitle: "Technical Service",
    technicalServiceDesc: "24/7 technical support and maintenance services",
    sparePartsTitle: "Spare Parts",
    sparePartsDesc: "Wide spare parts stock and fast supply",
    customerSupportTitle: "Customer Support",
    customerSupportDesc: "Uninterrupted customer support with our expert team",

    // Product Detail Categories
    liquidFillingCategoryTitle: "Liquid Filling Machines",
    liquidFillingCategoryDesc:
      "Precise filling solutions for liquids of various viscosities",
    bottleFillingCategoryTitle: "Bottle Filling Systems",
    bottleFillingCategoryDesc:
      "High capacity filling systems for PET and glass bottles",
    canFillingCategoryTitle: "Can Filling Machines",
    canFillingCategoryDesc: "Special systems for tin can and preserve filling",
    packagingCategoryTitle: "Packaging Machines",
    packagingCategoryDesc: "Shrink film and carton packaging solutions",
    labelingCategoryTitle: "Labeling Systems",
    labelingCategoryDesc: "Automatic label application and positioning systems",
    automationCategoryTitle: "Automation Systems",
    automationCategoryDesc:
      "Fully integrated production line control and monitoring",
    hotFoilCategoryTitle: "Hot Foil Stamping",
    hotFoilCategoryDesc: "Foil stamping systems for luxury packaging",
    screenPrintingCategoryTitle: "Screen Printing",
    screenPrintingCategoryDesc: "High quality screen printing solutions",
    shrinkSleeveCategoryTitle: "Shrink Sleeve",
    shrinkSleeveCategoryDesc: "Full wrap labeling shrink sleeve systems",
    advancedLabelingCategoryTitle: "Advanced Labeling",
    advancedLabelingCategoryDesc:
      "Multi-functional labeling and control systems",
    assemblyLineCategoryTitle: "Assembly Line",
    assemblyLineCategoryDesc: "Fully automatic assembly line systems",

    // Product Features
    bottles1000to3000PerHour: "1000-3000 bottles per hour capacity",
    petGlassHdpeCompatible: "PET, Glass and HDPE compatibility",
    autoFormatChangeSystem: "Automatic format change system",
    lowSpaceRequirement: "Low space requirement",
    easyUseAndMaintenance: "Easy use and maintenance",
    multiProductSizeSupport: "Multi product size support",
    autoFilmCutting: "Automatic film cutting",
    heatTunnelIntegration: "Heat tunnel integration",
    highSpeedCapacity: "High speed capacity",
    energyEfficient: "Energy efficient",
    bottles6000PerHour: "6000 bottles per hour capacity",
    autoLabelPosition: "Automatic label positioning",
    multiLabelSize: "Multi label size",
    precisePositioning: "Precise positioning",
    easyLabelChange: "Easy label change",
    plcBasedControl: "PLC based control",
    hmiTouchPanel: "HMI touch panel",
    remoteMonitoring: "Remote monitoring",
    errorDiagnosisSystem: "Error diagnosis system",
    productionReporting: "Production reporting",
    cans12000PerHour: "12000 cans per hour capacity",
    autoCapPlacement: "Automatic cap placement",
    vacuumFillingSystem: "Vacuum filling system",
    weightControl: "Weight control",
    bottles18000PerHour: "18000 bottles per hour capacity",
    servoControlledFilmFeed: "Servo controlled film feed",
    autoCutAndApply: "Auto cut and apply",
    multiLabelApplication: "Multi label application",
    visualControlSystem: "Visual control system",
    codingIntegration: "Coding integration",
    autoReject: "Auto reject",
    qualityControl: "Quality control",
    modularDesign: "Modular design",
    flexibleConfiguration: "Flexible configuration",
    qualityControlIntegration: "Quality control integration",
    fastFormatChange: "Fast format change",
    productionMonitoring: "Production monitoring",

    // Navigation
    notFound: "Page Not Found",
    notFoundDesc: "The page you are looking for does not exist",
    backToProducts: "Back to Products",
    getQuote: "Get Quote",
    requestQuote: "Request Quote",
    contactForQuote: "Contact for quote",
    downloadCatalog: "Download Catalog",
    productsTab: "Products",
    features: "Features",
    technicalSupport: "Technical Support",

    // Hot Foil Stamping Features
    hotFoilStampingDesc: "Foil stamping systems for luxury packaging",
    goldSilverFoilSupport: "Gold and silver foil support",
    preciseTemperatureControl: "Precise temperature control",
    multiDesignMolds: "Multi design molds",
    autoFeeding: "Auto feeding",
    highQualityPrint: "High quality print",

    // Screen Printing Features
    screenPrintingSystemDesc: "High quality screen printing solutions",
    multiColorPrint: "Multi color print",
    autoMoldChange: "Auto mold change",
    uvDryingSystem: "UV drying system",
    preciseRegistration: "Precise registration",
    fastSetup: "Fast setup",

    // Additional Features
    hygienicDesign: "Hygienic design",

    // Footer
    companyDescription:
      "Trusted partner providing innovative solutions in industrial filling and packaging machinery.",
    liquidFillingMachines: "Liquid Filling Machines",
    bottleFillingLines: "Bottle Filling Lines",
    canFillingSystems: "Can Filling Systems",
    packagingSystems: "Packaging Systems",
    labelingMachines: "Labeling Machines",
    automationSolutions: "Automation Solutions",

    // Vision Page
    visionTitle: "Our Vision",
    visionDetailTitle1: "Global Leadership",
    visionDetailDesc1:
      "To be a globally recognized, reliable and innovative brand in the filling machines sector.",
    visionDetailTitle2: "Technological Leadership",
    visionDetailDesc2:
      "To develop innovative solutions that meet our customers' needs using the latest technologies.",
    visionDetailTitle3: "Sustainable Growth",
    visionDetailDesc3:
      "To contribute to sustainable development with environmentally friendly production processes.",

    // Mission Page
    missionTitle: "Our Mission",
    missionDetailTitle1: "Customer-Focused Service",
    missionDetailDesc1:
      "To provide quality products and services that exceed our customers' expectations.",
    missionDetailTitle2: "Quality Assurance",
    missionDetailDesc2:
      "Product manufacturing and service delivery at the highest quality standards.",
    missionDetailTitle3: "Innovation",
    missionDetailDesc3:
      "To produce pioneering solutions in the sector through continuous research and development.",
    missionDetailTitle4: "Customer Satisfaction",
    missionDetailDesc4:
      "To ensure customer satisfaction with 24/7 technical support and after-sales services.",

    // Quality Policy Page
    qualityPolicyTitle: "Our Quality Policy",
    qualityCommitmentTitle: "Our Quality Commitment",
    qualityCommitmentDesc:
      "As Berko Makina, we always consider quality as our priority and commit to providing our customers with products of the highest standards.",
    qualityStandardsTitle: "Our Quality Standards",
    qualityStandard1: "CE Certified Products:",
    qualityStandardDesc1:
      "All our products are manufactured in accordance with European standards and delivered with CE certification.",
    qualityStandard2: "Quality Materials:",
    qualityStandardDesc2:
      "We produce long-lasting machines using only 304 and 316 grade stainless steel materials.",
    qualityStandard3: "Testing and Control:",
    qualityStandardDesc3:
      "Each machine undergoes comprehensive testing processes after production.",
    qualityStandard4: "Continuous Improvement:",
    qualityStandardDesc4:
      "We continuously improve our products by evaluating customer feedback.",
    qualityStandard5: "Trained Personnel:",
    qualityStandardDesc5:
      "We serve with our expert personnel who receive continuous training in their field.",
    qualityGuaranteeTitle: "Our Quality Guarantee",
    qualityGuaranteeDesc:
      "All our products come with a 1-year warranty, and technical support is provided for quality issues.",
    warrantyInfo: "1 Year Warranty",
    backToAbout: "Back to About",
    callUsButton: "Call Us",

    // About Page
    aboutTitle: "About Us",
    aboutDescription:
      "Berko Makina is an innovative and reliable manufacturer operating in the filling machines sector since 2005. We aim to produce quality and durable machines, always prioritizing customer satisfaction.",
    aboutCompanyTitle: "About Our Company",
    aboutParagraph1:
      "Berko Makina was established in Istanbul in 2005 and is a company specialized in the filling machines sector. Since our establishment, we have adopted the principle of offering our customers the highest quality and most affordable products.",
    aboutParagraph2:
      "Our company produces filling machines for food, chemical, cosmetic and pharmaceutical sectors. Our products include liquid filling machines, powder filling machines, capping machines and labeling machines.",
    aboutParagraph3:
      "Thanks to our expert team and strong technical infrastructure, we offer special solutions suitable for our customers' needs. We are always by our customers' side with our after-sales services.",

    // Contact Page
    contactTitle: "Contact",
    contactSubtitle: "Contact us for questions or detailed information.",
    contactInfo: "Contact Information",
    phone: "Phone",
    email: "Email",
    address: "Address",
    workingHours: "Working Hours",
    workingHoursText: "Monday - Friday: 08:30 - 18:00\nSaturday: 09:00 - 14:00",
    contactForm: "Contact Form",
    nameLabel: "Full Name",
    namePlaceholder: "Full Name",
    emailLabel: "Email",
    emailPlaceholder: "Email address",
    phoneLabel: "Phone",
    phonePlaceholder: "Phone number",
    subjectLabel: "Subject",
    subjectPlaceholder: "Subject",
    messageLabel: "Your Message",
    messagePlaceholder: "Your Message",
    sendButton: "Send",
    openInGoogleMaps: "Open in Google Maps",
    messageSent: "Your message has been sent",
    messageDescription: "We will get back to you as soon as possible.",

    // Form Validation Messages
    nameMinError: "Name must be at least 2 characters",
    emailError: "Please enter a valid email address",
    phoneMinError: "Please enter a valid phone number",
    subjectMinError: "Subject must be at least 2 characters",
    messageMinError: "Message must be at least 10 characters",
  },

  bg: {
    // Header
    home: "Начало",
    about: "За нас",
    products: "Продукти",
    contact: "Контакти",
    vision: "Визия",
    mission: "Мисия",
    qualityPolicy: "Политика за качество",

    // Homepage
    heroTitle: "Индустриални машини за пълнене и опаковане",
    heroSubtitle:
      "Предлагаме иновативни решения за хранителна, химическа, козметична и фармацевтична индустрия.",
    whyUs: "Защо Berko Machine?",
    localProduction: "Местно производство",
    localProductionDesc:
      "Висококачествени машини за пълнене, проектирани и произведени в Турция",
    support24x7: "24/7 техническа поддръжка",
    support24x7Desc: "Непрекъсната техническа поддръжка и сервизни услуги",
    customSolutions: "Персонализирани решения",
    customSolutionsDesc:
      "Машини за пълнене, специално проектирани за вашите нужди",
    qualityAssurance: "Гаранция за качество",
    qualityAssuranceDesc:
      "CE сертифицирани продукти, съответстващи на международните стандарти",

    // CTA Section
    ctaTitle: "Получете оферта за вашия проект",
    ctaSubtitle:
      "Свържете се с нашия експертен екип и нека намерим най-подходящото решение за вас.",
    ctaButton: "Свържете се с нас",

    // Language
    selectLanguage: "Изберете език",
    ourProducts: "Нашите продукти",
    ourVision: "Нашата визия",
    ourMission: "Нашата мисия",
    ourQualityPolicy: "Нашата политика за качество",
    contactUs: "Свържете се с нас",
    addressInfo: "Адресна информация",

    // Product Names and Descriptions
    volumetricFillingMachine: "Обемна машина за пълнене",
    volumetricFillingDesc:
      "Високопрецизна машина за пълнене за течности с ниска и средна вискозитет.",
    peristalticFillingMachine: "Перисталтична помпа за пълнене",
    peristalticFillingDesc:
      "Идеална система за пълнене за високовискозни течности и кремове.",
    servoFillingSystem: "Серво контролирана система за пълнене",
    servoFillingDesc: "Високопрецизно, бързо и гъвкаво решение за пълнене.",

    // View Details
    viewDetails: "Виж подробности",

    // Products Page
    productsHeroTitle: "Индустриални решения за пълнене и опаковане",
    productsHeroSubtitle:
      "Цялостна гама машини за хранителна, химическа, козметична и фармацевтична индустрия",
    productCategories: "Категории продукти",
    productCategoriesSubtitle:
      "Открийте нашите категории продукти за решения, които отговарят на вашите нужди",

    // Product Categories
    liquidFillingTitle: "Машини за пълнене на течности",
    liquidFillingDesc:
      "Прецизни решения за пълнене за течности с различна вискозитет",
    bottleFillingTitle: "Системи за пълнене на бутилки",
    bottleFillingDesc:
      "Високопроизводителни системи за пълнене за PET и стъклени бутилки",
    canFillingTitle: "Машини за пълнене на кенове",
    canFillingDesc:
      "Специални системи за пълнене на тенекиени кутии и консерви",
    packagingTitle: "Опаковъчни машини",
    packagingDesc: "Решения за опаковане със свиваем филм и картон",
    labelingTitle: "Етикетиращи системи",
    labelingDesc: "Автоматични системи за поставяне и позициониране на етикети",
    automationTitle: "Автоматизационни системи",
    automationDesc:
      "Напълно интегриран контрол и мониторинг на производствената линия",
    hotFoilTitle: "Горещо щамповане с фолио",
    screenPrintingTitle: "Ситопечат",
    shrinkSleeveTitle: "Свиваеми етикети",
    shrinkSleeveDesc: "Системи за пълно етикетиране със свиваеми етикети",
    advancedLabelingTitle: "Усъвършенствано етикетиране",
    advancedLabelingDesc: "Многофункционални системи за етикетиране и контрол",
    assemblyLineTitle: "Монтажна линия",
    assemblyLineDesc: "Напълно автоматични системи за монтажна линия",

    // Custom Solution Section
    customSolutionTitle: "Нуждаете се от персонализирано решение?",
    customSolutionSubtitle:
      "Свържете се с нас за машинни решения, специално проектирани за вашите нужди.",
    contactNowButton: "Свържете се сега",

    // Why Berko Section
    whyBerkoTitle: "Защо Berko Makina?",
    whyBerkoSubtitle:
      "Работим, за да ви предоставим надеждно и качествено обслужване",
    highQualityTitle: "Високо качество",
    highQualityDesc:
      "CE сертифицирани продукти, съответстващи на международните стандарти",
    technicalServiceTitle: "Техническо обслужване",
    technicalServiceDesc: "24/7 техническа поддръжка и сервизни услуги",
    sparePartsTitle: "Резервни части",
    sparePartsDesc: "Широк склад от резервни части и бързо доставяне",
    customerSupportTitle: "Клиентска поддръжка",
    customerSupportDesc:
      "Непрекъсната клиентска поддръжка с нашия експертен екип",

    // Product Detail Categories
    liquidFillingCategoryTitle: "Машини за пълнене на течности",
    liquidFillingCategoryDesc:
      "Прецизни решения за пълнене за течности с различна вискозитет",
    bottleFillingCategoryTitle: "Системи за пълнене на бутилки",
    bottleFillingCategoryDesc:
      "Високопроизводителни системи за пълнене за PET и стъклени бутилки",
    canFillingCategoryTitle: "Машини за пълнене на кенове",
    canFillingCategoryDesc:
      "Специални системи за пълнене на тенекиени кутии и консерви",
    packagingCategoryTitle: "Опаковъчни машини",
    packagingCategoryDesc: "Решения за опаковане със свиваем филм и картон",
    labelingCategoryTitle: "Етикетиращи системи",
    labelingCategoryDesc:
      "Автоматични системи за поставяне и позициониране на етикети",
    automationCategoryTitle: "Автоматизационни системи",
    automationCategoryDesc:
      "Напълно интегриран контрол и мониторинг на производствената линия",
    hotFoilCategoryTitle: "Горещо щамповане с фолио",
    hotFoilCategoryDesc: "Системи за щамповане с фолио за луксозни опаковки",
    screenPrintingCategoryTitle: "Ситопечат",
    screenPrintingCategoryDesc: "Висококачествени решения за ситопечат",
    shrinkSleeveCategoryTitle: "Свиваеми етикети",
    shrinkSleeveCategoryDesc:
      "Системи за пълно етикетиране със свиваеми етикети",
    advancedLabelingCategoryTitle: "Усъвършенствано етикетиране",
    advancedLabelingCategoryDesc:
      "Многофункционални системи за етикетиране и контрол",
    assemblyLineCategoryTitle: "Монтажна линия",
    assemblyLineCategoryDesc: "Напълно автоматични системи за монтажна линия",

    // Product Features
    bottles1000to3000PerHour: "Капацитет 1000-3000 бутилки в час",
    petGlassHdpeCompatible: "Съвместимост с PET, стъкло и HDPE",
    autoFormatChangeSystem: "Автоматична система за смяна на формат",
    lowSpaceRequirement: "Ниско изискване за пространство",
    easyUseAndMaintenance: "Лесна употреба и поддръжка",
    multiProductSizeSupport: "Поддръжка на множество размери продукти",
    autoFilmCutting: "Автоматично рязане на филм",
    heatTunnelIntegration: "Интегриране на топлинен тунел",
    highSpeedCapacity: "Високоскоростен капацитет",
    energyEfficient: "Енергийно ефективен",
    bottles6000PerHour: "Капацитет 6000 бутилки в час",
    autoLabelPosition: "Автоматично позициониране на етикети",
    multiLabelSize: "Множество размери етикети",
    precisePositioning: "Прецизно позициониране",
    easyLabelChange: "Лесна смяна на етикети",
    plcBasedControl: "PLC базиран контрол",
    hmiTouchPanel: "HMI сензорен панел",
    remoteMonitoring: "Дистанционно наблюдение",
    errorDiagnosisSystem: "Система за диагностика на грешки",
    productionReporting: "Отчитане на производството",
    cans12000PerHour: "Капацитет 12000 кена в час",
    autoCapPlacement: "Автоматично поставяне на капачки",
    vacuumFillingSystem: "Вакуумна система за пълнене",
    weightControl: "Контрол на теглото",
    bottles18000PerHour: "Капацитет 18000 бутилки в час",
    servoControlledFilmFeed: "Серво контролирано подаване на филм",
    autoCutAndApply: "Автоматично рязане и прилагане",
    multiLabelApplication: "Прилагане на множество етикети",
    visualControlSystem: "Визуална контролна система",
    codingIntegration: "Интегриране на кодиране",
    autoReject: "Автоматично отхвърляне",
    qualityControl: "Контрол на качеството",
    modularDesign: "Модулен дизайн",
    flexibleConfiguration: "Гъвкава конфигурация",
    qualityControlIntegration: "Интегриране на контрол на качеството",
    fastFormatChange: "Бърза смяна на формат",
    productionMonitoring: "Наблюдение на производството",

    // Navigation
    notFound: "Страницата не е намерена",
    notFoundDesc: "Страницата, която търсите, не съществува",
    backToProducts: "Обратно към продуктите",
    getQuote: "Получете оферта",
    requestQuote: "Заявете оферта",
    contactForQuote: "Свържете се за оферта",
    downloadCatalog: "Изтеглете каталог",
    productsTab: "Продукти",
    features: "Характеристики",
    technicalSupport: "Техническа поддръжка",

    // Hot Foil Stamping Features
    hotFoilStampingDesc: "Системи за щамповане с фолио за луксозни опаковки",
    goldSilverFoilSupport: "Поддръжка на златно и сребърно фолио",
    preciseTemperatureControl: "Прецизен контрол на температурата",
    multiDesignMolds: "Калъпи с множество дизайни",
    autoFeeding: "Автоматично подаване",
    highQualityPrint: "Висококачествен печат",

    // Screen Printing Features
    screenPrintingSystemDesc: "Висококачествени решения за ситопечат",
    multiColorPrint: "Многоцветен печат",
    autoMoldChange: "Автоматична смяна на калъпи",
    uvDryingSystem: "UV система за сушене",
    preciseRegistration: "Прецизна регистрация",
    fastSetup: "Бързо настройване",

    // Additional Features
    hygienicDesign: "Хигиеничен дизайн",

    // Footer
    companyDescription:
      "Надежден партньор, предоставящ иновативни решения в областта на индустриални машини за пълнене и опаковане.",
    liquidFillingMachines: "Машини за пълнене на течности",
    bottleFillingLines: "Линии за пълнене на бутилки",
    canFillingSystems: "Системи за пълнене на кенове",
    packagingSystems: "Опаковъчни системи",
    labelingMachines: "Етикетиращи машини",
    automationSolutions: "Автоматизационни решения",

    // Vision Page
    visionTitle: "Нашата визия",
    visionDetailTitle1: "Глобално лидерство",
    visionDetailDesc1:
      "Да бъдем световно признавана, надеждна и иновативна марка в сектора на машини за пълнене.",
    visionDetailTitle2: "Технологично лидерство",
    visionDetailDesc2:
      "Да разработваме иновативни решения, които отговарят на нуждите на нашите клиенти, използвайки най-новите технологии.",
    visionDetailTitle3: "Устойчив растеж",
    visionDetailDesc3:
      "Да допринасяме за устойчивото развитие с екологично чисти производствени процеси.",

    // Mission Page
    missionTitle: "Нашата мисия",
    missionDetailTitle1: "Клиентоориентирано обслужване",
    missionDetailDesc1:
      "Да предоставяме качествени продукти и услуги, които надвишават очакванията на нашите клиенти.",
    missionDetailTitle2: "Гаранция за качество",
    missionDetailDesc2:
      "Производство на продукти и предоставяне на услуги съгласно най-високите стандарти за качество.",
    missionDetailTitle3: "Иновации",
    missionDetailDesc3:
      "Да създаваме пионерски решения в сектора чрез непрекъснати изследвания и разработки.",
    missionDetailTitle4: "Удовлетвореност на клиентите",
    missionDetailDesc4:
      "Да осигуряваме удовлетвореност на клиентите с 24/7 техническа поддръжка и следпродажбени услуги.",

    // Quality Policy Page
    qualityPolicyTitle: "Нашата политика за качество",
    qualityCommitmentTitle: "Нашето ангажиране за качество",
    qualityCommitmentDesc:
      "Като Berko Makina винаги считаме качеството за наш приоритет и се ангажираме да предоставяме на нашите клиенти продукти с най-високи стандарти.",
    qualityStandardsTitle: "Нашите стандарти за качество",
    qualityStandard1: "CE сертифицирани продукти:",
    qualityStandardDesc1:
      "Всички наши продукти се произвеждат в съответствие с европейските стандарти и се доставят с CE сертификация.",
    qualityStandard2: "Качествени материали:",
    qualityStandardDesc2:
      "Произвеждаме дълготрайни машини, използвайки само неръждаема стомана от клас 304 и 316.",
    qualityStandard3: "Тестване и контрол:",
    qualityStandardDesc3:
      "Всяка машина преминава през обширни тестови процеси след производството.",
    qualityStandard4: "Непрекъснато подобрение:",
    qualityStandardDesc4:
      "Непрекъснато подобряваме нашите продукти, оценявайки обратната връзка от клиентите.",
    qualityStandard5: "Обучен персонал:",
    qualityStandardDesc5:
      "Обслужваме с нашия експертен персонал, който получава непрекъснато обучение в своята област.",
    qualityGuaranteeTitle: "Нашата гаранция за качество",
    qualityGuaranteeDesc:
      "Всички наши продукти се предлагат с 1-годишна гаранция, а в случай на проблеми с качеството се предоставя и техническа поддръжка..",
    warrantyInfo: "1 години гаранция",
    backToAbout: "Обратно към За нас",
    callUsButton: "Обадете ни се",

    // About Page
    aboutTitle: "За нас",
    aboutDescription:
      "Berko Makina е иновативен и надежден производител, работещ в сектора на машини за пълнене от 2005 година. Целим да произвеждаме висококачествени и дълготрайни машини, като винаги поставяме удовлетвореността на клиентите на първо място.",
    aboutCompanyTitle: "За нашата компания",
    aboutParagraph1:
      "Berko Makina беше основана в Истанбул през 2005 година и е компания, специализирана в сектора на машини за пълнене. От нашето основаване приехме принципа да предлагаме на нашите клиенти най-качествените и най-достъпни продукти.",
    aboutParagraph2:
      "Нашата компания произвежда машини за пълнене за хранителна, химическа, козметична и фармацевтична индустрия. Нашите продукти включват машини за пълнене на течности, машини за пълнене на прах, машини за затваряне на капачки и машини за етикетиране.",
    aboutParagraph3:
      "Благодарение на нашия експертен екип и силна техническа инфраструктура, предлагаме специални решения, подходящи за нуждите на нашите клиенти. Винаги сме до нашите клиенти с нашите услуги след продажбата.",

    // Contact Page
    contactTitle: "Контакти",
    contactSubtitle: "Свържете се с нас за въпроси или подробна информация.",
    contactInfo: "Информация за контакт",
    phone: "Телефон",
    email: "Имейл",
    address: "Адрес",
    workingHours: "Работно време",
    workingHoursText:
      "Понеделник - Петък: 08:30 - 18:00\nСъбота: 09:00 - 14:00",
    contactForm: "Формуляр за контакт",
    nameLabel: "Пълно име",
    namePlaceholder: "Пълно име",
    emailLabel: "Имейл",
    emailPlaceholder: "Имейл адрес",
    phoneLabel: "Телефон",
    phonePlaceholder: "Телефонен номер",
    subjectLabel: "Тема",
    subjectPlaceholder: "Тема",
    messageLabel: "Вашето съобщение",
    messagePlaceholder: "Вашето съобщение",
    sendButton: "Изпрати",
    openInGoogleMaps: "Отвори в Google Maps",
    messageSent: "Вашето съобщение е изпратено",
    messageDescription: "Ще се свържем с вас възможно най-скоро.",

    // Form Validation Messages
    nameMinError: "Името трябва да бъде поне 2 символа",
    emailError: "Моля, въведете валиден имейл адрес",
    phoneMinError: "Моля, въведете валиден телефонен номер",
    subjectMinError: "Темата трябва да бъде поне 2 символа",
    messageMinError: "Съобщението трябва да бъде поне 10 символа",
  },
};

export function getTranslation(language: Language) {
  return translations[language];
}
