"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, easeInOut } from "framer-motion";

const bgImages = [
  "/images/banner1.jpg",
  "/images/banner2.jpg",
  "/images/banner3.jpg",
];

const fadeVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: easeInOut } },
  exit: { opacity: 0, transition: { duration: 0.8, ease: easeInOut } },
};

export default function HomeBanner() {
  const [activeIndex, setActiveIndex] = useState(0);

  // --- Auto-play Logic ---
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === bgImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // 4 seconds

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section className="relative h-[92vh] min-h-150 w-full overflow-hidden bg-black">
      {/* 1. BACKGROUND CAROUSEL LAYER */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={activeIndex}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={fadeVariants}
          className="absolute inset-0 z-0"
        >
          <Image
            src={bgImages[activeIndex]}
            alt={`Banner Background ${activeIndex + 1}`}
            fill
            priority
            className="object-cover"
            quality={90}
          />
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>
      </AnimatePresence>

      {/* 2. STATIC CENTERED CONTENT LAYER */}
      <div className="relative z-10 container mx-auto h-full flex flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-4xl space-y-6"
        >
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-black text-white uppercase tracking-tight leading-tight">
            Parking Lot
            <span className="block text-primary">Line Striping Experts</span>
          </h1>

          <p className="text-lg md:text-2xl text-gray-200 font-medium leading-relaxed font-poppins">
            &quot;Exceptional Service with a Commitment to Your
            Satisfaction!&quot;
            <br className="hidden md:block" /> Parking Lot Striping Services.
          </p>

          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-block bg-primary hover:bg-primary/90 text-black text-lg font-bold py-4 px-10 rounded-full shadow-lg shadow-primary/20 transition-all transform hover:scale-105 hover:shadow-xl"
            >
              Schedule
            </Link>

            {/* Scroll Indicator */}
            <div className="translate-y-12 flex flex-col items-center gap-2">
              <motion.span
                className="text-sm uppercase tracking-widest text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                Scroll
              </motion.span>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex flex-col items-center"
              >
                <span className="block w-3 h-3 border-b-2 border-r-2 border-primary rotate-45" />
                <span className="block w-3 h-3 border-b-2 border-r-2 border-primary rotate-45 -mt-1 opacity-70" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 3. BOTTOM PREVIEW WIDGET LAYER */}
      {/* Adjusted position to md:bottom-20 to sit above the angled divider */}
      <div className="absolute md:bottom-32 md:right-8 bottom-20 right-1/2 translate-x-1/2 md:translate-x-0 z-40 p-3 bg-black/40 backdrop-blur-sm rounded-xl border border-white/10">
        <div className="flex items-center gap-3">
          {bgImages.map((img, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`relative h-12 w-16 md:h-16 md:w-20 rounded-lg overflow-hidden transition-all duration-300 ease-out ${
                  isActive
                    ? "ring-2 ring-primary scale-105 shadow-md"
                    : "opacity-60 hover:opacity-100 hover:scale-105"
                }`}
                aria-label={`Switch to background image ${index + 1}`}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
                {isActive && (
                  <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Skews UP towards the right side to match reference image */}
      <div
        className="absolute z-30 -bottom-24 -right-5 md:-right-10 w-[110%] h-48 bg-white rotate-3 origin-bottom-right shadow-[0_-10px_40px_rgba(0,0,0,0.1)] md:block"
        aria-hidden="true"
      ></div>
    </section>
  );
}
