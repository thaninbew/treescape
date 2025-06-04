import { notFound } from 'next/navigation';
import { resortData as treescapeData } from '@/data/treescape';
import { resortData as mountainviewData } from '@/data/mountainview';
import ContactForm from '@/components/ContactForm';
import CTAButton from '@/components/CTAButton';

// Map resort names to their data
const resortDataMap = {
  treescape: treescapeData,
  mountainview: mountainviewData,
};

export default function ContactPage({ params }: { params: { resort: string } }) {
  const { resort } = params;
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
            Contact {resortData.name}
          </h1>
          <p className="text-xl text-zen-vanilla opacity-80 max-w-3xl mx-auto leading-relaxed">
            Get in touch with our team to plan your perfect getaway. We&apos;re here to help you 
            create unforgettable memories at our resort.
          </p>
        </div>

        {/* Contact Information & Map */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Details */}
          <div className="space-y-8">
            <div className="bg-zen-coffee rounded-lg p-8">
              <h2 className="text-2xl font-bold text-zen-brown mb-6">
                Get In Touch
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-zen-green mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-zen-brown mb-1">Address</h3>
                    <p className="text-zen-brown opacity-80">{resortData.contact.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-zen-green mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-zen-brown mb-1">Phone</h3>
                    <p className="text-zen-brown opacity-80">{resortData.contact.phone}</p>
                    <CTAButton href={`tel:${resortData.contact.phone}`} size="sm" className="mt-2">
                      Call Now
                    </CTAButton>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-zen-green mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-zen-brown mb-1">Email</h3>
                    <p className="text-zen-brown opacity-80">{resortData.contact.email}</p>
                    <CTAButton href={`mailto:${resortData.contact.email}`} size="sm" className="mt-2">
                      Send Email
                    </CTAButton>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-zen-green mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-zen-brown mb-1">Reception Hours</h3>
                    <p className="text-zen-brown opacity-80">{resortData.contact.hours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-zen-vanilla rounded-lg p-8">
              <h3 className="text-xl font-bold text-zen-brown mb-4">
                Quick Actions
              </h3>
              <div className="space-y-3">
                <CTAButton href={`/${resort}/rooms`} className="w-full justify-start">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m0 0h2M7 7h10M7 11h10M7 15h10" />
                  </svg>
                  View Rooms & Rates
                </CTAButton>
                
                <CTAButton href={`/${resort}/services`} variant="secondary" className="w-full justify-start">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  Explore Services
                </CTAButton>
                
                <CTAButton href={`/${resort}/location`} variant="secondary" className="w-full justify-start">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Get Directions
                </CTAButton>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-zen-coffee rounded-lg p-8">
            <h2 className="text-2xl font-bold text-zen-brown mb-6">
              Find Us
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

        {/* Contact Form */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-zen-brown mb-4">
                Send Us a Message
              </h2>
              <p className="text-zen-brown opacity-80 max-w-2xl mx-auto">
                Have questions or special requests? Fill out the form below and our team will 
                get back to you within 24 hours.
              </p>
            </div>
            
            <ContactForm />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-zen-coffee rounded-lg p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-zen-brown mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-zen-brown mb-2">
                  What is your cancellation policy?
                </h3>
                <p className="text-zen-brown opacity-80">
                  We offer flexible cancellation up to 48 hours before your arrival date. 
                  Please contact us for specific terms and conditions.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-zen-brown mb-2">
                  Do you offer airport transportation?
                </h3>
                <p className="text-zen-brown opacity-80">
                  Yes, we provide shuttle service from major airports and transportation hubs. 
                  Please arrange this when making your reservation.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-zen-brown mb-2">
                  Are pets allowed?
                </h3>
                <p className="text-zen-brown opacity-80">
                  We welcome well-behaved pets in designated accommodations. Additional fees 
                  and restrictions may apply.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-zen-brown mb-2">
                  What activities are included?
                </h3>
                <p className="text-zen-brown opacity-80">
                  Many activities are complimentary for guests, including nature trails, 
                  basic fitness facilities, and some guided tours.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-zen-brown mb-2">
                  Is WiFi available?
                </h3>
                <p className="text-zen-brown opacity-80">
                  Yes, complimentary high-speed WiFi is available throughout the resort, 
                  including all guest rooms and common areas.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-zen-brown mb-2">
                  What dining options do you have?
                </h3>
                <p className="text-zen-brown opacity-80">
                  We offer multiple dining venues featuring local and international cuisine, 
                  plus 24-hour room service for your convenience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-zen-brown text-zen-coffee rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Book Your Stay?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Don&apos;t wait - secure your perfect getaway at {resortData.name} today. 
            Our team is standing by to help you plan an unforgettable experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href={`tel:${resortData.contact.phone}`} size="lg">
              Call to Book
            </CTAButton>
            <CTAButton href={`mailto:${resortData.contact.email}`} variant="secondary" size="lg">
              Email Us
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