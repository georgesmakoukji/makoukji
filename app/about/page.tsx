export const metadata = {
  title: 'About Us - Makoukji Auto Glass',
  description: 'Learn more about Ets. Georges Makoukji - your trusted auto glass repair experts in Dora, Lebanon.',
};

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-[#FFD700] rounded-lg">
            <span className="text-sm font-bold text-black">ABOUT US</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-black">
            About Makoukji Auto Glass
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted auto glass repair experts in Dora, Lebanon
          </p>
        </div>

        {/* Image Section */}
        <div className="relative h-64 md:h-96 rounded-lg overflow-hidden mb-16 futuristic-border">
          <div className="absolute inset-0 bg-gradient-to-br from-[#2596be] to-[#FFD700] opacity-40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <svg className="w-24 h-24 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <p className="text-sm text-gray-200">Our Team</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-lg border-2 border-[#2596be] futuristic-border">
            <h2 className="text-3xl font-bold mb-6 text-black">Our Story</h2>
            <p className="text-lg text-gray-600 mb-4">
              Ets. Georges Makoukji has been serving the Dora community and surrounding areas with professional auto glass repair and replacement services for years. We understand that when your vehicle's glass is damaged, you need fast, reliable, and professional service.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Our team of experienced technicians brings years of expertise to every job. We use only the highest quality glass and materials, ensuring your vehicle is restored to its original condition. Whether it's a small chip that needs repair or a full windshield replacement, we handle every job with care and precision.
            </p>
            <p className="text-lg text-gray-600">
              Located in Dora, Lebanon, we're proud to be your local auto glass experts. We're committed to providing exceptional service, fair pricing, and getting you back on the road safely and quickly.
            </p>
          </div>
          
          <div className="bg-black p-8 rounded-lg border-2 border-[#FFD700] futuristic-border relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-br from-[#2596be] to-[#FFD700]"></div>
            </div>
            <div className="relative">
              <h2 className="text-3xl font-bold mb-6 text-white">Our Values</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-[#FFD700] rounded-lg flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Quality</h3>
                    <p className="text-gray-300">We use only premium materials and professional installation techniques</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-[#2596be] rounded-lg flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Speed</h3>
                    <p className="text-gray-300">Fast turnaround times - most repairs completed the same day</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-[#FFD700] rounded-lg flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Reliability</h3>
                    <p className="text-gray-300">Trusted service you can count on, backed by our quality guarantee</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-[#2596be] rounded-lg flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Customer Service</h3>
                    <p className="text-gray-300">We treat every customer with respect and provide personalized service</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-black rounded-lg p-12 text-center text-white shadow-2xl futuristic-border relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-r from-[#2596be] to-[#FFD700]"></div>
          </div>
          <div className="relative">
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl max-w-3xl mx-auto text-gray-300">
              To provide the highest quality auto glass repair and replacement services in Dora, Lebanon. We're committed to getting you back on the road safely and quickly, with professional service you can trust.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
