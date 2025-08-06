"use client";

import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Header } from './header';
import { MainNavigation } from '@/components/navigation';
import { menuData } from '@/data/menu';

export const DynamicHeader: React.FC = () => {
  const pathname = usePathname();
  const [activeCategory, setActiveCategory] = useState<string>(menuData[0]?.id || "");
  const [isMenuSticky, setIsMenuSticky] = useState(false);

  // Check if we're on the menu page
  const isMenuPage = pathname === '/meniu';

  // Listen for scroll events to detect when menu navigation becomes sticky
  useEffect(() => {
    if (!isMenuPage) {
      setIsMenuSticky(false);
      return;
    }

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsMenuSticky(scrollTop > 200);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuPage]);

  // Listen for active category changes from the menu page
  useEffect(() => {
    if (!isMenuPage) return;

    const handleCategoryChange = (event: CustomEvent) => {
      setActiveCategory(event.detail.categoryId);
    };

    window.addEventListener('menuCategoryChange', handleCategoryChange as EventListener);
    return () => window.removeEventListener('menuCategoryChange', handleCategoryChange as EventListener);
  }, [isMenuPage]);

  // Prepare menu categories for header integration
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