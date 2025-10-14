import React, { createContext, useState, useContext, ReactNode } from 'react';
import { translations, TranslationSet } from '../locales/translations';

type Language = 'pt' | 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  translations: TranslationSet;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const value = {
    language,
    setLanguage,
    translations: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
