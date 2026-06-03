"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, Plus, Minus } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      q: "How do I book an appointment with Dr. Kumar?",
      a: "You can request an appointment by clicking any 'Book Appointment' button on this website and filling out the short form, or by calling our desk directly at 08554-245678 or +91 94402 75556. Once submitted, our coordinator will call you to confirm your exact time slot.",
    },
    {
      q: "What are the hospital consulting hours?",
      a: "Our Outpatient Department (OPD) is open Monday through Saturday from 9:00 AM to 8:00 PM. Emergency, trauma triaging, and inpatient critical care operations are fully active 24 hours a day, 7 days a week, including Sundays and public holidays.",
    },
    {
      q: "Does the hospital handle emergency accident cases and fracture surgeries?",
      a: "Yes, we are a specialized trauma care center. We have an active trauma surgical team led by Dr. Kumar. Our operating theaters, in-house X-ray facility, diagnostics, and sterile wards are equipped for immediate admission and fracture fixing operations 24/7.",
    },
    {
      q: "Do you offer cashless treatments or accept health insurance?",
      a: "Yes. We partner with major health insurance companies and Third-Party Administrators (TPAs) to provide cashless treatment for qualifying surgical procedures. Please visit our front office with your health card and ID for pre-authorization details.",
    },
    {
      q: "Is there in-house physical therapy available for post-surgical recovery?",
      a: "Absolutely. We have a dedicated Physiotherapy and Rehabilitation department inside the hospital. Our physical therapists design customized mobility recovery and pain-management programs specifically for patients recovering from joint replacements, fracture repairs, and ligament reconstructions.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (idx: number) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section id="faq" className="py-14 bg-white dark:bg-zinc-900 font-sans relative overflow-hidden">
      {/* Decorative pulse background */}
      <div className="absolute -top-40 -right-40 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1.5 rounded-md">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] dark:text-white mt-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* FAQ Accordion List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-4 max-w-3xl mx-auto"
        >
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="border border-gray-150 rounded-2xl overflow-hidden bg-gray-50 dark:border-zinc-800 dark:bg-zinc-850/60 transition-colors shadow-sm"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-5 text-left text-[#0B1F3A] dark:text-white font-bold text-base transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <div className="flex gap-3 items-center">
                    <HelpCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span>{faq.q}</span>
                  </div>
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 shadow-sm text-gray-500 flex-shrink-0 ml-4">
                    {isOpen ? (
                      <Minus className="h-4 w-4 text-blue-600" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-6 pt-1 text-sm text-gray-600 dark:text-zinc-300 leading-relaxed border-t border-gray-150/40 dark:border-zinc-850 ml-8">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}

