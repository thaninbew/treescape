import { notFound } from 'next/navigation';
import { resortData as treescapeData } from '@/data/treescape';
import { resortData as mountainviewData } from '@/data/mountainview';
import ServicesList from '@/components/ServicesList';
import BookingButtons from '@/components/BookingButtons';

// Map resort names to their data
const resortDataMap = {
  treescape: treescapeData,
  mountainview: mountainviewData,
};

export default async function ServicesPage({ params }: { params: Promise<{ resort: string }> }) {
  const { resort } = await params;
  const resortData = resortDataMap[resort as keyof typeof resortDataMap];
  
  if (!resortData) {
    notFound();
  }

  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-zen-brown mb-6">
            {resortData.name} Services
          </h1>
          <p className="text-xl text-zen-brown opacity-80 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of services and amenities designed to make your stay 
            exceptional. From wellness to adventure, we have everything you need for the perfect getaway.
          </p>
        </div>

        {/* Services List */}
        <div className="mb-16">
          <ServicesList services={resortData.services} layout="grid" />
        </div>

        {/* Additional Information */}
        <section className="bg-zen-coffee rounded-lg p-8 md:p-12 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-zen-brown mb-4">
                Personalized Experiences
              </h2>
              <p className="text-zen-brown opacity-80 mb-6 leading-relaxed">
                Our dedicated concierge team is available to help you customize your stay. 
                Whether you&apos;re looking for adventure, relaxation, or cultural experiences, 
                we&apos;ll create the perfect itinerary for you.
              </p>
              <ul className="space-y-3 text-zen-brown">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-zen-green mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  24/7 Concierge Service
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-zen-green mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Custom Activity Planning
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-zen-green mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Special Occasion Arrangements
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-zen-green mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Transportation Coordination
                </li>
              </ul>
            </div>
            
            <div className="bg-zen-vanilla rounded-lg p-6">
              <h3 className="text-2xl font-bold text-zen-brown mb-4">Service Hours</h3>
              <div className="space-y-3 text-zen-brown">
                <div className="flex justify-between">
                  <span>Concierge</span>
                  <span className="font-medium">24/7</span>
                </div>
                <div className="flex justify-between">
                  <span>Spa Services</span>
                  <span className="font-medium">8:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Dining</span>
                  <span className="font-medium">6:00 AM - 11:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Activities</span>
                  <span className="font-medium">7:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Room Service</span>
                  <span className="font-medium">24/7</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <section className="bg-zen-vanilla rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-zen-brown mb-4">
            Ready to Experience Our Services?
          </h2>
          <p className="text-zen-brown opacity-80 mb-8 max-w-2xl mx-auto">
            Book your stay today and enjoy access to all our premium services and amenities. 
            Our team is ready to make your visit unforgettable.
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