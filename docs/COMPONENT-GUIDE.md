# Lusso Restaurant - Ultra-Modular Component Guide

## 📖 Documentation Navigation

* **[← Back to Documentation Index](./README.md)**

* **[Design System Reference](./DESIGN-SYSTEM.md)**

* **[Project Overview](../README.md)**

* **[Product Requirements](../PRD.md)**

## 🎯 Component Architecture Philosophy

Our restaurant website uses an **ultra-modular design system** with **optimized hybrid Server/Client Components** where every component is theme-aware, type-safe, and optimized for luxury dining experiences. We follow Next.js App Router best practices with static export compatibility for GitHub Pages hosting.

## 📁 Component Organization

```
src/components/
├── index.ts          # Master component export (your single import source)
├── ui/               # Design system & shadcn/ui components  
│   ├── theme-provider.tsx    # Theme context system
│   ├── theme-switch.tsx      # Live theme switching
│   ├── button.tsx           # Base button component
│   ├── card.tsx             # Base card component
│   ├── sheet.tsx            # Shadcn Sheet component
│   └── aurora-background.tsx # Aurora background effects
├── layout/           # Page structure & headers
│   ├── dynamic-header.tsx   # Smart header with menu integration
│   ├── header.tsx           # Core header component with effects
│   └── index.ts             # Layout exports
├── navigation/       # Navigation patterns
│   ├── main-navigation.tsx   # Desktop navigation component
│   ├── mobile-navigation.tsx # Mobile Sheet-based navigation
│   └── index.ts             # Navigation exports
├── restaurant/       # Restaurant-specific components
│   ├── menu-navigation.tsx  # Category navigation with sticky behavior
│   ├── menu-card.tsx        # Menu item display
│   ├── menu-category.tsx    # Category sections
│   ├── menu-page.tsx        # Complete menu page
│   └── menu-search.tsx      # Menu search functionality
├── sections/         # Page sections
│   ├── hero-section.tsx     # Landing experience
│   ├── story-section.tsx    # About section
│   ├── contact-section.tsx  # Contact & reservations
│   └── footer-section.tsx   # Footer content
├── data-display/     # Content presentation
│   ├── product-card.tsx     # Product display cards
│   └── add-to-cart-button.tsx # Cart functionality
└── forms/            # Form components
    └── contact-form.tsx     # Contact form
```

## ✨ Ultra-Modular Import System

### **Single Source Import Pattern**

Never import components from multiple locations. Our system provides everything from one source:

```tsx
// ❌ DON'T do this - multiple imports
import { Button } from './components/ui/button';
import { ThemeSwitch } from './components/ui/theme-switch';
import { MenuCard } from './components/restaurant/menu-card';

// ✅ DO this - single import source
import { Button, ThemeSwitch, MenuCard, PhoneContact } from '@/components';
```

### **Theme-Aware Components**

Every component automatically adapts to the current theme:

```tsx
import { MenuCard, PhoneContact } from '@/components';

export default function RestaurantPage() {
  return (
    <div>
      {/* These components automatically use current theme colors */}
      <MenuCard 
        name="Pan-Seared Duck Breast"
        price={45}
        description="With cherry gastrique and seasonal vegetables"
      />
      <PhoneContact />
    </div>
  );
}
```

## 🍽️ Menu Navigation Integration

### **MenuNavigation Component with Header Integration**

```tsx
// src/components/restaurant/menu-navigation.tsx
interface MenuNavigationProps {
  categories: MenuCategory[];
  activeCategory?: string;
  onCategoryChange?: (categoryId: string) => void;
  className?: string;
  disableSticky?: boolean; // Disable when integrated with header
}

export const MenuNavigation: React.FC<MenuNavigationProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
  className,
  disableSticky = false
}) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    if (disableSticky) {
      setIsSticky(false);
      return;
    }

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsSticky(scrollTop > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [disableSticky]);

  return (
    <nav className={cn(
      "bg-background/95 backdrop-blur-md border-b border-border/50",
      isSticky && !disableSticky && "fixed top-0 left-0 right-0 z-40",
      className
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center py-4">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "ghost"}
                onClick={() => onCategoryChange?.(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
```

## 🎨 Design System Integration

### **Automatic Theme Inheritance**

Components use CSS custom properties that change with theme switching:

```tsx
// Component automatically gets theme colors
const MenuCard = ({ name, price, description }) => (
  <div style={{
    backgroundColor: 'var(--color-surface)',     // Changes with theme
    color: 'var(--color-text-primary)',         // Adapts to theme
    border: '1px solid var(--color-border)',    // Theme-aware border
    borderRadius: 'var(--radius-lg)',           // Consistent radius
    padding: 'var(--space-6)',                  // Design system spacing
  }}>
    <h3 style={{ 
      fontFamily: 'var(--font-display)',        // Luxury typography
      color: 'var(--color-primary)'             // Theme accent color
    }}>
      {name}
    </h3>
    <p style={{ 
      fontFamily: 'var(--font-body)',           // Body typography
      color: 'var(--color-text-secondary)' 
    }}>
      {description}
    </p>
    <div style={{ 
      fontSize: 'var(--font-size-xl)',
      fontWeight: 'var(--font-weight-bold)',
      color: 'var(--color-primary)'
    }}>
      ${price}
    </div>
  </div>
);
```

### **Design Token Usage**

Access design tokens directly or via utility functions:

```tsx
import { getSemanticColor, getSpacing, getFontSize } from '@/lib/design-system';

// Direct CSS custom property usage
const directStyles = {
  backgroundColor: 'var(--color-primary)',
  padding: 'var(--space-8)',
  fontSize: 'var(--font-size-2xl)',
};

// Utility function usage (type-safe)
const utilityStyles = {
  backgroundColor: getSemanticColor('primary'),
  padding: getSpacing('8'),
  fontSize: getFontSize('2xl'),
};
```

## 🏗️ Dynamic Header Architecture

### **Smart Header System**

Our navigation uses a dynamic header system that adapts based on page context and scroll position:

```tsx
// DynamicHeader - Smart header with menu integration
import { DynamicHeader } from '@/components/layout';

// In your layout or page
export default function Layout({ children }) {
  return (
    <>
      <DynamicHeader />
      <main>{children}</main>
    </>
  );
}
```

### **Header Component Architecture**

The header system consists of three main components:

```tsx
// 1. DynamicHeader - Orchestrates header behavior
export const DynamicHeader: React.FC = () => {
  const pathname = usePathname();
  const [activeCategory, setActiveCategory] = useState<string>("");
  const [isMenuSticky, setIsMenuSticky] = useState(false);
  
  const isMenuPage = pathname === '/meniu';
  
  // Menu categories integration when sticky
  const menuCategories = isMenuPage && isMenuSticky 
    ? menuData.map(category => ({ id: category.id, name: category.name }))
    : undefined;

  return (
    <Header
      menuCategories={menuCategories}
      activeCategory={activeCategory}
      onCategoryChange={setActiveCategory}
    >
      <MainNavigation />
    </Header>
  );
};

// 2. Header - Core header with responsive layout
interface HeaderProps {
  title?: string;
  children?: React.ReactNode;
  className?: string;
  showEffects?: boolean;
  menuCategories?: { id: string; name: string; }[];
  activeCategory?: string;
  onCategoryChange?: (categoryId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  title = "LUSSO",
  children,
  menuCategories,
  activeCategory,
  onCategoryChange
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
        {/* Brand Title */}
        <h1 className="lusso-brand-title">{title}</h1>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          {children}
        </nav>
        
        {/* Mobile Menu + Theme Switch */}
        <div className="flex items-center justify-end gap-3">
          <ThemeSwitch className="hidden md:block" />
          <MobileNavigation className="md:hidden" />
        </div>
      </div>
    </header>
  );
};
```

## 📱 Mobile Navigation Implementation

### **MobileNavigation Component with TypeScript**

````tsx
// src/components/navigation/mobile-navigation.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ThemeSwitch } from '@/components/ui/theme-switch';

interface NavigationItem {
  href: string;
  label: string;
  description?: string;
}

interface MobileNavigationProps {
  className?: string;
  forceVisible?: boolean;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({ 
  className, 
  forceVisible = false 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <div className={cn(forceVisible ? "block" : "block md:hidden", className)}>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <button
            className="flex items-center justify-center w-11 h-11 rounded-xl
                     bg-surface border border-border hover:scale-105 transition-transform"
            aria-label="Open navigation menu"
          >
            <Menu size={20} />
          </button>
        </SheetTrigger>
        
        <SheetContent 
          side="right" 
          className="w-80 bg-surface/95 backdrop-blur-xl"
        >
          {/* Navigation content with theme integration */}
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between pb-6 border-b border-border">
              <h2 className="text-xl font-display text-primary">LUSSO</h2>
              <ThemeSwitch iconOnly />
            </div>
            
            <nav className="flex flex-col p-6 gap-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "group relative overflow-hidden p-4 rounded-xl",
                    "hover:text-primary hover:bg-primary/5",
                    "transition-all duration-200",
                    isActive(item.href) && "text-primary bg-primary/10"
                  )}
                >
                  <span className="font-medium">{item.label}</span>
                  {item.description && (
                    <span className="text-xs opacity-70">
                      {item.description}
                    </span>
                  )}
                </Link>
              ))}
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
                ```

### **Key Features of Current Implementation**
- **TypeScript Interfaces**: Proper typing with `MobileNavigationProps` and `NavigationItem`
- **State Management**: Uses `useState` for open/close state and `usePathname` for active links
- **Responsive Control**: `forceVisible` prop allows manual control over visibility
- **Theme Integration**: Includes `ThemeSwitch` with `iconOnly` prop
- **Accessibility**: Proper ARIA labels and keyboard navigation support
- **Active State**: Dynamic styling based on current pathname

## 🔗 Component Integration Patterns

### **Complete Navigation Flow**
```tsx
// 1. App Layout with DynamicHeader
import { DynamicHeader } from '@/components/layout';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <DynamicHeader />  {/* Smart header orchestration */}
        <main>{children}</main>
      </body>
    </html>
  );
}

// 2. DynamicHeader orchestrates everything
// - Detects menu page and scroll position
// - Integrates menu categories when sticky
// - Passes data to Header component

// 3. Header renders responsive layout
// - Desktop: MainNavigation in center
// - Mobile: MobileNavigation in right corner
// - Theme switch positioned appropriately

// 4. Menu page integration
// - MenuNavigation can disable sticky when header takes over
// - Categories flow from MenuNavigation to Header via DynamicHeader
// - Smooth scroll and active state management
````

### **TypeScript Interface Reference**

```tsx
// Core interfaces used across navigation components
interface HeaderProps {
  title?: string;
  children?: React.ReactNode;
  className?: string;
  showEffects?: boolean;
  menuCategories?: { id: string; name: string; }[];
  activeCategory?: string;
  onCategoryChange?: (categoryId: string) => void;
}

interface MobileNavigationProps {
  className?: string;
  forceVisible?: boolean;
}

interface MenuNavigationProps {
  categories: MenuCategory[];
  activeCategory?: string;
  onCategoryChange?: (categoryId: string) => void;
  className?: string;
  disableSticky?: boolean;
}

interface NavigationItem {
  href: string;
  label: string;
  description?: string;
}
```

```
            <MobileNavLink href="/#contact">Contact</MobileNavLink>
          </div>
        </nav>
      </div>
    </SheetContent>
  </Sheet>
</div>
```

);
}

````

### **Responsive Design Best Practices**

#### **1. Mobile-First Breakpoints**

```tsx
// ✅ CORRECT - Mobile-first responsive classes
<nav className="flex md:hidden">     {/* Mobile: visible, Desktop: hidden */}
<nav className="hidden md:flex">    {/* Mobile: hidden, Desktop: visible */}

// ❌ AVOID - CSS media queries that conflict with Tailwind
// @media (max-width: 768px) { .nav { display: none; } }
````

#### **2. Consistent Breakpoint Usage**

* **Mobile**: `< 768px` (below `md` breakpoint)

* **Desktop**: `≥ 768px` (`md` breakpoint and above)

* **Never mix CSS media queries with Tailwind responsive classes**

#### **3. Component Visibility Patterns**

```tsx
// Theme switch - Desktop only
<ThemeSwitch className="hidden md:block" />

// Mobile menu trigger - Mobile only  
<MobileNavigation className="block md:hidden" />

// Desktop navigation - Desktop only
<MainNavigation className="hidden md:flex" />
```

## 🔧 Component Development Patterns

### **1. Server vs Client Components**

**Server Components (Default)**: Static content, runs at build time

```tsx
// src/app/page.tsx - Server Component (no "use client")
import { MenuCard, PhoneContact } from '@/components';

export default function HomePage() {
  return (
    <div>
      <h1>Lusso Restaurant</h1>
      <PhoneContact phoneNumber="+40123456789" />
    </div>
  );
}
```

**Client Components**: Interactive features, browser events

```tsx
// src/components/ui/interactive-link.tsx - Client Component
"use client";

import Link from 'next/link';

export function InteractiveLink({ href, children, style }) {
  return (
    <Link 
      href={href}
      style={style}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
    >
      {children}
    </Link>
  );
}
```

### **2. Creating Restaurant Components**

```tsx
// src/components/restaurant/menu-card.tsx
import type { ComponentSize, ComponentVariant } from '@/types/design-system';

interface MenuItemProps {
  name: string;
  description: string;
  price: number;
  dietary?: ('vegetarian' | 'vegan' | 'gluten-free')[];
  image?: string;
  variant?: ComponentVariant;
  size?: ComponentSize;
}

export function MenuCard({ 
  name, 
  description, 
  price, 
  dietary = [],
  variant = 'default',
  size = 'md'
}: MenuItemProps) {
  return (
    <div 
      className="menu-card"
      data-variant={variant}
      data-size={size}
      style={{
        backgroundColor: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--space-6)',
        transition: 'var(--duration-normal)',
      }}
    >
      <h3 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--font-size-xl)',
        color: 'var(--color-text-primary)',
        marginBottom: 'var(--space-2)',
      }}>
        {name}
      </h3>
      
      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--font-size-base)',
        color: 'var(--color-text-secondary)',
        marginBottom: 'var(--space-4)',
      }}>
        {description}
      </p>
      
      {dietary.length > 0 && (
        <div style={{ marginBottom: 'var(--space-3)' }}>
          {dietary.map(diet => (
            <span 
              key={diet}
              style={{
                fontSize: 'var(--font-size-xs)',
                backgroundColor: 'var(--color-accent)',
                color: 'var(--color-accent-contrast)',
                padding: 'var(--space-1) var(--space-2)',
                borderRadius: 'var(--radius-sm)',
                marginRight: 'var(--space-2)',
              }}
            >
              {diet}
            </span>
          ))}
        </div>
      )}
      
      <div style={{
        fontSize: 'var(--font-size-2xl)',
        fontWeight: 'var(--font-weight-bold)',
        color: 'var(--color-primary)',
      }}>
        ${price}
      </div>
    </div>
  );
}
```

### **2. Export Pattern**

Always add components to the appropriate index file:

```tsx
// src/components/restaurant/index.ts
export { MenuCard } from './menu-card';
export { HeroSection } from './hero-section';
export { ContactModal } from './contact-modal';
export { ContactInfo } from './contact-info';

// src/components/index.ts
export * from './ui';
export * from './layout';
export * from './restaurant';  // Add this line
export * from './forms';
export * from './navigation';
export * from './data-display';
export * from './feedback';
```

## 🎭 Working with Themes

### **Theme-Aware Component Testing**

Test components across all themes:

```tsx
import { MenuCard, ThemeSwitch, ContactModal } from '@/components';

export function ComponentDemo() {
  return (
    <div>
      {/* Theme switcher for testing */}
      <ThemeSwitch showLabels={true} />
      
      {/* Component automatically adapts */}
      <MenuCard 
        name="Signature Risotto"
        price={32}
        description="Arborio rice with wild mushrooms and truffle oil"
        dietary={['vegetarian']}
      />
      <PhoneContact />
    </div>
  );
}
```

### **Custom Theme Properties**

Add restaurant-specific theme tokens:

```css
/* In globals.css */
[data-theme="light"] {
  --color-menu-highlight: var(--brand-glossy-gold);
  --color-reservation-success: #22c55e;
  --color-special-offer: #f59e0b;
}

[data-theme="dark"] {
  --color-menu-highlight: var(--brand-matte-gold);
  --color-reservation-success: #16a34a;
  --color-special-offer: #d97706;
}
```

## 📱 Mobile-First Component Patterns

### **Touch-Optimized Components**

Ensure all interactive elements meet mobile standards:

```tsx
export function CallButton({ phoneNumber }) {
  return (
    <a
      href={`tel:${phoneNumber}`}
      style={{
        // Minimum 44px touch target
        minHeight: '44px',
        minWidth: '44px',
        padding: 'var(--space-4) var(--space-8)',
        
        // Touch-friendly styling
        backgroundColor: 'var(--color-primary)',
        color: 'var(--color-primary-contrast)',
        border: 'none',
        borderRadius: 'var(--radius-lg)',
        fontSize: 'var(--font-size-base)',
        fontWeight: 'var(--font-weight-medium)',
        textDecoration: 'none',
        display: 'inline-block',
        textAlign: 'center',
        
        // Touch feedback
        cursor: 'pointer',
        transition: 'var(--duration-fast)',
        
        // Active state for mobile
        ':active': {
          transform: 'scale(0.98)',
        }
      }}
    >
      Call to Reserve
    </a>
  );
}
```

### **Responsive Component Behavior**

Components adapt to screen size using CSS custom properties:

```tsx
export function MenuGrid({ items }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: 'var(--space-6)',
      padding: 'var(--space-4)',
      
      // Responsive padding
      '@media (min-width: 768px)': {
        padding: 'var(--space-8)',
        gap: 'var(--space-8)',
      }
    }}>
      {items.map(item => (
        <MenuCard key={item.id} {...item} />
      ))}
    </div>
  );
}
```

## 🎯 shadcn/ui Integration

### **Enhanced shadcn Components**

Extend shadcn components with restaurant-specific features:

```tsx
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

export function ContactModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="default" 
          size="lg"
          style={{
            backgroundColor: 'var(--color-primary)',
            color: 'var(--color-primary-contrast)',
          }}
        >
          Contact Us
        </Button>
      </DialogTrigger>
      <DialogContent 
        style={{
          backgroundColor: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
        }}
      >
        {/* Contact information and phone number */}
        <div style={{ textAlign: 'center' }}>
          <h3>Call to Reserve</h3>
          <a href="tel:+1234567890" style={{ 
            fontSize: 'var(--font-size-2xl)',
            color: 'var(--color-primary)',
            textDecoration: 'none' 
          }}>
            (123) 456-7890
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
```

### **Custom shadcn Styling**

Override shadcn styles with design system tokens:

```css
/* Component-specific overrides */
.contact-modal {
  background-color: var(--color-surface-elevated);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-xl);
}

.contact-modal .dialog-title {
  font-family: var(--font-display);
  color: var(--color-primary);
  font-size: var(--font-size-2xl);
}
```

## 🔧 Development Workflow

### **1. Component Creation Checklist**

* [ ] Create component file in appropriate folder

* [ ] Use design system tokens (colors, spacing, typography)

* [ ] Add TypeScript interfaces for props

* [ ] Test across all three themes

* [ ] Ensure mobile touch targets (44px minimum)

* [ ] Add to folder's index.ts export

* [ ] Test single-import pattern

### **2. Testing Pattern**

```tsx
// Create component demos for testing
export function ComponentPlayground() {
  return (
    <div style={{ padding: 'var(--space-8)' }}>
      <ThemeSwitch showLabels={true} />
      
      <div style={{ 
        display: 'grid', 
        gap: 'var(--space-8)', 
        marginTop: 'var(--space-8)' 
      }}>
        <MenuCard {...sampleMenuItem} />
        <PhoneContact />
        <ContactInfo />
      </div>
    </div>
  );
}
```

## 📋 Component Categories & Use Cases

### **UI Components** (`/ui/`)

* **Button**: CTAs, navigation, phone contact

* **Card**: Menu items, chef profiles, special offers

* **InteractiveLink**: Client component for hover effects

* **Dialog/Modal**: Menu details, business information

### **Restaurant Components** (`/restaurant/`)

* **HeroSection**: Landing page with phone contact CTAs (Server Component)

* **MenuCard**: Food items with prices and descriptions (Server Component)

* **PhoneContact**: Phone & WhatsApp integration (Client Component)

* **BusinessInfo**: Contact details and business hours (Server Component)

### **Layout Components** (`/layout/`)

* **Header**: Navigation, logo, theme switcher

* **Footer**: Hours, location, social media, legal

* **Section**: Page sections with consistent spacing

### **Information Components** (`/info/`)

* **BusinessInfo**: Business hours and location display (Server Component)

* **PhoneContact**: Phone number and WhatsApp contact (Client Component)

* **LocationDisplay**: Static location information

* **HoursDisplay**: Business hours formatting

## 🎯 Best Practices

### **✅ Do**

* Use design system tokens consistently

* Test components across all themes

* Follow Server/Client Component patterns correctly

* Ensure 44px minimum touch targets for Client Components

* Use single-import pattern from `@/components`

* Add `"use client"` directive for interactive components only

### **❌ Don't**

* Add event handlers to Server Components

* Use `"use client"` unnecessarily

* Hard-code colors or spacing values

* Skip mobile testing

* Mix import sources

* Create interactive components without proper Client Component setup

## 🚀 Next Steps

### **Ready to Build**

1. **Choose your first component** from the restaurant category
2. **Follow the creation pattern** shown above
3. **Test with theme switching** to ensure proper integration
4. **Add to exports** for single-import access
5. **Document any special props** or usage patterns

### **Component Priority Order**

1. **HeroSection** - Restaurant landing experience
2. **MenuCard** - Core content component
3. **ContactModal** - Key business contact functionality
4. **ContactInfo** - Business information display
5. **Navigation** - Site structure and UX

***

## 📚 Related Documentation

* **[Design System](./DESIGN-SYSTEM.md)** - Complete theming, colors, typography, and design tokens

* **[Documentation Index](./README.md)** - Navigation to all project documentation

* **[Project README](../README.md)** - Quick start and project overview

* **[Component Research](../archive/COMPONENT-RESEARCH.md)** - Historical component research and library analysis

* **[Refactoring Sessions](./refactoring-sessions/)** - Recent development session records

* **[Project Archive](../archive/)** - Historical development documents

***

**Component Architecture**: Ultra-modular with seamless theme integration\
**Developer Experience**: Single imports, type safety, comprehensive documentation\
**Restaurant Focus**: Mobile-first luxury dining experience

*Ready to build beautiful, theme-aware restaurant components!* 🍽️✨
