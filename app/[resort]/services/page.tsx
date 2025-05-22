export default function ServicesPage({ params }: { params: { resort: string } }) {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6">
        Services at {params.resort.charAt(0).toUpperCase() + params.resort.slice(1)}
      </h1>
      <p className="text-lg mb-8">
        Discover the range of services and amenities we offer to make your stay exceptional.
      </p>
      {/* Services list will go here */}
      <div className="space-y-6">
        {/* Services placeholder */}
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