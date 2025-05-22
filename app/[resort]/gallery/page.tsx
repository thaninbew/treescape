export default function GalleryPage({ params }: { params: { resort: string } }) {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6">
        Gallery - {params.resort.charAt(0).toUpperCase() + params.resort.slice(1)}
      </h1>
      <p className="text-lg mb-8">
        Explore the beauty of our resort through our photo gallery.
      </p>
      {/* Gallery grid will go here */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Gallery images placeholder */}
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