"use client";

import React, { useState, useEffect } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MenuItem, searchItems } from "@/data/menu";
import { MenuCard } from "./menu-card";
import { cn } from "@/lib/utils";

interface MenuSearchProps {
  onSearchStateChange?: (isSearching: boolean) => void;
  className?: string;
}

export const MenuSearch: React.FC<MenuSearchProps> = ({
  onSearchStateChange,
  className
}) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<MenuItem[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (query.trim().length >= 2) {
      const searchResults = searchItems(query.trim());
      setResults(searchResults);
      setIsSearching(true);
    } else {
      setResults([]);
      setIsSearching(false);
    }
    onSearchStateChange?.(query.trim().length >= 2);
  }, [query, onSearchStateChange]);

  const clearSearch = () => {
    setQuery("");
    setResults([]);
    setIsSearching(false);
    onSearchStateChange?.(false);
  };

  return (
    <div className={cn("space-y-6", className)}>
      {/* Search Input */}
      <div className="relative max-w-md mx-auto">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Caută în meniu..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10 pr-10 bg-background/50 backdrop-blur-sm border-border/50 focus:border-primary/50"
          />
          {query && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearSearch}
              className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0 hover:bg-muted/50"
            >
              <X className="h-3 w-3" />
            </Button>
          )}
        </div>
      </div>

      {/* Search Results */}
      {isSearching && (
        <div className="space-y-4">
          <div className="text-center">
            <h3 className="text-xl font-serif font-semibold text-foreground">
              Rezultate căutare
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              {results.length} {results.length === 1 ? 'rezultat găsit' : 'rezultate găsite'} pentru &ldquo;{query}&rdquo;
            </p>
          </div>

          {results.length > 0 ? (
            <div className="grid gap-4 md:gap-6">
              {results.map((item) => (
                <MenuCard
                  key={`${item.id}-search`}
                  item={item}
                  className="w-full"
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-muted-foreground">
                Nu am găsit niciun rezultat pentru &ldquo;{query}&rdquo;
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Încearcă să cauți după numele preparatului sau ingrediente.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};