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
  iconOnly?: boolean;
}

export function ThemeSwitch({ className = '', showLabels = true, iconOnly = false }: ThemeSwitchProps) {
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

  const themes: { name: ThemeName; label: string; icon: React.ReactElement }[] = [
    { 
      name: 'light', 
      label: 'Light', 
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5"/>
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
        </svg>
      )
    },
    { 
      name: 'dark', 
      label: 'Dark', 
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      )
    },
  ];

  if (iconOnly) {
    const currentThemeData = themes.find(t => t.name === theme);
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    
    return (
      <button
        onClick={() => setTheme(nextTheme)}
        className={`
          flex items-center justify-center w-10 h-10 rounded-lg
          transition-all duration-200 ease-out
          focus:outline-none focus:ring-2 focus:ring-offset-2
          hover:scale-105 ${className}
        `}
        style={{
          backgroundColor: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          color: 'var(--color-text-primary)',
        }}
        aria-label={`Switch to ${nextTheme} theme`}
        title={`Switch to ${nextTheme} theme`}
      >
        {currentThemeData?.icon}
      </button>
    );
  }

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
            {themeOption.icon}
            {showLabels && <span>{themeOption.label}</span>}
          </button>
        ))}
      </div>
    </div>
  );
}