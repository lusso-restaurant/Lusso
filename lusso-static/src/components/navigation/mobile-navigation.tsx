"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { getFontFamily, getFontWeight, createTransition, getSemanticColor } from "@/lib/design-system";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeSwitch } from "@/components/ui/theme-switch";

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

interface MobileNavigationProps {
  className?: string;
  forceVisible?: boolean;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({ className, forceVisible = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const menuButtonStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '44px',
    height: '44px',
    borderRadius: '12px',
    backgroundColor: 'var(--color-surface)',
    border: '1px solid var(--color-border)',
    color: 'var(--color-text-primary)',
    transition: createTransition(['all'], 'normal', 'out'),
    cursor: 'pointer',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
  };

  const linkStyles: React.CSSProperties = {
    fontFamily: getFontFamily('sans'),
    fontSize: '1.125rem',
    fontWeight: getFontWeight('medium'),
    letterSpacing: '0.025em',
    textTransform: 'uppercase',
    transition: createTransition(['color', 'transform'], 'normal', 'out'),
    position: 'relative',
    padding: '1rem 1.5rem',
    borderRadius: '12px',
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '0.25rem',
    width: '100%',
  };

  return (
    <div className={cn(forceVisible ? "block" : "block md:hidden", className)}>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <button
            style={menuButtonStyles}
            className="hover:scale-105 hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary/20"
            aria-label="Open navigation menu"
          >
            <Menu size={20} />
          </button>
        </SheetTrigger>
        <SheetContent 
          side="right" 
          className="w-80 p-0 border-l border-border/50"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(24px) saturate(1.6) brightness(1.02)',
            WebkitBackdropFilter: 'blur(24px) saturate(1.6) brightness(1.02)',
          }}
        >
          <SheetHeader className="p-6 pb-4 border-b border-border/20">
            <div className="flex items-center justify-between">
              <SheetTitle 
                style={{
                  fontFamily: getFontFamily('display'),
                  fontSize: '1.5rem',
                  fontWeight: getFontWeight('regular'),
                  background: `linear-gradient(135deg, 
                    ${getSemanticColor('text-primary')} 0%, 
                    var(--brand-glossy-gold) 50%, 
                    ${getSemanticColor('text-primary')} 100%
                  )`,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  letterSpacing: '0.15em',
                }}
              >
                LUSSO
              </SheetTitle>
              <ThemeSwitch iconOnly />
            </div>
            <SheetDescription className="text-sm text-muted-foreground">
              Navigare principală
            </SheetDescription>
          </SheetHeader>
          
          <nav className="flex flex-col p-6 gap-2">
            {navigationItems.map((item) => {
              const active = isActive(item.href);
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={handleLinkClick}
                  style={{
                    ...linkStyles,
                    color: active 
                      ? 'var(--brand-glossy-gold)' 
                      : 'var(--color-text-secondary)',
                    backgroundColor: active 
                      ? 'rgba(212, 175, 55, 0.1)' 
                      : 'transparent',
                    transform: active ? 'translateX(4px)' : 'none',
                  }}
                  className={cn(
                    "group relative overflow-hidden",
                    "hover:text-primary hover:bg-primary/5 hover:translate-x-1",
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
                  
                  {/* Link content */}
                  <span className="relative z-10 font-medium">
                    {item.label}
                  </span>
                  {item.description && (
                    <span 
                      className="relative z-10 text-xs opacity-70"
                      style={{
                        fontWeight: getFontWeight('regular'),
                        textTransform: 'none',
                        letterSpacing: '0.01em',
                      }}
                    >
                      {item.description}
                    </span>
                  )}
                  
                  {/* Active indicator */}
                  {active && (
                    <span 
                      className="absolute left-0 top-1/2 transform -translate-y-1/2 
                                 w-1 h-8 bg-primary rounded-r-full"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </nav>
          
          {/* Luxury footer */}
          <div 
            className="mt-auto p-6 border-t border-border/20"
            style={{
              background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.05) 0%, transparent 100%)',
            }}
          >
            <p 
              className="text-xs text-center opacity-60"
              style={{
                fontFamily: getFontFamily('sans'),
                letterSpacing: '0.05em',
              }}
            >
              © 2024 LUSSO Restaurant
            </p>
          </div>
        </SheetContent>
      </Sheet>
      
      {/* Enhanced mobile styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @layer components {
            /* Dark theme enhancements for mobile menu */
            [data-theme="dark"] .mobile-nav-content {
              background-color: rgba(0, 0, 0, 0.25);
              border-color: rgba(255, 255, 255, 0.1);
            }
            
            /* High contrast mode support */
            @media (prefers-contrast: high) {
              .mobile-nav-button {
                border-width: 2px;
                background-color: rgba(255, 255, 255, 0.95);
              }
              
              [data-theme="dark"] .mobile-nav-button {
                background-color: rgba(0, 0, 0, 0.95);
              }
            }
            
            /* Reduced motion support */
            @media (prefers-reduced-motion: reduce) {
              .mobile-nav-button,
              .mobile-nav-link {
                transition: none !important;
                transform: none !important;
              }
            }
          }
        `
      }} />
    </div>
  );
};

export default MobileNavigation;