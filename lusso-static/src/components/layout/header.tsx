'use client';

import React from 'react';
import { getSemanticColor, getSpacing, getBorderRadius, createTransition } from '@/lib/design-system';

interface GlassmorphismHeaderProps {
  title?: string;
  children?: React.ReactNode;
  className?: string;
}

export const Header: React.FC<GlassmorphismHeaderProps> = ({ 
  title = "LUSSO", 
  children,
  className = "" 
}) => {
  const headerStyles: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    width: 'calc(100% - 2rem)',
    padding: `${getSpacing('4')} ${getSpacing('6')}`,
    backdropFilter: 'brightness(1.1) blur(12px) url(#displacementFilter)',
    WebkitBackdropFilter: 'brightness(1.1) blur(12px)',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: getBorderRadius('lg'),
    margin: getSpacing('4'),
    boxShadow: `
      inset 6px 6px 0px -6px rgba(255, 255, 255, 0.7),
      inset 0 0 8px 1px rgba(255, 255, 255, 0.3),
      0 8px 32px rgba(0, 0, 0, 0.12)
    `,
    transition: createTransition(['backdrop-filter', 'transform', 'box-shadow'], 'normal', 'out'),
  };

  const contentStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '1200px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 10,
  };

  const titleStyles: React.CSSProperties = {
    fontSize: '1.75rem',
    fontWeight: '700',
    color: getSemanticColor('text-primary'),
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    letterSpacing: '0.05em',
  };

  return (
    <>
      {/* SVG Filter Definitions */}
      <svg style={{ position: 'absolute', width: 0, height: 0, visibility: 'hidden' }}>
        <defs>
          <filter id="displacementFilter">
            <feTurbulence 
              type="turbulence" 
              baseFrequency="0.005" 
              numOctaves="2" 
              result="turbulence" 
            />
            <feDisplacementMap 
              in="SourceGraphic"
              in2="turbulence"    
              scale="20" 
              xChannelSelector="R" 
              yChannelSelector="G" 
            />
          </filter>
        </defs>
      </svg>

      {/* Glassmorphism Header */}
      <header 
        style={headerStyles}
        className={`glassmorphism-header ${className}`}
      >
        <div style={contentStyles}>
          <h1 style={titleStyles}>{title}</h1>
          {children && (
            <nav className="flex items-center gap-6">
              {children}
            </nav>
          )}
        </div>
      </header>

      {/* Global CSS Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @layer components {
            .glassmorphism-header::before {
              content: '';
              position: absolute;
              inset: 0;
              z-index: 0;
              border-radius: ${getBorderRadius('lg')};
              background: linear-gradient(
                135deg,
                rgba(255, 255, 255, 0.15) 0%,
                rgba(255, 255, 255, 0.05) 50%,
                rgba(255, 255, 255, 0.1) 100%
              );
              backdrop-filter: blur(2px);
            }

            .glassmorphism-header:hover {
              transform: translateY(-1px);
              box-shadow: 
                inset 6px 6px 0px -6px rgba(255, 255, 255, 0.8),
                inset 0 0 12px 2px rgba(255, 255, 255, 0.4),
                0 12px 40px rgba(0, 0, 0, 0.15);
            }

            [data-theme="dark"] .glassmorphism-header {
              background-color: rgba(0, 0, 0, 0.2) !important;
              border-color: rgba(255, 255, 255, 0.1) !important;
            }

            [data-theme="dark"] .glassmorphism-header::before {
              background: linear-gradient(
                135deg,
                rgba(255, 255, 255, 0.08) 0%,
                rgba(255, 255, 255, 0.03) 50%,
                rgba(255, 255, 255, 0.05) 100%
              ) !important;
            }

            [data-theme="dark"] .glassmorphism-header:hover {
              box-shadow: 
                inset 6px 6px 0px -6px rgba(255, 255, 255, 0.3),
                inset 0 0 12px 2px rgba(255, 255, 255, 0.2),
                0 12px 40px rgba(0, 0, 0, 0.3) !important;
            }

            @media (max-width: 768px) {
              .glassmorphism-header {
                margin: ${getSpacing('2')} !important;
                width: calc(100% - 1rem) !important;
                padding: ${getSpacing('3')} ${getSpacing('4')} !important;
              }
            }
          }
        `
      }} />
    </>
  );
};

export default Header;