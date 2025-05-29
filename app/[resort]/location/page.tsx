import { notFound } from 'next/navigation';
import { resortData as treescapeData } from '@/data/treescape';
import { resortData as mountainviewData } from '@/data/mountainview';
import CTAButton from '@/components/CTAButton';

// Map resort names to their data
const resortDataMap = {
  treescape: treescapeData,
  mountainview: mountainviewData,
};

export default async function LocationPage({ params }: { params: Promise<{ resort: string }> }) {
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
            {resortData.name} Location
          </h1>
          <p className="text-xl text-zen-brown opacity-80 max-w-3xl mx-auto leading-relaxed">
            {resortData.location.description}
          </p>
        </div>

        {/* Map Section */}
        <section className="mb-16">
          <div className="bg-zen-coffee rounded-lg p-8">
            <h2 className="text-3xl font-bold text-zen-brown mb-6 text-center">
              Find Us Here
            </h2>
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe
                src={resortData.contact.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${resortData.name} Location Map`}
              />
            </div>
          </div>
        </section>

        {/* Location Details */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className="bg-zen-vanilla rounded-lg p-8">
            <h2 className="text-2xl font-bold text-zen-brown mb-6">
              Contact Information
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-zen-green mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-zen-brown">Address</h3>
                  <p className="text-zen-brown opacity-80">{resortData.contact.address}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="w-6 h-6 text-zen-green mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-zen-brown">Phone</h3>
                  <p className="text-zen-brown opacity-80">{resortData.contact.phone}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="w-6 h-6 text-zen-green mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-zen-brown">Email</h3>
                  <p className="text-zen-brown opacity-80">{resortData.contact.email}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="w-6 h-6 text-zen-green mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-zen-brown">Reception Hours</h3>
                  <p className="text-zen-brown opacity-80">{resortData.contact.hours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Nearby Landmarks */}
          <div className="bg-zen-coffee rounded-lg p-8">
            <h2 className="text-2xl font-bold text-zen-brown mb-6">
              Nearby Landmarks
            </h2>
            <div className="space-y-4">
              {resortData.location.landmarks.map((landmark, index) => (
                <div key={index} className="flex items-center">
                  <svg className="w-5 h-5 text-zen-green mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-zen-brown">{landmark}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Activities & Transportation */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Activities */}
          <div className="bg-white border border-zen-beaver rounded-lg p-8">
            <h2 className="text-2xl font-bold text-zen-brown mb-6">
              Local Activities
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {resortData.location.activities.map((activity, index) => (
                <div key={index} className="flex items-center">
                  <svg className="w-4 h-4 text-zen-green mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-zen-brown text-sm">{activity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Transportation */}
          <div className="bg-white border border-zen-beaver rounded-lg p-8">
            <h2 className="text-2xl font-bold text-zen-brown mb-6">
              Transportation
            </h2>
            <div className="space-y-3">
              {resortData.location.transportation.map((transport, index) => (
                <div key={index} className="flex items-center">
                  <svg className="w-4 h-4 text-zen-green mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-zen-brown text-sm">{transport}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Directions & Travel Tips */}
        <section className="bg-zen-vanilla rounded-lg p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-zen-brown mb-8 text-center">
            Travel Tips & Directions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-zen-brown mb-4">Getting Here</h3>
              <ul className="space-y-3 text-zen-brown">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-zen-green mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>GPS coordinates available upon booking confirmation</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-zen-green mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Detailed driving directions provided with reservation</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-zen-green mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Shuttle service available from major transportation hubs</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-zen-brown mb-4">What to Bring</h3>
              <ul className="space-y-3 text-zen-brown">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-zen-green mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Comfortable walking shoes for nature trails</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-zen-green mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Weather-appropriate clothing for outdoor activities</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-zen-green mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Camera to capture the beautiful scenery</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-zen-brown text-zen-coffee rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Visit {resortData.name}?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Plan your journey to our beautiful location and experience the perfect getaway.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href={`/${resort}/contact`} size="lg">
              Book Your Stay
            </CTAButton>
            <CTAButton href={`tel:${resortData.contact.phone}`} variant="secondary" size="lg">
              Call for Directions
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