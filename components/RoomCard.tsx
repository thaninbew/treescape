import Image from 'next/image';
import CTAButton from './CTAButton';
import BookingButtons from './BookingButtons';

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

export default function RoomCard({ room, resort, className = '' }: RoomCardProps) {
  return (
    <div className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-zen-beaver border-opacity-20 ${className}`}>
      {/* Room Image */}
      <div className="aspect-video relative overflow-hidden">
        <Image
          src={getRoomPreviewImage(room.id)}
          alt={room.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          priority
        />
        {/* Price Badge */}
        <div className="absolute top-4 right-4 bg-zen-green text-white px-3 py-1 rounded-full text-sm font-semibold">
          ฿{room.price.toLocaleString()}
        </div>
        {/* Breakfast Badge */}
        <div className="absolute bottom-4 left-4 bg-zen-brown bg-opacity-90 text-zen-vanilla px-3 py-1 rounded-full text-xs font-medium">
          ✓ Breakfast Included
        </div>
      </div>

      <div className="p-6">
        {/* Room Title */}
        <h3 className="text-xl font-bold text-zen-brown mb-2 group-hover:text-zen-green transition-colors duration-300">
          {room.name}
        </h3>
        
        {/* Room Description */}
        <p className="text-zen-brown opacity-80 text-sm mb-4 line-clamp-2 leading-relaxed">
          {room.description}
        </p>
        
        {/* Room Features */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-2 text-zen-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 515.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="text-xs text-zen-brown">
              {room.capacity} guests
            </span>
          </div>
          
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-2 text-zen-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4a1 1 0 011-1h4.586a1 1 0 01.707.293l7 7a1 1 0 010 1.414l-4.586 4.586a1 1 0 01-1.414 0l-7-7A1 1 0 014 9.586V8z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 6h.01" />
            </svg>
            <span className="text-xs text-zen-brown">
              {getRoomArea(room.id)}
            </span>
          </div>
          
          <div className="flex items-center">
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
          
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-2 text-zen-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a4 4 0 118 0v4m-8 0h8m-8 0H6a2 2 0 00-2 2v6a2 2 0 002 2h12a2 2 0 002-2V9a2 2 0 00-2-2h-2m-8 0V7" />
            </svg>
            <span className="text-xs text-zen-brown">
              Non-smoking
            </span>
          </div>
        </div>

        {/* Key Amenities */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {room.amenities.slice(0, 3).map((amenity, index) => (
              <span key={index} className="text-xs bg-zen-green bg-opacity-15 text-zen-brown px-2 py-1 rounded-full border border-zen-green border-opacity-30">
                {amenity}
              </span>
            ))}
            {room.amenities.length > 3 && (
              <span className="text-xs text-zen-brown opacity-60 px-2 py-1">
                +{room.amenities.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Special Features */}
        <div className="mb-4 p-3 bg-zen-coffee rounded-lg">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center">
              <svg className="w-3 h-3 mr-1 text-zen-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="text-zen-brown">Kids under 7 free</span>
            </div>
            <div className="flex items-center">
              <svg className="w-3 h-3 mr-1 text-zen-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-zen-brown">Breakfast for 2</span>
            </div>
          </div>
        </div>

        {/* Price Display */}
        <div className="mb-4 text-center">
          <div className="text-2xl font-bold text-zen-green">
            ฿{room.price.toLocaleString()}
          </div>
          <div className="text-sm text-zen-brown opacity-70">
            per night
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2">
          <CTAButton 
            href={resort ? `/${resort}/rooms/${room.id}` : `/rooms/${room.id}`} 
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