import { useState, useEffect } from "react";
import { Link } from "wouter";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSelector from "./LanguageSelector";
import MobileMenu from "./MobileMenu";
import UserMenu from "./UserMenu";
import logoPath from "@assets/logo.png";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const { t } = useLanguage();

  // Close mobile menu if screen size changes to desktop
  useEffect(() => {
    if (!isMobile && mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }, [isMobile, mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-sky-500/80 text-white py-1 hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-2 lg:space-x-4">
            <div className="flex items-center">
              <i className="ri-phone-line mr-1"></i>
              <span className="hidden lg:inline">+90 539 769 19 54</span>
              <span className="lg:hidden">+90 539 769 19 54</span>
            </div>
            <div className="hidden md:flex items-center">
              <i className="ri-phone-line mr-1"></i>
              <span>+44 7732 946 723</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 lg:space-x-4">
            <a
              href="mailto:info@berkomakina.com"
              className="flex items-center hover:text-sky-100"
            >
              <i className="ri-mail-line mr-1"></i>
              <span className="hidden lg:inline">info@berkomakina.com</span>
              <span className="lg:hidden">Email</span>
            </a>
            <div className="flex items-center space-x-2">
              <a
                href="https://www.facebook.com/profile.php?id=61576750871800"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-sky-100 transition-colors"
              >
                <i className="ri-facebook-fill text-lg"></i>
              </a>
              <a
                href="https://www.youtube.com/@BERKOMAKİNA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-sky-100 transition-colors"
              >
                <i className="ri-youtube-fill text-lg"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex justify-between items-center px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex items-center flex-1">
              <div className="flex items-center justify-between w-full md:w-auto">
                <Link href="/" className="flex items-center group">
                  <div className="overflow-hidden transition-transform duration-300 ease-in-out group-hover:scale-110">
                    <img
                      src={logoPath}
                      alt=""
                      className="h-16 md:h-24 w-auto mr-2 md:mr-3"
                    />
                  </div>
                  <span className="text-lg md:text-2xl font-semibold text-gray-900 hidden lg:block"></span>
                </Link>
                <div className="flex items-center md:hidden space-x-2">
                  <LanguageSelector />
                  <button
                    type="button"
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-expanded={mobileMenuOpen}
                    aria-controls="mobile-menu"
                  >
                    <span className="sr-only">Menüyü aç</span>
                    {mobileMenuOpen ? (
                      <i className="ri-close-line text-2xl"></i>
                    ) : (
                      <i className="ri-menu-line text-2xl"></i>
                    )}
                  </button>
                </div>
              </div>

              {/* Desktop Navigation Menu */}
              <nav className="hidden md:flex items-center space-x-10 ml-12">
                <Link
                  href="/"
                  className="text-lg font-medium text-gray-900 hover:text-primary transition-colors relative group py-2"
                >
                  {t.home}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </Link>
                <Link
                  href="/products"
                  className="text-lg font-medium text-gray-700 hover:text-primary transition-colors relative group py-2"
                >
                  {t.products}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </Link>
                <div className="relative group">
                  <div className="flex items-center">
                    <Link
                      href="/about"
                      className="flex items-center text-lg font-medium text-gray-700 hover:text-primary transition-colors group-hover:text-primary py-2 relative"
                    >
                      {t.about}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                    </Link>
                    <svg
                      className="ml-1 h-4 w-4 text-gray-500 group-hover:text-primary transition-colors"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>

                  {/* Dropdown menu */}
                  <div className="absolute left-0 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden group-hover:block z-50 transition-all duration-200">
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                    >
                      <Link
                        href="/about/vision"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary"
                        role="menuitem"
                      >
                        <svg
                          className="mr-2 h-4 w-4 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                        {t.vision}
                      </Link>
                      <Link
                        href="/about/mission"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary"
                        role="menuitem"
                      >
                        <svg
                          className="mr-2 h-4 w-4 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                          />
                        </svg>
                        {t.mission}
                      </Link>
                      <Link
                        href="/about/quality-policy"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary"
                        role="menuitem"
                      >
                        <svg
                          className="mr-2 h-4 w-4 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                        {t.qualityPolicy}
                      </Link>
                    </div>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="text-lg font-medium text-gray-700 hover:text-primary transition-colors relative group py-2"
                >
                  {t.contact}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </Link>
              </nav>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <LanguageSelector />
              <UserMenu />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <MobileMenu isOpen={mobileMenuOpen} setIsOpen={setMobileMenuOpen} />
    </header>
  );
}
