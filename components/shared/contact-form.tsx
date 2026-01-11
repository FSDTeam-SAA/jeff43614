"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Send } from "lucide-react";

export default function ContactSection() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) setStatus("success");
      else setStatus("error");
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* LEFT SIDE: INFO & MAP */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-4xl md:text-6xl font-black text-black uppercase italic leading-none mb-6">
                Get a <span className="text-primary">Free Quote</span>
              </h2>
              <p className="text-gray-600 text-lg font-poppins max-w-md">
                Ready to transform your parking lot? Contact us today for
                professional striping services across Ohio and Michigan.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-slate-50 border border-gray-100 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-primary uppercase tracking-widest">
                    Call Us
                  </p>
                  <a
                    href="tel:4193817083"
                    className="text-sm md:text-base font-black text-black"
                  >
                    (419) 381-7083
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-slate-50 border border-gray-100 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-primary uppercase tracking-widest">
                    Email Us
                  </p>
                  <a
                    href="mailto:workingbuckeye@yahoo.com"
                    className="text-sm md:text-base font-black text-black"
                  >
                    workingbuckeye@yahoo.com
                  </a>
                </div>
              </div>
            </div>

            {/* Google Map Placeholder - Replace src with your specific location embed link */}
            {/* <div className="w-full h-80 rounded-[2rem] overflow-hidden border border-gray-100 grayscale hover:grayscale-0 transition-all duration-700 shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11910.45719942734!2d-83.6700!3d41.6500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b860000000000%3A0x0!2zNDHCsDM5JzAwLjAiTiA4M8KwNDAnMDAuMCJX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div> */}
          </motion.div>

          {/* RIGHT SIDE: FORM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-gray-100"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-gray-500 ml-1">
                    Your Name
                  </label>
                  <input
                    required
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-gray-500 ml-1">
                    Email Address
                  </label>
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-gray-500 ml-1">
                  Message
                </label>
                <textarea
                  required
                  name="message"
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button
                disabled={status === "sending"}
                type="submit"
                className="w-full bg-black hover:bg-primary hover:text-black text-white font-black py-5 rounded-xl transition-all duration-300 uppercase tracking-[0.2em] flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {status === "sending"
                  ? "Sending..."
                  : status === "success"
                  ? "Sent Successfully!"
                  : "Schedule Now"}
                <Send size={20} />
              </button>

              {status === "error" && (
                <p className="text-red-500 text-center font-bold">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
