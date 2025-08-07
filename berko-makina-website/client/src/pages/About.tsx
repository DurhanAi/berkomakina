import React from 'react';
import { Link } from 'wouter';
import { useLanguage } from '@/context/LanguageContext';

export default function About() {
  const { t } = useLanguage();
  
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Berko Makina</h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t.aboutTitle}
          </p>
          <div className="mt-4 max-w-2xl lg:mx-auto">
            <div className="h-1.5 w-20 bg-primary rounded lg:mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t.aboutDescription}
            </p>
          </div>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            <Link href="/about/vision" className="relative group">
              <div className="rounded-lg overflow-hidden shadow-md transition-all duration-300 group-hover:shadow-xl bg-white">
                <div className="p-6">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mb-5 mx-auto">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl text-center font-medium text-gray-900 transition-colors duration-300 group-hover:text-primary">{t.visionTitle}</h3>
                  <p className="mt-2 text-base text-center text-gray-600">
                    {t.visionDescription}
                  </p>
                  <div className="mt-4 text-center">
                    <span className="inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-full text-primary bg-primary/10 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      {t.viewDetails}
                      <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/about/mission" className="relative group">
              <div className="rounded-lg overflow-hidden shadow-md transition-all duration-300 group-hover:shadow-xl bg-white">
                <div className="p-6">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mb-5 mx-auto">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                    </svg>
                  </div>
                  <h3 className="text-xl text-center font-medium text-gray-900 transition-colors duration-300 group-hover:text-primary">{t.missionTitle}</h3>
                  <p className="mt-2 text-base text-center text-gray-600">
                    {t.missionDescription}
                  </p>
                  <div className="mt-4 text-center">
                    <span className="inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-full text-primary bg-primary/10 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      {t.viewDetails}
                      <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/about/quality-policy" className="relative group">
              <div className="rounded-lg overflow-hidden shadow-md transition-all duration-300 group-hover:shadow-xl bg-white">
                <div className="p-6">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mb-5 mx-auto">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl text-center font-medium text-gray-900 transition-colors duration-300 group-hover:text-primary">{t.qualityPolicyTitle}</h3>
                  <p className="mt-2 text-base text-center text-gray-600">
                    {t.qualityPolicyDescription}
                  </p>
                  <div className="mt-4 text-center">
                    <span className="inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-full text-primary bg-primary/10 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      {t.viewDetails}
                      <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="mt-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.aboutCompanyTitle}</h2>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <p className="text-gray-600 mb-4 leading-relaxed">
                {t.aboutParagraph1}
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {t.aboutParagraph2}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {t.aboutParagraph3}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}