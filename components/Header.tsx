import React, { useState } from 'react';
import { FEATURES, Feature } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';

// --- Helper Components ---

const PalestineFlagIcon: React.FC = () => (
    <svg width="24" height="24" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="rounded-sm shadow-md">
        <path d="M0 0H36V24H0V0Z" fill="#000000"/>
        <path d="M0 8H36V24H0V8Z" fill="#FFFFFF"/>
        <path d="M0 16H36V24H0V16Z" fill="#007A3D"/>
        <path d="M0 0L18 12L0 24V0Z" fill="#CE1126"/>
    </svg>
);

const GlobeIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m0 0a9 9 0 019-9m-9 9a9 9 0 009 9" />
    </svg>
);

const UnityFlags: React.FC = () => {
    const { translations } = useLanguage();
    return (
        <div className="flex items-center space-x-2" title={translations.unitySymbolTooltip}>
            <PalestineFlagIcon />
            <span className="text-gray-500 font-light text-xl">+</span>
            <GlobeIcon />
        </div>
    );
};

const NavLink: React.FC<{ children: React.ReactNode; onClick?: () => void }> = ({ children, onClick }) => (
    <button onClick={onClick} className="block py-2 px-3 text-gray-300 rounded-lg hover:bg-gray-700/50 md:hover:bg-transparent md:border-0 md:hover:text-cyan-300 md:p-0 transition-colors duration-200 text-left w-full">
        {children}
    </button>
);

// --- Main Header Component ---
interface HeaderProps {
    onFeatureClick: (feature: Feature) => void;
}

export const Header: React.FC<HeaderProps> = ({ onFeatureClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { translations } = useLanguage();

  const navItems = FEATURES;

  const handleLinkClick = (feature: Feature) => {
    // Scroll to section first
    const section = document.getElementById('infraestrutura');
    if(section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
    // Then open modal
    onFeatureClick(feature);
    setIsMenuOpen(false);
  }

  return (
    <header className="bg-black bg-opacity-50 backdrop-blur-lg sticky top-0 z-50 shadow-cyan-500/10 shadow-lg">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between mx-auto py-4">
          
            <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-emerald-400">
                    {translations.headerTitle}
                </h1>
            </a>
          
            <div className="flex items-center md:order-2 space-x-3 rtl:space-x-reverse">
                <LanguageSwitcher />
                <div className="hidden md:block ml-4">
                    <UnityFlags />
                </div>
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
                    aria-controls="navbar-menu"
                    aria-expanded={isMenuOpen}
                >
                    <span className="sr-only">{translations.openMenu}</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
            </div>

            <div className={`${isMenuOpen ? 'block' : 'hidden'} items-center justify-between w-full md:flex md:w-auto md:order-1`} id="navbar-menu">
                <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-700 rounded-lg bg-gray-800/80 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
                    {navItems.map((item) => (
                        <li key={item.titleKey}>
                             <NavLink onClick={() => handleLinkClick(item)}>
                                {translations[item.titleShortKey]}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <div className="block md:hidden mt-4 pt-4 border-t border-gray-700">
                    <UnityFlags />
                </div>
            </div>

        </div>
      </nav>
    </header>
  );
};