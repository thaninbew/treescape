import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preload" as="image" href="images/treescape_landing.jpg" />
        <link rel="preload" as="image" href="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop" />
      </Head>
      <Header />
      <main className="min-h-screen flex relative z-10">
        {/* Treescape Side */}
        <div className="w-1/2 relative group cursor-pointer overflow-hidden">
          <Link href="/treescape" className="block h-full">
            {/* Background Image with Dimmed Overlay */}
            <div 
              className="h-screen bg-cover bg-center relative transition-all duration-300 group-hover:scale-105 brightness-75 group-hover:brightness-90 bg-zen-brown"
              style={{
                backgroundImage: "url('images/treescape_landing.jpg')"
              }}
            >
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-8">
                <h1 className="text-6xl font-bold mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  Retreat Resort
                </h1>
                <p className="text-xl opacity-90 max-w-md">
                  A tranquil forest retreat among ancient trees
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* Mountainview Side */}
        <div className="w-1/2 relative group cursor-pointer overflow-hidden">
          <Link href="/mountainview" className="block h-full">
            {/* Background Image with Dimmed Overlay */}
            <div 
              className="h-screen bg-cover bg-center relative transition-all duration-300 group-hover:scale-105 brightness-75 group-hover:brightness-90 bg-gray-600"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop')"
              }}
            >
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-8">
                <h1 className="text-6xl font-bold mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  Mountain View Resort
                </h1>
                <p className="text-xl opacity-90 max-w-md">
                  Breathtaking alpine retreat with stunning vistas
                </p>
              </div>
            </div>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
