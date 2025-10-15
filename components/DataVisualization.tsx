import React, { useState, useEffect, useMemo, useRef } from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useLanguage } from '../contexts/LanguageContext';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { generateComplexData } from '../utils/mockData';
import { generateArchitecturalImage } from '../services/geminiService';

const COLORS = ['#06b6d4', '#2dd4bf', '#67e8f9']; // cyan, teal, light-cyan

// --- Helper Components ---

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      if (payload[0].payload.name && typeof payload[0].payload.value !== 'undefined') { // Pie chart
         return (
            <div className="p-2 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-md text-white">
                <p className="label">{`${payload[0].name} : ${payload[0].value.toFixed(1)}%`}</p>
            </div>
         );
      }
      return (
        <div className="p-2 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-md text-white">
          <p className="label font-bold">{`${label}`}</p>
          {payload.map((pld: any, index: number) => (
              <p key={index} style={{ color: pld.color }}>{`${pld.name}: ${pld.value.toLocaleString()}`}</p>
          ))}
        </div>
      );
    }
  
    return null;
};

const Placeholder: React.FC = () => {
    const { translations } = useLanguage();
    return (
        <div className="w-full h-full flex flex-col items-center justify-center bg-gray-800/30 rounded-2xl border-2 border-dashed border-gray-700/60 p-8 min-h-[300px]">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-gray-500 text-center">{translations.imageGenerationPlaceholder}</p>
        </div>
    );
};


// --- Main Component ---

const DataVisualization: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });
    const { translations } = useLanguage();
    const [selectedComplex, setSelectedComplex] = useState(1);
    const [isClient, setIsClient] = useState(false);

    // State for integrated image generation
    const [cachedImages, setCachedImages] = useState<{ [key: number]: string }>({});
    const [isLoadingImage, setIsLoadingImage] = useState(false);
    const [imageError, setImageError] = useState<string | null>(null);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const complexData = useMemo(() => generateComplexData(selectedComplex), [selectedComplex]);

    // Memos and Effect for Image Generation
    const styles = useMemo(() => ['biomorphic design', 'sleek minimalist architecture', 'deconstructivist style', 'parametricism', 'neo-futurism', 'arcology concept'], []);
    const lightings = useMemo(() => ['at golden hour', 'at night with brilliant neon lights', 'on a bright, clear day', 'in the soft light of dawn', 'under a dramatic cloudy sky'], []);
    const atmospheres = useMemo(() => ['with a light mist at the base', 'with flying vehicles between towers', 'reflecting a vibrant sunset', 'with lush sky gardens visible'], []);

    const handleGenerateImage = async () => {
        if (cachedImages[selectedComplex]) return;

        setIsLoadingImage(true);
        setImageError(null);
        try {
            const style = styles[selectedComplex % styles.length];
            const lighting = lightings[selectedComplex % lightings.length];
            const atmosphere = atmospheres[selectedComplex % atmospheres.length];
            const dynamicPrompt = `${translations.imageGenerationPromptBase}, incorporating data-driven elements: a population density of ${complexData.populationData[complexData.populationData.length - 1].density} per km² and sustainable energy generation of ${Math.round(complexData.energyData[0].generation)} GWh/year. The architectural style is ${style}, captured ${lighting}, ${atmosphere}.`;
            
            const base64Image = await generateArchitecturalImage(dynamicPrompt);
            setCachedImages(prev => ({ ...prev, [selectedComplex]: `data:image/jpeg;base64,${base64Image}` }));
        } catch (err) {
            if (err instanceof Error) {
                setImageError(err.message);
            } else {
                setImageError('An unknown error occurred during image generation.');
            }
        } finally {
            setIsLoadingImage(false);
        }
    };

    useEffect(() => {
        if (isVisible && isClient && complexData) {
            handleGenerateImage();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedComplex, isVisible, isClient]);
    
    const translatedWaterData = useMemo(() => {
        return complexData.waterData.map(item => {
            let name = '';
            switch(item.name) {
                case 'residential':
                    name = translations.waterResidential;
                    break;
                case 'verticalFarming':
                    name = translations.waterFarming;
                    break;
                case 'commercial':
                    name = translations.waterCommercial;
                    break;
                default:
                    name = item.name;
            }
            return { ...item, name };
        });
    }, [complexData.waterData, translations]);


    const complexOptions = Array.from({ length: 50 }, (_, i) => i + 1);

    if (!isClient) {
        return (
            <section ref={sectionRef} id="analytics" className="space-y-12 opacity-0 h-96" aria-hidden="true" />
        )
    }

    const currentImage = cachedImages[selectedComplex];

    return (
        <section ref={sectionRef} id="analytics" className={`scroll-animate ${isVisible ? 'is-visible' : ''} space-y-12`}>
            <div className="text-center">
                <h3 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-emerald-400">
                    {translations.analyticsTitle}
                </h3>
                <div className="max-w-md mx-auto">
                    <label htmlFor="complex-selector" className="sr-only">{translations.analyticsSelectorLabel}</label>
                    <select
                        id="complex-selector"
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
            </div>

            {/* Integrated Image Viewer */}
            <div className="aspect-[16/9] max-h-[60vh] w-full max-w-4xl mx-auto bg-black rounded-3xl overflow-hidden relative border border-gray-700/60 shadow-2xl shadow-cyan-500/10">
                 {isLoadingImage && (
                    <div className="w-full h-full flex flex-col items-center justify-center p-4">
                        <div className="w-full h-full bg-gray-800/50 rounded-2xl animate-pulse"></div>
                         <p className="absolute bottom-6 text-center text-gray-400 text-sm px-4">{translations.imageGenerationLoading}</p>
                    </div>
                )}
                {imageError && !isLoadingImage && (
                    <div className="w-full h-full flex items-center justify-center p-4 text-center text-red-400 bg-red-900/30">
                        <p>{translations.errorTitle} {imageError}</p>
                    </div>
                )}
                {!isLoadingImage && !imageError && currentImage && (
                    <img src={currentImage} alt={`${translations.analyticsSelectorOption} ${selectedComplex} visualization`} className="w-full h-full object-cover" />
                )}
                 {!isLoadingImage && !imageError && !currentImage && (
                    <Placeholder />
                 )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Population Chart */}
                <div className="bg-gray-800/30 backdrop-blur-lg p-6 rounded-2xl border border-gray-700/60 lg:col-span-2">
                    <h4 className="text-lg font-semibold text-gray-100 mb-4">{translations.chartPopulationTitle}</h4>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={complexData.populationData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
                            <XAxis dataKey="year" stroke="#a0aec0" />
                            <YAxis stroke="#a0aec0" />
                            <Tooltip content={<CustomTooltip />} />
                            <Legend />
                            <Line type="monotone" dataKey="density" name={translations.yAxisPopulation} stroke="#2dd4bf" strokeWidth={2} activeDot={{ r: 8 }} dot={{ stroke: '#2dd4bf', strokeWidth: 1, r: 4, fill: '#2dd4bf' }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                {/* Energy Chart */}
                <div className="bg-gray-800/30 backdrop-blur-lg p-6 rounded-2xl border border-gray-700/60">
                    <h4 className="text-lg font-semibold text-gray-100 mb-4">{translations.chartEnergyTitle}</h4>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={complexData.energyData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                             <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
                            <XAxis dataKey="name" stroke="#a0aec0" />
                            <YAxis stroke="#a0aec0" />
                            <Tooltip content={<CustomTooltip />} />
                            <Legend />
                            <Bar dataKey="consumption" name={translations.legendEnergyConsumption} fill="#f472b6" />
                            <Bar dataKey="generation" name={translations.legendEnergyGeneration} fill="#06b6d4" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                
                {/* Water Chart */}
                <div className="bg-gray-800/30 backdrop-blur-lg p-6 rounded-2xl border border-gray-700/60">
                     <h4 className="text-lg font-semibold text-gray-100 mb-4">{translations.chartWaterTitle}</h4>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie data={translatedWaterData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} labelLine={false} label={({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
                                const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                                const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
                                const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));
                                return (
                                    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                                    {`${(percent * 100).toFixed(0)}%`}
                                    </text>
                                );
                            }}>
                                {translatedWaterData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip content={<CustomTooltip />}/>
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </section>
    );
};

export default DataVisualization;