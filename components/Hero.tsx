'use client';

import { useState, useEffect, useMemo } from 'react';
import CTAButton from './CTAButton';

interface GalleryItem {
  id: string;
  title: string;
  image: string;
  description: string;
}

interface HeroProps {
  image: string;
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaHref?: string;
  height?: 'screen' | 'large' | 'medium';
  gallery?: GalleryItem[];
}

export default function Hero({ 
  image, 
  title, 
  subtitle, 
  ctaText = "Book Now",
  ctaHref = "#",
  height = 'large',
  gallery = []
}: HeroProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Use gallery images if provided, otherwise use the single image
  const images = useMemo(
    () => (gallery.length > 0 ? gallery.map((item) => item.image) : [image]),
    [gallery, image]
  );
  
  // Preload the first image
  useEffect(() => {
    const firstImage = new Image();
    firstImage.onload = () => setImageLoaded(true);
    firstImage.src = images[0];
  }, [images]);
  
  useEffect(() => {
    if (images.length > 1 && imageLoaded) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          (prevIndex + 1) % images.length
        );
      }, 5000); // Change image every 5 seconds
      
      return () => clearInterval(interval);
    }
  }, [images.length, imageLoaded]);
  
  const heightClasses = {
    screen: 'h-screen',
    large: 'h-[70vh]',
    medium: 'h-[50vh]'
  };
  
  const currentImage = images[currentImageIndex];
  
  return (
    <section className={`relative ${heightClasses[height]} flex items-center justify-center overflow-hidden`}>
      {/* Background Image - CSS approach */}
      <div 
        className={`absolute inset-0 bg-cover bg-center brightness-75 transition-all duration-1000 ease-in-out bg-zen-brown ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          backgroundImage: imageLoaded ? `url('${currentImage}')` : 'none'
        }}
      >
      </div>
      
      {/* Loading background */}
      {!imageLoaded && (
        <div className="absolute inset-0 bg-zen-brown"></div>
      )}
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
          {title}
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl mb-8 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <CTAButton href={ctaHref} size="lg" className="shadow-lg">
          {ctaText}
        </CTAButton>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          className="w-6 h-6 text-white opacity-70" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </div>
    </section>
  );
} 