"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Award } from "lucide-react";

export default function AboutHeritage() {
  return (
    <section className="py-16 lg:py-32 bg-white overflow-hidden">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-8"
          >
            <div className="space-y-4">
              <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs">
                Our Heritage
              </span>
              <h2 className="headline font-black text-black uppercase italic leading-none">
                Trusted <span className="text-primary">Striping</span>{" "}
                Specialists
              </h2>
            </div>

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed font-poppins">
              <p>
                <strong>Line It Up Line Striping, LLC</strong> is a trusted
                parking lot striping company serving Ohio, lower Michigan, and
                eastern Indiana. We use only industry-leading{" "}
                <strong>Sherwin-Williams</strong> line striping paint and are
                fully insured.
              </p>
              <p>
                With 16 years of experience, we provide quality pavement
                markings that give your lot the professional look it deserves.
                Whether it’s laying out a new lot or re-striping, we deliver
                perfection.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <ShieldCheck size={28} />
                </div>
                <span className="font-bold uppercase italic text-sm">
                  Fully Insured
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Award size={28} />
                </div>
                <span className="font-bold uppercase italic text-sm">
                  Sherwin-Williams Quality
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-slate-50">
              <Image
                src="/images/services/about_1.jpg"
                alt="Parking Lot Striping Process"
                width={800}
                height={600}
                className="object-cover w-full aspect-4/3"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
