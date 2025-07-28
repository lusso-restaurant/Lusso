# Lusso Design System Documentation

## 📖 Documentation Navigation
- **[← Back to Documentation Index](./README.md)**
- **[Component Development Guide](./COMPONENT-GUIDE.md)**
- **[Project Overview](../README.md)**
- **[Product Requirements](../PRD.md)**

## 🎨 Ultra-Modular Design System

A comprehensive, theme-switchable design system built for the Lusso restaurant website. Designed for maximum modularity, easy theme swapping, and consistent styling across all components.

## 🏗️ Architecture Overview

```
src/
├── app/
│   ├── globals.css          # Complete design system CSS
│   └── layout.tsx           # Font loading & theme setup
├── types/
│   └── design-system.ts     # TypeScript type definitions
├── lib/
│   └── design-system.ts     # Runtime utility functions
└── components/
    └── ui/
        ├── theme-provider.tsx   # Theme context provider
        └── theme-switch.tsx     # Standalone theme switcher
```

## 🎯 Core Principles

1. **Theme Agnostic**: All components work with any theme
2. **CSS Custom Properties**: Native browser support, zero JS required for styling
3. **Type Safety**: Full TypeScript coverage for design tokens
4. **Modular Imports**: Import only what you need
5. **Static Export Ready**: Works perfectly with GitHub Pages/static hosting

## 🎨 Color System

### Theme Structure
- **2 Built-in Themes**: Light (default), Dark
- **Semantic Tokens**: Abstract color names that change per theme
- **Brand Colors**: Consistent Lusso brand palette across themes

### Available Themes

#### Light Theme (Default)
```css
--color-primary: #D4AF37 (Gold)
--color-secondary: #0F1035 (Dark Blue)
--color-accent: #D4AF37 (Gold)
--color-background: #0D0D0D (Dark Grey)
```

#### Dark Theme
```css
--color-primary: #D4AF37 (Gold)
--color-secondary: #0F1035 (Dark Blue)
--color-accent: #D4AF37 (Gold)
--color-background: #0D0D0D (Dark Grey)
```

### Using Colors

#### In CSS
```css
.my-component {
  background-color: var(--color-primary);
  color: var(--color-primary-contrast);
  border: 1px solid var(--color-border);
}
```

#### In JavaScript/React
```tsx
import { getColorVariant, getSemanticColor } from '@/lib/design-system';

const styles = {
  backgroundColor: getColorVariant('primary'),
  color: getSemanticColor('text-primary'),
};
```

## 📝 Typography System

### Font Families
- **Display**: DM Serif Display (luxury serif for H1/logo elements)
- **Sans**: Inter (modern sans-serif for H2-H6, body text, UI components)
- **Mono**: JetBrains Mono (monospace for code)
- **System**: System fallback fonts

### Font Sizes (Fluid Typography)
```css
--font-size-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)
--font-size-sm: clamp(0.875rem, 0.8rem + 0.375vw, 1rem)
--font-size-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem)
--font-size-lg: clamp(1.125rem, 1rem + 0.625vw, 1.25rem)
--font-size-xl: clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)
--font-size-2xl: clamp(1.5rem, 1.3rem + 1vw, 2rem)
--font-size-3xl: clamp(1.875rem, 1.6rem + 1.375vw, 2.5rem)
--font-size-4xl: clamp(2.25rem, 1.9rem + 1.75vw, 3rem)
--font-size-5xl: clamp(3rem, 2.5rem + 2.5vw, 4rem)
--font-size-6xl: clamp(3.75rem, 3rem + 3.75vw, 5rem)
```

### Usage Examples

#### CSS
```css
.heading {
  font-family: var(--font-display);
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
}

.body-text {
  font-family: var(--font-sans);
  font-size: var(--font-size-base);
  line-height: var(--line-height-relaxed);
}
```

#### JavaScript
```tsx
import { createTypographyStyle } from '@/lib/design-system';

const headingStyle = createTypographyStyle({
  family: 'display',
  size: '3xl',
  weight: 'bold',
});

const bodyStyle = createTypographyStyle({
  family: 'sans',
  size: 'base',
  weight: 'regular',
});
```

## 📏 Spacing System

### Scale (4px base unit)
```css
--space-1: 4px
--space-2: 8px
--space-3: 12px
--space-4: 16px
--space-6: 24px
--space-8: 32px
--space-12: 48px
--space-16: 64px
--space-24: 96px
--space-32: 128px
```

### Usage
```css
.component {
  padding: var(--space-6);
  margin-bottom: var(--space-8);
  gap: var(--space-4);
}
```

## 🧩 Component System

### Size Variants
- **xs**: Extra small (24px height)
- **sm**: Small (32px height) 
- **md**: Medium (40px height)
- **lg**: Large (48px height)
- **xl**: Extra large (64px height)

### Style Variants
- **default**: Neutral surface styling
- **primary**: Glossy gold accent
- **secondary**: Dark blue professional
- **accent**: Matte gold subtle
- **outline**: Transparent with border
- **ghost**: Transparent minimal
- **link**: Text-only with underline

### Usage Example
```tsx
import { getComponentSize, getComponentVariant } from '@/lib/design-system';

const buttonStyle = {
  ...getComponentSize('lg'),
  ...getComponentVariant('primary'),
};
```

## 🔄 Theme Switching

### Automatic Theme Switching
```tsx
import { ThemeSwitch } from '@/components/ui/theme-switch';

export function Header() {
  return (
    <header>
      <h1>Lusso</h1>
      <ThemeSwitch showLabels={true} />
    </header>
  );
}
```

### Manual Theme Control
```tsx
// Change theme programmatically
document.documentElement.setAttribute('data-theme', 'dark');

// Store preference
localStorage.setItem('lusso-theme', 'dark');
```

### CSS Theme Detection
```css
/* Style specific to light theme */
[data-theme="light"] .special-element {
  background: var(--brand-glossy-gold);
}

/* Style specific to dark theme */
[data-theme="dark"] .special-element {
  background: var(--brand-matte-gold);
}
```

## 🚀 Quick Start Guide

### 1. Basic Component Styling
```tsx
function MyComponent() {
  return (
    <div
      style={{
        backgroundColor: 'var(--color-surface)',
        color: 'var(--color-text-primary)',
        padding: 'var(--space-6)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-md)',
      }}
    >
      <h2
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'var(--font-size-2xl)',
          color: 'var(--color-primary)',
        }}
      >
        Light Component
      </h2>
    </div>
  );
}
```

### 2. Using Utility Functions
```tsx
import { 
  getSemanticColor, 
  getSpacing, 
  getBorderRadius,
  createTypographyStyle 
} from '@/lib/design-system';

const styles = {
  container: {
    backgroundColor: getSemanticColor('surface'),
    padding: getSpacing('6'),
    borderRadius: getBorderRadius('lg'),
  },
  heading: createTypographyStyle({
    family: 'display',
    size: '2xl',
    weight: 'bold',
  }),
};
```

### 3. Theme-Aware Components
```tsx
import { useEffect, useState } from 'react';

function ThemeAwareComponent() {
  const [theme, setTheme] = useState('light');
  
  useEffect(() => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    setTheme(currentTheme || 'light');
  }, []);
  
  return (
    <div className={`component theme-${theme}`}>
      Current theme: {theme}
    </div>
  );
}
```

## 🎯 Best Practices

### ✅ Do
- Use semantic color tokens (`--color-primary`, `--color-text-primary`)
- Import types with `import type` for better tree-shaking
- Use design system utilities for consistency
- Test all themes when building components
- Follow the spacing scale for consistent layouts

### ❌ Don't
- Hard-code hex colors in components
- Use absolute units (px) for responsive elements
- Mix Tailwind classes with design system variables
- Break the CSS custom property naming convention
- Skip TypeScript types for component props

## 📱 Responsive Design

### Breakpoints
```typescript
export const BREAKPOINTS = {
  sm: '640px',   // Mobile landscape
  md: '768px',   // Tablet portrait  
  lg: '1024px',  // Tablet landscape
  xl: '1280px',  // Desktop
  '2xl': '1536px' // Large desktop
} as const;
```

### Usage
```css
.responsive-component {
  padding: var(--space-4);
}

@media (min-width: 768px) {
  .responsive-component {
    padding: var(--space-8);
  }
}
```

## 🔧 Customization

### Adding New Themes
1. Add theme data attribute to CSS:
```css
[data-theme="custom"] {
  --color-primary: #your-color;
  --color-secondary: #your-color;
  /* ... other color tokens */
}
```

2. Update TypeScript types:
```typescript
export type ThemeName = 'light' | 'dark' | 'custom';
```

### Extending Color Palette
```css
:root {
  /* Add new brand colors */
  --brand-custom-blue: #1e40af;
  --brand-custom-green: #059669;
}

[data-theme="light"] {
  /* Map to semantic tokens */
  --color-info: var(--brand-custom-blue);
  --color-success: var(--brand-custom-green);
}
```

## 🚀 Performance

- **Zero Runtime CSS**: All styling works without JavaScript
- **CSS Custom Properties**: Native browser support, excellent performance
- **Tree Shaking**: Import only the utilities you use
- **Static Export Compatible**: Works perfectly with GitHub Pages
- **Font Display Swap**: Optimized font loading for performance
- **Minimal Bundle**: Types don't add to bundle size

## 📚 Related Documentation

- **[Component Guide](./COMPONENT-GUIDE.md)** - Complete guide to building components with this design system
- **[Documentation Index](./README.md)** - Navigation to all project documentation
- **[Project README](../README.md)** - Quick start and technology overview
- **[Component Research](../archive/COMPONENT-RESEARCH.md)** - Historical component research and third-party library analysis
- **[Refactoring Sessions](./refactoring-sessions/)** - Recent improvements and optimizations
- **[Project Archive](../archive/)** - Historical development documents

---

**Next Steps**: Ready to build Lusso restaurant components using this design system foundation! 🍽️✨