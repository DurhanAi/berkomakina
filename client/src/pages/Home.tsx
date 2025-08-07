import { useState } from "react";
import ImageSlider from "@/components/ImageSlider";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Image Slider */}
      <ImageSlider />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t.heroTitle} - Türkiye'nin Önde Gelen Dolum Makineleri Üreticisi
          </h1>
          <p className="mt-2 text-xl text-gray-600 max-w-3xl mx-auto">
            {t.heroSubtitle}
          </p>
        </div>
        
        {/* Neden Biz */}
        <div className="bg-white rounded-lg shadow p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">{t.whyUs}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-tools-line text-primary text-2xl"></i>
              </div>
              <h3 className="font-semibold text-lg mb-2">{t.localProduction}</h3>
              <p className="text-gray-600">{t.localProductionDesc}</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-24-hours-line text-primary text-2xl"></i>
              </div>
              <h3 className="font-semibold text-lg mb-2">{t.support24x7}</h3>
              <p className="text-gray-600">{t.support24x7Desc}</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-award-line text-primary text-2xl"></i>
              </div>
              <h3 className="font-semibold text-lg mb-2">{t.qualityAssurance}</h3>
              <p className="text-gray-600">{t.qualityAssuranceDesc}</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-settings-line text-primary text-2xl"></i>
              </div>
              <h3 className="font-semibold text-lg mb-2">{t.customSolutions}</h3>
              <p className="text-gray-600">{t.customSolutionsDesc}</p>
            </div>
          </div>
        </div>
        
        {/* İletişim CTA */}
        <div className="bg-primary rounded-lg shadow px-8 py-10 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">{t.ctaTitle}</h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            {t.ctaSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-primary font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {t.ctaButton}
            </a>
            <a 
              href="tel:+905397691954" 
              className="bg-transparent border border-white text-white font-medium px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              <i className="ri-phone-line mr-2"></i>
              +905397691954
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
