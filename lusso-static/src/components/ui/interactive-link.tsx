"use client";

import Link from 'next/link';
import { ReactNode } from 'react';

interface InteractiveLinkProps {
  href: string;
  children: ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

export function InteractiveLink({ href, children, style, className }: InteractiveLinkProps) {
  return (
    <Link 
      href={href}
      className={className}
      style={{
        transition: 'transform 0.2s ease',
        ...style
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {children}
    </Link>
  );
}