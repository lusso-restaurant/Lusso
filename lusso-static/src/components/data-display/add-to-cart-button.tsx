"use client";

import { Button } from '../ui/button';
import { addToCart } from '@/lib/actions';

interface AddToCartButtonProps {
  productId: string;
}

export function AddToCartButton({ productId }: AddToCartButtonProps) {
  const handleAddToCart = async () => {
    const result = await addToCart(productId);
    if (result.success) {
      alert(result.message); // In a real app, use a toast notification
    }
  };

  return (
    <Button 
      className="w-full" 
      onClick={handleAddToCart}
    >
      Add to Cart
    </Button>
  );
}