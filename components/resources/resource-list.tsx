"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, ExternalLink, ShieldCheck } from "lucide-react";

const sdsLinks = [
  {
    title: "Hotline® Fast Dry Latex - Waterborne Traffic Marking Paint",
    id: "035777314654",
    url: "https://www.sherwin-williams.com/document/PDS/en/035777314654/",
  },
  {
    title: "Hotline® Fast Dry Latex - Waterborne Traffic Marking Paint",
    id: "035777314630",
    url: "https://www.sherwin-williams.com/document/PDS/en/035777314630/",
  },
  {
    title: "Hotline® Fast Dry Latex - Waterborne Traffic Marking Paint",
    id: "035777314671",
    url: "https://www.sherwin-williams.com/document/PDS/en/035777314616/",
  },
];

export default function ResourceList() {
  return (
    // Updated background to match the clean white of your current design
    <section className="lg:pt-16 lg:pb-24 pt-10 pb-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-4"
            >
              {/* Ensure your tailwind.config has the correct 'primary' hex or use text-[#EAB308] */}
              <ShieldCheck className="text-[#EAB308]" size={20} />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black">
                Compliance & Safety
              </span>
            </motion.div>

            <h2 className="headline font-black text-black uppercase italic tracking-tighter leading-none">
              SDS <span className="text-[#EAB308]">(Safety Data Sheets)</span>
            </h2>

            <p className="mt-6 text-gray-500 font-poppins text-lg max-w-2xl leading-relaxed">
              We prioritize safety and transparency. Access the official
              Sherwin-Williams technical documents for the premium paints we
              utilize on every project.
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 gap-4">
            {sdsLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                // Refined cards with softer shadows and cleaner borders
                className="group relative flex items-center justify-between p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:border-[#EAB308]/40 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-xl bg-white border border-gray-50 flex items-center justify-center text-gray-400 group-hover:text-[#EAB308] group-hover:border-[#EAB308]/20 transition-all">
                    <FileText size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase font-poppins text-primary mb-1">
                      Technical Document #{link.id}
                    </p>
                    <h3 className="font-bold text-black uppercase group-hover:text-[#EAB308] transition-colors">
                      {link.title}
                    </h3>
                  </div>
                </div>

                <div className="hidden md:flex items-center gap-2 text-gray-500 group-hover:text-black transition-colors">
                  <span className="text-[10px] font-black uppercase tracking-widest">
                    View PDF
                  </span>
                  <ExternalLink size={14} />
                </div>
              </motion.a>
            ))}
          </div>

          {/* Minimal Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="lg:mt-16 mt-10 pt-5 border-t border-gray-200 text-center"
          >
            <p className="text-gray-800 text-[10px] font-bold uppercase tracking-[0.3em]">
              Line It Up Line Striping, LLC{" "}
              <span className="mx-2 text-[#EAB308]">•</span> Safety First
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
