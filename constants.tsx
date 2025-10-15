import React from 'react';
import { TranslationSet } from './locales/translations';

const EnergyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
);

const WaterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.69l-5.66 5.66a8 8 0 1 0 11.32 0L12 2.69zM12 17a5 5 0 0 1-5-5c0-2.08 1.27-3.86 3-4.65V6h4v1.35c1.73.79 3 2.57 3 4.65a5 5 0 0 1-5 5z" />
    </svg>
);


const CommsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20.25a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h.008a.75.75 0 01-.75-.75v-.008a.75.75 0 01.75-.75z" />
        <path d="M4.863 12.142a9.5 9.5 0 0114.274 0M1.5 8.642a13.5 13.5 0 011.83-2.315C5.163 4.29 8.373 3 12 3c3.627 0 6.837 1.29 8.67 3.327a13.5 13.5 0 011.83 2.315" />
    </svg>
);

const HealthIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
);

const EducationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v6m-6-3.422L12 14l4-2.222" />
    </svg>
);

const EconomyIcon = () => (
     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-2.21 0-4 1.79-4 4s-1.79 4-4 4 4-1.79 4-4-1.79-4-4-4z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
);

const FinancialIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
);

export interface Feature {
  titleKey: keyof TranslationSet;
  titleShortKey: keyof TranslationSet;
  descriptionKey: keyof TranslationSet;
  icon: React.ReactNode;
  promptKey: keyof TranslationSet;
}

export const FEATURES: Feature[] = [
  {
    titleKey: 'featureEnergyTitle',
    titleShortKey: 'featureEnergyTitleShort',
    descriptionKey: 'featureEnergyDesc',
    icon: <EnergyIcon />,
    promptKey: 'featureEnergyPrompt',
  },
  {
    titleKey: 'featureWaterTitle',
    titleShortKey: 'featureWaterTitleShort',
    descriptionKey: 'featureWaterDesc',
    icon: <WaterIcon />,
    promptKey: 'featureWaterPrompt',
  },
  {
    titleKey: 'featureCommunicationsTitle',
    titleShortKey: 'featureCommunicationsTitleShort',
    descriptionKey: 'featureCommunicationsDesc',
    icon: <CommsIcon />,
    promptKey: 'featureCommunicationsPrompt',
  },
  {
    titleKey: 'featureHealthTitle',
    titleShortKey: 'featureHealthTitleShort',
    descriptionKey: 'featureHealthDesc',
    icon: <HealthIcon />,
    promptKey: 'featureHealthPrompt',
  },
  {
    titleKey: 'featureEducationTitle',
    titleShortKey: 'featureEducationTitleShort',
    descriptionKey: 'featureEducationDesc',
    icon: <EducationIcon />,
    promptKey: 'featureEducationPrompt',
  },
  {
    titleKey: 'featureEconomyTitle',
    titleShortKey: 'featureEconomyTitleShort',
    descriptionKey: 'featureEconomyDesc',
    icon: <EconomyIcon />,
    promptKey: 'featureEconomyPrompt',
  },
  {
    titleKey: 'featureFinanceTitle',
    titleShortKey: 'featureFinanceTitleShort',
    descriptionKey: 'featureFinanceDesc',
    icon: <FinancialIcon />,
    promptKey: 'featureFinancePrompt',
  },
];