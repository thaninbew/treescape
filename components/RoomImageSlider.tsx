'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface RoomImageSliderProps {
  roomId: string;
  roomName: string;
}

// Mapping room IDs to their folder names
const roomFolderMap: { [key: string]: string } = {
  'deluxe-room': 'deluxe',
  'pool-access-room': 'pool_access',
  'luxury-pool-access-room': 'luxury_pool_access',
  'family-room': 'family_room',
};

// Helper function to get images for a room
const getRoomImages = (roomId: string): string[] => {
  const folderName = roomFolderMap[roomId];
  if (!folderName) return [];
  
  // Define the exact images available for each room based on the actual file structure
  const roomImages: { [key: string]: string[] } = {
    'deluxe': [
      '/images/deluxe/1.jpg',
      '/images/deluxe/2.jpg',
      '/images/deluxe/3.jpg',
      '/images/deluxe/4.jpg',
      '/images/deluxe/5.jpg',
      '/images/deluxe/6.jpg',
      '/images/deluxe/7.jpg'
    ],
    'pool_access': [
      '/images/pool_access/1.jpg',
      '/images/pool_access/2.jpg',
      '/images/pool_access/3.JPG',
      '/images/pool_access/4.jpg',
      '/images/pool_access/5.JPG'
    ],
    'luxury_pool_access': [
      '/images/luxury_pool_access/1.jpg'
    ],
    'family_room': [
      '/images/family_room/1.jpg',
      '/images/family_room/2.jpg',
      '/images/family_room/3.jpg',
      '/images/family_room/4.jpg',
      '/images/family_room/5.jpg',
      '/images/family_room/6.jpg',
      '/images/family_room/7.jpg',
      '/images/family_room/8.jpg',
      '/images/family_room/9.jpg'
    ],
  };
  
  return roomImages[folderName] || [];
};

export default function RoomImageSlider({ roomId, roomName }: RoomImageSliderProps) {
  const images = getRoomImages(roomId);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  
  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying || images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every 4 seconds
    
    return () => clearInterval(interval);
  }, [isPlaying, images.length]);
  
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };
  
  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };
  
  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };
  
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };
  
  if (images.length === 0) {
    return (
      <div className="aspect-video bg-zen-coffee rounded-lg flex items-center justify-center">
        <p className="text-zen-brown opacity-70">No images available</p>
      </div>
    );
  }
  
  return (
    <div className="space-y-4">
      {/* Main Image Slider */}
      <div className="relative aspect-video rounded-lg overflow-hidden group">
        <Image
          src={images[currentIndex]}
          alt={`${roomName} - Image ${currentIndex + 1}`}
          fill
          className="object-cover transition-opacity duration-500"
          priority={currentIndex === 0}
        />
        
        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-opacity-70"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-opacity-70"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        {/* Play/Pause Button */}
        <button
          onClick={togglePlayPause}
          className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-opacity-70"
        >
          {isPlaying ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
        
        {/* Image Counter */}
        <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
      
      {/* Thumbnail Strip */}
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
              index === currentIndex 
                ? 'border-zen-green shadow-lg' 
                : 'border-transparent hover:border-zen-brown opacity-70 hover:opacity-100'
            }`}
          >
            <Image
              src={image}
              alt={`${roomName} thumbnail ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
} 