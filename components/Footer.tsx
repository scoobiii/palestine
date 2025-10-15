import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const Footer: React.FC = () => {
  const { translations } = useLanguage();
  
  return (
    <footer className="py-8 mt-16 border-t border-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
        <p>
          {translations.footerConcept}
        </p>
        <p className="text-sm mt-1">
          © 2025 {translations.footerRights}
        </p>
      </div>
    </footer>
  );
};