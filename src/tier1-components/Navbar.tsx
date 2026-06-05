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

  const navLinks = content.layout.navbar.links;
  const isLinkActive = (href: string) => activeSection === href.replace("#", "");

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 pointer-events-auto",
          isScrolled
            ? "bg-[#F8FAFC]/95 dark:bg-zinc-950/95 border-b border-slate-200/50 dark:border-zinc-850/50 shadow-md py-3"
            : "bg-transparent py-4"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="Kumar Hospital Logo"
              className={cn(
                "object-contain flex-shrink-0 transition-all duration-300",
                isScrolled ? "h-10 w-10" : "h-12 w-12"
              )}
            />
            <img
              src="/logo-text.png"
              alt="Kumar Hospital"
              className={cn(
                "w-auto object-contain flex-shrink-0 transition-all duration-300",
                isScrolled ? "h-8" : "h-10"
              )}
            />
          </a>

          {/* Right/Center navigation links pill */}
          <nav
            className="hidden lg:flex items-center gap-1.5 px-6 py-2 rounded-full border border-slate-700/30 bg-[#111f3a] shadow-xl"
          >
            {navLinks.map((link) => {
              const active = isLinkActive(link.href);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "relative px-4.5 py-2 rounded-full text-[11px] font-extrabold uppercase tracking-wider transition-all duration-200 border",
                    active
                      ? "text-white border-[#c8972a] bg-white/5"
                      : "text-zinc-300 hover:text-white border-transparent hover:bg-white/5"
                  )}
                >
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Mobile hamburger menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full bg-[#111f3a] border border-slate-700/50 text-zinc-300 shadow-md"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
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
          className="fixed top-[72px] left-4 right-4 z-[99] rounded-2xl border border-zinc-800 bg-[#0B1F3A]/98 px-5 py-5 shadow-2xl backdrop-blur-xl"
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
                      ? "text-[#e8b84b] border-[#c8972a] bg-white/5"
                      : "text-zinc-300 hover:text-white hover:bg-white/5 border-transparent"
                  )}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>
          <div className="mt-4 pt-4 border-t border-zinc-700/50 flex flex-col gap-2">
            <a
              href={`tel:${content.layout.navbar.actions.emergencyPhone}`}
              className="flex items-center justify-center gap-2 rounded-xl bg-red-700/80 py-2.5 text-xs font-bold text-white hover:bg-red-700 transition-colors"
            >
              <Phone className="h-3.5 w-3.5" />
              {content.layout.navbar.mobileActions.emergencyText}
            </a>
            <button
              onClick={() => { setIsOpen(false); onOpenBooking(); }}
              className="flex items-center justify-center gap-2 rounded-xl bg-cyan-600 py-2.5 text-xs font-bold text-white hover:bg-cyan-700 transition-colors"
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
