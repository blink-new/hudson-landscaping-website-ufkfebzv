
import { createContext, useContext, useState, useEffect } from 'react';

type Season = 'winter' | 'spring' | 'summer' | 'fall';

interface SeasonContextType {
  season: Season;
}

const SeasonContext = createContext<SeasonContextType | undefined>(undefined);

export const getSeason = (date: Date): Season => {
  const month = date.getMonth();
  if (month >= 2 && month <= 4) return 'spring';
  if (month >= 5 && month <= 7) return 'summer';
  if (month >= 8 && month <= 10) return 'fall';
  return 'winter';
};

export const SeasonProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [season, setSeason] = useState<Season>(getSeason(new Date()));

  useEffect(() => {
    setSeason(getSeason(new Date()));
  }, []);

  return (
    <SeasonContext.Provider value={{ season }}>
      {children}
    </SeasonContext.Provider>
  );
};

export const useSeason = () => {
  const context = useContext(SeasonContext);
  if (context === undefined) {
    throw new Error('useSeason must be used within a SeasonProvider');
  }
  return context;
};
