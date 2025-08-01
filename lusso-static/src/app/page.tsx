import { AuroraBackground } from '@/components/ui/aurora-background';
import {
  HeroSection,
  StorySection,
  CulinarySection,
  ExperienceSection,
  ContactSection,
  FooterSection
} from '@/components/sections';

export default function HomePage() {
  return (
    <>
      <AuroraBackground />
      <div className="relative z-10">
        <HeroSection />
        <StorySection />
        <CulinarySection />
        <ExperienceSection />
        <ContactSection />
        <FooterSection />
      </div>
    </>
  );
}