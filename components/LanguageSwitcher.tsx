import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

type Language = 'pt' | 'en' | 'ar';

const languages: { code: Language, label: string, flag: string }[] = [
    { code: 'pt', label: 'Português', flag: '🇧🇷' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'ar', label: 'العربية', flag: '🇵🇸' },
];

export const LanguageSwitcher: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedLanguage = languages.find(l => l.code === language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectLanguage = (langCode: Language) => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-700 shadow-sm px-4 py-2 bg-gray-800/80 text-sm font-medium text-gray-300 hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-cyan-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedLanguage.flag}
          <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleSelectLanguage(lang.code)}
                className={`${
                  lang.code === language ? 'bg-cyan-900/50 text-white' : 'text-gray-300'
                } group flex items-center w-full px-4 py-2 text-sm hover:bg-gray-700 hover:text-white`}
                role="menuitem"
              >
                <span className="mr-2">{lang.flag}</span>
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
