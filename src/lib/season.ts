// Utility to get the current season and theme colors
export type Season = 'winter' | 'spring' | 'summer' | 'fall'

export function getCurrentSeason(date = new Date()): Season {
  const month = date.getMonth() + 1 // JS months are 0-based
  if (month === 12 || month <= 2) return 'winter'
  if (month >= 3 && month <= 5) return 'spring'
  if (month >= 6 && month <= 8) return 'summer'
  return 'fall'
}

export const seasonThemes: Record<Season, {
  bg: string
  gradient: string
  accent: string
  text: string
}> = {
  winter: {
    bg: 'bg-gradient-to-br from-blue-100 via-blue-200 to-blue-400',
    gradient: 'from-blue-300 to-blue-600',
    accent: 'text-blue-700',
    text: 'text-blue-900',
  },
  spring: {
    bg: 'bg-gradient-to-br from-green-100 via-green-200 to-green-400',
    gradient: 'from-green-300 to-green-600',
    accent: 'text-green-700',
    text: 'text-green-900',
  },
  summer: {
    bg: 'bg-gradient-to-br from-yellow-100 via-yellow-200 to-green-300',
    gradient: 'from-yellow-300 to-green-500',
    accent: 'text-yellow-700',
    text: 'text-yellow-900',
  },
  fall: {
    bg: 'bg-gradient-to-br from-orange-100 via-orange-200 to-yellow-300',
    gradient: 'from-orange-300 to-yellow-500',
    accent: 'text-orange-700',
    text: 'text-orange-900',
  },
}
