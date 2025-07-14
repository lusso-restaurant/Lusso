"use client";

import { Button } from '../ui';

interface HeaderProps {
  title?: string;
  showLoginButton?: boolean;
}

export function Header({ title = "Lusso", showLoginButton = true }: HeaderProps) {
  return (
    <header className="border-b border-border bg-background">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">{title}</h1>
        {showLoginButton && (
          <Button variant="outline">
            Login
          </Button>
        )}
      </div>
    </header>
  );
}