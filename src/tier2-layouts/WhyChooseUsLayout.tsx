"use client";

import { motion } from "framer-motion";
import { Clock, ShieldCheck, MapPin, Activity, Users, GraduationCap } from "lucide-react";

export default function WhyChooseUs() {
  const stats = [
    { number: "5+", label: "Years of Trust", desc: "Serving Anantapur since 2021" },
    { number: "15K+", label: "Patients Treated", desc: "Successful recoveries & outpatient care" },
    { number: "24/7", label: "Trauma Response", desc: "Always available emergency team" },
    { number: "8+", label: "Clinical Specialists", desc: "Dedicated healthcare practitioners" },
  ];

  const reasons = [
    {
      icon: <GraduationCap className="h-6 w-6 text-teal-600" />,
      title: "Orthopedic Specialization",
      desc: "Comprehensive diagnostic, surgical, and therapeutic procedures guided by expert orthopedic protocols (DNB).",
    },
    {
      icon: <Clock className="h-6 w-6 text-teal-600" />,
      title: "24/7 Availability",
      desc: "Uninterrupted medical presence with trauma, emergency surgeons, and diagnostics operational round the clock.",
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-teal-600" />,
      title: "Modern Treatments & OTs",
      desc: "Equipped with state-of-the-art sterile laminar flow operation theaters and orthopedic instrumentation.",
    },
    {
      icon: <MapPin className="h-6 w-6 text-teal-600" />,
      title: "Centrally Located",
      desc: "Conveniently accessible at Vidyuth Nagar, Anantapur, allowing rapid patient transit during trauma emergencies.",
    },
    {
      icon: <Users className="h-6 w-6 text-teal-600" />,
      title: "Personalized Patient Care",
      desc: "Clinical solutions built around active patient participation, empathy, and complete post-operative guidance.",
    },
    {
      icon: <Activity className="h-6 w-6 text-teal-600" />,
      title: "Rehabilitation Support",
      desc: "In-house physiotherapy units offering specialized recovery and muscle-retraining sessions post-surgery.",
    },
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-navy-900 text-white font-sans relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-400 bg-navy-800 px-3 py-1.5 rounded-md border border-navy-700">
            Why Kumar Ortho
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight">
            Setting High Standards in Regional Healthcare
          </h2>
          <div className="h-1 w-20 bg-teal-500 mx-auto mt-4 rounded-full" />
          <p className="text-gray-400 mt-4 text-sm sm:text-base">
            Driven by medical ethics, modern technology, and a dedication to restorative care.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-20">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-navy-800/50 border border-navy-700/60 p-6 rounded-2xl text-center glow-navy"
            >
              <span className="block text-3xl sm:text-4xl font-black text-teal-400">
                {stat.number}
              </span>
              <span className="block text-sm font-bold text-white mt-1">
                {stat.label}
              </span>
              <span className="block text-xs text-gray-400 mt-0.5">
                {stat.desc}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-navy-800/30 border border-navy-800/80 p-6 rounded-2xl hover:border-teal-500/30 transition-all duration-300 group"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy-800 text-teal-400 border border-navy-700/50 group-hover:scale-105 transition-transform">
                {reason.icon}
              </div>
              <h4 className="text-lg font-bold text-white mb-2">
                {reason.title}
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
