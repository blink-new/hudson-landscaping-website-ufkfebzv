
import { useState, useEffect } from 'react';

export type Season = 'Winter' | 'Spring' | 'Summer' | 'Fall';

export interface SeasonalTheme {
  season: Season;
  primaryColor: string;
  gradientFrom: string;
  gradientTo: string;
}

const getSeason = (date: Date): Season => {
  const month = date.getMonth();
  if (month >= 2 && month <= 4) return 'Spring';
  if (month >= 5 && month <= 7) return 'Summer';
  if (month >= 8 && month <= 10) return 'Fall';
  return 'Winter';
};

const themes: Record<Season, SeasonalTheme> = {
  Spring: {
    season: 'Spring',
    primaryColor: 'bg-hudson-green',
    gradientFrom: 'from-hudson-green',
    gradientTo: 'to-green-300',
  },
  Summer: {
    season: 'Summer',
    primaryColor: 'bg-yellow-500',
    gradientFrom: 'from-yellow-400',
    gradientTo: 'to-yellow-200',
  },
  Fall: {
    season: 'Fall',
    primaryColor: 'bg-orange-500',
    gradientFrom: 'from-orange-500',
    gradientTo: 'to-red-400',
  },
  Winter: {
    season: 'Winter',
    primaryColor: 'bg-hudson-blue',
    gradientFrom: 'from-hudson-blue',
    gradientTo: 'to-blue-300',
  },
};

export const useSeasonalTheme = (): SeasonalTheme => {
  const [season, setSeason] = useState<Season>(getSeason(new Date()));

  useEffect(() => {
    const interval = setInterval(() => {
      setSeason(getSeason(new Date()));
    }, 60 * 60 * 1000); // Check for season change every hour

    return () => clearInterval(interval);
  }, []);

  return themes[season];
};
