"use client";

import { motion } from "framer-motion";
import { Phone, Calendar, ArrowRight, ShieldCheck, HeartPulse } from "lucide-react";
import Image from "next/image";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center bg-gradient-to-br from-navy-50 via-white to-navy-100/50 pt-28 pb-16 overflow-hidden font-sans dark:from-zinc-950 dark:via-zinc-900 dark:to-navy-950/20"
    >
      {/* Decorative Blur Spheres */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-teal-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-navy-500/5 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-12 flex flex-col gap-6 text-center items-center justify-center max-w-5xl mx-auto">


            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-navy-800 dark:text-white leading-tight"
            >
              Advanced Care.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-navy-500 dark:from-teal-400 dark:to-teal-200">
                Trusted Healing.
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-gray-600 dark:text-zinc-300 leading-relaxed max-w-2xl mx-auto"
            >
              Kumar Ortho & Multi-Speciality Hospital delivers state-of-the-art orthopedic surgery, trauma care, and rehabilitation. Established in 2021 in Anantapur, we provide compassionate and affordable healthcare centered around your recovery.
            </motion.p>

            {/* Hero CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-3"
            >
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-teal-600 px-7 py-4 text-base font-bold text-white shadow-lg shadow-teal-600/20 hover:bg-teal-700 hover:scale-102 transition-all active:scale-98"
              >
                <Calendar className="h-5 w-5" />
                <span>Book Appointment</span>
              </button>
              
              <a
                href="#emergency"
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-white border border-gray-200 px-7 py-4 text-base font-bold text-red-600 shadow-sm hover:bg-red-50/50 hover:border-red-200 dark:bg-zinc-900 dark:border-zinc-800 dark:hover:bg-zinc-800 transition-all hover:scale-102 active:scale-98"
              >
                <span>Emergency Care</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="tel:+919440275556"
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-navy-50/60 px-7 py-4 text-base font-semibold text-navy-800 dark:bg-zinc-850 dark:text-zinc-200 transition-all hover:bg-navy-100"
              >
                <Phone className="h-4.5 w-4.5" />
                <span>Call Hospital</span>
              </a>
            </motion.div>

            {/* Quick trust metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 gap-4 border-t border-gray-200 dark:border-zinc-800 pt-8 mt-4 text-left max-w-md mx-auto justify-center"
            >
              <div className="flex gap-2">
                <ShieldCheck className="h-6 w-6 text-teal-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="block text-sm font-bold text-navy-800 dark:text-white">Affordable Care</span>
                  <span className="text-xs text-gray-500 dark:text-zinc-400">Quality, specialized healing</span>
                </div>
              </div>
              <div className="flex gap-2">
                <ShieldCheck className="h-6 w-6 text-teal-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="block text-sm font-bold text-navy-800 dark:text-white">Expert Specialists</span>
                  <span className="text-xs text-gray-500 dark:text-zinc-400">Dr. Kumar & medical team</span>
                </div>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
