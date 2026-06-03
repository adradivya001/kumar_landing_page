"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star, HeartPulse } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Ramesh Babu",
      location: "Anantapur",
      treatment: "Emergency Fracture Surgery",
      rating: 5,
      story:
        "I was rushed to Kumar Hospital late at night after a major road accident with a severe compound leg fracture. Dr. Kumar operated immediately. His calm demeanor and surgical expertise saved my limb. Six months later, I am walking completely pain-free.",
    },
    {
      name: "Lakshmi Devi",
      location: "Dharmavaram",
      treatment: "Total Knee Replacement",
      rating: 5,
      story:
        "My mother was suffering from severe arthritis for years. We decided to consult Dr. Kumar. The total knee replacement surgery went smoothly. The post-surgery physiotherapy staff was incredibly patient, guiding her back to mobility. Highly recommend their rehab care.",
    },
    {
      name: "Dr. K. Rajesh",
      location: "Gooty",
      treatment: "Spine Care / Disc Treatment",
      rating: 5,
      story:
        "Being a doctor myself, I am very critical of sterile standards and diagnostics. I brought my mother here for her chronic sciatica and slip disc issue. The treatment was highly scientific, starting with target nerve blocks and rehab. The results have been exceptional.",
    },
    {
      name: "S. Rahamatullah",
      location: "Anantapur",
      treatment: "Emergency Sports Trauma",
      rating: 5,
      story:
        "My son dislocated his shoulder during an inter-school sports match. The trauma team at Kumar Hospital was ready within minutes of our arrival. They relocated the joint under mild sedation quickly. Their responsiveness and affordable charges are highly commendable.",
    },
  ];

  const [current, setCurrent] = useState(0);

  // Auto-sliding Carousel logic
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="py-24 bg-gray-50 dark:bg-zinc-950 font-sans relative overflow-hidden">
      <div className="absolute top-0 right-10 w-72 h-72 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1.5 rounded-md">
            Stories of Healing and Hope
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] dark:text-white mt-4 tracking-tight">
            Patient Stories That Inspire Us Daily
          </h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto relative px-4 sm:px-12">
          
          <div className="overflow-hidden rounded-[32px] bg-white dark:bg-zinc-850 p-8 sm:p-12 border border-gray-100 dark:border-zinc-800 shadow-xl glow-navy relative">
            <Quote className="absolute top-6 right-8 h-16 w-16 text-blue-500/10 dark:text-zinc-800/40 pointer-events-none" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-6"
              >
                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(reviews[current].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-blue-500 text-blue-500" />
                  ))}
                </div>

                {/* Narrative */}
                <p className="text-base sm:text-lg text-gray-600 dark:text-zinc-300 leading-relaxed italic font-medium">
                  &ldquo;{reviews[current].story}&rdquo;
                </p>

                {/* Reviewer Details */}
                <div className="flex items-center gap-4 border-t border-gray-150 dark:border-zinc-800 pt-6 mt-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 dark:bg-blue-950/30 text-blue-600 font-extrabold text-lg">
                    {reviews[current].name.charAt(0)}
                  </div>
                  <div>
                    <span className="block text-base font-bold text-[#0B1F3A] dark:text-white">
                      {reviews[current].name}
                    </span>
                    <span className="block text-xs text-gray-400">
                      {reviews[current].location} • Treated for <strong className="text-blue-600 dark:text-blue-400">{reviews[current].treatment}</strong>
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm hover:bg-gray-50 dark:border-zinc-850 dark:bg-zinc-800 dark:text-white transition-all active:scale-95"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            <div className="flex items-center gap-2">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    current === idx ? "w-6 bg-blue-600" : "w-2.5 bg-gray-300 dark:bg-zinc-700"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm hover:bg-gray-50 dark:border-zinc-850 dark:bg-zinc-800 dark:text-white transition-all active:scale-95"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

        </div>

        {/* Recovery stats checkouts */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-16 text-xs font-bold text-gray-400 dark:text-zinc-500 uppercase tracking-wider">
          <span className="flex items-center gap-1.5">
            <HeartPulse className="h-4 w-4 text-blue-500" />
            <span>99.2% Surgical Success Rate</span>
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
          <span>Apollo Clinical Benchmarks</span>
          <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
          <span>Patient-centered feedback loops</span>
        </div>

      </div>
    </section>
  );
}
