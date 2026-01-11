"use client";

import { servicesData } from "@/app/data/services-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ServiceHome() {
  // Taking the first 3 services
  const sortedServices = servicesData.slice(0, 3);

  return (
    <section className="py-16 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-12 lg:mb-20 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black text-black uppercase italic leading-[0.9]">
              A Complete Suite <br />
              <span className="text-primary">of Services</span>
            </h2>
            <div className="h-2 w-24 bg-primary mt-6"></div>
          </div>
          <p className="text-gray-600 max-w-sm font-medium">
            Professional precision for every project. We deliver high-quality
            striping solutions tailored to your specific facility needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {sortedServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="group cursor-pointer"
            >
              {/* Image Container with Hover Zoom */}
              <div className="relative w-full h-80 overflow-hidden rounded-2xl shadow-lg">
                <Image
                  fill
                  src={service.image as string}
                  alt={service.title}
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay Number */}
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md text-white w-10 h-10 flex items-center justify-center rounded-full font-bold border border-white/20">
                  0{index + 1}
                </div>
                {/* Bottom Gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="mt-6 space-y-3">
                <h3 className="text-2xl lg:text-3xl font-black text-black uppercase italic transition-colors group-hover:text-primary">
                  {service.title}
                </h3>
                <p className="text-gray-600 font-poppins line-clamp-3 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16 lg:mt-24">
          <Link
            href="/services"
            className="inline-flex items-center justify-center hover:bg-black bg-primary text-black hover:text-white font-black py-5 px-12 rounded-sm transition-all duration-300 uppercase tracking-[0.2em] text-sm shadow-xl"
          >
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
