"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Specialist", href: "#doctor" },
    { name: "Departments", href: "#services" },
    { name: "Why Us", href: "#why-choose-us" },
    { name: "Gallery", href: "#facilities" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300 w-full font-sans",
        isScrolled
          ? "glass-nav shadow-md py-3"
          : "bg-white/95 border-b border-gray-100 py-4 dark:bg-zinc-950 dark:border-zinc-800"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-800 text-white transition-transform group-hover:scale-105 shadow-md shadow-navy-800/10 dark:bg-teal-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                {/* Custom medical + orthopedic joint representation */}
                <path d="M12 22V14" />
                <path d="M19 10c0-3.87-3.13-7-7-7S5 6.13 5 10c0 4 7 11 7 11s7-7 7-11z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-extrabold tracking-tight text-navy-800 dark:text-white leading-none">
                KUMAR ORTHO
              </span>
              <span className="text-[10px] font-semibold text-teal-600 tracking-wider mt-0.5 leading-none">
                & MULTI-SPECIALITY HOSPITAL
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-gray-600 transition-colors hover:text-navy-800 dark:text-zinc-300 dark:hover:text-teal-400"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+918554245678"
              className="flex items-center gap-2 rounded-lg bg-red-50 px-3.5 py-2 text-xs font-bold text-red-600 transition-all hover:bg-red-100 hover:scale-102 active:scale-98"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>EMERGENCY: 08554-245678</span>
            </a>
            <button
              onClick={onOpenBooking}
              className="flex items-center gap-2 rounded-lg bg-navy-800 px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-navy-800/10 hover:bg-navy-900 dark:bg-teal-600 dark:hover:bg-teal-700 transition-all hover:scale-102 active:scale-98"
            >
              <Calendar className="h-3.5 w-3.5" />
              <span>BOOK APPOINTMENT</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-1.5 text-gray-600 transition-colors hover:bg-gray-100 lg:hidden dark:text-zinc-300 dark:hover:bg-zinc-800"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 border-b border-gray-100 bg-white/98 px-6 py-6 shadow-xl dark:bg-zinc-950 dark:border-zinc-800">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-semibold text-gray-600 transition-colors hover:text-navy-800 dark:text-zinc-300 dark:hover:text-teal-400 py-1"
              >
                {link.name}
              </a>
            ))}
            
            <div className="border-t border-gray-100 dark:border-zinc-800 pt-4 flex flex-col gap-3 mt-2">
              <a
                href="tel:+918554245678"
                className="flex items-center justify-center gap-2 rounded-lg bg-red-600 py-3 text-sm font-bold text-white shadow-sm hover:bg-red-700"
              >
                <Phone className="h-4 w-4" />
                <span>Emergency: 08554-245678</span>
              </a>
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenBooking();
                }}
                className="flex items-center justify-center gap-2 rounded-lg bg-navy-800 py-3 text-sm font-bold text-white shadow-sm hover:bg-navy-900 dark:bg-teal-600 dark:hover:bg-teal-700"
              >
                <Calendar className="h-4 w-4" />
                <span>Book Appointment</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
