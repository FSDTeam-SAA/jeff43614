"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CompanyCommitment() {
  return (
    <section className="relative py-16 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 relative order-2 lg:order-1"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden border-4 border-slate-50 shadow-2xl">
              <Image
                src="/images/about.jpeg"
                alt="Professional Striping Equipment"
                width={700}
                height={800}
                className="object-cover w-full aspect-4/3"
              />
            </div>
            {/* Background Primary Accent */}
            <div className="absolute top-1/2 -left-12 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -z-10" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-8 order-1 lg:order-2"
          >
            <div className="space-y-4">
              <h2 className="text-primary font-bold tracking-[0.4em] uppercase text-xs">
                Our Commitment
              </h2>
              <h3 className="headline font-black text-black uppercase italic leading-tight">
                Quality Results <br />{" "}
                <span className="text-primary">On Every Project</span>
              </h3>
            </div>

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed font-poppins">
              <p>
                For years, our company has proudly catered to the parking lot
                striping requirements of <strong>Ohio and Michigan</strong>. Our
                commitment to quality is evident in every project we undertake.
                We offer professional support throughout the entire process,
                ensuring you feel informed and confident every step of the way.
              </p>
              <p>
                Utilizing cutting-edge technology and premium equipment, along
                with extensive hands-on experience, we provide durable results
                that improve both the appearance and functionality of your lot.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
