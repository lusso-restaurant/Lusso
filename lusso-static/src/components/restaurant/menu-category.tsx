"use client";

import React from "react";
import { MenuCategory as MenuCategoryType } from "@/data/menu";
import { MenuCard } from "./menu-card";
import { cn } from "@/lib/utils";

interface MenuCategoryProps {
  category: MenuCategoryType;
  className?: string;
}

export const MenuCategory: React.FC<MenuCategoryProps> = ({ category, className }) => {
  return (
    <section className={cn("space-y-6", className)} id={category.id}>
      {/* Category Header */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
          {category.name}
        </h2>
        <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
      </div>

      {/* Category Items */}
      <div className="grid gap-4 md:gap-6">
        {category.items.map((item) => (
          <MenuCard
            key={item.id}
            item={item}
            className="w-full"
          />
        ))}
      </div>
    </section>
  );
};