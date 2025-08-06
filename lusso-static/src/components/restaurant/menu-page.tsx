"use client";

import React, { useState, useEffect } from "react";
import { menuData } from "@/data/menu";
import { MenuNavigation } from "./menu-navigation";
import { MenuSearch } from "./menu-search";
import { MenuCategory } from "./menu-category";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { cn } from "@/lib/utils";

interface MenuPageProps {
  className?: string;
}

export const MenuPage: React.FC<MenuPageProps> = ({ className }) => {
  const [activeCategory, setActiveCategory] = useState<string>(menuData[0]?.id || "");
  const [isSearching, setIsSearching] = useState(false);
  const [isMenuSticky, setIsMenuSticky] = useState(false);

  // Track sticky state for header integration
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsMenuSticky(scrollTop > 200);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle scroll-based active category detection
  useEffect(() => {
    const handleScroll = () => {
      if (isSearching) return; // Don't update active category while searching

      const scrollPosition = window.scrollY + 200; // Offset for header
      
      for (const category of menuData) {
        const element = document.getElementById(category.id);
        if (element) {
          const elementTop = element.offsetTop;
          const elementBottom = elementTop + element.offsetHeight;
          
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveCategory(category.id);
            // Emit event for header integration
            window.dispatchEvent(new CustomEvent('menuCategoryChange', {
              detail: { categoryId: category.id }
            }));
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isSearching]);

  return (
    <div className={cn("min-h-screen relative", className)}>
      {/* Aurora Background */}
      <AuroraBackground className="fixed inset-0 -z-10" />
      
      {/* Page Header */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="text-center space-y-4 mb-8">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground">
              Meniul Lusso
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Descoperă o experiență culinară de excepție, cu preparate rafinate 
              și ingrediente de cea mai înaltă calitate.
            </p>
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
          </div>

          {/* Search Component */}
          <MenuSearch 
            onSearchStateChange={setIsSearching}
            className="mb-8"
          />
        </div>
      </div>

      {/* Menu Navigation - Only show when not searching */}
      {!isSearching && (
        <MenuNavigation
          categories={menuData}
          activeCategory={activeCategory}
          onCategoryChange={(categoryId) => {
            setActiveCategory(categoryId);
            // Emit event for header integration
            window.dispatchEvent(new CustomEvent('menuCategoryChange', {
              detail: { categoryId }
            }));
          }}
          disableSticky={isMenuSticky} // Disable when header integration is active
        />
      )}

      {/* Menu Content - Only show when not searching */}
      {!isSearching && (
        <main className="relative z-10">
          <div className="container mx-auto px-4 py-8 md:py-12">
            <div className="space-y-16 md:space-y-20">
              {menuData.map((category) => (
                <MenuCategory
                  key={category.id}
                  category={category}
                  className="scroll-mt-32"
                />
              ))}
            </div>
          </div>
        </main>
      )}

      {/* Footer Spacing */}
      <div className="h-16"></div>
    </div>
  );
};