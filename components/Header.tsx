import Link from 'next/link';

export default function Header({ resort }: { resort?: string }) {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div>
          {resort ? (
            <Link href={`/${resort}`} className="text-2xl font-bold">
              {resort.charAt(0).toUpperCase() + resort.slice(1)} Resort
            </Link>
          ) : (
            <Link href="/" className="text-2xl font-bold">
              Resort Selector
            </Link>
          )}
        </div>
        
        {resort && (
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link href={`/${resort}`} className="hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href={`/${resort}/rooms`} className="hover:text-blue-600">
                  Rooms
                </Link>
              </li>
              <li>
                <Link href={`/${resort}/gallery`} className="hover:text-blue-600">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href={`/${resort}/services`} className="hover:text-blue-600">
                  Services
                </Link>
              </li>
              <li>
                <Link href={`/${resort}/location`} className="hover:text-blue-600">
                  Location
                </Link>
              </li>
              <li>
                <Link href={`/${resort}/contact`} className="hover:text-blue-600">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        )}
        
        <div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Book Now
          </button>
        </div>
      </div>
    </header>
  );
} 