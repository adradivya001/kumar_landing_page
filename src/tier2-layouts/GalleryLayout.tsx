"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Image as ImageIcon, Eye, Layers } from "lucide-react";
import Image from "next/image";

export default function Gallery() {
  const categories = ["All", "Building & Lobby", "Operating Suites", "Diagnostics & Rehab"];
  
  const [filter, setFilter] = useState("All");

  const images = [
    {
      title: "Main Hospital Lobby",
      category: "Building & Lobby",
      img: "/images/hero_bg.png",
      desc: "Spacious, modern reception and patient waiting lounges engineered to Apollo specifications."
    },
    {
      title: "Ultra-Clean Operation Theatre",
      category: "Operating Suites",
      img: "/images/operating_room.png",
      desc: "Sterile laminar airflow surgical room equipped with digital C-Arm imaging systems."
    },
    {
      title: "Advanced Rehabilitation Wing",
      category: "Diagnostics & Rehab",
      img: "/images/rehab_room.png",
      desc: "State-of-the-art physiotherapy gym for post-operative orthopedic recovery."
    },
    {
      title: "Surgical Triaging Zone",
      category: "Operating Suites",
      img: "/images/operating_room.png",
      desc: "Pre-operative preparation and stabilization suites built under extreme sterility standards."
    },
    {
      title: "Executive Patient Care Lounge",
      category: "Building & Lobby",
      img: "/images/hero_bg.png",
      desc: "Premium consulting lounge ensuring complete privacy and clinical coordination."
    },
    {
      title: "Advanced Mobility Clinic",
      category: "Diagnostics & Rehab",
      img: "/images/rehab_room.png",
      desc: "Gait analysis and rehabilitation space for joint reconstruction recovery."
    }
  ];

  const filteredImages = filter === "All" 
    ? images 
    : images.filter(img => img.category === filter);

  return (
    <section id="gallery" className="py-24 bg-gray-50 dark:bg-zinc-950 font-sans relative overflow-hidden">
      {/* Background Decors */}
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1.5 rounded-md">
            Visual Tour
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] dark:text-white mt-4 tracking-tight">
            Our Hospital Gallery
          </h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 dark:text-zinc-400 mt-4 text-sm sm:text-base">
            Take a visual tour of the Kumar Hospital campus. View actual clinical spaces, high-end infrastructure, and healing environments.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-12 max-w-2xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-full transition-all border ${
                filter === cat
                  ? "bg-[#0B1F3A] text-white border-[#0B1F3A] shadow-md dark:bg-blue-600 dark:border-blue-600"
                  : "bg-white text-gray-500 border-gray-200 hover:text-[#0B1F3A] hover:bg-gray-50 dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-400 dark:hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry / Grid Layout */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={img.title + idx}
                className="group relative overflow-hidden rounded-[28px] aspect-[4/3] bg-gray-200 dark:bg-zinc-800 border border-gray-150 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <Image
                  src={img.img}
                  alt={img.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-w-780px) 100vw, 400px"
                />
                
                {/* Visual Glassmorphic Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/90 via-[#0B1F3A]/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white backdrop-blur-[2px]">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-teal-400 mb-1.5 block">
                    {img.category}
                  </span>
                  <h3 className="text-base font-bold text-white mb-1.5">
                    {img.title}
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed line-clamp-2">
                    {img.desc}
                  </p>
                  <div className="mt-4 flex items-center gap-1.5 text-[9px] text-blue-300 font-extrabold tracking-wider uppercase">
                    <Eye className="h-3.5 w-3.5" />
                    <span>View Infrastructure Suite</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
