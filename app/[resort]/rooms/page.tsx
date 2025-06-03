import { notFound } from 'next/navigation';
import { resortData as treescapeData } from '@/data/treescape';
import { resortData as mountainviewData } from '@/data/mountainview';
import RoomCard from '@/components/RoomCard';
import BookingButtons from '@/components/BookingButtons';

// Map resort names to their data
const resortDataMap = {
  treescape: treescapeData,
  mountainview: mountainviewData,
};

export default async function RoomsPage({ params }: { params: Promise<{ resort: string }> }) {
  const { resort } = await params;
  const resortData = resortDataMap[resort as keyof typeof resortDataMap];
  
  if (!resortData) {
    notFound();
  }

  return (
    <main className="py-16 bg-zen-brown min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-zen-vanilla mb-6">
            {resortData.name} Accommodations
          </h1>
          <p className="text-xl text-zen-vanilla opacity-80 max-w-3xl mx-auto leading-relaxed">
            Discover our carefully curated selection of rooms and suites, each designed to provide 
            the perfect blend of comfort, luxury, and natural beauty.
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {resortData.rooms.map((room) => (
            <RoomCard key={room.id} room={room} resort={resort} />
          ))}
        </div>

        {/* Amenities Section */}
        <section className="bg-zen-coffee rounded-lg p-8 md:p-12 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-zen-brown mb-4">
              Resort Amenities
            </h2>
            <p className="text-zen-brown opacity-80">
              All rooms include access to our premium resort facilities
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-zen-green rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
              </div>
              <p className="text-sm font-medium text-zen-brown">Free WiFi</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-zen-green rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                </svg>
              </div>
              <p className="text-sm font-medium text-zen-brown">Nature Access</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-zen-green rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <p className="text-sm font-medium text-zen-brown">Spa Access</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-zen-green rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <p className="text-sm font-medium text-zen-brown">Fine Dining</p>
            </div>
          </div>
        </section>

        {/* Booking Information */}
        <section className="bg-zen-vanilla rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-zen-brown mb-4">
            Ready to Book Your Stay?
          </h2>
          <p className="text-zen-brown opacity-80 mb-8 max-w-2xl mx-auto">
            Contact our reservations team to check availability and secure your perfect accommodation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookingButtons resort={resort} />
          </div>
        </section>
      </div>
    </main>
  );
}

export function generateStaticParams() {
  return [
    { resort: 'treescape' },
    { resort: 'mountainview' },
  ];
} 