'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getFontFamily } from '@/lib/design-system';

interface OrderSectionProps {
  id?: string;
}

export function OrderSection({ id }: OrderSectionProps) {
  const orderOptions = [
    {
      title: "Comandă Rapidă",
      description: "Apelați pentru comenzi rapide și livrări",
      icon: "🚀"
    },
    {
      title: "Meniu Complet",
      description: "Consultați meniul nostru complet prin telefon",
      icon: "📋"
    },
    {
      title: "Specialități",
      description: "Întrebați despre specialitățile zilei",
      icon: "⭐"
    }
  ];

  return (
    <section id={id} className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-[#D4AF37]/5 to-background/50" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-foreground"
            style={{
              fontFamily: getFontFamily('display')
            }}
          >
            Comandă Acum
          </h2>
          <p 
            className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed"
            style={{
              fontFamily: getFontFamily('sans')
            }}
          >
            Savurați preparatele noastre mediteraneene în confortul casei dumneavoastră. 
            Apelați pentru a plasa comanda și vă vom ghida prin meniul nostru delicios.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#B2935B] mx-auto rounded-full mt-6" />
        </div>
        
        {/* Order Options */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {orderOptions.map((option, index) => (
            <Card 
              key={index}
              className="backdrop-blur-lg bg-card/60 border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-500 group hover:scale-105"
            >
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {option.icon}
                </div>
                <h3 
                  className="text-xl text-[#D4AF37] group-hover:text-[#FFD700] transition-colors duration-300 mb-4"
                  style={{
                    fontFamily: getFontFamily('display')
                  }}
                >
                  {option.title}
                </h3>
                <p 
                  className="text-foreground/80 leading-relaxed"
                  style={{
                    fontFamily: getFontFamily('sans')
                  }}
                >
                  {option.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Main Order CTA */}
        <div className="max-w-4xl mx-auto">
          <Card className="backdrop-blur-lg bg-card/60 border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-500">
            <CardContent className="p-8 md:p-12 text-center">
              <h3 
                className="text-3xl font-bold mb-6 text-[#D4AF37]"
                style={{
                  fontFamily: getFontFamily('display')
                }}
              >
                Plasează Comanda
              </h3>
              <p 
                className="text-lg text-foreground/90 leading-relaxed mb-8"
                style={{
                  fontFamily: getFontFamily('sans')
                }}
              >
                Echipa noastră vă va ajuta să alegeți preparatele perfecte pentru gusturile dumneavoastră. 
                De la specialitățile Josper până la deserturile noastre rafinate, fiecare comandă este 
                preparată cu aceeași atenție la detalii ca în restaurant.
              </p>
              
              {/* Phone Number Highlight */}
              <div className="bg-gradient-to-r from-[#D4AF37]/10 to-[#B2935B]/10 rounded-lg p-6 mb-8 border border-[#D4AF37]/20">
                <div 
                  className="text-2xl font-bold text-[#D4AF37] mb-2"
                  style={{
                    fontFamily: getFontFamily('display')
                  }}
                >
                  +40 730 629 628
                </div>
                <p 
                  className="text-foreground/80"
                  style={{
                    fontFamily: getFontFamily('sans')
                  }}
                >
                  Disponibili zilnic pentru comenzi
                </p>
              </div>
              
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
                "
                onClick={() => window.open('tel:+40730629628', '_self')}
              >
                <span className="mr-2">📞</span>
                Comandă Acum
              </Button>
              
              {/* Additional Info */}
              <div className="mt-8 grid sm:grid-cols-2 gap-4 text-sm text-foreground/70">
                <div>
                  <strong className="text-[#D4AF37]">Program comenzi:</strong><br />
                  Zilnic 12:00 - 22:00
                </div>
                <div>
                  <strong className="text-[#D4AF37]">Timp de preparare:</strong><br />
                  30-45 minute
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}