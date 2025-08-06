# Mobile Navigation Quick Reference Guide

## 🚀 Current Implementation Overview

The mobile navigation system uses a **dynamic header architecture** with TypeScript interfaces and Shadcn Sheet components.

### **✅ Key Components**

* **DynamicHeader**: Smart orchestration based on page context

* **Header**: Core responsive layout with menu integration

* **MobileNavigation**: Sheet-based mobile menu with proper TypeScript

* **MainNavigation**: Desktop navigation component

* **MenuNavigation**: Category navigation with sticky behavior

### **✅ Essential Responsive Classes**

```tsx
// Dynamic Header (recommended approach)
import { DynamicHeader } from '@/components/layout';

// In your layout
<DynamicHeader />  // Handles everything automatically

// Manual Header Implementation (if needed)
<Header>
  <MainNavigation />  {/* Hidden on mobile automatically */}
</Header>

// Mobile Navigation (integrated in Header)
<MobileNavigation className="md:hidden" />

// Theme Switch (desktop only)
<ThemeSwitch className="hidden md:block" />
```

### **✅ Current MobileNavigation Implementation**

```tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ThemeSwitch } from '@/components/ui/theme-switch';

// Updated navigation items with Comandă functionality
const navigationItems = [
  { href: "/", label: "Acasă", description: "Pagina principală" },
  { href: "/menu", label: "Meniu", description: "Preparatele noastre" },
  { href: "/#story", label: "Povestea", description: "Despre noi" },
  { href: "/#order", label: "Comandă", description: "Comandă mâncare" },
  { href: "/#contact", label: "Contact", description: "Rezervări și contact" }
];

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
    if (href.startsWith("/#")) return pathname === "/"; // Section anchors on homepage
    return pathname.startsWith(href);
  };

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    
    // Handle section anchors with smooth scrolling
    if (href.startsWith("/#")) {
      const sectionId = href.substring(2);
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
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
        
        <SheetContent side="right" className="w-80 bg-surface/95 backdrop-blur-xl">
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
                  onClick={() => handleLinkClick(item.href)}
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

## 🔧 TypeScript Interfaces

### **✅ Current Interface Definitions**

```tsx
interface MobileNavigationProps {
  className?: string;
  forceVisible?: boolean;  // Override responsive behavior
}

interface NavigationItem {
  href: string;
  label: string;
  description?: string;
}

interface HeaderProps {
  title?: string;
  children?: React.ReactNode;
  className?: string;
  showEffects?: boolean;
  menuCategories?: { id: string; name: string; }[];  // Menu integration
  activeCategory?: string;
  onCategoryChange?: (categoryId: string) => void;
}
```

## ⚠️ Common Pitfalls to Avoid

### **❌ DON'T: Use Old Function Component Syntax**

```tsx
// Old - causes TypeScript errors
export function MobileNavigation({ className }: { className?: string }) {
  // Missing return type, state management
}
```

### **❌ DON'T: Forget State Management**

```tsx
// Missing - no open/close state
<Sheet>  {/* No open/onOpenChange props */}
```

### **✅ DO: Use Current TypeScript Pattern**

```tsx
// Current - proper typing and state
export const MobileNavigation: React.FC<MobileNavigationProps> = ({ 
  className, 
  forceVisible = false 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  // ... proper implementation
};
```

## 🔧 Debugging Commands

```bash
# Check for ESLint errors and TypeScript compilation issues
npm run lint

# Start development server
npm run dev

# Build for production (test static export)
npm run build
```

**Note**: This project uses `npm run lint` instead of `npm run check`. The `lint` command checks for ESLint errors and TypeScript compilation issues in Next.js projects, providing comprehensive code quality validation.

## 📱 Breakpoint Reference

* **Mobile**: `< 768px` (below `md`)

* **Desktop**: `≥ 768px` (`md` and above)

* **Tailwind** **`md`** **breakpoint**: `768px`

## 🎯 Accessibility Checklist

* ✅ `aria-label` on hamburger button

* ✅ Keyboard navigation support

* ✅ Focus management in Sheet component

* ✅ Screen reader friendly navigation

## 📚 Related Documentation

* **Full Guide**: `docs/COMPONENT-GUIDE.md` (Mobile Navigation Patterns section)

* **Troubleshooting**: `archive/MOBILE-NAVIGATION-TROUBLESHOOTING-GUIDE.md`

* **Session Notes**: `archive/SESSION-DOCUMENTATION-MOBILE-NAV-DEBUG.md`

