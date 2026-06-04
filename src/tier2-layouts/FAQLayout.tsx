"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, Search, ChevronDown, MessageSquare } from "lucide-react";

const FAQS = [
  {
    q: "How do I book an appointment with Dr. Kumar?",
    a: "You can request an appointment by clicking any 'Book Appointment' button on this website and filling out the short form, or by calling our desk directly at 08554-245678 or +91 94402 75556. Once submitted, our coordinator will call you to confirm your exact time slot.",
    tag: "Booking",
  },
  {
    q: "What are the hospital consulting hours?",
    a: "Our Outpatient Department (OPD) is open Monday through Saturday from 9:00 AM to 8:00 PM. Emergency, trauma triaging, and inpatient critical care operations are fully active 24 hours a day, 7 days a week, including Sundays and public holidays.",
    tag: "Hours",
  },
  {
    q: "Does the hospital handle emergency accident cases and fracture surgeries?",
    a: "Yes, we are a specialized trauma care center. We have an active trauma surgical team led by Dr. Kumar. Our operating theaters, in-house X-ray facility, diagnostics, and sterile wards are equipped for immediate admission and fracture fixing operations 24/7.",
    tag: "Emergency",
  },
  {
    q: "Do you offer cashless treatments or accept health insurance?",
    a: "Yes. We partner with major health insurance companies and Third-Party Administrators (TPAs) to provide cashless treatment for qualifying surgical procedures. Please visit our front office with your health card and ID for pre-authorization details.",
    tag: "Insurance",
  },
  {
    q: "Is there in-house physical therapy available for post-surgical recovery?",
    a: "Absolutely. We have a dedicated Physiotherapy and Rehabilitation department inside the hospital. Our physical therapists design customized mobility recovery and pain-management programs specifically for patients recovering from joint replacements, fracture repairs, and ligament reconstructions.",
    tag: "Therapy",
  },
  {
    q: "How do I reach Kumar Hospital from Anantapur city?",
    a: "Kumar Hospital is located at 12-4, 80 Feet Road, Vidyuth Nagar, Anantapur. From the RTC Bus Stand, take the 80 Feet Road directly towards Vidyuth Nagar — approximately 2.5 km. We are prominently visible with blue signboards near the Housing Board Park.",
    tag: "Location",
  },
];

const TAG_COLORS: Record<string, string> = {
  Booking: "bg-blue-50 text-blue-600 border-blue-100",
  Hours: "bg-teal-50 text-teal-700 border-teal-100",
  Emergency: "bg-red-50 text-red-600 border-red-100",
  Insurance: "bg-amber-50 text-amber-700 border-amber-100",
  Therapy: "bg-purple-50 text-purple-700 border-purple-100",
  Location: "bg-emerald-50 text-emerald-700 border-emerald-100",
};

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    if (!search.trim()) return FAQS;
    const q = search.toLowerCase();
    return FAQS.filter(
      (faq) =>
        faq.q.toLowerCase().includes(q) ||
        faq.a.toLowerCase().includes(q) ||
        faq.tag.toLowerCase().includes(q)
    );
  }, [search]);

  const toggleFAQ = (idx: number) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  // Highlight matching text
  const highlight = (text: string) => {
    if (!search.trim()) return text;
    const regex = new RegExp(`(${search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
    const parts = text.split(regex);
    return parts.map((part, i) =>
      regex.test(part) ? (
        <mark key={i} className="bg-yellow-200 dark:bg-yellow-800/50 text-inherit rounded px-0.5">
          {part}
        </mark>
      ) : part
    );
  };

  return (
    <section id="faq" className="py-16 bg-white dark:bg-zinc-900 font-sans relative overflow-hidden">
      {/* Decorative backgrounds */}
      <div className="absolute -top-40 -right-40 w-[400px] h-[400px] bg-blue-500/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-20 w-[300px] h-[300px] bg-teal-400/4 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1.5 rounded-md inline-flex items-center gap-1.5">
            <MessageSquare className="h-3 w-3" />
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] dark:text-white mt-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Live Search Bar */}
        <div className="relative mb-8 max-w-xl mx-auto">
          <Search className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search questions (e.g. emergency, booking, insurance...)"
            value={search}
            onChange={(e) => { setSearch(e.target.value); setActiveIndex(null); }}
            className="w-full rounded-2xl border border-gray-200 dark:border-zinc-700 bg-[#F8FAFC] dark:bg-zinc-800 py-3.5 pl-11 pr-4 text-sm text-gray-800 dark:text-white placeholder:text-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-400/20 transition-all"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute top-1/2 right-4 -translate-y-1/2 text-xs font-bold text-gray-400 hover:text-gray-600 transition-colors"
            >
              Clear
            </button>
          )}
        </div>

        {/* Results count */}
        {search && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs text-gray-400 text-center mb-6"
          >
            {filtered.length > 0
              ? `Showing ${filtered.length} result${filtered.length !== 1 ? "s" : ""} for "${search}"`
              : `No results for "${search}"`}
          </motion.p>
        )}

        {/* FAQ Accordion */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } }}
          className="space-y-3 max-w-3xl mx-auto"
        >
          <AnimatePresence>
            {filtered.map((faq, idx) => {
              const isOpen = activeIndex === idx;
              return (
                <motion.div
                  key={faq.q}
                  variants={{ hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0, transition: { duration: 0.4 } } }}
                  layout
                  className={`rounded-2xl overflow-hidden border transition-all duration-300 ${
                    isOpen
                      ? "border-blue-300 dark:border-blue-700 bg-blue-50/60 dark:bg-blue-950/20 shadow-md shadow-blue-600/8"
                      : "border-gray-150 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-850/60 shadow-sm"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <div className="flex gap-3 items-start flex-1">
                      <HelpCircle className={`h-5 w-5 flex-shrink-0 mt-0.5 transition-colors ${isOpen ? "text-blue-600" : "text-blue-400"}`} />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <span className={`px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wider border ${TAG_COLORS[faq.tag] || "bg-gray-50 text-gray-500 border-gray-100"}`}>
                            {faq.tag}
                          </span>
                        </div>
                        <span className={`text-sm font-bold transition-colors block ${isOpen ? "text-blue-700 dark:text-blue-300" : "text-[#0B1F3A] dark:text-white"}`}>
                          {highlight(faq.q)}
                        </span>
                      </div>
                    </div>

                    {/* Spring-rotate chevron */}
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      className={`ml-3 flex-shrink-0 h-7 w-7 flex items-center justify-center rounded-full border transition-colors ${
                        isOpen
                          ? "bg-blue-600 border-blue-600 text-white"
                          : "bg-white dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 text-gray-500"
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: "easeInOut" }}
                      >
                        {/* Teal left border on open */}
                        <div className="relative">
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-teal-500 rounded-r-full" />
                          <div className="px-5 pb-6 pt-1 text-sm text-gray-600 dark:text-zinc-300 leading-relaxed ml-8">
                            {highlight(faq.a)}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <p className="text-gray-400 text-sm">No FAQs match your search. Try a different keyword.</p>
              <button
                onClick={() => setSearch("")}
                className="mt-3 text-xs font-bold text-blue-600 hover:text-blue-700 underline"
              >
                Clear search and show all FAQs
              </button>
            </motion.div>
          )}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-500 mb-4">Still have questions? Our team is happy to help.</p>
          <a
            href="https://wa.me/919440275556?text=I have a question about Kumar Hospital"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 text-white text-sm font-bold hover:bg-emerald-700 shadow-md shadow-emerald-600/20 transition-all hover:scale-[1.02]"
          >
            <MessageSquare className="h-4 w-4" />
            <span>Ask on WhatsApp</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
