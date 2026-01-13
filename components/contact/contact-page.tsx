"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Send, MapPin } from "lucide-react";

export default function ContactPageContent() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
      console.error(err);
    }
  };

  return (
    <section className="py-16 lg:py-32 bg-white">
      <div className="container mx-auto px-4 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LEFT SIDE: INFO & MAP */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <h2 className="text-4xl md:text-6xl font-black text-black uppercase italic leading-none mb-6">
                Get a <span className="text-[#EAB308]">Free Quote</span>
              </h2>
              <p className="text-gray-600 text-lg font-poppins max-w-md">
                Ready to transform your parking lot? Contact{" "}
                <strong>Line It Up Line Striping, LLC</strong> today for
                professional services across Ohio and Michigan.
              </p>
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center gap-4 group p-4 rounded-2xl bg-slate-50 border border-gray-100 transition-all hover:shadow-md">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#EAB308] shadow-sm group-hover:bg-[#EAB308] group-hover:text-white transition-all">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-[#EAB308] uppercase tracking-widest">
                    Call Us
                  </p>
                  <a
                    href="tel:4193817083"
                    className="text-sm font-bold text-black"
                  >
                    (419) 381-7083
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group p-4 rounded-2xl bg-slate-50 border border-gray-100 transition-all hover:shadow-md">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#EAB308] shadow-sm group-hover:bg-[#EAB308] group-hover:text-white transition-all">
                  <Mail size={20} />
                </div>
                <div className="overflow-hidden">
                  <p className="text-[10px] font-black text-[#EAB308] uppercase tracking-widest">
                    Email Us
                  </p>
                  <a
                    href="mailto:workingbuckeye@gmail.com"
                    className="text-sm font-bold text-black truncate block"
                  >
                    workingbuckeye@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin size={16} className="text-[#EAB308]" />
                <span className="text-xs font-bold uppercase tracking-widest">
                  Serving Ohio & Michigan
                </span>
              </div>
              <div className="w-full h-80 rounded-lg overflow-hidden border-8 border-slate-50 shadow-xl">
                <iframe
                  title="Service Area Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232.81712578287687!2d-83.63977167165899!3d41.608907310984186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883c79b41a2471d7%3A0x43fb8ebbc0a1608e!2s1643%20Park%20Forest%20Dr%2C%20Toledo%2C%20OH%2043614%2C%20USA!5e1!3m2!1sen!2sbd!4v1768330688287!5m2!1sen!2sbd"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: FORM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-8 md:p-12 rounded-[3rem] border border-gray-100 shadow-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-1">
                    Your Name
                  </label>
                  <input
                    required
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:border-[#EAB308] focus:ring-4 focus:ring-[#EAB308]/10 outline-none transition-all font-poppins"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-1">
                    Email Address
                  </label>
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:border-[#EAB308] focus:ring-4 focus:ring-[#EAB308]/10 outline-none transition-all font-poppins"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-1">
                  Message
                </label>
                <textarea
                  required
                  name="message"
                  rows={6}
                  placeholder="Tell us about your project location and size..."
                  className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:border-[#EAB308] focus:ring-4 focus:ring-[#EAB308]/10 outline-none transition-all resize-none font-poppins"
                ></textarea>
              </div>

              <button
                disabled={status === "sending"}
                type="submit"
                className="w-full bg-[#EAB308] hover:bg-black text-white font-black py-5 rounded-2xl transition-all duration-300 uppercase tracking-[0.2em] flex items-center justify-center gap-3 disabled:opacity-50 shadow-lg shadow-[#EAB308]/20 hover:shadow-black/20"
              >
                {status === "sending"
                  ? "Sending..."
                  : status === "success"
                  ? "Quote Requested!"
                  : "Schedule Now"}
                <Send
                  size={18}
                  className={status === "success" ? "hidden" : "block"}
                />
              </button>

              {status === "error" && (
                <p className="text-red-500 text-center text-xs font-bold uppercase tracking-widest">
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
