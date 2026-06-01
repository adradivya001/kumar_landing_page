"use client";

import { motion } from "framer-motion";
import { Phone, AlertOctagon, Truck, Heart } from "lucide-react";

export default function EmergencyCallout() {
  return (
    <section id="emergency" className="py-20 bg-gradient-to-r from-red-700 via-red-600 to-navy-900 text-white font-sans relative overflow-hidden">
      {/* Decorative pulse glow */}
      <div className="absolute inset-0 bg-red-600/10 animate-pulse pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full bg-white/5 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Copy Left Side */}
          <div className="lg:col-span-8 flex flex-col gap-4 text-center lg:text-left">
            <div className="inline-flex items-center justify-center lg:justify-start gap-2 self-center lg:self-start bg-white/20 border border-white/20 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-widest text-white shadow-sm">
              <AlertOctagon className="h-4 w-4 animate-bounce" />
              <span>Critical Care Availability</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              24/7 Orthopedic Trauma &amp; Emergency Support
            </h2>
            
            <p className="text-sm sm:text-base text-red-50 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              For complex joint dislocations, fractures, sports injuries, or road traffic accidents, our trauma team led by Dr. Kumar is available for immediate triaging, diagnostics, and emergency surgical stabilization.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2 max-w-xl mx-auto lg:mx-0 text-left text-xs text-red-100">
              <div className="flex gap-2">
                <Truck className="h-5 w-5 text-teal-300 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Ambulance dispatch</span>
                  <span>Coordinated transit assistance</span>
                </div>
              </div>
              <div className="flex gap-2">
                <ShieldCheckIcon className="h-5 w-5 text-teal-300 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Immediate Admission</span>
                  <span>Direct triage to OT path</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Heart className="h-5 w-5 text-teal-300 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">In-house Imaging</span>
                  <span>24/7 X-Ray &amp; Lab support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions Right Side */}
          <div className="lg:col-span-4 flex flex-col gap-4 items-center justify-center">
            
            {/* Call button */}
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="tel:+918554245678"
              className="w-full max-w-[320px] bg-white text-red-700 py-5 rounded-2xl text-center shadow-2xl flex flex-col items-center justify-center gap-1 font-black transition-transform glow-teal"
            >
              <div className="flex items-center gap-2 text-red-600 text-lg">
                <Phone className="h-6 w-6 stroke-[3] animate-pulse" />
                <span>08554-245678</span>
              </div>
              <span className="text-[10px] text-gray-500 font-extrabold uppercase tracking-widest mt-0.5">
                LANDLINE EMERGENCY LINE
              </span>
            </motion.a>

            {/* Mobile number */}
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="tel:+919440275556"
              className="w-full max-w-[320px] bg-navy-800 border border-navy-700/80 text-white py-4 rounded-2xl text-center shadow-lg flex items-center justify-center gap-2 font-bold transition-all hover:bg-navy-900"
            >
              <Phone className="h-4.5 w-4.5 text-teal-400" />
              <span>Call Mobile: +91 94402 75556</span>
            </motion.a>
            
          </div>

        </div>
      </div>
    </section>
  );
}

// Inline fallback icon for safety
function ShieldCheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2.5"
      stroke="currentColor"
      {...props}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
    </svg>
  );
}
