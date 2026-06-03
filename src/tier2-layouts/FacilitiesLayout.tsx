"use client";

import { motion } from "framer-motion";
import { Bone, Stethoscope, Microscope, Hospital, Ambulance, Heart } from "lucide-react";

export default function Facilities() {
  const items = [
    {
      title: "Orthopedic Excellence",
      desc: "Advanced care for fractures, joint disorders, trauma, and spine-related conditions.",
      icon: <Bone className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    },
    {
      title: "Experienced Specialists",
      desc: "Dedicated consultants across orthopedics, medicine, surgery, urology, and women's health.",
      icon: <Stethoscope className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    },
    {
      title: "Accurate Diagnostics",
      desc: "Laboratory and imaging services supporting timely diagnosis and treatment.",
      icon: <Microscope className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    },
    {
      title: "Modern Medical Infrastructure",
      desc: "Well-equipped facilities designed to support safe and efficient patient care.",
      icon: <Hospital className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    },
    {
      title: "Emergency Support",
      desc: "Prompt medical attention and stabilization for urgent healthcare needs.",
      icon: <Ambulance className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    },
    {
      title: "Compassionate Patient Care",
      desc: "Personalized treatment plans focused on comfort, recovery, and long-term wellness.",
      icon: <Heart className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    },
  ];

  return (
    <section id="facilities" className="pt-10 pb-4 bg-white dark:bg-zinc-900 font-sans relative overflow-hidden">
      {/* Background soft glow decors */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1.5 rounded-md">
            ADVANCED INFRASTRUCTURE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] dark:text-white mt-4 tracking-tight">
            Advanced Facilities Designed Around Patient Care
          </h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 dark:text-zinc-400 mt-4 text-sm sm:text-base leading-relaxed">
            Review the clinical setups engineered to ensure sterile compliance, diagnostics speed, and complete patient comfort.
          </p>
        </div>

        {/* 6 Custom Context Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-[24px] bg-gradient-to-br from-white to-[#F8FAFC] dark:from-zinc-900 dark:to-zinc-850 p-8 border border-slate-100 dark:border-zinc-800 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.12)] hover:border-blue-400/30 dark:hover:border-blue-500/30 transition-all duration-500 flex flex-col justify-between min-h-[250px]"
            >
              {/* Subtle background glow on hover */}
              <div className="absolute -right-16 -top-16 w-32 h-32 bg-blue-500/5 dark:bg-blue-400/5 rounded-full blur-2xl group-hover:bg-blue-500/10 dark:group-hover:bg-blue-400/10 transition-all duration-500 pointer-events-none" />

              {/* Card top half */}
              <div className="relative z-10">
                {/* Icon Capsule */}
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 shadow-sm group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-500 dark:group-hover:text-white transition-all duration-500 ease-out">
                  {item.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-[#0B1F3A] dark:text-white mb-3 leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {item.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-slate-500 dark:text-zinc-400 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>

              {/* Design line indicator */}
              <div className="relative z-10 w-10 h-[3px] bg-blue-500/20 dark:bg-blue-400/20 group-hover:bg-blue-600 dark:group-hover:bg-blue-450 group-hover:w-20 transition-all duration-500 mt-6 rounded-full" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
