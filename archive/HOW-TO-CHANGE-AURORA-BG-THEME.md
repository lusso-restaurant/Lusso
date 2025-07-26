# How to Change Aurora Background Theme

This guide provides detailed instructions on safely modifying the theme of the `AuroraBackground` component located in `src/components/ui/aurora-background.tsx`. Changes should be made carefully to avoid breaking the component's functionality. Always test modifications in a development environment and preview at http://localhost:3000/mockup.

## Overview
The `AuroraBackground` component uses CSS variables, gradients, and Tailwind classes to create a dynamic background effect. Key elements include:
- Base background colors for light and dark modes.
- CSS variables for gradient colors.
- Gradient definitions using these variables.
- Additional styles for animation and blending.

## 1. Changing Base Background Colors
The base colors are set in the `className` of the main `div`:
- Light mode: `bg-zinc-50` (default grey-ish white).
- Dark mode: `dark:bg-zinc-900` (default dark grey).

To make it brighter:
- Change light mode to `bg-white` or a lighter shade like `bg-gray-100`.
- For dark mode, use a lighter grey like `dark:bg-gray-700` or `dark:bg-gray-500`.

Example:
```tsx
<div
  className={cn(
    "transition-bg relative flex h-[100vh] flex-col items-center justify-center bg-white text-slate-950 dark:bg-gray-700",
    className,
  )}
  {...props}
>
```

**Note:** Ensure the text color `text-slate-950` contrasts well with the new background.

## 2. Modifying Gradient Colors
Colors are defined as CSS variables in the `style` object of the inner `div`:
```tsx
style={{
  "--aurora": "repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)",
  // Other gradients...
  "--blue-300": "#93c5fd",
  "--blue-400": "#60a5fa",
  "--blue-500": "#3b82f6",
  "--indigo-300": "#a5b4fc",
  "--violet-200": "#ddd6fe",
  // Other variables...
} as React.CSSProperties}
```
- Update hex values in variables like `--blue-500` to new colors (e.g., `#ff0000` for red).
- Avoid direct edits to gradient strings; use variables to maintain consistency.
- The gradients are used in the `className` of the innermost `div` for effects like `background-image:var(--white-gradient),var(--aurora)`.

## 3. Adjusting Other Properties
- **Radial Gradient Mask:** Controlled by `showRadialGradient` prop (default: true). Set to false to remove the mask.
- **Opacity and Blur:** In the innermost `div` class, adjust `opacity-50 blur-[10px]` for effect intensity.
- **Animation:** The `after:animate-aurora` class handles animation; modify CSS keyframes if needed (not in this file).

## Best Practices
- **Test Incrementally:** Change one thing at a time and preview.
- **Theme Awareness:** Ensure changes work in both light and dark modes.
- **Avoid Breaking Changes:** Do not remove variables or alter structure; stick to value updates.
- **Revert if Needed:** Use version control to rollback.

If issues arise, check console for errors and ensure CSS variables are correctly referenced.

## Under Testing

### Proposed Theme-Aware Aurora System
**Status:** Testing Phase - Adding CSS variables to integrate aurora with design system

**CSS Variables to Add to `globals.css`:**
```css
/* Aurora Theme Integration - Add to existing :root */
:root {
  --aurora-primary: var(--color-primary);
  --aurora-secondary: var(--color-accent);  
  --aurora-tertiary: var(--color-secondary);
}

/* Light theme - subtle luxury aurora */
[data-theme="light"] {
  --aurora-color-1: #D4AF37;  /* Brand gold */
  --aurora-color-2: #E5C96A;  /* Light gold */
  --aurora-color-3: #B2935B;  /* Matte gold */
  --aurora-color-4: #F4F4F4;  /* Matte white */
  --aurora-color-5: #C0B9A0;  /* Neutral */
}

/* Dark theme - dramatic teal/gold aurora */
[data-theme="dark"] {
  --aurora-color-1: #37D4AF;  /* Brand teal */
  --aurora-color-2: #5CE5C5;  /* Light teal */
  --aurora-color-3: #D4AF37;  /* Brand gold */
  --aurora-color-4: #2BB89B;  /* Deep teal */
  --aurora-color-5: #B2935b;  /* Matte gold */
}
```

**Component Updates to Test:**
```tsx
// Phase 2: Replace in aurora-background.tsx (line 31)
"--aurora": "repeating-linear-gradient(100deg,var(--aurora-color-1)_10%,var(--aurora-color-2)_15%,var(--aurora-color-3)_20%,var(--aurora-color-4)_25%,var(--aurora-color-5)_30%)"

// Phase 3: Replace background (line 20)  
style={{ backgroundColor: 'var(--color-background)' }}
```

**Testing Goals:**
- ✅ Instant theme switching for aurora colors
- ✅ Brand-aligned aurora colors (gold/teal vs generic blue/purple)
- ✅ Maintain existing animation and blur effects
- ✅ Preserve accessibility and reduced motion support

**Testing Notes:**
- Start with CSS variables only
- Test theme switching behavior
- Verify aurora visibility in both themes
- Check for any console errors

## ✅ WORKING SOLUTION (Updated July 26, 2025)

**Status:** Theme switching now works perfectly using JavaScript approach

### **What Actually Works**
The component now uses **direct DOM theme detection** instead of CSS variables:

```tsx
// In aurora-background.tsx - Working approach:
useEffect(() => {
  // Read theme directly from data-theme attribute
  const currentTheme = document.documentElement.getAttribute('data-theme') as 'light' | 'dark' || 'light';
  setTheme(currentTheme);
  
  // Listen for theme changes in real-time
  const observer = new MutationObserver(() => {
    const newTheme = document.documentElement.getAttribute('data-theme') as 'light' | 'dark' || 'light';
    setTheme(newTheme);
  });
  
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme']
  });
}, []);
```

### **Key Changes Made**
1. **Removed CSS variable approach** - Proved unreliable due to scope issues
2. **Added `key` prop for forced re-rendering**: `key={aurora-${theme}}`
3. **Theme-reactive background colors**: `backgroundColor: theme === 'light' ? '#f8f8f8' : '#1a1a1a'`
4. **Component-level color definitions** instead of CSS variables

### **How to Modify Colors Now**
**Easy Method - Update the component directly:**

```tsx
// In aurora-background.tsx, modify this object:
const auroraColors = {
  light: {
    color1: "#D4AF37", // Change this for light theme color 1
    color2: "#FFD700", // Change this for light theme color 2
    // ... etc
  },
  dark: {
    color1: "#37D4AF", // Change this for dark theme color 1
    color2: "#5CE5C5", // Change this for dark theme color 2
    // ... etc
  }
};
```

### **Testing Method**
1. **Test background changes first**: Modify `backgroundColor` logic to use dramatic colors (white vs black)
2. **Verify theme switching**: Click theme button and see instant background change
3. **Then adjust aurora colors**: Modify `auroraColors` object
4. **Console logging available**: Check browser console for theme change confirmations

For detailed technical implementation, see `/archive/AURORA-THEME-SWITCHING-FIX.md`