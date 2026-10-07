/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const [rating, setRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);

  // Fallback image sources for Google Drive file
  const driveFileId = '1PGDe9K6ixbNqd0jP5-AbPyAJ4osGNjdx';
  const imageSources = [
    `https://lh3.googleusercontent.com/d/${driveFileId}`,
    `https://drive.google.com/thumbnail?id=${driveFileId}&sz=w1000`,
    `https://drive.google.com/uc?export=view&id=${driveFileId}`,
  ];
  const [imgIndex, setImgIndex] = useState<number>(0);

  const handleImageError = () => {
    if (imgIndex < imageSources.length - 1) {
      setImgIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 font-['Fredoka']">
      <motion.main
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full flex flex-col items-center max-w-xl mx-auto"
      >
        {/* Title lockup: BPOM with width matched to subtitle */}
        <div className="w-full max-w-[320px] sm:max-w-[380px] flex flex-col items-center text-center mb-6 sm:mb-8">
          <div className="w-full flex justify-between items-center text-4xl sm:text-5xl md:text-6xl font-bold leading-none select-none px-1">
            <span>B</span>
            <span>P</span>
            <span>O</span>
            <span>M</span>
          </div>
          <p className="w-full text-center text-sm sm:text-base md:text-lg font-medium text-neutral-700 mt-2 tracking-normal">
            Being so Precious Overdose Me
          </p>
        </div>

        {/* Frame */}
        <div className="w-full border-2 border-neutral-300 rounded-2xl p-5 sm:p-8 bg-white flex flex-col items-center">
          {/* Product name */}
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-neutral-900 mb-5">
            You're My Queen 65g
          </h2>

          {/* Picture */}
          <div className="w-full mb-6 flex justify-center items-center rounded-xl overflow-hidden bg-neutral-50 border border-neutral-200">
            <img
              src={imageSources[imgIndex]}
              onError={handleImageError}
              alt="You're My Queen 65g"
              className="w-full max-h-[380px] object-contain rounded-lg transition-opacity duration-300"
              loading="eager"
            />
          </div>

          {/* Table */}
          <div className="w-full mb-6 overflow-hidden rounded-xl border border-neutral-200">
            <table className="w-full border-collapse text-left text-sm sm:text-base">
              <tbody>
                <tr className="border-b border-neutral-200">
                  <th className="py-2.5 px-4 font-semibold text-neutral-700 bg-neutral-50/80 w-2/5 sm:w-1/3">
                    Product
                  </th>
                  <td className="py-2.5 px-4 text-neutral-900 font-medium">
                    Chocolate Bar
                  </td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <th className="py-2.5 px-4 font-semibold text-neutral-700 bg-neutral-50/80">
                    Production
                  </th>
                  <td className="py-2.5 px-4 text-neutral-900 font-medium">
                    CayLabs
                  </td>
                </tr>
                <tr>
                  <th className="py-2.5 px-4 font-semibold text-neutral-700 bg-neutral-50/80">
                    Dedicated to
                  </th>
                  <td className="py-2.5 px-4 text-neutral-900 font-medium">
                    Franciska Amillia Crecynda Essaydora
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Rating Section */}
          <div className="flex flex-col items-center pt-1">
            <p className="text-base sm:text-lg font-medium text-neutral-800 mb-2">
              Rate this product:
            </p>
            <div
              className="flex items-center gap-1.5"
              role="radiogroup"
              aria-label="Rate this product"
            >
              {[1, 2, 3, 4, 5].map((star) => {
                const isSelected = (hoverRating || rating) >= star;
                return (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    aria-label={`${star} star${star > 1 ? 's' : ''}`}
                    className="p-1 cursor-pointer transition-transform duration-150 hover:scale-120 active:scale-95 focus:outline-none"
                  >
                    <Star
                      className={`w-7 h-7 sm:w-8 sm:h-8 transition-colors duration-150 ${
                        isSelected
                          ? 'text-amber-400 fill-amber-400'
                          : 'text-neutral-300 fill-transparent hover:text-amber-300'
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </motion.main>
    </div>
  );
}
