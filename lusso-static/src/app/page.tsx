// Example of how to use your modular components
import { Header } from '@/components/layout/header';
import { ProductCard } from '@/components/data-display/product-card';
import { ContactForm } from '@/components/forms/contact-form';

export default function Home() {
  const sampleProduct = {
    id: '1',
    name: 'Luxury Watch',
    description: 'Premium timepiece with elegant design',
    price: 299.99
  };

  return (
    <div className="min-h-screen bg-background">
      <Header title="Lusso Store" />
      
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-8">Welcome to Your Modular Components Demo</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-xl font-semibold mb-4">Product Example</h3>
            <ProductCard product={sampleProduct} />
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Form Example</h3>
            <ContactForm />
          </div>
        </div>
      </main>
    </div>
  );
}
