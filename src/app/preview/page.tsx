"use client";

import React, { useEffect, useState } from "react";

export default function PreviewPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a1628] text-white font-sans overflow-x-hidden relative selection:bg-[#c8972a] selection:text-[#0a1628]">
      {/* Dynamic Style tags to guarantee all custom styles and fonts are parsed correctly */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=DM+Sans:wght@300;400;500;600&family=Space+Mono:wght@400;700&display=swap');
        
        :root {
          --serif: 'Cormorant Garamond', serif;
          --sans: 'DM Sans', sans-serif;
          --mono: 'Space Mono', monospace;
        }

        .font-serif-cormorant {
          font-family: var(--serif);
        }

        .font-mono-space {
          font-family: var(--mono);
        }
      `}</style>

      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 transition-all duration-300 ${
          isScrolled
            ? "py-2.5 bg-[#0a1628]/95 backdrop-blur-md border-b border-[#c8972a]/20"
            : "py-3.5 bg-[#0a1628]/70 backdrop-blur-sm"
        }`}
      >
        <a href="#" className="flex items-center gap-2.5 no-underline group">
          <div className="w-8.5 h-8.5 bg-gradient-to-br from-[#c8972a] to-[#e8b84b] rounded flex items-center justify-center text-base text-[#0a1628] font-bold font-serif-cormorant">
            K
          </div>
          <div className="flex flex-col">
            <span className="font-serif-cormorant text-base font-semibold text-white tracking-wide leading-tight">
              Kumar Ortho
            </span>
            <span className="font-mono-space text-[9px] text-[#c8972a] tracking-widest uppercase">
              Hospitals
            </span>
          </div>
        </a>
        <div className="hidden md:flex items-center gap-10">
          <a href="#about" className="text-xs text-white/70 hover:text-[#e8b84b] no-underline tracking-wider uppercase transition-colors font-medium">
            About
          </a>
          <a href="#services" className="text-xs text-white/70 hover:text-[#e8b84b] no-underline tracking-wider uppercase transition-colors font-medium">
            Services
          </a>
          <a href="#why" className="text-xs text-white/70 hover:text-[#e8b84b] no-underline tracking-wider uppercase transition-colors font-medium">
            Why Us
          </a>
          <a href="#doctors" className="text-xs text-white/70 hover:text-[#e8b84b] no-underline tracking-wider uppercase transition-colors font-medium">
            Doctors
          </a>
          <a href="#technology" className="text-xs text-white/70 hover:text-[#e8b84b] no-underline tracking-wider uppercase transition-colors font-medium">
            Technology
          </a>
          <a href="#testimonials" className="text-xs text-white/70 hover:text-[#e8b84b] no-underline tracking-wider uppercase transition-colors font-medium">
            Testimonials
          </a>
        </div>
        <a
          href="#cta"
          className="bg-gradient-to-r from-[#c8972a] to-[#e8b84b] text-[#0a1628] text-xs font-semibold tracking-wider uppercase py-2.5 px-6 rounded hover:-translate-y-0.5 transition-all hover:shadow-[0_8px_24px_rgba(200,151,42,0.4)] whitespace-nowrap no-underline"
        >
          Book Appointment
        </a>
      </nav>

      {/* HERO */}
      <section
        id="hero"
        className="min-h-screen flex flex-col justify-center relative overflow-hidden px-6 md:px-16 pt-20"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 70% 50%, rgba(200,151,42,0.06) 0%, transparent 60%),
            radial-gradient(ellipse 40% 40% at 10% 80%, rgba(200,151,42,0.04) 0%, transparent 50%),
            linear-gradient(170deg, #0a1628 0%, #111f3a 100%)
          `
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(rgba(200,151,42,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(200,151,42,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)"
          }}
        />
        <div className="z-10 max-w-4xl">
          <div className="inline-flex items-center gap-3 font-mono-space text-xs text-[#c8972a] tracking-widest uppercase mb-6">
            <span className="w-8 h-[1px] bg-[#c8972a]" />
            40 Years of Excellence
            <span className="w-8 h-[1px] bg-[#c8972a]" />
          </div>
          <h1 className="font-serif-cormorant text-5xl md:text-7xl lg:text-8xl font-light leading-[1.1] tracking-tight mb-6">
            Reclaim Your <strong className="font-semibold">Active Life</strong> with <em className="italic text-[#e8b84b]">Precision Care</em>
          </h1>
          <p className="text-base md:text-lg text-white/60 max-w-xl leading-relaxed mb-10">
            Leading orthopaedic & multispeciality treatments backed by four decades of trust and cutting-edge medical technologies.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#cta"
              className="bg-gradient-to-r from-[#c8972a] to-[#e8b84b] text-[#0a1628] font-semibold text-xs tracking-wider uppercase py-4 px-10 rounded hover:-translate-y-0.5 transition-all hover:shadow-[0_12px_32px_rgba(200,151,42,0.45)] no-underline"
            >
              Consult an Expert
            </a>
            <a
              href="#services"
              className="border border-[#c8972a]/40 text-[#e8b84b] font-medium text-xs tracking-wider uppercase py-4 px-10 rounded hover:bg-[#c8972a]/10 hover:border-[#e8b84b] transition-all no-underline"
            >
              Explore Specialities
            </a>
          </div>
        </div>

        {/* HERO STATS */}
        <div className="mt-16 md:mt-0 md:absolute md:right-16 md:bottom-24 flex flex-row md:flex-col gap-8 md:gap-10">
          <div className="text-left md:text-right">
            <div className="font-serif-cormorant text-4xl md:text-5xl font-semibold text-white leading-none">
              40<span className="text-[#c8972a]">+</span>
            </div>
            <div className="text-[10px] text-white/45 tracking-widest uppercase mt-1.5 font-mono-space">
              Years of Trust
            </div>
          </div>
          <div className="text-left md:text-right">
            <div className="font-serif-cormorant text-4xl md:text-5xl font-semibold text-white leading-none">
              50K<span className="text-[#c8972a]">+</span>
            </div>
            <div className="text-[10px] text-white/45 tracking-widest uppercase mt-1.5 font-mono-space">
              Happy Patients
            </div>
          </div>
          <div className="text-left md:text-right">
            <div className="font-serif-cormorant text-4xl md:text-5xl font-semibold text-white leading-none">
              99<span className="text-[#c8972a]">%</span>
            </div>
            <div className="text-[10px] text-white/45 tracking-widest uppercase mt-1.5 font-mono-space">
              Success Rate
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="bg-gradient-to-r from-[#c8972a] to-[#e8b84b] py-3.5 overflow-hidden">
        <div className="flex gap-10 whitespace-nowrap animate-marquee">
          <div className="flex gap-10 shrink-0 justify-around min-w-full font-mono-space text-xs font-bold text-[#0a1628] tracking-widest uppercase">
            <span>Joint Replacements •</span>
            <span>Sports Medicine •</span>
            <span>Trauma Care •</span>
            <span>Spine Surgery •</span>
            <span>Arthroscopy •</span>
            <span>Physiotherapy •</span>
          </div>
          <div className="flex gap-10 shrink-0 justify-around min-w-full font-mono-space text-xs font-bold text-[#0a1628] tracking-widest uppercase" aria-hidden="true">
            <span>Joint Replacements •</span>
            <span>Sports Medicine •</span>
            <span>Trauma Care •</span>
            <span>Spine Surgery •</span>
            <span>Arthroscopy •</span>
            <span>Physiotherapy •</span>
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 md:px-16 bg-[#f5f0e8] text-[#1a2740]">
        <span className="inline-flex items-center gap-3 font-mono-space text-[10px] text-[#c8972a] tracking-widest uppercase mb-4">
          <span className="w-6 h-[1px] bg-[#c8972a]" />
          Our Legacy
        </span>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-8">
          <div className="relative h-[400px] md:h-[500px]">
            <div className="absolute inset-0 rounded bg-gradient-to-br from-[#0a1628] to-[#111f3a] overflow-hidden flex items-center justify-center">
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: "repeating-linear-gradient(45deg, rgba(200,151,42,0.1) 0, rgba(200,151,42,0.1) 1px, transparent 1px, transparent 12px)"
                }}
              />
              <svg className="w-40 opacity-70 filter drop-shadow-[0_0_40px_rgba(200,151,42,0.3)]" viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 10V190" stroke="#c8972a" strokeWidth="2" strokeDasharray="4 4"/>
                <circle cx="50" cy="30" r="12" stroke="#c8972a" strokeWidth="2"/>
                <path d="M30 60 H70 M25 90 H75 M20 120 H80 M28 150 H72" stroke="#c8972a" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-gradient-to-br from-[#c8972a] to-[#e8b84b] flex flex-col items-center justify-center shadow-[0_16px_40px_rgba(200,151,42,0.4)] text-[#0a1628]">
              <span className="font-serif-cormorant text-4xl font-bold leading-none">40</span>
              <span className="text-[9px] font-bold tracking-wider uppercase text-center mt-1">Years<br />Helping You</span>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="font-serif-cormorant text-4xl md:text-5xl font-light text-[#1a2740] leading-tight">
              Pioneering Orthopaedic <em className="italic text-[#c8972a]">Care & Recovery</em>
            </h2>
            <p className="text-base text-[#6b7a95] leading-relaxed mt-6">
              At Kumar Orthopaedic Hospital, we have dedicated over 40 years to rebuilding lives and restoring mobility. Our patient-first philosophy combines medical expertise with compassionate care to ensure a seamless path to wellness.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
              <div className="bg-white rounded-lg p-5 border-l-4 border-[#c8972a] shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:-translate-y-1 transition-all duration-200">
                <div className="text-2xl mb-2">🎯</div>
                <h3 className="text-sm font-semibold text-[#1a2740]">Precision Diagnostics</h3>
                <p className="text-xs text-[#6b7a95] mt-1.5 leading-relaxed">
                  Advanced imaging and target analysis for accurate medical planning.
                </p>
              </div>
              <div className="bg-white rounded-lg p-5 border-l-4 border-[#c8972a] shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:-translate-y-1 transition-all duration-200">
                <div className="text-2xl mb-2">⚡</div>
                <h3 className="text-sm font-semibold text-[#1a2740]">Rapid Recovery</h3>
                <p className="text-xs text-[#6b7a95] mt-1.5 leading-relaxed">
                  Minimally invasive techniques designed for quicker rehab times.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6 md:px-16 bg-[#111f3a]">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="inline-flex items-center gap-3 font-mono-space text-[10px] text-[#c8972a] tracking-widest uppercase mb-4">
              <span className="w-6 h-[1px] bg-[#c8972a]" />
              Departments
            </span>
            <h2 className="font-serif-cormorant text-4xl md:text-5xl font-light text-white leading-tight">
              Our Specialised <em className="italic text-[#e8b84b]">Services</em>
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#0a1628] rounded-xl p-8 border border-[#c8972a]/10 hover:border-[#c8972a]/40 transition-all duration-300 relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#c8972a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="font-mono-space text-xs text-[#c8972a]/50 tracking-widest mb-6">01</div>
            <div className="w-14 h-14 rounded-xl bg-[#c8972a]/10 border border-[#c8972a]/20 flex items-center justify-center text-2xl mb-6 group-hover:bg-gradient-to-br group-hover:from-[#c8972a] group-hover:to-[#e8b84b] group-hover:text-[#0a1628] transition-all duration-300">
              🦴
            </div>
            <h3 className="font-serif-cormorant text-2xl font-semibold mb-3">Joint Replacement</h3>
            <p className="text-xs text-white/55 leading-relaxed mb-6">
              World-class hip and knee replacement surgeries with customized implant systems.
            </p>
            <a href="#cta" className="text-xs text-[#c8972a] font-medium tracking-wider uppercase inline-flex items-center gap-2 hover:gap-3 transition-all no-underline">
              Learn More &rarr;
            </a>
          </div>
          <div className="bg-[#0a1628] rounded-xl p-8 border border-[#c8972a]/10 hover:border-[#c8972a]/40 transition-all duration-300 relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#c8972a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="font-mono-space text-xs text-[#c8972a]/50 tracking-widest mb-6">02</div>
            <div className="w-14 h-14 rounded-xl bg-[#c8972a]/10 border border-[#c8972a]/20 flex items-center justify-center text-2xl mb-6 group-hover:bg-gradient-to-br group-hover:from-[#c8972a] group-hover:to-[#e8b84b] group-hover:text-[#0a1628] transition-all duration-300">
              🏃
            </div>
            <h3 className="font-serif-cormorant text-2xl font-semibold mb-3">Sports Medicine</h3>
            <p className="text-xs text-white/55 leading-relaxed mb-6">
              Specialized treatments for ligament tears, arthroscopy, and athlete recovery.
            </p>
            <a href="#cta" className="text-xs text-[#c8972a] font-medium tracking-wider uppercase inline-flex items-center gap-2 hover:gap-3 transition-all no-underline">
              Learn More &rarr;
            </a>
          </div>
          <div className="bg-[#0a1628] rounded-xl p-8 border border-[#c8972a]/10 hover:border-[#c8972a]/40 transition-all duration-300 relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#c8972a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="font-mono-space text-xs text-[#c8972a]/50 tracking-widest mb-6">03</div>
            <div className="w-14 h-14 rounded-xl bg-[#c8972a]/10 border border-[#c8972a]/20 flex items-center justify-center text-2xl mb-6 group-hover:bg-gradient-to-br group-hover:from-[#c8972a] group-hover:to-[#e8b84b] group-hover:text-[#0a1628] transition-all duration-300">
              🏥
            </div>
            <h3 className="font-serif-cormorant text-2xl font-semibold mb-3">Trauma & Fracture</h3>
            <p className="text-xs text-white/55 leading-relaxed mb-6">
              24/7 Emergency response for complex fractures, dislocations, and bone trauma.
            </p>
            <a href="#cta" className="text-xs text-[#c8972a] font-medium tracking-wider uppercase inline-flex items-center gap-2 hover:gap-3 transition-all no-underline">
              Learn More &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why" className="py-24 px-6 md:px-16 bg-[#f5f0e8] text-[#1a2740]">
        <span className="inline-flex items-center gap-3 font-mono-space text-[10px] text-[#c8972a] tracking-widest uppercase mb-4">
          <span className="w-6 h-[1px] bg-[#c8972a]" />
          Why Choose Us
        </span>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-8">
          <div className="flex flex-col gap-6">
            <div className="flex gap-4 p-5 bg-white rounded-lg border border-[#c8972a]/12 hover:translate-x-1.5 hover:shadow-lg transition-all duration-300">
              <div className="font-mono-space text-xs text-[#c8972a] font-bold">01</div>
              <div>
                <h3 className="text-sm font-semibold text-[#1a2740] mb-1">Renowned Specialists</h3>
                <p className="text-xs text-[#6b7a95] leading-relaxed">A team of board-certified orthopaedic surgeons with global training.</p>
              </div>
            </div>
            <div className="flex gap-4 p-5 bg-white rounded-lg border border-[#c8972a]/12 hover:translate-x-1.5 hover:shadow-lg transition-all duration-300">
              <div className="font-mono-space text-xs text-[#c8972a] font-bold">02</div>
              <div>
                <h3 className="text-sm font-semibold text-[#1a2740] mb-1">State-of-the-Art Infrastructure</h3>
                <p className="text-xs text-[#6b7a95] leading-relaxed">Fully equipped operating theatres with laminar airflow and advanced tech.</p>
              </div>
            </div>
            <div className="flex gap-4 p-5 bg-white rounded-lg border border-[#c8972a]/12 hover:translate-x-1.5 hover:shadow-lg transition-all duration-300">
              <div className="font-mono-space text-xs text-[#c8972a] font-bold">03</div>
              <div>
                <h3 className="text-sm font-semibold text-[#1a2740] mb-1">Comprehensive Rehab</h3>
                <p className="text-xs text-[#6b7a95] leading-relaxed">In-house physiotherapy center focusing on complete functional recovery.</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-center">
            <div className="col-span-1 sm:col-span-2 bg-[#0a1628] rounded-xl p-8 border border-[#c8972a]/20 hover:-translate-y-1.5 transition-all duration-350 shadow-xl">
              <div className="font-serif-cormorant text-5xl font-semibold text-white leading-none">
                98.4<span className="text-[#c8972a]">%</span>
              </div>
              <div className="text-[10px] text-white/45 tracking-widest uppercase mt-3 font-mono-space">Patient Satisfaction Rating</div>
            </div>
            <div className="bg-[#0a1628] rounded-xl p-8 border border-[#c8972a]/20 hover:-translate-y-1.5 transition-all duration-350 shadow-xl">
              <div className="font-serif-cormorant text-4xl font-semibold text-white leading-none">15K+</div>
              <div className="text-[10px] text-white/45 tracking-widest uppercase mt-3 font-mono-space">Surgeries Performed</div>
            </div>
            <div className="bg-[#0a1628] rounded-xl p-8 border border-[#c8972a]/20 hover:-translate-y-1.5 transition-all duration-350 shadow-xl">
              <div className="font-serif-cormorant text-4xl font-semibold text-white leading-none">24/7</div>
              <div className="text-[10px] text-white/45 tracking-widest uppercase mt-3 font-mono-space">Trauma Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* DOCTORS */}
      <section id="doctors" className="py-24 px-6 md:px-16 bg-[#0a1628]">
        <div className="max-w-xl mb-12">
          <span className="inline-flex items-center gap-3 font-mono-space text-[10px] text-[#c8972a] tracking-widest uppercase mb-4">
            <span className="w-6 h-[1px] bg-[#c8972a]" />
            Medical Team
          </span>
          <h2 className="font-serif-cormorant text-4xl md:text-5xl font-light text-white leading-tight">
            Led by Experienced <em className="italic text-[#e8b84b]">Specialists</em>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#111f3a] rounded-lg overflow-hidden border border-[#c8972a]/15 hover:border-[#c8972a] hover:-translate-y-1.5 transition-all duration-350 relative">
            <div className="h-64 bg-gradient-to-br from-[#111f3a] to-[#192844] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(200,151,42,0.12),transparent_60%)]" />
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#c8972a]/20 to-[#c8972a]/5 border-2 border-[#c8972a]/20 flex items-center justify-center font-serif-cormorant text-4xl text-[#e8b84b]">
                DK
              </div>
            </div>
            <div className="absolute top-4 right-4 bg-[#c8972a]/15 border border-[#c8972a]/25 rounded-full px-3 py-1 text-[9px] text-[#e8b84b] tracking-wider uppercase font-mono-space">
              Chief Surgeon
            </div>
            <div className="p-6">
              <h3 className="font-serif-cormorant text-xl font-semibold">Dr. Kumar</h3>
              <div className="text-[10px] text-[#c8972a] tracking-widest uppercase my-1 font-mono-space">Orthopaedic Surgeon</div>
              <div className="w-8 h-[2px] bg-gradient-to-r from-[#c8972a] to-[#e8b84b] my-4" />
              <p className="text-xs text-white/50 leading-relaxed">40+ Years of experience in Joint Replacement & Trauma Care.</p>
            </div>
          </div>
          <div className="bg-[#111f3a] rounded-lg overflow-hidden border border-[#c8972a]/15 hover:border-[#c8972a] hover:-translate-y-1.5 transition-all duration-350 relative">
            <div className="h-64 bg-gradient-to-br from-[#111f3a] to-[#192844] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(200,151,42,0.12),transparent_60%)]" />
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#c8972a]/20 to-[#c8972a]/5 border-2 border-[#c8972a]/20 flex items-center justify-center font-serif-cormorant text-4xl text-[#e8b84b]">
                AK
              </div>
            </div>
            <div className="absolute top-4 right-4 bg-[#c8972a]/15 border border-[#c8972a]/25 rounded-full px-3 py-1 text-[9px] text-[#e8b84b] tracking-wider uppercase font-mono-space">
              Director
            </div>
            <div className="p-6">
              <h3 className="font-serif-cormorant text-xl font-semibold">Dr. Anuj Kumar</h3>
              <div className="text-[10px] text-[#c8972a] tracking-widest uppercase my-1 font-mono-space">Spine & Sports Specialist</div>
              <div className="w-8 h-[2px] bg-gradient-to-r from-[#c8972a] to-[#e8b84b] my-4" />
              <p className="text-xs text-white/50 leading-relaxed">15+ Years of experience in Minimally Invasive Spine Surgeries.</p>
            </div>
          </div>
          <div className="bg-[#111f3a] rounded-lg overflow-hidden border border-[#c8972a]/15 hover:border-[#c8972a] hover:-translate-y-1.5 transition-all duration-350 relative">
            <div className="h-64 bg-gradient-to-br from-[#111f3a] to-[#192844] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(200,151,42,0.12),transparent_60%)]" />
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#c8972a]/20 to-[#c8972a]/5 border-2 border-[#c8972a]/20 flex items-center justify-center font-serif-cormorant text-4xl text-[#e8b84b]">
                SK
              </div>
            </div>
            <div className="absolute top-4 right-4 bg-[#c8972a]/15 border border-[#c8972a]/25 rounded-full px-3 py-1 text-[9px] text-[#e8b84b] tracking-wider uppercase font-mono-space">
              Consultant
            </div>
            <div className="p-6">
              <h3 className="font-serif-cormorant text-xl font-semibold">Dr. Smita Kumar</h3>
              <div className="text-[10px] text-[#c8972a] tracking-widest uppercase my-1 font-mono-space">Rheumatology Specialist</div>
              <div className="w-8 h-[2px] bg-gradient-to-r from-[#c8972a] to-[#e8b84b] my-4" />
              <p className="text-xs text-white/50 leading-relaxed">12+ Years of experience in Joint Care & Rheumatology.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section id="technology" className="py-24 px-6 md:px-16 bg-[#111f3a]">
        <span className="inline-flex items-center gap-3 font-mono-space text-[10px] text-[#c8972a] tracking-widest uppercase mb-4">
          <span className="w-6 h-[1px] bg-[#c8972a]" />
          Innovation
        </span>
        <h2 className="font-serif-cormorant text-4xl md:text-5xl font-light text-white leading-tight mb-12">
          Advanced <em className="italic text-[#e8b84b]">Medical Tech</em>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-8">
            <div className="flex gap-4 items-start">
              <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#c8972a]/20 to-[#c8972a]/5 border border-[#c8972a]/20 flex items-center justify-center text-lg shrink-0">
                🩺
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-1">Computer-Assisted Navigation</h4>
                <p className="text-xs text-white/50 leading-relaxed">Allows high precision and placement of joint implants for long durability.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#c8972a]/20 to-[#c8972a]/5 border border-[#c8972a]/20 flex items-center justify-center text-lg shrink-0">
                🔬
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-1">High-Definition Arthroscopy</h4>
                <p className="text-xs text-white/50 leading-relaxed">Keyhole surgeries using HD camera systems for faster diagnostic precision.</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#0a1628] rounded-lg p-6 border border-[#c8972a] bg-gradient-to-br from-[#c8972a]/8 to-[#0a1628] hover:scale-[1.03] transition-all duration-300 text-center">
              <div className="text-3xl mb-3">⚡</div>
              <h4 className="font-serif-cormorant text-lg font-semibold mb-2">Ultra-modern OT</h4>
              <p className="text-[11px] text-white/45 leading-relaxed">Clean sterile air environments minimizing infection risks completely.</p>
            </div>
            <div className="bg-[#0a1628] rounded-lg p-6 border border-[#c8972a]/20 hover:border-[#c8972a] hover:scale-[1.03] transition-all duration-300 text-center">
              <div className="text-3xl mb-3">📊</div>
              <h4 className="font-serif-cormorant text-lg font-semibold mb-2">Digital Diagnostics</h4>
              <p className="text-[11px] text-white/45 leading-relaxed">Digital X-Ray and ultra-precise scanning facilities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-24 px-6 md:px-16 bg-[#f5f0e8] text-[#1a2740]">
        <span className="inline-flex items-center gap-3 font-mono-space text-[10px] text-[#c8972a] tracking-widest uppercase mb-4">
          <span className="w-6 h-[1px] bg-[#c8972a]" />
          Testimonials
        </span>
        <h2 className="font-serif-cormorant text-4xl md:text-5xl font-light text-[#1a2740] leading-tight mb-12">
          What Our <em className="italic text-[#c8972a]">Patients Say</em>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-8 border border-[#c8972a]/10 hover:-translate-y-1.5 transition-all duration-300 shadow-sm relative overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-[#c8972a] before:to-[#e8b84b]">
            <div className="text-[#c8972a] text-xs tracking-wider mb-3">★★★★★</div>
            <div className="font-serif-cormorant text-4xl text-[#c8972a] leading-none mb-1">&ldquo;</div>
            <p className="text-xs text-[#6b7a95] italic leading-relaxed mb-6">
              I had my knee replacement surgery here. After just 3 weeks, I was back on my feet and walking without any support. Deep gratitude to the doctors!
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#c8972a] to-[#e8b84b] flex items-center justify-center font-serif-cormorant text-sm font-bold text-[#0a1628]">
                RS
              </div>
              <div>
                <h4 className="text-xs font-semibold text-[#1a2740]">Raman Sharma</h4>
                <span className="text-[10px] text-[#6b7a95]">Knee Replacement Patient</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-8 border border-[#c8972a]/10 hover:-translate-y-1.5 transition-all duration-300 shadow-sm relative overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-[#c8972a] before:to-[#e8b84b]">
            <div className="text-[#c8972a] text-xs tracking-wider mb-3">★★★★★</div>
            <div className="font-serif-cormorant text-4xl text-[#c8972a] leading-none mb-1">&ldquo;</div>
            <p className="text-xs text-[#6b7a95] italic leading-relaxed mb-6">
              Excellent staff and clean hospital environment. The trauma team saved my brother's arm after a severe accident. Truly professional care.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#c8972a] to-[#e8b84b] flex items-center justify-center font-serif-cormorant text-sm font-bold text-[#0a1628]">
                AM
              </div>
              <div>
                <h4 className="text-xs font-semibold text-[#1a2740]">Amit Mishra</h4>
                <span className="text-[10px] text-[#6b7a95]">Trauma Care Patient</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-8 border border-[#c8972a]/10 hover:-translate-y-1.5 transition-all duration-300 shadow-sm relative overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-[#c8972a] before:to-[#e8b84b]">
            <div className="text-[#c8972a] text-xs tracking-wider mb-3">★★★★★</div>
            <div className="font-serif-cormorant text-4xl text-[#c8972a] leading-none mb-1">&ldquo;</div>
            <p className="text-xs text-[#6b7a95] italic leading-relaxed mb-6">
              The spine treatment provided here solved my chronic lower back issues completely. Strongly recommend Dr. Anuj and his rehabilitation team.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#c8972a] to-[#e8b84b] flex items-center justify-center font-serif-cormorant text-sm font-bold text-[#0a1628]">
                KP
              </div>
              <div>
                <h4 className="text-xs font-semibold text-[#1a2740]">Kiran Patel</h4>
                <span className="text-[10px] text-[#6b7a95]">Spine Surgery Patient</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section
        id="cta"
        className="py-24 px-6 md:px-16 text-center relative overflow-hidden text-[#0a1628] flex flex-col items-center"
        style={{
          background: "linear-gradient(135deg, #c8972a 0%, #e8b84b 50%, #d4a832 100%)"
        }}
      >
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 1px, transparent 18px)"
          }}
        />
        <div className="z-10 max-w-2xl flex flex-col items-center">
          <span className="font-mono-space text-[10px] text-[#0a1628]/60 tracking-widest uppercase mb-4">
            Start Your Recovery Journey
          </span>
          <h2 className="font-serif-cormorant text-3xl md:text-5xl font-semibold text-[#0a1628] leading-tight mb-8">
            Ready to Live a Pain-Free Active Life?
          </h2>
          <a
            href="#"
            className="bg-[#0a1628] text-white font-semibold text-xs tracking-wider uppercase py-4 px-10 rounded hover:bg-[#111f3a] hover:-translate-y-0.5 transition-all hover:shadow-[0_10px_25px_rgba(10,22,40,0.3)] no-underline"
          >
            Schedule Your Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
