export default function ResortPage({ params }: { params: { resort: string } }) {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6">
        Welcome to {params.resort.charAt(0).toUpperCase() + params.resort.slice(1)}
      </h1>
      <p className="text-lg">
        This is the home page for {params.resort}. Here you'll find information about our 
        accommodations, amenities, and surroundings.
      </p>
      {/* Hero, service preview, room preview, reviews, gallery teaser will go here */}
    </main>
  );
}

export function generateStaticParams() {
  return [
    { resort: 'treescape' },
    { resort: 'mountainview' },
  ];
} 