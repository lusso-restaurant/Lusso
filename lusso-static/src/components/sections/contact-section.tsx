'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getFontFamily } from '@/lib/design-system';

interface ContactSectionProps {
  id?: string;
}

export function ContactSection({ id }: ContactSectionProps) {
  const contactInfo = [
    {
      title: "Telefon",
      value: "+40 730 629 628",
      description: "Apelați pentru rezervări",
      icon: "📞",
      action: "tel:+40730629628"
    },
    {
      title: "Locație",
      value: "Eforie Nord",
      description: "Litoralul Românesc",
      icon: "📍",
      action: "https://maps.app.goo.gl/kwd3FCnPhyqNa151A"
    },
    {
      title: "Program",
      value: "09:00 - 00:00",
      description: "Zilnic",
      icon: "🕐",
      action: null
    }
  ];

  const businessHours = [
    { day: "Luni - Duminică", hours: "09:00 - 00:00" },
    { day: "Micul dejun", hours: "09:00 - 11:00" },
    { day: "Prânz", hours: "12:00 - 16:00" },
    { day: "Cină", hours: "18:00 - 00:00" }
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
            Contact & Rezervări
          </h2>
          <p 
            className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed"
            style={{
              fontFamily: getFontFamily('sans')
            }}
          >
            Suntem aici pentru a vă oferi o experiență culinară de excepție. 
            Contactați-ne pentru rezervări sau informații suplimentare.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#B2935B] mx-auto rounded-full mt-6" />
        </div>
        
        {/* Contact Cards */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <Card 
              key={index}
              className={`backdrop-blur-lg bg-card/60 border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-500 group hover:scale-105 ${
                info.action && info.title === 'Locație' ? 'cursor-pointer' : ''
              }`}
              onClick={info.action && info.title === 'Locație' ? () => window.open(info.action!, '_blank') : undefined}
            >
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {info.icon}
                </div>
                <CardTitle 
                  className="text-xl text-[#D4AF37] group-hover:text-[#FFD700] transition-colors duration-300"
                  style={{
                    fontFamily: getFontFamily('display')
                  }}
                >
                  {info.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 text-center">
                <div 
                  className="text-lg font-semibold text-foreground mb-2"
                  style={{
                    fontFamily: getFontFamily('sans')
                  }}
                >
                  {info.value}
                </div>
                <p 
                  className="text-foreground/60 text-sm"
                  style={{
                    fontFamily: getFontFamily('sans')
                  }}
                >
                  {info.description}
                </p>
                {info.action && info.title === 'Telefon' && (
                  <div className="mt-4">
                    <Button 
                      size="sm"
                      className="bg-[#D4AF37] hover:bg-[#FFD700] text-black"
                      onClick={() => window.open(info.action!, '_self')}
                    >
                      Apelează
                    </Button>
                  </div>
                )}
                {info.action && info.title === 'Locație' && (
                  <div className="mt-4">
                    <Button 
                      size="sm"
                      className="bg-[#D4AF37] hover:bg-[#FFD700] text-black"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(info.action!, '_blank');
                      }}
                    >
                      Vezi pe Hartă
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Main Contact Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Reservation CTA */}
          <Card className="backdrop-blur-lg bg-card/60 border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-500">
            <CardContent className="p-8 text-center">
              <h3 
                className="text-3xl font-bold mb-6 text-[#D4AF37]"
                style={{
                  fontFamily: getFontFamily('display')
                }}
              >
                Rezervă o Masă
              </h3>
              <p 
                className="text-lg text-foreground/90 leading-relaxed mb-8"
                style={{
                  fontFamily: getFontFamily('sans')
                }}
              >
                Pentru a vă asigura o experiență perfectă, vă recomandăm să 
                rezervați în avans. Echipa noastră vă va ajuta să alegeți 
                momentul ideal pentru vizita dumneavoastră.
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
                  Disponibili zilnic pentru rezervări
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
                Rezervă Acum
              </Button>
            </CardContent>
          </Card>
          
          {/* Business Hours */}
          <Card className="backdrop-blur-lg bg-card/60 border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-500">
            <CardHeader>
              <CardTitle 
                className="text-2xl text-[#D4AF37] text-center"
                style={{
                  fontFamily: getFontFamily('display')
                }}
              >
                Program de Funcționare
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {businessHours.map((schedule, index) => (
                  <div 
                    key={index}
                    className="flex justify-between items-center py-3 border-b border-[#D4AF37]/10 last:border-b-0"
                  >
                    <span 
                      className="text-foreground/90 font-medium"
                      style={{
                        fontFamily: getFontFamily('sans')
                      }}
                    >
                      {schedule.day}
                    </span>
                    <span 
                      className="text-[#D4AF37] font-semibold"
                      style={{
                        fontFamily: getFontFamily('mono')
                      }}
                    >
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-[#D4AF37]/10 rounded-lg border border-[#D4AF37]/20">
                <p 
                  className="text-sm text-foreground/80 text-center"
                  style={{
                    fontFamily: getFontFamily('sans')
                  }}
                >
                  <strong className="text-[#D4AF37]">Notă:</strong> Pentru evenimente 
                  speciale și rezervări de grup, vă rugăm să ne contactați în avans 
                  pentru a discuta detaliile.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Location & Additional Info */}
        <div className="text-center">
          <Card className="backdrop-blur-lg bg-card/40 border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-500 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h4 
                className="text-2xl font-semibold mb-6 text-[#D4AF37]"
                style={{
                  fontFamily: getFontFamily('display')
                }}
              >
                Vă Așteptăm în Eforie Nord
              </h4>
              <p 
                className="text-lg text-foreground/90 leading-relaxed mb-6"
                style={{
                  fontFamily: getFontFamily('sans')
                }}
              >
                Situat în inima uneia dintre cele mai frumoase destinații de pe 
                litoralul românesc, Lusso vă oferă nu doar o experiență culinară 
                de excepție, ci și o atmosferă de vacanță perfectă.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 text-left">
                <div>
                  <h5 
                    className="font-semibold text-[#D4AF37] mb-2"
                    style={{
                      fontFamily: getFontFamily('sans')
                    }}
                  >
                    Evenimente Private
                  </h5>
                  <p 
                    className="text-foreground/80 text-sm"
                    style={{
                      fontFamily: getFontFamily('sans')
                    }}
                  >
                    Organizăm evenimente speciale, celebrări private și 
                    întâlniri de afaceri în cadrul elegant al restaurantului.
                  </p>
                </div>
                <div>
                  <h5 
                    className="font-semibold text-[#D4AF37] mb-2"
                    style={{
                      fontFamily: getFontFamily('sans')
                    }}
                  >
                    Servicii Complete
                  </h5>
                  <p 
                    className="text-foreground/80 text-sm"
                    style={{
                      fontFamily: getFontFamily('sans')
                    }}
                  >
                    De la micul dejun până la cină, oferim servicii complete 
                    pentru toate momentele zilei, cu atenție la fiecare detaliu.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}