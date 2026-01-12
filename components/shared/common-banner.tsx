"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface CommonBannerProps {
  title: string;
}

export default function CommonBanner({ title }: CommonBannerProps) {
  return (
    <section className="relative h-62.5 md:h-[45vh] w-full overflow-hidden bg-black flex items-center justify-center clip-path-banner">
      {/* 1. Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/banner2.jpg"
          alt={title}
          fill
          priority
          className="object-cover opacity-50"
          quality={90}
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/40 to-transparent" />
      </div>

      {/* 2. Centered Content */}
      <div className="relative z-10 container mx-auto px-4 text-center lg:mt-20 mt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Subtle Label */}
          <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-4 block">
            Line It Up Striping
          </span>

          {/* Main Title */}
          <h1 className="headline font-black text-white uppercase italic tracking-tighter leading-none mb-6">
            {title.split(" ").map((word, i) => (
              <span key={i} className={i % 2 !== 0 ? "text-primary" : ""}>
                {word}{" "}
              </span>
            ))}
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
