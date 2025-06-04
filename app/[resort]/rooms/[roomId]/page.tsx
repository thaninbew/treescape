import { notFound } from 'next/navigation';
import { resortData as treescapeData } from '@/data/treescape';
import { resortData as mountainviewData } from '@/data/mountainview';
import RoomImageSlider from '@/components/RoomImageSlider';
import RoomCard from '@/components/RoomCard';
import BookingButtons from '@/components/BookingButtons';
import CTAButton from '@/components/CTAButton';

// Map resort names to their data
const resortDataMap = {
  treescape: treescapeData,
  mountainview: mountainviewData,
};

// Type for room with optional notes field
type RoomWithNotes = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  capacity: number;
  amenities: string[];
  notes?: string[];
};

export default function RoomDetailsPage({
  params
}: {
  params: { resort: string; roomId: string }
}) {
  const { resort, roomId } = params;
  const resortData = resortDataMap[resort as keyof typeof resortDataMap];
  
  if (!resortData) {
    notFound();
  }

  const room = resortData.rooms.find(r => r.id === roomId) as RoomWithNotes | undefined;
  
  if (!room) {
    notFound();
  }

  return (
    <main className="py-16 bg-zen-brown">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <nav className="text-sm text-zen-vanilla opacity-70 mb-4">
            <a href={`/${resort}`} className="hover:opacity-100">
              {resortData.name}
            </a>
            {' > '}
            <a href={`/${resort}/rooms`} className="hover:opacity-100">
              Rooms
            </a>
            {' > '}
            <span className="opacity-100">{room.name}</span>
          </nav>
          
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-zen-vanilla mb-2">
                {room.name}
              </h1>
              <p className="text-xl text-zen-vanilla opacity-80">
                {room.description}
              </p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-zen-green">
                ฿{room.price.toLocaleString()}
              </div>
              <div className="text-sm text-zen-vanilla opacity-70">
                per night
              </div>
              <div className="text-xs text-zen-green font-medium mt-1">
                Breakfast Included
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Images and Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Room Image Slider */}
            <RoomImageSlider roomId={room.id} roomName={room.name} />

            {/* Room Details */}
            <section className="bg-zen-vanilla rounded-lg p-8">
              <h2 className="text-2xl font-bold text-zen-brown mb-6">
                Room Details & Policies
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-zen-green mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 515.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="text-zen-brown">
                      <strong>Maximum Occupancy:</strong> {room.capacity} {room.capacity === 1 ? 'person' : 'persons'}
                    </span>
                  </div>
                  
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-zen-green mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-zen-brown">
                      <strong>Bed Type:</strong> {
                        room.id === 'deluxe-room' ? 'Twin, Quad (Please Require for Reservation)' :
                        room.id === 'pool-access-room' ? 'Double or Twin' :
                        room.id === 'luxury-pool-access-room' ? 'Twin, Triple, Quad (Please Require for Reservation)' :
                        room.id === 'family-room' ? 'Double, Triple, Quad (Please Require for Reservation)' :
                        'Premium Bed'
                      }
                    </span>
                  </div>
                  
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-zen-green mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4a1 1 0 011-1h4.586a1 1 0 01.707.293l7 7a1 1 0 010 1.414l-4.586 4.586a1 1 0 01-1.414 0l-7-7A1 1 0 014 9.586V8z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 6h.01" />
                    </svg>
                    <span className="text-zen-brown">
                      <strong>Room Area:</strong> {
                        room.id === 'deluxe-room' ? '50 m²' :
                        room.id === 'pool-access-room' ? '35-40 m²' :
                        room.id === 'luxury-pool-access-room' ? '50 m²' :
                        room.id === 'family-room' ? '45.2-61.2 m²' :
                        '35-50 m²'
                      }
                    </span>
                  </div>
                  
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-zen-green mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-zen-brown">
                      <strong>Breakfast:</strong> Included for 2 persons
                    </span>
                  </div>
                  
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-zen-green mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span className="text-zen-brown">
                      <strong>Children Policy:</strong> Under 7 years stay free (using existing beds)
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-zen-green mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <span className="text-zen-brown">
                      <strong>Extra Bed:</strong> ฿1,000 per bed per night
                    </span>
                  </div>
                  
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-zen-green mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-zen-brown">
                      <strong>Check-in:</strong> 3:00 PM
                    </span>
                  </div>
                  
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-zen-green mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-zen-brown">
                      <strong>Check-out:</strong> 11:00 AM
                    </span>
                  </div>
                  
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-zen-green mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a4 4 0 118 0v4m-8 0h8m-8 0H6a2 2 0 00-2 2v6a2 2 0 002 2h12a2 2 0 002-2V9a2 2 0 00-2-2h-2m-8 0V7" />
                    </svg>
                    <span className="text-zen-brown">
                      <strong>Smoking Policy:</strong> Non-smoking rooms
                    </span>
                  </div>
                  
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-zen-green mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                    <span className="text-zen-brown">
                      <strong>Payment Methods:</strong> Cash, Card, Bank Transfer
                    </span>
                  </div>
                  
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-zen-green mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-zen-brown">
                      <strong>Special Requests:</strong> {
                        room.id === 'deluxe-room' || room.id === 'luxury-pool-access-room' || room.id === 'family-room' 
                          ? 'Bed configuration requires advance reservation'
                          : 'Contact us for special arrangements'
                      }
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Amenities */}
            <section className="bg-zen-coffee rounded-lg p-8">
              <h2 className="text-2xl font-bold text-zen-brown mb-6">
                Room Amenities
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {room.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center">
                    <svg className="w-4 h-4 text-zen-green mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-zen-brown">{amenity}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Booking Focus */}
          <div className="space-y-8">
            {/* Resort Highlights - Above sticky card for better visibility */}
            <div className="bg-zen-vanilla rounded-lg p-6">
              <h3 className="text-xl font-bold text-zen-brown mb-4">
                Why Choose {resortData.name}?
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-zen-green mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                  <span className="text-zen-brown">Swimming Pool & Garden Views</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-zen-green mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-zen-brown">Breakfast Included Daily</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-zen-green mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span className="text-zen-brown">Kids Under 7 Stay Free</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-zen-green mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-zen-brown">24/7 Reception Service</span>
                </div>
              </div>
            </div>

            {/* Contact Info - Above sticky card */}
            <div className="bg-zen-coffee rounded-lg p-6">
              <h3 className="text-xl font-bold text-zen-brown mb-4">
                Questions? We&apos;re Here to Help
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-zen-brown opacity-70">Phone:</span>
                  <span className="text-zen-brown font-medium">{resortData.contact.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zen-brown opacity-70">Email:</span>
                  <span className="text-zen-brown font-medium">{resortData.contact.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zen-brown opacity-70">Reception:</span>
                  <span className="text-zen-brown font-medium">24/7</span>
                </div>
              </div>
              <div className="mt-4">
                <CTAButton href={`/${resort}/contact`} size="sm" className="w-full">
                  Contact Us
                </CTAButton>
              </div>
            </div>

            {/* Main Booking Card - Now sticky */}
            <div className="bg-white rounded-lg shadow-lg p-6 border border-zen-beaver sticky top-8">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-zen-leaf mb-2">
                  ฿{room.price.toLocaleString()}
                </div>
                <div className="text-sm text-zen-brown opacity-70 mb-2">
                  per night
                </div>
                <div className="inline-block bg-zen-green bg-opacity-20 text-white px-3 py-1 rounded-full text-sm font-medium">
                  ✓ Breakfast Included
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="text-center p-4 bg-zen-vanilla rounded-lg">
                  <h3 className="font-semibold text-zen-brown mb-2">Book Direct Benefits</h3>
                  <ul className="text-sm text-zen-brown space-y-1">
                    <li>✓ Best Rate Guarantee</li>
                    <li>✓ Free Breakfast for 2</li>
                    <li>✓ Children Under 7 Stay Free</li>
                    <li>✓ Flexible Cancellation</li>
                  </ul>
                </div>
              </div>
              
              <BookingButtons resort={resort} roomId={room.id} size="lg" layout="vertical" />
              
              <div className="text-center mt-4">
                <p className="text-xs text-zen-brown opacity-70">
                  Secure booking • Instant confirmation
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Rooms */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-zen-vanilla mb-8 text-center">
            Other Rooms at {resortData.name}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resortData.rooms
              .filter(r => r.id !== room.id)
              .slice(0, 3)
              .map((otherRoom) => (
                <RoomCard key={otherRoom.id} room={otherRoom} resort={resort} />
              ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export function generateStaticParams() {
  const allRooms = [
    ...treescapeData.rooms.map(room => ({ resort: 'treescape', roomId: room.id })),
    ...mountainviewData.rooms.map(room => ({ resort: 'mountainview', roomId: room.id })),
  ];
  
  return allRooms;
} 