"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MenuItem } from "@/data/menu";
import { cn } from "@/lib/utils";

interface MenuCardProps {
  item: MenuItem;
  className?: string;
}

export const MenuCard: React.FC<MenuCardProps> = ({ item, className }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Card className={cn(
      "group hover:shadow-lg transition-all duration-300 border-opacity-30",
      "bg-gradient-to-br from-background/95 to-background/80",
      "backdrop-blur-sm",
      className
    )}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg font-serif text-foreground group-hover:text-primary transition-colors">
              {item.name}
            </CardTitle>
            <div className="flex items-center gap-4 mt-2">
              {item.weight && (
                <span className="text-sm text-muted-foreground font-medium">
                  {item.weight}
                </span>
              )}
              <span className="text-lg font-bold text-primary">
                {item.price} LEI
              </span>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleExpanded}
            className="ml-2 h-8 w-8 p-0 hover:bg-primary/10"
            aria-label={isExpanded ? "Ascunde detalii" : "Arată detalii"}
          >
            {isExpanded ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </Button>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="space-y-3">
          {/* Ingredients - Always visible */}
          <div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              <span className="font-medium text-foreground">Ingrediente:</span> {item.ingredients}
            </p>
          </div>

          {/* Allergens - Always visible if present */}
          {item.allergens.length > 0 && (
            <div>
              <p className="text-sm text-amber-600 dark:text-amber-400">
                <span className="font-medium">Alergeni:</span> {item.allergens.join(", ")}
              </p>
            </div>
          )}

          {/* Expandable nutritional information */}
          {isExpanded && (
            <div className="mt-4 p-4 bg-muted/30 rounded-lg border border-border/50">
              <h4 className="font-medium text-foreground mb-3 text-sm">Valori nutriționale (per porție):</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Energie:</span>
                  <span className="font-medium">{item.nutritionalValues.energy}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Grăsimi:</span>
                  <span className="font-medium">{item.nutritionalValues.fat}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">din care saturate:</span>
                  <span className="font-medium">{item.nutritionalValues.saturatedFat}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Carbohidrați:</span>
                  <span className="font-medium">{item.nutritionalValues.carbohydrates}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">din care zaharuri:</span>
                  <span className="font-medium">{item.nutritionalValues.sugars}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Proteine:</span>
                  <span className="font-medium">{item.nutritionalValues.protein}</span>
                </div>
                <div className="flex justify-between col-span-2">
                  <span className="text-muted-foreground">Sare:</span>
                  <span className="font-medium">{item.nutritionalValues.salt}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}