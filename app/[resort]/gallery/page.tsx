import { notFound } from 'next/navigation';
import { resortData as treescapeData } from '@/data/treescape';
import { resortData as mountainviewData } from '@/data/mountainview';
import GalleryGrid from '@/components/GalleryGrid';
import CTAButton from '@/components/CTAButton';

// Map resort names to their data
const resortDataMap = {
  treescape: treescapeData,
  mountainview: mountainviewData,
};

export default async function GalleryPage({ params }: { params: Promise<{ resort: string }> }) {
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
            {resortData.name} Gallery
          </h1>
          <p className="text-xl text-zen-brown opacity-80 max-w-3xl mx-auto leading-relaxed">
            Explore the beauty of our resort through these carefully captured moments. 
            Click on any image to view it in full detail.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="mb-16">
          <GalleryGrid items={resortData.gallery} columns={3} />
        </div>

        {/* Gallery Categories */}
        <section className="bg-zen-coffee rounded-lg p-8 md:p-12 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-zen-brown mb-4">
              Explore More
            </h2>
            <p className="text-zen-brown opacity-80">
              Discover different aspects of our resort experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white rounded-lg">
              <div className="w-16 h-16 bg-zen-green rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m0 0h2M7 7h10M7 11h10M7 15h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-zen-brown mb-2">Accommodations</h3>
              <p className="text-zen-brown opacity-70 mb-4">View our luxurious rooms and suites</p>
              <CTAButton href={`/${resort}/rooms`} size="sm">
                View Rooms
              </CTAButton>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg">
              <div className="w-16 h-16 bg-zen-green rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-zen-brown mb-2">Services</h3>
              <p className="text-zen-brown opacity-70 mb-4">Discover our premium amenities</p>
              <CTAButton href={`/${resort}/services`} size="sm">
                View Services
              </CTAButton>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg">
              <div className="w-16 h-16 bg-zen-green rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-zen-brown mb-2">Location</h3>
              <p className="text-zen-brown opacity-70 mb-4">Learn about our surroundings</p>
              <CTAButton href={`/${resort}/location`} size="sm">
                View Location
              </CTAButton>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-zen-vanilla rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-zen-brown mb-4">
            Experience It Yourself
          </h2>
          <p className="text-zen-brown opacity-80 mb-8 max-w-2xl mx-auto">
            These images only capture a glimpse of what awaits you. Book your stay to experience 
            the full beauty and tranquility of {resortData.name}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href={`/${resort}/contact`} size="lg">
              Book Your Stay
            </CTAButton>
            <CTAButton href={`/${resort}/contact`} variant="secondary" size="lg">
              Get Information
            </CTAButton>
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