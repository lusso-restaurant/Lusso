"use client";

import React, { useEffect, useState } from 'react';
import type { ThemeName } from '@/types/design-system';

/**
 * Standalone Theme Switch Component
 * 
 * SSR-safe theme switcher that works without context provider
 */

interface ThemeSwitchProps {
  className?: string;
  showLabels?: boolean;
}

export function ThemeSwitch({ className = '', showLabels = true }: ThemeSwitchProps) {
  const [theme, setThemeState] = useState<ThemeName>('light');
  const [mounted, setMounted] = useState(false);

  // Hydrate theme from document attribute on mount
  useEffect(() => {
    const currentTheme = document.documentElement.getAttribute('data-theme') as ThemeName;
    if (currentTheme && ['light', 'dark'].includes(currentTheme)) {
      setThemeState(currentTheme);
    }
    setMounted(true);
  }, []);

  const setTheme = (newTheme: ThemeName) => {
    setThemeState(newTheme);
    
    // Apply theme to document
    const root = document.documentElement;
    root.setAttribute('data-theme', newTheme);
    root.className = root.className.replace(/theme-\w+/, '');
    root.classList.add(`theme-${newTheme}`);
    
    // Store in localStorage
    localStorage.setItem('lusso-theme', newTheme);
  };

  // Don't render during SSR
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