import Image from 'next/image';
import CTAButton from './CTAButton';

interface Room {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  capacity: number;
  amenities: string[];
}

interface RoomCardProps {
  room: Room;
  resort?: string;
}

export default function RoomCard({ room, resort }: RoomCardProps) {
  const bookingUrl = resort 
    ? `/${resort}/contact?room=${room.id}`
    : `#book-${room.id}`;
    
  const detailsUrl = resort 
    ? `/${resort}/rooms/${room.id}`
    : `#details-${room.id}`;
    
  return (
    <div className="bg-zen-vanilla rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Room Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={room.image}
          alt={room.name}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
        {/* Price Badge */}
        <div className="absolute top-4 right-4 bg-zen-brown text-zen-coffee px-3 py-1 rounded-full font-semibold">
          ${room.price}/night
        </div>
      </div>
      
      {/* Room Details */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-zen-brown">{room.name}</h3>
          <div className="flex items-center text-zen-brown">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span className="text-sm">{room.capacity} guests</span>
          </div>
        </div>
        
        <p className="text-zen-brown opacity-80 mb-4 leading-relaxed">
          {room.description}
        </p>
        
        {/* Amenities */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-zen-brown mb-2">Amenities:</h4>
          <div className="flex flex-wrap gap-2">
            {room.amenities.slice(0, 4).map((amenity, index) => (
              <span 
                key={index}
                className="text-xs bg-zen-coffee text-zen-brown px-2 py-1 rounded-full"
              >
                {amenity}
              </span>
            ))}
            {room.amenities.length > 4 && (
              <span className="text-xs text-zen-brown opacity-60">
                +{room.amenities.length - 4} more
              </span>
            )}
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-3">
          <CTAButton href={detailsUrl} variant="secondary" className="flex-1">
            View Details
          </CTAButton>
          <CTAButton href={bookingUrl} className="flex-1">
            Book Now
          </CTAButton>
        </div>
      </div>
    </div>
  );
} 