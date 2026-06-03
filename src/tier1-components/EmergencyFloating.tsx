"use client";

import { motion } from "framer-motion";
import { Phone, MessageSquare, Calendar } from "lucide-react";

interface EmergencyFloatingProps {
  onOpenBooking: () => void;
}

export default function EmergencyFloating({ onOpenBooking }: EmergencyFloatingProps) {
  const tabs = [
    {
      id: "whatsapp",
      label: "WhatsApp Chat",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white stroke-none">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.863-9.847.001-2.63-1.023-5.101-2.885-6.963C16.531 1.932 14.06 .907 11.433.907c-5.434 0-9.858 4.414-9.861 9.848-.001 1.942.507 3.834 1.47 5.514L2.017 21.6l5.522-1.446zM17.472 14.382c-.301-.15-1.78-.879-2.057-.98-.277-.101-.478-.15-.678.15-.199.299-.773.979-.949 1.179-.176.2-.351.224-.652.074-1.022-.512-1.795-.877-2.507-1.492-.562-.487-.887-1.077-.997-1.272-.11-.2-.012-.307.088-.407.089-.09.199-.232.299-.348.101-.115.134-.199.199-.332.066-.133.033-.25-.016-.35-.05-.1-.478-1.15-.655-1.579-.173-.414-.347-.358-.478-.365-.123-.006-.264-.007-.406-.007-.142 0-.374.053-.57.266-.197.213-.753.737-.753 1.798 0 1.06.773 2.083.88 2.233.107.15 1.52 2.32 3.682 3.253.514.223.916.356 1.229.456.518.165.989.141 1.361.086.415-.062 1.78-.727 2.031-1.43.252-.703.252-1.306.176-1.43-.076-.124-.277-.199-.578-.35" />
        </svg>
      ),
      color: "bg-[#00C2A8] hover:bg-[#00ab94]",
      href: "https://wa.me/919440275556?text=Hi,%20I'd%20like%20to%20inquire%20about%20an%20appointment.",
      target: "_blank",
    },
    {
      id: "booking",
      label: "Book Appointment",
      icon: <Calendar className="h-5 w-5 text-white" />,
      color: "bg-[#0B1F3A] hover:bg-[#071426]",
      onClick: onOpenBooking,
    },
    {
      id: "emergency",
      label: "Call Emergency: 08554-245678",
      icon: <Phone className="h-5 w-5 text-white animate-pulse" />,
      color: "bg-[#e50914] hover:bg-[#c40811]",
      href: "tel:+918554245678",
    },
  ];

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 items-end font-sans">
      {tabs.map((tab) => {
        const content = (
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className={`flex items-center gap-3 pl-4 pr-1.5 py-1.5 rounded-l-full shadow-xl border-l border-y border-white/10 ${tab.color} text-white transition-all duration-300 group cursor-pointer`}
          >
            {/* Dynamic Sliding Text Label */}
            <span className="max-w-0 overflow-hidden whitespace-nowrap text-xs font-black uppercase tracking-wider transition-all duration-300 group-hover:max-w-[200px] select-none">
              {tab.label}
            </span>
            
            {/* Inner Circle Icon Container (Medcy-inspired circular tab style) */}
            <div className="h-11 w-11 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/25 shadow-[inset_0_2px_4px_rgba(255,255,255,0.15)] shrink-0 transition-transform duration-300 group-hover:scale-105">
              {tab.icon}
            </div>
          </motion.div>
        );

        if (tab.href) {
          return (
            <a
              key={tab.id}
              href={tab.href}
              target={tab.target}
              rel={tab.target ? "noopener noreferrer" : undefined}
              className="outline-none"
            >
              {content}
            </a>
          );
        }

        return (
          <button key={tab.id} onClick={tab.onClick} className="outline-none block">
            {content}
          </button>
        );
      })}
    </div>
  );
}
