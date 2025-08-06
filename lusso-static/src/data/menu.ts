// Menu data structure based on Menu.md
export interface MenuItem {
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

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    id: "mic-dejun",
    name: "MIC DEJUN",
    items: [
      {
        id: "omleta-simpla",
        name: "Omletă simplă",
        weight: "150g",
        price: 18,
        ingredients: "Ouă, unt, sare, piper",
        allergens: ["Ouă", "Lapte"],
        nutritionalValues: {
          energy: "1125 kJ / 270 kcal",
          fat: "24g",
          saturatedFat: "10g",
          carbohydrates: "1g",
          sugars: "1g",
          protein: "12g",
          salt: "0.8g"
        }
      },
      {
        id: "omleta-cu-sunca",
        name: "Omletă cu șuncă",
        weight: "200g",
        price: 25,
        ingredients: "Ouă, șuncă, unt, sare, piper",
        allergens: ["Ouă", "Lapte"],
        nutritionalValues: {
          energy: "1380 kJ / 330 kcal",
          fat: "26g",
          saturatedFat: "11g",
          carbohydrates: "2g",
          sugars: "1g",
          protein: "20g",
          salt: "1.5g"
        }
      },
      {
        id: "omleta-cu-cascaval",
        name: "Omletă cu cașcaval",
        weight: "200g",
        price: 25,
        ingredients: "Ouă, cașcaval, unt, sare, piper",
        allergens: ["Ouă", "Lapte"],
        nutritionalValues: {
          energy: "1420 kJ / 340 kcal",
          fat: "28g",
          saturatedFat: "14g",
          carbohydrates: "2g",
          sugars: "1g",
          protein: "22g",
          salt: "1.2g"
        }
      }
    ]
  },
  {
    id: "aperitiv",
    name: "APERITIV",
    items: [
      {
        id: "platou-rece",
        name: "Platou rece",
        weight: "400g",
        price: 65,
        ingredients: "Șuncă, salam, cașcaval, măsline, roșii cherry, castraveți",
        allergens: ["Lapte"],
        nutritionalValues: {
          energy: "1680 kJ / 400 kcal",
          fat: "30g",
          saturatedFat: "12g",
          carbohydrates: "8g",
          sugars: "6g",
          protein: "28g",
          salt: "3.2g"
        }
      },
      {
        id: "bruschete",
        name: "Bruschete",
        weight: "250g",
        price: 35,
        ingredients: "Pâine, roșii, busuioc, usturoi, ulei de măsline",
        allergens: ["Gluten"],
        nutritionalValues: {
          energy: "920 kJ / 220 kcal",
          fat: "8g",
          saturatedFat: "1g",
          carbohydrates: "32g",
          sugars: "4g",
          protein: "6g",
          salt: "1.1g"
        }
      }
    ]
  },
  {
    id: "pizza",
    name: "PIZZA",
    items: [
      {
        id: "pizza-margherita",
        name: "Pizza Margherita",
        weight: "350g",
        price: 35,
        ingredients: "Blat de pizza, sos de roșii, mozzarella, busuioc",
        allergens: ["Gluten", "Lapte"],
        nutritionalValues: {
          energy: "1260 kJ / 300 kcal",
          fat: "12g",
          saturatedFat: "6g",
          carbohydrates: "38g",
          sugars: "4g",
          protein: "14g",
          salt: "1.8g"
        }
      },
      {
        id: "pizza-salami",
        name: "Pizza Salami",
        weight: "400g",
        price: 42,
        ingredients: "Blat de pizza, sos de roșii, mozzarella, salam",
        allergens: ["Gluten", "Lapte"],
        nutritionalValues: {
          energy: "1470 kJ / 350 kcal",
          fat: "16g",
          saturatedFat: "8g",
          carbohydrates: "38g",
          sugars: "4g",
          protein: "18g",
          salt: "2.2g"
        }
      },
      {
        id: "pizza-quattro-stagioni",
        name: "Pizza Quattro Stagioni",
        weight: "450g",
        price: 48,
        ingredients: "Blat de pizza, sos de roșii, mozzarella, șuncă, ciuperci, măsline, anghinare",
        allergens: ["Gluten", "Lapte"],
        nutritionalValues: {
          energy: "1575 kJ / 375 kcal",
          fat: "15g",
          saturatedFat: "7g",
          carbohydrates: "42g",
          sugars: "5g",
          protein: "20g",
          salt: "2.5g"
        }
      },
      {
        id: "pizza-lusso",
        name: "Pizza Lusso",
        weight: "500g",
        price: 55,
        ingredients: "Blat de pizza, sos de roșii, mozzarella, prosciutto, rucola, parmezan, trufe",
        allergens: ["Gluten", "Lapte"],
        nutritionalValues: {
          energy: "1680 kJ / 400 kcal",
          fat: "18g",
          saturatedFat: "9g",
          carbohydrates: "40g",
          sugars: "4g",
          protein: "24g",
          salt: "2.8g"
        }
      }
    ]
  },
  {
    id: "paste",
    name: "PASTE",
    items: [
      {
        id: "paste-trufe",
        name: "Paste cu trufe",
        weight: "350g",
        price: 65,
        ingredients: "Paste, trufe, smântână, parmezan, usturoi",
        allergens: ["Gluten", "Lapte", "Ouă"],
        nutritionalValues: {
          energy: "1890 kJ / 450 kcal",
          fat: "22g",
          saturatedFat: "12g",
          carbohydrates: "48g",
          sugars: "3g",
          protein: "18g",
          salt: "1.5g"
        }
      },
      {
        id: "paste-ton",
        name: "Paste cu ton",
        weight: "400g",
        price: 45,
        ingredients: "Paste, ton, roșii, măsline, capere, usturoi",
        allergens: ["Gluten", "Pește"],
        nutritionalValues: {
          energy: "1575 kJ / 375 kcal",
          fat: "12g",
          saturatedFat: "2g",
          carbohydrates: "52g",
          sugars: "6g",
          protein: "20g",
          salt: "2.1g"
        }
      },
      {
        id: "paste-quattro-formaggi",
        name: "Paste Quattro Formaggi",
        weight: "350g",
        price: 48,
        ingredients: "Paste, gorgonzola, parmezan, mozzarella, ricotta, smântână",
        allergens: ["Gluten", "Lapte", "Ouă"],
        nutritionalValues: {
          energy: "1995 kJ / 475 kcal",
          fat: "26g",
          saturatedFat: "16g",
          carbohydrates: "42g",
          sugars: "3g",
          protein: "22g",
          salt: "2.2g"
        }
      },
      {
        id: "paste-carbonara",
        name: "Paste Carbonara",
        weight: "350g",
        price: 42,
        ingredients: "Paste, bacon, ouă, parmezan, piper negru",
        allergens: ["Gluten", "Lapte", "Ouă"],
        nutritionalValues: {
          energy: "1785 kJ / 425 kcal",
          fat: "20g",
          saturatedFat: "8g",
          carbohydrates: "45g",
          sugars: "2g",
          protein: "20g",
          salt: "1.8g"
        }
      },
      {
        id: "paste-bolognese",
        name: "Paste Bolognese",
        weight: "400g",
        price: 38,
        ingredients: "Paste, carne tocată de vită, roșii, ceapă, morcov, țelină, vin roșu",
        allergens: ["Gluten"],
        nutritionalValues: {
          energy: "1680 kJ / 400 kcal",
          fat: "15g",
          saturatedFat: "5g",
          carbohydrates: "48g",
          sugars: "8g",
          protein: "22g",
          salt: "1.9g"
        }
      }
    ]
  },
  {
    id: "gratar",
    name: "GRĂTAR",
    items: [
      {
        id: "cotlet-miel",
        name: "Cotlet de miel",
        weight: "300g",
        price: 85,
        ingredients: "Cotlet de miel, rozmarin, usturoi, ulei de măsline",
        allergens: [],
        nutritionalValues: {
          energy: "1260 kJ / 300 kcal",
          fat: "18g",
          saturatedFat: "7g",
          carbohydrates: "0g",
          sugars: "0g",
          protein: "32g",
          salt: "0.8g"
        }
      },
      {
        id: "vita",
        name: "Vită",
        weight: "250g",
        price: 75,
        ingredients: "Mușchi de vită, piper negru, sare de mare",
        allergens: [],
        nutritionalValues: {
          energy: "1050 kJ / 250 kcal",
          fat: "12g",
          saturatedFat: "5g",
          carbohydrates: "0g",
          sugars: "0g",
          protein: "35g",
          salt: "0.9g"
        }
      },
      {
        id: "ceafa-porc",
        name: "Ceafă de porc",
        weight: "300g",
        price: 45,
        ingredients: "Ceafă de porc, condimente, usturoi",
        allergens: [],
        nutritionalValues: {
          energy: "1470 kJ / 350 kcal",
          fat: "25g",
          saturatedFat: "9g",
          carbohydrates: "0g",
          sugars: "0g",
          protein: "30g",
          salt: "1.1g"
        }
      },
      {
        id: "piept-pui",
        name: "Piept de pui",
        weight: "250g",
        price: 35,
        ingredients: "Piept de pui, ierburi aromate, ulei de măsline",
        allergens: [],
        nutritionalValues: {
          energy: "840 kJ / 200 kcal",
          fat: "4g",
          saturatedFat: "1g",
          carbohydrates: "0g",
          sugars: "0g",
          protein: "40g",
          salt: "0.7g"
        }
      }
    ]
  },
  {
    id: "garnituri",
    name: "GARNITURI",
    items: [
      {
        id: "cartofi-prajiti",
        name: "Cartofi prăjiți",
        weight: "200g",
        price: 15,
        ingredients: "Cartofi, ulei de floarea-soarelui, sare",
        allergens: [],
        nutritionalValues: {
          energy: "1260 kJ / 300 kcal",
          fat: "15g",
          saturatedFat: "2g",
          carbohydrates: "38g",
          sugars: "1g",
          protein: "4g",
          salt: "0.8g"
        }
      },
      {
        id: "orez-legume",
        name: "Orez cu legume",
        weight: "250g",
        price: 18,
        ingredients: "Orez, morcov, mazăre, porumb, ceapă",
        allergens: [],
        nutritionalValues: {
          energy: "840 kJ / 200 kcal",
          fat: "2g",
          saturatedFat: "0.5g",
          carbohydrates: "42g",
          sugars: "4g",
          protein: "5g",
          salt: "0.6g"
        }
      },
      {
        id: "piure-cartofi",
        name: "Piure de cartofi",
        weight: "200g",
        price: 16,
        ingredients: "Cartofi, lapte, unt, sare, piper",
        allergens: ["Lapte"],
        nutritionalValues: {
          energy: "630 kJ / 150 kcal",
          fat: "6g",
          saturatedFat: "4g",
          carbohydrates: "22g",
          sugars: "3g",
          protein: "4g",
          salt: "0.9g"
        }
      },
      {
        id: "legume-gratar",
        name: "Legume la grătar",
        weight: "200g",
        price: 20,
        ingredients: "Ardei, vinete, dovlecei, roșii, ulei de măsline",
        allergens: [],
        nutritionalValues: {
          energy: "420 kJ / 100 kcal",
          fat: "6g",
          saturatedFat: "1g",
          carbohydrates: "8g",
          sugars: "6g",
          protein: "3g",
          salt: "0.3g"
        }
      }
    ]
  },
  {
    id: "salate",
    name: "SALATE",
    items: [
      {
        id: "salata-mixta",
        name: "Salată mixtă de vară",
        weight: "300g",
        price: 25,
        ingredients: "Salată verde, roșii, castraveți, ceapă roșie, măsline, ulei de măsline",
        allergens: [],
        nutritionalValues: {
          energy: "420 kJ / 100 kcal",
          fat: "8g",
          saturatedFat: "1g",
          carbohydrates: "6g",
          sugars: "5g",
          protein: "2g",
          salt: "0.8g"
        }
      },
      {
        id: "salata-varza",
        name: "Salată de varză",
        weight: "250g",
        price: 18,
        ingredients: "Varză albă, morcov, ulei, oțet, sare",
        allergens: [],
        nutritionalValues: {
          energy: "315 kJ / 75 kcal",
          fat: "5g",
          saturatedFat: "0.5g",
          carbohydrates: "6g",
          sugars: "5g",
          protein: "1g",
          salt: "0.7g"
        }
      },
      {
        id: "salata-ton",
        name: "Salată cu ton",
        weight: "350g",
        price: 35,
        ingredients: "Salată verde, ton, roșii cherry, măsline, ceapă roșie, ulei de măsline",
        allergens: ["Pește"],
        nutritionalValues: {
          energy: "630 kJ / 150 kcal",
          fat: "8g",
          saturatedFat: "1g",
          carbohydrates: "5g",
          sugars: "4g",
          protein: "15g",
          salt: "1.2g"
        }
      },
      {
        id: "salata-caesar",
        name: "Salată Caesar",
        weight: "300g",
        price: 32,
        ingredients: "Salată romaine, piept de pui, parmezan, crutoane, sos Caesar",
        allergens: ["Gluten", "Lapte", "Ouă"],
        nutritionalValues: {
          energy: "840 kJ / 200 kcal",
          fat: "12g",
          saturatedFat: "4g",
          carbohydrates: "8g",
          sugars: "2g",
          protein: "18g",
          salt: "1.5g"
        }
      },
      {
        id: "salata-lusso",
        name: "Salată Lusso",
        weight: "350g",
        price: 45,
        ingredients: "Mix de salate, somon afumat, avocado, roșii cherry, capere, sos de lămâie",
        allergens: ["Pește"],
        nutritionalValues: {
          energy: "1050 kJ / 250 kcal",
          fat: "18g",
          saturatedFat: "3g",
          carbohydrates: "8g",
          sugars: "5g",
          protein: "16g",
          salt: "1.8g"
        }
      }
    ]
  },
  {
    id: "burgeri",
    name: "BURGERI",
    items: [
      {
        id: "smash-burger",
        name: "Smash Burger",
        weight: "350g",
        price: 38,
        ingredients: "Chifla brioche, carne de vită, cașcaval, salată, roșii, ceapă, sos special",
        allergens: ["Gluten", "Lapte", "Ouă"],
        nutritionalValues: {
          energy: "1890 kJ / 450 kcal",
          fat: "25g",
          saturatedFat: "10g",
          carbohydrates: "35g",
          sugars: "5g",
          protein: "25g",
          salt: "2.2g"
        }
      },
      {
        id: "lusso-burger",
        name: "Lusso Burger",
        weight: "400g",
        price: 48,
        ingredients: "Chifla brioche, carne de vită, bacon, cașcaval, rucola, roșii, sos trufe",
        allergens: ["Gluten", "Lapte", "Ouă"],
        nutritionalValues: {
          energy: "2100 kJ / 500 kcal",
          fat: "30g",
          saturatedFat: "12g",
          carbohydrates: "35g",
          sugars: "4g",
          protein: "28g",
          salt: "2.5g"
        }
      }
    ]
  },
  {
    id: "bauturi-calde",
    name: "BĂUTURI CALDE",
    items: [
      {
        id: "cappuccino",
        name: "Cappuccino",
        weight: "200ml",
        price: 12,
        ingredients: "Espresso, lapte, spumă de lapte",
        allergens: ["Lapte"],
        nutritionalValues: {
          energy: "315 kJ / 75 kcal",
          fat: "4g",
          saturatedFat: "2.5g",
          carbohydrates: "6g",
          sugars: "6g",
          protein: "4g",
          salt: "0.1g"
        }
      },
      {
        id: "espresso",
        name: "Espresso",
        weight: "30ml",
        price: 8,
        ingredients: "Cafea espresso",
        allergens: [],
        nutritionalValues: {
          energy: "21 kJ / 5 kcal",
          fat: "0g",
          saturatedFat: "0g",
          carbohydrates: "1g",
          sugars: "0g",
          protein: "0.3g",
          salt: "0g"
        }
      },
      {
        id: "latte-macchiato",
        name: "Latte Macchiato",
        weight: "300ml",
        price: 15,
        ingredients: "Espresso, lapte, spumă de lapte",
        allergens: ["Lapte"],
        nutritionalValues: {
          energy: "420 kJ / 100 kcal",
          fat: "5g",
          saturatedFat: "3g",
          carbohydrates: "8g",
          sugars: "8g",
          protein: "6g",
          salt: "0.1g"
        }
      }
    ]
  },
  {
    id: "racoritoare",
    name: "RĂCORITOARE",
    items: [
      {
        id: "apa-minerala",
        name: "Apă minerală",
        weight: "500ml",
        price: 8,
        ingredients: "Apă minerală naturală",
        allergens: [],
        nutritionalValues: {
          energy: "0 kJ / 0 kcal",
          fat: "0g",
          saturatedFat: "0g",
          carbohydrates: "0g",
          sugars: "0g",
          protein: "0g",
          salt: "0g"
        }
      },
      {
        id: "coca-cola",
        name: "Coca-Cola",
        weight: "330ml",
        price: 12,
        ingredients: "Apă carbogazoasă, zahăr, acid citric, arome naturale, cofeină",
        allergens: [],
        nutritionalValues: {
          energy: "560 kJ / 134 kcal",
          fat: "0g",
          saturatedFat: "0g",
          carbohydrates: "33g",
          sugars: "33g",
          protein: "0g",
          salt: "0g"
        }
      },
      {
        id: "suc-portocale",
        name: "Suc de portocale fresh",
        weight: "250ml",
        price: 18,
        ingredients: "Portocale proaspete",
        allergens: [],
        nutritionalValues: {
          energy: "420 kJ / 100 kcal",
          fat: "0g",
          saturatedFat: "0g",
          carbohydrates: "24g",
          sugars: "22g",
          protein: "2g",
          salt: "0g"
        }
      }
    ]
  },
  {
    id: "bere",
    name: "BERE",
    items: [
      {
        id: "heineken",
        name: "Heineken",
        weight: "500ml",
        price: 15,
        ingredients: "Apă, malț de orz, hamei, drojdie",
        allergens: ["Gluten"],
        nutritionalValues: {
          energy: "840 kJ / 200 kcal",
          fat: "0g",
          saturatedFat: "0g",
          carbohydrates: "15g",
          sugars: "0g",
          protein: "2g",
          salt: "0g"
        }
      },
      {
        id: "ciuc-premium",
        name: "Ciuc Premium",
        weight: "500ml",
        price: 12,
        ingredients: "Apă, malț de orz, hamei, drojdie",
        allergens: ["Gluten"],
        nutritionalValues: {
          energy: "840 kJ / 200 kcal",
          fat: "0g",
          saturatedFat: "0g",
          carbohydrates: "15g",
          sugars: "0g",
          protein: "2g",
          salt: "0g"
        }
      }
    ]
  },
  {
    id: "vin",
    name: "VIN",
    items: [
      {
        id: "recas-chardonnay",
        name: "Recas Sole Chardonnay Barrique",
        weight: "750ml",
        price: 85,
        ingredients: "Struguri Chardonnay, sulfiti",
        allergens: ["Sulfiti"],
        nutritionalValues: {
          energy: "2520 kJ / 600 kcal",
          fat: "0g",
          saturatedFat: "0g",
          carbohydrates: "15g",
          sugars: "3g",
          protein: "0.5g",
          salt: "0g"
        }
      },
      {
        id: "liliac-sauvignon",
        name: "Liliac Sauvignon Blanc",
        weight: "750ml",
        price: 95,
        ingredients: "Struguri Sauvignon Blanc, sulfiti",
        allergens: ["Sulfiti"],
        nutritionalValues: {
          energy: "2520 kJ / 600 kcal",
          fat: "0g",
          saturatedFat: "0g",
          carbohydrates: "12g",
          sugars: "2g",
          protein: "0.5g",
          salt: "0g"
        }
      }
    ]
  },
  {
    id: "alcoolice",
    name: "ALCOOLICE",
    items: [
      {
        id: "whisky-jameson",
        name: "Jameson Irish Whiskey",
        weight: "50ml",
        price: 25,
        ingredients: "Whiskey irlandez",
        allergens: ["Gluten"],
        nutritionalValues: {
          energy: "420 kJ / 100 kcal",
          fat: "0g",
          saturatedFat: "0g",
          carbohydrates: "0g",
          sugars: "0g",
          protein: "0g",
          salt: "0g"
        }
      },
      {
        id: "vodka-absolut",
        name: "Absolut Blue Vodka",
        weight: "50ml",
        price: 20,
        ingredients: "Vodka premium",
        allergens: [],
        nutritionalValues: {
          energy: "420 kJ / 100 kcal",
          fat: "0g",
          saturatedFat: "0g",
          carbohydrates: "0g",
          sugars: "0g",
          protein: "0g",
          salt: "0g"
        }
      }
    ]
  }
];

// Helper function to get category by id
export const getCategoryById = (id: string): MenuCategory | undefined => {
  return menuData.find(category => category.id === id);
};

// Helper function to get item by id
export const getItemById = (categoryId: string, itemId: string): MenuItem | undefined => {
  const category = getCategoryById(categoryId);
  return category?.items.find(item => item.id === itemId);
};

// Helper function to search items
export const searchItems = (query: string): MenuItem[] => {
  const results: MenuItem[] = [];
  menuData.forEach(category => {
    category.items.forEach(item => {
      if (item.name.toLowerCase().includes(query.toLowerCase()) ||
          item.ingredients.toLowerCase().includes(query.toLowerCase())) {
        results.push(item);
      }
    });
  });
  return results;
};