export default function ContactPage({ params }: { params: { resort: string } }) {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6">
        Contact {params.resort.charAt(0).toUpperCase() + params.resort.slice(1)}
      </h1>
      <p className="text-lg mb-8">
        Have questions or need to make special arrangements? Contact our team.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          {/* Contact details will go here */}
          <div className="space-y-4">
            {/* Address, phone, email placeholder */}
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
          {/* Contact form will go here */}
        </div>
      </div>
      
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Find Us</h2>
        {/* Map embed will go here */}
        <div className="w-full h-80 bg-gray-200 flex items-center justify-center">
          <p>Map placeholder</p>
        </div>
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