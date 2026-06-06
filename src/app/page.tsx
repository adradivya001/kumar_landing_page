"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Navbar from "@/tier1-components/Navbar";
import Footer from "@/tier1-components/Footer";
import AppointmentModal from "@/tier1-components/AppointmentModal";
import EmergencyFloating from "@/tier1-components/EmergencyFloating";
import Preloader from "@/tier1-components/Preloader";

// Selected Sections
import Hero from "@/tier2-layouts/HeroLayout";
import DoctorProfile from "@/tier2-layouts/DoctorProfileLayout";
import Services from "@/tier2-layouts/ServicesLayout";
import Doctor from "@/tier2-layouts/DoctorLayout";
import WhyChooseUs from "@/tier2-layouts/WhyChooseUsLayout";
import Facilities from "@/tier2-layouts/FacilitiesLayout";
import AppointmentBooking from "@/tier2-layouts/AppointmentBookingLayout";
import FAQ from "@/tier2-layouts/FAQLayout";
import Contact from "@/tier2-layouts/ContactLayout";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  // Lock background scroll when modal is active
  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeModal]);

  if (loading) {
    return <Preloader onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Background Mesh Overlay & Flowing Blobs - Hospital Themed */}
      <div className="fixed inset-0 bg-[#f8fafc]/40 dark:bg-zinc-950/20 medical-grid pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-[450px] h-[450px] bg-blob blob-blue" />
        <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-blob blob-gold" />
        <div className="absolute bottom-10 left-1/3 w-[400px] h-[400px] bg-blob blob-indigo" />
      </div>

      {/* Sticky Navigation bar */}
      <Navbar onOpenBooking={openBooking} onNavClick={(id) => setActiveModal(id === "home" ? null : id)} activeSection={activeModal || undefined} />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenBooking={openBooking} />

        {/* Doctor Profile Section */}
        <DoctorProfile onOpenBooking={openBooking} />

        {/* 2. Specialties & Departments */}
        <Services onOpenBooking={openBooking} />

        {/* 3. Specialists Showcase */}
        <Doctor onOpenBooking={openBooking} />

        {/* 4. Why Choose Us (Stats & Pillars) */}
        <WhyChooseUs />

        {/* 5. Infrastructure (Facilities) */}
        <Facilities />

        {/* 7. Stepped In-Page Booking & WhatsApp options */}
        <AppointmentBooking />

        {/* 8. FAQs Help Accordions */}
        <FAQ />

        {/* 9. Directions & Location Maps */}
        <Contact />
      </main>

      {/* Structured Footer */}
      <Footer />

      {/* Fullscreen Tab Modal Slide-up */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 220 }}
            className="fixed inset-0 z-[120] bg-[#F5FBFC] dark:bg-[#090d16] overflow-y-auto pt-24 pb-16"
          >
            {/* Background Mesh Overlay & Flowing Blobs inside modal */}
            <div className="absolute inset-0 bg-[#f8fafc]/40 dark:bg-zinc-950/20 medical-grid pointer-events-none z-0 overflow-hidden">
              <div className="absolute top-10 left-10 w-[450px] h-[450px] bg-blob blob-blue" />
              <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-blob blob-gold" />
              <div className="absolute bottom-10 left-1/3 w-[400px] h-[400px] bg-blob blob-indigo" />
            </div>

            {/* Floating Close Button */}
            <button
              onClick={() => setActiveModal(null)}
              className="fixed top-6 right-6 z-[130] p-3 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-zinc-800 dark:hover:bg-zinc-750 text-slate-700 dark:text-zinc-350 border border-slate-200/50 dark:border-zinc-700/50 shadow-md hover:scale-105 transition-all cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Content */}
            <div className="relative z-10 w-full flex flex-col justify-between min-h-[85vh]">
              <div>
                {activeModal === "services" && (
                  <Services onOpenBooking={openBooking} />
                )}
                {activeModal === "doctor" && (
                  <div className="flex flex-col gap-0">
                    <DoctorProfile onOpenBooking={openBooking} />
                    <Doctor onOpenBooking={openBooking} />
                  </div>
                )}
                {activeModal === "why-choose-us" && (
                  <WhyChooseUs />
                )}
                {activeModal === "facilities" && (
                  <Facilities />
                )}
                {activeModal === "contact" && (
                  <Contact />
                )}
              </div>

              {/* Modal Wards Footer */}
              <div className="mt-8">
                <Footer />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Interactive Widgets */}
      <EmergencyFloating onOpenBooking={openBooking} />
      <AppointmentModal isOpen={isBookingOpen} onClose={closeBooking} />
    </div>
  );
}
