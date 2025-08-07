import { useState } from "react";
import { Link } from "wouter";
import { useLanguage } from "@/context/LanguageContext";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

// Diller
const languages = [
  { code: "tr", name: "Türkçe", flag: "🇹🇷" },
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "bg", name: "Български", flag: "🇧🇬" }
];

export default function MobileMenu({ isOpen, setIsOpen }: MobileMenuProps) {
  const { language, setLanguage, t } = useLanguage();
  const [aboutSubmenuOpen, setAboutSubmenuOpen] = useState(false);
  return (
    <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`} id="mobile-menu">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <Link 
          href="/" 
          className="flex items-center px-4 py-3 rounded-md text-lg font-medium text-primary bg-blue-50"
          onClick={() => setIsOpen(false)}
        >
          <i className="ri-home-line mr-3 text-primary"></i>
          {t.home}
        </Link>
        <Link 
          href="/products" 
          className="flex items-center px-4 py-3 rounded-md text-lg font-medium text-gray-700 hover:text-primary hover:bg-blue-50"
          onClick={() => setIsOpen(false)}
        >
          <i className="ri-stack-line mr-3 text-gray-500"></i>
          {t.ourProducts}
        </Link>

        <div className="space-y-1">
          <div className="flex items-center">
            <Link
              href="/about"
              className={`flex flex-1 items-center px-4 py-3 rounded-l-md text-lg font-medium ${aboutSubmenuOpen ? 'text-primary bg-blue-50' : 'text-gray-700 hover:text-primary hover:bg-blue-50'}`}
              onClick={() => setIsOpen(false)}
            >
              <i className={`ri-information-line mr-3 ${aboutSubmenuOpen ? 'text-primary' : 'text-gray-500'}`}></i>
              {t.about}
            </Link>
            <button 
              className={`flex items-center justify-center px-3 py-3 h-full rounded-r-md text-lg ${aboutSubmenuOpen ? 'text-primary bg-blue-50' : 'text-gray-700 hover:text-primary hover:bg-blue-50'}`}
              onClick={() => setAboutSubmenuOpen(!aboutSubmenuOpen)}
              aria-label={aboutSubmenuOpen ? "Alt menüyü kapat" : "Alt menüyü aç"}
            >
              <i className={`${aboutSubmenuOpen ? 'ri-arrow-up-s-line text-primary' : 'ri-arrow-down-s-line text-gray-500'} transition-transform duration-200`}></i>
            </button>
          </div>
          
          {aboutSubmenuOpen && (
            <div className="pl-10 space-y-1 border-l-2 border-primary/20 ml-4 animate-fadeIn">
              <Link 
                href="/about/vision" 
                className="flex items-center px-4 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-blue-50"
                onClick={() => setIsOpen(false)}
              >
                <i className="ri-eye-line mr-3 text-primary/70"></i>
                {t.ourVision}
              </Link>
              <Link 
                href="/about/mission" 
                className="flex items-center px-4 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-blue-50"
                onClick={() => setIsOpen(false)}
              >
                <i className="ri-flag-line mr-3 text-primary/70"></i>
                {t.ourMission}
              </Link>
              <Link 
                href="/about/quality-policy" 
                className="flex items-center px-4 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-blue-50"
                onClick={() => setIsOpen(false)}
              >
                <i className="ri-award-line mr-3 text-primary/70"></i>
                {t.ourQualityPolicy}
              </Link>
            </div>
          )}
        </div>
        <Link 
          href="/contact" 
          className="flex items-center px-4 py-3 rounded-md text-lg font-medium text-gray-700 hover:text-primary hover:bg-blue-50"
          onClick={() => setIsOpen(false)}
        >
          <i className="ri-contacts-line mr-3 text-gray-500"></i>
          {t.contact}
        </Link>
      </div>
      
      <div className="pt-4 pb-3 border-t border-gray-200">
        <div className="flex items-center px-5">
          <div className="flex-shrink-0">
            <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
              <i className="ri-phone-line text-white text-xl"></i>
            </div>
          </div>
          <div className="ml-3">
            <div className="text-base font-medium text-gray-800">{t.contactUs}</div>
            <div className="text-sm font-medium text-gray-500">+905397691954</div>
          </div>
        </div>
        
        <div className="mt-3 px-2 space-y-2">
          <a 
            href="mailto:info@berkomakina.com" 
            className="flex items-center px-4 py-2.5 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-blue-50"
            onClick={() => setIsOpen(false)}
          >
            <i className="ri-mail-line mr-3 text-primary text-lg"></i>
            info@berkomakina.com
          </a>
          <a 
            href="https://maps.google.com" 
            className="flex items-center px-4 py-2.5 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-blue-50"
            onClick={() => setIsOpen(false)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-map-pin-line mr-3 text-primary text-lg"></i>
{t.addressInfo}
          </a>
          <Link 
            href="/contact" 
            className="flex items-center px-4 py-2.5 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-blue-50"
            onClick={() => setIsOpen(false)}
          >
            <i className="ri-customer-service-line mr-3 text-primary text-lg"></i>
{t.callUsButton}
          </Link>
        </div>
        
        <div className="mt-4 px-4 py-3 border-t border-gray-200 bg-gray-50">
          <div className="flex flex-col">
            <h3 className="flex items-center text-gray-800 font-medium text-base mb-3">
              <i className="ri-global-line mr-2 text-primary"></i>
{t.selectLanguage}
            </h3>
            <div className="grid grid-cols-1 gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code as any)}
                  className={`flex items-center px-4 py-2.5 rounded-md ${
                    language === lang.code
                      ? "bg-primary/10 text-primary font-medium border border-primary/20"
                      : "hover:bg-gray-100 text-gray-700 border border-transparent"
                  }`}
                >
                  <span className="mr-3 text-lg">{lang.flag}</span> 
                  <span className="font-medium">{lang.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
