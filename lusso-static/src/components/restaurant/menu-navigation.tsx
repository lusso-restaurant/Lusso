"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MenuCategory } from "@/data/menu";
import { cn } from "@/lib/utils";

interface MenuNavigationProps {
  categories: MenuCategory[];
  activeCategory?: string;
  onCategoryChange?: (categoryId: string) => void;
  className?: string;
  disableSticky?: boolean; // New prop to disable sticky behavior when integrated with header
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

  const scrollToCategory = (categoryId: string) => {
    const element = document.getElementById(categoryId);
    if (element) {
      const headerOffset = 120; // Account for sticky menu navigation
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    onCategoryChange?.(categoryId);
  };

  // Don't hide the component - always render it

  return (
    <nav className={cn(
      "bg-background/95 backdrop-blur-md border-b border-border/50 transition-all duration-300",
      isSticky && !disableSticky && "fixed top-0 left-0 right-0 z-40 shadow-lg",
      className
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center py-4">
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "ghost"}
                size="sm"
                onClick={() => scrollToCategory(category.id)}
                className={cn(
                  "text-xs md:text-sm font-medium transition-all duration-200",
                  "hover:scale-105 active:scale-95",
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
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