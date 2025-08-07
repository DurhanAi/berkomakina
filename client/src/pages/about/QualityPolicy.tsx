import React from 'react';
import { Link } from 'wouter';
import { useLanguage } from '@/context/LanguageContext';

export default function QualityPolicy() {
  const { t } = useLanguage();
  
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Berko Makina</h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t.qualityPolicyTitle}
          </p>
          <div className="mt-4 max-w-2xl lg:mx-auto">
            <div className="h-1 w-20 bg-primary rounded lg:mx-auto"></div>
          </div>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-1 md:gap-x-8 md:gap-y-10">
            <div className="relative bg-white p-6 shadow-lg rounded-lg">
              <div className="text-center">
                <h3 className="text-2xl font-medium text-gray-900 mt-4">{t.qualityCommitmentTitle}</h3>
                <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                  {t.qualityCommitmentDesc}
                </p>
              </div>
            </div>

            <div className="relative bg-gray-50 p-6 shadow-sm rounded-lg mt-8">
              <div className="text-center sm:text-left">
                <h3 className="text-xl font-medium text-gray-900">{t.qualityStandardsTitle}</h3>
                <ul className="mt-4 space-y-4 text-base text-gray-600">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-primary">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <p className="ml-3 leading-relaxed">
                      <strong>{t.qualityStandard1}</strong> {t.qualityStandardDesc1}
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-primary">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <p className="ml-3 leading-relaxed">
                      <strong>{t.qualityStandard2}</strong> {t.qualityStandardDesc2}
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-primary">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <p className="ml-3 leading-relaxed">
                      <strong>{t.qualityStandard3}</strong> {t.qualityStandardDesc3}
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-primary">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <p className="ml-3 leading-relaxed">
                      <strong>{t.qualityStandard4}</strong> {t.qualityStandardDesc4}
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-primary">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <p className="ml-3 leading-relaxed">
                      <strong>{t.qualityStandard5}</strong> {t.qualityStandardDesc5}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="relative bg-white p-6 shadow-sm rounded-lg mt-8">
              <div className="text-center">
                <h3 className="text-xl font-medium text-gray-900">{t.qualityGuaranteeTitle}</h3>
                <p className="mt-4 text-base text-gray-600 leading-relaxed">
                  {t.qualityGuaranteeDesc}
                </p>
                <div className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-primary bg-primary/10">
                  <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  {t.warrantyInfo}
                </div>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <Link href="/about" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-blue-700 transition-colors duration-300">
                <svg className="mr-2 -ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                {t.backToAbout}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}