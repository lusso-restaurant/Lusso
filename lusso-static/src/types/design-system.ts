/**
 * LUSSO DESIGN SYSTEM - TYPE DEFINITIONS
 * 
 * Ultra-modular design system with theme switching capabilities.
 * These types ensure type safety when working with design tokens.
 */

// ===================================================================
// THEME SYSTEM
// ===================================================================

export type ThemeName = 'light' | 'dark';

export interface ThemeContextValue {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  toggleTheme: () => void;
}

// ===================================================================
// COLOR SYSTEM
// ===================================================================

export type ColorVariant = 
  | 'primary' 
  | 'secondary' 
  | 'accent'
  | 'success'
  | 'warning'
  | 'error'
  | 'info';

export type ColorShade = 
  | '50' | '100' | '200' | '300' | '400' | '500' 
  | '600' | '700' | '800' | '900' | '950';

export type SemanticColor =
  | 'background'
  | 'surface'
  | 'surface-elevated'
  | 'surface-overlay'
  | 'text-primary'
  | 'text-secondary'
  | 'text-muted'
  | 'text-inverse'
  | 'border'
  | 'border-focus'
  | 'outline';

// ===================================================================
// TYPOGRAPHY SYSTEM
// ===================================================================

export type FontFamily = 'display' | 'body' | 'mono' | 'system';

export type FontSize = 
  | 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' 
  | '3xl' | '4xl' | '5xl' | '6xl';

export type FontWeight = 
  | 'light' | 'regular' | 'medium' | 'semibold' 
  | 'bold' | 'black';

export type LineHeight = 
  | 'tight' | 'snug' | 'normal' | 'relaxed' | 'loose';

export type LetterSpacing = 
  | 'tighter' | 'tight' | 'normal' | 'wide' 
  | 'wider' | 'widest';

// ===================================================================
// SPACING SYSTEM
// ===================================================================

export type SpaceScale = 
  | 'px' | '0' | '1' | '2' | '3' | '4' | '5' | '6' 
  | '8' | '10' | '12' | '16' | '20' | '24' | '32' 
  | '40' | '48' | '56' | '64';

export type BorderRadius = 
  | 'none' | 'sm' | 'base' | 'md' | 'lg' | 'xl' 
  | '2xl' | '3xl' | 'full';

// ===================================================================
// SHADOW SYSTEM
// ===================================================================

export type ShadowScale = 
  | 'xs' | 'sm' | 'base' | 'md' | 'lg' | 'xl' 
  | '2xl' | 'inner';

// ===================================================================
// ANIMATION SYSTEM
// ===================================================================

export type AnimationDuration = 
  | 'instant' | 'fast' | 'normal' | 'slow' | 'slower';

export type AnimationEasing = 
  | 'linear' | 'in' | 'out' | 'in-out' | 'fluid' | 'snappy';

// ===================================================================
// COMPONENT VARIANTS
// ===================================================================

export type ComponentSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type ComponentVariant = 
  | 'default' | 'primary' | 'secondary' | 'accent'
  | 'outline' | 'ghost' | 'link';

// ===================================================================
// RESPONSIVE BREAKPOINTS
// ===================================================================

export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

// ===================================================================
// Z-INDEX SYSTEM
// ===================================================================

export type ZIndex = 
  | 'auto' | '0' | '10' | '20' | '30' | '40' | '50'
  | 'dropdown' | 'sticky' | 'fixed' | 'modal-backdrop'
  | 'modal' | 'popover' | 'tooltip' | 'toast';

// ===================================================================
// DESIGN TOKEN UTILITIES
// ===================================================================

/**
 * Utility type for creating CSS custom property names
 */
export type CSSCustomProperty<T extends string> = `--${T}`;

/**
 * Utility type for creating CSS var() references
 */
export type CSSVar<T extends string> = `var(--${T})`;

/**
 * Design token structure for consistent theming
 */
export interface DesignToken<T = string> {
  value: T;
  description?: string;
  deprecated?: boolean;
}

/**
 * Component style props for consistent styling APIs
 */
export interface StyleProps {
  variant?: ComponentVariant;
  size?: ComponentSize;
  className?: string;
}