# SSR-Safe Theme Integration Patterns

**Date**: 2025-01-28  
**Status**: ✅ **PRODUCTION READY**  

## 🎯 **Quick Reference**

### **❌ NEVER DO - Direct Hook Usage**
```tsx
// DANGEROUS: Throws "useTheme must be used within a ThemeProvider" during SSR
const { theme, setTheme } = useTheme();
```

### **✅ ALWAYS DO - Conditional Context Usage**
```tsx
// SAFE: Works in both SSR and client phases
const themeContext = useContext(ThemeContext);
const theme = themeContext?.theme ?? DEFAULT_THEME;
```

## 🔧 **Complete Implementation Pattern**

```tsx
import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '@/components/ui/theme-provider';
import { DEFAULT_THEME } from '@/lib/theme-constants';
import type { ThemeName } from '@/types/design-system';

export function YourThemeComponent() {
  // SSR-safe context access
  const themeContext = useContext(ThemeContext);
  const [localTheme, setLocalTheme] = useState<ThemeName>(DEFAULT_THEME);
  const [mounted, setMounted] = useState(false);

  // Use context when available, fallback during SSR
  const theme = themeContext?.theme ?? localTheme;

  useEffect(() => {
    // Hydrate from DOM on mount
    const currentTheme = document.documentElement.getAttribute('data-theme') as ThemeName;
    if (currentTheme && ['light', 'dark'].includes(currentTheme)) {
      setLocalTheme(currentTheme);
    }
    setMounted(true);
  }, []);

  // Smart theme switching
  const setTheme = (newTheme: ThemeName) => {
    if (themeContext?.setTheme) {
      // Context available: let ThemeProvider handle updates
      themeContext.setTheme(newTheme);
    } else {
      // SSR/fallback: direct DOM manipulation
      setLocalTheme(newTheme);
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('lusso-theme', newTheme);
    }
  };

  // SSR fallback during hydration
  if (!mounted) {
    return <div>Loading theme...</div>;
  }

  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Switch to {theme === 'light' ? 'dark' : 'light'} theme
    </button>
  );
}
```

## 🛡️ **Why This Pattern Works**

### **During SSR Phase:**
- ThemeProvider renders children without context wrapper
- Components use `localTheme` fallback → No crashes
- Page loads successfully with default theme

### **After Client Mount:**
- ThemeProvider provides context to all children
- Components switch to `themeContext.theme` → Full reactivity
- Theme changes propagate instantly to all subscribers

## 🚨 **Common Mistakes to Avoid**

### **1. Direct useTheme() Hook Usage**
```tsx
// ❌ BREAKS SSR
const { theme } = useTheme();
```

### **2. Missing Fallback Values**
```tsx
// ❌ BREAKS when context unavailable
const theme = themeContext.theme; // undefined during SSR
```

### **3. No SSR Hydration Handling**
```tsx
// ❌ CAUSES hydration mismatches
return <div>{theme}</div>; // Different values between server/client
```

## ✅ **Verification Checklist**

Before deploying theme components:

- [ ] Uses `useContext(ThemeContext)` not `useTheme()` hook
- [ ] Has fallback value: `themeContext?.theme ?? DEFAULT_THEME`
- [ ] Handles SSR phase with `mounted` state
- [ ] Tests pass: `npm test`
- [ ] No SSR errors in browser console
- [ ] Theme switching works instantly (no refresh needed)

## 📚 **Related Documentation**

- [Aurora Reactivity Investigation](./aurora-reactivity-investigation.md) - Full problem analysis
- [Theme Constants](../src/lib/theme-constants.ts) - Theme definitions
- [Theme Provider](../src/components/ui/theme-provider.tsx) - Context implementation

---

**🏆 Success Pattern**: This pattern ensures perfect SSR compatibility while maintaining instant theme reactivity across all components.