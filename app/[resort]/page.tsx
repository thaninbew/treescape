import { notFound } from 'next/navigation';
import { resortData as treescapeData } from '@/data/treescape';
import { resortData as mountainviewData } from '@/data/mountainview';
import Hero from '@/components/Hero';
import RoomCard from '@/components/RoomCard';
import ServicesList from '@/components/ServicesList';
import GalleryGrid from '@/components/GalleryGrid';
import ReviewSection from '@/components/ReviewSection';
import CTAButton from '@/components/CTAButton';
import BookingButtons from '@/components/BookingButtons';

// Map resort names to their data
const resortDataMap = {
  treescape: treescapeData,
  mountainview: mountainviewData,
};

export default async function ResortPage({ params }: { params: Promise<{ resort: string }> }) {
  const { resort } = await params;
  const resortData = resortDataMap[resort as keyof typeof resortDataMap];
  
  if (!resortData) {
    notFound();
  }

  return (
    <main>
      {/* Hero Section */}
      <Hero
        image={`https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=800&fit=crop`}
        title={resortData.hero.title}
        subtitle={resortData.hero.subtitle}
        ctaText="Book Your Stay"
        ctaHref={`/${resort}/contact`}
        height="large"
      />

      {/* Welcome Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-zen-brown mb-6">
              Welcome to {resortData.name}
            </h2>
            <p className="text-lg text-zen-brown opacity-80 leading-relaxed mb-8">
              {resortData.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <div className="w-16 h-16 bg-zen-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m0 0h2M7 7h10M7 11h10M7 15h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-zen-brown mb-2">Luxury Accommodations</h3>
                <p className="text-zen-brown opacity-70">Premium rooms and suites with modern amenities</p>
              </div>
              <div className="p-6">
                <div className="w-16 h-16 bg-zen-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-zen-brown mb-2">Wellness & Spa</h3>
                <p className="text-zen-brown opacity-70">Rejuvenating treatments and wellness experiences</p>
              </div>
              <div className="p-6">
                <div className="w-16 h-16 bg-zen-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-zen-brown mb-2">Nature Activities</h3>
                <p className="text-zen-brown opacity-70">Outdoor adventures and guided experiences</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Rooms Section */}
      <section className="py-16 bg-zen-coffee">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zen-brown mb-4">
              Our Accommodations
            </h2>
            <p className="text-zen-brown opacity-80 max-w-2xl mx-auto mb-8">
              Choose from our carefully designed rooms and suites, each offering comfort and luxury.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {resortData.rooms.slice(0, 3).map((room) => (
              <RoomCard key={room.id} room={room} resort={resort} />
            ))}
          </div>
          
          <div className="text-center">
            <CTAButton href={`/${resort}/rooms`} size="lg">
              View All Rooms
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zen-brown mb-4">
              Resort Services
            </h2>
            <p className="text-zen-brown opacity-80 max-w-2xl mx-auto">
              Discover the exceptional services and amenities that make your stay unforgettable.
            </p>
          </div>
          
          <ServicesList services={resortData.services.slice(0, 6)} layout="grid" />
          
          <div className="text-center mt-12">
            <CTAButton href={`/${resort}/services`} variant="secondary">
              Explore All Services
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Gallery Teaser */}
      <section className="py-16 bg-zen-vanilla">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zen-brown mb-4">
              Resort Gallery
            </h2>
            <p className="text-zen-brown opacity-80 max-w-2xl mx-auto">
              Take a visual journey through our beautiful resort and surroundings.
            </p>
          </div>
          
          <GalleryGrid items={resortData.gallery.slice(0, 6)} columns={3} />
          
          <div className="text-center mt-12">
            <CTAButton href={`/${resort}/gallery`}>
              View Full Gallery
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <ReviewSection reviews={resortData.reviews} />

      {/* Call to Action Section */}
      <section className="py-16 bg-zen-brown text-zen-coffee">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience {resortData.name}?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Book your stay today and create unforgettable memories in our luxury resort.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookingButtons resort={resort} size="lg" />
          </div>
        </div>
      </section>
    </main>
  );
}

export function generateStaticParams() {
  return [
    { resort: 'treescape' },
    { resort: 'mountainview' },
  ];
} 