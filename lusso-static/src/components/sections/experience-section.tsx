import { Card, CardContent } from '@/components/ui/card';
import { getFontFamily } from '@/lib/design-system';

interface ExperienceSectionProps {
  id?: string;
}

export function ExperienceSection({ id }: ExperienceSectionProps) {
  const experiences = [
    {
      title: "Micul Dejun",
      time: "09:00 - 11:00",
      description: "Începeți ziua cu preparate proaspete și aromate, de la specialități locale până la clasicele internaționale.",
      highlight: "Cafea Nespresso & produse de patiserie"
    },
    {
      title: "Prânzul",
      time: "12:00 - 16:00",
      description: "Savurați preparate mediteraneene autentice în atmosfera relaxantă a zilei, perfecte pentru o pauză de calitate.",
      highlight: "Specialități Josper & salate proaspete"
    },
    {
      title: "Cina",
      time: "18:00 - 00:00",
      description: "Experiența culinară completă în ambianța rafinată a serii, cu preparate premium și servicii de excepție.",
      highlight: "Meniu degustare & selecție de vinuri"
    }
  ];

  return (
    <section id={id} className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#D4AF37]/5 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-foreground"
            style={{
              fontFamily: getFontFamily('display')
            }}
          >
            Experiența Lusso
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#B2935B] mx-auto rounded-full mb-8" />
          
          {/* Philosophy Quote */}
          <Card className="backdrop-blur-lg bg-card/60 border-[#D4AF37]/20 max-w-4xl mx-auto">
            <CardContent className="p-8 md:p-12 text-center">
              <blockquote 
                className="text-2xl sm:text-3xl md:text-4xl font-light italic text-[#D4AF37] mb-6"
                style={{
                  fontFamily: getFontFamily('display')
                }}
              >
                &ldquo;Mâncarea este savurată, nu doar consumată&rdquo;
              </blockquote>
              <p 
                className="text-lg text-foreground/80 leading-relaxed"
                style={{
                  fontFamily: getFontFamily('sans')
                }}
              >
                La Lusso, fiecare masă este o experiență senzorială completă. 
                Credem că momentele petrecute la masă sunt cele care ne definesc 
                și ne conectează cu cei dragi.
              </p>
            </CardContent>
          </Card>
        </div>
        
        {/* Experience Timeline */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {experiences.map((experience, index) => (
            <Card 
              key={index}
              className="backdrop-blur-lg bg-card/60 border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-500 group hover:scale-105"
            >
              <CardContent className="p-8 text-center">
                <div 
                  className="text-3xl font-bold text-[#D4AF37] mb-2 group-hover:text-[#FFD700] transition-colors duration-300"
                  style={{
                    fontFamily: getFontFamily('display')
                  }}
                >
                  {experience.title}
                </div>
                <div 
                  className="text-lg text-foreground/60 mb-4 font-mono"
                  style={{
                    fontFamily: getFontFamily('mono')
                  }}
                >
                  {experience.time}
                </div>
                <p 
                  className="text-foreground/80 leading-relaxed mb-4"
                  style={{
                    fontFamily: getFontFamily('sans')
                  }}
                >
                  {experience.description}
                </p>
                <div className="border-t border-[#D4AF37]/20 pt-4">
                  <p 
                    className="text-sm text-[#D4AF37] font-semibold"
                    style={{
                      fontFamily: getFontFamily('sans')
                    }}
                  >
                    {experience.highlight}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Ambiance & Service */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Ambiance */}
          <Card className="backdrop-blur-lg bg-card/60 border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-500">
            <CardContent className="p-8">
              <h3 
                className="text-2xl font-semibold mb-6 text-[#D4AF37]"
                style={{
                  fontFamily: getFontFamily('display')
                }}
              >
                Rafinament & Confort
              </h3>
              <div 
                className="space-y-4 text-foreground/90 leading-relaxed"
                style={{
                  fontFamily: getFontFamily('sans')
                }}
              >
                <p>
                  Atmosfera noastră îmbină eleganța modernă cu căldura ospitalității 
                  românești. Fiecare detaliu, de la iluminatul ambient până la 
                  muzica selectată cu grijă, contribuie la crearea unei experiențe 
                  de neuitat.
                </p>
                <p>
                  Spațiul nostru a fost conceput pentru a oferi intimitate și confort, 
                  fie că veniți pentru o cină romantică, o întâlnire de afaceri sau 
                  o celebrare specială cu familia și prietenii.
                </p>
              </div>
            </CardContent>
          </Card>
          
          {/* Service Excellence */}
          <Card className="backdrop-blur-lg bg-card/60 border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-500">
            <CardContent className="p-8">
              <h3 
                className="text-2xl font-semibold mb-6 text-[#D4AF37]"
                style={{
                  fontFamily: getFontFamily('display')
                }}
              >
                Servicii de Excepție
              </h3>
              <div 
                className="space-y-4 text-foreground/90 leading-relaxed"
                style={{
                  fontFamily: getFontFamily('sans')
                }}
              >
                <p>
                  Echipa noastră de profesioniști este dedicată să vă ofere o 
                  experiență impecabilă. De la recomandările personalizate de vinuri 
                  până la atenția la cele mai mici detalii, ne asigurăm că fiecare 
                  vizită depășește așteptările.
                </p>
                <p>
                  Organizăm și evenimente private, oferind servicii complete pentru 
                  celebrări speciale, întâlniri de afaceri și momente importante 
                  din viața dumneavoastră.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="backdrop-blur-lg bg-card/40 border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-500 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h4 
                className="text-2xl font-semibold mb-4 text-[#D4AF37]"
                style={{
                  fontFamily: getFontFamily('display')
                }}
              >
                Vă așteptăm la Lusso
              </h4>
              <p 
                className="text-lg text-foreground/90 leading-relaxed"
                style={{
                  fontFamily: getFontFamily('sans')
                }}
              >
                Descoperiți de ce Lusso a devenit destinația preferată pentru 
                cei care apreciază calitatea, eleganța și atenția la detalii. 
                Rezervați-vă masa și lăsați-ne să vă oferim o experiență de neuitat.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}