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

  // Close menu on navigation
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
      <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
        <div className="container">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="relative z-10">
              <Image
                src="/images/logo-3.png"
                alt="Logo"
                width={200}
                height={50}
                className="w-auto h-12 object-contain"
              />
            </Link>

            {/* Desktop Links */}
            <ul className="hidden lg:flex items-center">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-8 py-5 text-sm font-bold uppercase tracking-tight transition-all ${
                      pathName === link.href
                        ? "bg-primary text-black"
                        : "hover:bg-gray-100 bg-black text-white hover:text-black"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden text-black"
              aria-label="Open Menu"
            >
              <Menu size={30} />
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
            {/* Mobile Menu Header - Keeps Logo and X at the top */}
            <div className="flex items-center justify-between h-20 px-4 border-b border-white/10">
              <Image
                src="/images/logo-3.png"
                alt="Logo"
                width={180}
                height={45}
                className="w-auto h-10"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-white"
              >
                <X size={35} />
              </button>
            </div>

            {/* Mobile Menu Links - Pushed below the header */}
            <div className="flex-1 flex flex-col justify-center items-center">
              <ul className="flex flex-col items-center gap-6">
                {navLinks.map((link) => (
                  <motion.li key={link.name} variants={linkVariants}>
                    <Link
                      href={link.href}
                      className={`text-4xl font-black uppercase italic ${
                        pathName === link.href ? "text-[#facc15]" : "text-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
