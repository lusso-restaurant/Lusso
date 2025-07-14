# Component Library Guide

## 🎯 How This Works (Simple Explanation)

Think of this like organizing your closet:
- **Each type of clothing goes in its own section** (shirts, pants, etc.)
- **You have one master list** that tells you where everything is
- **When you want to get dressed**, you just check the master list instead of searching everywhere

## 📁 Folder Structure

```
src/components/
├── index.ts          ← Your "master list" - import everything from here
├── ui/               ← shadcn/ui components (Button, Card, Input, etc.)
├── layout/           ← Page structure (Header, Footer, Sidebar)
├── forms/            ← Form components (ContactForm, LoginForm, etc.)
├── navigation/       ← Navigation (NavBar, Breadcrumbs, etc.)
├── data-display/     ← Display data (ProductCard, UserProfile, etc.)
└── feedback/         ← User feedback (Toast, LoadingSpinner, etc.)
```

## ✨ How to Use Components

### The Magic Import
Instead of importing from multiple files:
```tsx
// ❌ DON'T do this
import { Button } from './components/ui/button';
import { Header } from './components/layout/header';
import { ProductCard } from './components/data-display/product-card';
```

Just import everything from one place:
```tsx
// ✅ DO this - everything from one place!
import { Button, Header, ProductCard } from '@/components';
```

### Example Usage
```tsx
import { Header, ProductCard, ContactForm } from '@/components';

export default function MyPage() {
  return (
    <div>
      <Header title="My Store" />
      <ProductCard product={myProduct} />
      <ContactForm onSubmit={handleSubmit} />
    </div>
  );
}
```

## 🔧 Adding New Components

### 1. Adding shadcn/ui Components
```bash
# Install a new shadcn component
npx shadcn@latest add dialog

# Then add it to src/components/ui/index.ts
export { Dialog, DialogContent, DialogHeader, DialogTitle } from './dialog';
```

### 2. Creating Custom Components

1. **Create the component file** in the right folder:
   ```tsx
   // src/components/layout/footer.tsx
   export function Footer() {
     return <footer>© 2024 My Company</footer>;
   }
   ```

2. **Export it from the folder's index.ts**:
   ```tsx
   // src/components/layout/index.ts
   export { Header } from './header';
   export { Footer } from './footer';  // ← Add this line
   ```

3. **Use it anywhere**:
   ```tsx
   import { Footer } from '@/components';
   ```

## 🎨 Making Changes

### The Power of Single Source Updates
When you change a component in its source file, it automatically updates everywhere it's used!

**Example:** If you change the Header component in `src/components/layout/header.tsx`, every page using `<Header />` will automatically get the update.

## 📋 Quick Reference

### Component Categories

| Folder | What Goes Here | Examples |
|--------|----------------|----------|
| `ui/` | Basic UI elements from shadcn | Button, Input, Card, Dialog |
| `layout/` | Page structure | Header, Footer, Sidebar, Container |
| `forms/` | Form-related | LoginForm, ContactForm, SearchForm |
| `navigation/` | Navigation elements | NavBar, Breadcrumbs, Pagination |
| `data-display/` | Show data | ProductCard, UserProfile, DataTable |
| `feedback/` | User feedback | Toast, LoadingSpinner, ErrorMessage |

### Key Files to Remember

- **`src/components/index.ts`** - Your master export file
- **Each folder's `index.ts`** - Exports components from that category
- **Individual component files** - Where you build your components

## 🚀 Getting Started Tips

1. **Start small** - Use the existing components first
2. **Follow the pattern** - Put new components in the right folder
3. **Always export** - Don't forget to add to the index.ts files
4. **Import from one place** - Always use `import { } from '@/components'`

## 🔍 Finding Components

Not sure what components you have? Check these files:
- `src/components/index.ts` - See everything available
- Each folder's `index.ts` - See what's in each category

## ⚡ Pro Tips

1. **Reusable props** - Make your components flexible with props
2. **TypeScript** - Use interfaces for props (already set up!)
3. **Consistent naming** - Follow the existing naming patterns
4. **One component per file** - Keep it organized

---

**Need help?** Look at the existing components as examples! They show you exactly how to structure new ones.