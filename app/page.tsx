'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  const [treescapeLoaded, setTreescapeLoaded] = useState(false);
  const [mountainviewLoaded, setMountainviewLoaded] = useState(false);

  return (
    <>
      <Header />
      <main className="min-h-screen flex relative z-10">
        {/* Treescape Side */}
        <div className="w-1/2 relative group cursor-pointer overflow-hidden">
          <Link href="/treescape" className="block h-full">
            <div className="relative h-screen overflow-hidden">
              {/* Loading Background */}
              {!treescapeLoaded && (
                <div className="absolute inset-0 bg-zen-brown animate-pulse" />
              )}
              
              {/* Background Image */}
              <Image
                src="/images/treescape_landing.jpg"
                alt="Treescape Resort"
                fill
                className={`object-cover transition-all duration-700 group-hover:scale-105 brightness-75 group-hover:brightness-90 ${
                  treescapeLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                priority
                quality={85}
                sizes="50vw"
                onLoad={() => setTreescapeLoaded(true)}
              />
              
              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-8 z-10">
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
            <div className="relative h-screen overflow-hidden">
              {/* Loading Background */}
              {!mountainviewLoaded && (
                <div className="absolute inset-0 bg-gray-600 animate-pulse" />
              )}
              
              {/* Background Image */}
              <Image
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop"
                alt="Mountain View Resort"
                fill
                className={`object-cover transition-all duration-700 group-hover:scale-105 brightness-75 group-hover:brightness-90 ${
                  mountainviewLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                priority
                quality={85}
                sizes="50vw"
                onLoad={() => setMountainviewLoaded(true)}
              />
              
              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-8 z-10">
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
