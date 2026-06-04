"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, HeartPulse, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

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

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
    dragFree: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  const autoplayTimer = useRef<NodeJS.Timeout | null>(null);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Autoplay Logic with Hover Pausing
  useEffect(() => {
    if (!emblaApi || isHovered) {
      if (autoplayTimer.current) clearInterval(autoplayTimer.current);
      return;
    }

    autoplayTimer.current = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => {
      if (autoplayTimer.current) clearInterval(autoplayTimer.current);
    };
  }, [emblaApi, isHovered]);

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
        <div className="max-w-4xl mx-auto relative px-2 sm:px-12">
          
          <div 
            className="overflow-hidden" 
            ref={emblaRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="flex touch-pan-y">
              {reviews.map((review, index) => (
                <div 
                  key={index} 
                  className="flex-[0_0_100%] min-w-0 px-2 select-none"
                >
                  <div className="rounded-[32px] bg-white dark:bg-zinc-850 p-8 sm:p-12 border border-gray-100 dark:border-zinc-800 shadow-xl glow-navy relative h-full flex flex-col justify-between">
                    <Quote className="absolute top-6 right-8 h-16 w-16 text-blue-500/10 dark:text-zinc-800/40 pointer-events-none" />
                    
                    <div className="flex flex-col gap-6">
                      {/* Rating */}
                      <div className="flex gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-blue-500 text-blue-500" />
                        ))}
                      </div>

                      {/* Narrative */}
                      <p className="text-base sm:text-lg text-gray-600 dark:text-zinc-300 leading-relaxed italic font-medium">
                        &ldquo;{review.story}&rdquo;
                      </p>
                    </div>

                    {/* Reviewer Details */}
                    <div className="flex items-center gap-4 border-t border-gray-150 dark:border-zinc-800 pt-6 mt-8">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-50 dark:bg-blue-950/30 text-blue-600 font-extrabold text-lg">
                        {review.name.charAt(0)}
                      </div>
                      <div className="min-w-0">
                        <span className="block text-base font-bold text-[#0B1F3A] dark:text-white truncate">
                          {review.name}
                        </span>
                        <span className="block text-xs text-gray-400 truncate">
                          {review.location} • Treated for <strong className="text-blue-600 dark:text-blue-400">{review.treatment}</strong>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-10">
            {/* Pagination status indicator */}
            <div className="text-sm font-semibold text-gray-500 dark:text-zinc-400">
              Showing testimonial <span className="text-blue-600 dark:text-blue-400">{selectedIndex + 1}</span> of <span className="font-bold text-[#0B1F3A] dark:text-white">{reviews.length}</span>
            </div>

            <div className="flex items-center gap-6">
              {/* Custom SVG Slide Navigation Dots */}
              <div className="flex items-center gap-2.5">
                {scrollSnaps.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => scrollTo(idx)}
                    className="group relative flex h-6 w-6 items-center justify-center focus:outline-none"
                    aria-label={`Go to slide ${idx + 1}`}
                  >
                    <svg className="h-4 w-4">
                      {/* Outer glowing ring active state */}
                      <circle
                        cx="8"
                        cy="8"
                        r={selectedIndex === idx ? "7" : "3"}
                        className={`transition-all duration-300 fill-none stroke-2 ${
                          selectedIndex === idx
                            ? "stroke-blue-600 dark:stroke-blue-400"
                            : "stroke-transparent group-hover:stroke-gray-300 dark:group-hover:stroke-zinc-700"
                        }`}
                      />
                      {/* Inner dot */}
                      <circle
                        cx="8"
                        cy="8"
                        r="3"
                        className={`transition-all duration-300 ${
                          selectedIndex === idx
                            ? "fill-blue-600 dark:fill-blue-400"
                            : "fill-gray-300 dark:fill-zinc-700 group-hover:fill-gray-400 dark:group-hover:fill-zinc-500"
                        }`}
                      />
                    </svg>
                  </button>
                ))}
              </div>

              {/* Prev / Next Arrows */}
              <div className="flex gap-2">
                <button
                  onClick={scrollPrev}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm hover:bg-gray-50 dark:border-zinc-850 dark:bg-zinc-800 dark:text-white transition-all active:scale-95 cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={scrollNext}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm hover:bg-gray-50 dark:border-zinc-850 dark:bg-zinc-800 dark:text-white transition-all active:scale-95 cursor-pointer"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
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
