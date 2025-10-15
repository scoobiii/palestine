import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface HeroProps {
  videoUrl: string;
}

// A larger, stylized flag icon specifically for the Hero section
const PalestineFlagIcon: React.FC = () => (
    <svg viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-8 sm:w-16 sm:h-12 rounded-md shadow-lg flex-shrink-0">
        <path d="M0 0H36V24H0V0Z" fill="#000000"/>
        <path d="M0 8H36V24H0V8Z" fill="#FFFFFF"/>
        <path d="M0 16H36V24H0V16Z" fill="#007A3D"/>
        <path d="M0 0L18 12L0 24V0Z" fill="#CE1126"/>
    </svg>
);


export const Hero: React.FC<HeroProps> = ({ videoUrl }) => {
  const { translations } = useLanguage();

  return (
    <section className="relative w-full h-[60vh] max-h-[700px] rounded-3xl overflow-hidden shadow-2xl shadow-cyan-500/20">
      <video
        src={videoUrl}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30"></div>
      <div className="absolute bottom-0 left-0 p-8 sm:p-12">
        <div className="flex items-center gap-4 sm:gap-6">
            <PalestineFlagIcon />
            <h2 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg leading-tight">
              {translations.heroTitle}
            </h2>
        </div>
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl drop-shadow-md">
          {translations.heroSubtitle}
        </p>
      </div>
    </section>
  );
};
