"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import content from "@/tier3-content/content.json";

interface NavbarProps {
  onOpenBooking: () => void;
}

const SECTION_IDS = ["home", "services", "doctor", "why-choose-us", "facilities", "booking-section", "faq", "contact"];

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Specialities", href: "#services" },
    { name: "Doctors", href: "#doctor" },
    { name: "Why Us", href: "#why-choose-us" },
    { name: "Facilities", href: "#facilities" },
    { name: "Contact", href: "#contact" },
  ];

  const isLinkActive = (href: string) => activeSection === href.replace("#", "");

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 pointer-events-auto glass-header",
          isScrolled ? "py-0.5 shadow-md" : "py-1.5"
        )}
      >
        <div className={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-300", isScrolled ? "h-[64px]" : "h-[80px]")}>

          {/* Logo link */}
          <a href="#home" className="flex items-center gap-0 flex-shrink-0 mt-1">
            <img
              src="/logo.png"
              alt="Kumar Hospital Logo"
              className={cn("w-auto object-contain transition-all duration-300", isScrolled ? "h-[50px] -ml-[15px] translate-y-0" : "h-[70px] -ml-[20px] translate-y-[-2px]")}
            />

            <img
              src="/logo-text.png"
              alt="Kumar Hospital"
              className={cn("w-auto object-contain transition-all duration-300", isScrolled ? "h-[95px] -ml-[20px] translate-y-[3px]" : "h-[140px] -ml-[30px] translate-y-[8px]")}
            />
          </a>

          {/* Center-aligned navigation links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const active = isLinkActive(link.href);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "relative py-1.5 text-[15px] font-semibold tracking-wide transition-all duration-200 font-sans",
                    active
                      ? "text-[#0097A7] dark:text-cyan-400 font-bold"
                      : "text-slate-600 dark:text-zinc-300 hover:text-[#0097A7] dark:hover:text-cyan-400"
                  )}
                >
                  <span className="relative z-10">{link.name}</span>
                  {active && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#0097A7] dark:bg-cyan-400 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right-aligned actions wrapper (Book button & Hamburger) */}
          <div className="flex items-center flex-shrink-0 gap-3">
            {/* Book Appointment CTA (Desktop only) */}
            <button
              onClick={onOpenBooking}
              className="hidden lg:flex items-center gap-2 bg-[#0097A7] hover:bg-[#00BCD4] text-white text-[13px] font-bold uppercase tracking-wider px-6 py-3 rounded-full shadow-lg shadow-[#0097A7]/15 hover:shadow-[#00BCD4]/20 transition-all duration-300 hover:scale-[1.03] active:scale-95 cursor-pointer border border-[#0097A7]/10"
            >
              <Calendar className="h-4 w-4 stroke-[2]" />
              <span>Book Appointment</span>
            </button>

            {/* Mobile hamburger button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-zinc-800 dark:hover:bg-zinc-750 text-slate-700 dark:text-zinc-350 border border-slate-200/50 dark:border-zinc-700/50 shadow-sm transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Drawer ── */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className={cn(
            "fixed left-4 right-4 z-[99] rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-[#0B1F3A]/98 px-5 py-5 shadow-2xl backdrop-blur-xl transition-all duration-300",
            isScrolled ? "top-[58px]" : "top-[72px]"
          )}
        >
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const active = isLinkActive(link.href);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors border",
                    active
                      ? "text-[#0097A7] border-[#0097A7]/30 bg-[#0097A7]/5"
                      : "text-slate-600 dark:text-zinc-300 hover:text-white hover:bg-white/5 border-transparent"
                  )}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>
          <div className="mt-4 pt-4 border-t border-slate-200 dark:border-zinc-700/50 flex flex-col gap-2">
            <a
              href={`tel:${content.layout.navbar.actions.emergencyPhone}`}
              className="flex items-center justify-center gap-2 rounded-xl bg-red-600 hover:bg-red-700 py-2.5 text-xs font-bold text-white transition-colors"
            >
              <Phone className="h-3.5 w-3.5" />
              {content.layout.navbar.mobileActions.emergencyText}
            </a>
            <button
              onClick={() => { setIsOpen(false); onOpenBooking(); }}
              className="flex items-center justify-center gap-2 rounded-xl bg-[#0097A7] hover:bg-[#00BCD4] py-2.5 text-xs font-bold text-white transition-colors"
            >
              <Calendar className="h-3.5 w-3.5" />
              {content.layout.navbar.mobileActions.bookAppointmentText}
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
}
