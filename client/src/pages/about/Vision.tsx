import React from 'react';
import { Link } from 'wouter';
import { useLanguage } from '@/context/LanguageContext';

export default function Vision() {
  const { t } = useLanguage();
  
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Berko Makina</h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t.visionTitle}
          </p>
          <div className="mt-4 max-w-2xl lg:mx-auto">
            <div className="h-1 w-20 bg-primary rounded lg:mx-auto"></div>
          </div>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-1 md:gap-x-8 md:gap-y-10">
            <div className="relative bg-white p-6 shadow-lg rounded-lg">
              <div className="text-center">
                <h3 className="text-2xl font-medium text-gray-900 mt-4">{t.visionDetailTitle1}</h3>
                <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                  {t.visionDetailDesc1}
                </p>
              </div>
            </div>

            <div className="relative bg-gray-50 p-6 shadow-sm rounded-lg mt-8">
              <div className="text-center sm:text-left">
                <h3 className="text-xl font-medium text-gray-900">{t.visionDetailTitle2}</h3>
                <p className="mt-2 text-base text-gray-600 leading-relaxed">
                  {t.visionDetailDesc2}
                </p>
              </div>
            </div>
            
            <div className="relative bg-gray-50 p-6 shadow-sm rounded-lg">
              <div className="text-center sm:text-left">
                <h3 className="text-xl font-medium text-gray-900">{t.visionDetailTitle3}</h3>
                <p className="mt-2 text-base text-gray-600 leading-relaxed">
                  {t.visionDetailDesc3}
                </p>
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