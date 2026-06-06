"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Phone, ArrowRight, Star } from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
}

// 60FPS Count-up Counter Component
function Counter({ value, duration = 2000 }: { value: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const num = parseInt(value.replace(/\D/g, ""), 10);
  const suffix = value.replace(/\d/g, "");

  useEffect(() => {
    if (isNaN(num) || value.includes("/")) return;
    let startTimestamp: number | null = null;
    let animFrame: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutQuad curve for smooth decelerating animation
      const easedProgress = progress * (2 - progress);
      setCount(Math.floor(easedProgress * num));
      if (progress < 1) {
        animFrame = window.requestAnimationFrame(step);
      }
    };
    animFrame = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animFrame);
  }, [num, duration, value]);

  if (isNaN(num) || value.includes("/")) {
    return <span>{value}</span>;
  }
  return <span>{count.toLocaleString()}{suffix}</span>;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] lg:h-screen lg:max-h-[700px] xl:max-h-[760px] flex items-stretch overflow-hidden pt-24 lg:pt-[96px]"
      style={{
        background: "linear-gradient(135deg, #F5FBFC 0%, #EAF7FA 40%, #FFFFFF 100%)",
      }}
    >
      {/* Background medical glows */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full bg-cyan-300/10 dark:bg-cyan-900/5 blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-blue-300/10 dark:bg-blue-900/5 blur-3xl pointer-events-none z-0" />

      {/* Split-Screen Grid */}
      <div className="w-full h-full lg:h-full grid grid-cols-1 lg:grid-cols-12 items-stretch relative z-10">
        
        {/* ── LEFT SIDE (45%) ── */}
        <div className="lg:col-span-5 flex flex-col justify-center px-6 sm:px-12 lg:pl-16 xl:pl-24 lg:pr-8 pt-6 lg:pt-8 pb-6 lg:pb-8 z-20">
          
          <div className="flex flex-col gap-3 lg:gap-4 items-start max-w-[650px] w-full">
            
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md border border-slate-200/50 dark:border-zinc-800/50 text-[10px] sm:text-[11px] font-bold text-[#0097A7] dark:text-cyan-400 uppercase tracking-widest shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.7)]" />
              <span>Leading Multispeciality Healthcare in Anantapur</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl sm:text-3xl lg:text-[36px] xl:text-[42px] font-bold tracking-tight text-[#0F172A] dark:text-white leading-[1.1] font-poppins"
            >
              Expert Orthopedic &
              <br />
              <span className="text-[#0097A7] dark:text-cyan-400">Multispeciality Care</span>
              <br />
              You Can Trust.
            </motion.h1>

            {/* Supporting Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base text-slate-500 dark:text-zinc-400 leading-relaxed font-sans"
            >
              Kumar Hospital helps you recover quickly from bone fractures, joint pains, and general health problems. We have friendly doctors, clean rooms, and 24/7 emergency care always ready for you.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-stretch sm:items-center mt-1"
            >
              {/* Primary CTA */}
              <button
                onClick={onOpenBooking}
                className="flex items-center justify-center gap-2 rounded-full bg-[#0097A7] hover:bg-[#00BCD4] text-white text-sm font-bold px-6 py-3 shadow-lg shadow-[#0097A7]/20 hover:shadow-[#00BCD4]/30 hover:scale-[1.02] active:scale-95 transition-all duration-300 cursor-pointer border border-[#0097A7]/10"
              >
                <Calendar className="h-4.5 w-4.5 stroke-[2]" />
                <span>Book Appointment</span>
                <ArrowRight className="h-4.5 w-4.5 ml-0.5" />
              </button>

              {/* Secondary CTA */}
              <a
                href="tel:+919440275556"
                className="flex items-center justify-center gap-2 rounded-full bg-white/40 dark:bg-zinc-850/40 backdrop-blur-sm border border-slate-200/80 dark:border-zinc-800 px-6 py-3 text-sm font-bold text-[#0F172A] dark:text-white shadow-sm hover:bg-red-50/50 dark:hover:bg-red-950/20 hover:border-red-200 transition-all hover:scale-[1.02] active:scale-95"
              >
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.7)]" />
                <Phone className="h-4 w-4" />
                <span>Emergency Care</span>
              </a>
            </motion.div>

            {/* Patient Trust Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 border-t border-slate-200/50 dark:border-zinc-800/50 pt-4 w-full"
            >
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4.5 w-4.5 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-sm font-black text-[#0F172A] dark:text-white ml-1">4.9 Rating</span>
              </div>
              <span className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 font-medium">
                Trusted by thousands of families across Anantapur.
              </span>
            </motion.div>

            {/* Statistics Section */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full mt-2"
            >
              {[
                { label: "Patients Served", value: "50,000+" },
                { label: "Specialists", value: "6+" },
                { label: "Departments", value: "8+" },
                { label: "Emergency Care", value: "24/7" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-white/45 dark:bg-zinc-900/40 backdrop-blur-md rounded-2xl p-2.5 border border-white/50 dark:border-zinc-800 shadow-sm hover:shadow-md hover:border-[#0097A7]/20 transition-all duration-300 flex flex-col items-center text-center justify-center group cursor-pointer"
                >
                  <span className="text-lg sm:text-xl font-black text-[#0097A7] dark:text-cyan-400 group-hover:scale-105 transition-transform duration-300">
                    <Counter value={stat.value} />
                  </span>
                  <span className="text-[9px] font-bold text-slate-500 dark:text-zinc-400 uppercase tracking-wider mt-1 leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

          </div>
        </div>

        {/* ── RIGHT SIDE (55%) ── */}
        <div className="lg:col-span-7 relative min-h-[400px] lg:min-h-full overflow-hidden flex items-end justify-center p-6 sm:p-10 lg:p-12 pb-0 sm:pb-0 lg:pb-0 z-10">
          
          {/* Main Building Image as a floating premium card */}
          <div className="relative w-full h-full max-h-[500px] xl:max-h-[560px] flex items-end justify-center z-12">
            <motion.img
              src="/building.png"
              alt="Kumar Hospital Building"
              className="w-auto h-full max-h-full object-contain rounded-[24px] lg:rounded-[32px] shadow-2xl border border-slate-200/50 dark:border-zinc-800/50 select-none pointer-events-none"
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>


          {/* Soft Medical Radial Blue Glow Overlay */}
          <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] bg-sky-400/20 rounded-full blur-3xl pointer-events-none z-10" />


        </div>
      </div>

      {/* Bottom curved wave transition divider */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
        <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none" className="w-full h-[40px] sm:h-[60px] translate-y-[2px]">
          <path d="M0,64 C240,112 480,112 720,80 C960,48 1200,48 1440,80 L1440,120 L0,120 Z" className="fill-[#F5FBFC] dark:fill-[#090d16]" />
        </svg>
      </div>

    </section>
  );
}
