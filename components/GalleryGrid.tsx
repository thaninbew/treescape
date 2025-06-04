'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface GalleryItem {
  id: string;
  title: string;
  image: string;
  description: string;
}

interface GalleryGridProps {
  items: GalleryItem[];
  columns?: 2 | 3 | 4;
}

export default function GalleryGrid({ items, columns = 3 }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [lightboxImageLoaded, setLightboxImageLoaded] = useState(false);
  
  const gridClasses = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  };
  
  const openLightbox = (item: GalleryItem) => {
    setSelectedImage(item);
    setLightboxImageLoaded(false);
  };
  
  const closeLightbox = () => {
    setSelectedImage(null);
    setLightboxImageLoaded(false);
  };
  
  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;
    
    const currentIndex = items.findIndex(item => item.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
    } else {
      newIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(items[newIndex]);
    setLightboxImageLoaded(false);
  };
  
  return (
    <>
      {/* Gallery Grid */}
      <div className={`grid ${gridClasses[columns]} gap-4`}>
        {items.map((item) => (
          <div 
            key={item.id}
            className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
            onClick={() => openLightbox(item)}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110 group-hover:brightness-75"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Overlay */}
            <div className="absolute inset-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
              <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-sm opacity-90">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative w-full h-full max-w-6xl flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-zen-green z-20 bg-zen-brown bg-opacity-50 rounded-full p-2 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Navigation Buttons */}
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-zen-green z-20 bg-zen-brown bg-opacity-50 rounded-full p-2 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-zen-green z-20 bg-zen-brown bg-opacity-50 rounded-full p-2 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Image and Info Container */}
            <div className="flex flex-col items-center justify-center max-h-full w-full max-w-5xl">
              {/* Image Container */}
              <div className="relative max-w-full max-h-[calc(100vh-200px)] flex items-center justify-center">
                {/* Loading Indicator */}
                {!lightboxImageLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 border-4 border-zen-brown border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
                
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  width={1200}
                  height={800}
                  className={`max-w-full max-h-full object-contain transition-opacity duration-500 ${
                    lightboxImageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ maxHeight: 'calc(100vh - 200px)' }}
                  quality={90}
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                  onLoad={() => setLightboxImageLoaded(true)}
                />
              </div>
              
              {/* Image Info - Always directly below image */}
              <div className="mt-4 w-full max-w-4xl text-white bg-zen-brown bg-opacity-50 rounded-lg p-4">
                <h3 className="text-xl font-semibold mb-2">{selectedImage.title}</h3>
                <p className="opacity-90">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 