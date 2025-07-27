"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';
import type { ThemeName, ThemeContextValue } from '@/types/design-system';

/**
 * LUSSO THEME PROVIDER
 * 
 * Ultra-modular theme system that enables seamless theme switching
 * across the entire application. Persists theme preference in localStorage.
 * 
 * @example
 * ```tsx
 * // Wrap your app
 * <ThemeProvider defaultTheme="light">
 *   <App />
 * </ThemeProvider>
 * 
 * // Use in components
 * const { theme, setTheme, toggleTheme } = useTheme();
 * ```
 */

export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: ThemeName;
  storageKey?: string;
}

export function ThemeProvider({
  children,
  defaultTheme = 'light',
  storageKey = 'lusso-theme',
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<ThemeName>(defaultTheme);
  const [mounted, setMounted] = useState(false);

  // Hydrate theme from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(storageKey) as ThemeName;
    if (stored && ['light', 'dark'].includes(stored)) {
      setThemeState(stored);
    }
    setMounted(true);
  }, [storageKey]);

  // Apply theme to document
  useEffect(() => {
    if (!mounted) return;
    
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    
    // Optional: Add theme class for additional styling hooks
    root.className = root.className.replace(/theme-\w+/, '');
    root.classList.add(`theme-${theme}`);
    
    localStorage.setItem(storageKey, theme);
  }, [theme, mounted, storageKey]);

  const setTheme = (newTheme: ThemeName) => {
    setThemeState(newTheme);
  };

  const toggleTheme = () => {
    const themes: ThemeName[] = ['light', 'dark'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  const value: ThemeContextValue = {
    theme,
    setTheme,
    toggleTheme,
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <div style={{ visibility: 'hidden' }}>
        {children}
      </div>
    );
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * Hook to consume theme context
 * 
 * @throws Error if used outside ThemeProvider
 */
export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  
  return context;
}

/**
 * Theme Switch Component
 * 
 * Ready-to-use component for theme switching with accessible controls
 */
interface ThemeSwitchProps {
  className?: string;
  showLabels?: boolean;
}

export function ThemeSwitch({ className = '', showLabels = true }: ThemeSwitchProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <div 
          className="flex rounded-lg p-1"
          style={{ 
            backgroundColor: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            width: showLabels ? '200px' : '120px',
            height: '40px',
          }}
        />
      </div>
    );
  }

  const themes: { name: ThemeName; label: string; icon: string }[] = [
    { name: 'light', label: 'Light', icon: '☀️' },
    { name: 'dark', label: 'Dark', icon: '🌙' },
  ];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {showLabels && (
        <span 
          className="text-sm font-medium"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          Theme:
        </span>
      )}
      
      <div 
        className="flex rounded-lg p-1"
        style={{ 
          backgroundColor: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
        }}
      >
        {themes.map((themeOption) => (
          <button
            key={themeOption.name}
            onClick={() => setTheme(themeOption.name)}
            className={`
              flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium
              transition-all duration-200 ease-out
              focus:outline-none focus:ring-2 focus:ring-offset-2
            `}
            style={{
              backgroundColor: theme === themeOption.name 
                ? 'var(--color-primary)' 
                : 'transparent',
              color: theme === themeOption.name 
                ? 'var(--color-primary-contrast)' 
                : 'var(--color-text-primary)',
              borderRadius: 'var(--radius-md)',
            }}
            aria-pressed={theme === themeOption.name}
            title={`Switch to ${themeOption.label} theme`}
          >
            <span>{themeOption.icon}</span>
            {showLabels && <span>{themeOption.label}</span>}
          </button>
        ))}
      </div>
    </div>
  );
}