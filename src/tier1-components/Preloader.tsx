"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Activity } from "lucide-react";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
      setTimeout(onComplete, 500); // Wait for fade out
    }, 1300);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isAnimating ? 1 : 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-navy-900 pointer-events-none"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative flex flex-col items-center"
      >
        {/* Pulsing Medical Icon and Brand Text */}
        <motion.div
          animate={{
            scale: [1, 1.06, 1],
            filter: [
              "drop-shadow(0px 0px 0px rgba(20,184,166,0))", 
              "drop-shadow(0px 10px 25px rgba(20,184,166,0.3))", 
              "drop-shadow(0px 0px 0px rgba(20,184,166,0))"
            ]
          }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
            repeat: Infinity
          }}
          className="flex flex-col items-center gap-4"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-500/10 text-teal-400 border border-teal-500/20">
            <Activity className="h-9 w-9 stroke-[2.5]" />
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-black tracking-widest text-white">KUMAR ORTHO</h1>
            <p className="text-[10px] tracking-widest text-teal-300 font-bold uppercase mt-1">Multi-Speciality Hospital</p>
          </div>
        </motion.div>

        {/* Sleek Progress Loading Bar */}
        <div className="w-[180px] h-[2px] bg-white/10 mt-8 rounded-full overflow-hidden">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 0.9, ease: "easeInOut", repeat: Infinity }}
            className="h-full w-1/2 bg-teal-500 rounded-full"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
