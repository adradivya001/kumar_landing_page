"use client";

import { motion } from "framer-motion";
import { Phone, Calendar, ArrowRight } from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-[96vh] flex items-center bg-gradient-to-br from-[#EAF3FF]/80 via-[#FFFFFF] to-[#F3F8FF] pt-28 pb-16 overflow-hidden font-sans"
    >
      {/* Premium Medical Grid Background & Rich Glowing Accents */}
      <div className="absolute inset-0 medical-grid opacity-75 pointer-events-none z-0" />
      
      {/* Dynamic backdrop glow overlays */}
      <div className="absolute top-0 left-1/4 w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-blue-300/20 to-indigo-300/10 blur-3xl pointer-events-none" />
      <div className="absolute -right-20 top-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-teal-300/15 to-blue-200/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[10%] w-[600px] h-[600px] rounded-full bg-blue-400/5 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:pl-16 lg:pr-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left items-start justify-center max-w-3xl">
            {/* Super premium Tag */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EAF3FF] border border-blue-100 text-xs font-bold text-blue-700 uppercase tracking-widest"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              <span>Leading Multispeciality Healthcare in Anantapur</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[54px] font-black tracking-tight text-[#0B1F3A] leading-[1.08] font-sans"
            >
              Healing Beyond Treatment.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
                Caring Beyond Expectations.
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-gray-600 dark:text-zinc-300 leading-relaxed max-w-xl font-medium"
            >
              From expert orthopedic care to comprehensive multispeciality services, we combine medical excellence, advanced technology, and compassionate support to help every patient recover with confidence.
            </motion.p>

            {/* Hero CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center mt-2"
            >
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700 hover:scale-102 transition-all active:scale-98"
              >
                <Calendar className="h-5 w-5" />
                <span>Book Appointment</span>
              </button>
              
              <a
                href="#emergency"
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-white border border-gray-200 px-8 py-4 text-base font-bold text-[#0B1F3A] shadow-sm hover:bg-red-50/50 hover:border-red-200 transition-all hover:scale-102 active:scale-98"
              >
                <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse mr-0.5" />
                <span>Emergency Care</span>
                <ArrowRight className="h-4 w-4 text-[#0B1F3A]" />
              </a>
            </motion.div>
          </div>

          {/* Graphical/Cinematic Hospital Overlay Column */}
          <div className="lg:col-span-5 relative flex justify-center items-center w-full">
            {/* Glowing Decorative Image Backplates */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/10 to-teal-400/10 rounded-[40px] blur-2xl opacity-75 pointer-events-none z-0" />
            <div className="absolute -top-10 -left-10 w-44 h-44 bg-teal-300/15 rounded-full blur-3xl pointer-events-none z-0" />
            <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-blue-300/15 rounded-full blur-3xl pointer-events-none z-0" />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full max-w-[540px] relative z-10"
            >
              <img
                src="/images/hero_bg.png"
                alt="Kumar Hospital Facilities"
                className="w-full h-auto object-contain rounded-[32px] border border-white/80 dark:border-zinc-800 shadow-[0_15px_35px_rgba(0,0,0,0.06)]"
              />
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
