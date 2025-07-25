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
    backdropFilter: 'brightness(1.05) blur(16px) url(#liquidDisplacementFilter)',
    WebkitBackdropFilter: 'brightness(1.05) blur(16px)',
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    border: '1px solid rgba(255, 255, 255, 0.4)',
    borderRadius: getBorderRadius('lg'),
    margin: getSpacing('4'),
    boxShadow: `
      inset 2px 2px 0px -2px rgba(255, 255, 255, 0.8),
      inset 0 0 12px 2px rgba(255, 255, 255, 0.4),
      0 12px 40px rgba(0, 0, 0, 0.08),
      0 4px 16px rgba(0, 0, 0, 0.04)
    `,
    transition: createTransition(['backdrop-filter', 'transform', 'box-shadow', 'background-color'], 'normal', 'out'),
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
          <filter id="liquidDisplacementFilter" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="0.008 0.003" 
              numOctaves="3" 
              result="noise" 
            />
            <feGaussianBlur 
              in="SourceGraphic" 
              stdDeviation="0.5" 
              result="blur" 
            />
            <feDisplacementMap 
              in="blur"
              in2="noise"    
              scale="8" 
              xChannelSelector="R" 
              yChannelSelector="G"
              result="displacement" 
            />
            <feColorMatrix 
              in="displacement"
              type="saturate"
              values="1.1"
              result="saturated"
            />
            <feComponentTransfer in="saturated" result="final">
              <feFuncA type="discrete" tableValues="0.95"/>
            </feComponentTransfer>
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
                rgba(255, 255, 255, 0.3) 0%,
                rgba(255, 255, 255, 0.1) 30%,
                rgba(255, 255, 255, 0.15) 70%,
                rgba(255, 255, 255, 0.25) 100%
              );
              backdrop-filter: blur(1px) saturate(1.1);
            }

            .glassmorphism-header::after {
              content: '';
              position: absolute;
              inset: 1px;
              z-index: 1;
              border-radius: calc(${getBorderRadius('lg')} - 1px);
              background: linear-gradient(
                45deg,
                rgba(255, 255, 255, 0.1) 0%,
                transparent 50%,
                rgba(255, 255, 255, 0.08) 100%
              );
              pointer-events: none;
            }

            .glassmorphism-header:hover {
              transform: translateY(-0.5px);
              background-color: rgba(255, 255, 255, 0.3);
              backdrop-filter: brightness(1.08) blur(20px) url(#liquidDisplacementFilter);
              box-shadow: 
                inset 2px 2px 0px -2px rgba(255, 255, 255, 0.9),
                inset 0 0 16px 3px rgba(255, 255, 255, 0.5),
                0 16px 48px rgba(0, 0, 0, 0.1),
                0 6px 20px rgba(0, 0, 0, 0.06);
            }

            [data-theme="dark"] .glassmorphism-header {
              background-color: rgba(0, 0, 0, 0.35) !important;
              border-color: rgba(255, 255, 255, 0.2) !important;
            }

            [data-theme="dark"] .glassmorphism-header::before {
              background: linear-gradient(
                135deg,
                rgba(255, 255, 255, 0.15) 0%,
                rgba(255, 255, 255, 0.05) 30%,
                rgba(255, 255, 255, 0.08) 70%,
                rgba(255, 255, 255, 0.12) 100%
              ) !important;
            }

            [data-theme="dark"] .glassmorphism-header::after {
              background: linear-gradient(
                45deg,
                rgba(255, 255, 255, 0.06) 0%,
                transparent 50%,
                rgba(255, 255, 255, 0.04) 100%
              ) !important;
            }

            [data-theme="dark"] .glassmorphism-header:hover {
              background-color: rgba(0, 0, 0, 0.4) !important;
              box-shadow: 
                inset 2px 2px 0px -2px rgba(255, 255, 255, 0.4),
                inset 0 0 16px 3px rgba(255, 255, 255, 0.25),
                0 16px 48px rgba(0, 0, 0, 0.4),
                0 6px 20px rgba(0, 0, 0, 0.2) !important;
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