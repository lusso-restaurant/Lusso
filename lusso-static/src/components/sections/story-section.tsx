import { Card, CardContent } from '@/components/ui/card';
import { getFontFamily } from '@/lib/design-system';

export function StorySection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-transparent" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-foreground"
            style={{
              fontFamily: getFontFamily('display')
            }}
          >
            Povestea Noastră
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#B2935B] mx-auto rounded-full" />
        </div>
        
        {/* Story Content */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <Card className="backdrop-blur-lg bg-card/60 border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-500">
            <CardContent className="p-8">
              <h3 
                className="text-2xl sm:text-3xl font-semibold mb-6 text-[#D4AF37]"
                style={{
                  fontFamily: getFontFamily('display')
                }}
              >
                Născut în 2024
              </h3>
              
              <div 
                className="space-y-4 text-foreground/90 leading-relaxed"
                style={{
                  fontFamily: getFontFamily('sans')
                }}
              >
                <p className="text-lg">
                  În inima <strong className="text-[#D4AF37]">Eforie Nord</strong>, 
                  am creat un spațiu unde luxul întâlnește autenticitatea. 
                  Lusso nu este doar un restaurant – este o experiență care 
                  îmbină tradiția culinară mediteraneană cu eleganța modernă.
                </p>
                
                <p className="text-lg">
                  Fiecare detaliu a fost gândit cu atenție, de la selecția 
                  ingredientelor premium până la atmosfera rafinată care 
                  înconjoară fiecare masă. Aici, <em className="text-[#D4AF37]">mâncarea 
                  este savurată, nu doar consumată</em>.
                </p>
                
                <p className="text-lg">
                  Vă invităm să descoperiți o lume unde gustul, estetica și 
                  atmosfera se îmbină perfect pentru a crea amintiri de neuitat.
                </p>
              </div>
            </CardContent>
          </Card>
          
          {/* Visual Element */}
          <Card className="backdrop-blur-lg bg-card/40 border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-500 group">
            <CardContent className="p-8">
              <div className="aspect-square bg-gradient-to-br from-[#D4AF37]/20 to-[#B2935B]/20 rounded-lg flex items-center justify-center group-hover:from-[#D4AF37]/30 group-hover:to-[#B2935B]/30 transition-all duration-500">
                <div className="text-center">
                  <div 
                    className="text-6xl sm:text-7xl font-bold text-[#D4AF37] mb-4"
                    style={{
                      fontFamily: getFontFamily('display')
                    }}
                  >
                    2024
                  </div>
                  <p 
                    className="text-xl text-foreground/80"
                    style={{
                      fontFamily: getFontFamily('sans')
                    }}
                  >
                    Anul înființării
                  </p>
                  <div className="mt-6">
                    <div className="w-16 h-1 bg-gradient-to-r from-[#D4AF37] to-[#B2935B] mx-auto rounded-full" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Location Highlight */}
        <div className="mt-16 text-center">
          <Card className="backdrop-blur-lg bg-card/60 border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-500 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h4 
                className="text-2xl font-semibold mb-4 text-[#D4AF37]"
                style={{
                  fontFamily: getFontFamily('display')
                }}
              >
                Eforie Nord
              </h4>
              <p 
                className="text-lg text-foreground/90 leading-relaxed"
                style={{
                  fontFamily: getFontFamily('sans')
                }}
              >
                Situat în una dintre cele mai frumoase destinații de pe litoralul românesc, 
                Lusso aduce o nouă dimensiune experienței culinare de vacanță. 
                Aici, briza mării se îmbină cu aromele mediteraneene pentru a crea 
                o atmosferă de neuitat.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}