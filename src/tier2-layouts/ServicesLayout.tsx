"use client";

import { motion } from "framer-motion";
import { Bone, Stethoscope, Activity, HeartPulse, ChevronRight, Phone } from "lucide-react";

interface ServicesProps {
  onOpenBooking: () => void;
}

export default function Services({ onOpenBooking }: ServicesProps) {
  const departments = [
    {
      icon: <Bone className="h-7 w-7 text-teal-600 dark:text-teal-400" />,
      title: "Orthopedic Surgery",
      badge: "Specialty",
      desc: "Complete bone, joint, and spine treatments using minimally invasive procedures and modern implants.",
      details: [
        "Complex Fracture & Trauma Management",
        "Knee & Hip Joint Replacements",
        "Ligament Reconstruction (ACL/PCL tears)",
        "Spine & Lumbar Herniated Disc Surgery",
      ],
      color: "bg-teal-50 dark:bg-teal-900/20 border-teal-100 dark:border-teal-900/30",
    },
    {
      icon: <Stethoscope className="h-7 w-7 text-navy-600 dark:text-navy-400" />,
      title: "General Medicine",
      badge: "Comprehensive",
      desc: "Preventive care, diagnosis, and medical treatment for acute illnesses and chronic health conditions.",
      details: [
        "Chronic Diabetes & Hypertension Control",
        "Infectious Disease Treatments",
        "Geriatric & Preventive Health Checkups",
        "Thyroid & Metabolic Disorder Care",
      ],
      color: "bg-navy-50 dark:bg-navy-950/40 border-navy-100 dark:border-navy-900/30",
    },
    {
      icon: <Activity className="h-7 w-7 text-teal-600 dark:text-teal-400" />,
      title: "Physiotherapy & Rehab",
      badge: "Recovery",
      desc: "Dedicated physical therapy programs focused on restoring complete mobility and managing pain post-surgery.",
      details: [
        "Post-Surgical Orthopedic Rehabilitation",
        "Joint Stiffness & Arthritis Pain Care",
        "Sports Injury Recovery Programs",
        "Neurological & Mobility Training",
      ],
      color: "bg-teal-50 dark:bg-teal-900/20 border-teal-100 dark:border-teal-900/30",
    },
    {
      icon: <HeartPulse className="h-7 w-7 text-red-600 dark:text-red-400" />,
      title: "Emergency & Trauma",
      badge: "24/7 Availability",
      desc: "Round-the-clock rapid-response trauma care for accidents, severe orthopaedic injuries, and general emergencies.",
      details: [
        "Polytrauma & Emergency Accident Care",
        "24/7 ICU Admission & Stabilization",
        "Immediate In-house X-Ray & Diagnostics",
        "Dedicated Emergency Ambulance Services",
      ],
      color: "bg-red-50 dark:bg-red-950/20 border-red-100 dark:border-red-950/30",
    },
  ];

  return (
    <section id="services" className="py-24 bg-white dark:bg-zinc-900 font-sans relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-10 right-0 w-80 h-80 rounded-full bg-navy-500/5 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/20 px-3 py-1.5 rounded-md">
            Clinical Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-800 dark:text-white mt-4 tracking-tight">
            Comprehensive Specialties & Patient Care
          </h2>
          <div className="h-1 w-20 bg-teal-500 mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 dark:text-zinc-400 mt-4 text-sm sm:text-base">
            Providing high-quality medical services across key healthcare disciplines with special emphasis on orthopedic wellness.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {departments.map((dept, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`p-8 rounded-3xl border transition-all duration-300 hover:shadow-xl hover:border-teal-200 dark:hover:border-teal-800 bg-white dark:bg-zinc-850 group ${dept.color}`}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white dark:bg-zinc-800 shadow-md group-hover:scale-105 transition-transform">
                  {dept.icon}
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-navy-700 bg-white dark:bg-zinc-800 px-2.5 py-1 rounded-full border border-gray-100 dark:border-zinc-700 shadow-sm">
                  {dept.badge}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-navy-800 dark:text-white mb-3">
                {dept.title}
              </h3>
              
              <p className="text-sm text-gray-600 dark:text-zinc-300 leading-relaxed mb-6">
                {dept.desc}
              </p>

              {/* Service details checklist */}
              <ul className="space-y-3.5 border-t border-gray-100 dark:border-zinc-700/60 pt-6 mb-8 text-sm text-gray-500 dark:text-zinc-400">
                {dept.details.map((detail, key) => (
                  <li key={key} className="flex items-start gap-2.5">
                    <ChevronRight className="h-4 w-4 text-teal-600 dark:text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              {/* Action Buttons inside Card */}
              <div className="flex items-center justify-between">
                {dept.title === "Emergency & Trauma" ? (
                  <a
                    href="tel:+918554245678"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 dark:text-red-400 transition-colors hover:underline"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    <span>24/7 HOTLINE</span>
                  </a>
                ) : (
                  <button
                    onClick={onOpenBooking}
                    className="inline-flex items-center gap-1 text-xs font-bold text-teal-600 dark:text-teal-400 transition-colors hover:underline"
                  >
                    <span>SCHEDULE VISIT</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                )}
                
                <a
                  href="#contact"
                  className="text-xs font-semibold text-gray-400 hover:text-navy-800 dark:hover:text-white transition-colors"
                >
                  Locate Department
                </a>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
