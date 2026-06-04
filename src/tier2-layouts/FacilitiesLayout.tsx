"use client";

import { motion } from "framer-motion";
import { Bone, Stethoscope, Microscope, Hospital, Ambulance, Heart } from "lucide-react";

const ITEMS = [
  {
    title: "Orthopedic Excellence",
    desc: "Advanced care for fractures, joint disorders, trauma, and spine-related conditions with specialist-led precision.",
    icon: <Bone className="h-6 w-6" />,
    stat: "400+ Surgeries / Year",
    color: "blue",
    gradient: "from-blue-500/10 to-blue-400/5",
    iconBg: "bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-500",
    ringColor: "border-blue-400/40",
  },
  {
    title: "Experienced Specialists",
    desc: "Dedicated consultants across orthopedics, medicine, surgery, urology, and women's health — all under one roof.",
    icon: <Stethoscope className="h-6 w-6" />,
    stat: "20+ Senior Consultants",
    color: "teal",
    gradient: "from-teal-500/10 to-teal-400/5",
    iconBg: "bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 group-hover:bg-teal-600 group-hover:text-white dark:group-hover:bg-teal-500",
    ringColor: "border-teal-400/40",
  },
  {
    title: "Accurate Diagnostics",
    desc: "Laboratory and imaging services including X-Ray, ultrasound, and pathology labs supporting rapid diagnosis.",
    icon: <Microscope className="h-6 w-6" />,
    stat: "In-House Lab & Imaging",
    color: "indigo",
    gradient: "from-indigo-500/10 to-indigo-400/5",
    iconBg: "bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white dark:group-hover:bg-indigo-500",
    ringColor: "border-indigo-400/40",
  },
  {
    title: "Modern Infrastructure",
    desc: "Well-equipped sterile operation theatres, ICU, and facilities engineered for safe and efficient patient care.",
    icon: <Hospital className="h-6 w-6" />,
    stat: "Laminar Airflow OT",
    color: "blue",
    gradient: "from-blue-500/10 to-blue-400/5",
    iconBg: "bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-500",
    ringColor: "border-blue-400/40",
  },
  {
    title: "Emergency Support",
    desc: "Prompt admission, trauma triaging, and stabilization for urgent healthcare needs — active 24 hours a day.",
    icon: <Ambulance className="h-6 w-6" />,
    stat: "24/7 Trauma Ready",
    color: "red",
    gradient: "from-red-500/10 to-red-400/5",
    iconBg: "bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 group-hover:bg-red-600 group-hover:text-white dark:group-hover:bg-red-500",
    ringColor: "border-red-400/40",
  },
  {
    title: "Compassionate Care",
    desc: "Personalized treatment plans focused on comfort, emotional support, recovery, and long-term patient wellness.",
    icon: <Heart className="h-6 w-6" />,
    stat: "98.4% Patient Satisfaction",
    color: "pink",
    gradient: "from-pink-500/10 to-pink-400/5",
    iconBg: "bg-pink-50 dark:bg-pink-950/40 text-pink-600 dark:text-pink-400 group-hover:bg-pink-600 group-hover:text-white dark:group-hover:bg-pink-500",
    ringColor: "border-pink-400/40",
  },
];

export default function Facilities() {
  return (
    <section id="facilities" className="pt-16 pb-10 bg-transparent font-sans relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-blue-500/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-teal-300/4 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto w-full max-w-[1920px] px-2 sm:px-4 lg:px-6 xl:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1.5 rounded-md">
            ADVANCED INFRASTRUCTURE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] dark:text-white mt-4 tracking-tight scan-line-container">
            Advanced Facilities Designed Around Patient Care
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 dark:text-zinc-400 mt-4 text-sm sm:text-base leading-relaxed">
            Clinical setups engineered for sterile compliance, diagnostics speed, and complete patient comfort.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mb-20">
          {ITEMS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40, rotateX: 12 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              style={{ perspective: 800 }}
              className="shimmer-card group relative overflow-hidden rounded-[28px] bg-gradient-to-br from-white to-[#F8FAFC] dark:from-zinc-900 dark:to-zinc-850 p-8 border border-slate-100 dark:border-zinc-800 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_24px_50px_-15px_rgba(37,99,235,0.15)] hover:border-blue-300/40 dark:hover:border-blue-500/30 transition-all duration-500 flex flex-col justify-between min-h-[280px]"
            >
              {/* Hover gradient bg */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

              {/* Subtle right-top glow */}
              <div className="absolute -right-10 -top-10 w-28 h-28 bg-blue-500/4 dark:bg-blue-400/4 rounded-full blur-2xl group-hover:bg-blue-500/8 transition-all duration-500 pointer-events-none" />

              <div className="relative z-10">
                {/* Icon with spinning ring */}
                <div className="mb-6 relative inline-flex">
                  <div className={`h-14 w-14 rounded-2xl ${item.iconBg} flex items-center justify-center shadow-sm transition-all duration-500 ease-out group-hover:scale-110 relative z-10`}>
                    {item.icon}
                  </div>
                  {/* Spinning ring on hover */}
                  <div
                    className={`absolute -inset-1 rounded-2xl border-2 ${item.ringColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:animate-spin-slow`}
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#0B1F3A] dark:text-white mb-2 leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-500 dark:text-zinc-400 leading-relaxed font-medium">
                  {item.desc}
                </p>

                {/* Per-card stat */}
                <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/50 text-[11px] font-bold text-blue-600 dark:text-blue-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  {item.stat}
                </div>
              </div>

              {/* Bottom animated line */}
              <div className="relative z-10 mt-6">
                <div className="h-[3px] bg-blue-500/15 dark:bg-blue-400/15 rounded-full overflow-hidden">
                  <div className="h-full w-0 group-hover:w-full bg-gradient-to-r from-blue-600 to-teal-500 transition-all duration-700 rounded-full" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
