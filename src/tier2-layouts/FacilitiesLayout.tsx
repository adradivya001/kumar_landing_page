"use client";

import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import Image from "next/image";

export default function Facilities() {
  const items = [
    {
      title: "Advanced Operation Theater",
      category: "Surgical Suite",
      desc: "Ultra-clean laminar airflow systems, specialized orthopedic surgical tables, C-Arm imaging, and sterile instrumentation for complex reconstructions.",
      img: "/images/operating_room.png",
      span: "md:col-span-2",
    },
    {
      title: "Physiotherapy & Rehab Unit",
      category: "Rehabilitation",
      desc: "Comprehensive outpatient physical therapy setup equipped with muscle stimulators, traction systems, and specialized training bars.",
      img: "/images/rehab_room.png",
      span: "md:col-span-1",
    },
    {
      title: "Outpatient Consulting Chambers",
      category: "Consultations",
      desc: "Spacious diagnostic and consultation rooms designed for quiet, reassuring patient checkups and clinical examinations.",
      img: "/images/hero_bg.png",
      span: "md:col-span-1",
    },
    {
      title: "24/7 Trauma Emergency Bay",
      category: "Emergency Care",
      desc: "Fully equipped triaging zone and stabilization unit designed for rapid management of polytrauma, fractures, and acute joint injuries.",
      img: "/images/operating_room.png", // Reuse high-tech look for emergency/trauma OT
      span: "md:col-span-2",
    },
  ];

  return (
    <section id="facilities" className="py-24 bg-white dark:bg-zinc-900 font-sans relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/20 px-3 py-1.5 rounded-md">
            Our Infrastructure
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-800 dark:text-white mt-4 tracking-tight">
            Modern Medical Facilities & Infrastructure
          </h2>
          <div className="h-1 w-20 bg-teal-500 mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 dark:text-zinc-400 mt-4 text-sm sm:text-base">
            Take a look inside our hospital setup, designed to provide a sterile, advanced, and reassuring atmosphere for your recovery.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative overflow-hidden rounded-3xl group aspect-[16/11] border border-gray-150 dark:border-zinc-800 shadow-sm ${item.span}`}
            >
              {/* Facility Image */}
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-w-780px) 100vw, 500px"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/60 to-transparent opacity-90 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                
                {/* Category Label */}
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-teal-300 mb-1 block">
                  {item.category}
                </span>
                
                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 flex items-center gap-1.5">
                  <span>{item.title}</span>
                </h3>

                {/* Description */}
                <p className="text-xs text-gray-300 leading-relaxed max-w-xl transition-all duration-300 line-clamp-2 group-hover:line-clamp-none">
                  {item.desc}
                </p>

                {/* Micro Action Indicator */}
                <div className="mt-4 flex items-center gap-1.5 text-xs text-teal-400 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Eye className="h-3.5 w-3.5" />
                  <span>Verified Clinical Standard</span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
