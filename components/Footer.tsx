import Link from 'next/link';

export default function Footer({ resort }: { resort?: string }) {
  return (
    <footer className="bg-zen-coffee text-zen-brown py-12 relative z-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">
              {resort ? (
                <>{resort.charAt(0).toUpperCase() + resort.slice(1)} Resort</>
              ) : (
                <>Tree Scape</>
              )}
            </h3>
            <p className="mb-4">
              Experience luxury and comfort in the heart of nature.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="hover:text-zen-green">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-zen-green">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-zen-green">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {resort ? (
                <>
                  <li><Link href={`/${resort}`} className="hover:text-zen-green">Home</Link></li>
                  <li><Link href={`/${resort}/rooms`} className="hover:text-zen-green">Rooms</Link></li>
                  <li><Link href={`/${resort}/gallery`} className="hover:text-zen-green">Gallery</Link></li>
                  <li><Link href={`/${resort}/services`} className="hover:text-zen-green">Services</Link></li>
                  <li><Link href={`/${resort}/location`} className="hover:text-zen-green">Location</Link></li>
                  <li><Link href={`/${resort}/contact`} className="hover:text-zen-green">Contact</Link></li>
                </>
              ) : (
                <>
                  <li><Link href="/" className="hover:text-zen-green">Home</Link></li>
                  <li><Link href="/treescape" className="hover:text-zen-green">Tree Scape Retreat Resort</Link></li>
                  <li><Link href="/mountainview" className="hover:text-zen-green">Tree Scape Mountain View Resort</Link></li>
                </>
              )}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <address className="not-italic">
              <p className="mb-2">333 M.2, T.Nong Kwai, Hang Dong</p>
              <p className="mb-2">Muang, Chiang Mai, 50230, Thailand</p>
              <p className="mb-2"> Call: (+66)053-125-123,  (+66)091-069-0123</p>
              <p className="mb-2">
                <a href="mailto:reservation@treescaperesort.com" className="hover:text-zen-green">
                  reservation@treescaperesort.com
                </a>
              </p>
              <p className="mb-2">
                <a href="https://www.treescaperesort.com/" target="_blank" rel="noopener noreferrer" className="hover:text-zen-green">
                  www.treescaperesort.com
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-zen-beaver mt-8 pt-8 text-center">
          <p>&copy; 2024 Treescape Resort. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 