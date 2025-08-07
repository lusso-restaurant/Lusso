# Menu Validation Report

This report documents all discrepancies found between `Menu.md` and `src/data/menu.ts`.

## Summary
- **Total items in Menu.md**: 118
- **Total items in menu.ts**: 133
- **Missing items**: 8
- **Extra items**: 25
- **Mismatched items**: 2
- **Missing categories**: 4

## Critical Issues (Errors)

### Missing Items in menu.ts
These items exist in Menu.md but are missing from menu.ts:

1. **PIZZA QUOATTRO FORMAGGI** (id: pizza-quoattro-formaggi)
   - **Issue**: Spelling error - should be "QUATTRO" not "QUOATTRO"
   - **Action**: Fix spelling in Menu.md or add item to menu.ts

2. **PASTE QUATRO FORMAGGI** (id: paste-quatro-formaggi)
   - **Issue**: Spelling error - should be "QUATTRO" not "QUATRO"
   - **Action**: Fix spelling in Menu.md or add item to menu.ts

3. **SALATE ASORTATA DE VARA** (id: salate-asortata-de-vara)
   - **Issue**: Missing from menu.ts
   - **Action**: Add to menu.ts or remove from Menu.md

4. **MENIU CEAFA DE PORC, CARTOFI PRAJITI, SALATA, SOSURI, CHIFLA** (id: meniu-ceafa-de-porc-cartofi-prajiti-salata-sosuri-chifla)
   - **Issue**: Missing from menu.ts
   - **Action**: Add to menu.ts or remove from Menu.md

5. **MENIU MICI (3 BUC), CARTOFI PRAJITI, SALATA** (id: meniu-mici-3-buc-cartofi-prajiti-salata)
   - **Issue**: Missing from menu.ts
   - **Action**: Add to menu.ts or remove from Menu.md

6. **LUNGO (CAFEA)** (id: lungo-cafea)
   - **Issue**: Missing from menu.ts
   - **Action**: Add to menu.ts or remove from Menu.md

7. **SPRITE FRESH NEW RO, STICLA** (id: sprite-fresh-new-ro-sticla)
   - **Issue**: Missing from menu.ts
   - **Action**: Add to menu.ts or remove from Menu.md

8. **VIN RECAS IMPLICIT** (id: vin-recas-implicit)
   - **Issue**: Missing from menu.ts
   - **Action**: Add to menu.ts or remove from Menu.md

### Price Mismatches
These items have different prices between Menu.md and menu.ts:

1. **LATTE MACCHIATO** (id: latte-macchiato)
   - **Menu.md**: undefined (price not parsed correctly)
   - **menu.ts**: 14 lei
   - **Action**: Fix price parsing in Menu.md or verify correct price

2. **VIN MURFATLAR AEROSOLI** (id: vin-murfatlar-aerosoli)
   - **Menu.md**: undefined (price not parsed correctly)
   - **menu.ts**: 80 lei
   - **Action**: Fix price parsing in Menu.md or verify correct price

### Missing Categories
These categories exist in Menu.md but are missing from menu.ts:

1. **GRATAR** - Grilled items category
2. **SALATA** - Salads category
3. **BURGER** - Burgers category
4. **RACORITOARE** - Soft drinks/refreshments category

## Warnings (Extra Items)

These items exist in menu.ts but not in Menu.md:

1. **OMLETA CU 2 TIPURI DE BRÂNZĂ** (id: omleta-cu-2-tipuri-de-branza)
2. **COUNTRY PLATE** (id: country-plate)
3. **PIZZA QUATTRO FORMAGGI** (id: pizza-quattro-formaggi)
   - **Note**: This is likely the correct spelling of "PIZZA QUOATTRO FORMAGGI" from Menu.md
4. **PASTE QUATTRO FORMAGGI** (id: paste-quattro-formaggi)
   - **Note**: This is likely the correct spelling of "PASTE QUATRO FORMAGGI" from Menu.md

## Spelling Errors Identified

### Italian Words
1. **QUOATTRO** → **QUATTRO** (correct Italian spelling)
2. **QUATRO** → **QUATTRO** (correct Italian spelling)

## Recommendations

1. **Fix spelling errors** in Menu.md:
   - Change "QUOATTRO" to "QUATTRO"
   - Change "QUATRO" to "QUATTRO"

2. **Add missing categories** to menu.ts:
   - GRATAR
   - SALATA
   - BURGER
   - RACORITOARE

3. **Add missing items** to menu.ts or remove from Menu.md

4. **Fix price parsing** issues in Menu.md for items with undefined prices

5. **Verify extra items** in menu.ts - determine if they should be added to Menu.md or removed

## Test Command
To run this validation test:
```bash
npm test menu-data-validation
```

The test will fail until all discrepancies are resolved.