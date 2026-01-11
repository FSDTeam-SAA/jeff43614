"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, Trophy, Clock } from "lucide-react";

const features = [
    {
        title: "Attention to Details",
        description: "Meticulous attention to detail sets us apart in delivering excellence.",
        icon: <Building2 className="w-10 h-10" />,
    },
    {
        title: "Customer Satisfaction",
        description: "We understand that word of mouth is crucial, which is why we strive to ensure every customer is satisfied.",
        icon: <Trophy className="w-10 h-10" />,
    },
    {
        title: "Optimal Efficiency",
        description: "We guarantee maximum productivity while minimizing waste delivering exceptional results.",
        icon: <Clock className="w-10 h-10" />,
    },
];

export default function FeaturesSection() {
    return (
        <section className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
            {/* Subtle Background Element */}
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-primary/30 to-transparent" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 lg:mb-24">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-bold tracking-[0.4em] uppercase text-sm mb-4"
                    >
                        Our Core Values
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="headline font-black text-black uppercase italic tracking-tight"
                    >
                        We Are Your Local <span className="text-primary">Striping Experts!</span>
                    </motion.h2>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {features.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ y: -12 }}
                            className="group relative p-10 rounded-[2rem] bg-white border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)] transition-all duration-500 hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] hover:border-primary/20"
                        >
                            {/* Icon Container with soft glow */}
                            <div className="relative mb-8 w-20 h-20 flex items-center justify-center rounded-2xl bg-slate-50 border border-gray-100 group-hover:bg-primary/5 group-hover:border-primary/30 transition-all duration-500">
                                <div className="text-primary relative z-10 group-hover:scale-110 transition-transform duration-500">
                                    {item.icon}
                                </div>
                                {/* Inner soft glow that appears on hover */}
                                <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>

                            {/* Text Content */}
                            <h3 className="lg:text-2xl font-black text-black uppercase italic mb-4 group-hover:text-primary transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed font-poppins text-lg">
                                {item.description}
                            </p>

                            {/* Decorative Accent Link-style line */}
                            <div className="mt-8 w-12 h-1.5 bg-gray-100 group-hover:w-24 group-hover:bg-primary transition-all duration-500 rounded-full" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}