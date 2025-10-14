import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { generateContent } from '../services/geminiService';
import { Feature } from '../constants';
import { LoadingSpinner } from './LoadingSpinner';
import { ErrorDisplay } from './ErrorDisplay';

interface FeatureModalProps {
  isOpen: boolean;
  onClose: () => void;
  feature: Feature | null;
}

export const FeatureModal: React.FC<FeatureModalProps> = ({
  isOpen,
  onClose,
  feature
}) => {
  const { translations } = useLanguage();
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen && feature) {
      const fetchFeatureDetails = async () => {
        setIsLoading(true);
        setError(null);
        setContent('');
        try {
          const prompt = translations[feature.promptKey];
          const result = await generateContent(prompt);
          setContent(result);
        } catch (err) {
          if (err instanceof Error) {
            setError(err.message);
          } else {
            setError('An unknown error occurred while fetching details.');
          }
        } finally {
          setIsLoading(false);
        }
      };

      fetchFeatureDetails();
    }
  }, [isOpen, feature, translations]);

  if (!isOpen || !feature) {
    return null;
  }
  
  const title = translations[feature.titleKey];
  const subtitle = translations[feature.descriptionKey];

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm z-50 flex justify-center items-center p-4"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="relative bg-gray-900 border border-cyan-500/30 rounded-3xl shadow-2xl shadow-cyan-500/20 w-full max-w-3xl max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <header className="p-6 border-b border-gray-700/50 flex justify-between items-center">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-emerald-400">
              {title}
            </h3>
            <p className="text-sm text-gray-400 mt-1">{subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-gray-700"
            aria-label={translations.modalClose}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </header>

        {/* Content */}
        <main className="p-6 sm:p-8 overflow-y-auto flex-grow">
          <h4 className="text-lg font-semibold text-gray-200 mb-4">{translations.modalAITitle}</h4>
          {isLoading && (
            <div className="flex justify-center items-center py-10">
              <LoadingSpinner />
            </div>
          )}
          {error && <ErrorDisplay message={error} />}
          {!isLoading && !error && (
            <div className="prose prose-invert prose-p:text-gray-300 prose-headings:text-gray-100 max-w-none space-y-4 text-gray-300 leading-relaxed">
              {content.split('\n').filter(p => p.trim() !== '').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};