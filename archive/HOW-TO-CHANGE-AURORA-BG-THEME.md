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