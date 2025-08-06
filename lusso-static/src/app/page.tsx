import { AuroraBackground } from '@/components/ui/aurora-background';
import {
  HeroSection,
  StorySection,
  CulinarySection,
  ExperienceSection,
  OrderSection,
  ContactSection,
  FooterSection
} from '@/components/sections';

export default function HomePage() {
  return (
    <>
      <AuroraBackground />
      <div className="relative z-10">
        <HeroSection />
        <StorySection id="story" />
        <CulinarySection id="culinary" />
        <ExperienceSection id="experience" />
        <OrderSection id="order" />
        <ContactSection id="contact" />
        <FooterSection />
      </div>
    </>
  );
}