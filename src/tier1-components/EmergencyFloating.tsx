"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageSquare, AlertTriangle, X, HelpCircle } from "lucide-react";

interface EmergencyFloatingProps {
  onOpenBooking: () => void;
}

export default function EmergencyFloating({ onOpenBooking }: EmergencyFloatingProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 font-sans">
      <AnimatePresence>
        {isOpen && (
          <div className="flex flex-col items-end gap-2.5">
            {/* WhatsApp Chat Option */}
            <motion.a
              initial={{ opacity: 0, y: 15, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.9 }}
              href="https://wa.me/919440275556?text=Hi,%20I'd%20like%20to%20inquire%20about%20an%20appointment%20or%20medical%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 rounded-full bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition-transform hover:bg-emerald-600 active:scale-95"
            >
              <MessageSquare className="h-4 w-4" />
              <span>WhatsApp Chat</span>
            </motion.a>

            {/* Quick Booking Option */}
            <motion.button
              initial={{ opacity: 0, y: 15, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.9 }}
              onClick={() => {
                setIsOpen(false);
                onOpenBooking();
              }}
              className="flex items-center gap-2.5 rounded-full bg-navy-800 px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition-transform hover:bg-navy-900 dark:bg-zinc-800 dark:hover:bg-zinc-700 active:scale-95"
            >
              <HelpCircle className="h-4 w-4 text-teal-400" />
              <span>Book Appointment</span>
            </motion.button>

            {/* Direct Call Option */}
            <motion.a
              initial={{ opacity: 0, y: 15, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.9 }}
              href="tel:+918554245678"
              className="flex items-center gap-2.5 rounded-full bg-red-600 px-4 py-2.5 text-sm font-bold text-white shadow-lg transition-transform hover:bg-red-700 active:scale-95"
            >
              <Phone className="h-4 w-4 animate-pulse" />
              <span>Call Emergency: 08554-245678</span>
            </motion.a>
          </div>
        )}
      </AnimatePresence>

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative flex h-14 w-14 items-center justify-center rounded-full text-white shadow-xl transition-all duration-300 active:scale-95 ${
          isOpen
            ? "bg-gray-800 dark:bg-zinc-700 rotate-90"
            : "bg-red-600 hover:bg-red-700 hover:scale-105"
        }`}
        aria-label="Toggle contact menu"
      >
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-red-600/30 animate-ping" />
        )}
        
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <AlertTriangle className="h-6 w-6" />
        )}
      </button>
    </div>
  );
}
