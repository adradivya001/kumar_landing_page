"use client";

import { motion } from "framer-motion";
import { Phone, AlertCircle, MessageSquare } from "lucide-react";

export default function EmergencyCallout() {
  return (
    <section id="emergency" className="py-20 bg-[#0B1F3A] text-white font-sans relative overflow-hidden">
      {/* Decorative pulse glow */}
      <div className="absolute inset-0 bg-blue-500/5 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
          <div className="inline-flex items-center gap-2 bg-red-600 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest text-white shadow-lg shadow-red-600/30 glow-pulse-red">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span>24/7 Emergency trauma center</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Need Immediate Medical Assistance?
          </h2>
          
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl font-medium">
            Our trauma surgery and medical emergency response teams are active round-the-clock. If you require immediate stabilization or ambulance transit, reach out instantly.
          </p>

          {/* Large Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center mt-4">
            {/* Call button */}
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="tel:+919440275556"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 rounded-xl bg-red-600 px-8 py-4.5 text-base font-bold text-white shadow-xl shadow-red-600/20 hover:bg-red-700 transition-all"
            >
              <Phone className="h-5 w-5 stroke-[2.5]" />
              <span>Call Emergency: +91 94402 75556</span>
            </motion.a>

            {/* WhatsApp button */}
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="https://wa.me/919440275556?text=Emergency%20assistance%20needed"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 rounded-xl bg-emerald-600 px-8 py-4.5 text-base font-bold text-white shadow-xl shadow-emerald-600/20 hover:bg-emerald-700 transition-all"
            >
              <MessageSquare className="h-5 w-5 fill-white stroke-none" />
              <span>WhatsApp Emergency</span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}

