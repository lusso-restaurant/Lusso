import { Metadata } from 'next';
import { MenuPage } from '@/components/restaurant';

export const metadata: Metadata = {
  title: 'Meniu | Lusso Restaurant',
  description: 'Descoperă meniul nostru rafinat cu preparate de excepție și ingrediente de cea mai înaltă calitate. Experiență culinară de lux la Lusso Restaurant.',
  keywords: 'meniu, restaurant, lusso, preparate, pizza, paste, grătar, băuturi, vin, cocktailuri',
  openGraph: {
    title: 'Meniu | Lusso Restaurant',
    description: 'Descoperă meniul nostru rafinat cu preparate de excepție și ingrediente de cea mai înaltă calitate.',
    type: 'website',
  },
};

export default function MeniuPage() {
  return <MenuPage />;
}