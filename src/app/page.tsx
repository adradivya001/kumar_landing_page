"use client";

import { useState } from "react";
import Navbar from "@/tier1-components/Navbar";
import Footer from "@/tier1-components/Footer";
import AppointmentModal from "@/tier1-components/AppointmentModal";
import EmergencyFloating from "@/tier1-components/EmergencyFloating";

// Sections
import Hero from "@/tier2-layouts/HeroLayout";
import About from "@/tier2-layouts/AboutLayout";
import Doctor from "@/tier2-layouts/DoctorLayout";
import Services from "@/tier2-layouts/ServicesLayout";
import WhyChooseUs from "@/tier2-layouts/WhyChooseUsLayout";
import Facilities from "@/tier2-layouts/FacilitiesLayout";
import Testimonials from "@/tier2-layouts/TestimonialsLayout";
import EmergencyCallout from "@/tier2-layouts/EmergencyCalloutLayout";
import FAQ from "@/tier2-layouts/FAQLayout";
import InsurancePartners from "@/tier2-layouts/InsurancePartnersLayout";
import Blog from "@/tier2-layouts/BlogLayout";
import Contact from "@/tier2-layouts/ContactLayout";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Navigation bar */}
      <Navbar onOpenBooking={openBooking} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenBooking={openBooking} />

        {/* About Section */}
        <About />

        {/* Services & Departments */}
        <Services onOpenBooking={openBooking} />

        {/* Lead Specialist Dr. Kumar */}
        <Doctor onOpenBooking={openBooking} />

        {/* Why Choose Us & Statistics */}
        <WhyChooseUs />

        {/* Facilities & Diagnostics Gallery */}
        <Facilities />

        {/* Patient Review Testimonials */}
        <Testimonials />

        {/* Direct Emergency Trauma Callout */}
        <EmergencyCallout />

        {/* Insurance Partners Panel */}
        <InsurancePartners />

        {/* Health Tips Blog Grid */}
        <Blog />

        {/* FAQs */}
        <FAQ />

        {/* Contact Form & Google Map Location */}
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
