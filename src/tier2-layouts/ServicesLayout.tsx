"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Heart, Bone, Activity, Stethoscope, Scissors, UserCheck, Eye, Sparkles } from "lucide-react";
import Image from "next/image";

interface ServicesProps {
  onOpenBooking: () => void;
}

const ALL_SPECIALTIES = [
  {
    title: "Orthopedics & Spine",
    icon: <Bone className="h-6 w-6 text-blue-600" />,
    desc: "Comprehensive bone, joint, and spine reconstructions driven by advanced orthopedic surgical protocols.",
    img: "/images/operating_room.png",
    badge: "Most Popular",
    badgeColor: "bg-blue-600 text-white",
    category: "Surgical",
  },
  {
    title: "Cardiology",
    icon: <Heart className="h-6 w-6 text-red-500" />,
    desc: "Preventive, diagnostic, and clinical cardiac consultations to secure your heart's vital rhythm.",
    img: "/images/cardiology.png",
    category: "Consultative",
  },
  {
    title: "Urology",
    icon: <Activity className="h-6 w-6 text-indigo-500" />,
    desc: "Expert treatment for kidney stones, prostate health, and urinary tract wellness conditions.",
    img: "/images/urology.png",
    category: "Surgical",
  },
  {
    title: "General Medicine",
    icon: <Stethoscope className="h-6 w-6 text-teal-500" />,
    desc: "Systemic care managing chronic diabetes, blood pressure, fever, and metabolic disorders.",
    img: "/images/general_medicine.png",
    category: "Consultative",
  },
  {
    title: "General Surgery",
    icon: <Scissors className="h-6 w-6 text-amber-500" />,
    desc: "Minimally invasive keyhole and open surgical care managed under maximum sterile conditions.",
    img: "/images/general_surgery.png",
    category: "Surgical",
  },
  {
    title: "Pediatrics",
    icon: <UserCheck className="h-6 w-6 text-pink-500" />,
    desc: "Compassionate, gentle healthcare programs serving infants, kids, and adolescents.",
    img: "/images/pediatrics.png",
    category: "Consultative",
  },
  {
    title: "Women's Health",
    icon: <Activity className="h-6 w-6 text-purple-500" />,
    desc: "Comprehensive gynecological checkups, prenatal guidance, and maternal health care.",
    img: "/images/womens_health.png",
    category: "Consultative",
  },
  {
    title: "Diagnostics & Imaging",
    icon: <Eye className="h-6 w-6 text-blue-500" />,
    desc: "Instant high-definition in-house X-Rays, path labs, and precision ultrasound screenings.",
    img: "/images/diagnostics.png",
    badge: "In-House",
    badgeColor: "bg-teal-500 text-white",
    category: "Diagnostic",
  },
];

const CATEGORIES = ["All", "Surgical", "Consultative", "Diagnostic"];

export default function Services({ onOpenBooking }: ServicesProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = ALL_SPECIALTIES.filter(
    (s) => activeCategory === "All" || s.category === activeCategory
  );

  return (
    <section id="services" className="pt-16 pb-8 bg-white dark:bg-zinc-900 font-sans relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-teal-300/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-left max-w-3xl mb-10"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1.5 rounded-md inline-flex items-center gap-1.5">
            <Sparkles className="h-3 w-3" />
            Centers of Excellence
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] dark:text-white mt-4 tracking-tight scan-line-container">
            Our Medical Specialties
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-teal-500 mt-4 rounded-full" style={{ animation: "draw-line 1s ease forwards" }} />
          <p className="text-gray-500 dark:text-zinc-400 mt-4 text-sm sm:text-base">
            Providing high-quality medical services across key healthcare disciplines with uncompromised therapeutic safety.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="flex gap-2 mb-10 flex-wrap">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20 scale-105"
                  : "bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-zinc-300 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              {cat}
              {activeCategory === cat && (
                <motion.span
                  layoutId="active-tab"
                  className="absolute inset-0 rounded-full bg-blue-600 -z-10"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Grid Cards */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((spec, idx) => (
              <motion.div
                key={spec.title}
                layout
                initial={{ opacity: 0, y: 40, rotateX: 15 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                style={{ perspective: 800 }}
                className="shimmer-card group relative overflow-hidden rounded-[24px] bg-[#F8FAFC] dark:bg-zinc-850 border border-gray-100 dark:border-zinc-800 shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/8 hover:border-blue-200 hover:-translate-y-2 cursor-pointer flex flex-col justify-between min-h-[360px]"
              >
                {/* Badge */}
                {spec.badge && (
                  <div className={`absolute top-3 right-3 z-20 px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${spec.badgeColor}`}>
                    {spec.badge}
                  </div>
                )}

                {/* Image with zoom */}
                <div className="relative w-full h-[160px] overflow-hidden">
                  <Image
                    src={spec.img}
                    alt={spec.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-112"
                    sizes="(max-width: 780px) 100vw, 280px"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/40 via-[#0B1F3A]/10 to-transparent" />

                  {/* Icon capsule */}
                  <div className="absolute top-4 left-4 h-10 w-10 rounded-xl bg-white/90 backdrop-blur-md flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                    {spec.icon}
                  </div>
                </div>

                {/* Text */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-[#0B1F3A] dark:text-white mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {spec.title}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-zinc-400 leading-relaxed line-clamp-3">
                      {spec.desc}
                    </p>
                  </div>

                  <div className="pt-4 flex items-center justify-between border-t border-gray-100/60 dark:border-zinc-800 mt-3">
                    <button
                      onClick={onOpenBooking}
                      className="inline-flex items-center gap-1.5 text-[11px] font-bold text-blue-600 hover:text-blue-700 transition-colors uppercase tracking-wider group/btn"
                    >
                      <span>Book Consult</span>
                      <ChevronRight className="h-3 w-3 stroke-[2.5] group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                    <span className="text-[10px] font-semibold text-gray-400 dark:text-zinc-500">Apollo Standards</span>
                  </div>
                </div>

                {/* Bottom accent line - fills on hover */}
                <div className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full bg-gradient-to-r from-blue-600 to-teal-500 transition-all duration-500 rounded-b-[24px]" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
