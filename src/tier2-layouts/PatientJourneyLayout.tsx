"use client";

import { motion } from "framer-motion";
import { Calendar, Stethoscope, FileText, CheckSquare, HeartPulse, ChevronRight } from "lucide-react";

export default function PatientJourney() {
  const steps = [
    {
      num: "01",
      title: "Book Appointment",
      desc: "Instantly secure your slot via our premium stepped digital wizard or directly through WhatsApp support.",
      icon: <Calendar className="h-6 w-6" />
    },
    {
      num: "02",
      title: "Consult Specialist",
      desc: "Meet face-to-face with leading practitioners to discuss your clinical signs, pain points, and mobility history.",
      icon: <Stethoscope className="h-6 w-6" />
    },
    {
      num: "03",
      title: "Diagnostic Check",
      desc: "Undergo rapid, precise diagnostic labs, high-definition X-rays, or precision scans inside our local center.",
      icon: <FileText className="h-6 w-6" />
    },
    {
      num: "04",
      title: "Custom Treatment Plan",
      desc: "Receive a personalized therapeutic strategy structured around conservative care, surgeries, or specific therapies.",
      icon: <CheckSquare className="h-6 w-6" />
    },
    {
      num: "05",
      title: "Recovery & Follow-Up",
      desc: "Complete post-surgical rehabilitation and continuous reviews to ensure complete long-term healing.",
      icon: <HeartPulse className="h-6 w-6" />
    }
  ];

  return (
    <section className="py-24 bg-[#EAF3FF]/40 dark:bg-zinc-950/20 font-sans overflow-hidden border-y border-gray-100 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1.5 rounded-md">
            Seamless Path to Health
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] dark:text-white mt-4 tracking-tight">
            Your Care Journey
          </h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 dark:text-zinc-400 mt-4 text-sm sm:text-base">
            From the initial consult to the final recovery session, we guide you gracefully through every healing milestone.
          </p>
        </div>

        {/* Visual Timeline Layout */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line for large screens */}
          <div className="absolute top-1/2 left-0 w-full h-[3px] bg-gradient-to-r from-blue-600 to-teal-400 -translate-y-1/2 hidden lg:block z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-6 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white dark:bg-zinc-900 p-6 rounded-[24px] border border-gray-150 dark:border-zinc-800 shadow-md flex flex-col justify-between items-start min-h-[260px] relative hover:shadow-xl hover:border-blue-200 transition-all group"
              >
                <div>
                  {/* Floating Step Number */}
                  <span className="absolute top-4 right-6 text-3xl font-black text-blue-500/10 group-hover:text-blue-500/20 transition-colors">
                    {step.num}
                  </span>

                  {/* Icon Circle */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF3FF] text-blue-600 shadow-inner mb-6 group-hover:scale-105 transition-transform">
                    {step.icon}
                  </div>

                  <h3 className="text-base font-extrabold text-[#0B1F3A] dark:text-white mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-zinc-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 w-full flex items-center justify-between border-t border-gray-100 dark:border-zinc-800">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Kumar Steps</span>
                  <ChevronRight className="h-4 w-4 text-blue-500 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
