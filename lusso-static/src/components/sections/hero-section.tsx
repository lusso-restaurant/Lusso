'use client';

import { Button } from '@/components/ui/button';
import { RestaurantCarousel } from '@/components/ui/restaurant-carousel';
import { getFontFamily, getSemanticColor } from '@/lib/design-system';
import { useRouter } from 'next/navigation';

export function HeroSection() {
  const router = useRouter();
  
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 pb-8">
      {/* Liquid Glass Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/10 backdrop-blur-[1px]" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Main Title */}
        <h1 
          className="text-9xl sm:text-9xl md:text-8xl lg:text-9xl mb-6 lusso-brand-title"
          style={{
            fontFamily: getFontFamily('display'),
            fontWeight: 'regular',
            fontSize: 'clamp(4rem, 12vw, 8rem)',
            background: `linear-gradient(135deg, 
              ${getSemanticColor('text-primary')} 0%, 
              var(--brand-glossy-gold) 50%, 
              ${getSemanticColor('text-secondary')} 100%
            )`,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundSize: '200% 100%',
            backgroundPosition: '0% 50%',
            letterSpacing: '0.15em',
            lineHeight: 1.2,
            textShadow: 'none',
            transition: 'background-position 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
            cursor: 'default'
          }}
        >
          LUSSO
        </h1>
        
        {/* Restaurant Photo Carousel */}
        <div className="mb-8 max-w-3xl mx-auto">
          <RestaurantCarousel className="shadow-2xl" />
        </div>
        
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
          className="text-lg sm:text-xl mb-8 text-foreground/80 max-w-2xl mx-auto leading-relaxed"
          style={{
            fontFamily: getFontFamily('sans')
          }}
        >
          Descoperiți o experiență culinară completă în inima Eforie Nord, 
          unde fiecare masă devine o celebrare a gustului autentic și rafinamentului.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-row flex-wrap gap-4 justify-center items-center w-full max-w-md mx-auto sm:max-w-none">
          {/* Meniu Button - Modern Glass Morphism Style */}
          <Button 
            size="lg"
            variant="outline"
            className="
              px-6 py-4 text-lg font-semibold w-auto flex-shrink-0 min-w-0
              bg-transparent
              border-2 border-[#D4AF37]
              hover:border-[#FFD700]
              backdrop-blur-md
              shadow-lg hover:shadow-xl
              transition-all duration-300
              hover:scale-105
              relative overflow-hidden
              group
            "
            style={{
              fontFamily: getFontFamily('sans'),
              background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(255, 215, 0, 0.05) 100%)',
              color: 'transparent',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
            onClick={() => router.push('/meniu')}
          >
            <span 
              className="relative z-10"
              style={{
                background: 'linear-gradient(135deg, #D4AF37 0%, #FFD700 50%, #B8860B 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Meniu
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/10 to-[#FFD700]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>

          {/* Comandă Button */}
          <Button 
            size="lg"
            className="
              px-6 py-4 text-lg font-semibold w-auto flex-shrink-0 min-w-0
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
            onClick={() => window.open('tel:+40730629628', '_self')}
          >
            <span className="relative z-10">Comandă</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/20 to-[#D4AF37]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>
        </div>
        
        {/* Scroll Indicator (hidden on small screens to keep CTAs higher) */}
        <div className="hidden md:flex justify-center mb-8">
          <div className="w-6 h-10 border-2 border-[#D4AF37]/50 rounded-full flex justify-center animate-bounce">
            <div className="w-1 h-3 bg-[#D4AF37] rounded-full mt-2 animate-pulse" />
          </div>
        </div>
        

      </div>
    </section>
  );
}