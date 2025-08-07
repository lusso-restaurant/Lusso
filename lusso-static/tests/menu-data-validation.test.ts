import fs from 'fs';
import path from 'path';
import { menuData, MenuItem, MenuCategory } from '../src/data/menu';

interface ParsedMenuItem {
  id: string;
  name: string;
  weight?: string;
  price: number;
  ingredients: string;
  allergens: string[];
  nutritionalValues: {
    energy: string;
    fat: string;
    saturatedFat: string;
    carbohydrates: string;
    sugars: string;
    protein: string;
    salt: string;
  };
}

interface ParsedMenuCategory {
  id: string;
  name: string;
  items: ParsedMenuItem[];
}

interface ValidationResult {
  success: boolean;
  errors: string[];
  warnings: string[];
  summary: {
    totalItemsInMd: number;
    totalItemsInTs: number;
    missingItems: number;
    extraItems: number;
    mismatchedItems: number;
  };
}

describe('Menu Data Validation', () => {
  let menuMdContent: string;
  let parsedMenuData: ParsedMenuCategory[];

  beforeAll(() => {
    // Read Menu.md file
    const menuMdPath = path.join(__dirname, '../../Menu.md');
    menuMdContent = fs.readFileSync(menuMdPath, 'utf-8');
    parsedMenuData = parseMenuMd(menuMdContent);
  });

  test('Menu.md file should exist and be readable', () => {
    expect(menuMdContent).toBeDefined();
    expect(menuMdContent.length).toBeGreaterThan(0);
  });

  test('All menu items from Menu.md should exist in menu.ts', () => {
    const result = validateMenuData(parsedMenuData, menuData);
    
    if (!result.success) {
      console.log('\n=== MENU VALIDATION REPORT ===');
      console.log(`Total items in Menu.md: ${result.summary.totalItemsInMd}`);
      console.log(`Total items in menu.ts: ${result.summary.totalItemsInTs}`);
      console.log(`Missing items: ${result.summary.missingItems}`);
      console.log(`Extra items: ${result.summary.extraItems}`);
      console.log(`Mismatched items: ${result.summary.mismatchedItems}`);
      
      if (result.errors.length > 0) {
        console.log('\n=== ERRORS ===');
        result.errors.forEach(error => console.log(`❌ ${error}`));
        // Write errors to file for debugging
        const fs = require('fs');
        fs.writeFileSync('validation-errors.txt', result.errors.join('\n'));
      }
      
      if (result.warnings.length > 0) {
        console.log('\n=== WARNINGS ===');
        result.warnings.forEach(warning => console.log(`⚠️  ${warning}`));
      }
      console.log('\n==============================\n');
    }

    expect(result.success).toBe(true);
    expect(result.errors).toHaveLength(0);
  });

  test('All categories from Menu.md should exist in menu.ts', () => {
    const mdCategories = parsedMenuData.map(cat => normalizeText(cat.name));
    const tsCategories = menuData.map(cat => normalizeText(cat.name));
    
    const missingCategories = mdCategories.filter(cat => !tsCategories.includes(cat));
    const extraCategories = tsCategories.filter(cat => !mdCategories.includes(cat));
    
    if (missingCategories.length > 0) {
      console.log('Missing categories in menu.ts:', missingCategories);
    }
    if (extraCategories.length > 0) {
      console.log('Extra categories in menu.ts:', extraCategories);
    }
    
    expect(missingCategories).toHaveLength(0);
  });

  test('Menu data structure should be consistent', () => {
    // Validate that all items have required fields
    menuData.forEach(category => {
      expect(category.id).toBeDefined();
      expect(category.name).toBeDefined();
      expect(Array.isArray(category.items)).toBe(true);
      
      category.items.forEach(item => {
        expect(item.id).toBeDefined();
        expect(item.name).toBeDefined();
        expect(typeof item.price).toBe('number');
        expect(item.ingredients).toBeDefined();
        expect(Array.isArray(item.allergens)).toBe(true);
        expect(item.nutritionalValues).toBeDefined();
        expect(item.nutritionalValues.energy).toBeDefined();
        expect(item.nutritionalValues.fat).toBeDefined();
        expect(item.nutritionalValues.protein).toBeDefined();
      });
    });
  });
});

function normalizeText(text: string): string {
  // Romanian diacritics mapping
  const diacriticsMap: { [key: string]: string } = {
    'ă': 'a', 'â': 'a', 'î': 'i', 'ș': 's', 'ț': 't',
    'Ă': 'a', 'Â': 'a', 'Î': 'i', 'Ș': 's', 'Ț': 't'
  };
  
  return text
    .split('')
    .map(char => diacriticsMap[char] || char)
    .join('')
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function parseMenuMd(content: string): ParsedMenuCategory[] {
  const categories: ParsedMenuCategory[] = [];
  const lines = content.split('\n');
  let currentCategory: ParsedMenuCategory | null = null;
  let currentItem: Partial<ParsedMenuItem> | null = null;
  let inIngredients = false;
  let inNutritionalValues = false;
  let inAllergens = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // Category headers (# CATEGORY_NAME)
    if (line.startsWith('# ') && !line.startsWith('## ')) {
      if (currentCategory) {
        categories.push(currentCategory);
      }
      const categoryName = line.substring(2).trim();
      currentCategory = {
        id: normalizeText(categoryName),
        name: categoryName,
        items: []
      };
      currentItem = null;
    }
    
    // Item headers (## ITEM_NAME)
    else if (line.startsWith('## ')) {
      if (currentItem && currentCategory) {
        currentCategory.items.push(currentItem as ParsedMenuItem);
      }
      
      const itemName = line.substring(3).trim();
      currentItem = {
        id: normalizeText(itemName),
        name: itemName,
        allergens: [],
        nutritionalValues: {
          energy: '',
          fat: '',
          saturatedFat: '',
          carbohydrates: '',
          sugars: '',
          protein: '',
          salt: ''
        }
      };
      inIngredients = false;
      inNutritionalValues = false;
      inAllergens = false;
    }
    
    // Weight and price line
    else if (line.includes('|') && line.includes('lei') && currentItem) {
      const parts = line.split('|').map(p => p.trim());
      if (parts.length >= 2) {
        const weightPart = parts[0];
        const pricePart = parts[1];
        
        if (weightPart && !weightPart.includes('E')) {
          currentItem.weight = weightPart;
        }
        
        const priceMatch = pricePart.match(/(\d+)\s*lei/);
        if (priceMatch) {
          currentItem.price = parseInt(priceMatch[1]);
        }
      }
    }
    
    // Ingredients section
    else if (line.startsWith('Ingrediente:')) {
      inIngredients = true;
      inNutritionalValues = false;
      inAllergens = false;
    }
    else if (inIngredients && line && !line.startsWith('Valoare energetică') && !line.startsWith('**Alergeni:**')) {
      if (currentItem) {
        currentItem.ingredients = line;
        inIngredients = false;
      }
    }
    
    // Nutritional values
    else if (line.startsWith('Valoare energetică:')) {
      inNutritionalValues = true;
      if (currentItem && currentItem.nutritionalValues) {
        currentItem.nutritionalValues.energy = line.replace('Valoare energetică:', '').trim();
      }
    }
    else if (line.startsWith('Grăsimi:') && currentItem && currentItem.nutritionalValues) {
      const fatMatch = line.match(/Grăsimi:\s*([^(]+)/);
      const saturatedMatch = line.match(/acizi grași saturați:\s*([^)]+)/);
      if (fatMatch) currentItem.nutritionalValues.fat = fatMatch[1].trim();
      if (saturatedMatch) currentItem.nutritionalValues.saturatedFat = saturatedMatch[1].trim();
    }
    else if (line.startsWith('Glucide:') && currentItem && currentItem.nutritionalValues) {
      const carbMatch = line.match(/Glucide:\s*([^(]+)/);
      const sugarMatch = line.match(/zaharuri:\s*([^)]+)/);
      if (carbMatch) currentItem.nutritionalValues.carbohydrates = carbMatch[1].trim();
      if (sugarMatch) currentItem.nutritionalValues.sugars = sugarMatch[1].trim();
    }
    else if (line.startsWith('Proteine:') && currentItem && currentItem.nutritionalValues) {
      currentItem.nutritionalValues.protein = line.replace('Proteine:', '').trim();
    }
    else if (line.startsWith('Sare:') && currentItem && currentItem.nutritionalValues) {
      currentItem.nutritionalValues.salt = line.replace('Sare:', '').trim();
    }
    
    // Allergens
    else if (line.startsWith('**Alergeni:**') && currentItem) {
      const allergensText = line.replace('**Alergeni:**', '').trim();
      const allergens = allergensText.split(',').map(a => a.replace(/\*\*/g, '').trim()).filter(a => a);
      currentItem.allergens = allergens;
    }
  }
  
  // Add last item and category
  if (currentItem && currentCategory) {
    currentCategory.items.push(currentItem as ParsedMenuItem);
  }
  if (currentCategory) {
    categories.push(currentCategory);
  }
  
  return categories;
}

function validateMenuData(mdData: ParsedMenuCategory[], tsData: MenuCategory[]): ValidationResult {
  const result: ValidationResult = {
    success: true,
    errors: [],
    warnings: [],
    summary: {
      totalItemsInMd: 0,
      totalItemsInTs: 0,
      missingItems: 0,
      extraItems: 0,
      mismatchedItems: 0
    }
  };
  
  // Count total items
  result.summary.totalItemsInMd = mdData.reduce((sum, cat) => sum + cat.items.length, 0);
  result.summary.totalItemsInTs = tsData.reduce((sum, cat) => sum + cat.items.length, 0);
  
  // Create lookup maps
  const mdItemsMap = new Map<string, ParsedMenuItem>();
  const tsItemsMap = new Map<string, MenuItem>();
  
  mdData.forEach(category => {
    category.items.forEach(item => {
      mdItemsMap.set(item.id, item);
    });
  });
  
  tsData.forEach(category => {
    category.items.forEach(item => {
      tsItemsMap.set(item.id, item);
    });
  });
  
  // Check for missing items (in MD but not in TS)
  mdItemsMap.forEach((mdItem, id) => {
    if (!tsItemsMap.has(id)) {
      result.errors.push(`Missing item in menu.ts: "${mdItem.name}" (id: ${id})`);
      result.summary.missingItems++;
      result.success = false;
    }
  });
  
  // Check for extra items (in TS but not in MD)
  tsItemsMap.forEach((tsItem, id) => {
    if (!mdItemsMap.has(id)) {
      result.warnings.push(`Extra item in menu.ts: "${tsItem.name}" (id: ${id})`);
      result.summary.extraItems++;
    }
  });
  
  // Check for data mismatches
  mdItemsMap.forEach((mdItem, id) => {
    const tsItem = tsItemsMap.get(id);
    if (tsItem) {
      // Check name
      if (mdItem.name !== tsItem.name) {
        result.errors.push(`Name mismatch for ${id}: MD="${mdItem.name}" vs TS="${tsItem.name}"`);
        result.summary.mismatchedItems++;
        result.success = false;
      }
      
      // Check price
      if (mdItem.price !== tsItem.price) {
        result.errors.push(`Price mismatch for ${id}: MD=${mdItem.price} vs TS=${tsItem.price}`);
        result.summary.mismatchedItems++;
        result.success = false;
      }
      
      // Check weight
      if (mdItem.weight !== tsItem.weight) {
        result.warnings.push(`Weight mismatch for ${id}: MD="${mdItem.weight}" vs TS="${tsItem.weight}"`);
      }
      
      // Check allergens count (basic validation)
      if (mdItem.allergens.length !== tsItem.allergens.length) {
        result.warnings.push(`Allergen count mismatch for ${id}: MD=${mdItem.allergens.length} vs TS=${tsItem.allergens.length}`);
      }
    }
  });
  
  return result;
}