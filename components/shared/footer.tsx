"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  { icon: <Facebook size={20} />, href: "#" },
  { icon: <Instagram size={20} />, href: "#" },
  { icon: <Twitter size={20} />, href: "#" },
  { icon: <Linkedin size={20} />, href: "#" },
];

const hours = [
  { day: "Monday", time: "Open 24 Hours" },
  { day: "Tuesday", time: "Open 24 Hours" },
  { day: "Wednesday", time: "Open 24 Hours" },
  { day: "Thursday", time: "Open 24 Hours" },
  { day: "Friday", time: "Open 24 Hours" },
  { day: "Saturday", time: "Open 24 Hours" },
  { day: "Sunday", time: "Open 24 Hours" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-20 pb-10 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* 1. COMPANY INFO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Link href="/" className="inline-block">
              {/* Replace with your actual logo image path */}
              <div className="flex items-center gap-2">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={150}
                  height={75}
                  className="w-40 h-16 object-contain"
                />
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed font-poppins">
              Serving Businesses With Expert Parking Lot Striping. Line It Up
              Line Striping, LLC Is A Trusted Parking Lot Striping Company
              Serving Ohio, Lower Michigan And Eastern Indiana.
            </p>
          </motion.div>

          {/* 2. QUICK LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <h4 className="text-lg font-black uppercase italic tracking-widest text-primary">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white flex items-center gap-2 group transition-colors uppercase text-xs font-bold tracking-widest"
                  >
                    <span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 3. FOLLOW US */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h4 className="text-lg font-black uppercase italic tracking-widest text-primary">
              Follow Us Online
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <Link
                  key={i}
                  href={social.href}
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-black hover:border-primary transition-all duration-500 hover:-translate-y-2"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
            <div className="pt-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <p className="text-[10px] uppercase font-black tracking-[0.2em] text-gray-500 mb-2">
                  Primary Contact
                </p>
                <a href="tel:4193817083" className="text-sm font-bold italic">
                  (419) 381-7083
                </a>
              </div>
            </div>
          </motion.div>
 
          {/* 4. HOURS OF OPERATION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <h4 className="text-lg font-black uppercase italic tracking-widest text-primary">
              Hours of Operation
            </h4>
            <div className="space-y-2">
              {hours.map((item) => (
                <div
                  key={item.day}
                  className="flex justify-between items-center text-xs font-poppins border-b border-white/5 pb-2 last:border-0"
                >
                  <span className="text-gray-400 uppercase tracking-tighter">
                    {item.day}
                  </span>
                  <span className="text-white font-bold italic">
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-center items-center gap-6">
          <p className="text-gray-500 text-[10px] uppercase font-black tracking-[0.3em]">
            © {currentYear} Line It Up Line Striping, LLC. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
    </footer>
  );
}
