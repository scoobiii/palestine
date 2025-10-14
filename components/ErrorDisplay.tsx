import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface ErrorDisplayProps {
  message: string;
}

export const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ message }) => {
  const { translations } = useLanguage();
  return (
    <div className="bg-red-900/30 border border-red-500/50 text-red-300 px-4 py-3 rounded-lg relative my-8" role="alert">
      <strong className="font-bold">{translations.errorTitle}</strong>
      <span className="block sm:inline ml-2">{message} {translations.errorFallback}</span>
    </div>
  );
};