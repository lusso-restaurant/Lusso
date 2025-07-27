/**
 * LUSSO THEME ICONS
 * 
 * Centralized theme icon components to eliminate duplicates
 * and provide consistent iconography across the application.
 */

import React from 'react';
import type { ThemeName } from '@/types/design-system';

// ===================================================================
// ICON COMPONENTS
// ===================================================================

export const LightThemeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    width="16" 
    height="16" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="5"/>
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
  </svg>
);

export const DarkThemeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    width="16" 
    height="16" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    {...props}
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

// ===================================================================
// ICON UTILITIES
// ===================================================================

/**
 * Get the appropriate icon component for a theme
 */
export const getThemeIcon = (theme: ThemeName): React.ComponentType<React.SVGProps<SVGSVGElement>> => {
  switch (theme) {
    case 'light':
      return LightThemeIcon;
    case 'dark':
      return DarkThemeIcon;
    default:
      return LightThemeIcon;
  }
};

/**
 * Theme configuration with icon components
 */
export const THEME_ICONS = {
  light: LightThemeIcon,
  dark: DarkThemeIcon
} as const;