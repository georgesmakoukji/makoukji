import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black border-t-2 border-[#2596be] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2596be] to-[#FFD700]"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-[#FFD700]">Makoukji</span>
              <span className="text-white"> Auto Glass</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Professional auto glass repair and replacement services in Dora, Lebanon. Fast, reliable, and professional service you can trust.
            </p>
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Ets. Georges Makoukji. All rights reserved.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-bold text-[#FFD700] uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-[#FFD700] transition-colors font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#FFD700] transition-colors font-medium">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-[#FFD700] transition-colors font-medium">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-[#FFD700] transition-colors font-medium">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-bold text-[#FFD700] uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="tel:+9611256297" className="text-gray-300 hover:text-[#2596be] transition-colors font-medium">
                  +961 1 256 297
                </a>
              </li>
              <li>
                <a href="mailto:info@makoukji.com" className="text-gray-300 hover:text-[#2596be] transition-colors font-medium">
                  info@makoukji.com
                </a>
              </li>
              <li className="text-gray-300 text-sm font-medium">
                Murr Bldg - Dora Highway<br />
                Bouchrieh - El Metn<br />
                Dora, Lebanon
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
