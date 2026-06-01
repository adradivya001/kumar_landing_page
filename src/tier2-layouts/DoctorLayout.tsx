"use client";

import { Award, GraduationCap, Calendar, Check, Heart } from "lucide-react";
import Image from "next/image";

interface DoctorProps {
  onOpenBooking: () => void;
}

export default function Doctor({ onOpenBooking }: DoctorProps) {
  const highlights = [
    "Expert Fracture & Trauma Management",
    "Primary & Revision Joint Replacement (Knee & Hip)",
    "Spine Care, Lumbar Disc & Back Pain Therapies",
    "Arthroscopy & Ligament Injury Repairs (ACL/PCL)",
    "Deformity Corrections & Pediatric Orthopedics",
    "Sports Injury Rehab & Joint Preservation",
  ];

  return (
    <section id="doctor" className="py-24 bg-gray-50 dark:bg-zinc-950 font-sans relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-teal-500/5 blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/20 px-3 py-1.5 rounded-md">
            Lead Specialist
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-800 dark:text-white mt-4 tracking-tight">
            Meet Our Orthopedic Specialist
          </h2>
          <div className="h-1 w-20 bg-teal-500 mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 dark:text-zinc-400 mt-4 text-sm sm:text-base">
            Headed by a dedicated orthopedic surgeon committed to restoring mobility and enhancing lives.
          </p>
        </div>

        {/* Doctor Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-5xl mx-auto">
          
          {/* Doctor Image Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl glow-navy border-4 border-white dark:border-zinc-800">
              <Image
                src="/images/dr_kumar.png"
                alt="Dr. Kumar DNB Orthopedics"
                fill
                className="object-cover"
                sizes="(max-w-780px) 100vw, 340px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-transparent to-transparent" />
              
              {/* Overlay Experience Card */}
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl glass-card border border-white/20 p-4 text-white shadow-xl text-center">
                <span className="block text-2xl font-extrabold text-teal-300">12+ Years</span>
                <span className="text-xs font-semibold tracking-wider uppercase text-gray-200">
                  Clinical Experience
                </span>
              </div>
            </div>
          </div>

          {/* Doctor Professional Bio Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div>
              <h3 className="text-3xl font-extrabold text-navy-800 dark:text-white">
                Dr. Kumar
              </h3>
              <p className="text-base font-bold text-teal-600 dark:text-teal-400 mt-1 uppercase tracking-wider">
                DNB (Orthopedics)
              </p>
              <p className="text-sm text-gray-500 dark:text-zinc-400 mt-0.5">
                Lead Orthopedic Surgeon & Medical Director
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-50 dark:bg-teal-900/20 text-teal-600 flex-shrink-0 mt-0.5">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-sm font-bold text-navy-800 dark:text-white">Academic Qualifications</span>
                  <span className="text-sm text-gray-600 dark:text-zinc-300">
                    Diplomate of National Board (DNB) in Orthopedic Surgery. Extensive residency and specialized surgical training in trauma units.
                  </span>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-50 dark:bg-teal-900/20 text-teal-600 flex-shrink-0 mt-0.5">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-sm font-bold text-navy-800 dark:text-white">Clinical Approach</span>
                  <span className="text-sm text-gray-600 dark:text-zinc-300">
                    Focuses on joint preservation techniques first, opting for surgical interventions like replacements or reconstructions only when conservative care is fully exhausted.
                  </span>
                </div>
              </div>
            </div>

            {/* Specialty Highlights Checklist */}
            <div>
              <span className="block text-sm font-bold text-navy-800 dark:text-white mb-3">
                Key Areas of Expertise:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-zinc-300">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/40 text-teal-600 flex-shrink-0">
                      <Check className="h-3 w-3 stroke-[3]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Booking Trigger CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="flex items-center justify-center gap-2 rounded-xl bg-teal-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-teal-600/20 hover:bg-teal-700 transition-all hover:scale-102 active:scale-98"
              >
                <Calendar className="h-4.5 w-4.5" />
                <span>Consult Dr. Kumar</span>
              </button>
              
              <a
                href="tel:+919440275556"
                className="flex items-center justify-center gap-2 rounded-xl bg-white border border-gray-200 px-6 py-3.5 text-sm font-bold text-navy-800 shadow-sm hover:bg-gray-50 dark:bg-zinc-900 dark:border-zinc-800 dark:text-white transition-all hover:scale-102 active:scale-98"
              >
                <Heart className="h-4.5 w-4.5 text-red-500 animate-float" />
                <span>Call for OPD Timings</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
