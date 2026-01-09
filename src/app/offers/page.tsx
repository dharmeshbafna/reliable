import React from 'react';
import Image from 'next/image';

export default function OffersPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Special Offers</h1>
          
          <div className="flex justify-center mb-8">
            <div className="relative w-full max-w-4xl">
              <Image
                src="/banner.jpeg"
                alt="Special Offers Banner"
                width={1200}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>
          
          <div className="mt-12">
            <a
              href="/offers/smileathon-2026"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
            >
              View Smileathon 2026 Offer
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
