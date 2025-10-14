import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-gray-800/30 backdrop-blur-lg p-6 rounded-2xl border border-gray-700/60 transition-all duration-300 hover:border-cyan-400/80 hover:scale-105 hover:bg-gray-800/50 shadow-lg text-left w-full h-full"
    >
      <div className="flex items-center space-x-4 mb-4">
        <div className="bg-cyan-900/50 p-3 rounded-full">
          {icon}
        </div>
        <h4 className="text-xl font-semibold text-gray-100">{title}</h4>
      </div>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </button>
  );
};