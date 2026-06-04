"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, MessageSquare, Clock, Compass, Car, ExternalLink, Copy, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";

function useIsOpen() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const check = () => {
      const now = new Date();
      const hour = now.getHours();
      const day = now.getDay(); // 0 = Sun, 6 = Sat
      const isOpdOpen = day >= 1 && day <= 6 && hour >= 9 && hour < 20;
      setIsOpen(isOpdOpen);
      setCurrentTime(
        now.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", hour12: true })
      );
    };
    check();
    const interval = setInterval(check, 60000);
    return () => clearInterval(interval);
  }, []);

  return { isOpen, currentTime };
}

export default function Contact() {
  const { isOpen, currentTime } = useIsOpen();
  const [copied, setCopied] = useState(false);

  const handleDirectionsClick = () => {
    window.open(
      "https://maps.google.com/?q=Vidyut+Nagar+80+Feet+Rd,+Vidyut+Nagar,+Anantapur,+Andhra+Pradesh+515001",
      "_blank"
    );
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText("12-4, 80 Feet Road, Vidyuth Nagar, Housing Board Colony, Anantapur, Andhra Pradesh - 515001, India");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any } },
  };

  return (
    <section id="contact" className="py-16 bg-transparent font-sans relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-400/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-72 h-72 bg-teal-300/4 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1.5 rounded-md inline-flex items-center gap-1.5">
            <MapPin className="h-3 w-3" />
            Locate & Visit Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] dark:text-white mt-4 tracking-tight">
            Hospital Location &amp; Directions
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 dark:text-zinc-400 mt-4 text-sm sm:text-base">
            Easily navigate to Kumar Hospital in Anantapur. Find precise driving directions, parking layout, and quick contact details.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch max-w-6xl mx-auto"
        >

          {/* ── Left Column: Map + Directions ── */}
          <motion.div variants={itemVariants} className="lg:col-span-7 flex flex-col gap-6">
            {/* Map */}
            <div className="relative w-full h-[380px] sm:h-[440px] rounded-[32px] overflow-hidden shadow-xl border border-gray-200 dark:border-zinc-800 bg-gray-100 group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.4287895315806!2d77.58552147573031!3d14.660600175628588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb14ab59e219491%3A0x6b19a16f2c79f3cf!2sVidyut%20Nagar%2080%20Feet%20Rd%2C%20Vidyut%20Nagar%2C%20Anantapur%2C%20Andhra%20Pradesh%20515001!5e0!3m2!1sen!2sin!4v1716658000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kumar Hospital Google Map"
                className="transition-transform duration-700 group-hover:scale-[1.015]"
              />

              {/* "Open in Maps" floating action */}
              <div className="absolute bottom-4 right-4 z-20">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleDirectionsClick}
                  className="flex items-center gap-2 bg-[#0B1F3A] hover:bg-navy-950 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-xl transition-colors border border-navy-800"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </motion.button>
              </div>

              {/* Pin drop animation */}
              <motion.div
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 15 }}
                className="absolute top-4 left-4 z-20 bg-white rounded-xl shadow-lg px-3 py-2 flex items-center gap-2 border border-gray-100"
              >
                <MapPin className="h-4 w-4 text-blue-600" />
                <span className="text-xs font-bold text-[#0B1F3A]">Kumar Hospital, Anantapur</span>
              </motion.div>
            </div>

            {/* Directions Panel */}
            <div className="bg-white dark:bg-zinc-900 p-6 sm:p-8 rounded-[32px] border border-gray-150 dark:border-zinc-800 shadow-md">
              <h3 className="text-lg font-extrabold text-[#0B1F3A] dark:text-white mb-5 flex items-center gap-2">
                <Compass className="h-5 w-5 text-blue-600" />
                <span>How to Reach Kumar Hospital</span>
              </h3>
              <div className="space-y-4 text-xs sm:text-sm text-gray-600 dark:text-zinc-300">
                {[
                  {
                    step: 1,
                    title: "From Anantapur RTC Bus Stand (Approx. 2.5 km)",
                    body: "Take the 80 Feet Road directly towards Vidyuth Nagar. Head past the Housing Board Colony arch. The hospital is prominently located on the main double road.",
                  },
                  {
                    step: 2,
                    title: "From Anantapur Railway Station (Approx. 3.5 km)",
                    body: "Head north-east on Station Road towards Subash Road, join the main bypass line, then take the immediate left onto the Vidyuth Nagar double road junction.",
                  },
                  {
                    step: 3,
                    title: "Key Landmarks",
                    body: "Right adjacent to the Vidyuth Nagar Housing Board Park, next to the main electrical substation avenue. Look for the large prominent modern blue Kumar Hospital glow sign boards.",
                  },
                ].map(({ step, title, body }) => (
                  <div key={step} className="flex gap-3.5 items-start group">
                    <div className="h-6 w-6 rounded-full bg-blue-600 flex items-center justify-center font-bold text-[10px] text-white mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform">
                      {step}
                    </div>
                    <div>
                      <strong className="text-[#0B1F3A] dark:text-white block font-bold mb-0.5">{title}</strong>
                      {body}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Right Column ── */}
          <motion.div variants={itemVariants} className="lg:col-span-5 flex flex-col gap-5">

            {/* Address Card */}
            <div className="bg-white dark:bg-zinc-900 p-6 sm:p-8 rounded-[32px] border border-gray-150 dark:border-zinc-800 shadow-md flex-1">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 mb-5">
                <MapPin className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-extrabold text-[#0B1F3A] dark:text-white mb-2">Hospital Campus</h3>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-zinc-400 leading-relaxed mb-4">
                Kumar Hospital is easily accessible for patients from all corners of Anantapur District.
              </p>

              <address className="not-italic text-sm text-[#0B1F3A] dark:text-zinc-200 font-semibold leading-relaxed border-t border-gray-100 dark:border-zinc-800 pt-4">
                12-4, 80 Feet Road,<br />
                Vidyuth Nagar, Housing Board Colony,<br />
                Anantapur, Andhra Pradesh - 515001, India
              </address>

              {/* Copy address button */}
              <button
                onClick={handleCopyAddress}
                className={`mt-3 flex items-center gap-1.5 text-[11px] font-bold transition-all uppercase tracking-wider ${
                  copied ? "text-emerald-600" : "text-blue-600 hover:text-blue-700"
                }`}
              >
                {copied ? (
                  <>
                    <CheckCircle className="h-3.5 w-3.5" />
                    <span>Address Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>

              <div className="mt-6">
                <button
                  onClick={handleDirectionsClick}
                  className="group w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-3 px-4 rounded-xl shadow-md transition-all hover:scale-[1.01]"
                >
                  <span>Get Driving Directions</span>
                  <ExternalLink className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* Parking Info */}
            <div className="bg-[#EAF3FF]/70 dark:bg-zinc-900 p-5 rounded-[28px] border border-blue-100 dark:border-zinc-800 shadow-sm">
              <h4 className="text-sm font-extrabold text-[#0B1F3A] dark:text-white mb-3 flex items-center gap-2">
                <Car className="h-4 w-4 text-blue-600" />
                <span>Parking &amp; Accessibility</span>
              </h4>
              <ul className="space-y-2 text-xs text-gray-600 dark:text-zinc-400">
                {[
                  { label: "Free Parking:", body: "Spacious car and two-wheeler parking directly in front of the hospital block." },
                  { label: "Emergency Access:", body: "Dedicated wide ambulance bays for immediate stretcher access." },
                  { label: "Wheelchair Friendly:", body: "Step-free entrance, elevators, and accessible restrooms throughout all levels." },
                ].map(({ label, body }, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold mt-0.5">•</span>
                    <span><strong>{label}</strong> {body}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hours + Contact + Live Status */}
            <div className="bg-[#0B1F3A] text-white p-6 sm:p-7 rounded-[28px] border border-navy-800 shadow-lg flex flex-col gap-5">

              {/* Live OPD Status */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-teal-400 flex-shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-teal-400 uppercase tracking-widest block">OPD Status</span>
                    <span className="text-sm font-bold">{isOpen ? "Open Now" : "Closed"} · {currentTime}</span>
                  </div>
                </div>
                <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider border ${
                  isOpen
                    ? "bg-emerald-950/40 border-emerald-700 text-emerald-400"
                    : "bg-red-950/40 border-red-700 text-red-400"
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${isOpen ? "bg-emerald-500 animate-pulse" : "bg-red-500"}`} />
                  {isOpen ? "OPD Open" : "OPD Closed"}
                </div>
              </div>

              <div className="text-xs text-red-300 font-semibold">
                ● Emergency Admissions &amp; Trauma Care: 24/7 Always Active
              </div>

              {/* Phones */}
              <div className="border-t border-navy-800 pt-4 flex gap-3 items-start">
                <Phone className="h-5 w-5 text-teal-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-xs font-bold text-teal-400 uppercase tracking-widest block mb-1">Direct Helpline</span>
                  <a href="tel:08554245678" className="text-sm font-bold block hover:text-teal-300 transition-colors">
                    OPD Desk: 08554-245678
                  </a>
                  <a href="tel:+919440275556" className="text-sm font-bold block hover:text-teal-300 transition-colors mt-0.5">
                    Hotline: +91 94402 75556
                  </a>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/919440275556?text=Hi%20Kumar%20Hospital,%20I'd%20like%20to%20inquire%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-3 px-4 shadow-md transition-all hover:scale-[1.01]"
              >
                <MessageSquare className="h-4 w-4 fill-white stroke-none" />
                <span>Chat Instantly on WhatsApp</span>
              </a>
            </div>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
