"use client";

import { motion } from "framer-motion";
import { ChevronRight, Heart, Bone, Activity, Stethoscope, Scissors, UserCheck, Eye } from "lucide-react";
import Image from "next/image";

interface ServicesProps {
  onOpenBooking: () => void;
}

export default function Services({ onOpenBooking }: ServicesProps) {
  const specialties = [
    {
      title: "Orthopedics & Spine",
      icon: <Bone className="h-6 w-6 text-blue-600" />,
      desc: "Comprehensive bone, joint, and spine reconstructions driven by advanced orthopedic surgical protocols.",
      img: "/images/operating_room.png"
    },
    {
      title: "Cardiology",
      icon: <Heart className="h-6 w-6 text-red-500" />,
      desc: "Preventive, diagnostic, and clinical cardiac consultations to secure your heart's vital rhythm.",
      img: "/images/cardiology.png"
    },
    {
      title: "Urology",
      icon: <Activity className="h-6 w-6 text-indigo-500" />,
      desc: "Expert treatment for kidney stones, prostate health, and urinary tract wellness conditions.",
      img: "/images/urology.png"
    },
    {
      title: "General Medicine",
      icon: <Stethoscope className="h-6 w-6 text-teal-500" />,
      desc: "Systemic care managing chronic diabetes, blood pressure, fever, and metabolic disorders.",
      img: "/images/general_medicine.png"
    },
    {
      title: "General Surgery",
      icon: <Scissors className="h-6 w-6 text-amber-500" />,
      desc: "Minimally invasive keyhole and open surgical care managed under maximum sterile conditions.",
      img: "/images/general_surgery.png"
    },
    {
      title: "Pediatrics",
      icon: <UserCheck className="h-6 w-6 text-pink-500" />,
      desc: "Compassionate, gentle healthcare programs serving infants, kids, and adolescents.",
      img: "/images/pediatrics.png"
    },
    {
      title: "Women's Health",
      icon: <Activity className="h-6 w-6 text-purple-500" />,
      desc: "Comprehensive gynecological checkups, prenatal guidance, and maternal health care.",
      img: "/images/womens_health.png"
    },
    {
      title: "Diagnostics & Imaging",
      icon: <Eye className="h-6 w-6 text-blue-500" />,
      desc: "Instant high-definition in-house X-Rays, path labs, and precision ultrasound screenings.",
      img: "/images/diagnostics.png"
    }
  ];

  return (
    <section id="services" className="pt-10 pb-4 bg-white dark:bg-zinc-900 font-sans relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1.5 rounded-md">
            Centers of Excellence
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] dark:text-white mt-4 tracking-tight">
            Our Medical Specialties
          </h2>
          <div className="h-1 w-20 bg-blue-500 mt-4 rounded-full" />
          <p className="text-gray-555 dark:text-zinc-440 mt-4 text-sm sm:text-base">
            Providing high-quality medical services across key healthcare disciplines with uncompromised therapeutic safety.
          </p>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {specialties.map((spec, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-[24px] bg-[#F8FAFC] dark:bg-zinc-850 border border-gray-150 dark:border-zinc-800 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-blue-200 cursor-pointer flex flex-col justify-between min-h-[360px]"
            >
              {/* Specialty Image container with zoom effect */}
              <div className="relative w-full h-[160px] overflow-hidden">
                <Image
                  src={spec.img}
                  alt={spec.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-w-780px) 100vw, 280px"
                />
                <div className="absolute inset-0 bg-[#0B1F3A]/20" />
                <div className="absolute top-4 left-4 h-10 w-10 rounded-xl bg-white/90 backdrop-blur-md flex items-center justify-center shadow-md">
                  {spec.icon}
                </div>
              </div>

              {/* Text Area */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#0B1F3A] dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
                    {spec.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-zinc-400 leading-relaxed line-clamp-3">
                    {spec.desc}
                  </p>
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-gray-150/60 dark:border-zinc-800">
                  <button
                    onClick={onOpenBooking}
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-600 hover:text-blue-700 transition-colors uppercase tracking-wider"
                  >
                    <span>Book Consult</span>
                    <ChevronRight className="h-3 w-3 stroke-[2.5]" />
                  </button>
                  <span className="text-[10px] font-semibold text-gray-400">Apollo Standards</span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
