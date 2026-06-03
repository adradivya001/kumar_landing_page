"use client";

import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Clock, ShieldCheck, Activity, Users, Award, Stethoscope, HeartHandshake } from "lucide-react";

interface CounterProps {
  value: number;
  suffix?: string;
}

function Counter({ value, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 1.8,
        ease: "easeOut",
        onUpdate: (latest) => setCount(Math.floor(latest)),
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function WhyChooseUs() {
  const stats = [
    { target: 50000, suffix: "+", label: "Patients Served", desc: "Across Anantapur & Rayalaseema" },
    { target: 20, suffix: "+", label: "Specialists", desc: "Dedicated clinical practitioners" },
    { target: 15, suffix: "+", label: "Years of Care", desc: "Upholding medical standards since 2011" },
    { target: 24, suffix: "/7", label: "Emergency Support", desc: "Rapid trauma surgical crew" },
  ];

  const reasons = [
    {
      icon: <Stethoscope className="h-6 w-6 text-blue-600" />,
      title: "Experienced Specialists",
      desc: "Consultations and procedures directed by veteran practitioners holding national certifications and extensive clinical tenures.",
    },
    {
      icon: <Activity className="h-6 w-6 text-blue-600" />,
      title: "Advanced Medical Technology",
      desc: "Equipped with sterile laminar airflow operation theatres, C-arm imaging, and modern diagnostic systems.",
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: "24/7 Emergency Care",
      desc: "Immediate admission, triaging, and critical care units active round-the-clock to manage critical accidents and trauma cases.",
    },
    {
      icon: <HeartHandshake className="h-6 w-6 text-blue-600" />,
      title: "Patient-Centered Treatment",
      desc: "Empathetic communication and clinical pathways structured dynamically around individual patient recovery and comfort.",
    },
  ];

  return (
    <section id="why-choose-us" className="pt-10 pb-4 bg-[#0B1F3A] text-white font-sans relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-navy-800 px-3 py-1.5 rounded-md border border-navy-700">
            Why Kumar Hospital
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight">
            Why Families Across Anantapur Trust Kumar Hospital
          </h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto mt-4 rounded-full" />
          <p className="text-gray-400 mt-4 text-sm sm:text-base">
            Upholding uncompromising medical ethics, leading infrastructure, and a deep commitment to restorative care.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-20">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-navy-800/40 border border-navy-800/80 p-6 rounded-2xl text-center glow-navy backdrop-blur-md"
            >
              <span className="block text-3xl sm:text-4xl font-black text-blue-400">
                <Counter value={stat.target} suffix={stat.suffix} />
              </span>
              <span className="block text-sm font-bold text-white mt-1.5">
                {stat.label}
              </span>
              <span className="block text-xs text-gray-400 mt-0.5">
                {stat.desc}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-blue-500/30 hover:bg-white/10 transition-all duration-300 group backdrop-blur-md"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-blue-400 group-hover:scale-105 transition-transform">
                {reason.icon}
              </div>
              <h4 className="text-lg font-bold text-white mb-2">
                {reason.title}
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
