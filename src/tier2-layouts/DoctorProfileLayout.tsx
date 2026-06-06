"use client";

import { motion } from "framer-motion";
import { Bone, Calendar, Phone, ArrowRight, ShieldCheck, Award, Star, CheckCircle2 } from "lucide-react";
import Image from "next/image";

interface DoctorProfileProps {
  onOpenBooking: () => void;
}

export default function DoctorProfile({ onOpenBooking }: DoctorProfileProps) {
  const achievements = [
    {
      value: "5+",
      label: "Years of Experience",
      desc: "Clinical & Surgical Tenure"
    },
    {
      value: "5,000+",
      label: "Successful Surgeries",
      desc: "Spine, Trauma & Joint Replacements"
    },
    {
      value: "100%",
      label: "Commitment to Healing",
      desc: "Patient-Centered Recovery"
    }
  ];

  const expertises = [
    "Complex Fracture & Trauma Management",
    "Spine Disorders & Reconstruction Surgery",
    "Total Knee & Hip Replacement",
    "Keyhole Arthroscopic Joint Procedures",
    "Pediatric Orthopedic Corrections",
    "Chronic Bone & Joint Care"
  ];

  return (
    <section id="doctor-profile" className="py-20 bg-transparent font-sans relative overflow-hidden">
      {/* Background medical glows */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full bg-cyan-400/5 dark:bg-cyan-950/5 blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full bg-blue-400/5 dark:bg-blue-950/5 blur-3xl pointer-events-none z-0" />

      <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* ── LEFT SIDE: Image Presentation (5 columns) ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 relative flex lg:justify-start justify-center lg:-translate-x-6"
          >
            {/* Background design accents */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/10 to-blue-500/10 rounded-[32px] blur-xl opacity-75 pointer-events-none" />
            
            {/* Image Frame Container */}
            <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-[32px] overflow-hidden border border-slate-200/60 dark:border-zinc-800/60 shadow-2xl bg-slate-50 dark:bg-zinc-800">
              <Image
                src="/dr_kumar.png"
                alt="Dr. A.L.M.V. KUMAR - Chief Orthopedic & Spine Surgeon"
                fill
                className="object-cover object-top select-none pointer-events-none"
                sizes="(max-width: 1024px) 100vw, 380px"
                priority
              />
              
              {/* Overlay shadow gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
              
              {/* Floating Badge (Years Experience) */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute bottom-6 left-6 right-6 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-slate-200/50 dark:border-zinc-700/50 p-4 rounded-2xl flex items-center gap-3 shadow-lg z-10"
              >
                <div className="h-10 w-10 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center flex-shrink-0">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Chief Surgeon</span>
                  <span className="block text-sm font-black text-slate-800 dark:text-white leading-tight">Dr. A.L.M.V. KUMAR</span>
                </div>
              </motion.div>
            </div>
            
            {/* Experience circular badge top-right */}
            <div className="absolute -top-3 -right-3 h-20 w-20 rounded-full bg-[#0097A7] text-white flex flex-col items-center justify-center shadow-lg border border-white/20 select-none z-10">
              <span className="text-lg font-black leading-none">5+</span>
              <span className="text-[8px] font-bold uppercase tracking-wider text-cyan-100">Years Exp</span>
            </div>
          </motion.div>

          {/* ── RIGHT SIDE: Biography & Profile (7 columns) ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Section Tag */}
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#0097A7] bg-cyan-50 dark:bg-cyan-900/20 px-3.5 py-1.5 rounded-lg border border-cyan-100 dark:border-cyan-900/30 inline-flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5" />
                Specialist Profile & Founder
              </span>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] dark:text-white mt-4 tracking-tight leading-tight">
                Dr. A.L.M.V. KUMAR
              </h2>
              <span className="block text-sm font-bold uppercase tracking-wider text-[#0097A7] dark:text-cyan-400 mt-1">
                Orthopedic & Spine Surgeon
              </span>
              <p className="text-xs sm:text-sm text-slate-400 dark:text-zinc-500 font-bold mt-1">
                MBBS, MS (Ortho) · Fellow in Spine Surgery
              </p>
              <div className="h-[3px] w-20 bg-gradient-to-r from-[#0097A7] to-cyan-400 mt-4 rounded-full" />
            </div>

            {/* Narrative Bio */}
            <div className="text-slate-600 dark:text-zinc-350 flex flex-col gap-4 text-sm sm:text-base leading-relaxed">
              <p>
                Dr. A.L.M.V. Kumar is a highly skilled, fellowship-trained Orthopedic & Spine Surgeon committed to delivering world-class bone and joint healthcare in Anantapur. With over 5 years of dedicated surgical experience, he has pioneered modern trauma care and spine reconstruction techniques in the region.
              </p>
              <p>
                He established Kumar Hospital with the singular mission of providing accessible, sterile, and high-precision specialty treatments. Under his clinical leadership, the hospital is equipped with state-of-the-art laminar airflow operation suites to achieve zero-infection surgical environments.
              </p>
            </div>

            {/* Achievements row */}
            <div className="grid grid-cols-3 gap-3 border-t border-b border-slate-100 dark:border-zinc-800/80 py-4 mt-2">
              {achievements.map((item, idx) => (
                <div key={idx} className="text-center sm:text-left">
                  <span className="block text-lg sm:text-2xl font-black text-[#0097A7] dark:text-cyan-400">
                    {item.value}
                  </span>
                  <span className="block text-[10px] font-bold text-slate-800 dark:text-white uppercase tracking-wider mt-0.5">
                    {item.label}
                  </span>
                  <span className="block text-[8px] text-slate-400 dark:text-zinc-500 mt-0.5 leading-tight font-medium">
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>

            {/* Expertise Checklist */}
            <div>
              <h3 className="text-xs font-bold text-slate-800 dark:text-white uppercase tracking-widest mb-3">
                Core Clinical Expertise
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {expertises.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#0097A7] dark:text-cyan-400 flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-zinc-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <button
                onClick={onOpenBooking}
                className="flex items-center justify-center gap-2 rounded-xl bg-[#0097A7] hover:bg-[#00BCD4] text-white text-sm font-bold px-6 py-3.5 shadow-lg shadow-cyan-600/10 hover:scale-[1.02] active:scale-95 transition-all duration-300 cursor-pointer border border-[#0097A7]/10"
              >
                <Calendar className="h-4.5 w-4.5" />
                <span>Book Consultation</span>
                <ArrowRight className="h-4.5 w-4.5" />
              </button>

              <a
                href="tel:+919440275556"
                className="flex items-center justify-center gap-2 rounded-xl bg-slate-50 dark:bg-zinc-800/40 border border-slate-200/80 dark:border-zinc-800 px-6 py-3.5 text-sm font-bold text-[#0F172A] dark:text-white shadow-sm hover:bg-slate-100 dark:hover:bg-zinc-800 transition-all hover:scale-[1.02] active:scale-95"
              >
                <Phone className="h-4 w-4 text-[#0097A7]" />
                <span>Call Hospital Desk</span>
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
