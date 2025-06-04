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

export default function RoomCard({ room, resort, className = '' }: RoomCardProps) {
  return (
    <div className={`bg-zen-vanilla rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group ${className}`}>
      <div className="aspect-video relative overflow-hidden">
        <Image
          src={`https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop`}
          alt={room.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-zen-brown mb-2">
          {room.name}
        </h3>
        <p className="text-zen-brown opacity-80 text-sm mb-4 line-clamp-2">
          {room.description}
        </p>
        
        {/* Room Specs */}
        <div className="flex items-center justify-between text-sm text-zen-brown mb-4">
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-1 text-zen-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {room.capacity} guests
          </span>
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-1 text-zen-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Breakfast Included
          </span>
        </div>

        {/* Amenities Preview */}
        <div className="flex flex-wrap gap-1 mb-4">
          {room.amenities.slice(0, 3).map((amenity, index) => (
            <span key={index} className="text-xs bg-zen-green bg-opacity-20 text-zen-brown px-2 py-1 rounded">
              {amenity}
            </span>
          ))}
          {room.amenities.length > 3 && (
            <span className="text-xs text-zen-brown opacity-60">
              +{room.amenities.length - 3} more
            </span>
          )}
        </div>

        {/* Price and Actions */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-2xl font-bold text-zen-leaf">
              ฿{room.price.toLocaleString()}
            </span>
            <span className="text-sm text-zen-brown opacity-70 ml-1">
              /night
            </span>
            <div className="text-xs text-zen-leaf font-medium">
              Breakfast Included
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <CTAButton href={resort ? `/${resort}/rooms/${room.id}` : `/rooms/${room.id}`} className="flex-1" size="sm">
            View Details
          </CTAButton>
          <BookingButtons resort={resort} roomId={room.id} size="sm" layout="horizontal" className="flex-1" />
        </div>
      </div>
    </div>
  );
} 