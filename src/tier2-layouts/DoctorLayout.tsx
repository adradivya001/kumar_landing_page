"use client";

import { motion } from "framer-motion";
import { Bone, Stethoscope, Scissors, Activity, Heart, Calendar, ArrowRight, Star } from "lucide-react";

interface DoctorProps {
  onOpenBooking: () => void;
}

const DOCTORS = [
  {
    initials: "YK",
    name: "Dr. Y. M. V. Kumar",
    designation: "Orthopedic & Spine Surgeon",
    qualifications: "MBBS, MS (Ortho) · Fellow in Spine Surgery",
    icon: <Bone className="h-5 w-5 text-[#0ABAB5]" />,
    expertise: ["Spine Disorders", "Fracture Management", "Joint Conditions"],
    rating: 4.9,
    reviews: 230,
    available: true,
    gradient: "from-[#2347D8] to-[#0ABAB5]",
  },
  {
    initials: "VK",
    name: "Dr. V. Karthik Reddy",
    designation: "Consultant Physician",
    qualifications: "MBBS, DNB General Medicine",
    icon: <Stethoscope className="h-5 w-5 text-[#2347D8]" />,
    expertise: ["Diabetes Care", "Hypertension", "Internal Medicine"],
    rating: 4.8,
    reviews: 175,
    available: true,
    gradient: "from-[#2347D8] to-[#6366f1]",
  },
  {
    initials: "MR",
    name: "Dr. A. Mithun Rakesh",
    designation: "Consultant Physician",
    qualifications: "MBBS, DNB General Medicine",
    icon: <Stethoscope className="h-5 w-5 text-[#0ABAB5]" />,
    expertise: ["Preventive Care", "Chronic Disease Management", "General Medicine"],
    rating: 4.7,
    reviews: 142,
    available: false,
    gradient: "from-[#0ABAB5] to-[#0d9488]",
  },
  {
    initials: "KK",
    name: "Dr. K. Karun Kumar Reddy",
    designation: "General Surgeon",
    qualifications: "MS General Surgery, FIAGES",
    icon: <Scissors className="h-5 w-5 text-[#2347D8]" />,
    expertise: ["Laparoscopic Surgery", "General Surgery", "Surgical Care"],
    rating: 4.9,
    reviews: 198,
    available: true,
    gradient: "from-[#1d4ed8] to-[#2347D8]",
  },
  {
    initials: "RB",
    name: "Dr. Rajashekar Battula",
    designation: "Consultant Urologist",
    qualifications: "MS, MCh (Urology), FMAS",
    icon: <Activity className="h-5 w-5 text-[#0ABAB5]" />,
    expertise: ["Kidney Stones", "Prostate Disorders", "Urological Procedures"],
    rating: 4.8,
    reviews: 161,
    available: true,
    gradient: "from-[#0ABAB5] to-[#2347D8]",
  },
  {
    initials: "AJ",
    name: "Dr. C. Aruna Jyothi",
    designation: "Obstetrics & Gynecology Specialist",
    qualifications: "MBBS, MS (OBG)",
    icon: <Heart className="h-5 w-5 text-[#e879f9]" />,
    expertise: ["Pregnancy Care", "Women's Wellness", "Gynecological Care"],
    rating: 4.9,
    reviews: 215,
    available: false,
    gradient: "from-[#a855f7] to-[#ec4899]",
  },
];

function DoctorCard({ doc, onOpenBooking }: { doc: typeof DOCTORS[0]; onOpenBooking: () => void }) {
  return (
    <div className="w-[290px] sm:w-[320px] bg-white/50 dark:bg-zinc-900/60 backdrop-blur-md border border-white/30 dark:border-zinc-800/30 rounded-[24px] p-5 shadow-lg shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-900/10 hover:border-blue-400/30 transition-all duration-400 flex flex-col justify-between h-[430px] group relative overflow-hidden cursor-pointer">

      {/* Soft glow on hover */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-[#2347D8]/6 to-[#0ABAB5]/6 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700 pointer-events-none" />

      {/* Available badge */}
      {doc.available && (
        <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-[9px] font-extrabold text-emerald-700 uppercase tracking-wider z-10">
          <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
          <span>Today</span>
        </div>
      )}

      <div>
        {/* Avatar Row */}
        <div className="flex items-start justify-between mb-4">
          <div className="relative">
            {/* Gradient ring */}
            <div
              className={`absolute -inset-[2px] rounded-full bg-gradient-to-br ${doc.gradient} opacity-70`}
              style={{ padding: "2px" }}
            />
            <div
              className={`absolute -inset-[4px] rounded-full bg-gradient-to-br ${doc.gradient} opacity-30 blur-[2px]`}
            />

            {/* Avatar */}
            <div className={`relative z-10 h-16 w-16 rounded-full bg-gradient-to-br ${doc.gradient} text-white flex items-center justify-center text-lg font-extrabold shadow-lg select-none`}>
              {doc.initials}
            </div>
          </div>

          {/* Specialty Icon */}
          <div className="h-9 w-9 rounded-lg bg-blue-50/70 dark:bg-zinc-800/70 border border-blue-100/30 dark:border-zinc-700/30 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
            {doc.icon}
          </div>
        </div>

        {/* Info */}
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-[#0B1F3A] dark:text-white group-hover:text-blue-600 transition-colors leading-snug">
            {doc.name}
          </h3>
          <span className={`block text-[11px] font-bold uppercase tracking-wider bg-gradient-to-r ${doc.gradient} bg-clip-text text-transparent`}>
            {doc.designation}
          </span>
          <p className="text-[10px] text-gray-400 dark:text-zinc-500 font-medium leading-relaxed">
            {doc.qualifications}
          </p>

          {/* Rating Row */}
          <div className="flex items-center gap-1 mt-0.5">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-2.5 w-2.5 ${i < Math.floor(doc.rating) ? "text-amber-400 fill-amber-400" : "text-gray-200 fill-gray-200"}`}
                />
              ))}
            </div>
            <span className="text-[10px] font-bold text-gray-600 dark:text-zinc-300">
              {doc.rating}
            </span>
            <span className="text-[9px] text-gray-400">
              · {doc.reviews} reviews
            </span>
          </div>
        </div>

        {/* Expertise Tags */}
        <div className="mt-4 flex flex-wrap gap-1">
          {doc.expertise.map((exp, i) => (
            <span
              key={i}
              className="px-2 py-0.5 text-[8px] font-extrabold uppercase tracking-wide rounded-full bg-blue-50/60 dark:bg-zinc-800/60 text-[#0B1F3A] dark:text-zinc-300 border border-blue-100/30 dark:border-zinc-700/30 transition-all duration-300 hover:bg-blue-600 hover:text-white hover:border-blue-600"
            >
              {exp}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom action bar */}
      <div className="pt-3 border-t border-gray-100/50 dark:border-zinc-800/50 flex items-center justify-between">
        <button
          onClick={onOpenBooking}
          className="flex items-center gap-1 text-[11px] font-extrabold text-blue-600 hover:text-blue-700 dark:text-blue-400 transition-colors uppercase tracking-wider group/btn"
        >
          <Calendar className="h-3 w-3" />
          <span>Book Consult</span>
          <ArrowRight className="h-3 w-3 stroke-[2.5] group-hover/btn:translate-x-1 transition-transform" />
        </button>

        <button
          onClick={onOpenBooking}
          className="text-[9px] font-bold text-gray-400 hover:text-[#0B1F3A] dark:hover:text-white transition-colors uppercase tracking-widest"
        >
          View Profile
        </button>
      </div>

      {/* Teal accent bar on hover */}
      <div className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full bg-gradient-to-r from-blue-600 to-teal-500 transition-all duration-500 rounded-b-[24px]" />
    </div>
  );
}

export default function Doctor({ onOpenBooking }: DoctorProps) {
  return (
    <section id="doctor" className="pt-16 pb-8 bg-transparent font-sans relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-400/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-teal-400/5 blur-3xl pointer-events-none" />

      <div className="mx-auto w-full max-w-[1920px] px-2 sm:px-4 lg:px-6 xl:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3.5 py-1.5 rounded-md inline-flex items-center gap-1.5">
            <Star className="h-3 w-3 fill-current" />
            Expert Medical Team
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] dark:text-white mt-4 tracking-tight scan-line-container">
            Meet Our Specialists
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 dark:text-zinc-400 mt-4 text-sm sm:text-base leading-relaxed">
            Our experienced consultants bring together expertise across orthopedics, surgery, medicine, women&apos;s health, and urology to deliver personalized, patient-centered care.
          </p>
        </motion.div>
      </div>

      {/* Static Grid Wrapper */}
      <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8 z-10 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
          {DOCTORS.map((doc, idx) => (
            <motion.div
              key={`doc-${idx}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="w-full flex justify-center"
            >
              <DoctorCard doc={doc} onOpenBooking={onOpenBooking} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA below slider */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mt-10 px-4"
      >
        <p className="text-sm text-gray-500 dark:text-zinc-400 mb-4">
          All specialists are available for in-person consultation at Kumar Hospital, Anantapur.
        </p>
        <button
          onClick={onOpenBooking}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 text-white font-bold text-sm shadow-lg shadow-blue-600/20 hover:bg-blue-700 hover:scale-[1.02] transition-all active:scale-[0.98]"
        >
          <Calendar className="h-4 w-4" />
          <span>Book With Any Specialist</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </motion.div>
    </section>
  );
}
