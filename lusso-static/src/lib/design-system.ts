/**
 * LUSSO DESIGN SYSTEM UTILITIES
 * 
 * Ultra-modular utilities for working with the design system.
 * Provides helper functions for consistent styling and theme management.
 */

import type {
  ColorVariant,
  SemanticColor,
  FontFamily,
  FontSize,
  FontWeight,
  SpaceScale,
  BorderRadius,
  ShadowScale,
  ComponentSize,
  ComponentVariant,
} from '@/types/design-system';

// ===================================================================
// CSS CUSTOM PROPERTY UTILITIES
// ===================================================================

/**
 * Get CSS custom property value with fallback
 */
export function getCSSVar(property: string, fallback?: string): string {
  if (typeof window === 'undefined') {
    return fallback || '';
  }
  
  return getComputedStyle(document.documentElement)
    .getPropertyValue(property)
    .trim() || fallback || '';
}

/**
 * Set CSS custom property value
 */
export function setCSSVar(property: string, value: string): void {
  if (typeof window === 'undefined') return;
  
  document.documentElement.style.setProperty(property, value);
}

/**
 * Create CSS var() reference
 */
export function cssVar(property: string): string {
  return `var(--${property})`;
}

// ===================================================================
// COLOR UTILITIES
// ===================================================================

/**
 * Get semantic color CSS variable
 */
export function getSemanticColor(color: SemanticColor): string {
  return cssVar(`color-${color}`);
}

/**
 * Get color variant CSS variable
 */
export function getColorVariant(variant: ColorVariant, suffix?: string): string {
  const property = suffix ? `color-${variant}-${suffix}` : `color-${variant}`;
  return cssVar(property);
}

/**
 * Create color object for component styling
 */
export function createColorPalette(variant: ColorVariant) {
  return {
    base: cssVar(`color-${variant}`),
    hover: cssVar(`color-${variant}-hover`),
    contrast: cssVar(`color-${variant}-contrast`),
  };
}

// ===================================================================
// TYPOGRAPHY UTILITIES
// ===================================================================

/**
 * Get font family CSS variable
 */
export function getFontFamily(family: FontFamily): string {
  return cssVar(`font-${family}`);
}

/**
 * Get font size CSS variable
 */
export function getFontSize(size: FontSize): string {
  return cssVar(`font-size-${size}`);
}

/**
 * Get font weight value
 */
export function getFontWeight(weight: FontWeight): string {
  return cssVar(`font-weight-${weight}`);
}

/**
 * Create typography style object
 */
export function createTypographyStyle(options: {
  family?: FontFamily;
  size?: FontSize;
  weight?: FontWeight;
  lineHeight?: string;
  letterSpacing?: string;
}) {
  const styles: Record<string, string> = {};
  
  if (options.family) {
    styles.fontFamily = getFontFamily(options.family);
  }
  
  if (options.size) {
    styles.fontSize = getFontSize(options.size);
  }
  
  if (options.weight) {
    styles.fontWeight = getFontWeight(options.weight);
  }
  
  if (options.lineHeight) {
    styles.lineHeight = cssVar(`line-height-${options.lineHeight}`);
  }
  
  if (options.letterSpacing) {
    styles.letterSpacing = cssVar(`letter-spacing-${options.letterSpacing}`);
  }
  
  return styles;
}

// ===================================================================
// SPACING UTILITIES
// ===================================================================

/**
 * Get spacing CSS variable
 */
export function getSpacing(scale: SpaceScale): string {
  return cssVar(`space-${scale}`);
}

/**
 * Get border radius CSS variable
 */
export function getBorderRadius(radius: BorderRadius): string {
  return cssVar(`radius-${radius}`);
}

/**
 * Get shadow CSS variable
 */
export function getShadow(shadow: ShadowScale): string {
  return cssVar(`shadow-${shadow}`);
}

/**
 * Create spacing object for margins and padding
 */
export function createSpacing(scale: SpaceScale) {
  const value = getSpacing(scale);
  return {
    margin: value,
    padding: value,
    gap: value,
  };
}

// ===================================================================
// COMPONENT STYLE UTILITIES
// ===================================================================

/**
 * Component size configurations
 */
export const COMPONENT_SIZES: Record<ComponentSize, {
  height: string;
  padding: string;
  fontSize: FontSize;
  borderRadius: BorderRadius;
}> = {
  xs: {
    height: getSpacing('6'),
    padding: `${getSpacing('1')} ${getSpacing('2')}`,
    fontSize: 'xs',
    borderRadius: 'sm',
  },
  sm: {
    height: getSpacing('8'),
    padding: `${getSpacing('2')} ${getSpacing('3')}`,
    fontSize: 'sm',
    borderRadius: 'base',
  },
  md: {
    height: getSpacing('10'),
    padding: `${getSpacing('2')} ${getSpacing('4')}`,
    fontSize: 'base',
    borderRadius: 'md',
  },
  lg: {
    height: getSpacing('12'),
    padding: `${getSpacing('3')} ${getSpacing('6')}`,
    fontSize: 'lg',
    borderRadius: 'lg',
  },
  xl: {
    height: getSpacing('16'),
    padding: `${getSpacing('4')} ${getSpacing('8')}`,
    fontSize: 'xl',
    borderRadius: 'xl',
  },
};

/**
 * Get component size styles
 */
export function getComponentSize(size: ComponentSize) {
  const config = COMPONENT_SIZES[size];
  return {
    height: config.height,
    padding: config.padding,
    fontSize: getFontSize(config.fontSize),
    borderRadius: getBorderRadius(config.borderRadius),
  };
}

/**
 * Component variant style generators
 */
export const COMPONENT_VARIANTS = {
  default: () => ({
    backgroundColor: getSemanticColor('surface'),
    color: getSemanticColor('text-primary'),
    border: `1px solid ${getSemanticColor('border')}`,
  }),
  
  primary: () => ({
    backgroundColor: getColorVariant('primary'),
    color: getColorVariant('primary', 'contrast'),
    border: `1px solid ${getColorVariant('primary')}`,
  }),
  
  secondary: () => ({
    backgroundColor: getColorVariant('secondary'),
    color: getColorVariant('secondary', 'contrast'),
    border: `1px solid ${getColorVariant('secondary')}`,
  }),
  
  accent: () => ({
    backgroundColor: getColorVariant('accent'),
    color: getColorVariant('accent', 'contrast'),
    border: `1px solid ${getColorVariant('accent')}`,
  }),
  
  outline: () => ({
    backgroundColor: 'transparent',
    color: getSemanticColor('text-primary'),
    border: `1px solid ${getSemanticColor('border')}`,
  }),
  
  ghost: () => ({
    backgroundColor: 'transparent',
    color: getSemanticColor('text-primary'),
    border: '1px solid transparent',
  }),
  
  link: () => ({
    backgroundColor: 'transparent',
    color: getColorVariant('primary'),
    border: 'none',
    textDecoration: 'underline',
  }),
};

/**
 * Get component variant styles
 */
export function getComponentVariant(variant: ComponentVariant) {
  return COMPONENT_VARIANTS[variant]();
}

// ===================================================================
// RESPONSIVE UTILITIES
// ===================================================================

/**
 * Breakpoint values
 */
export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

/**
 * Create media query
 */
export function mediaQuery(breakpoint: keyof typeof BREAKPOINTS): string {
  return `@media (min-width: ${BREAKPOINTS[breakpoint]})`;
}

// ===================================================================
// ANIMATION UTILITIES
// ===================================================================

/**
 * Create transition style
 */
export function createTransition(
  properties: string[] = ['all'],
  duration: string = 'normal',
  easing: string = 'out'
): string {
  return `${properties.join(', ')} ${cssVar(`duration-${duration}`)} ${cssVar(`ease-${easing}`)}`;
}

/**
 * Common transition presets
 */
export const TRANSITIONS = {
  fast: createTransition(['all'], 'fast', 'out'),
  normal: createTransition(['all'], 'normal', 'out'),
  slow: createTransition(['all'], 'slow', 'out'),
  colors: createTransition(['color', 'background-color', 'border-color'], 'normal', 'out'),
  transform: createTransition(['transform'], 'normal', 'fluid'),
  opacity: createTransition(['opacity'], 'fast', 'out'),
} as const;

// ===================================================================
// VALIDATION UTILITIES
// ===================================================================

/**
 * Validate theme name
 */
export function isValidTheme(theme: string): theme is 'light' | 'dark' {
  return ['light', 'dark'].includes(theme);
}

/**
 * Validate component size
 */
export function isValidSize(size: string): size is ComponentSize {
  return ['xs', 'sm', 'md', 'lg', 'xl'].includes(size);
}

/**
 * Validate component variant
 */
export function isValidVariant(variant: string): variant is ComponentVariant {
  return ['default', 'primary', 'secondary', 'accent', 'outline', 'ghost', 'link'].includes(variant);
}