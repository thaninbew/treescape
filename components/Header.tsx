import Link from 'next/link';

export default function Header({ resort }: { resort?: string }) {
  return (
    <header className="bg-zen-coffee shadow-md py-4">
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
                <Link href={`/${resort}`} className="text-zen-brown hover:text-zen-leaf">
                  Home
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
        
        <div>
          <button className="bg-zen-leaf text-zen-coffee px-4 py-2 rounded hover:bg-zen-brown transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </header>
  );
} 