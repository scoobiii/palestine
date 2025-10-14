import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface HeroProps {
  imageUrl: string;
}

export const Hero: React.FC<HeroProps> = ({ imageUrl }) => {
  const { translations } = useLanguage();

  return (
    <section className="relative w-full h-[60vh] max-h-[700px] rounded-3xl overflow-hidden shadow-2xl shadow-cyan-500/20">
      <img
        src={imageUrl}
        alt={translations.heroAlt}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30"></div>
      <div className="absolute bottom-0 left-0 p-8 sm:p-12">
        <h2 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
          {translations.heroTitle}
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl drop-shadow-md">
          {translations.heroSubtitle}
        </p>
      </div>
    </section>
  );
};