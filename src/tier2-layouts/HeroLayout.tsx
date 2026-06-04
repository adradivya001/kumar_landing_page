"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { Phone, Calendar, ArrowRight, Activity, Heart, Plus } from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
}


const PARTICLES = [
  { icon: <Plus className="h-3 w-3" />, x: "12%", y: "18%", delay: 0, color: "text-blue-400" },
  { icon: <Heart className="h-3 w-3" />, x: "85%", y: "14%", delay: 0.8, color: "text-red-400" },
  { icon: <Activity className="h-3 w-3" />, x: "7%", y: "70%", delay: 1.5, color: "text-teal-400" },
  { icon: <Plus className="h-4 w-4" />, x: "90%", y: "60%", delay: 0.4, color: "text-indigo-400" },
  { icon: <Heart className="h-2.5 w-2.5" />, x: "75%", y: "80%", delay: 2, color: "text-pink-400" },
  { icon: <Plus className="h-2.5 w-2.5" />, x: "30%", y: "88%", delay: 1.2, color: "text-blue-300" },
  { icon: <Activity className="h-3 w-3" />, x: "60%", y: "8%", delay: 1.8, color: "text-teal-300" },
  { icon: <Heart className="h-3 w-3" />, x: "50%", y: "92%", delay: 0.6, color: "text-red-300" },
];

const STATS = [
  { label: "Patients Served", value: "50,000+" },
  { label: "Expert Specialists", value: "20+" },
  { label: "Years of Excellence", value: "15+" },
  { label: "Emergency Support", value: "24/7" },
];

export default function Hero({ onOpenBooking }: HeroProps) {
  const [statIdx, setStatIdx] = useState(0);
  const imgRef = useRef<HTMLDivElement>(null);

  // Mouse parallax
  const mouseX = useSpring(0, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 50, damping: 20 });
  const imgX = useTransform(mouseX, [-1, 1], [-8, 8]);
  const imgY = useTransform(mouseY, [-1, 1], [-5, 5]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const x = (e.clientX / window.innerWidth) * 2 - 1;
    const y = (e.clientY / window.innerHeight) * 2 - 1;
    mouseX.set(x);
    mouseY.set(y);
  }, [mouseX, mouseY]);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  // Stats ticker
  useEffect(() => {
    const t = setInterval(() => setStatIdx((prev) => (prev + 1) % STATS.length), 2200);
    return () => clearInterval(t);
  }, []);

  // Ripple effect
  const handleRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(btn.clientWidth, btn.clientHeight);
    const radius = diameter / 2;
    const rect = btn.getBoundingClientRect();
    circle.style.cssText = `width:${diameter}px;height:${diameter}px;left:${e.clientX - rect.left - radius}px;top:${e.clientY - rect.top - radius}px`;
    circle.className = "ripple-effect";
    btn.querySelector(".ripple-effect")?.remove();
    btn.appendChild(circle);
    circle.addEventListener("animationend", () => circle.remove());
  };

  return (
    <section
      id="home"
      className="relative min-h-[96vh] flex items-center pt-20 pb-16 overflow-hidden font-sans animate-gradient-shift"
      style={{
        background: "linear-gradient(135deg, #EAF3FF 0%, #f0f8ff 25%, #ffffff 50%, #f0fdfa 75%, #EAF3FF 100%)",
        backgroundSize: "300% 300%",
      }}
    >
      {/* Medical Grid */}
      <div className="absolute inset-0 medical-grid opacity-60 pointer-events-none z-0" />

      {/* Animated backdrop glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-blue-300/25 to-indigo-300/15 blur-3xl pointer-events-none animate-float" />
      <div className="absolute -right-20 top-1/4 w-[550px] h-[550px] rounded-full bg-gradient-to-br from-teal-300/20 to-blue-200/10 blur-3xl pointer-events-none" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-[-10%] left-[8%] w-[600px] h-[600px] rounded-full bg-blue-400/5 blur-3xl pointer-events-none" />

      {/* Floating Particles */}
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          className={`absolute pointer-events-none z-0 ${p.color} opacity-50`}
          style={{
            left: p.x,
            top: p.y,
            animation: `float-x ${5 + i * 0.7}s ease-in-out ${p.delay}s infinite`,
          }}
        >
          {p.icon}
        </div>
      ))}

      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:pl-16 lg:pr-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* ── Text Content ── */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left items-start justify-center max-w-3xl">

            {/* Tag pill with live dot */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EAF3FF] border border-blue-200 text-xs font-bold text-blue-700 uppercase tracking-widest shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Leading Multispeciality Healthcare in Anantapur</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[54px] font-black tracking-tight text-[#0B1F3A] leading-[1.1] font-sans"
            >
              Trusted. Experienced.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
                Always By Your Side.
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl font-medium"
            >
              From expert orthopedic care to comprehensive multispeciality services — combining medical excellence, advanced technology, and compassionate support to help every patient recover with confidence.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center mt-2"
            >
              {/* Primary CTA with ripple */}
              <button
                onClick={(e) => { handleRipple(e); onOpenBooking(); }}
                className="btn-ripple w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-blue-600/25 hover:bg-blue-700 hover:scale-[1.02] transition-all active:scale-[0.98] animate-bounce-soft"
              >
                <Calendar className="h-5 w-5" />
                <span>Book Appointment</span>
              </button>

              {/* Secondary CTA */}
              <a
                href="tel:+919440275556"
                className="group w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-white border border-gray-200 px-8 py-4 text-base font-bold text-[#0B1F3A] shadow-sm hover:bg-red-50/60 hover:border-red-200 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <Phone className="h-4 w-4" />
                <span>Emergency Helpline</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Live "Available Now" badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-[11px] font-bold text-emerald-700 uppercase tracking-wider">
                <span className="live-dot" />
                <span>Doctors Available Now</span>
              </div>
              <span className="text-[11px] text-gray-400 font-medium">OPD: 9 AM – 8 PM · Emergency: 24/7</span>
            </motion.div>

            {/* Stats Ticker */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex items-center gap-5 mt-1 flex-wrap"
            >
              {STATS.map((stat, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-2 transition-all duration-500 ${
                    i === statIdx ? "opacity-100 scale-105" : "opacity-40 scale-100"
                  }`}
                >
                  <span className="text-lg font-black text-blue-600">{stat.value}</span>
                  <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Image Column ── */}
          <div className="lg:col-span-5 relative flex justify-center items-center w-full">
            {/* Glowing backplates */}
            <div className="absolute -inset-6 bg-gradient-to-tr from-blue-500/12 to-teal-400/12 rounded-[48px] blur-2xl opacity-80 pointer-events-none z-0" />
            <div className="absolute -top-10 -left-10 w-52 h-52 bg-teal-300/15 rounded-full blur-3xl pointer-events-none z-0" />
            <div className="absolute -bottom-10 -right-10 w-52 h-52 bg-blue-300/15 rounded-full blur-3xl pointer-events-none z-0" />

            {/* Breathing ring */}
            <div className="absolute inset-4 rounded-[40px] border-2 border-blue-300/20 animate-pulse pointer-events-none z-0" />

            {/* Parallax image */}
            <motion.div
              ref={imgRef}
              style={{ x: imgX, y: imgY }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full max-w-[540px] relative z-10"
            >
              <img
                src="/images/hero_bg.png"
                alt="Kumar Hospital Facilities"
                className="w-full h-auto object-contain rounded-[32px] border border-white/80 shadow-[0_20px_60px_rgba(37,99,235,0.12)] transition-shadow duration-500 hover:shadow-[0_24px_70px_rgba(37,99,235,0.2)]"
              />

              {/* Floating badge overlays on image */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="absolute -left-6 bottom-16 bg-white rounded-2xl shadow-xl px-4 py-2.5 border border-gray-100 flex items-center gap-2"
              >
                <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
                  <Activity className="h-4 w-4 text-white" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wide">Orthopedic Surgeries</div>
                  <div className="text-sm font-black text-[#0B1F3A]">400+ / Year</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                className="absolute -right-6 top-12 bg-white rounded-2xl shadow-xl px-4 py-2.5 border border-gray-100 flex items-center gap-2"
              >
                <div className="h-8 w-8 rounded-full bg-emerald-500 flex items-center justify-center">
                  <Heart className="h-4 w-4 text-white" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wide">Patient Satisfaction</div>
                  <div className="text-sm font-black text-[#0B1F3A]">98.4%</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
