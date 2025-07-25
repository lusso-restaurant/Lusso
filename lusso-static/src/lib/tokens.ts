import { type ThemeName } from '@/types/design-system';

export const colors = {
  brand: {
    matteWhite: '#f4f4f4',
    glossyGold: '#d4af37',
    matteGold: '#b2935b',
    darkBlue: '#0a2342',
    charcoal: '#2c3e50',
  },
  neutral: {
    '50': '#fafafa',
    '100': '#f4f4f5',
    '200': '#e4e4e7',
    '300': '#d4d4d8',
    '400': '#a1a1aa',
    '500': '#71717a',
    '600': '#52525b',
    '700': '#3f3f46',
    '800': '#27272a',
    '900': '#18181b',
    '950': '#09090b',
  },
  status: {
    success: '#22c55e',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6',
  },
};

export const themes: Record<ThemeName, {
  colors: {
    primary: string;
    primaryHover: string;
    primaryContrast: string;
    secondary: string;
    secondaryHover: string;
    secondaryContrast: string;
    accent: string;
    accentHover: string;
    accentContrast: string;
    background: string;
    surface: string;
    surfaceElevated: string;
    surfaceOverlay: string;
    textPrimary: string;
    textSecondary: string;
    textMuted: string;
    textInverse: string;
    border: string;
    borderFocus: string;
    outline: string;
  };
}> = {
  light: {
    colors: {
      primary: colors.brand.glossyGold,
      primaryHover: colors.brand.matteGold,
      primaryContrast: colors.neutral['50'],
      secondary: '#1A234A',
      secondaryHover: '#0d2a4a',
      secondaryContrast: colors.neutral['50'],
      accent: colors.brand.glossyGold,
      accentHover: '#E5C96A',
      accentContrast: colors.neutral['50'],
      background: '#0D0D0D',
      surface: colors.neutral['100'],
      surfaceElevated: colors.neutral['50'],
      surfaceOverlay: 'rgba(0, 0, 0, 0.8)',
      textPrimary: colors.brand.charcoal,
      textSecondary: colors.neutral['600'],
      textMuted: colors.neutral['500'],
      textInverse: colors.neutral['50'],
      border: colors.neutral['200'],
      borderFocus: colors.brand.glossyGold,
      outline: colors.brand.glossyGold,
    },
  },
  dark: {
    colors: {
      primary: colors.brand.glossyGold,
      primaryHover: colors.brand.matteGold,
      primaryContrast: colors.neutral['900'],
      secondary: '#0F1035',
      secondaryHover: colors.brand.glossyGold,
      secondaryContrast: colors.neutral['900'],
      accent: '#37D4AF',
      accentHover: '#e6c347',
      accentContrast: colors.neutral['900'],
      background: '#0D0D0D',
      surface: '#1B1B1B',
      surfaceElevated: colors.neutral['700'],
      surfaceOverlay: 'rgba(0, 0, 0, 0.9)',
      textPrimary: colors.neutral['50'],
      textSecondary: colors.neutral['300'],
      textMuted: colors.neutral['400'],
      textInverse: colors.neutral['900'],
      border: colors.neutral['700'],
      borderFocus: colors.brand.glossyGold,
      outline: colors.brand.glossyGold,
    },
  },
};

export const typography = {
  families: {
    display: '"DM Serif Display", serif',
    body: '"Lato", sans-serif',
    mono: '"JetBrains Mono", monospace',
    system: 'system-ui, sans-serif',
  },
  weights: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    black: 900,
  },
  sizes: {
    xs: 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',
    sm: 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
    base: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
    lg: 'clamp(1.125rem, 1rem + 0.625vw, 1.25rem)',
    xl: 'clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)',
    '2xl': 'clamp(1.5rem, 1.3rem + 1vw, 2rem)',
    '3xl': 'clamp(1.875rem, 1.6rem + 1.375vw, 2.5rem)',
    '4xl': 'clamp(2.25rem, 1.9rem + 1.75vw, 3rem)',
    '5xl': 'clamp(3rem, 2.5rem + 2.5vw, 4rem)',
    '6xl': 'clamp(3.75rem, 3rem + 3.75vw, 5rem)',
  },
  lineHeights: {
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
  letterSpacings: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
};

export const spacing = {
  unit: '0.25rem',
  px: '1px',
  '0': '0',
  '1': 'calc(0.25rem * 1)',
  '2': 'calc(0.25rem * 2)',
  '3': 'calc(0.25rem * 3)',
  '4': 'calc(0.25rem * 4)',
  '5': 'calc(0.25rem * 5)',
  '6': 'calc(0.25rem * 6)',
  '8': 'calc(0.25rem * 8)',
  '10': 'calc(0.25rem * 10)',
  '12': 'calc(0.25rem * 12)',
  '16': 'calc(0.25rem * 16)',
  '20': 'calc(0.25rem * 20)',
  '24': 'calc(0.25rem * 24)',
  '32': 'calc(0.25rem * 32)',
  '40': 'calc(0.25rem * 40)',
  '48': 'calc(0.25rem * 48)',
  '56': 'calc(0.25rem * 56)',
  '64': 'calc(0.25rem * 64)',
};

export const radii = {
  none: '0',
  sm: '0.125rem',
  base: '0.25rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  '2xl': '1rem',
  '3xl': '1.5rem',
  full: '9999px',
};

export const shadows = {
  xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  sm: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  base: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  md: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  lg: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  xl: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
};

export const zIndices = {
  auto: 'auto',
  '0': 0,
  '10': 10,
  '20': 20,
  '30': 30,
  '40': 40,
  '50': 50,
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
  toast: 1080,
};

export const animations = {
  timingFunctions: {
    linear: 'linear',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    fluid: 'cubic-bezier(0.3, 0, 0, 1)',
    snappy: 'cubic-bezier(0.2, 0, 0, 1)',
  },
  durations: {
    instant: '0ms',
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
    slower: '750ms',
  },
};