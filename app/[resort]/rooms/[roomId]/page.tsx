import { notFound } from 'next/navigation';
import { resortData as treescapeData } from '@/data/treescape';
import { resortData as mountainviewData } from '@/data/mountainview';
import GalleryGrid from '@/components/GalleryGrid';
import CTAButton from '@/components/CTAButton';
import RoomAvailabilityCalendar from '@/components/RoomAvailabilityCalendar';
import Image from 'next/image';

// Map resort names to their data
const resortDataMap = {
  treescape: treescapeData,
  mountainview: mountainviewData,
};

export default async function RoomDetailsPage({ 
  params 
}: { 
  params: Promise<{ resort: string; roomId: string }> 
}) {
  const { resort, roomId } = await params;
  const resortData = resortDataMap[resort as keyof typeof resortDataMap];
  
  if (!resortData) {
    notFound();
  }

  const room = resortData.rooms.find(r => r.id === roomId);
  
  if (!room) {
    notFound();
  }

  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <nav className="text-sm text-zen-brown opacity-70 mb-4">
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
              <h1 className="text-4xl md:text-5xl font-bold text-zen-brown mb-2">
                {room.name}
              </h1>
              <p className="text-xl text-zen-brown opacity-80">
                {room.description}
              </p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-zen-green">
                ${room.price}
              </div>
              <div className="text-sm text-zen-brown opacity-70">
                per night
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Images and Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Main Image */}
            <div className="aspect-video rounded-lg overflow-hidden">
              <Image
                src={`https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop`}
                alt={room.name}
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Room Gallery */}
            <section>
              <h2 className="text-2xl font-bold text-zen-brown mb-6">
                Room Gallery
              </h2>
              <GalleryGrid 
                items={[
                  {
                    id: `${room.id}-1`,
                    title: `${room.name} - Bedroom`,
                    image: `https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop`,
                    description: `Bedroom view of ${room.name}`
                  },
                  {
                    id: `${room.id}-2`,
                    title: `${room.name} - Bathroom`,
                    image: `https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&h=300&fit=crop`,
                    description: `Bathroom of ${room.name}`
                  },
                  {
                    id: `${room.id}-3`,
                    title: `${room.name} - View`,
                    image: `https://images.unsplash.com/photo-1586611292717-f828b167408c?w=400&h=300&fit=crop`,
                    description: `View from ${room.name}`
                  },
                  {
                    id: `${room.id}-4`,
                    title: `${room.name} - Balcony`,
                    image: `https://images.unsplash.com/photo-1595846519845-68e298c2edd8?w=400&h=300&fit=crop`,
                    description: `Balcony of ${room.name}`
                  }
                ]} 
                columns={2} 
              />
            </section>

            {/* Room Details */}
            <section className="bg-zen-vanilla rounded-lg p-8">
              <h2 className="text-2xl font-bold text-zen-brown mb-6">
                Room Details
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-zen-green mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="text-zen-brown">
                      <strong>Max Guests:</strong> {room.capacity} adults
                    </span>
                  </div>
                  
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-zen-green mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-zen-brown">
                      <strong>Bed Type:</strong> {room.amenities.find(a => a.includes('Bed')) || 'Premium Bed'}
                    </span>
                  </div>
                  
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-zen-green mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4a1 1 0 011-1h4.586a1 1 0 01.707.293l7 7a1 1 0 010 1.414l-4.586 4.586a1 1 0 01-1.414 0l-7-7A1 1 0 014 9.586V8z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 6h.01" />
                    </svg>
                    <span className="text-zen-brown">
                      <strong>Room Size:</strong> {room.capacity <= 2 ? '450' : '650'} sq ft
                    </span>
                  </div>
                  
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-zen-green mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a4 4 0 118 0v4m-8 0h8m-8 0H6a2 2 0 00-2 2v6a2 2 0 002 2h12a2 2 0 002-2V9a2 2 0 00-2-2h-2m-8 0V7" />
                    </svg>
                    <span className="text-zen-brown">
                      <strong>Min Stay:</strong> 2 nights
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-zen-green mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-zen-brown">
                      <strong>Breakfast:</strong> {room.amenities.includes('Breakfast Included') ? 'Included' : 'Available (+$35/person)'}
                    </span>
                  </div>
                  
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-zen-green mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <span className="text-zen-brown">
                      <strong>Extra Bed:</strong> $75/night (rollaway)
                    </span>
                  </div>
                  
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-zen-green mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                    <span className="text-zen-brown">
                      <strong>Pricing:</strong> From ${room.price}/night
                    </span>
                  </div>
                  
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-zen-green mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-zen-brown">
                      <strong>Cancellation:</strong> Free up to 48 hours
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

          {/* Right Column - Booking and Availability */}
          <div className="space-y-8">
            {/* Pricing Card */}
            <div className="bg-white rounded-lg shadow-lg p-6 border border-zen-beaver">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-zen-green mb-2">
                  ${room.price}
                </div>
                <div className="text-sm text-zen-brown opacity-70">
                  per night (before taxes)
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-zen-brown opacity-70">Resort Fee:</span>
                  <span className="text-zen-brown">$25/night</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zen-brown opacity-70">Taxes & Fees:</span>
                  <span className="text-zen-brown">12%</span>
                </div>
                <hr className="border-zen-beaver" />
                <div className="flex justify-between font-semibold">
                  <span className="text-zen-brown">Total (2 nights):</span>
                  <span className="text-zen-green">${Math.round((room.price + 25) * 2 * 1.12)}</span>
                </div>
              </div>
              
              <CTAButton href={`/${resort}/contact?room=${room.id}`} className="w-full" size="lg">
                Book This Room
              </CTAButton>
              
              <div className="text-center mt-4">
                <CTAButton href={`tel:${resortData.contact.phone}`} variant="secondary" size="sm">
                  Call for Details
                </CTAButton>
              </div>
            </div>

            {/* Availability Calendar */}
            <div className="bg-zen-vanilla rounded-lg p-6">
              <h3 className="text-xl font-bold text-zen-brown mb-4">
                Availability Calendar
              </h3>
              <RoomAvailabilityCalendar roomId={room.id} />
            </div>

            {/* Quick Info */}
            <div className="bg-zen-coffee rounded-lg p-6">
              <h3 className="text-xl font-bold text-zen-brown mb-4">
                Quick Info
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-zen-brown opacity-70">Check-in:</span>
                  <span className="text-zen-brown">3:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zen-brown opacity-70">Check-out:</span>
                  <span className="text-zen-brown">11:00 AM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zen-brown opacity-70">Pet Policy:</span>
                  <span className="text-zen-brown">Pets welcome (+$50)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zen-brown opacity-70">Smoking:</span>
                  <span className="text-zen-brown">Non-smoking</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Rooms */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-zen-brown mb-8 text-center">
            Other Rooms at {resortData.name}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resortData.rooms
              .filter(r => r.id !== room.id)
              .slice(0, 3)
              .map((otherRoom) => (
                <div key={otherRoom.id} className="bg-zen-vanilla rounded-lg overflow-hidden shadow-lg">
                  <div className="aspect-video relative">
                    <Image
                      src={`https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop`}
                      alt={otherRoom.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-zen-brown mb-2">
                      {otherRoom.name}
                    </h3>
                    <p className="text-zen-brown opacity-80 text-sm mb-4">
                      {otherRoom.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-zen-green">
                        ${otherRoom.price}
                      </span>
                      <CTAButton href={`/${resort}/rooms/${otherRoom.id}`} size="sm">
                        View Details
                      </CTAButton>
                    </div>
                  </div>
                </div>
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