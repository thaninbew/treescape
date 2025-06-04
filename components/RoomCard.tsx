'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CTAButton from './CTAButton';
import BookingButtons from './BookingButtons';
import Price from './Price';

interface RoomCardProps {
  room: {
    id: string;
    name: string;
    description: string;
    image: string;
    price: number;
    capacity: number;
    amenities: string[];
    notes?: string[];
  };
  resort?: string;
  className?: string;
}

// Helper function to get the preview image for a room
const getRoomPreviewImage = (roomId: string): string => {
  const roomImageMap: { [key: string]: string } = {
    'deluxe-room': '/images/deluxe/1.jpg',
    'pool-access-room': '/images/pool_access/1.jpg',
    'luxury-pool-access-room': '/images/luxury_pool_access/1.jpg',
    'family-room': '/images/family_room/1.jpg',
  };
  
  return roomImageMap[roomId] || '/images/deluxe/1.jpg';
};

// Helper function to get room area
const getRoomArea = (roomId: string): string => {
  const areaMap: { [key: string]: string } = {
    'deluxe-room': '50 m²',
    'pool-access-room': '35-40 m²',
    'luxury-pool-access-room': '50 m²',
    'family-room': '45-61 m²',
  };
  
  return areaMap[roomId] || '35-50 m²';
};

// Helper function to get consistent room descriptions
const getRoomDescription = (roomId: string, originalDescription: string): string => {
  const descriptions: { [key: string]: string } = {
    'deluxe-room': 'Spacious deluxe accommodation featuring modern amenities, comfortable furnishings, and beautiful views',
    'pool-access-room': 'Convenient and comfortable room with direct access to our stunning swimming pool area.',
    'luxury-pool-access-room': 'All rooms are near the pool with views of the green moss garden and the cozy trees.',
    'family-room': 'Spacious room with high ceilings, airy and comfortable atmosphere, featuring a mezzanine floor that increases living space.'
  };
  
  return descriptions[roomId] || originalDescription;
};

// Tooltip component
const Tooltip = ({ children, content }: { children: React.ReactNode; content: string }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-zen-brown text-zen-vanilla text-xs rounded-lg shadow-lg whitespace-nowrap max-w-screen z-10">
          {content}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-zen-brown"></div>
        </div>
      )}
    </div>
  );
};

export default function RoomCard({ room, resort, className = '' }: RoomCardProps) {
  const roomDetailsUrl = resort ? `/${resort}/rooms/${room.id}` : `/rooms/${room.id}`;
  const [showAllAmenities, setShowAllAmenities] = useState(false);
  
  const getBedTypeTooltip = (roomId: string): string => {
    const tooltips: { [key: string]: string } = {
      'deluxe-room': 'Twin or Quad bed configuration available - please specify when booking',
      'pool-access-room': 'Choose between Double or Twin bed setup based on your preference',
      'luxury-pool-access-room': 'Twin, Triple, or Quad bed options - advance reservation required',
      'family-room': 'Double, Triple, or Quad bed configurations - perfect for families'
    };
    return tooltips[roomId] || 'Premium bed configuration available';
  };
  
  return (
    <div className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group border border-zen-beaver border-opacity-20 relative ${className}`}>
      {/* Room Image - Clickable */}
      <Link href={roomDetailsUrl} className="block">
        <div className="aspect-video relative overflow-hidden cursor-pointer rounded-t-xl">
          <Image
            src={getRoomPreviewImage(room.id)}
            alt={room.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            priority
          />
          {/* Price Badge */}
          <div className="absolute top-4 right-4 bg-zen-green text-white px-3 py-1 rounded-full text-sm font-semibold">
            <Price amount={room.price} />
          </div>
          {/* Breakfast Badge */}
          <div className="absolute bottom-4 left-4 bg-zen-brown bg-opacity-90 text-zen-vanilla px-3 py-1 rounded-full text-xs font-medium">
            ✓ Breakfast Included
          </div>
        </div>
      </Link>

      <div className="p-6">
        {/* Room Title - Clickable */}
        <Link href={roomDetailsUrl}>
          <h3 className="text-xl font-bold text-zen-brown mb-2 group-hover:text-zen-green transition-colors duration-300 cursor-pointer hover:text-zen-green">
            {room.name}
          </h3>
        </Link>
        
        {/* Room Description */}
        <p className="text-zen-brown opacity-80 text-sm mb-4 line-clamp-3 leading-relaxed">
          {getRoomDescription(room.id, room.description)}
        </p>
        
        {/* Room Features */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <Tooltip content={`Maximum occupancy: ${room.capacity} ${room.capacity === 1 ? 'person' : 'people'}. Children under 7 stay free using existing beds.`}>
            <div className="flex items-center cursor-help">
              <svg className="w-4 h-4 mr-2 text-zen-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 515.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="text-xs text-zen-brown">
                {room.capacity} guests
              </span>
            </div>
          </Tooltip>
          
          <Tooltip content={`Room size: ${getRoomArea(room.id)}. Spacious and comfortable for your stay.`}>
            <div className="flex items-center cursor-help">
              <svg className="w-4 h-4 mr-2 text-zen-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4a1 1 0 011-1h4.586a1 1 0 01.707.293l7 7a1 1 0 010 1.414l-4.586 4.586a1 1 0 01-1.414 0l-7-7A1 1 0 014 9.586V8z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 6h.01" />
              </svg>
              <span className="text-xs text-zen-brown">
                {getRoomArea(room.id)}
              </span>
            </div>
          </Tooltip>
          
          <Tooltip content={getBedTypeTooltip(room.id)}>
            <div className="flex items-center cursor-help">
              <svg className="w-4 h-4 mr-2 text-zen-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-xs text-zen-brown">
                {room.id === 'deluxe-room' ? 'Twin/Quad' :
                 room.id === 'pool-access-room' ? 'Double/Twin' :
                 room.id === 'luxury-pool-access-room' ? 'Twin/Triple' :
                 room.id === 'family-room' ? 'Double/Quad' :
                 'Premium Bed'}
              </span>
            </div>
          </Tooltip>
          
          <Tooltip content="All rooms are non-smoking for the comfort and health of all guests.">
            <div className="flex items-center cursor-help">
              <svg className="w-4 h-4 mr-2 text-zen-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a4 4 0 118 0v4m-8 0h8m-8 0H6a2 2 0 00-2 2v6a2 2 0 002 2h12a2 2 0 002-2V9a2 2 0 00-2-2h-2m-8 0V7" />
              </svg>
              <span className="text-xs text-zen-brown">
                Non-smoking
              </span>
            </div>
          </Tooltip>
        </div>

        {/* Key Amenities */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {room.amenities.slice(0, showAllAmenities ? room.amenities.length : 3).map((amenity, index) => (
              <span key={index} className="text-xs bg-zen-green bg-opacity-15 text-zen-brown px-2 py-1 rounded-full border border-zen-green border-opacity-30">
                {amenity}
              </span>
            ))}
            {room.amenities.length > 3 && (
              <button
                onClick={() => setShowAllAmenities(!showAllAmenities)}
                className="text-xs text-zen-brown opacity-60 px-2 py-1 hover:opacity-100 transition-opacity cursor-pointer underline"
              >
                {showAllAmenities ? 'Show less' : `+${room.amenities.length - 3} more`}
              </button>
            )}
          </div>
        </div>

        {/* Special Features */}
        <div className="mb-4 p-3 bg-zen-coffee rounded-lg">
          <div className="flex items-center justify-between text-xs">
            <Tooltip content="Children under 7 years old stay free when using existing beds.">
              <div className="flex items-center cursor-help">
                <svg className="w-3 h-3 mr-1 text-zen-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span className="text-zen-brown">Kids under 7 free</span>
              </div>
            </Tooltip>
            <Tooltip content="Complimentary breakfast included for 2 people daily.">
              <div className="flex items-center cursor-help">
                <svg className="w-3 h-3 mr-1 text-zen-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-zen-brown">Breakfast for 2</span>
              </div>
            </Tooltip>
          </div>
        </div>

        {/* Price Display */}
        <div className="mb-4 text-center">
          <div className="text-2xl font-bold text-zen-leaf">
            <Price amount={room.price} />
          </div>
          <div className="text-sm text-zen-brown opacity-70">
            per night
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2">
          <CTAButton 
            href={roomDetailsUrl} 
            className="w-full" 
            size="sm"
          >
            View Details & Photos
          </CTAButton>
          <BookingButtons 
            resort={resort} 
            roomId={room.id} 
            size="sm" 
            layout="horizontal" 
            className="w-full" 
          />
        </div>
      </div>
    </div>
  );
} 