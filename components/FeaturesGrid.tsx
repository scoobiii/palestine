import React, { useRef } from 'react';
import { FeatureCard } from './FeatureCard';
import { FEATURES, Feature } from '../constants';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { useLanguage } from '../contexts/LanguageContext';

interface FeaturesGridProps {
    onFeatureClick: (feature: Feature) => void;
}

export const FeaturesGrid: React.FC<FeaturesGridProps> = ({ onFeatureClick }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.15 });
  const { translations } = useLanguage();

  return (
    <section ref={sectionRef} id="infraestrutura" className={`scroll-animate ${isVisible ? 'is-visible' : ''}`}>
      <h3 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-emerald-400">
        {translations.integratedInfrastructureTitle}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {FEATURES.map((feature) => (
          <FeatureCard
            key={feature.titleKey}
            icon={feature.icon}
            // FIX: Improved type safety by using keyof TranslationSet in constants.tsx, removing the need for casting.
            title={translations[feature.titleKey]}
            // FIX: Improved type safety by using keyof TranslationSet in constants.tsx, removing the need for casting.
            description={translations[feature.descriptionKey]}
            onClick={() => onFeatureClick(feature)}
          />
        ))}
      </div>
    </section>
  );
};