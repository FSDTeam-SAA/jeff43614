"use client";

import { servicesData } from "@/app/data/services-data";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import ServiceCard from "../shared/service-card";

export default function ServiceHome() {
  // Taking the first 3 services
  const sortedServices = servicesData.slice(0, 3);

  return (
    <section className="py-16 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-12 lg:mb-20 gap-6">
          <div className="max-w-2xl">
            <h2 className="headline font-black text-black uppercase italic leading-[0.9]">
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
              <ServiceCard
                title={service.title}
                description={service.description}
                image={service.image as string}
                index={index}
              />
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
