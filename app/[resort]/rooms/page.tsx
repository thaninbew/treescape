export default function RoomsPage({ params }: { params: { resort: string } }) {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6">
        Rooms at {params.resort.charAt(0).toUpperCase() + params.resort.slice(1)}
      </h1>
      <p className="text-lg mb-8">
        Explore our comfortable and stylish accommodations.
      </p>
      {/* Room cards will be mapped here */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Room cards placeholder */}
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