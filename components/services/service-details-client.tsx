"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Service } from "@/data/services-data";
import CTASection from "@/components/shared/cta-section";

interface ServiceDetailsClientProps {
    service: Service;
}

export default function ServiceDetailsClient({ service }: ServiceDetailsClientProps) {
    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex-1 space-y-8"
                        >
                            <Link
                                href="/services"
                                className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 hover:text-[#EAB308] transition-colors group"
                            >
                                <ArrowLeft
                                    size={14}
                                    className="group-hover:-translate-x-1 transition-transform"
                                />
                                Back to Services
                            </Link>

                            <div className="space-y-4">
                                <h1 className="headline font-black text-black uppercase italic leading-[0.9] tracking-tighter">
                                    {service.title.split(" ").slice(0, -1).join(" ")} <br />
                                    <span className="text-[#EAB308]">
                                        {service.title.split(" ").slice(-1)}
                                    </span>
                                </h1>
                                <div className="h-1.5 w-20 bg-black" />
                            </div>

                            <p className="text-gray-600 text-lg md:text-xl text-justify font-poppins leading-relaxed max-w-2xl">
                                {service.description}
                            </p>

                            <div className="flex flex-wrap gap-6 pt-4">
                                <div className="flex items-center gap-2">
                                    <ShieldCheck className="text-[#EAB308]" size={20} />
                                    <span className="text-[10px] font-black uppercase tracking-widest">
                                        Professional Grade
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="text-[#EAB308]" size={20} />
                                    <span className="text-[10px] font-black uppercase tracking-widest">
                                        ADA Compliant
                                    </span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Service Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="flex-1 w-full"
                        >
                            <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-4 border-slate-50">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
            {/* Call to Action */}
            <CTASection />
        </main>
    );
}
