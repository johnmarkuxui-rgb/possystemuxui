export const formatPHP = (amount: number): string => {
  return new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount)
}

export const formatPHPCompact = (amount: number): string => {
  if (amount >= 1000000) {
    return `₱${(amount / 1000000).toFixed(1)}M`
  } else if (amount >= 1000) {
    return `₱${(amount / 1000).toFixed(1)}K`
  }
  return formatPHP(amount)
}

export const parsePHP = (value: string): number => {
  // Remove currency symbol and commas, then parse as float
  const cleanedValue = value.replace(/[₱,\s]/g, '')
  return parseFloat(cleanedValue) || 0
}

export const formatNumber = (value: number): string => {
  return new Intl.NumberFormat('en-PH').format(value)
}