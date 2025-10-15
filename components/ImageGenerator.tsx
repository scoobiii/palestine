import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { generateArchitecturalImage } from '../services/geminiService';

// --- Helper Components ---

const SkeletonLoader: React.FC = () => (
    <div className="w-full h-full bg-gray-800/50 rounded-2xl animate-pulse"></div>
);

const Placeholder: React.FC = () => {
    const { translations } = useLanguage();
    return (
        <div className="w-full h-full flex flex-col items-center justify-center bg-gray-800/30 rounded-2xl border-2 border-dashed border-gray-700/60 p-8">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-gray-500 text-center">{translations.imageGenerationPlaceholder}</p>
        </div>
    );
};


// --- Main Component ---

export const ImageGenerator: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });
    const { translations } = useLanguage();

    const [selectedComplex, setSelectedComplex] = useState(1);
    const [cachedImages, setCachedImages] = useState<{ [key: number]: string }>({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const complexOptions = useMemo(() => Array.from({ length: 50 }, (_, i) => i + 1), []);

    // Arrays of modifiers to create unique prompts
    const styles = useMemo(() => ['biomorphic design', 'sleek minimalist architecture', 'deconstructivist style', 'parametricism', 'neo-futurism', 'arcology concept'], []);
    const lightings = useMemo(() => ['at golden hour', 'at night with brilliant neon lights', 'on a bright, clear day', 'in the soft light of dawn', 'under a dramatic cloudy sky'], []);
    const atmospheres = useMemo(() => ['with a light mist at the base', 'with flying vehicles between towers', 'reflecting a vibrant sunset', 'with lush sky gardens visible'], []);

    useEffect(() => {
        // Automatically generate image when selection changes, if not already cached.
        if (isVisible && !cachedImages[selectedComplex]) {
            handleGenerateImage();
        }
    }, [selectedComplex, isVisible]);

    const handleGenerateImage = async () => {
        if (cachedImages[selectedComplex]) return; // Don't re-generate

        setIsLoading(true);
        setError(null);
        try {
            // Create a unique, deterministic prompt for each complex
            const style = styles[selectedComplex % styles.length];
            const lighting = lightings[selectedComplex % lightings.length];
            const atmosphere = atmospheres[selectedComplex % atmospheres.length];
            const dynamicPrompt = `${translations.imageGenerationPromptBase}, in the style of ${style}, captured ${lighting}, ${atmosphere}.`;
            
            const base64Image = await generateArchitecturalImage(dynamicPrompt);
            setCachedImages(prev => ({ ...prev, [selectedComplex]: `data:image/jpeg;base64,${base64Image}` }));
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('An unknown error occurred during image generation.');
            }
        } finally {
            setIsLoading(false);
        }
    };

    const currentImage = cachedImages[selectedComplex];

    return (
        <section ref={sectionRef} id="visualizer" className={`scroll-animate ${isVisible ? 'is-visible' : ''} space-y-8`}>
            <div className="text-center">
                <h3 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-emerald-400">
                    {translations.imageGenerationTitle}
                </h3>
            </div>

            <div className="max-w-md mx-auto flex items-center space-x-4">
                 <label htmlFor="complex-visualizer-selector" className="sr-only">{translations.analyticsSelectorLabel}</label>
                 <select
                    id="complex-visualizer-selector"
                    value={selectedComplex}
                    onChange={(e) => setSelectedComplex(Number(e.target.value))}
                    className="bg-gray-800/50 border border-gray-700 text-white text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5"
                >
                    {complexOptions.map(num => (
                        <option key={num} value={num}>
                            {`${translations.analyticsSelectorOption} ${num}`}
                        </option>
                    ))}
                </select>
            </div>
            
            <div className="aspect-[9/16] max-h-[70vh] w-full max-w-lg mx-auto bg-black rounded-3xl overflow-hidden relative border border-gray-700/60 shadow-2xl shadow-cyan-500/10">
                {isLoading && (
                    <div className="w-full h-full flex flex-col items-center justify-center p-4">
                        <SkeletonLoader />
                         <p className="absolute bottom-6 text-center text-gray-400 text-sm px-4">{translations.imageGenerationLoading}</p>
                    </div>
                )}
                {error && !isLoading && (
                    <div className="w-full h-full flex items-center justify-center p-4 text-center text-red-400 bg-red-900/30">
                        <p>{translations.errorTitle} {error}</p>
                    </div>
                )}
                {!isLoading && !error && currentImage && (
                    <img src={currentImage} alt={`${translations.analyticsSelectorOption} ${selectedComplex} visualization`} className="w-full h-full object-cover" />
                )}
                 {!isLoading && !error && !currentImage && (
                    <Placeholder />
                 )}
            </div>
        </section>
    );
};