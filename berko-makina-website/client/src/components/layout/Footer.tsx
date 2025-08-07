import { Link } from "wouter";
import { useLanguage } from "@/context/LanguageContext";
import logoPath from "@/assets/logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo ve açıklama */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center mb-4 group">
              <div className="bg-white p-3 rounded-lg mr-2 transition-transform duration-300 ease-in-out group-hover:scale-110">
                <img
                  src={logoPath}
                  alt="Berko Makina Logo"
                  className="h-16 w-auto"
                />
              </div>
            </Link>
            <p className="text-gray-400 mb-4">{t.companyDescription}</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="ri-facebook-fill text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="ri-twitter-fill text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="ri-linkedin-fill text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="ri-youtube-fill text-xl"></i>
              </a>
            </div>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h3 className="font-medium text-lg mb-4">{t.quickLinks}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  {t.about}
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-400 hover:text-white"
                >
                  {t.products}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white"
                >
                  {t.contact}
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-400 hover:text-white"
                >
                  Kariyer
                </Link>
              </li>
            </ul>
          </div>

          {/* Ürünler */}
          <div>
            <h3 className="font-medium text-lg mb-4">{t.products}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products/liquid-filling"
                  className="text-gray-400 hover:text-white"
                >
                  {t.liquidFillingMachines}
                </Link>
              </li>
              <li>
                <Link
                  href="/products/bottle-filling"
                  className="text-gray-400 hover:text-white"
                >
                  {t.bottleFillingLines}
                </Link>
              </li>
              <li>
                <Link
                  href="/products/can-filling"
                  className="text-gray-400 hover:text-white"
                >
                  {t.canFillingSystems}
                </Link>
              </li>
              <li>
                <Link
                  href="/products/packaging"
                  className="text-gray-400 hover:text-white"
                >
                  {t.packagingSystems}
                </Link>
              </li>
              <li>
                <Link
                  href="/products/labeling"
                  className="text-gray-400 hover:text-white"
                >
                  {t.labelingMachines}
                </Link>
              </li>
              <li>
                <Link
                  href="/products/automation"
                  className="text-gray-400 hover:text-white"
                >
                  {t.automationSolutions}
                </Link>
              </li>
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="font-medium text-lg mb-4">{t.contact}</h3>
            <ul className="space-y-3">
              <li className="flex">
                <i className="ri-map-pin-line text-primary mr-3 mt-1"></i>
                <span className="text-gray-400">
                  Akçaburgaz Mh., 3029. Sk No:23
                  <br />
                  34522 Esenyurt/İstanbul, Türkiye
                </span>
              </li>
              <li className="flex">
                <i className="ri-phone-line text-primary mr-3 mt-1"></i>
                <span className="text-gray-400">+90 539 769 19 54</span>
              </li>
              <li className="flex">
                <i className="ri-mail-line text-primary mr-3 mt-1"></i>
                <span className="text-gray-400">info@berkomakina.com</span>
              </li>
              <li className="flex">
                <i className="ri-time-line text-primary mr-3 mt-1"></i>
                <span className="text-gray-400">
                  Pazartesi - Cuma: 09:00 - 18:00
                  <br />
                  Cumartesi: 09:00 - 13:00
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Berko Makina. {t.allRightsReserved}.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white text-sm"
              >
                Gizlilik Politikası
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white text-sm"
              >
                Kullanım Şartları
              </Link>
              <Link
                href="/cookies"
                className="text-gray-400 hover:text-white text-sm"
              >
                Çerez Politikası
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
