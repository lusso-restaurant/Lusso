"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode, useState, useEffect, useContext } from "react";
import { useTheme, ThemeContext } from "@/components/ui/theme-provider";
import { 
  generateAuroraGradient, 
  getAuroraBackgroundColor,
  getCurrentThemeFromDOM
} from "@/lib/theme-utils";
import { DEFAULT_THEME } from "@/lib/theme-constants";
import type { ThemeName } from "@/types/design-system";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  showRadialGradient?: boolean;
}

/**
 * Inner component that uses theme context when available
 */
const AuroraBackgroundWithContext = ({
  className,
  children = null,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme(); // This will work when inside ThemeProvider

  useEffect(() => {
    setMounted(true);
  }, []);

  // Generate theme-specific styles using centralized utilities
  const auroraGradient = generateAuroraGradient(theme);
  const backgroundColor = getAuroraBackgroundColor(theme);
  
  // Debug info (development only)
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log(`[AuroraBackground] Theme: ${theme}, HasContext: true`);
    }
  }, [theme]);

  if (!mounted) {
    // SSR Fallback: Use centralized theme system with default theme
    const ssrAuroraGradient = generateAuroraGradient(DEFAULT_THEME);
    const ssrBackgroundColor = getAuroraBackgroundColor(DEFAULT_THEME);
    
    return (
      <>
        <div
          className={cn(
            "fixed inset-0 transition-bg text-slate-950",
            className,
          )}
          style={{ zIndex: -1, backgroundColor: ssrBackgroundColor }}
          {...props}
        >
          <div
            className="absolute inset-0 overflow-hidden"
            style={{
              "--aurora": ssrAuroraGradient,
              "--dark-gradient": "repeating-linear-gradient(100deg,#000_0%,#000_7%,transparent_10%,transparent_12%,#000_16%)",
              "--white-gradient": "repeating-linear-gradient(100deg,#fff_0%,#fff_7%,transparent_10%,transparent_12%,#fff_16%)",
              "--blue-300": "#93c5fd",
              "--blue-400": "#60a5fa",
              "--blue-500": "#3b82f6",
              "--indigo-300": "#a5b4fc",
              "--violet-200": "#ddd6fe",
              "--black": "#000",
              "--white": "#fff",
              "--transparent": "transparent",
            } as React.CSSProperties}
          >
            <div
              className={cn(
                `after:animate-aurora pointer-events-none absolute -inset-[10px] [background-image:var(--white-gradient),var(--aurora)] [background-size:300%,_200%] [background-position:50%_50%,50%_50%] opacity-50 blur-[10px] invert filter will-change-transform [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)] [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)] [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] after:[background-size:200%,_100%] after:[background-attachment:fixed] after:mix-blend-difference after:content-[""] dark:[background-image:var(--dark-gradient),var(--aurora)] dark:invert-0 after:dark:[background-image:var(--dark-gradient),var(--aurora)]`,
                showRadialGradient &&
                  `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`,
              )}
            ></div>
          </div>
        </div>
        {children}
      </>
    );
  }
  
  return (
    <>
      <div
        className={cn(
          "fixed inset-0 transition-bg text-slate-950",
          className,
        )}
        style={{ zIndex: -1, backgroundColor }}
        {...props}
      >
        <div
          key={`aurora-${theme}`}
          className="absolute inset-0 overflow-hidden"
          style={
            {
              "--aurora": auroraGradient,
              "--dark-gradient":
                "repeating-linear-gradient(100deg,#000_0%,#000_7%,transparent_10%,transparent_12%,#000_16%)",
              "--white-gradient":
                "repeating-linear-gradient(100deg,#fff_0%,#fff_7%,transparent_10%,transparent_12%,#fff_16%)",

              "--blue-300": "#93c5fd",
              "--blue-400": "#60a5fa",
              "--blue-500": "#3b82f6",
              "--indigo-300": "#a5b4fc",
              "--violet-200": "#ddd6fe",
              "--black": "#000",
              "--white": "#fff",
              "--transparent": "transparent",
            } as React.CSSProperties
          }
        >
          <div
            //   I'm sorry but this is what peak developer performance looks like // trigger warning
            className={cn(
              `after:animate-aurora pointer-events-none absolute -inset-[10px] [background-image:var(--white-gradient),var(--aurora)] [background-size:300%,_200%] [background-position:50%_50%,50%_50%] opacity-50 blur-[10px] invert filter will-change-transform [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)] [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)] [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] after:[background-size:200%,_100%] after:[background-attachment:fixed] after:mix-blend-difference after:content-[""] dark:[background-image:var(--dark-gradient),var(--aurora)] dark:invert-0 after:dark:[background-image:var(--dark-gradient),var(--aurora)]`,

              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`,
            )}
          ></div>
        </div>
      </div>
      {children}
    </>
  );
};

/**
 * Fallback component that works without theme context
 */
const AuroraBackgroundFallback = ({
  className,
  children = null,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  const [domTheme, setDomTheme] = useState<ThemeName>(DEFAULT_THEME);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Initial theme detection
    setDomTheme(getCurrentThemeFromDOM());
    
    // Lightweight polling for theme changes
    const pollTheme = () => {
      const currentTheme = getCurrentThemeFromDOM();
      setDomTheme(prev => prev !== currentTheme ? currentTheme : prev);
    };
    
    // Poll every 1000ms when outside context (rare case)
    const interval = setInterval(pollTheme, 1000);
    
    return () => clearInterval(interval);
  }, []);

  // Generate theme-specific styles using centralized utilities
  const theme = mounted ? domTheme : DEFAULT_THEME;
  const auroraGradient = generateAuroraGradient(theme);
  const backgroundColor = getAuroraBackgroundColor(theme);
  
  // Debug info (development only)
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log(`[AuroraBackground] Theme: ${theme}, HasContext: false (DOM fallback)`);
    }
  }, [theme]);

  if (!mounted) {
    // SSR Fallback: Use centralized theme system with default theme
    const ssrAuroraGradient = generateAuroraGradient(DEFAULT_THEME);
    const ssrBackgroundColor = getAuroraBackgroundColor(DEFAULT_THEME);
    
    return (
      <>
        <div
          className={cn(
            "fixed inset-0 transition-bg text-slate-950",
            className,
          )}
          style={{ zIndex: -1, backgroundColor: ssrBackgroundColor }}
          {...props}
        >
          <div
            className="absolute inset-0 overflow-hidden"
            style={{
              "--aurora": ssrAuroraGradient,
              "--dark-gradient": "repeating-linear-gradient(100deg,#000_0%,#000_7%,transparent_10%,transparent_12%,#000_16%)",
              "--white-gradient": "repeating-linear-gradient(100deg,#fff_0%,#fff_7%,transparent_10%,transparent_12%,#fff_16%)",
              "--blue-300": "#93c5fd",
              "--blue-400": "#60a5fa",
              "--blue-500": "#3b82f6",
              "--indigo-300": "#a5b4fc",
              "--violet-200": "#ddd6fe",
              "--black": "#000",
              "--white": "#fff",
              "--transparent": "transparent",
            } as React.CSSProperties}
          >
            <div
              className={cn(
                `after:animate-aurora pointer-events-none absolute -inset-[10px] [background-image:var(--white-gradient),var(--aurora)] [background-size:300%,_200%] [background-position:50%_50%,50%_50%] opacity-50 blur-[10px] invert filter will-change-transform [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)] [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)] [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] after:[background-size:200%,_100%] after:[background-attachment:fixed] after:mix-blend-difference after:content-[""] dark:[background-image:var(--dark-gradient),var(--aurora)] dark:invert-0 after:dark:[background-image:var(--dark-gradient),var(--aurora)]`,
                showRadialGradient &&
                  `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`,
              )}
            ></div>
          </div>
        </div>
        {children}
      </>
    );
  }
  
  return (
    <>
      <div
        className={cn(
          "fixed inset-0 transition-bg text-slate-950",
          className,
        )}
        style={{ zIndex: -1, backgroundColor }}
        {...props}
      >
        <div
          key={`aurora-${theme}`}
          className="absolute inset-0 overflow-hidden"
          style={
            {
              "--aurora": auroraGradient,
              "--dark-gradient":
                "repeating-linear-gradient(100deg,#000_0%,#000_7%,transparent_10%,transparent_12%,#000_16%)",
              "--white-gradient":
                "repeating-linear-gradient(100deg,#fff_0%,#fff_7%,transparent_10%,transparent_12%,#fff_16%)",

              "--blue-300": "#93c5fd",
              "--blue-400": "#60a5fa",
              "--blue-500": "#3b82f6",
              "--indigo-300": "#a5b4fc",
              "--violet-200": "#ddd6fe",
              "--black": "#000",
              "--white": "#fff",
              "--transparent": "transparent",
            } as React.CSSProperties
          }
        >
          <div
            className={cn(
              `after:animate-aurora pointer-events-none absolute -inset-[10px] [background-image:var(--white-gradient),var(--aurora)] [background-size:300%,_200%] [background-position:50%_50%,50%_50%] opacity-50 blur-[10px] invert filter will-change-transform [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)] [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)] [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] after:[background-size:200%,_100%] after:[background-attachment:fixed] after:mix-blend-difference after:content-[""] dark:[background-image:var(--dark-gradient),var(--aurora)] dark:invert-0 after:dark:[background-image:var(--dark-gradient),var(--aurora)]`,

              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`,
            )}
          ></div>
        </div>
      </div>
      {children}
    </>
  );
};

/**
 * Smart wrapper component that automatically detects ThemeProvider context
 * and falls back gracefully when not available
 */
export const AuroraBackground = (props: AuroraBackgroundProps) => {
  // Check if we're within a ThemeProvider by testing the context
  const themeContext = useContext(ThemeContext);
  
  // If context is available, use the context-aware component
  // Otherwise, use the fallback component with DOM-based theme detection
  return themeContext ? (
    <AuroraBackgroundWithContext {...props} />
  ) : (
    <AuroraBackgroundFallback {...props} />
  );
};
