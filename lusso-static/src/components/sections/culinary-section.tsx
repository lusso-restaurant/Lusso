import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getFontFamily } from '@/lib/design-system';

interface CulinarySectionProps {
  id?: string;
}

export function CulinarySection({ id }: CulinarySectionProps) {
  const features = [
    {
      title: "Cuptorul Josper",
      description: "Carnea maturată este preparată în cuptorul nostru Josper, oferind o textură și un gust inconfundabile prin tehnica de gătire la temperaturi înalte.",
      icon: "🔥"
    },
    {
      title: "Ingrediente Premium",
      description: "Selectăm cu atenție doar cele mai fine ingrediente, de la fructele de mare proaspete până la legumele de sezon și condimentele aromate.",
      icon: "🌿"
    },
    {
      title: "Vinuri & Șampanii",
      description: "O selecție rafinată de vinuri și șampanii care completează perfect fiecare fel de mâncare, creând acorduri perfecte de gust.",
      icon: "🍷"
    },
    {
      title: "Cafea Nespresso",
      description: "Încheiați masa cu o cafea Nespresso perfectă, preparată cu atenție pentru a completa experiența culinară de excepție.",
      icon: "☕"
    }
  ];

  return (
    <section id={id} className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/50" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-foreground"
            style={{
              fontFamily: getFontFamily('display')
            }}
          >
            Abordarea Culinară
          </h2>
          <p 
            className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed"
            style={{
              fontFamily: getFontFamily('sans')
            }}
          >
            Bucătăria mediteraneană reinterpretată cu pasiune și precizie, 
            folosind echipamente de ultimă generație și ingrediente de cea mai înaltă calitate.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#B2935B] mx-auto rounded-full mt-6" />
        </div>
        
        {/* Main Feature - Mediterranean Cuisine */}
        <div className="mb-16">
          <Card className="backdrop-blur-lg bg-card/60 border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-500 max-w-4xl mx-auto">
            <CardContent className="p-8 md:p-12 text-center">
              <h3 
                className="text-3xl sm:text-4xl font-bold mb-6 text-[#D4AF37]"
                style={{
                  fontFamily: getFontFamily('display')
                }}
              >
                Bucătăria Mediteraneană
              </h3>
              <p 
                className="text-lg text-foreground/90 leading-relaxed mb-8"
                style={{
                  fontFamily: getFontFamily('sans')
                }}
              >
                Inspirați de tradițiile culinare ale Mediteranei, creăm preparate care 
                celebrează prospețimea ingredientelor naturale, aromele autentice și 
                tehnicile de gătire care au fost perfecționate de-a lungul secolelor. 
                Fiecare farfurie spune o poveste de pasiune și măiestrie culinară.
              </p>
              
              {/* Quote */}
              <blockquote 
                className="text-2xl sm:text-3xl md:text-4xl font-light italic text-[#D4AF37] border-l-4 border-[#D4AF37] pl-6 mx-auto max-w-2xl"
                style={{
                  fontFamily: getFontFamily('display')
                }}
              >
                &ldquo;Mâncarea este savurată, nu doar consumată&rdquo;
              </blockquote>
            </CardContent>
          </Card>
        </div>
        
        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="backdrop-blur-lg bg-card/60 border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-500 group hover:scale-105"
            >
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <CardTitle 
                  className="text-xl text-[#D4AF37] group-hover:text-[#FFD700] transition-colors duration-300"
                  style={{
                    fontFamily: getFontFamily('display')
                  }}
                >
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p 
                  className="text-foreground/80 leading-relaxed text-center"
                  style={{
                    fontFamily: getFontFamily('sans')
                  }}
                >
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Bottom Highlight */}
        <div className="mt-16 text-center">
          <Card className="backdrop-blur-lg bg-card/40 border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-500 max-w-3xl mx-auto">
            <CardContent className="p-8">
              <h4 
                className="text-2xl font-semibold mb-4 text-[#D4AF37]"
                style={{
                  fontFamily: getFontFamily('display')
                }}
              >
                Experiența Completă
              </h4>
              <p 
                className="text-lg text-foreground/90 leading-relaxed"
                style={{
                  fontFamily: getFontFamily('sans')
                }}
              >
                De la micul dejun până la cina, fiecare moment petrecut la Lusso 
                este o celebrare a bunului gust. Combinăm tehnicile tradiționale 
                cu inovația modernă pentru a crea experiențe culinare memorabile.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}