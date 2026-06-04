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
      {/* ── Main Navbar ── */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] transition-all duration-300",
          isScrolled
            ? "bg-[#F8FAFC]/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-slate-200/50 dark:border-zinc-850/50 shadow-sm py-2 pointer-events-auto"
            : "bg-transparent py-4 pointer-events-none"
        )}
      >
        <div className="mx-auto max-w-[92rem] px-4 sm:px-6 lg:px-12 flex items-center justify-between">
          {/* Left spacer to keep center pill centered now that logo is removed */}
          <div className="hidden lg:block w-[140px] flex-shrink-0" />

          {/* Center pill — nav links only */}
          <nav
            className={cn(
              "pointer-events-auto hidden lg:flex items-center gap-3 px-10 py-2.5 rounded-full border transition-all duration-300",
              isScrolled
                ? "bg-[#0B1F3A] border-zinc-700 shadow-xl backdrop-blur-xl"
                : "bg-[#0B1F3A]/95 border-zinc-700/70 backdrop-blur-md"
            )}
          >
            {navLinks.map((link) => {
              const active = isLinkActive(link.href);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "relative px-3.5 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-widest transition-all duration-200",
                    active
                      ? "text-white bg-white/10"
                      : "text-zinc-200 hover:text-white hover:bg-white/5"
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill-active"
                      className="absolute inset-0 rounded-full bg-cyan-500/15 border border-cyan-500/30"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="pointer-events-auto flex items-center gap-2">
            {/* Book CTA */}
            <button
              onClick={onOpenBooking}
              className="hidden lg:flex items-center gap-1.5 bg-cyan-500 hover:bg-cyan-600 text-white text-[11px] font-bold uppercase tracking-wider px-5 py-2.5 rounded-full shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.03] active:scale-[0.97] animate-glow-cyan"
            >
              <Calendar className="h-3.5 w-3.5" />
              <span>Book</span>
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-full bg-[#0d0d10]/80 border border-zinc-700/50 text-zinc-300 backdrop-blur-md"
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
          className="fixed top-[68px] left-4 right-4 z-[99] rounded-2xl border border-zinc-800 bg-[#0a0a0c]/96 px-5 py-5 shadow-2xl backdrop-blur-xl"
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
                    "px-3 py-2.5 rounded-xl text-sm font-semibold uppercase tracking-wider transition-colors",
                    active
                      ? "text-cyan-400 bg-cyan-950/40"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-800/60"
                  )}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>
          <div className="mt-4 pt-4 border-t border-zinc-800 flex flex-col gap-2">
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
