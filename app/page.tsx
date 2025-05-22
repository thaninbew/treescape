import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-5xl font-bold text-center mb-12">Choose Your Perfect Getaway</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Treescape Resort Card */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-80">
                <div className="absolute inset-0 bg-gray-800 opacity-30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-4xl font-bold text-white">Treescape</h2>
                </div>
                {/* Placeholder for image - will be replaced with actual resort image */}
                <div className="h-full w-full bg-green-800"></div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Nestled in a lush forest setting, Treescape offers a tranquil retreat 
                  among the trees. Perfect for nature lovers and those seeking peace 
                  and relaxation.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Forest Views</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Nature Trails</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Eco-Friendly</span>
                </div>
                
                <Link 
                  href="/treescape" 
                  className="block w-full text-center bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded transition-colors"
                >
                  Explore Treescape
                </Link>
              </div>
            </div>
            
            {/* Mountainview Resort Card */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-80">
                <div className="absolute inset-0 bg-gray-800 opacity-30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-4xl font-bold text-white">Mountainview</h2>
                </div>
                {/* Placeholder for image - will be replaced with actual resort image */}
                <div className="h-full w-full bg-blue-800"></div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Perched on a scenic mountain ridge, Mountainview Resort offers 
                  breathtaking panoramic views and invigorating mountain air. 
                  The perfect destination for adventure seekers.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Mountain Views</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Hiking Trails</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Adventure Activities</span>
                </div>
                
                <Link 
                  href="/mountainview" 
                  className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded transition-colors"
                >
                  Explore Mountainview
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <h3 className="text-2xl font-semibold mb-4">Can&apos;t decide which resort is right for you?</h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Both of our luxury resorts offer exceptional experiences, but each has its unique charm.
              Compare amenities, locations, and activities to find your perfect match.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded transition-colors">
              Compare Resorts
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
