"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Target } from "lucide-react";

export default function QualityPromise() {
  const points = [
    {
      title: "Quality",
      desc: "Premium Sherwin-Williams paint.",
      icon: <Shield size={24} />,
    },
    {
      title: "Safety",
      desc: "Compliant markings for lot safety.",
      icon: <Zap size={24} />,
    },
    {
      title: "Efficiency",
      desc: "Durable results completed on time.",
      icon: <Target size={24} />,
    },
  ];

  return (
    <section className="relative py-16 lg:py-32 bg-slate-50 overflow-hidden">
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="headline font-black uppercase italic text-black"
          >
            Striping Has Never <br />{" "}
            <span className="text-primary">Looked So Good</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg md:text-xl font-poppins leading-relaxed"
          >
            Quality, safety, and efficiency are central to our mission.
            Utilizing cutting-edge technology and premium equipment, we provide
            professional results that improve the functionality of your lot.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-5 gap-4 lg:pt-10">
            {points.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="p-10 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm text-left group hover:border-primary/50 hover:shadow-xl transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h4 className="text-black font-bold uppercase italic title mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-500 font-poppins leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
