'use client';

import { Button } from '@/components/ui/button';
import { getFontFamily } from '@/lib/design-system';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Liquid Glass Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/10 backdrop-blur-[1px]" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Main Title */}
        <h1 
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tight"
          style={{
            fontFamily: getFontFamily('display'),
            background: 'linear-gradient(135deg, #D4AF37 0%, #FFD700 50%, #B2935B 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: '0 0 30px rgba(212, 175, 55, 0.3)'
          }}
        >
          LUSSO
        </h1>
        
        {/* Tagline */}
        <p 
          className="text-xl sm:text-2xl md:text-3xl mb-8 text-foreground/90 tracking-wide"
          style={{
            fontFamily: getFontFamily('display'),
            fontWeight: '300'
          }}
        >
          gust, estetică, atmosferă
        </p>
        
        {/* Description */}
        <p 
          className="text-lg sm:text-xl mb-12 text-foreground/80 max-w-2xl mx-auto leading-relaxed"
          style={{
            fontFamily: getFontFamily('sans')
          }}
        >
          Descoperiți o experiență culinară completă în inima Eforie Nord, 
          unde fiecare masă devine o celebrare a gustului autentic și rafinamentului.
        </p>
        
        {/* CTA Button */}
        <Button 
          size="lg"
          className="
            px-8 py-4 text-lg font-semibold
            bg-gradient-to-r from-[#D4AF37] to-[#B2935B]
            hover:from-[#FFD700] hover:to-[#D4AF37]
            text-black
            border border-[#D4AF37]/30
            backdrop-blur-md
            shadow-lg hover:shadow-xl
            transition-all duration-300
            hover:scale-105
            relative overflow-hidden
            group
          "
          style={{
            fontFamily: getFontFamily('sans')
          }}
        >
          <span className="relative z-10">Rezervă o masă</span>
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/20 to-[#D4AF37]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Button>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#D4AF37]/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#D4AF37] rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}