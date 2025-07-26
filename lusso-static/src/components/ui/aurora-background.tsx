"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode, useState, useEffect } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children = null,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Safely get theme from document attribute after mount
  useEffect(() => {
    setMounted(true);
    
    // Read theme from document data attribute instead of useTheme hook
    const currentTheme = document.documentElement.getAttribute('data-theme') as 'light' | 'dark' || 'light';
    setTheme(currentTheme);
    
    // Listen for theme changes
    const observer = new MutationObserver(() => {
      const newTheme = document.documentElement.getAttribute('data-theme') as 'light' | 'dark' || 'light';
      setTheme(newTheme);
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });
    
    return () => observer.disconnect();
  }, []);

  if (!mounted) {
    // Fallback rendering for SSR - use default colors
    return (
      <>
        <div
          className={cn(
            "fixed inset-0 transition-bg text-slate-950",
            className,
          )}
          style={{ zIndex: -1, backgroundColor: 'white' }}
          {...props}
        >
          <div
            className="absolute inset-0 overflow-hidden"
            style={{
              "--aurora": "repeating-linear-gradient(100deg,#D4AF37_10%,#FFD700_15%,#FFF8DC_20%,#F5F5F5_25%,#E6D3A3_30%)",
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
  
  // Define aurora colors for each theme
  const auroraColors = {
    light: {
      color1: "#D4AF37", // Brand gold
      color2: "#FFD700", // Bright gold  
      color3: "#FFF8DC", // Cornsilk - pearl white
      color4: "#F5F5F5", // Pearl white
      color5: "#E6D3A3", // Light champagne
    },
    dark: {
      color1: "#37D4AF", // Brand teal
      color2: "#5CE5C5", // Light teal
      color3: "#D4AF37", // Brand gold
      color4: "#2BB89B", // Deep teal
      color5: "#B2935B", // Matte gold
    }
  };
  
  const currentColors = auroraColors[theme] || auroraColors.light;
  const auroraGradient = `repeating-linear-gradient(100deg,${currentColors.color1}_10%,${currentColors.color2}_15%,${currentColors.color3}_20%,${currentColors.color4}_25%,${currentColors.color5}_30%)`;
  
  return (
    <>
      <div
        className={cn(
          "fixed inset-0 transition-bg text-slate-950",
          className,
        )}
        style={{ zIndex: -1, backgroundColor: theme === 'light' ? '#f8f8f8' : '#1a1a1a' }}
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
