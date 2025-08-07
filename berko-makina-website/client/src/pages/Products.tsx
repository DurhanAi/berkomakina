import { Link } from "wouter";
import { useLanguage } from "@/context/LanguageContext";

import slide1 from "@/assets/slider-image-1.svg";
import slide2 from "@/assets/slider-image-2.svg";
import slide3 from "@/assets/slider-image-3.svg";
import slide4 from "@/assets/slider-image-4.svg";
import slide5 from "@/assets/slider-image-5.svg";
import slide6 from "@/assets/slider-image-6.svg";
import slide7 from "@/assets/slider-image-7.svg";
import slide8 from "@/assets/slider-image-8.svg";
import slide9 from "@/assets/slider-image-9.svg";
import slide10 from "@/assets/slider-image-10.svg";
import slide11 from "@/assets/slider-image-11.svg";
import liquidFillingMachine from "@/assets/liquid-filling-machine.svg";

export default function Products() {
  const { t } = useLanguage();

  // Ürün kategorileri
  const productCategories = [
    {
      id: "liquid-filling",
      title: t.liquidFillingTitle,
      description: t.liquidFillingDesc,
      image: liquidFillingMachine,
    },
    {
      id: "bottle-filling",
      title: t.bottleFillingTitle,
      description: t.bottleFillingDesc,
      image: slide2,
    },
    {
      id: "can-filling",
      title: t.canFillingTitle,
      description: t.canFillingDesc,
      image: slide3,
    },
    {
      id: "packaging",
      title: t.packagingTitle,
      description: t.packagingDesc,
      image: slide4,
    },
    {
      id: "labeling",
      title: t.labelingTitle,
      description: t.labelingDesc,
      image: slide5,
    },
    {
      id: "automation",
      title: t.automationTitle,
      description: t.automationDesc,
      image: slide6,
    },
    {
      id: "hot-foil-stamping",
      title: t.hotFoilTitle,
      description: t.hotFoilDesc,
      image: slide7,
    },
    {
      id: "screen-printing",
      title: t.screenPrintingTitle,
      description: t.screenPrintingDesc,
      image: slide8,
    },
    {
      id: "shrink-sleeving",
      title: t.shrinkSleeveTitle,
      description: t.shrinkSleeveDesc,
      image: slide9,
    },
    {
      id: "advanced-labeling",
      title: t.advancedLabelingTitle,
      description: t.advancedLabelingDesc,
      image: slide10,
    },
    {
      id: "assembly-line",
      title: t.assemblyLineTitle,
      description: t.assemblyLineDesc,
      image: slide11,
    },
  ];

  return (
    <div className="bg-white py-12">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-sky-600 to-blue-700 py-16 mb-12">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] bg-fixed"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
              {t.productsHeroTitle}
            </h1>
            <p className="mt-6 text-xl text-white/80 max-w-3xl">
              {t.productsHeroSubtitle}
            </p>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Ürün kategorileri bölümü */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">{t.productCategories}</h2>
          <p className="mt-4 text-xl text-gray-600">
            {t.productCategoriesSubtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {productCategories.map((category) => (
            <Link 
              key={category.id}
              href={`/products/${category.id}`}
              className="group"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-48 object-cover object-center transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition duration-300">
                    {category.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{category.description}</p>
                  <div className="mt-4 flex items-center text-primary">
                    <span className="text-sm font-medium">{t.viewDetails}</span>
                    <i className="ri-arrow-right-line ml-1 transition group-hover:translate-x-1"></i>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 my-16">
          <div className="text-center lg:text-left lg:flex lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 lg:text-3xl">
                {t.customSolutionTitle}
              </h2>
              <p className="mt-3 text-lg text-gray-600">
                {t.customSolutionSubtitle}
              </p>
            </div>
            <div className="mt-8 lg:mt-0 lg:ml-8">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark transition duration-300"
              >
                {t.contactNowButton}
              </Link>
            </div>
          </div>
        </div>
        
        {/* Features Grid */}
        <div className="py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">{t.whyBerkoTitle}</h2>
            <p className="mt-4 text-xl text-gray-600">
              {t.whyBerkoSubtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="ri-tools-line text-2xl text-primary"></i>
              </div>
              <h3 className="text-lg font-medium text-gray-900">{t.highQualityTitle}</h3>
              <p className="mt-2 text-gray-600">{t.highQualityDesc}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="ri-settings-5-line text-2xl text-primary"></i>
              </div>
              <h3 className="text-lg font-medium text-gray-900">{t.technicalServiceTitle}</h3>
              <p className="mt-2 text-gray-600">{t.technicalServiceDesc}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="ri-database-2-line text-2xl text-primary"></i>
              </div>
              <h3 className="text-lg font-medium text-gray-900">{t.sparePartsTitle}</h3>
              <p className="mt-2 text-gray-600">{t.sparePartsDesc}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="ri-customer-service-2-line text-2xl text-primary"></i>
              </div>
              <h3 className="text-lg font-medium text-gray-900">{t.customerSupportTitle}</h3>
              <p className="mt-2 text-gray-600">{t.customerSupportDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}