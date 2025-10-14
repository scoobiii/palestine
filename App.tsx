import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectDescription } from './components/ProjectDescription';
import { FeaturesGrid } from './components/FeaturesGrid';
import { FeatureModal } from './components/FeatureModal';
import { Footer } from './components/Footer';
import { ErrorDisplay } from './components/ErrorDisplay';
import { Feature } from './constants';
import { useLanguage } from './contexts/LanguageContext';
import { generateContent } from './services/geminiService';

// Using a placeholder image from an external service for demonstration
const HERO_IMAGE_URL = "https://images.unsplash.com/photo-1566234399992-3c0356193766?q=80&w=2070&auto=format&fit=crop";

const App: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);
  const [projectDescription, setProjectDescription] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { language, translations } = useLanguage();

  useEffect(() => {
    const fetchDescription = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const description = await generateContent(translations.projectDescription);
        setProjectDescription(description);
      } catch (err) {
        if (err instanceof Error) {
            setError(err.message);
        } else {
            setError('An unknown error occurred.');
        }
        // Fallback to static description on error
        setProjectDescription(translations.projectDescription);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDescription();
  }, [language, translations.projectDescription]);


  const handleFeatureClick = (feature: Feature) => {
    setSelectedFeature(feature);
  };

  const handleCloseModal = () => {
    setSelectedFeature(null);
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <div 
        className="fixed top-0 left-0 w-full h-full bg-cover bg-center -z-10"
        style={{ backgroundImage: "url('/background-grid.svg')", opacity: 0.1 }}
      />
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-16 sm:space-y-24">
          <Hero imageUrl={HERO_IMAGE_URL} />
          {isLoading ? (
             <div className="flex justify-center items-center h-40">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-cyan-400"></div>
            </div>
          ) : error ? (
            <ErrorDisplay message={error} />
          ) : (
            <ProjectDescription text={projectDescription} />
          )}
          <FeaturesGrid onFeatureClick={handleFeatureClick} />
        </div>
      </main>
      <Footer />

      {selectedFeature && (
        <FeatureModal
          isOpen={!!selectedFeature}
          onClose={handleCloseModal}
          feature={selectedFeature}
        />
      )}
    </div>
  );
};

export default App;