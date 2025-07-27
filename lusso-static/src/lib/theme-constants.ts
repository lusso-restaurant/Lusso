/**
 * LUSSO THEME CONSTANTS
 * 
 * Centralized theme definitions to eliminate duplicates and provide
 * a single source of truth for all theme-related constants.
 */

import type { ThemeName } from '@/types/design-system';

// ===================================================================
// THEME DEFINITIONS
// ===================================================================

/**
 * Available theme names
 */
export const THEME_NAMES: readonly ThemeName[] = ['light', 'dark'] as const;

/**
 * Default theme configuration
 */
export const DEFAULT_THEME: ThemeName = 'light';

/**
 * localStorage key for theme persistence
 */
export const THEME_STORAGE_KEY = 'lusso-theme';

/**
 * Data attribute name for theme switching
 */
export const THEME_DATA_ATTRIBUTE = 'data-theme';

// ===================================================================
// THEME METADATA
// ===================================================================

/**
 * Theme display information with labels
 */
export const THEME_CONFIG = {
  light: {
    name: 'light' as ThemeName,
    label: 'Light'
  },
  dark: {
    name: 'dark' as ThemeName,
    label: 'Dark'
  }
} as const;

/**
 * Array of theme configurations for iteration
 */
export const THEME_OPTIONS = Object.values(THEME_CONFIG);

// ===================================================================
// AURORA BACKGROUND COLORS
// ===================================================================

/**
 * Aurora background color palettes for each theme
 */
export const AURORA_COLORS = {
  light: {
    color1: "#D4AF37", // Brand gold
    color2: "#FFD700", // Bright gold  
    color3: "#FFF8DC", // Cornsilk - pearl white
    color4: "#F5F5F5", // Pearl white
    color5: "#E6D3A3", // Light champagne
  },
  dark: {
    color1: "#37D4AF", // Brand teal
    color2: "#5CE5C5", // Light teal
    color3: "#D4AF37", // Brand gold
    color4: "#2BB89B", // Deep teal
    color5: "#B2935B", // Matte gold
  }
} as const;

// ===================================================================
// VALIDATION HELPERS
// ===================================================================

/**
 * Check if a string is a valid theme name
 */
export const isValidTheme = (theme: string | null): theme is ThemeName => {
  return theme !== null && THEME_NAMES.includes(theme as ThemeName);
};

/**
 * Get the next theme in the rotation
 */
export const getNextTheme = (currentTheme: ThemeName): ThemeName => {
  const currentIndex = THEME_NAMES.indexOf(currentTheme);
  const nextIndex = (currentIndex + 1) % THEME_NAMES.length;
  return THEME_NAMES[nextIndex];
};

/**
 * Get the opposite theme
 */
export const getOppositeTheme = (theme: ThemeName): ThemeName => {
  return theme === 'light' ? 'dark' : 'light';
};