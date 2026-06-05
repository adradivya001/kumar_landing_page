"use client";

import { motion } from "framer-motion";
import { MessageSquare, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F5FBFC] dark:bg-[#090d16] text-slate-600 dark:text-zinc-400 font-sans border-t border-slate-200/80 dark:border-zinc-800/80 relative overflow-hidden py-1">
      {/* Subtle background glow effect */}
      <div className="absolute top-0 left-1/4 w-[250px] h-[250px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-1">

        {/* Main Content Row */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-1 lg:gap-2">

          <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8 flex-grow">
            {/* Hospital Logo & Title */}
            <a href="#home" className="flex items-center gap-0 flex-shrink-0">
              <img
                src="/logo.png"
                alt="Kumar Hospital Logo"
                className="h-[70px] w-auto object-contain flex-shrink-0"
              />
              <img
                src="/logo-text.png"
                alt="Kumar Hospital"
                className="h-[70px] w-auto object-contain -ml-3"
              />
            </a>

            <div className="flex flex-wrap items-center gap-x-16 gap-y-3 text-sm sm:text-base text-slate-800 dark:text-white font-semibold lg:ml-16">
              <span className="flex items-center gap-1.5">
                <span>📍</span> Vidyuth Nagar, Anantapur
              </span>

              <span className="text-slate-300 dark:text-zinc-700 hidden md:inline px-3">|</span>

              <a href="tel:08554245678" className="flex items-center gap-1.5 hover:text-[#0097A7] dark:hover:text-cyan-400 transition-colors">
                <span>📞</span> 08554-245678
              </a>

              <span className="text-slate-300 dark:text-zinc-700 hidden md:inline px-3">|</span>

              <a href="tel:+919440275556" className="flex items-center gap-1.5 hover:text-[#0097A7] dark:hover:text-cyan-400 transition-colors">
                <span>📱</span> +91 94402 75556
              </a>
            </div>
          </div>

          {/* Compact Action Buttons */}
          <div className="flex items-center gap-2">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://wa.me/919440275556?text=Hello%20Kumar%20Hospital,%20I%20want%2520to%2520schedule%2520an%2520appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[10px] sm:text-[11px] py-1.5 px-3.5 shadow-sm transition-colors whitespace-nowrap"
            >
              <svg viewBox="0 0 24 24" className="h-3 w-3 fill-white stroke-none">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.863-9.847.001-2.63-1.023-5.101-2.885-6.963C16.531 1.932 14.06 .907 11.433.907c-5.434 0-9.858 4.414-9.861 9.848-.001 1.942.507 3.834 1.47 5.514L2.017 21.6l5.522-1.446zM17.472 14.382c-.301-.15-1.78-.879-2.057-.98-.277-.101-.478-.15-.678.15-.199.299-.773.979-.949 1.179-.176.2-.351.224-.652.074-1.022-.512-1.795-.877-2.507-1.492-.562-.487-.887-1.077-.997-1.272-.11-.2-.012-.307.088-.407.089-.09.199-.232.299-.348.101-.115.134-.199.199-.332.066-.133.033-.25-.016-.35-.05-.1-.478-1.15-.655-1.579-.173-.414-.347-.358-.478-.365-.123-.006-.264-.007-.406-.007-.142 0-.374.053-.57.266-.197.213-.753.737-.753 1.798 0 1.06.773 2.083.88 2.233.107.15 1.52 2.32 3.682 3.253.514.223.916.356 1.229.456.518.165.989.141 1.361.086.415-.062 1.78-.727 2.031-1.43.252-.703.252-1.306.176-1.43-.076-.124-.277-.199-.578-.35" />
              </svg>
              <span>WhatsApp</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="tel:+919440275556"
              className="inline-flex items-center gap-1.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-[10px] sm:text-[11px] py-1.5 px-3.5 shadow-sm transition-colors whitespace-nowrap"
            >
              <Phone className="h-3 w-3" />
              <span>Call Now</span>
            </motion.a>
          </div>

        </div>

        {/* Minimal Bottom Bar */}
        <div className="border-t border-slate-200/80 dark:border-zinc-800/40 pt-1 flex items-center justify-between text-[10px] text-slate-400 dark:text-zinc-500 font-medium">
          <p>© Kumar Hospital, Anantapur. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
}
