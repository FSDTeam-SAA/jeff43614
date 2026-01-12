"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-12 lg:py-20 bg-primary overflow-hidden">
      {/* Background Decorative Pattern (Subtle Stripes) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_40px,rgba(0,0,0,1)_40px,rgba(0,0,0,1)_80px)]" />
      </div>

      <div className="container mx-auto px-4 mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-4"
        >
          <h2 className="headline font-black text-black uppercase italic leading-none tracking-tighter">
            Ready to <span className="text-white">Line It Up?</span>
          </h2>

          <p className="text-black/80 text-lg md:text-xl font-poppins font-medium max-w-2xl mx-auto">
            Whether it&apos;s a new layout or a refresh of your existing lot,
            our experts are ready to deliver precision results. Get your free
            estimate today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 pt-2">
            {/* Main Contact Button */}
            <Link href="/contact" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-10 py-5 bg-black text-white font-black uppercase italic tracking-widest flex items-center justify-center gap-3 rounded-xl shadow-2xl hover:bg-slate-900 transition-colors cursor-pointer"
              >
                Get a Free Quote
                <ArrowRight size={20} className="text-primary" />
              </motion.button>
            </Link>

            {/* Quick Call Button */}
            <a href="tel:4193817083" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-10 py-5 bg-white text-black font-black uppercase italic tracking-widest border-2 border-black/10 flex items-center justify-center gap-3 rounded-xl shadow-xl hover:bg-slate-50 transition-colors cursor-pointer"
              >
                <PhoneCall size={20} />
                (419) 381-7083
              </motion.button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
