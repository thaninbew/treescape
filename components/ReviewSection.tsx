'use client';

import React, { useState, useEffect } from 'react';

interface Review {
  id: string;
  guest: string;
  rating: number;
  date: string;
  text: string;
}

interface ReviewSectionProps {
  reviews: Review[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export default function ReviewSection({ 
  reviews, 
  autoPlay = true, 
  autoPlayInterval = 5000 
}: ReviewSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || reviews.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      );
    }, autoPlayInterval);
    
    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, reviews.length]);
  
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };
  
  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? reviews.length - 1 : currentIndex - 1);
  };
  
  const goToNext = () => {
    setCurrentIndex(currentIndex === reviews.length - 1 ? 0 : currentIndex + 1);
  };
  
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-zen-green' : 'text-zen-beaver'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };
  
  if (reviews.length === 0) {
    return null;
  }
  
  return (
    <section className="py-16 bg-zen-coffee">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-zen-brown mb-4">
            What Our Guests Say
          </h2>
          <p className="text-zen-brown opacity-80 max-w-2xl mx-auto">
            Read testimonials from our valued guests who have experienced the magic of our resort.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Review Cards */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviews.map((review) => (
                <div key={review.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                    {/* Stars */}
                    <div className="flex justify-center mb-4">
                      {renderStars(review.rating)}
                    </div>
                    
                    {/* Review Text */}
                    <blockquote className="text-lg text-zen-brown mb-6 italic leading-relaxed">
                      &ldquo;{review.text}&rdquo;
                    </blockquote>
                    
                    {/* Guest Info */}
                    <div className="border-t border-zen-vanilla pt-4">
                      <p className="font-semibold text-zen-brown">{review.guest}</p>
                      <p className="text-zen-brown opacity-60 text-sm">{review.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Arrows */}
          {reviews.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-zen-brown text-zen-coffee p-3 rounded-full hover:bg-zen-leaf transition-colors duration-300 shadow-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={goToNext}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-zen-brown text-zen-coffee p-3 rounded-full hover:bg-zen-leaf transition-colors duration-300 shadow-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
          
          {/* Dots Indicator */}
          {reviews.length > 1 && (
            <div className="flex justify-center mt-8 space-x-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentIndex ? 'bg-zen-brown' : 'bg-zen-beaver'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
} 