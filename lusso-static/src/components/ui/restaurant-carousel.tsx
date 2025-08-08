'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * LUSSO RESTAURANT CAROUSEL
 * 
 * Elegant photo carousel component showcasing restaurant ambiance
 * with smooth transitions and luxury styling that matches the brand.
 */

interface RestaurantCarouselProps {
  images?: string[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
}

const defaultImages = [
  './_Q2A3630.jpeg',
  './IMG_9525 (1).jpeg',
  './_Q2A3634.jpeg',
  './IMG_9498.PNG',
  './IMG_9499.jpeg',
  './IMG_9584.jpeg'
];

export function RestaurantCarousel({
  images = defaultImages,
  autoPlay = true,
  autoPlayInterval = 5000,
  className = ''
}: RestaurantCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, isHovered, images.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div 
      className={`relative w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Image Container */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image}
              alt={`Restaurant photo ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="
          absolute left-4 top-1/2 -translate-y-1/2 z-10
          w-10 h-10 rounded-full
          bg-black/20 hover:bg-black/40
          backdrop-blur-sm
          border border-white/20
          flex items-center justify-center
          transition-all duration-300
          opacity-0 group-hover:opacity-100
          hover:scale-110
        "
        aria-label="Previous image"
      >
        <ChevronLeft className="w-5 h-5 text-white" />
      </button>

      <button
        onClick={goToNext}
        className="
          absolute right-4 top-1/2 -translate-y-1/2 z-10
          w-10 h-10 rounded-full
          bg-black/20 hover:bg-black/40
          backdrop-blur-sm
          border border-white/20
          flex items-center justify-center
          transition-all duration-300
          opacity-0 group-hover:opacity-100
          hover:scale-110
        "
        aria-label="Next image"
      >
        <ChevronRight className="w-5 h-5 text-white" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
        <div className="flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`
                w-2 h-2 rounded-full transition-all duration-300
                ${index === currentIndex 
                  ? 'bg-[#D4AF37] scale-125' 
                  : 'bg-white/50 hover:bg-white/80'
                }
              `}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Glass Morphism Border */}
      <div className="absolute inset-0 rounded-xl border border-white/10 pointer-events-none" />
    </div>
  );
}