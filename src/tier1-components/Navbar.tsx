"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, Calendar, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, useScroll, useSpring } from "framer-motion";
import content from "@/tier3-content/content.json";

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Framer motion scroll progress indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = content.layout.navbar.links;

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-transparent border-none pointer-events-none">
      {/* Dynamic Top Blocker Shield: Uses backdrop blur to soften scrolling text without changing navbar shape */}
      <div
        className={cn(
          "absolute top-0 left-0 right-0 h-24 sm:h-28 transition-all duration-350 z-0 pointer-events-none",
          isScrolled
            ? "backdrop-blur-[6px] opacity-100"
            : "opacity-0"
        )}
      />

      <div className="w-full px-4 pt-4 sm:pt-6 relative z-10">
        {/* Floating Pill Navbar Wrapper */}
        <div
          className={cn(
            "mx-auto w-full max-w-[1440px] rounded-full bg-[#0a0a0c]/90 text-white border border-zinc-800/80 shadow-2xl backdrop-blur-md transition-all duration-300 relative overflow-hidden pointer-events-auto",
            isScrolled ? "py-2 sm:py-2.5 px-5 sm:px-6 shadow-zinc-950/50" : "py-3 sm:py-4 px-6 sm:px-8"
          )}
        >
          <div className="flex items-center justify-between">
            
            {/* Combined Logo Capsule */}
            <a href="#home" className="flex items-center group">
              <img
                src="/kumar-hospitals.png"
                alt="Kumar Hospital Ortho & Multispeciality"
                className="h-20 w-auto object-contain hover:scale-[1.03] transition-transform duration-300"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs font-bold uppercase tracking-widest text-zinc-300 hover:text-cyan-400 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all hover:after:w-full"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${content.layout.navbar.actions.emergencyPhone}`}
                className="flex items-center gap-2 rounded-full border border-red-500/25 bg-red-950/20 px-4 py-2 text-xs font-bold text-red-400 transition-all hover:bg-red-950/40 hover:scale-102 active:scale-98"
              >
                <Phone className="h-3.5 w-3.5" />
                <span>{content.layout.navbar.actions.emergencyText}</span>
              </a>
              
              <button
                onClick={onOpenBooking}
                className="flex items-center gap-2 rounded-full bg-cyan-600 hover:bg-cyan-700 px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-cyan-600/10 hover:scale-102 active:scale-98 transition-all group"
              >
                <span>{content.layout.navbar.actions.bookAppointmentText}</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-full p-2 text-zinc-300 transition-colors hover:bg-zinc-800 lg:hidden"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>

          </div>

          {/* Floating Progress Line on the Bottom Border of the Pill */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-teal-500 to-teal-300 origin-[0%]"
            style={{ scaleX }}
          />
        </div>
      </div>

      {/* Mobile Drawer Menu - Pill Style */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-4 right-4 mt-3 rounded-[32px] border border-zinc-800 bg-[#0a0a0c]/95 px-6 py-6 shadow-2xl backdrop-blur-lg pointer-events-auto">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-bold uppercase tracking-wider text-zinc-300 hover:text-cyan-400 transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
            
            <div className="border-t border-zinc-800 pt-4 flex flex-col gap-3 mt-2">
              <a
                href={`tel:${content.layout.navbar.actions.emergencyPhone}`}
                className="flex items-center justify-center gap-2 rounded-full bg-red-655 py-3 text-xs font-bold text-white shadow-sm hover:bg-red-700"
              >
                <Phone className="h-4 w-4" />
                <span>{content.layout.navbar.mobileActions.emergencyText}</span>
              </a>
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenBooking();
                }}
                className="flex items-center justify-center gap-2 rounded-full bg-cyan-600 py-3 text-xs font-bold text-white shadow-sm hover:bg-cyan-700"
              >
                <Calendar className="h-4 w-4" />
                <span>{content.layout.navbar.mobileActions.bookAppointmentText}</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
