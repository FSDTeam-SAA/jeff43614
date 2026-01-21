"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function HomeAboutSection() {
  return (
    <section className="relative bg-white overflow-hidden pb-8 lg:pb-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* LEFT CONTENT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-4 md:space-y-6"
          >
            <div className="space-y-2">
              <h2 className="text-primary headline font-black uppercase italic leading-none">
                15+ YEARS
              </h2>
              <h3 className="text-black headline font-black uppercase italic leading-none">
                OF EXPERIENCE
              </h3>
            </div>

            <div className="space-y-4 md:space-y-6 text-gray-700 text-lg leading-relaxed font-poppins">
              <p>
                <strong>Line It Up Line Striping</strong> has been delivering
                top-tier <strong>Commercial Line Painting</strong> in Ohio and
                Michigan for over 15 years. We realize you have a choice, which
                is why we focus on precision{" "}
                <strong>Traffic Flow Optimization</strong> and{" "}
                <strong>ADA Code Compliance</strong> to ensure perfection.
              </p>
              <p>
                We understand that your parking lot is the first impression
                customers have. Our goal is to enhance safety and aesthetics,
                delivering a flawless result every time.
              </p>
            </div>

            {/* CTA Button */}
            <Link
              href="/about"
              className="inline-block text-sm md:text-base bg-primary hover:bg-gray-800 text-white font-bold py-3 px-5 md:py-3 md:px-8 rounded-sm transition-all uppercase tracking-widest"
            >
              Read More
            </Link>

            {/* Testimonial Block */}
            <div className="mt-6 lg:mt-12 p-6 border-l-4 border-primary bg-gray-50 rounded-r-lg italic">
              <Quote
                className="text-primary mb-2"
                size={30}
                fill="currentColor"
              />
              <p className="text-gray-800 text-base md:text-lg lg:text-xl font-medium mb-4 font-poppins">
                &quot;Not only did they finish the job in a timely manner they
                have incredible attention to all the details.&quot;
              </p>
              <span className="text-black font-bold uppercase tracking-wider text-base md:text-lg lg:text-xl">
                — Anthony Harris
              </span>
            </div>
          </motion.div>

          {/* RIGHT IMAGE COLUMN */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative"
          >
            {/* Decorative Red/Primary Border matching reference image */}
            <div className="absolute -inset-4 border-2 border-primary rounded-2xl opacity-50 hidden md:block" />

            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about.jpeg"
                alt="Parking Lot Striping Professionals"
                width={800}
                height={600}
                className="w-full aspect-5/4 object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
