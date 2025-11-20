import Link from 'next/link';
import DynamicHeroVisual from '@/components/DynamicHeroVisual';

export default function Home() {
  return (
    <article className="min-h-screen bg-white">
      {/* Hero Section - Professional */}
      <section className="relative pt-40 pb-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-12">
              <div className="inline-block px-6 py-3 rounded-full bg-white/5 border border-white/10 text-sm font-semibold tracking-[0.2em] uppercase text-sky-300 shadow-sm">
                ESTABLISHED 1964 • LEBANON'S MOST RENOWNED AUTO GLASS COMPANY
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-[4.75rem] xl:text-[5.25rem] font-extrabold leading-tight">
                Lebanon&apos;s Trusted
                <span className="block gradient-text mt-2">Auto Glass Experts</span>
                <span className="block mt-4 text-xl md:text-2xl text-sky-300">Since 1964 • Dora, Beirut</span>
              </h1>
              
              <p className="text-xl md:text-2xl lg:text-[1.45rem] text-slate-200 leading-relaxed max-w-2xl">
                With over <strong className="text-sky-400">60 years of experience</strong>, Makoukji Auto Glass keeps drivers across Lebanon safe with OEM and high-quality replacement glass for every kind of vehicle.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/contact"
                  className="px-9 py-3.5 rounded-full bg-sky-500 text-white font-semibold text-lg shadow-lg hover:bg-sky-600 transition-colors duration-200"
                >
                  Get Free Quote
                </Link>
                <Link
                  href="/services"
                  className="px-9 py-3.5 rounded-full border border-white/20 text-slate-50 font-semibold text-lg hover:bg-white/10 transition-colors duration-200"
                >
                  View Our Services
                </Link>
              </div>
            </div>

            {/* Right Visual */}
            <DynamicHeroVisual />
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '60+', label: 'Years of Excellence', icon: '✓' },
              { number: '1500', label: 'Sq Meters Warehouse', icon: '✓' },
              { number: '100%', label: 'Quality Guaranteed', icon: '✓' },
              { number: 'All', label: 'Car Glass Types', icon: '✓' },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Professional */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Why Choose Makoukji?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Lebanon's most trusted autoglass experts with unmatched quality and comprehensive inventory
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Comprehensive Inventory',
                description: 'We maintain the most extensive inventory of car glass in Lebanon. From the smallest car to the largest truck, we have what you need.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                ),
              },
              {
                title: '60 Years of Expertise',
                description: 'As Lebanon\'s most renowned autoglass company since 1964, we bring unmatched experience and knowledge to every job.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
              {
                title: 'Professional Service',
                description: 'Our trained team uses premium products and professional installation techniques to ensure your vehicle is restored to perfect condition.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-sky-500 bg-sky-50">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview - Professional */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Comprehensive Autoglass Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide autoglass services for all vehicle types
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {['ROOF GLASS', 'WINDSHIELD', 'SIDE WINDOW', 'RUBBER', 'SUPER CARS', 'TRUCK', 'HEAVY MACHINERY', 'BUS'].map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-center hover:border-sky-400 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                <h3 className="text-sm font-semibold text-gray-900">{service}</h3>
              </div>
            ))}
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 text-center text-white">
            <p className="text-lg mb-6">
              Plus specialized services for boats, yachts, and all types of vehicles
            </p>
            <Link
              href="/services"
              className="inline-block px-8 py-3 bg-sky-500 text-white rounded-full font-semibold hover:bg-sky-600 transition-colors duration-200"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Trusted by Drivers in Lebanon
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Real experiences from customers who trusted Makoukji Auto Glass
              with their vehicles.
            </p>
          </div>
          <div className="relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Ali K.',
                  text: 'Fast service and excellent quality. They had the exact windshield I needed and installed it the same day.',
                },
                {
                  name: 'Rita M.',
                  text: 'Very professional team in Dora. They explained everything clearly and my car glass looks like brand new.',
                },
                {
                  name: 'Karim S.',
                  text: 'Highly recommended for fleets. Our trucks are back on the road quickly every time we work with Makoukji.',
                },
              ].map((review, index) => (
                <div
                  key={index}
                  className="glass-effect rounded-2xl p-8 border border-white/10"
                >
                  <div className="flex items-center gap-2 mb-4 text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <p className="text-slate-100 mb-4 leading-relaxed">
                    {review.text}
                  </p>
                  <p className="text-slate-300 text-sm">
                    <span className="font-semibold text-white">
                      {review.name}
                    </span>{' '}
                    • Google-style review
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Find Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                Find Us in Dora
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Our workshop is located in <strong>Dora Trade Center</strong>{' '}
                on Dora Highway, Beirut. Easy access for drivers coming from
                all over Lebanon.
              </p>
              <p className="text-lg text-gray-600">
                Visit us for windshield, backlight, and full vehicle glass
                replacement, or contact us first for a quick quote and
                availability.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <iframe
                title="Makoukji Auto Glass Location - Dora Trade Center"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3338.9850712139795!2d35.5464358!3d33.8954202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f3dd7c934d7ad%3A0x8c13b0a6f8a2f3a5!2sDora%20Trade%20Center!5e0!3m2!1sen!2slb!4v1700000000000"
                width="100%"
                height="360"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full border-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Professional */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Get your vehicle back on the road safely and quickly. Contact Lebanon's most trusted autoglass experts today for a free quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-10 py-3 bg-sky-500 text-white rounded-full font-semibold text-lg hover:bg-sky-600 transition-colors duration-200 shadow-md"
            >
              Contact Us Today
            </Link>
            <Link
              href="/about"
              className="px-10 py-3 border-2 border-white text-white rounded-md font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors duration-200"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
