"use client";

import { motion } from "framer-motion";
import { Bone, Stethoscope, Scissors, Activity, Heart, Calendar, ArrowRight } from "lucide-react";

interface DoctorProps {
  onOpenBooking: () => void;
}

export default function Doctor({ onOpenBooking }: DoctorProps) {
  const doctors = [
    {
      initials: "YK",
      name: "Dr. Y. M. V. Kumar",
      designation: "Orthopedic & Spine Surgeon",
      qualifications: "MBBS, MS (Ortho) | Fellow in Spine Surgery",
      icon: <Bone className="h-5 w-5 text-[#0ABAB5]" />,
      expertise: ["Spine Disorders", "Fracture Management", "Joint Conditions"],
    },
    {
      initials: "VK",
      name: "Dr. V. Karthik Reddy",
      designation: "Consultant Physician",
      qualifications: "MBBS, DNB General Medicine",
      icon: <Stethoscope className="h-5 w-5 text-[#2347D8]" />,
      expertise: ["Diabetes Care", "Hypertension", "Internal Medicine"],
    },
    {
      initials: "MR",
      name: "Dr. A. Mithun Rakesh",
      designation: "Consultant Physician",
      qualifications: "MBBS, DNB General Medicine",
      icon: <Stethoscope className="h-5 w-5 text-[#0ABAB5]" />,
      expertise: ["Preventive Care", "Chronic Disease Management", "General Medicine"],
    },
    {
      initials: "KK",
      name: "Dr. K. Karun Kumar Reddy",
      designation: "General Surgeon",
      qualifications: "MS General Surgery, FIAGES",
      icon: <Scissors className="h-5 w-5 text-[#2347D8]" />,
      expertise: ["Laparoscopic Surgery", "General Surgery", "Surgical Care"],
    },
    {
      initials: "RB",
      name: "Dr. Rajashekar Battula",
      designation: "Consultant Urologist",
      qualifications: "MS, MCh (Urology), FMAS",
      icon: <Activity className="h-5 w-5 text-[#0ABAB5]" />,
      expertise: ["Kidney Stones", "Prostate Disorders", "Urological Procedures"],
    },
    {
      initials: "AJ",
      name: "Dr. C. Aruna Jyothi",
      designation: "Obstetrics & Gynecology Specialist",
      qualifications: "MBBS, MS (OBG)",
      icon: <Heart className="h-5 w-5 text-[#2347D8]" />,
      expertise: ["Pregnancy Care", "Women's Wellness", "Gynecological Care"],
    },
  ];

  return (
    <section id="doctor" className="pt-10 pb-4 bg-gradient-to-b from-[#F8FAFC] via-[#EAF3FF]/40 to-[#F8FAFC] dark:from-zinc-950 dark:via-zinc-900/20 dark:to-zinc-950 font-sans relative overflow-hidden">
      {/* Soft medical gradient and floating abstract shapes in background */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-400/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-teal-400/5 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3.5 py-1.5 rounded-md">
            EXPERT MEDICAL TEAM
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] dark:text-white mt-4 tracking-tight">
            Meet Our Specialists
          </h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 dark:text-zinc-400 mt-4 text-sm sm:text-base leading-relaxed">
            Our experienced consultants bring together expertise across orthopedics, surgery, medicine, women&apos;s health, and urology to deliver personalized, patient-centered care.
          </p>
        </div>

        {/* Continuous Flow Marquee Container - Cards Visible Edge-to-Edge */}
        <div className="relative w-full overflow-hidden py-6">
          
          {/* Marquee Motion Wrapper with CSS Infinite Flow & Pause on Hover */}
          <div className="flex gap-8 w-max animate-[marquee_45s_linear_infinite] hover:[animation-play-state:paused] cursor-pointer">
            {/* Render items twice for infinite scrolling loop effect */}
            {[...doctors, ...doctors].map((doc, idx) => (
              <div
                key={idx}
                className="w-[320px] sm:w-[350px] bg-white/40 dark:bg-zinc-900/40 backdrop-blur-md border border-white/20 dark:border-zinc-800/20 rounded-[24px] p-6 shadow-lg shadow-blue-900/5 hover:shadow-2xl hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between h-[480px] group relative overflow-hidden"
              >
                {/* Background soft glow indicator */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-[#2347D8]/5 to-[#0ABAB5]/5 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-500" />

                <div>
                  {/* Top Row: Avatar & Specialty Icon */}
                  <div className="flex items-start justify-between mb-6">
                    {/* Initials Avatar */}
                    <div className="relative">
                      <div className="h-20 w-20 rounded-full bg-gradient-to-br from-[#2347D8] to-[#0ABAB5] text-white flex items-center justify-center text-xl font-extrabold shadow-md shadow-blue-500/25 relative z-10 select-none">
                        {doc.initials}
                        
                        {/* Subtle Hospital Watermark Vector */}
                        <svg
                          className="absolute inset-0 h-full w-full text-white/5 pointer-events-none p-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path d="M12 22V14" />
                          <path d="M19 10c0-3.87-3.13-7-7-7S5 6.13 5 10c0 4 7 11 7 11s7-7 7-11z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                      </div>
                      
                      {/* Avatar Glow Ring */}
                      <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-[#2347D8] to-[#0ABAB5] opacity-25 blur-[6px] group-hover:opacity-40 transition-opacity duration-300" />
                    </div>

                    {/* Specialty Icon Container */}
                    <div className="h-10 w-10 rounded-xl bg-blue-50/60 dark:bg-zinc-800/60 border border-blue-100/30 dark:border-zinc-700/30 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                      {doc.icon}
                    </div>
                  </div>

                  {/* Doctor Info */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-[#0B1F3A] dark:text-white group-hover:text-blue-600 transition-colors leading-snug">
                      {doc.name}
                    </h3>
                    
                    {/* Gradient Designation */}
                    <span className="block text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#2347D8] to-[#0ABAB5] bg-clip-text text-transparent">
                      {doc.designation}
                    </span>
                    
                    {/* Qualifications */}
                    <p className="text-[11px] text-gray-400 dark:text-zinc-500 font-medium leading-relaxed">
                      {doc.qualifications}
                    </p>
                  </div>

                  {/* Areas of Expertise Pill Badges */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {doc.expertise.map((exp, expIdx) => (
                      <span
                        key={expIdx}
                        className="px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-wide rounded-full bg-blue-50/50 dark:bg-zinc-800/50 text-[#0B1F3A] dark:text-zinc-300 border border-blue-100/20 dark:border-zinc-700/20"
                      >
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-gray-150/40 dark:border-zinc-800/40 flex items-center justify-between">
                  <button
                    onClick={onOpenBooking}
                    className="flex items-center gap-1.5 text-xs font-extrabold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors uppercase tracking-wider"
                  >
                    <span>Book Consult</span>
                    <ArrowRight className="h-3.5 w-3.5 stroke-[2.5] group-hover:translate-x-1.5 transition-transform" />
                  </button>
                  
                  <button 
                    onClick={onOpenBooking}
                    className="text-[10px] font-bold text-gray-400 hover:text-[#0B1F3A] dark:hover:text-white transition-colors uppercase tracking-widest"
                  >
                    View Profile
                  </button>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
