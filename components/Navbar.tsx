'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm'
          : 'bg-white/80 backdrop-blur'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
              <Image 
                src="/makoukji-logo.png" 
                alt="Makoukji Auto Glass Logo" 
                width={260} 
                height={78}
                className="h-16 w-auto"
                priority
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-12 flex items-baseline space-x-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About' },
                { href: '/services', label: 'Services' },
                { href: '/collection', label: 'Collection' },
                { href: '/contact', label: 'Contact' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-5 py-2 text-base lg:text-lg font-semibold text-slate-900 hover:text-sky-600 transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block ml-6">
            <Link
              href="/contact"
              className="px-6 py-2.5 rounded-full bg-sky-500 text-white font-semibold text-sm shadow-md hover:bg-sky-600 transition-colors duration-200"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile actions: Call + Menu */}
          <div className="md:hidden flex items-center gap-3">
            <a
              href="tel:01256297"
              className="px-3 py-1.5 rounded-full bg-sky-500 text-white text-sm font-semibold shadow-md hover:bg-sky-600"
            >
              Call Now
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-900 hover:bg-slate-100 transition-colors"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 shadow-lg">
          <div className="px-4 pt-4 pb-6 space-y-1">
            <div className="px-4 py-3 border-b border-slate-200 mb-4">
              <Image 
                src="/makoukji-logo.png" 
                alt="Makoukji Auto Glass Logo" 
                width={220} 
                height={66}
                className="h-14 w-auto"
              />
            </div>
            {[
              { href: '/', label: 'Home' },
              { href: '/about', label: 'About' },
              { href: '/services', label: 'Services' },
              { href: '/collection', label: 'Collection' },
              { href: '/contact', label: 'Contact' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-3 text-base font-semibold text-slate-900 hover:text-sky-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                href="/contact"
                className="block w-full text-center px-6 py-3 rounded-full bg-sky-500 text-white font-semibold hover:bg-sky-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
