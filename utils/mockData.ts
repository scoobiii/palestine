interface PopulationDataPoint {
  year: string;
  density: number;
}

interface EnergyDataPoint {
  name: string;
  consumption: number;
  generation: number;
}

interface WaterDataPoint {
  name: string;
  value: number;
}

export interface ComplexData {
  populationData: PopulationDataPoint[];
  energyData: EnergyDataPoint[];
  waterData: WaterDataPoint[];
}

export const generateComplexData = (complexId: number): ComplexData => {
  const seed = complexId * 137; // Use a prime number for better distribution

  // Population Data
  const populationData = Array.from({ length: 5 }, (_, i) => {
    const year = 2030 + i * 5;
    const baseDensity = 20000 + (seed % 2000) + Math.sin(complexId) * 1000;
    const growthFactor = 1 + i * 0.15 + ((seed + i * 17) % 10) / 100;
    return {
      year: year.toString(),
      density: Math.floor(baseDensity * growthFactor),
    };
  });

  // Energy Data
  const energyConsumption = 500 + (seed / 2 % 100) + ((seed * 3) % 50);
  const energyGeneration = energyConsumption * (1.1 + (((seed + 5) % 15) / 100)); // Ensure surplus
  const energyData = [
    { name: 'GWh/year', consumption: Math.round(energyConsumption), generation: Math.round(energyGeneration) },
  ];

  // Water Data (ensuring it sums to 100)
  const residential = 60 + (seed % 10) - 5;
  const verticalFarming = 25 + ((seed + 2) % 5) - 2;
  const commercial = 100 - residential - verticalFarming;
  const waterData = [
    { name: 'residential', value: residential },
    { name: 'verticalFarming', value: verticalFarming },
    { name: 'commercial', value: commercial },
  ];

  return { populationData, energyData, waterData };
};
