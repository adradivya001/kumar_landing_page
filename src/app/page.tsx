"use client";

import { useState } from "react";
import Navbar from "@/tier1-components/Navbar";
import Footer from "@/tier1-components/Footer";
import AppointmentModal from "@/tier1-components/AppointmentModal";
import EmergencyFloating from "@/tier1-components/EmergencyFloating";
import Preloader from "@/tier1-components/Preloader";

// Selected Sections
import Hero from "@/tier2-layouts/HeroLayout";
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

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

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
      <Navbar onOpenBooking={openBooking} />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenBooking={openBooking} />

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

      {/* Global Interactive Widgets */}
      <EmergencyFloating onOpenBooking={openBooking} />
      <AppointmentModal isOpen={isBookingOpen} onClose={closeBooking} />
    </div>
  );
}
