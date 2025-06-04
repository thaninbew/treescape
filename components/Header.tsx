'use client';

import Link from 'next/link';
import { useCurrency } from '@/contexts/CurrencyContext';

export default function Header({ resort }: { resort?: string }) {
  const { currency, setCurrencyCode, rates, isLoading } = useCurrency();
  const handleBookNow = () => {
    window.open('https://ibe.hoteliers.guru/ibe/en/Tree-Scape-Retreat-Resort-Hangdong-Chiangmai-TH?tid=e45117b832284e96bedb1ee28d32553d&', '_blank');
  };

  return (
    <header className="bg-zen-coffee shadow-md py-4 relative z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div>
          {resort ? (
            <Link href={`/${resort}`} className="text-2xl font-bold text-zen-brown">
              {resort.charAt(0).toUpperCase() + resort.slice(1)} Resort
            </Link>
          ) : (
            <Link href="/" className="text-2xl font-bold text-zen-brown">
              Treescape
            </Link>
          )}
        </div>
        
        {resort && (
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="text-zen-brown hover:text-zen-leaf">
                  Home
                </Link>
              </li>
              <li>
                <Link href={`/${resort}`} className="text-zen-brown hover:text-zen-leaf">
                  Resort
                </Link>
              </li>
              <li>
                <Link href={`/${resort}/rooms`} className="text-zen-brown hover:text-zen-leaf">
                  Rooms
                </Link>
              </li>
              <li>
                <Link href={`/${resort}/gallery`} className="text-zen-brown hover:text-zen-leaf">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href={`/${resort}/services`} className="text-zen-brown hover:text-zen-leaf">
                  Services
                </Link>
              </li>
              <li>
                <Link href={`/${resort}/location`} className="text-zen-brown hover:text-zen-leaf">
                  Location
                </Link>
              </li>
              <li>
                <Link href={`/${resort}/contact`} className="text-zen-brown hover:text-zen-leaf">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        )}
        
        <div className="flex gap-2 items-center">
          <button
            onClick={handleBookNow}
            className="bg-zen-leaf text-white px-4 py-2 rounded hover:bg-zen-brown transition-colors font-medium"
          >
            Book Now
          </button>
          {resort && (
            <Link
              href={`/${resort}/contact`}
              className="bg-zen-brown text-white px-4 py-2 rounded hover:bg-zen-leaf transition-colors font-medium"
            >
              Contact
            </Link>
          )}
          <div className="flex flex-col items-center ml-2">
            <div className="flex items-center">
              <select
                value={currency.code}
                onChange={(e) => setCurrencyCode(e.target.value)}
                className="bg-zen-coffee border border-zen-brown text-zen-brown text-sm rounded px-2 py-1"
                disabled={isLoading}
              >
                {Object.keys(rates).map((code) => (
                  <option key={code} value={code}>
                    {code}
                  </option>
                ))}
              </select>
              {isLoading && (
                <div className="ml-2 w-3 h-3 border border-zen-brown border-t-transparent rounded-full animate-spin"></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 