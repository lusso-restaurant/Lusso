/**
 * THEME UTILITIES UNIT TESTS
 * 
 * Tests for theme utility functions and constants.
 * These validate the functionality of our centralized theme system.
 */

import { describe, test, expect, beforeEach, jest } from '@jest/globals';
import { 
  THEME_NAMES, 
  DEFAULT_THEME, 
  THEME_STORAGE_KEY,
  THEME_DATA_ATTRIBUTE,
  THEME_CONFIG,
  AURORA_COLORS,
  isValidTheme,
  getNextTheme,
  getOppositeTheme 
} from '../src/lib/theme-constants';

import {
  getCurrentThemeFromDOM,
  applyThemeToDOM,
  getThemeFromStorage,
  saveThemeToStorage,
  getInitialTheme,
  toggleTheme,
  changeTheme,
  generateAuroraGradient,
  getAuroraBackgroundColor,
  sanitizeTheme,
  createThemeValidator
} from '../src/lib/theme-utils';

// Mock DOM and localStorage for testing
const mockLocalStorage = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => { store[key] = value; },
    clear: () => { store = {}; }
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: mockLocalStorage
});

// Mock document methods for testing
const mockGetAttribute = jest.fn();
const mockSetAttribute = jest.fn();
const mockClassListAdd = jest.fn();

// Setup DOM mocks
beforeEach(() => {
  Object.defineProperty(document.documentElement, 'getAttribute', {
    value: mockGetAttribute,
    writable: true
  });
  Object.defineProperty(document.documentElement, 'setAttribute', {
    value: mockSetAttribute,
    writable: true
  });
  Object.defineProperty(document.documentElement, 'classList', {
    value: { add: mockClassListAdd },
    writable: true
  });
  Object.defineProperty(document.documentElement, 'className', {
    value: '',
    writable: true
  });
});

// ===================================================================
// THEME CONSTANTS TESTS
// ===================================================================

describe('Theme Constants', () => {
  test('THEME_NAMES should contain light and dark', () => {
    expect(THEME_NAMES).toEqual(['light', 'dark']);
  });

  test('DEFAULT_THEME should be light', () => {
    expect(DEFAULT_THEME).toBe('light');
  });

  test('THEME_CONFIG should have both themes with required properties', () => {
    expect(THEME_CONFIG.light).toBeDefined();
    expect(THEME_CONFIG.dark).toBeDefined();
    
    Object.values(THEME_CONFIG).forEach(config => {
      expect(config.name).toBeDefined();
      expect(config.label).toBeDefined();
    });
  });

  test('AURORA_COLORS should have color palettes for each theme', () => {
    expect(AURORA_COLORS.light).toBeDefined();
    expect(AURORA_COLORS.dark).toBeDefined();
    
    Object.values(AURORA_COLORS).forEach(palette => {
      expect(palette.color1).toBeDefined();
      expect(palette.color2).toBeDefined();
      expect(palette.color3).toBeDefined();
      expect(palette.color4).toBeDefined();
      expect(palette.color5).toBeDefined();
    });
  });
});

// ===================================================================
// VALIDATION HELPERS TESTS
// ===================================================================

describe('Validation Helpers', () => {
  test('isValidTheme should validate theme names correctly', () => {
    expect(isValidTheme('light')).toBe(true);
    expect(isValidTheme('dark')).toBe(true);
    expect(isValidTheme('invalid')).toBe(false);
    expect(isValidTheme('')).toBe(false);
  });

  test('getNextTheme should cycle through themes', () => {
    expect(getNextTheme('light')).toBe('dark');
    expect(getNextTheme('dark')).toBe('light');
  });

  test('getOppositeTheme should return opposite theme', () => {
    expect(getOppositeTheme('light')).toBe('dark');
    expect(getOppositeTheme('dark')).toBe('light');
  });
});

// ===================================================================
// THEME UTILITIES TESTS
// ===================================================================

describe('Theme Utilities', () => {
  beforeEach(() => {
    mockLocalStorage.clear();
    jest.clearAllMocks();
  });

  describe('Storage utilities', () => {
    test('saveThemeToStorage should save theme to localStorage', () => {
      saveThemeToStorage('dark');
      expect(mockLocalStorage.getItem(THEME_STORAGE_KEY)).toBe('dark');
    });

    test('getThemeFromStorage should retrieve valid theme', () => {
      mockLocalStorage.setItem(THEME_STORAGE_KEY, 'dark');
      expect(getThemeFromStorage()).toBe('dark');
    });

    test('getThemeFromStorage should return null for invalid theme', () => {
      mockLocalStorage.setItem(THEME_STORAGE_KEY, 'invalid');
      expect(getThemeFromStorage()).toBe(null);
    });

    test('getInitialTheme should return stored theme or default', () => {
      expect(getInitialTheme()).toBe(DEFAULT_THEME);
      
      mockLocalStorage.setItem(THEME_STORAGE_KEY, 'dark');
      expect(getInitialTheme()).toBe('dark');
    });
  });

  describe('DOM utilities', () => {
    test('applyThemeToDOM should set data attribute and class', () => {
      applyThemeToDOM('dark');
      
      expect(mockSetAttribute).toHaveBeenCalledWith(
        THEME_DATA_ATTRIBUTE, 
        'dark'
      );
      expect(mockClassListAdd).toHaveBeenCalledWith('theme-dark');
    });

    test('getCurrentThemeFromDOM should return theme from DOM or default', () => {
      mockGetAttribute.mockReturnValue('dark');
      expect(getCurrentThemeFromDOM()).toBe('dark');
      
      mockGetAttribute.mockReturnValue(null);
      expect(getCurrentThemeFromDOM()).toBe(DEFAULT_THEME);
    });
  });

  describe('Theme switching utilities', () => {
    test('toggleTheme should return next theme', () => {
      expect(toggleTheme('light')).toBe('dark');
      expect(toggleTheme('dark')).toBe('light');
    });
  });

  describe('Aurora utilities', () => {
    test('generateAuroraGradient should create gradient string', () => {
      const gradient = generateAuroraGradient('light');
      expect(gradient).toContain('repeating-linear-gradient');
      expect(gradient).toContain(AURORA_COLORS.light.color1);
    });

    test('getAuroraBackgroundColor should return correct colors', () => {
      expect(getAuroraBackgroundColor('light')).toBe('#f8f8f8');
      expect(getAuroraBackgroundColor('dark')).toBe('#1a1a1a');
    });
  });

  describe('Validation utilities', () => {
    test('sanitizeTheme should return valid theme or default', () => {
      expect(sanitizeTheme('light')).toBe('light');
      expect(sanitizeTheme('dark')).toBe('dark');
      expect(sanitizeTheme('invalid')).toBe(DEFAULT_THEME);
      expect(sanitizeTheme(null)).toBe(DEFAULT_THEME);
      expect(sanitizeTheme(undefined)).toBe(DEFAULT_THEME);
    });

    test('createThemeValidator should validate themes', () => {
      const validator = createThemeValidator();
      
      const validResult = validator('light');
      expect(validResult.isValid).toBe(true);
      expect(validResult.sanitized).toBe('light');
      
      const invalidResult = validator('invalid');
      expect(invalidResult.isValid).toBe(false);
      expect(invalidResult.sanitized).toBe(DEFAULT_THEME);
      expect(invalidResult.availableThemes).toEqual([...THEME_NAMES]);
    });
  });
});