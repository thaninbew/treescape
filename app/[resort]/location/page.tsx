export default function LocationPage({ params }: { params: { resort: string } }) {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6">
        Location - {params.resort.charAt(0).toUpperCase() + params.resort.slice(1)}
      </h1>
      <p className="text-lg mb-8">
        Find out how to get to our resort and explore the surrounding area.
      </p>
      
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Map</h2>
        {/* Google Maps iframe will go here */}
        <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
          <p>Interactive map placeholder</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Travel Tips</h2>
          {/* Travel tips will go here */}
          <div className="space-y-4">
            <p>Travel tips placeholder...</p>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Parking Information</h2>
          {/* Parking info will go here */}
          <div className="space-y-4">
            <p>Parking information placeholder...</p>
          </div>
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