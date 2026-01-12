"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, easeInOut, circOut } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  // Lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  const menuVariants = {
    closed: { y: "-100%", transition: { duration: 0.4, ease: easeInOut } },
    open: {
      y: 0,
      transition: {
        duration: 0.5,
        ease: circOut,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <>
      <nav className="fixed top-0 z-50 bg-white/20 backdrop-blur-md w-full border-b border-gray-100 py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative z-10">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={200}
                height={100}
                className="w-28 h-12 md:w-32 md:h-14 lg:w-44 lg:h-16 object-contain"
              />
            </Link>

            {/* Desktop Links - Now Minimalist */}
            <ul className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`px-6 py-2 text-xs font-black uppercase tracking-[0.2em] italic transition-all relative group ${
                      pathName === link.href
                        ? "text-black"
                        : "text-gray-400 hover:text-black"
                    }`}
                  >
                    {link.name}
                    {/* Minimal Active Indicator (Yellow Dot) */}
                    {pathName === link.href && (
                      <motion.div
                        layoutId="navUnderline"
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full"
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden text-primary p-2"
              aria-label="Open Menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-60 bg-black flex flex-col"
          >
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between h-24 px-6">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={180}
                height={45}
                className="w-auto h-10"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-primary"
              >
                <X size={32} />
              </button>
            </div>

            {/* Mobile Menu Links */}
            <div className="flex-1 flex flex-col justify-center items-center">
              <ul className="flex flex-col items-center gap-8">
                {navLinks.map((link) => (
                  <motion.li key={link.name} variants={linkVariants}>
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)} // FIXED: Closes menu automatically
                      className={`headline font-black uppercase italic tracking-tighter ${
                        pathName === link.href ? "text-primary" : "text-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Minimal Footer for Mobile Menu */}
            <div className="p-10 text-center">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                Line It Up Line Striping, LLC
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
