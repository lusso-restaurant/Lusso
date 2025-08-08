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
  id:string;
  name: string;
  items: MenuItem[];
}

// Defines the structure for a search result, including the item and its category.
export interface SearchResult {
    item: MenuItem;
    categoryId: string;
    categoryName: string;
}

export const menuData: MenuCategory[] = [
  {
    id: "mic-dejun",
    name: "MIC DEJUN",
    items: [
      {
        id: "oua-benedict",
        name: "OUA BENEDICT",
        weight: "100g",
        price: 25,
        ingredients: "Ouă, Brânză topită, Cașcaval, Unt, Pâine, Sos olandez, Jambon, Sare",
        allergens: ["Ouă", "Lapte", "Gluten"],
        nutritionalValues: {
          energy: "1113.85 kJ / 266.22 KCal",
          fat: "20.05g",
          saturatedFat: "10.94g",
          carbohydrates: "8.99g",
          sugars: "0.37g",
          protein: "12.52g",
          salt: "0.99g"
        }
      },
      {
        id: "omleta-cu-2-tipuri-de-branza",
        name: "OMLETĂ CU 2 TIPURI DE BRÂNZĂ",
        weight: "100g",
        price: 25,
        ingredients: "OUĂ, Cașcaval, Brânză telemea, Ulei, Sare",
        allergens: ["Ouă", "Lapte"],
        nutritionalValues: {
          energy: "859.58 kJ / 205.45 KCal",
          fat: "15.43g",
          saturatedFat: "7.4g",
          carbohydrates: "0.7g",
          sugars: "0.24g",
          protein: "15.87g",
          salt: "1.55g"
        }
      }
    ]
  },
  {
    id: "aperitiv",
    name: "APERITIV",
    items: [
      {
        id: "platou-cu-branzeturi",
        name: "PLATOU CU BRÂNZETURI",
        weight: "500g",
        price: 70,
        ingredients: "Brânză, Brânză de capră, Camembert, Blue cheese, Struguri, Smochine, Nuci",
        allergens: ["Lapte", "Gluten", "Fructe cu coajă lemnoasă"],
        nutritionalValues: {
            energy: "1231.41 kJ / 294.31 KCal",
            fat: "21.95g",
            saturatedFat: "11.73g",
            carbohydrates: "9.9g",
            sugars: "1.07g",
            protein: "15.24g",
            salt: "1.66g"
        }
      },
      {
        id: "mix-bruschete",
        name: "MIX BRUSCHETE",
        weight: "20g",
        price: 20,
        ingredients: "File anchoa, Pâine, ulei de măsline, Roșii, usturoi, ulei de măsline, Pâine, Pastă de măsline, usturoi, ulei de măsline, Pâine",
        allergens: ["Pește", "Gluten"],
        nutritionalValues: {
            energy: "1230.09 kJ / 294 KCal",
            fat: "18.94g",
            saturatedFat: "0.54g",
            carbohydrates: "22.43g",
            sugars: "0.35g",
            protein: "12.03g",
            salt: "6.23g"
        }
      },
      {
        id: "country-plate",
        name: "COUNTRY PLATE",
        weight: "450g",
        price: 90,
        ingredients: "*Pastramă de oaie afumată, *Mușchiuleț afumat, *Șuncă afumată, *Ceafă de porc afumată, *Babic, *Cârnați de oaie",
        allergens: [],
        nutritionalValues: {
            energy: "1264.83 kJ / 302.3 KCal",
            fat: "24.24g",
            saturatedFat: "2.95g",
            carbohydrates: "1.12g",
            sugars: "0.13g",
            protein: "22.59g",
            salt: "1.54g"
        }
      }
    ]
  },
  {
    id: "pizza",
    name: "PIZZA",
    items: [
        {
            id: "pizza-quattro-formaggi",
            name: "PIZZA QUATTRO FORMAGGI",
            weight: "450g",
            price: 42,
            ingredients: "Aluat, Mozzarella, Brânză Emmental, Gorgonzola, Parmezan ras, Sos de roșii, Ulei de măsline",
            allergens: ["Gluten", "Lapte"],
            nutritionalValues: {
                energy: "1184.29 kJ / 283.05 KCal",
                fat: "11.04g",
                saturatedFat: "6.46g",
                carbohydrates: "30.47g",
                sugars: "1.04g",
                protein: "14.76g",
                salt: "0.87g"
            }
        },
        {
            id: "pizza-hawaii",
            name: "PIZZA HAWAII",
            weight: "450g",
            price: 38,
            ingredients: "Aluat, Mozzarella, Ananas în suc propriu, Șuncă presată, Sos de roșii, Ulei de măsline",
            allergens: ["Gluten", "Lapte"],
            nutritionalValues: {
                energy: "908.66 kJ / 217.18 KCal",
                fat: "6.33g",
                saturatedFat: "1.57g",
                carbohydrates: "28.59g",
                sugars: "0.97g",
                protein: "10.77g",
                salt: "0.35g"
            }
        },
        {
            id: "pizza-bbq",
            name: "PIZZA BBQ",
            weight: "450g",
            price: 42,
            ingredients: "Aluat, Mozzarella, Sos BBQ, Ceapă roșie, Bacon, Cârnațiori, Ulei de măsline",
            allergens: ["Gluten", "Lapte"],
            nutritionalValues: {
                energy: "903.15 kJ / 215.86 KCal",
                fat: "5.74g",
                saturatedFat: "2.3g",
                carbohydrates: "31.32g",
                sugars: "4.97g",
                protein: "9.21g",
                salt: "0.9g"
            }
        },
        {
            id: "pizza-taraneasca",
            name: "PIZZA ȚĂRĂNEASCĂ",
            weight: "450g",
            price: 42,
            ingredients: "Aluat, Cârnați, Mozzarella, Sos de roșii, Ceapă roșie, Kaizer",
            allergens: ["Gluten", "Lapte"],
            nutritionalValues: {
                energy: "983.05 kJ / 234.96 KCal",
                fat: "10.87g",
                saturatedFat: "4.63g",
                carbohydrates: "23.41g",
                sugars: "1.23g",
                protein: "10.18g",
                salt: "0.84g"
            }
        },
        {
            id: "pizza-cu-ton",
            name: "PIZZA CU TON",
            weight: "450g",
            price: 39,
            ingredients: "Aluat, Ton conservă, Mozzarella, Sos de roșii, Ceapă roșie, Măsline feliate, Ulei de măsline, Sare",
            allergens: ["Gluten", "Lapte", "Pește"],
            nutritionalValues: {
                energy: "708.56 kJ / 169.35 KCal",
                fat: "5.82g",
                saturatedFat: "1.42g",
                carbohydrates: "20.24g",
                sugars: "1.11g",
                protein: "8.48g",
                salt: "0.47g"
            }
        },
        {
            id: "pizza-vegetariana",
            name: "PIZZA VEGETARIANĂ",
            weight: "450g",
            price: 35,
            ingredients: "Aluat, Mozzarella, Sos de roșii, Ceapă roșie, Ciuperci, Ulei de măsline, Sare",
            allergens: ["Gluten", "Lapte", "Ciuperci"],
            nutritionalValues: {
                energy: "722.05 kJ / 172.57 KCal",
                fat: "3.25g",
                saturatedFat: "1.18g",
                carbohydrates: "28.18g",
                sugars: "1.42g",
                protein: "7.19g",
                salt: "0.3g"
            }
        },
        {
            id: "pizza-prosciutto-e-funghi",
            name: "PIZZA PROSCIUTTO E FUNGHI",
            weight: "450g",
            price: 37,
            ingredients: "Aluat, Mozzarella, Sos de roșii, Prosciutto Crudo, Ciuperci, Ulei de măsline, Sare",
            allergens: ["Gluten", "Lapte", "Ciuperci"],
            nutritionalValues: {
                energy: "779.94 kJ / 186.41 KCal",
                fat: "4.05g",
                saturatedFat: "1.57g",
                carbohydrates: "26.89g",
                sugars: "1.38g",
                protein: "10.27g",
                salt: "0.79g"
            }
        },
        {
            id: "pizza-diavola",
            name: "PIZZA DIAVOLA",
            weight: "450g",
            price: 39,
            ingredients: "Aluat, Mozzarella, Salam Picant, Sos de roșii, Ulei de măsline, Zahăr, Sare",
            allergens: ["Gluten", "Lapte"],
            nutritionalValues: {
                energy: "925.34 kJ / 221.16 KCal",
                fat: "5.2g",
                saturatedFat: "2.03g",
                carbohydrates: "32.53g",
                sugars: "1.93g",
                protein: "10.48g",
                salt: "0.78g"
            }
        },
        {
            id: "pizza-salami",
            name: "PIZZA SALAMI",
            weight: "450g",
            price: 39,
            ingredients: "Aluat, Mozzarella, Salami, Sos de roșii, Ulei de măsline, Zahăr, Sare",
            allergens: ["Gluten", "Lapte"],
            nutritionalValues: {
                energy: "977.81 kJ / 233.7 KCal",
                fat: "6.96g",
                saturatedFat: "2.47g",
                carbohydrates: "32.45g",
                sugars: "1.92g",
                protein: "9.9g",
                salt: "0.37g"
            }
        },
        {
            id: "pizza-quattro-stagioni",
            name: "PIZZA QUATTRO STAGIONI",
            weight: "450g",
            price: 39,
            ingredients: "Aluat, Mozzarella, Sos de roșii, Măsline feliate, Ciuperci, Șuncă, Zahăr, Sare",
            allergens: ["Gluten", "Lapte"],
            nutritionalValues: {
                energy: "754.34 kJ / 180.29 KCal",
                fat: "3.73g",
                saturatedFat: "1.32g",
                carbohydrates: "27.68g",
                sugars: "1.62g",
                protein: "8.12g",
                salt: "0.38g"
            }
        },
        {
            id: "pizza-lusso",
            name: "PIZZA LUSSO",
            weight: "450g",
            price: 45,
            ingredients: "Aluat, Mozzarella, Sos de roșii, Prosciutto Crudo, Ciuperci, Parmezan, Ulei de măsline cu trufe, Ulei de măsline, Zahăr, Sare, Rucola",
            allergens: ["Gluten", "Lapte", "Ciuperci"],
            nutritionalValues: {
                energy: "862.44 kJ / 206.23 KCal",
                fat: "5.79g",
                saturatedFat: "2.42g",
                carbohydrates: "28.37g",
                sugars: "1.45g",
                protein: "8.6g",
                salt: "0.59g"
            }
        }
    ]
  },
  {
    id: "paste",
    name: "PASTE",
    items: [
      {
        id: "paste-cu-trufe",
        name: "PASTE CU TRUFE",
        weight: "350g",
        price: 40,
        ingredients: "Paste, Smântână lichidă, Parmezan, Unt, Ulei de măsline cu trufe, Sare",
        allergens: ["Lapte", "Gluten", "Ciuperci", "Ou"],
        nutritionalValues: {
            energy: "617.22 kJ / 148 KCal",
            fat: "12.03g",
            saturatedFat: "5.33g",
            carbohydrates: "5.55g",
            sugars: "1.8g",
            protein: "0.47g",
            salt: "0.51g"
        }
      },
      {
        id: "paste-cu-ton",
        name: "PASTE CU TON",
        weight: "350g",
        price: 40,
        ingredients: "Paste, Roșii, Ton conservă, Ceapă, Ulei de măsline, Sare",
        allergens: ["Pește", "Gluten", "Ou"],
        nutritionalValues: {
            energy: "402.32 kJ / 96.16 KCal",
            fat: "6.62g",
            saturatedFat: "0.52g",
            carbohydrates: "4.68g",
            sugars: "1.17g",
            protein: "4.65g",
            salt: "0.34g"
        }
      },
      {
        id: "paste-quattro-formaggi",
        name: "PASTE QUATTRO FORMAGGI",
        weight: "350g",
        price: 40,
        ingredients: "Paste, Smântână gătită, Emmental, Mozzarella, Parmezan, Gorgonzola, Unt",
        allergens: ["Lapte", "Gluten", "Ou"],
        nutritionalValues: {
            energy: "929.34 kJ / 222.12 KCal",
            fat: "18.93g",
            saturatedFat: "12.3g",
            carbohydrates: "3.68g",
            sugars: "1.62g",
            protein: "6.27g",
            salt: "0.59g"
        }
      },
      {
        id: "paste-carbonara",
        name: "PASTE CARBONARA",
        weight: "350g",
        price: 42,
        ingredients: "Paste, Bacon, Ou, Parmezan",
        allergens: ["Ouă", "Gluten", "Lapte"],
        nutritionalValues: {
            energy: "734.34 kJ / 175.51 KCal",
            fat: "11.12g",
            saturatedFat: "0.47g",
            carbohydrates: "5.71g",
            sugars: "0.22g",
            protein: "12.73g",
            salt: "0.12g"
        }
      },
      {
        id: "paste-bolognese",
        name: "PASTE BOLOGNESE",
        weight: "350g",
        price: 42,
        ingredients: "Paste, Roșii tocate țărănești, Carne tocată porc-vită, Parmezan ras, Ulei de măsline, Sare",
        allergens: ["Gluten", "Lapte", "Ou"],
        nutritionalValues: {
            energy: "746.76 kJ / 178.48 KCal",
            fat: "9.77g",
            saturatedFat: "3.51g",
            carbohydrates: "19.53g",
            sugars: "1.25g",
            protein: "8.17g",
            salt: "0.71g"
        }
      }
    ]
  },
  {
    id: "gratar",
    name: "GRĂTAR",
    items: [
        {
            id: "cotlet-de-berbecut",
            name: "*COTLET DE BERBECUȚ",
            weight: "100g",
            price: 30,
            ingredients: "Cotlet de berbecuț feliat, Sare",
            allergens: [],
            nutritionalValues: {
                energy: "944.88 kJ / 225.85 KCal",
                fat: "13.55g",
                saturatedFat: "3.28g",
                carbohydrates: "0.68g",
                sugars: "0.25g",
                protein: "25.29g",
                salt: "1.04g"
            }
        },
        {
            id: "muschi-de-vitel",
            name: "*MUSCHI DE VIȚEL",
            weight: "100g",
            price: 40,
            ingredients: "Mușchi vițel, Sare",
            allergens: [],
            nutritionalValues: {
                energy: "522.38 kJ / 124.85 KCal",
                fat: "2.96g",
                saturatedFat: "1.48g",
                carbohydrates: "1.17g",
                sugars: "0.75g",
                protein: "22.65g",
                salt: "1.11g"
            }
        },
        {
            id: "ceafa-de-porc",
            name: "*CEAFA DE PORC",
            weight: "100g",
            price: 20,
            ingredients: "Ceafă porc, Sare",
            allergens: [],
            nutritionalValues: {
                energy: "945.09 kJ / 225.88 KCal",
                fat: "13.97g",
                saturatedFat: "0g",
                carbohydrates: "0.07g",
                sugars: "0.03g",
                protein: "23.96g",
                salt: "0.1g"
            }
        },
        {
            id: "piept-de-pui",
            name: "*PIEPT DE PUI",
            weight: "100g",
            price: 15,
            ingredients: "Piept pui, Sare",
            allergens: [],
            nutritionalValues: {
                energy: "548.4 kJ / 131.07 KCal",
                fat: "3.59g",
                saturatedFat: "0g",
                carbohydrates: "2.47g",
                sugars: "0.03g",
                protein: "21.97g",
                salt: "5.79g"
            }
        },
        {
            id: "pastrama-de-oaie",
            name: "*PASTRAMA DE OAIE",
            weight: "100g",
            price: 30,
            ingredients: "Pastrama de oaie",
            allergens: [],
            nutritionalValues: {
                energy: "1506.24 kJ / 360 KCal",
                fat: "30.2g",
                saturatedFat: "0g",
                carbohydrates: "2g",
                sugars: "0g",
                protein: "20g",
                salt: "0g"
            }
        },
        {
            id: "carnai-sarbeti",
            name: "*CÂRNAŢI SÂRBEŞTI",
            weight: "100g",
            price: 15,
            ingredients: "Cârnaţi semiafumaţi 330g",
            allergens: [],
            nutritionalValues: {
                energy: "1200.81 kJ / 287 KCal",
                fat: "24.1g",
                saturatedFat: "9.6g",
                carbohydrates: "1.6g",
                sugars: "1.6g",
                protein: "16g",
                salt: "2.2g"
            }
        },
        {
            id: "pulpa-de-pui",
            name: "*PULPA DE PUI",
            weight: "150g",
            price: 20,
            ingredients: "Pulpa pui, Sare, Piper",
            allergens: [],
            nutritionalValues: {
                energy: "548.4 kJ / 131.07 KCal",
                fat: "3.59g",
                saturatedFat: "0g",
                carbohydrates: "2.47g",
                sugars: "0.03g",
                protein: "21.97g",
                salt: "5.79g"
            }
        },
        {
            id: "pui-la-rotisor",
            name: "*PUI LA ROTISOR",
            weight: "1kg",
            price: 45,
            ingredients: "PUI INTREG, Ulei, Sare",
            allergens: [],
            nutritionalValues: {
                energy: "666.33 kJ / 159.26 KCal",
                fat: "12.51g",
                saturatedFat: "0.24g",
                carbohydrates: "1.18g",
                sugars: "0.61g",
                protein: "19.29g",
                salt: "0.95g"
            }
        },
        {
            id: "mici",
            name: "*MICI",
            weight: "45g",
            price: 6,
            ingredients: "Mici",
            allergens: ["Mustar"],
            nutritionalValues: {
                energy: "610.86 kJ / 146 KCal",
                fat: "9.2g",
                saturatedFat: "5.8g",
                carbohydrates: "1.5g",
                sugars: "1.5g",
                protein: "14.2g",
                salt: "1.5g"
            }
        },
        {
            id: "dorada",
            name: "*DORADA",
            weight: "200g",
            price: 40,
            ingredients: "Dorada",
            allergens: ["Peste"],
            nutritionalValues: {
                energy: "372.38 kJ / 89 KCal",
                fat: "0.9g",
                saturatedFat: "0g",
                carbohydrates: "0g",
                sugars: "0g",
                protein: "18.9g",
                salt: "0g"
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
            name: "*CARTOFI PRAJIȚI",
            weight: "100g",
            price: 10,
            ingredients: "*Cartofi (congelați)",
            allergens: [],
            nutritionalValues: {
                energy: "376.56 kJ / 90 KCal",
                fat: "0.1g",
                saturatedFat: "0g",
                carbohydrates: "19.7g",
                sugars: "0g",
                protein: "1.9g",
                salt: "0g"
            }
        },
        {
            id: "orez-cu-legume",
            name: "OREZ CU LEGUME",
            weight: "150g",
            price: 12,
            ingredients: "OREZ, Ciuperci, morcovi, Ulei de măsline, Sare",
            allergens: ["Gluten", "ciuperci"],
            nutritionalValues: {
                energy: "1184.89 kJ / 283.2 KCal",
                fat: "4.3g",
                saturatedFat: "0.27g",
                carbohydrates: "55.68g",
                sugars: "0.83g",
                protein: "4.62g",
                salt: "0.65g"
            }
        },
        {
            id: "piure-de-cartofi",
            name: "PIURE DE CARTOFI",
            weight: "150g",
            price: 13,
            ingredients: "Cartofi, Lapte 3,5%, Unt, Sare",
            allergens: ["Lapte"],
            nutritionalValues: {
                energy: "436.19 kJ / 104.25 KCal",
                fat: "3.29g",
                saturatedFat: "2.13g",
                carbohydrates: "16.97g",
                sugars: "0.78g",
                protein: "1.31g",
                salt: "0.18g"
            }
        },
        {
            id: "legume-la-gratar",
            name: "LEGUME LA GRĂTAR",
            weight: "200g",
            price: 15,
            ingredients: "Dovlecei, Ardei gras, Vinete, Ciuperci, Ulei de măsline, Sare",
            allergens: [],
            nutritionalValues: {
                energy: "183.24 kJ / 43.8 KCal",
                fat: "2.8g",
                saturatedFat: "0.03g",
                carbohydrates: "4.8g",
                sugars: "1.85g",
                protein: "1.5g",
                salt: "0.5g"
            }
        },
        {
            id: "cartofi-striviti-cu-usturoi",
            name: "CARTOFI STRIVITI CU USTUROI",
            weight: "100g",
            price: 18,
            ingredients: "Cartofi, Unt, Sare",
            allergens: ["Lapte"],
            nutritionalValues: {
                energy: "511.01 kJ / 122.13 KCal",
                fat: "4.62g",
                saturatedFat: "3g",
                carbohydrates: "18.68g",
                sugars: "0.21g",
                protein: "1.12g",
                salt: "1.1g"
            }
        },
        {
            id: "sparanghel-la-gratar",
            name: "*SPARANGHEL LA GRĂTAR",
            weight: "150g",
            price: 15,
            ingredients: "Sparanghel, Ulei de măsline, Sare",
            allergens: [],
            nutritionalValues: {
                energy: "195.46 kJ / 46.71 KCal",
                fat: "3.31g",
                saturatedFat: "0g",
                carbohydrates: "3.97g",
                sugars: "2.1g",
                protein: "2.15g",
                salt: "0.32g"
            }
        },
        {
            id: "piure-de-cartofi-cu-trufe",
            name: "PIURE DE CARTOFI CU TRUFE",
            weight: "150g",
            price: 18,
            ingredients: "Cartofi, Lapte, Unt, Ulei de măsline cu trufe, Sare",
            allergens: ["Lapte", "ciuperci"],
            nutritionalValues: {
                energy: "521.41 kJ / 124.86 KCal",
                fat: "5.53g",
                saturatedFat: "2.6g",
                carbohydrates: "16.99g",
                sugars: "0.41g",
                protein: "1.21g",
                salt: "0.4g"
            }
        },
        {
            id: "bulete-de-cascaval",
            name: "*BULETE DE CASCAVAL",
            weight: "100g",
            price: 15,
            ingredients: "*Bulete cu cașcaval 200g",
            allergens: ["Lapte", "gluten"],
            nutritionalValues: {
                energy: "1577.37 kJ / 377 KCal",
                fat: "29.2g",
                saturatedFat: "12.5g",
                carbohydrates: "8.9g",
                sugars: "7.3g",
                protein: "18.9g",
                salt: "0.98g"
            }
        },
        {
            id: "cartofi-gratinati-cu-branza-si-smantana",
            name: "*CARTOFI GRATINATI CU BRANZA SI SMANTANA",
            weight: "100g",
            price: 15,
            ingredients: "Cartofi gratinați cu sos quattro formaggi",
            allergens: ["Lapte", "Oua"],
            nutritionalValues: {
                energy: "673.62 kJ / 161 KCal",
                fat: "8.8g",
                saturatedFat: "0g",
                carbohydrates: "14.4g",
                sugars: "1.2g",
                protein: "5.8g",
                salt: "0.49g"
            }
        },
        {
            id: "piure-de-mazare",
            name: "*PIURE DE MAZARE",
            weight: "150g",
            price: 15,
            ingredients: "*Piure de mazăre",
            allergens: [],
            nutritionalValues: {
                energy: "276.14 kJ / 66 KCal",
                fat: "0.7g",
                saturatedFat: "0g",
                carbohydrates: "6.5g",
                sugars: "2.8g",
                protein: "5.6g",
                salt: "0.01g"
            }
        },
        {
            id: "piure-de-telina",
            name: "*PIURE DE TELINA",
            weight: "150g",
            price: 15,
            ingredients: "Piure de țelină, Rădăcină de telina",
            allergens: ["Telina"],
            nutritionalValues: {
                energy: "92.05 kJ / 22 KCal",
                fat: "0.25g",
                saturatedFat: "0g",
                carbohydrates: "2.7g",
                sugars: "0.95g",
                protein: "1.1g",
                salt: "0.13g"
            }
        },
        {
            id: "cartofi-triunghi",
            name: "*CARTOFI TRIUNGHI",
            weight: "100g",
            price: 15,
            ingredients: "Cartofi gratinați Aviko",
            allergens: ["Lapte"],
            nutritionalValues: {
                energy: "836.3 kJ / 200 KCal",
                fat: "15g",
                saturatedFat: "1.1g",
                carbohydrates: "12g",
                sugars: "1.9g",
                protein: "3.9g",
                salt: "1g"
            }
        },
        {
            id: "salate-asortata-de-vara",
            name: "SALATE ASORTATA DE VARA",
            weight: "200g",
            price: 12,
            ingredients: "Castraveţi, Roşii, Ceapă",
            allergens: [],
            nutritionalValues: {
                energy: "78.74 kJ / 18.82 KCal",
                fat: "0.15g",
                saturatedFat: "0.02g",
                carbohydrates: "4.35g",
                sugars: "0.93g",
                protein: "0.79g",
                salt: "0g"
            }
        },
        {
            id: "salata-de-varza",
            name: "SALATĂ DE VARZĂ",
            weight: "200g",
            price: 10,
            ingredients: "Varza",
            allergens: [],
            nutritionalValues: {
                energy: "107.75 kJ / 25.75 KCal",
                fat: "0.1g",
                saturatedFat: "0g",
                carbohydrates: "5.95g",
                sugars: "2.5g",
                protein: "1.26g",
                salt: "0.02g"
            }
        }
    ]
  },
  {
    id: "salate",
    name: "SALATE",
    items: [
      {
        id: "salata-de-ton",
        name: "SALATĂ DE TON",
        weight: "400g",
        price: 32,
        ingredients: "Ton în suc propriu, Roşii cherry, Salată verde, Castraveţi, Porumb fiert, Măsline feliate, Ceapă roşie, Ulei de măsline, Sare",
        allergens: ["Peste"],
        nutritionalValues: {
            energy: "326.84 kJ / 78.12 KCal",
            fat: "3.54g",
            saturatedFat: "0.16g",
            carbohydrates: "4.6g",
            sugars: "0.92g",
            protein: "9.8g",
            salt: "0.56g"
        }
      },
      {
        id: "salata-caesar",
        name: "SALATĂ CAESAR",
        weight: "250g",
        price: 32,
        ingredients: "piept pui, Salată verde, Crutoane, Parmezan ras - Galbani, Sos Caesar, Ulei de măsline",
        allergens: ["Lapte", "Mustar", "Oua", "Peste"],
        nutritionalValues: {
            energy: "700.31 kJ / 167.38 KCal",
            fat: "8.69g",
            saturatedFat: "1.63g",
            carbohydrates: "10.01g",
            sugars: "1.21g",
            protein: "13.04g",
            salt: "2.63g"
        }
      },
      {
        id: "salata-lusso",
        name: "SALATĂ LUSSO",
        weight: "200g",
        price: 30,
        ingredients: "Salată Mixtă, Brânză de capră, Stafide, Ulei de măsline, Oţet balsamic",
        allergens: ["Lapte"],
        nutritionalValues: {
            energy: "573.38 kJ / 137.04 KCal",
            fat: "9.6g",
            saturatedFat: "3.13g",
            carbohydrates: "9.85g",
            sugars: "1g",
            protein: "5.34g",
            salt: "0.42g"
        }
      }
    ]
  },
  {
    id: "burgeri",
    name: "BURGERI",
    items: [
      {
        id: "burger-smash",
        name: "BURGER SMASH",
        weight: "300g",
        price: 40,
        ingredients: "*Cartofi prăjiţi, Burger viţă, Chiflă, Brânză Cheddar, Castraveţi Muraţi, Muştar, Ketchup, Maioneza, Ulei",
        allergens: ["Gluten", "Lapte", "Mustar", "Oua"],
        nutritionalValues: {
            energy: "864.68 kJ / 206.67 KCal",
            fat: "8.99g",
            saturatedFat: "4.57g",
            carbohydrates: "19.04g",
            sugars: "0.64g",
            protein: "9.71g",
            salt: "0.32g"
        }
      },
      {
        id: "burger-lusso",
        name: "BURGER LUSSO",
        weight: "300g",
        price: 40,
        ingredients: "*Cartofi prăjiţi, Burger viţă şi porc, Chiflă, Bacon, brânză cheddar, Ulei, Maioneza",
        allergens: ["Gluten", "Lapte"],
        nutritionalValues: {
            energy: "923.28 kJ / 220.67 KCal",
            fat: "11.71g",
            saturatedFat: "4.72g",
            carbohydrates: "18.03g",
            sugars: "0.35g",
            protein: "10.34g",
            salt: "1.13g"
        }
      }
    ]
  },
  {
    id: "sandwich",
    name: "SANDWICH",
    items: [
        {
            id: "sandwich-ceafa-de-porc",
            name: "SANDWICH CEAFA DE PORC",
            weight: "250g",
            price: 35,
            ingredients: "*Ceafă de porc ne grătar 90 gr, Cartofi (congelaţi) 50 gr, Castraveţi muraţi 6 gr, Salată verde 2 gr, Ceapă5 gr, Roşii 5 gr, Sare, CHIFLĂ 50 GR",
            allergens: ["Gluten", "Mustar"],
            nutritionalValues: {
                energy: "689.58 kJ / 164.81 KCal",
                fat: "4.91g",
                saturatedFat: "0.01g",
                carbohydrates: "19.69g",
                sugars: "0.62g",
                protein: "10.25g",
                salt: "0.69g"
            }
        },
        {
            id: "sandwich-piept-de-pui",
            name: "SANDWICH PIEPT DE PUI",
            weight: "250g",
            price: 35,
            ingredients: "*Piept pui, Cartofi (congelaţi) 50 gr, Castraveţi muraţi 5 gr, Salată verde 2 gr, Ceapă5 gr, Roşii5 gr, Sare, CHIFLĂ 50 GR",
            allergens: ["Gluten"],
            nutritionalValues: {
                energy: "632.45 kJ / 151.16 KCal",
                fat: "1.68g",
                saturatedFat: "0g",
                carbohydrates: "20.47g",
                sugars: "0.17g",
                protein: "13.07g",
                salt: "2.95g"
            }
        }
    ]
  },
  {
    id: "meniu",
    name: "MENIU",
    items: [
        {
            id: "meniu-ceafa-de-porc-cartofi-prajii-salata-sosuri-chifla",
            name: "MENIU CEAFĂ DE PORC, CARTOFI PRĂJIŢI, SALATĂ, SOSURI, CHIFLĂ",
            weight: "200g",
            price: 38,
            ingredients: "*Cartofi prăjiţi 100 GR, *Ceafă porc 100 GR, Salată 70 GR, SOSURI 50 GR, CHIFLĂ 1 BUC (50 GR)",
            allergens: ["Gluten"],
            nutritionalValues: {
                energy: "764.36 kJ / 182.69 KCal",
                fat: "9.08g",
                saturatedFat: "0.25g",
                carbohydrates: "12.52g",
                sugars: "0.29g",
                protein: "11.56g",
                salt: "0.31g"
            }
        },
        {
            id: "meniu-mici-3-buc-cartofi-prajii-salata",
            name: "MENIU MICI (3 BUC), CARTOFI PRĂJIŢI, SALATĂ",
            weight: "200g",
            price: 35,
            ingredients: "*, MICI, *Cartofi prăjiţi 100 GR, Salată 70 GR, SOSURI 50 GR, CHIFLĂ 1 BUC (50 GR)",
            allergens: ["Gluten"],
            nutritionalValues: {
                energy: "795.95 kJ / 190.24 KCal",
                fat: "6.6g",
                saturatedFat: "1.55g",
                carbohydrates: "24.91g",
                sugars: "0.48g",
                protein: "6.92g",
                salt: "0.7g"
            }
        },
        {
            id: "meniu-carnai-sarbeti",
            name: "MENIU CÂRNAŢI SÂRBEŞTI",
            weight: "200g",
            price: 35,
            ingredients: "*Cartofi prăjiţi 100 GR, *CÂRNAŢI 100 GR, Salată 70 GR, SOSURI 50 GR, CHIFLĂ 1 BUC (50 GR)",
            allergens: ["Gluten"],
            nutritionalValues: {
                energy: "799.55 kJ / 191.1 KCal",
                fat: "8.39g",
                saturatedFat: "2.18g",
                carbohydrates: "19.58g",
                sugars: "0.52g",
                protein: "8.56g",
                salt: "1.22g"
            }
        },
        {
            id: "coaste-porc-grill-cu-cartofi-prajii",
            name: "COASTE PORC GRILL CU CARTOFI PRĂJIŢI",
            weight: "400g/100g",
            price: 60,
            ingredients: "*Coastă de Porc 400 GR, *Cartofi (congelaţi) 100 GR",
            allergens: [],
            nutritionalValues: {
                energy: "756.61 kJ / 180.83 KCal",
                fat: "10.85g",
                saturatedFat: "4.5g",
                carbohydrates: "5.28g",
                sugars: "0.42g",
                protein: "15.32g",
                salt: "1.25g"
            }
        },
        {
            id: "pulpa-de-rata-confiata-cu-piure-de-mazare-telina",
            name: "PULPA DE RATA CONFIATA CU PIURE DE MAZARE TELINA",
            weight: "130gr/100",
            price: 45,
            ingredients: "Piure de mazăre 100 GR, Pulpa de rata confiata 130 GR",
            allergens: [],
            nutritionalValues: {
                energy: "558.56 kJ / 133.5 KCal",
                fat: "7.35g",
                saturatedFat: "1.9g",
                carbohydrates: "3.5g",
                sugars: "1.4g",
                protein: "11.8g",
                salt: "0.76g"
            }
        }
    ]
  },
  {
    id: "semipreparate",
    name: "SEMIPREPARATE",
    items: [
        {
            id: "carne-de-midii",
            name: "*CARNE DE MIDII",
            weight: "100g",
            price: 18,
            ingredients: "*Midii",
            allergens: ["Crustacee"],
            nutritionalValues: {
                energy: "415.05 kJ / 99.2 KCal",
                fat: "2.58g",
                saturatedFat: "0.49g",
                carbohydrates: "4.26g",
                sugars: "0g",
                protein: "13.76g",
                salt: "0.82g"
            }
        },
        {
            id: "inele-de-calamar",
            name: "*INELE DE CALAMAR",
            weight: "100g",
            price: 18,
            ingredients: "*Inele calamar pane",
            allergens: ["Gluten", "CRUSTACEE", "OUA"],
            nutritionalValues: {
                energy: "857.72 kJ / 205 KCal",
                fat: "7.2g",
                saturatedFat: "0.6g",
                carbohydrates: "35g",
                sugars: "2.1g",
                protein: "6.4g",
                salt: "1.65g"
            }
        },
        {
            id: "aripi-de-pui-crispi",
            name: "*ARIPI DE PUI CRISPI",
            weight: "100g",
            price: 15,
            ingredients: "*ARIPI PUI CRISPY",
            allergens: ["Oua", "GLUTEN"],
            nutritionalValues: {
                energy: "991.61 kJ / 237 KCal",
                fat: "15g",
                saturatedFat: "3.8g",
                carbohydrates: "10g",
                sugars: "0g",
                protein: "16g",
                salt: "2.4g"
            }
        },
        {
            id: "strips-piept-de-pui",
            name: "*STRIPS (PIEPT) DE PUI",
            weight: "100g",
            price: 18,
            ingredients: "*Strips pui crocant",
            allergens: ["GLUTEN", "OU"],
            nutritionalValues: {
                energy: "732.2 kJ / 175 KCal",
                fat: "7.9g",
                saturatedFat: "0.7g",
                carbohydrates: "7.9g",
                sugars: "0g",
                protein: "9.9g",
                salt: "1.9g"
            }
        },
        {
            id: "cascaval-pane",
            name: "*CASCAVAL PANE",
            weight: "100g",
            price: 15,
            ingredients: "*Cascaval pane",
            allergens: ["Lapte", "Gluten", "OU"],
            nutritionalValues: {
                energy: "1267.75 kJ / 303 KCal",
                fat: "17g",
                saturatedFat: "8.3g",
                carbohydrates: "20g",
                sugars: "0.9g",
                protein: "17g",
                salt: "1.36g"
            }
        }
    ]
  },
  {
    id: "diverse",
    name: "DIVERSE",
    items: [
        {
            id: "chifla",
            name: "CHIFLA",
            weight: "50g",
            price: 2,
            ingredients: "CHIFLĂ",
            allergens: ["Gluten"],
            nutritionalValues: {
                energy: "1154.78 kJ / 276 KCal",
                fat: "3.6g",
                saturatedFat: "0.3g",
                carbohydrates: "51g",
                sugars: "0g",
                protein: "8.7g",
                salt: "1.3g"
            }
        },
        {
            id: "ardei-iute",
            name: "ARDEI IUTE",
            weight: "1",
            price: 2,
            ingredients: "",
            allergens: [],
            nutritionalValues: {
                energy: "",
                fat: "",
                saturatedFat: "",
                carbohydrates: "",
                sugars: "",
                protein: "",
                salt: ""
            }
        },
        {
            id: "smantana",
            name: "SMANTANA",
            weight: "50g",
            price: 2,
            ingredients: "",
            allergens: ["lapte"],
            nutritionalValues: {
                energy: "",
                fat: "",
                saturatedFat: "",
                carbohydrates: "",
                sugars: "",
                protein: "",
                salt: ""
            }
        },
        {
            id: "sosuri",
            name: "SOSURI",
            weight: "50g",
            price: 2,
            ingredients: "MUŞTAR, KETCHUP, SOS DE MAIONEZA, TZATZIKI",
            allergens: ["MUSTAR", "OU"],
            nutritionalValues: {
                energy: "",
                fat: "",
                saturatedFat: "",
                carbohydrates: "",
                sugars: "",
                protein: "",
                salt: ""
            }
        }
    ]
  },
  {
    id: "bar",
    name: "BAR",
    items: [
        {
            id: "capuccino",
            name: "CAPUCCINO",
            weight: "150ml",
            price: 12,
            ingredients: "Cafea, Spuma de lapte",
            allergens: [],
            nutritionalValues: {
                energy: "224 kJ / 53.6 KCal",
                fat: "2.8g",
                saturatedFat: "",
                carbohydrates: "4.3g",
                sugars: "",
                protein: "2.8g",
                salt: ""
            }
        },
        {
            id: "espresso",
            name: "ESPRESSO",
            weight: "30ml",
            price: 10,
            ingredients: "",
            allergens: [],
            nutritionalValues: {
                energy: "",
                fat: "",
                saturatedFat: "",
                carbohydrates: "",
                sugars: "",
                protein: "",
                salt: ""
            }
        },
        {
            id: "latte-macchiato",
            name: "LATTE MACCHIATO",
            weight: "",
            price: 14,
            ingredients: "Cafea, Lapte",
            allergens: [],
            nutritionalValues: {
                energy: "142 kJ / 34 KCal",
                fat: "1.8g",
                saturatedFat: "",
                carbohydrates: "2.6g",
                sugars: "",
                protein: "",
                salt: ""
            }
        },
        {
            id: "lungo-cafea",
            name: "LUNGO (CAFEA)",
            weight: "60ml",
            price: 10,
            ingredients: "",
            allergens: [],
            nutritionalValues: {
                energy: "",
                fat: "",
                saturatedFat: "",
                carbohydrates: "",
                sugars: "",
                protein: "",
                salt: ""
            }
        },
        {
            id: "ristretto",
            name: "RISTRETTO",
            weight: "20ml",
            price: 10,
            ingredients: "",
            allergens: [],
            nutritionalValues: {
                energy: "",
                fat: "",
                saturatedFat: "",
                carbohydrates: "",
                sugars: "",
                protein: "",
                salt: ""
            }
        }
    ]
  },
  {
    id: "racoritoare",
    name: "RĂCORITOARE",
    items: [
        {
            id: "3-cents",
            name: "3 CENTS",
            weight: "200ml",
            price: 15,
            ingredients: "",
            allergens: [],
            nutritionalValues: {
                energy: "",
                fat: "",
                saturatedFat: "",
                carbohydrates: "",
                sugars: "",
                protein: "",
                salt: ""
            }
        },
        {
            id: "apa-minerala",
            name: "APA MINERALA",
            weight: "0.33L",
            price: 12,
            ingredients: "",
            allergens: [],
            nutritionalValues: {
                energy: "",
                fat: "",
                saturatedFat: "",
                carbohydrates: "",
                sugars: "",
                protein: "",
                salt: ""
            }
        },
        {
            id: "apa-plata",
            name: "APA PLATA",
            weight: "0.33L",
            price: 12,
            ingredients: "",
            allergens: [],
            nutritionalValues: {
                energy: "",
                fat: "",
                saturatedFat: "",
                carbohydrates: "",
                sugars: "",
                protein: "",
                salt: ""
            }
        },
        {
            id: "cappy",
            name: "CAPPY",
            weight: "0.25L",
            price: 15,
            ingredients: "",
            allergens: [],
            nutritionalValues: {
                energy: "",
                fat: "",
                saturatedFat: "",
                carbohydrates: "",
                sugars: "",
                protein: "",
                salt: ""
            }
        },
        {
            id: "coca-cola",
            name: "COCA-COLA",
            weight: "0.25L",
            price: 15,
            ingredients: "",
            allergens: [],
            nutritionalValues: {
                energy: "",
                fat: "",
                saturatedFat: "",
                carbohydrates: "",
                sugars: "",
                protein: "",
                salt: ""
            }
        },
        {
            id: "coca-cola-zero-zahar",
            name: "COCA-COLA ZERO ZAHAR",
            weight: "0.25L",
            price: 15,
            ingredients: "",
            allergens: [],
            nutritionalValues: {
                energy: "",
                fat: "",
                saturatedFat: "",
                carbohydrates: "",
                sugars: "",
                protein: "",
                salt: ""
            }
        },
        {
            id: "fanta",
            name: "FANTA",
            weight: "0.25L",
            price: 15,
            ingredients: "",
            allergens: [],
            nutritionalValues: {
                energy: "",
                fat: "",
                saturatedFat: "",
                carbohydrates: "",
                sugars: "",
                protein: "",
                salt: ""
            }
        },
        {
            id: "fi-ga",
            name: "FI-GA",
            weight: "250ml",
            price: 20,
            ingredients: "",
            allergens: [],
            nutritionalValues: {
                energy: "",
                fat: "",
                saturatedFat: "",
                carbohydrates: "",
                sugars: "",
                protein: "",
                salt: ""
            }
        },
        {
            id: "fuzetea",
            name: "FUZETEA",
            weight: "0.25L",
            price: 15,
            ingredients: "",
            allergens: [],
            nutritionalValues: {
                energy: "",
                fat: "",
                saturatedFat: "",
                carbohydrates: "",
                sugars: "",
                protein: "",
                salt: ""
            }
        },
        {
            id: "red-bull",
            name: "RED BULL",
            weight: "250ml",
            price: 15,
            ingredients: "",
            allergens: [],
            nutritionalValues: {
                energy: "",
                fat: "",
                saturatedFat: "",
                carbohydrates: "",
                sugars: "",
                protein: "",
                salt: ""
            }
        },
        {
            id: "schweppes",
            name: "SCHWEPPES",
            weight: "0.25L",
            price: 15,
            ingredients: "",
            allergens: [],
            nutritionalValues: {
                energy: "",
                fat: "",
                saturatedFat: "",
                carbohydrates: "",
                sugars: "",
                protein: "",
                salt: ""
            }
        },
        {
            id: "sprite-fresh-new-ro-sticla",
            name: "SPRITE FRESH NEW RO, STICLA",
            weight: "0.25L",
            price: 15,
            ingredients: "",
            allergens: [],
            nutritionalValues: {
                energy: "",
                fat: "",
                saturatedFat: "",
                carbohydrates: "",
                sugars: "",
                protein: "",
                salt: ""
            }
        },
        {
            id: "fresh-portocale",
            name: "FRESH PORTOCALE",
            weight: "200ml",
            price: 18,
            ingredients: "",
            allergens: [],
            nutritionalValues: {
                energy: "",
                fat: "",
                saturatedFat: "",
                carbohydrates: "",
                sugars: "",
                protein: "",
                salt: ""
            }
        },
        {
            id: "limonada",
            name: "LIMONADA",
            weight: "300ml",
            price: 14,
            ingredients: "Apa, Lamaie, Menta, Zahar",
            allergens: [],
            nutritionalValues: {
                energy: "",
                fat: "",
                saturatedFat: "",
                carbohydrates: "",
                sugars: "",
                protein: "",
                salt: ""
            }
        }
    ]
  },
  {
    id: "bere",
    name: "BERE",
    items: [
        {
            id: "bere-amstel",
            name: "BERE AMSTEL",
            weight: "330ml",
            price: 15,
            ingredients: "",
            allergens: [],
            nutritionalValues: {
                energy: "",
                fat: "",
                saturatedFat: "",
                carbohydrates: "",
                sugars: "",
                protein: "",
                salt: ""
            }
        },
        {
            id: "bere-birra-morettsale-di-mare",
            name: "BERE BIRRA MORETTSALE DI MARE",
            weight: "330ml",
            price: 19,
            ingredients: "",
            allergens: [],
            nutritionalValues: {
                energy: "",
                fat: "",
                saturatedFat: "",
                carbohydrates: "",
                sugars: "",
                protein: "",
                salt: ""
            }
        },
        {
            id: "bere-ciuc-premium",
            name: "BERE CIUC PREMIUM",
            weight: "330ml",
            price: 15,
            ingredients: "",
            allergens: [],
            nutritionalValues: {
                energy: "",
                fat: "",
                saturatedFat: "",
                carbohydrates: "",
                sugars: "",
                protein: "",
                salt: ""
            }
        },
        {
            id: "bere-ciuc-radler-lemon",
            name: "BERE CIUC RADLER LEMON",
            weight: "330ml",
            price: 19,
            ingredients: "",
            allergens: [],
            nutritionalValues: {
                energy: "",
                fat: "",
                saturatedFat: "",
                carbohydrates: "",
                sugars: "",
                protein: "",
                salt: ""
            }
        },
        {
            id: "bere-desperados",
            name: "BERE DESPERADOS",
            weight: "330ml",
            price: 15,
            ingredients: "",
            allergens: [],
            nutritionalValues: {
                energy: "",
                fat: "",
                saturatedFat: "",
                carbohydrates: "",
                sugars: "",
                protein: "",
                salt: ""
            }
        },
        {
            id: "bere-heineken-0",
            name: "BERE HEINEKEN 0%",
            weight: "330ml",
            price: 17,
            ingredients: "",
            allergens: [],
            nutritionalValues: {
                energy: "",
                fat: "",
                saturatedFat: "",
                carbohydrates: "",
                sugars: "",
                protein: "",
                salt: ""
            }
        },
        {
            id: "bere-heineken",
            name: "BERE HEINEKEN",
            weight: "330ml",
            price: 17,
            ingredients: "",
            allergens: [],
            nutritionalValues: {
                energy: "",
                fat: "",
                saturatedFat: "",
                carbohydrates: "",
                sugars: "",
                protein: "",
                salt: ""
            }
        },
        {
            id: "bere-heineken-draft",
            name: "BERE HEINEKEN DRAFT",
            weight: "400ml",
            price: 15,
            ingredients: "",
            allergens: [],
            nutritionalValues: {
                energy: "",
                fat: "",
                saturatedFat: "",
                carbohydrates: "",
                sugars: "",
                protein: "",
                salt: ""
            }
        },
        {
            id: "bere-strongbow",
            name: "BERE STRONGBOW",
            weight: "",
            price: 17,
            ingredients: "",
            allergens: [],
            nutritionalValues: {
                energy: "",
                fat: "",
                saturatedFat: "",
                carbohydrates: "",
                sugars: "",
                protein: "",
                salt: ""
            }
        }
    ]
  },
  {
    id: "vin",
    name: "VIN",
    items: [
        {
            id: "vin-recas-implicit-750",
            name: "VIN RECAS IMPLICIT",
            weight: "750ml",
            price: 120,
            ingredients: "",
            allergens: [],
            nutritionalValues: {
                energy: "",
                fat: "",
                saturatedFat: "",
                carbohydrates: "",
                sugars: "",
                protein: "",
                salt: ""
            }
        },
        {
            id: "vin-recas-implicit",
            name: "VIN RECAS IMPLICIT",
            weight: "187ml",
            price: 27,
            ingredients: "",
            allergens: [],
            nutritionalValues: {
                energy: "",
                fat: "",
                saturatedFat: "",
                carbohydrates: "",
                sugars: "",
                protein: "",
                salt: ""
            }
        },
        {
            id: "vin-recas-sole-chardonnay-barrique",
            name: "VIN RECAS SOLE CHARDONNAY BARRIQUE",
            weight: "750ml",
            price: 150,
            ingredients: "",
            allergens: [],
            nutritionalValues: {
                energy: "",
                fat: "",
                saturatedFat: "",
                carbohydrates: "",
                sugars: "",
                protein: "",
                salt: ""
            }
        },
        {
            id: "vin-recas-solo-quinta-alb",
            name: "VIN RECAS SOLO QUINTA ALB",
            weight: "750ml",
            price: 180,
            ingredients: "",
            allergens: [],
            nutritionalValues: {
                energy: "",
                fat: "",
                saturatedFat: "",
                carbohydrates: "",
                sugars: "",
                protein: "",
                salt: ""
            }
        },
        {
            id: "vin-recas-muse-night-rose-demisec",
            name: "VIN RECAS MUSE NIGHT ROSE DEMISEC",
            weight: "750ml",
            price: 150,
            ingredients: "",
            allergens: [],
            nutritionalValues: {
                energy: "",
                fat: "",
                saturatedFat: "",
                carbohydrates: "",
                sugars: "",
                protein: "",
                salt: ""
            }
        },
        {
            id: "vin-murfatlar-aerosoli",
            name: "VIN MURFATLAR AEROSOLI",
            weight: "750ml",
            price: 80,
            ingredients: "",
            allergens: [],
            nutritionalValues: {
                energy: "",
                fat: "",
                saturatedFat: "",
                carbohydrates: "",
                sugars: "",
                protein: "",
                salt: ""
            }
        },
        {
            id: "vin-murfatlar-arezan",
            name: "VIN MURFATLAR AREZAN",
            weight: "750ml",
            price: 150,
            ingredients: "",
            allergens: [],
            nutritionalValues: {
                energy: "",
                fat: "",
                saturatedFat: "",
                carbohydrates: "",
                sugars: "",
                protein: "",
                salt: ""
            }
        },
        {
            id: "vin-rasova-la-plage-damour",
            name: "VIN RASOVA LA PLAGE D'AMOUR",
            weight: "750ml",
            price: 80,
            ingredients: "",
            allergens: [],
            nutritionalValues: {
                energy: "",
                fat: "",
                saturatedFat: "",
                carbohydrates: "",
                sugars: "",
                protein: "",
                salt: ""
            }
        },
        {
            id: "vin-rasova-prosecco",
            name: "VIN RASOVA PROSECCO",
            weight: "750ml",
            price: 90,
            ingredients: "",
            allergens: [],
            nutritionalValues: {
                energy: "",
                fat: "",
                saturatedFat: "",
                carbohydrates: "",
                sugars: "",
                protein: "",
                salt: ""
            }
        },
        {
            id: "vin-rasova-sur-mer-rose",
            name: "VIN RASOVA SUR MER ROSE",
            weight: "750ml",
            price: 130,
            ingredients: "",
            allergens: [],
            nutritionalValues: {
                energy: "",
                fat: "",
                saturatedFat: "",
                carbohydrates: "",
                sugars: "",
                protein: "",
                salt: ""
            }
        },
        {
            id: "vin-rasova-sur-mer-cuvee-alb",
            name: "VIN RASOVA SUR MER CUVEE ALB",
            weight: "750ml",
            price: 150,
            ingredients: "",
            allergens: [],
            nutritionalValues: {
                energy: "",
                fat: "",
                saturatedFat: "",
                carbohydrates: "",
                sugars: "",
                protein: "",
                salt: ""
            }
        },
        {
            id: "vin-rasova-riviera-rose",
            name: "VIN RASOVA RIVIERA ROSE",
            weight: "750ml",
            price: 70,
            ingredients: "",
            allergens: [],
            nutritionalValues: {
                energy: "",
                fat: "",
                saturatedFat: "",
                carbohydrates: "",
                sugars: "",
                protein: "",
                salt: ""
            }
        },
        {
            id: "vin-liliac-sauvignon-blanc",
            name: "VIN LILIAC SAUVIGNON BLANC",
            weight: "750ml",
            price: 130,
            ingredients: "",
            allergens: [],
            nutritionalValues: {
                energy: "",
                fat: "",
                saturatedFat: "",
                carbohydrates: "",
                sugars: "",
                protein: "",
                salt: ""
            }
        },
        {
            id: "vin-liliac-rose",
            name: "VIN LILIAC ROSE",
            weight: "750ml",
            price: 110,
            ingredients: "",
            allergens: [],
            nutritionalValues: {
                energy: "",
                fat: "",
                saturatedFat: "",
                carbohydrates: "",
                sugars: "",
                protein: "",
                salt: ""
            }
        },
        {
            id: "vin-liliac-tandem",
            name: "VIN LILIAC TANDEM",
            weight: "750ml",
            price: 70,
            ingredients: "",
            allergens: [],
            nutritionalValues: {
                energy: "",
                fat: "",
                saturatedFat: "",
                carbohydrates: "",
                sugars: "",
                protein: "",
                salt: ""
            }
        },
        {
            id: "spumant-luc-belaire-gold",
            name: "SPUMANT LUC BELAIRE GOLD",
            weight: "750ml",
            price: 200,
            ingredients: "",
            allergens: [],
            nutritionalValues: {
                energy: "",
                fat: "",
                saturatedFat: "",
                carbohydrates: "",
                sugars: "",
                protein: "",
                salt: ""
            }
        },
        {
            id: "spumant-luc-belaire-rose",
            name: "SPUMANT LUC BELAIRE ROSE",
            weight: "750ml",
            price: 200,
            ingredients: "",
            allergens: [],
            nutritionalValues: {
                energy: "",
                fat: "",
                saturatedFat: "",
                carbohydrates: "",
                sugars: "",
                protein: "",
                salt: ""
            }
        },
        {
            id: "spumant-mumm-gordon-rose",
            name: "SPUMANT MUMM GORDON ROSE",
            weight: "750ml",
            price: 450,
            ingredients: "",
            allergens: [],
            nutritionalValues: {
                energy: "",
                fat: "",
                saturatedFat: "",
                carbohydrates: "",
                sugars: "",
                protein: "",
                salt: ""
            }
        },
        {
            id: "spumant-mumm-grand-gordon-brut",
            name: "SPUMANT MUMM GRAND GORDON BRUT",
            weight: "750ml",
            price: 350,
            ingredients: "",
            allergens: [],
            nutritionalValues: {
                energy: "",
                fat: "",
                saturatedFat: "",
                carbohydrates: "",
                sugars: "",
                protein: "",
                salt: ""
            }
        },
        {
            id: "spumant-perrier-jouet-belle-epoque",
            name: "SPUMANT PERRIER JOUET BELLE EPOQUE",
            weight: "750ml",
            price: 1600,
            ingredients: "",
            allergens: [],
            nutritionalValues: {
                energy: "",
                fat: "",
                saturatedFat: "",
                carbohydrates: "",
                sugars: "",
                protein: "",
                salt: ""
            }
        }
    ]
  },
  {
    id: "alcoolice",
    name: "ALCOOLICE",
    items: [
        {
            id: "coniac-martel-xo",
            name: "CONIAC MARTEL XO",
            weight: "50ml",
            price: 100,
            ingredients: "",
            allergens: [],
            nutritionalValues: {
                energy: "",
                fat: "",
                saturatedFat: "",
                carbohydrates: "",
                sugars: "",
                protein: "",
                salt: ""
            }
        },
        {
            id: "coniac-ararat-5",
            name: "CONIAC ARARAT 5*",
            weight: "50ml",
            price: 20,
            ingredients: "",
            allergens: [],
            nutritionalValues: {
                energy: "",
                fat: "",
                saturatedFat: "",
                carbohydrates: "",
                sugars: "",
                protein: "",
                salt: ""
            }
        },
        {
            id: "coniac-martel",
            name: "CONIAC MARTEL",
            weight: "50ml",
            price: 35,
            ingredients: "",
            allergens: [],
            nutritionalValues: {
                energy: "",
                fat: "",
                saturatedFat: "",
                carbohydrates: "",
                sugars: "",
                protein: "",
                salt: ""
            }
        },
        {
            id: "rom-bumbu-original",
            name: "ROM BUMBU ORIGINAL",
            weight: "50ml",
            price: 30,
            ingredients: "",
            allergens: [],
            nutritionalValues: {
                energy: "",
                fat: "",
                saturatedFat: "",
                carbohydrates: "",
                sugars: "",
                protein: "",
                salt: ""
            }
        },
        {
            id: "rom-havana-club-7-ani",
            name: "ROM HAVANA CLUB 7 ANI",
            weight: "50ml",
            price: 25,
            ingredients: "",
            allergens: [],
            nutritionalValues: {
                energy: "",
                fat: "",
                saturatedFat: "",
                carbohydrates: "",
                sugars: "",
                protein: "",
                salt: ""
            }
        },
        {
            id: "rom-la-hechicera",
            name: "ROM LA HECHICERA",
            weight: "50ml",
            price: 40,
            ingredients: "",
            allergens: [],
            nutritionalValues: {
                energy: "",
                fat: "",
                saturatedFat: "",
                carbohydrates: "",
                sugars: "",
                protein: "",
                salt: ""
            }
        },
        {
            id: "vermut-petroni-rojo",
            name: "VERMUT PETRONI ROJO",
            weight: "50ml",
            price: 15,
            ingredients: "",
            allergens: [],
            nutritionalValues: {
                energy: "",
                fat: "",
                saturatedFat: "",
                carbohydrates: "",
                sugars: "",
                protein: "",
                salt: ""
            }
        },
        {
            id: "vermut-ramazzotti-amaro",
            name: "VERMUT RAMAZZOTTI AMARO",
            weight: "50ml",
            price: 10,
            ingredients: "",
            allergens: [],
            nutritionalValues: {
                energy: "",
                fat: "",
                saturatedFat: "",
                carbohydrates: "",
                sugars: "",
                protein: "",
                salt: ""
            }
        },
        {
            id: "vodca-absolut-blue",
            name: "VODCA ABSOLUT BLUE",
            weight: "50ml",
            price: 12,
            ingredients: "",
            allergens: [],
            nutritionalValues: {
                energy: "",
                fat: "",
                saturatedFat: "",
                carbohydrates: "",
                sugars: "",
                protein: "",
                salt: ""
            }
        },
        {
            id: "vodca-absolut-elyx",
            name: "VODCA ABSOLUT ELYX",
            weight: "50ml",
            price: 30,
            ingredients: "",
            allergens: [],
            nutritionalValues: {
                energy: "",
                fat: "",
                saturatedFat: "",
                carbohydrates: "",
                sugars: "",
                protein: "",
                salt: ""
            }
        },
        {
            id: "vodca-ostoya",
            name: "VODCA OSTOYA",
            weight: "50ml",
            price: 20,
            ingredients: "",
            allergens: [],
            nutritionalValues: {
                energy: "",
                fat: "",
                saturatedFat: "",
                carbohydrates: "",
                sugars: "",
                protein: "",
                salt: ""
            }
        },
        {
            id: "vodca-ostoya-black",
            name: "VODCA OSTOYA BLACK",
            weight: "50ml",
            price: 25,
            ingredients: "",
            allergens: [],
            nutritionalValues: {
                energy: "",
                fat: "",
                saturatedFat: "",
                carbohydrates: "",
                sugars: "",
                protein: "",
                salt: ""
            }
        },
        {
            id: "whiskey-carolans-irish-cream",
            name: "WHISKEY CAROLAN'S IRISH CREAM",
            weight: "50ml",
            price: 15,
            ingredients: "",
            allergens: [],
            nutritionalValues: {
                energy: "",
                fat: "",
                saturatedFat: "",
                carbohydrates: "",
                sugars: "",
                protein: "",
                salt: ""
            }
        },
        {
            id: "whiskey-chivas-regal-12y",
            name: "WHISKEY CHIVAS REGAL 12Y",
            weight: "50ml",
            price: 18,
            ingredients: "",
            allergens: [],
            nutritionalValues: {
                energy: "",
                fat: "",
                saturatedFat: "",
                carbohydrates: "",
                sugars: "",
                protein: "",
                salt: ""
            }
        },
        {
            id: "whiskey-chivas-regal-18y",
            name: "WHISKEY CHIVAS REGAL 18Y",
            weight: "50ml",
            price: 45,
            ingredients: "",
            allergens: [],
            nutritionalValues: {
                energy: "",
                fat: "",
                saturatedFat: "",
                carbohydrates: "",
                sugars: "",
                protein: "",
                salt: ""
            }
        },
        {
            id: "whiskey-four-roses",
            name: "WHISKEY FOUR ROSES",
            weight: "50ml",
            price: 18,
            ingredients: "",
            allergens: [],
            nutritionalValues: {
                energy: "",
                fat: "",
                saturatedFat: "",
                carbohydrates: "",
                sugars: "",
                protein: "",
                salt: ""
            }
        },
        {
            id: "whiskey-glenlivet-15y",
            name: "WHISKEY GLENLIVET 15Y",
            weight: "50ml",
            price: 45,
            ingredients: "",
            allergens: [],
            nutritionalValues: {
                energy: "",
                fat: "",
                saturatedFat: "",
                carbohydrates: "",
                sugars: "",
                protein: "",
                salt: ""
            }
        },
        {
            id: "whiskey-jameson",
            name: "WHISKEY JAMESON",
            weight: "50ml",
            price: 12,
            ingredients: "",
            allergens: [],
            nutritionalValues: {
                energy: "",
                fat: "",
                saturatedFat: "",
                carbohydrates: "",
                sugars: "",
                protein: "",
                salt: ""
            }
        },
        {
            id: "whiskey-jameson-black-barrel",
            name: "WHISKEY JAMESON BLACK BARREL",
            weight: "50ml",
            price: 25,
            ingredients: "",
            allergens: [],
            nutritionalValues: {
                energy: "",
                fat: "",
                saturatedFat: "",
                carbohydrates: "",
                sugars: "",
                protein: "",
                salt: ""
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

/**
 * Normalizes text by removing diacritics and converting to lowercase.
 * This allows for diacritic-insensitive search (e.g., "branza" will match "brânză").
 * @param text The text to normalize.
 * @returns The normalized text without diacritics.
 */
const normalizeDiacritics = (text: string): string => {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove combining diacritical marks
    .replace(/ă/g, 'a')
    .replace(/â/g, 'a')
    .replace(/î/g, 'i')
    .replace(/ș/g, 's')
    .replace(/ț/g, 't')
    .replace(/ş/g, 's') // Alternative s with cedilla
    .replace(/ţ/g, 't'); // Alternative t with cedilla
};

/**
 * Searches menu items based on a query string.
 * This improved function is more efficient and provides richer results.
 * Now supports diacritic-insensitive search.
 * @param query The search string entered by the user.
 * @returns An array of SearchResult objects, each containing the matched item and its category info.
 */
export const searchMenuItems = (query: string): SearchResult[] => {
  // Return early if the query is empty or just whitespace.
  const trimmedQuery = query.trim();
  if (!trimmedQuery) {
    return [];
  }

  // Normalize the query (remove diacritics) and split it into individual search words (tokens).
  const searchTokens = normalizeDiacritics(trimmedQuery).split(' ').filter(token => token.length > 0);

  // Flatten the menu data into a single array of items, each with its category info.
  // This is more efficient than using nested loops.
  const allItemsWithCategory = menuData.flatMap(category =>
    category.items.map(item => ({
      item,
      categoryId: category.id,
      categoryName: category.name,
    }))
  );

  // Filter the flattened list of items.
  return allItemsWithCategory.filter(({ item }) => {
    // Combine the item's name and ingredients into a single searchable string.
    // Normalize the searchable text to remove diacritics for comparison.
    const searchableText = normalizeDiacritics(item.name + ' ' + item.ingredients);
    
    // Check if every search token is present in the searchable text.
    return searchTokens.every(token => searchableText.includes(token));
  });
};