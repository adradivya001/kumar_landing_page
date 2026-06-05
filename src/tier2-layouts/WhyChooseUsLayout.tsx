"use client";

import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Clock, Activity, Stethoscope, HeartHandshake, CheckCircle } from "lucide-react";

interface CounterProps {
  value: number;
  suffix?: string;
}

function Counter({ value, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 1.8,
        ease: "easeOut",
        onUpdate: (latest) => setCount(Math.floor(latest)),
        onComplete: () => setDone(true),
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className={`transition-transform duration-300 ${done ? "scale-110" : "scale-100"}`}
      style={{ display: "inline-block" }}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

// Floating star/dot generator
const STARS = Array.from({ length: 30 }, (_, i) => ({
  x: `${(i * 31 + 7) % 100}%`,
  y: `${(i * 47 + 13) % 100}%`,
  size: i % 3 === 0 ? 2 : 1.5,
  delay: (i * 0.15) % 4,
  duration: 3 + (i % 3),
}));


export default function WhyChooseUs() {

  const stats = [
    { target: 50000, suffix: "+", label: "Patients Served", desc: "Across Anantapur & Rayalaseema", icon: "👥" },
    { target: 6, suffix: "+", label: "Specialists", desc: "Dedicated clinical practitioners", icon: "🩺" },
    { target: 5, suffix: "+", label: "Years of Care", desc: "Upholding medical standards since 2021", icon: "🏆" },
    { target: 24, suffix: "/7", label: "Emergency Support", desc: "Rapid trauma surgical crew", icon: "🚨" },
  ];

  const reasons = [
    {
      icon: <Stethoscope className="h-6 w-6 text-blue-600" />,
      title: "Experienced Specialists",
      desc: "Consultations directed by veteran practitioners with national certifications and extensive clinical tenures.",
      color: "from-blue-100 to-white",
    },
    {
      icon: <Activity className="h-6 w-6 text-teal-600" />,
      title: "Advanced Medical Technology",
      desc: "Equipped with sterile laminar airflow OTs, C-arm imaging, and modern diagnostic systems.",
      color: "from-teal-100 to-white",
    },
    {
      icon: <Clock className="h-6 w-6 text-amber-600" />,
      title: "24/7 Emergency Care",
      desc: "Immediate admission, triaging, and critical care active round-the-clock for accidents and trauma.",
      color: "from-amber-100 to-white",
    },
    {
      icon: <HeartHandshake className="h-6 w-6 text-pink-600" />,
      title: "Patient-Centered Treatment",
      desc: "Empathetic clinical pathways structured dynamically around individual recovery and comfort.",
      color: "from-pink-100 to-white",
    },
  ];

  return (
    <section id="why-choose-us" className="pt-16 pb-10 bg-slate-50 text-slate-900 font-sans relative overflow-hidden">

      {/* Animated starfield / floating dots */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {STARS.map((star, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-blue-500/10"
            style={{
              left: star.x,
              top: star.y,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animation: `float ${star.duration}s ease-in-out ${star.delay}s infinite`,
            }}
          />
        ))}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] rounded-full bg-teal-500/10 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-[1920px] px-2 sm:px-4 lg:px-6 xl:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1.5 rounded-md border border-blue-200 inline-flex items-center gap-1.5">
            <CheckCircle className="h-3 w-3" />
            Why Kumar Hospital
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight scan-line-container">
            Why Families Across Anantapur Trust Kumar Hospital
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto mt-4 rounded-full" />
          <p className="text-slate-600 mt-4 text-sm sm:text-base">
            Upholding uncompromising medical ethics, leading infrastructure, and a deep commitment to restorative care.
          </p>
        </motion.div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 w-full mb-20">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative bg-white border border-slate-200 p-6 rounded-2xl text-center overflow-hidden group hover:border-blue-400 hover:shadow-lg transition-all duration-500 cursor-default"
            >
              {/* Radial glow that expands on in-view */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 + 0.3 }}
                className="absolute inset-0 bg-gradient-radial from-blue-50 via-transparent to-transparent pointer-events-none"
              />

              <div className="text-3xl mb-2">{stat.icon}</div>
              <span className="block text-3xl sm:text-4xl font-black text-blue-600 group-hover:text-blue-700 transition-colors">
                <Counter value={stat.target} suffix={stat.suffix} />
              </span>
              <span className="block text-sm font-bold text-slate-900 mt-1.5">{stat.label}</span>
              <span className="block text-[11px] text-slate-500 mt-0.5">{stat.desc}</span>
            </motion.div>
          ))}
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-20">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: idx * 0.08 }}
              className={`relative bg-white border border-slate-200 p-6 rounded-2xl hover:border-blue-300 hover:shadow-xl transition-all duration-400 group overflow-hidden`}
            >
              {/* Colored gradient bg on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

              {/* Left accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-gradient-to-b from-blue-500 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

              <div className="relative z-10 flex gap-4 items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {reason.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">{reason.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{reason.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>



      </div>
    </section>
  );
}
