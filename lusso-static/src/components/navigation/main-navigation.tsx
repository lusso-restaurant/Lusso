"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { getFontFamily, getFontWeight, createTransition } from "@/lib/design-system";

interface NavigationItem {
  href: string;
  label: string;
  description?: string;
}

const navigationItems: NavigationItem[] = [
  {
    href: "/",
    label: "Acasă",
    description: "Pagina principală"
  },
  {
    href: "/meniu",
    label: "Meniu",
    description: "Descoperă preparatele noastre"
  },
  {
    href: "/#story",
    label: "Povestea",
    description: "Despre noi"
  },
  {
    href: "/#contact",
    label: "Contact",
    description: "Rezervări și informații"
  }
];

interface MainNavigationProps {
  className?: string;
}

export const MainNavigation: React.FC<MainNavigationProps> = ({ className }) => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  const linkStyles: React.CSSProperties = {
    fontFamily: getFontFamily('sans'),
    fontSize: 'clamp(0.875rem, 1vw, 1rem)',
    fontWeight: getFontWeight('medium'),
    letterSpacing: '0.025em',
    textTransform: 'uppercase',
    transition: createTransition(['color', 'transform'], 'normal', 'out'),
    position: 'relative',
    padding: '0.5rem 1rem',
    borderRadius: '0.5rem',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  };

  return (
    <nav className={cn("hidden md:flex items-center gap-2", className)} role="navigation">
      {navigationItems.map((item) => {
        const active = isActive(item.href);
        
        return (
          <Link
            key={item.href}
            href={item.href}
            style={{
              ...linkStyles,
              color: active 
                ? 'var(--brand-glossy-gold)' 
                : 'var(--color-text-secondary)',
              backgroundColor: active 
                ? 'rgba(212, 175, 55, 0.1)' 
                : 'transparent',
              transform: active ? 'translateY(-1px)' : 'none',
            }}
            className={cn(
              "group relative overflow-hidden",
              "hover:text-primary hover:bg-primary/5",
              "focus:outline-none focus:ring-2 focus:ring-primary/20",
              "transition-all duration-200",
              active && "text-primary bg-primary/10"
            )}
            aria-label={item.description}
          >
            {/* Hover effect background */}
            <span 
              className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 
                         translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"
              aria-hidden="true"
            />
            
            {/* Link text */}
            <span className="relative z-10">
              {item.label}
            </span>
            
            {/* Active indicator */}
            {active && (
              <span 
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 
                           w-1 h-1 bg-primary rounded-full"
                aria-hidden="true"
              />
            )}
          </Link>
        );
      })}
      
      {/* Enhanced styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @layer components {
            /* High contrast mode */
            @media (prefers-contrast: high) {
              .main-navigation a {
                border: 1px solid transparent;
              }
              
              .main-navigation a:hover,
              .main-navigation a:focus {
                border-color: currentColor;
              }
            }
            
            /* Reduced motion */
            @media (prefers-reduced-motion: reduce) {
              .main-navigation a,
              .main-navigation span {
                transition: none;
                transform: none;
              }
            }
          }
        `
      }} />
    </nav>
  );
};