"use server";

import { redirect } from 'next/navigation';

export async function submitContactForm(formData: FormData) {
  // Extract form data
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  // In a real app, you would:
  // - Validate the data
  // - Save to database
  // - Send email

  // For now, just log
  console.log('Contact form submitted:', { name, email, message });
  
  // Redirect back to the page with a success message
  redirect('/?message=success');
}

export async function addToCart(productId: string): Promise<{ success: boolean; message: string; }> {
  // In a real app, you would:
  // - Add item to user's cart in database
  // - Update cart state
  // - Return updated cart

  console.log('Added to cart:', productId);
  
  return { success: true, message: 'Product added to cart!' };
}