import React, { useRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { useLanguage } from '../contexts/LanguageContext';

interface ProjectDescriptionProps {
  text: string;
}

export const ProjectDescription: React.FC<ProjectDescriptionProps> = ({ text }) => {
    const sectionRef = useRef<HTMLElement>(null);
    const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.2 });
    const { translations } = useLanguage();
    const paragraphs = text.split('\n').filter(p => p.trim() !== '');

  return (
    <section 
      ref={sectionRef}
      className={`bg-gray-800/20 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-gray-700/50 scroll-animate ${isVisible ? 'is-visible' : ''}`}
    >
      <h3 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-emerald-400">
        {translations.conceptTitle}
      </h3>
      <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
         {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
         ))}
      </div>
    </section>
  );
};