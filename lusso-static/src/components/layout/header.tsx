'use client';

import React, { useEffect, useRef, useCallback } from 'react';
import { 
  getSemanticColor, 
  getSpacing, 
  getBorderRadius, 
  createTransition,
  getFontFamily,
  getFontWeight 
} from '@/lib/design-system';
import { ThemeSwitch } from '@/components/ui/theme-switch';
import { MobileNavigation } from '@/components/navigation/mobile-navigation';

interface HeaderProps {
  title?: string;
  children?: React.ReactNode;
  className?: string;
  showEffects?: boolean;
  menuCategories?: { id: string; name: string; }[];
  activeCategory?: string;
  onCategoryChange?: (categoryId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  title = "LUSSO",
  children,
  className = "",
  showEffects = true
}) => {
  const headerRef = useRef<HTMLElement>(null);
  const animationRef = useRef<number>(0);
  const lastMoveTime = useRef<number>(0);
  // Optimized mouse tracking with throttling
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const now = Date.now();
    if (now - lastMoveTime.current < 16) return; // 60fps throttle
    lastMoveTime.current = now;

    const header = headerRef.current;
    if (!header) return;

    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    animationRef.current = requestAnimationFrame(() => {
      const rect = header.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      header.style.setProperty('--mouse-x', `${x}%`);
      header.style.setProperty('--mouse-y', `${y}%`);
    });
  }, []);

  useEffect(() => {
    const header = headerRef.current;
    if (!header || !showEffects) return;

    header.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    return () => {
      header.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [handleMouseMove, showEffects]);
  // Enhanced header styles with luxury design principles
  const headerStyles: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    width: 'calc(100% - 2rem)',
    padding: `${getSpacing('5')} ${getSpacing('8')}`,
    backdropFilter: showEffects 
      ? 'blur(24px) saturate(1.6) brightness(1.02)' 
      : 'blur(8px)',
    WebkitBackdropFilter: showEffects 
      ? 'blur(24px) saturate(1.6) brightness(1.02)' 
      : 'blur(8px)',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    border: `1px solid ${getSemanticColor('border')}`,
    borderRadius: getBorderRadius('2xl'),
    margin: getSpacing('6'),
    boxShadow: `
      0 8px 32px rgba(0, 0, 0, 0.06),
      0 4px 16px rgba(0, 0, 0, 0.04),
      0 0 0 1px rgba(255, 255, 255, 0.05),
      inset 0 1px 0 rgba(255, 255, 255, 0.1)
    `,
    transition: createTransition(
      ['backdrop-filter', 'transform', 'box-shadow', 'background-color'], 
      'normal', 
      'fluid'
    ),
    willChange: 'transform, backdrop-filter',
  };

  const contentStyles: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '1fr auto 1fr',
    alignItems: 'center',
    maxWidth: '1400px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 10,
    gap: getSpacing('4'),
  };

  // Premium brand typography
  const titleStyles: React.CSSProperties = {
    fontFamily: getFontFamily('display'),
    fontSize: 'clamp(1.75rem, 2.5vw, 2.5rem)',
    fontWeight: getFontWeight('regular'),
    background: `linear-gradient(135deg, 
      ${getSemanticColor('text-primary')} 0%, 
      var(--brand-glossy-gold) 40%, 
      ${getSemanticColor('text-secondary')} 100%
    )`,
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundSize: '200% 100%',
    backgroundPosition: '20% 50%',
    letterSpacing: '0.15em',
    lineHeight: 1.2,
    textShadow: 'none',
    transition: createTransition(['background-position'], 'slow', 'out'),
    cursor: 'default',
  };

  // Navigation container styles
  const navStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: getSpacing('6'),
    height: '100%',
  };

  return (
    <>
      {/* Simplified SVG Effects for Performance */}
      {showEffects && (
        <svg style={{ position: 'absolute', width: 0, height: 0, visibility: 'hidden' }}>
          <defs>
            <filter id="luxuryGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/> 
              </feMerge>
            </filter>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--brand-matte-gold)" stopOpacity="0.3"/>
              <stop offset="50%" stopColor="var(--brand-glossy-gold)" stopOpacity="0.6"/>
              <stop offset="100%" stopColor="var(--brand-matte-gold)" stopOpacity="0.3"/>
            </linearGradient>
          </defs>
        </svg>
      )}

      {/* LUSSO Premium Header */}
      <header
        ref={headerRef}
        style={headerStyles}
        className={`lusso-header ${className}`}
        role="banner"
        aria-label="LUSSO Navigation"
      >
        <div style={contentStyles}>
          {/* Left: Brand Title */}
          <h1 
            style={titleStyles}
            className="lusso-brand-title"
            aria-label="LUSSO - Luxury Brand"
          >
            {title}
          </h1>
          
          {/* Center: Desktop Navigation */}
          {children && (
            <nav 
              style={{
                ...navStyles,
                justifyContent: 'center',
              }}
              className="lusso-navigation hidden md:flex"
              role="navigation"
              aria-label="Main navigation"
            >
              {children}
            </nav>
          )}
          
          {/* Right: Theme Switch + Mobile Menu */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-end', 
            gap: getSpacing('3')
          }}>
            {/* Desktop Theme Switch */}
            <div className="hidden md:block">
              <ThemeSwitch iconOnly />
            </div>
            
            {/* Mobile Navigation */}
            <div className="block md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </div>
      </header>



      {/* Enhanced LUSSO Header Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @layer components {
            /* Premium brand title animation */
            .lusso-brand-title:hover {
              background-position: 100% 50%;
              transform: scale(1.02);
            }

            /* Base header styling */
            .lusso-header {
              --mouse-x: 50%;
              --mouse-y: 50%;
            }

            /* Dynamic lighting effect */
            .lusso-header::before {
              content: '';
              position: absolute;
              inset: 0;
              z-index: 0;
              border-radius: ${getBorderRadius('2xl')};
              background: radial-gradient(
                800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
                rgba(212, 175, 55, 0.06),
                transparent 40%
              );
              opacity: 0;
              transition: opacity var(--duration-slow) var(--ease-out);
              pointer-events: none;
            }

            .lusso-header:hover::before {
              opacity: 1;
            }

            /* Elegant inner glow */
            .lusso-header::after {
              content: '';
              position: absolute;
              inset: 1px;
              z-index: 1;
              border-radius: calc(${getBorderRadius('2xl')} - 1px);
              background: linear-gradient(
                135deg,
                rgba(255, 255, 255, 0.1) 0%,
                transparent 30%,
                transparent 70%,
                rgba(212, 175, 55, 0.05) 100%
              );
              pointer-events: none;
            }

            /* Premium hover state */
            .lusso-header:hover {
              transform: translateY(-1px);
              background-color: rgba(255, 255, 255, 0.12);
              backdrop-filter: blur(32px) saturate(1.8) brightness(1.05);
              box-shadow: 
                0 20px 40px rgba(0, 0, 0, 0.08),
                0 8px 24px rgba(0, 0, 0, 0.06),
                0 0 0 1px rgba(212, 175, 55, 0.1),
                inset 0 1px 0 rgba(255, 255, 255, 0.2);
            }

            /* Dark theme enhancements */
            [data-theme="dark"] .lusso-header {
              background-color: rgba(0, 0, 0, 0.25);
              border-color: rgba(255, 255, 255, 0.1);
            }

            [data-theme="dark"] .lusso-header::before {
              background: radial-gradient(
                800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
                rgba(212, 175, 55, 0.08),
                transparent 40%
              );
            }

            /* Dark theme gradient positioning */
            [data-theme="dark"] .lusso-brand-title {
              background-position: 60% 50%;
            }

            [data-theme="dark"] .lusso-brand-title:hover {
              background-position: 80% 50%;
            }



            [data-theme="dark"] .lusso-header::after {
              background: linear-gradient(
                135deg,
                rgba(255, 255, 255, 0.08) 0%,
                transparent 30%,
                transparent 70%,
                rgba(212, 175, 55, 0.06) 100%
              );
            }

            [data-theme="dark"] .lusso-header:hover {
              background-color: rgba(0, 0, 0, 0.35);
              box-shadow:
                0 20px 40px rgba(0, 0, 0, 0.3),
                0 8px 24px rgba(0, 0, 0, 0.2),
                0 0 0 1px rgba(212, 175, 55, 0.15),
                inset 0 1px 0 rgba(255, 255, 255, 0.1);
            }

            /* Navigation styling */
            .lusso-navigation {
              font-family: ${getFontFamily('sans')};
              font-size: clamp(0.9rem, 1vw, 1.1rem);
              font-weight: ${getFontWeight('medium')};
              letter-spacing: 0.025em;
              text-transform: uppercase;
            }

            /* Accessibility improvements */
            .lusso-header:focus-within {
              outline: 2px solid var(--brand-glossy-gold);
              outline-offset: 2px;
            }

            /* Reduced motion support */
            @media (prefers-reduced-motion: reduce) {
              .lusso-header,
              .lusso-brand-title,
              .lusso-header::before {
                transition: none;
                transform: none;
              }
            }

            /* Mobile optimizations */
            @media (max-width: 767px) {
              .lusso-header {
                margin: ${getSpacing('3')};
                width: calc(100% - 1.5rem);
                padding: ${getSpacing('4')} ${getSpacing('5')};
              }
              
              .lusso-header > * .lusso-brand-title {
                font-size: clamp(1.25rem, 4vw, 1.75rem);
                letter-spacing: 0.1em;
              }
            }
            
            /* Tablet optimizations */
            @media (max-width: 1024px) and (min-width: 769px) {
              .lusso-navigation {
                gap: ${getSpacing('4')};
                font-size: 0.9rem;
              }
              
              .lusso-navigation a {
                padding: 0.4rem 0.8rem;
              }
            }

            /* High contrast mode support */
            @media (prefers-contrast: high) {
              .lusso-header {
                border-width: 2px;
                background-color: rgba(255, 255, 255, 0.95);
              }
              
              [data-theme="dark"] .lusso-header {
                background-color: rgba(0, 0, 0, 0.95);
              }
            }

            /* Floating menu dark theme support */
            [data-theme="dark"] .floating-menu {
              background-color: rgba(0, 0, 0, 0.95) !important;
              border-color: rgba(255, 255, 255, 0.1) !important;
            }
          }
        `
      }} />
    </>
  );
};

export default Header;
