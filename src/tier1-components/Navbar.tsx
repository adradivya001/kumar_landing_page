"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, Calendar, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, useScroll, useSpring } from "framer-motion";
import content from "@/tier3-content/content.json";

interface NavbarProps {
  onOpenBooking: () => void;
}

const SECTION_IDS = ["home", "services", "doctor", "why-choose-us", "facilities", "booking-section", "faq", "contact"];

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Scroll detection for glassmorphism
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 15);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver — active section highlight
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const navLinks = content.layout.navbar.links;

  // Map link href (#services, #doctor...) to section id
  const isLinkActive = (href: string) => {
    const id = href.replace("#", "");
    return activeSection === id;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-transparent border-none pointer-events-none">
      {/* Blur shield when scrolled */}
      <div
        className={cn(
          "absolute top-0 left-0 right-0 h-24 transition-all duration-350 z-0 pointer-events-none",
          isScrolled ? "backdrop-blur-[6px] opacity-100" : "opacity-0"
        )}
      />

      <div className="w-full px-3 pt-3 sm:pt-4 relative z-10">
        {/* Floating Pill Navbar */}
        <div
          className={cn(
            "mx-auto w-full max-w-[1440px] rounded-[40px] bg-[#0a0a0c]/90 text-white border border-zinc-800/80 shadow-2xl backdrop-blur-md transition-all duration-300 relative overflow-hidden pointer-events-auto",
            isScrolled ? "py-1.5 px-5 sm:px-8" : "py-2 px-5 sm:px-8"
          )}
        >
          {/* 3-col layout: logo | nav | actions */}
          <div className="flex items-center justify-between gap-4">

            {/* ── Logo: 220px slot, image sized by width ── */}
            <a
              href="#home"
              className="flex-shrink-0 flex items-center group"
              style={{ width: "170px" }}
            >
              <img
                src="/kumar-hospitals.png"
                alt="Kumar Hospital Ortho & Multispeciality"
                style={{
                  width: "150px",
                  height: "auto",
                  display: "block",
                  objectFit: "contain",
                }}
                className="hover:scale-[1.03] transition-transform duration-300 drop-shadow-sm"
              />
            </a>

            {/* ── Desktop Nav Links (centered) ── */}
            <nav className="hidden lg:flex items-center justify-center gap-6">
              {navLinks.map((link) => {
                const active = isLinkActive(link.href);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "relative text-xs font-bold uppercase tracking-widest transition-all duration-300",
                      "after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:transition-all after:duration-300 after:rounded-full",
                      active
                        ? "text-cyan-400 after:w-full after:bg-cyan-400"
                        : "text-zinc-300 hover:text-cyan-400 after:w-0 after:bg-cyan-400 hover:after:w-full"
                    )}
                  >
                    {link.name}
                    {active && (
                      <motion.span
                        layoutId="active-nav-dot"
                        className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cyan-400"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* ── Desktop Actions (right) ── */}
            <div className="flex items-center gap-3">
              {/* Emergency — pulsing ring (desktop only) */}
              <a
                href={`tel:${content.layout.navbar.actions.emergencyPhone}`}
                className="hidden lg:flex relative items-center gap-2 rounded-full border border-red-500/30 bg-red-950/25 px-4 py-2 text-xs font-bold text-red-400 transition-all hover:bg-red-950/50 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="absolute inset-0 rounded-full border border-red-500/40 animate-ping opacity-60" />
                <Phone className="h-3.5 w-3.5" />
                <span>{content.layout.navbar.actions.emergencyText}</span>
              </a>

              {/* Book Appointment */}
              <button
                onClick={onOpenBooking}
                className="hidden lg:flex shimmer-card items-center gap-2 rounded-full bg-cyan-600 hover:bg-cyan-700 px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-cyan-600/15 hover:scale-[1.02] active:scale-[0.98] transition-all group"
              >
                <span>{content.layout.navbar.actions.bookAppointmentText}</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Mobile Toggle */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="rounded-full p-2 text-zinc-300 transition-colors hover:bg-zinc-800 lg:hidden"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>

          </div>

          {/* Scroll progress line */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-teal-500 to-cyan-400 origin-[0%]"
            style={{ scaleX }}
          />
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="lg:hidden absolute top-full left-4 right-4 mt-3 rounded-[32px] border border-zinc-800 bg-[#0a0a0c]/95 px-6 py-6 shadow-2xl backdrop-blur-lg pointer-events-auto"
        >
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const active = isLinkActive(link.href);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-colors py-1",
                    active ? "text-cyan-400" : "text-zinc-300 hover:text-cyan-400"
                  )}
                >
                  {active && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
                  {link.name}
                </a>
              );
            })}

            <div className="border-t border-zinc-800 pt-4 flex flex-col gap-3 mt-2">
              <a
                href={`tel:${content.layout.navbar.actions.emergencyPhone}`}
                className="flex items-center justify-center gap-2 rounded-full bg-red-700 py-3 text-xs font-bold text-white shadow-sm hover:bg-red-800 transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>{content.layout.navbar.mobileActions.emergencyText}</span>
              </a>
              <button
                onClick={() => { setIsOpen(false); onOpenBooking(); }}
                className="flex items-center justify-center gap-2 rounded-full bg-cyan-600 py-3 text-xs font-bold text-white shadow-sm hover:bg-cyan-700 transition-colors"
              >
                <Calendar className="h-4 w-4" />
                <span>{content.layout.navbar.mobileActions.bookAppointmentText}</span>
              </button>
            </div>
          </nav>
        </motion.div>
      )}
    </header>
  );
}
