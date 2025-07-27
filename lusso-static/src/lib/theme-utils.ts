/**
 * LUSSO THEME UTILITIES
 * 
 * Common theme operations and utility functions to standardize
 * theme management across all components.
 */

import type { ThemeName } from '@/types/design-system';
import { 
  THEME_NAMES, 
  DEFAULT_THEME, 
  THEME_STORAGE_KEY, 
  THEME_DATA_ATTRIBUTE,
  AURORA_COLORS,
  isValidTheme,
  getNextTheme 
} from './theme-constants';

// ===================================================================
// DOM UTILITIES
// ===================================================================

/**
 * Get current theme from DOM data attribute
 */
export const getCurrentThemeFromDOM = (): ThemeName => {
  if (typeof document === 'undefined') return DEFAULT_THEME;
  
  const theme = document.documentElement.getAttribute(THEME_DATA_ATTRIBUTE);
  return (theme && isValidTheme(theme)) ? theme : DEFAULT_THEME;
};

/**
 * Apply theme to DOM (data attribute and class)
 */
export const applyThemeToDOM = (theme: ThemeName): void => {
  if (typeof document === 'undefined') return;
  
  const root = document.documentElement;
  
  // Set data attribute
  root.setAttribute(THEME_DATA_ATTRIBUTE, theme);
  
  // Update theme classes
  root.className = root.className.replace(/theme-\w+/g, '');
  root.classList.add(`theme-${theme}`);
};

// ===================================================================
// STORAGE UTILITIES
// ===================================================================

/**
 * Get theme from localStorage
 */
export const getThemeFromStorage = (): ThemeName | null => {
  if (typeof localStorage === 'undefined') return null;
  
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    return (stored && isValidTheme(stored)) ? stored : null;
  } catch {
    return null;
  }
};

/**
 * Save theme to localStorage
 */
export const saveThemeToStorage = (theme: ThemeName): void => {
  if (typeof localStorage === 'undefined') return;
  
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Storage failed, continue silently
  }
};

/**
 * Initialize theme from storage or use default
 */
export const getInitialTheme = (): ThemeName => {
  return getThemeFromStorage() ?? DEFAULT_THEME;
};

// ===================================================================
// THEME SWITCHING UTILITIES
// ===================================================================

/**
 * Toggle to next theme in rotation
 */
export const toggleTheme = (currentTheme: ThemeName): ThemeName => {
  return getNextTheme(currentTheme);
};

/**
 * Complete theme change operation (DOM + Storage)
 */
export const changeTheme = (newTheme: ThemeName): void => {
  applyThemeToDOM(newTheme);
  saveThemeToStorage(newTheme);
};

// ===================================================================
// AURORA UTILITIES
// ===================================================================

/**
 * Generate aurora gradient string for given theme
 */
export const generateAuroraGradient = (theme: ThemeName): string => {
  const colors = AURORA_COLORS[theme] ?? AURORA_COLORS[DEFAULT_THEME];
  
  return `repeating-linear-gradient(100deg,${colors.color1}_10%,${colors.color2}_15%,${colors.color3}_20%,${colors.color4}_25%,${colors.color5}_30%)`;
};

/**
 * Get aurora background color for theme
 */
export const getAuroraBackgroundColor = (theme: ThemeName): string => {
  return theme === 'light' ? '#f8f8f8' : '#1a1a1a';
};

// ===================================================================
// SSR UTILITIES
// ===================================================================

/**
 * Create SSR-safe theme detection hook
 */
export const createSSRSafeThemeDetection = () => {
  let mounted = false;
  let currentTheme: ThemeName = DEFAULT_THEME;
  
  const initialize = (): ThemeName => {
    if (!mounted && typeof document !== 'undefined') {
      mounted = true;
      currentTheme = getCurrentThemeFromDOM() || getInitialTheme();
    }
    return currentTheme;
  };
  
  return { initialize, isMounted: () => mounted };
};

// ===================================================================
// VALIDATION UTILITIES
// ===================================================================

/**
 * Sanitize and validate theme input
 */
export const sanitizeTheme = (input: unknown): ThemeName => {
  if (typeof input === 'string' && isValidTheme(input)) {
    return input;
  }
  return DEFAULT_THEME;
};

/**
 * Create theme validator for form inputs
 */
export const createThemeValidator = () => {
  return (value: string) => {
    return {
      isValid: isValidTheme(value),
      sanitized: sanitizeTheme(value),
      availableThemes: [...THEME_NAMES]
    };
  };
};