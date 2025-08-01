import { getFontFamily } from '@/lib/design-system';

export function FooterSection() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Contact",
      links: [
        { label: "Telefon: +40 XXX XXX XXX", href: "tel:+40XXXXXXXXX" },
        { label: "Eforie Nord, România", href: null },
        { label: "Program: 07:00 - 23:00", href: null }
      ]
    },
    {
      title: "Servicii",
      links: [
        { label: "Micul Dejun", href: null },
        { label: "Prânz & Cină", href: null },
        { label: "Evenimente Private", href: null },
        { label: "Rezervări Grup", href: null }
      ]
    },
    {
      title: "Specialități",
      links: [
        { label: "Bucătărie Mediteraneană", href: null },
        { label: "Cuptorul Josper", href: null },
        { label: "Selecție Vinuri", href: null },
        { label: "Cafea Nespresso", href: null }
      ]
    }
  ];

  return (
    <footer className="relative py-16 px-4 sm:px-6 lg:px-8 mt-20">
      {/* Background with liquid glass effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background/90 backdrop-blur-sm border-t border-[#D4AF37]/20" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 
              className="text-3xl font-bold text-[#D4AF37] mb-4"
              style={{
                fontFamily: getFontFamily('display')
              }}
            >
              LUSSO
            </h3>
            <p 
              className="text-foreground/80 leading-relaxed mb-6"
              style={{
                fontFamily: getFontFamily('sans')
              }}
            >
              Experiența culinară completă în inima Eforie Nord. 
              Gust, estetică și atmosferă într-un singur loc.
            </p>
            
            {/* Tagline */}
            <blockquote 
              className="text-lg italic text-[#D4AF37] border-l-2 border-[#D4AF37] pl-4"
              style={{
                fontFamily: getFontFamily('display')
              }}
            >
              &ldquo;Mâncarea este savurată, nu doar consumată&rdquo;
            </blockquote>
          </div>
          
          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 
                className="text-lg font-semibold text-[#D4AF37] mb-4"
                style={{
                  fontFamily: getFontFamily('display')
                }}
              >
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.href ? (
                      <a 
                        href={link.href}
                        className="text-foreground/70 hover:text-[#D4AF37] transition-colors duration-300"
                        style={{
                          fontFamily: getFontFamily('sans')
                        }}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <span 
                        className="text-foreground/70"
                        style={{
                          fontFamily: getFontFamily('sans')
                        }}
                      >
                        {link.label}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Separator */}
        <div className="border-t border-[#D4AF37]/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div 
              className="text-foreground/60 text-sm"
              style={{
                fontFamily: getFontFamily('sans')
              }}
            >
              © {currentYear} Lusso Restaurant. Toate drepturile rezervate.
            </div>
            
            {/* Additional Info */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
              <span 
                className="text-foreground/60"
                style={{
                  fontFamily: getFontFamily('sans')
                }}
              >
                Eforie Nord, România
              </span>
              <span 
                className="text-[#D4AF37]"
                style={{
                  fontFamily: getFontFamily('sans')
                }}
              >
                Bucătărie Mediteraneană Premium
              </span>
            </div>
          </div>
        </div>
        
        {/* Bottom Brand Mark */}
        <div className="text-center mt-8 pt-8 border-t border-[#D4AF37]/10">
          <div 
            className="text-2xl font-bold text-[#D4AF37]/60"
            style={{
              fontFamily: getFontFamily('display')
            }}
          >
            L
          </div>
          <div className="w-8 h-1 bg-gradient-to-r from-[#D4AF37] to-[#B2935B] mx-auto rounded-full mt-2" />
        </div>
      </div>
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#D4AF37] rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-[#B2935B] rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#D4AF37] rounded-full blur-3xl" />
      </div>
    </footer>
  );
}