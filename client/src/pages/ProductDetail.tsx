import { useParams, Link } from "wouter";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

// Import all product images from assets
import volumetricFillingImg from "@assets/volumetric-filling.svg";
import peristalticFillingImg from "@assets/peristaltic-filling.svg";
import servoFillingImg from "@assets/servo-filling.svg";
import liquidFillingImg from "@assets/liquid-filling-machine.svg";
import bottleFilling1Img from "@assets/bottle-filling-1.svg";
import bottleFilling2Img from "@assets/bottle-filling-2.svg";
import rotaryCanFillingImg from "@assets/rotary-can-filling.svg";
import shrinkPackagingImg from "@assets/shrink-packaging.svg";
import cartonPackagingImg from "@assets/carton-packaging.svg";
import rollLabelerImg from "@assets/roll-labeler.svg";
import lineAutomationImg from "@assets/line-automation.svg";
import slider1Img from "@assets/slider-image-1.svg";
import slider2Img from "@assets/slider-image-2.svg";
import slider3Img from "@assets/slider-image-3.svg";
import slider4Img from "@assets/slider-image-4.svg";
import slider5Img from "@assets/slider-image-5.svg";
import slider6Img from "@assets/slider-image-6.svg";
import slider7Img from "@assets/slider-image-7.svg";
import slider8Img from "@assets/slider-image-8.svg";
import slider9Img from "@assets/slider-image-9.svg";
import slider10Img from "@assets/slider-image-10.svg";
import slider11Img from "@assets/slider-image-11.svg";

// Helper fonksiyonları
function getCategoryTitle(categoryId: string | undefined, t: any) {
  switch(categoryId) {
    case "liquid-filling": return t.liquidFillingCategoryTitle;
    case "bottle-filling": return t.bottleFillingCategoryTitle;
    case "can-filling": return t.canFillingCategoryTitle;
    case "packaging": return t.packagingCategoryTitle;
    case "labeling": return t.labelingCategoryTitle;
    case "automation": return t.automationCategoryTitle;
    case "hot-foil-stamping": return t.hotFoilCategoryTitle;
    case "screen-printing": return t.screenPrintingCategoryTitle;
    case "shrink-sleeving": return t.shrinkSleeveCategoryTitle;
    case "advanced-labeling": return t.advancedLabelingCategoryTitle;
    case "assembly-line": return t.assemblyLineCategoryTitle;
    default: return "";
  }
}

function getCategoryDescription(categoryId: string | undefined, t: any) {
  switch(categoryId) {
    case "liquid-filling": return t.liquidFillingCategoryDesc;
    case "bottle-filling": return t.bottleFillingCategoryDesc;
    case "can-filling": return t.canFillingCategoryDesc;
    case "packaging": return t.packagingCategoryDesc;
    case "labeling": return t.labelingCategoryDesc;
    case "automation": return t.automationCategoryDesc;
    case "hot-foil-stamping": return t.hotFoilCategoryDesc;
    case "screen-printing": return t.screenPrintingCategoryDesc;
    case "shrink-sleeving": return t.shrinkSleeveCategoryDesc;
    case "advanced-labeling": return t.advancedLabelingCategoryDesc;
    case "assembly-line": return t.assemblyLineCategoryDesc;
    default: return "";
  }
}

// Bu fonksiyon çeviri sisteminden verileri alacak
function getProductCategories(t: any) {
  return {
    "liquid-filling": {
      title: t.liquidFillingCategoryTitle,
      description: t.liquidFillingCategoryDesc,
      products: [
        {
          id: 1,
          name: t.volumetricFillingMachine,
          description: t.volumetricFillingDesc,
          features: [
            t.fillingCapacity5to500,
            t.bottlesPerHour3600,
            t.stainlessSteel,
            t.plcControl,
            t.easyMaintenance
          ],
          image: volumetricFillingImg
        },
        {
          id: 2,
          name: t.peristalticFillingMachine,
          description: t.peristalticFillingDesc,
          features: [
            t.fillingCapacity10to1000,
            t.bottlesPerHour2400,
            t.easyHoseChange,
            t.autoCleanFunction,
            t.digitalControlPanel
          ],
          image: peristalticFillingImg
        },
        {
          id: 3,
          name: t.servoFillingSystem,
          description: t.servoFillingDesc,
          features: [
            t.fillingCapacity1to5000,
            t.bottlesPerHour6000,
            t.precisionRate,
            t.touchscreenInterface,
            t.autoFormatChange
          ],
          image: servoFillingImg
        }
      ]
    },
    "bottle-filling": {
      title: t.bottleFillingCategoryTitle,
      description: t.bottleFillingCategoryDesc,
      products: [
        {
          id: 1,
          name: t.monoblokRinserFillerCapper,
          description: t.monoblokDesc,
          features: [
            t.bottles1000to3000PerHour,
            t.petGlassHdpeCompatible,
            t.autoFormatChangeSystem,
            t.lowSpaceRequirement,
            t.easyUseAndMaintenance
          ],
          image: bottleFilling1Img
        }
      ]
    },
    "packaging": {
      title: t.packagingCategoryTitle,
      description: t.packagingCategoryDesc,
      products: [
        {
          id: 1,
          name: t.shrinkPackagingMachine,
          description: t.shrinkPackagingDesc,
          features: [
            t.multiProductSizeSupport,
            t.autoFilmCutting,
            t.heatTunnelIntegration,
            t.highSpeedCapacity,
            t.energyEfficient
          ],
          image: shrinkPackagingImg
        }
      ]
    },
    "labeling": {
      title: t.labelingCategoryTitle,
      description: t.labelingCategoryDesc,
      products: [
        {
          id: 1,
          name: t.rollLabelApplicator,
          description: t.rollLabelDesc,
          features: [
            t.bottles6000PerHour,
            t.autoLabelPosition,
            t.multiLabelSize,
            t.precisePositioning,
            t.easyLabelChange
          ],
          image: rollLabelerImg
        }
      ]
    },
    "automation": {
      title: t.automationCategoryTitle,
      description: t.automationCategoryDesc,
      products: [
        {
          id: 1,
          name: t.lineAutomationSystem,
          description: t.lineAutomationDesc,
          features: [
            t.plcBasedControl,
            t.hmiTouchPanel,
            t.remoteMonitoring,
            t.errorDiagnosisSystem,
            t.productionReporting
          ],
          image: lineAutomationImg
        }
      ]
    },
    "can-filling": {
      title: t.canFillingCategoryTitle,
      description: t.canFillingCategoryDesc,
      products: [
        {
          id: 1,
          name: t.rotaryCanFillingMachine,
          description: t.rotaryCanDesc,
          features: [
            t.cans12000PerHour,
            t.autoCapPlacement,
            t.vacuumFillingSystem,
            t.weightControl,
            t.hygienicDesign
          ],
          image: rotaryCanFillingImg
        }
      ]
    },
    "hot-foil-stamping": {
      title: t.hotFoilCategoryTitle,
      description: t.hotFoilCategoryDesc,
      products: [
        {
          id: 1,
          name: t.hotFoilStampingMachine,
          description: t.hotFoilStampingDesc,
          features: [
            t.goldSilverFoilSupport,
            t.preciseTemperatureControl,
            t.multiDesignMolds,
            t.autoFeeding,
            t.highQualityPrint
          ],
          image: slider6Img
        }
      ]
    },
    "screen-printing": {
      title: t.screenPrintingCategoryTitle,
      description: t.screenPrintingCategoryDesc,
      products: [
        {
          id: 1,
          name: t.screenPrintingSystem,
          description: t.screenPrintingSystemDesc,
          features: [
            t.multiColorPrint,
            t.autoMoldChange,
            t.uvDryingSystem,
            t.preciseRegistration,
            t.fastSetup
          ],
          image: slider7Img
        }
      ]
    },
    "shrink-sleeving": {
      title: t.shrinkSleeveCategoryTitle,
      description: t.shrinkSleeveCategoryDesc,
      products: [
        {
          id: 1,
          name: t.shrinkSleevingMachine,
          description: t.shrinkSleevingDesc,
          features: [
            t.bottles18000PerHour,
            t.servoControlledFilmFeed,
            t.autoCutAndApply,
            t.heatTunnelIntegration,
            t.multiProductSizeSupport
          ],
          image: slider9Img
        }
      ]
    },
    "advanced-labeling": {
      title: t.advancedLabelingCategoryTitle,
      description: t.advancedLabelingCategoryDesc,
      products: [
        {
          id: 1,
          name: t.advancedLabelingSystem,
          description: t.advancedLabelingSystemDesc,
          features: [
            t.multiLabelApplication,
            t.visualControlSystem,
            t.codingIntegration,
            t.autoReject,
            t.qualityControl
          ],
          image: slider10Img
        }
      ]
    },
    "assembly-line": {
      title: t.assemblyLineCategoryTitle,
      description: t.assemblyLineCategoryDesc,
      products: [
        {
          id: 1,
          name: t.assemblyLineMachine,
          description: t.assemblyLineMachineDesc,
          features: [
            t.modularDesign,
            t.flexibleConfiguration,
            t.qualityControlIntegration,
            t.fastFormatChange,
            t.productionMonitoring
          ],
          image: slider11Img
        }
      ]
    }
  };
}

export default function ProductDetail() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("products");
  
  const productCategories = getProductCategories(t);
  const categoryData = productCategories[categoryId as keyof typeof productCategories];

  if (!categoryData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t.notFound}</h1>
          <p className="text-lg text-gray-600 mb-8">{t.notFoundDesc}</p>
          <Link 
            href="/products" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
          >
            {t.backToProducts}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="container mx-auto px-4">
          <nav className="text-sm mb-6">
            <Link href="/" className="hover:underline">{t.home}</Link>
            <span className="mx-2">/</span>
            <Link href="/products" className="hover:underline">{t.products}</Link>
            <span className="mx-2">/</span>
            <span className="text-white/80">{getCategoryTitle(categoryId, t)}</span>
          </nav>
          
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {getCategoryTitle(categoryId, t)}
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              {getCategoryDescription(categoryId, t)}
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200">
          <button
            onClick={() => setActiveTab("products")}
            className={`px-6 py-3 font-medium border-b-2 transition-colors ${
              activeTab === "products"
                ? "border-primary text-primary"
                : "border-transparent text-gray-600 hover:text-primary"
            }`}
          >
            {t.productsTab}
          </button>
          <button
            onClick={() => setActiveTab("features")}
            className={`px-6 py-3 font-medium border-b-2 transition-colors ${
              activeTab === "features"
                ? "border-primary text-primary"
                : "border-transparent text-gray-600 hover:text-primary"
            }`}
          >
            {t.features}
          </button>
          <button
            onClick={() => setActiveTab("support")}
            className={`px-6 py-3 font-medium border-b-2 transition-colors ${
              activeTab === "support"
                ? "border-primary text-primary"
                : "border-transparent text-gray-600 hover:text-primary"
            }`}
          >
            {t.technicalSupport}
          </button>
        </div>

        {/* Products Tab */}
        {activeTab === "products" && (
          <div className="space-y-8">
            {categoryData.products.map((product: any, index: number) => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="grid md:grid-cols-2 gap-8 p-8">
                  <div>
                    <div className="flex items-center mb-4">
                      <span className="bg-primary text-white text-sm font-medium px-3 py-1 rounded-full">
                        #{index + 1}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{product.name}</h3>
                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">{product.description}</p>
                    
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-gray-900">{t.features}:</h4>
                      <ul className="space-y-2">
                        {product.features.map((feature: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <i className="ri-check-line text-primary text-lg mt-0.5 mr-3"></i>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 mt-8">
                      <Link 
                        href="/contact"
                        className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium inline-block text-center"
                      >
                        {t.getQuote}
                      </Link>
                      <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                        {t.downloadCatalog}
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="max-w-full h-auto max-h-96 object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Features Tab */}
        {activeTab === "features" && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.features}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryData.products.flatMap((product: any) => product.features).map((feature: string, idx: number) => (
                <div key={idx} className="flex items-start p-4 border border-gray-200 rounded-lg">
                  <i className="ri-check-line text-primary text-lg mt-0.5 mr-3"></i>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Support Tab */}
        {activeTab === "support" && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.technicalSupport}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{t.contactUs}</h3>
                <div className="space-y-4">
                  <button className="w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium">
                    {t.requestQuote}
                  </button>
                  <button className="w-full border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                    {t.getInfo}
                  </button>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{t.technicalSupport}</h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center">
                    <i className="ri-phone-line text-primary mr-3"></i>
                    <span>+905397691954</span>
                  </div>
                  <div className="flex items-center">
                    <i className="ri-mail-line text-primary mr-3"></i>
                    <span>info@berkomakina.com</span>
                  </div>
                  <div className="flex items-center">
                    <i className="ri-time-line text-primary mr-3"></i>
                    <span>7/24 Teknik Destek</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Related Categories */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">{t.allCategories}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(productCategories).filter(([_, cat]) => cat !== categoryData).map(([key, cat]: [string, any], idx: number) => (
              <Link key={key} href={`/products/${key}`}>
                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{cat.title}</h3>
                  <p className="text-gray-600 text-sm">{cat.description}</p>
                  <div className="mt-4 text-primary font-medium">
                    {t.viewDetails} →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}