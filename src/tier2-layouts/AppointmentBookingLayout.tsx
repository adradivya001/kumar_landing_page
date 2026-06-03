"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Phone, User, Stethoscope, Clock, CheckCircle, MessageSquare, ShieldCheck } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function AppointmentBooking() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    department: "Orthopedics",
    doctor: "Dr. Y. M. V. Kumar",
    date: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!formData.name || !formData.phone || !formData.date) {
      alert("Please fill in all required fields.");
      return;
    }
    setIsSubmitting(true);
    const { error: insertError } = await supabase.from("appointments").insert({
      patient_name: formData.name,
      phone: formData.phone,
      department: formData.department,
      doctor_name: formData.doctor,
      preferred_date: formData.date,
      source: "booking_section",
    });
    setIsSubmitting(false);
    if (insertError) {
      setError("Something went wrong. Please try again or call us directly.");
    } else {
      setIsSuccess(true);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phone: "",
      department: "Orthopedics",
      doctor: "Dr. Y. M. V. Kumar",
      date: "",
    });
    setIsSuccess(false);
  };

  return (
    <section id="booking-section" className="pt-10 pb-4 bg-white dark:bg-zinc-900 font-sans relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1.5 rounded-md">
            Direct Care Access
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] dark:text-white mt-4 tracking-tight">
            Book Your Appointment
          </h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 dark:text-zinc-400 mt-4 text-sm sm:text-base">
            Select your preferred medical department, pick a specialist, and secure your schedule in minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-stretch">
          
          {/* Appointment Form Left Side */}
          <div className="lg:col-span-7 bg-[#F8FAFC] dark:bg-zinc-850 p-6 sm:p-8 rounded-[32px] border border-gray-150 dark:border-zinc-800 shadow-lg">
            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                    Patient Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-blue-600" />
                    <input
                      type="text"
                      required
                      placeholder="Enter patient full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-gray-200 bg-white text-gray-900 dark:bg-zinc-800 dark:text-white dark:border-zinc-700 py-3 pl-10 pr-4 text-sm outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-blue-600" />
                    <input
                      type="tel"
                      required
                      pattern="[0-9]{10}"
                      placeholder="10-digit mobile number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-xl border border-gray-200 bg-white text-gray-900 dark:bg-zinc-800 dark:text-white dark:border-zinc-700 py-3 pl-10 pr-4 text-sm outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>
                </div>

                {/* Department & Doctor Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Department */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                      Specialty Department
                    </label>
                    <div className="relative">
                      <Stethoscope className="absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-blue-600" />
                      <select
                        value={formData.department}
                        onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                        className="w-full rounded-xl border border-gray-200 bg-white text-gray-900 dark:bg-zinc-800 dark:text-white dark:border-zinc-700 py-3 pl-10 pr-4 text-sm outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-100 appearance-none"
                      >
                        <option value="Orthopedics" className="bg-white text-gray-900 dark:bg-zinc-800 dark:text-white">Orthopedics & Spine</option>
                        <option value="Cardiology" className="bg-white text-gray-900 dark:bg-zinc-800 dark:text-white">Cardiology</option>
                        <option value="Neurology" className="bg-white text-gray-900 dark:bg-zinc-800 dark:text-white">Neurology</option>
                        <option value="General Medicine" className="bg-white text-gray-900 dark:bg-zinc-800 dark:text-white">General Medicine</option>
                        <option value="General Surgery" className="bg-white text-gray-900 dark:bg-zinc-800 dark:text-white">General Surgery</option>
                        <option value="Pediatrics" className="bg-white text-gray-900 dark:bg-zinc-800 dark:text-white">Pediatrics</option>
                        <option value="Women Health" className="bg-white text-gray-900 dark:bg-zinc-800 dark:text-white">Women&apos;s Health</option>
                        <option value="Diagnostics" className="bg-white text-gray-900 dark:bg-zinc-800 dark:text-white">Diagnostics & Lab</option>
                      </select>
                    </div>
                  </div>

                  {/* Doctor */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                      Select Specialist
                    </label>
                    <div className="relative">
                      <User className="absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-blue-600" />
                      <select
                        value={formData.doctor}
                        onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                        className="w-full rounded-xl border border-gray-200 bg-white text-gray-900 dark:bg-zinc-800 dark:text-white dark:border-zinc-700 py-3 pl-10 pr-4 text-sm outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-100 appearance-none"
                      >
                        <option value="Dr. Y. M. V. Kumar" className="bg-white text-gray-900 dark:bg-zinc-800 dark:text-white">Dr. Y. M. V. Kumar (Orthopedics)</option>
                        <option value="Dr. V. Karthik Reddy" className="bg-white text-gray-900 dark:bg-zinc-800 dark:text-white">Dr. V. Karthik Reddy (General Medicine)</option>
                        <option value="Dr. A. Mithun Rakesh" className="bg-white text-gray-900 dark:bg-zinc-800 dark:text-white">Dr. A. Mithun Rakesh (General Medicine)</option>
                        <option value="Dr. K. Karun Kumar Reddy" className="bg-white text-gray-900 dark:bg-zinc-800 dark:text-white">Dr. K. Karun Kumar Reddy (General Surgery)</option>
                        <option value="Dr. Rajashekar Battula" className="bg-white text-gray-900 dark:bg-zinc-800 dark:text-white">Dr. Rajashekar Battula (Urology)</option>
                        <option value="Dr. C. Aruna Jyothi" className="bg-white text-gray-900 dark:bg-zinc-800 dark:text-white">Dr. C. Aruna Jyothi (Gynecology)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Preferred Date */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                    Preferred Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    required
                    min={new Date().toISOString().split("T")[0]}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full rounded-xl border border-gray-200 bg-white text-gray-900 dark:bg-zinc-800 dark:text-white dark:border-zinc-700 py-3 px-4 text-sm outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                {/* Error message */}
                {error && (
                  <p className="text-xs text-red-500 font-semibold text-center">{error}</p>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-xl bg-blue-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-700 active:scale-98 disabled:opacity-50 mt-2"
                >
                  {isSubmitting ? "Saving your slot..." : "Confirm Booking Request"}
                </button>
              </form>
            ) : (
              /* Success Screen */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-8 text-center"
              >
                <div className="mb-4 rounded-full bg-emerald-50 p-4 dark:bg-emerald-950/20 text-emerald-600">
                  <CheckCircle className="h-12 w-12 text-emerald-600" />
                </div>
                <h4 className="text-xl font-extrabold text-[#0B1F3A] mb-2">Consultation Booked!</h4>
                <p className="text-xs text-gray-500 leading-relaxed max-w-xs mb-6">
                  Thank you, <strong className="text-[#0B1F3A]">{formData.name}</strong>. We have registered your slot for <strong className="text-[#0B1F3A]">{formData.doctor}</strong> ({formData.department}) on <strong className="text-[#0B1F3A]">{formData.date}</strong>. Our front desk will call you to stabilize your timing block.
                </p>
                <button
                  onClick={handleReset}
                  className="w-full max-w-[200px] rounded-xl bg-[#0B1F3A] py-3 text-sm font-bold text-white transition-all hover:bg-navy-900 active:scale-98"
                >
                  Back to Form
                </button>
              </motion.div>
            )}
          </div>

          {/* WhatsApp / Trust Right Side */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            <div className="rounded-[32px] bg-gradient-to-br from-[#EAF3FF] to-white p-6 border border-blue-100 shadow-md flex flex-col justify-between flex-1 min-h-[220px]">
              <div>
                <span className="text-[10px] font-extrabold text-blue-600 uppercase tracking-widest block mb-2">WhatsApp Consultation</span>
                <h3 className="text-xl font-bold text-[#0B1F3A] mb-3">Book Instantly via WhatsApp</h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Skip the form entirely! Start an active chat with our scheduling assistant on WhatsApp to book and verify slots instantly.
                </p>
              </div>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/919440275556?text=I%20want%20to%20book%20an%20OPD%20appointment%20with%20Kumar%20Hospital"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 transition-all mt-6"
              >
                <svg viewBox="0 0 24 24" className="h-4.5 w-4.5 fill-white stroke-none">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.863-9.847.001-2.63-1.023-5.101-2.885-6.963C16.531 1.932 14.06 .907 11.433.907c-5.434 0-9.858 4.414-9.861 9.848-.001 1.942.507 3.834 1.47 5.514L2.017 21.6l5.522-1.446zM17.472 14.382c-.301-.15-1.78-.879-2.057-.98-.277-.101-.478-.15-.678.15-.199.299-.773.979-.949 1.179-.176.2-.351.224-.652.074-1.022-.512-1.795-.877-2.507-1.492-.562-.487-.887-1.077-.997-1.272-.11-.2-.012-.307.088-.407.089-.09.199-.232.299-.348.101-.115.134-.199.199-.332.066-.133.033-.25-.016-.35-.05-.1-.478-1.15-.655-1.579-.173-.414-.347-.358-.478-.365-.123-.006-.264-.007-.406-.007-.142 0-.374.053-.57.266-.197.213-.753.737-.753 1.798 0 1.06.773 2.083.88 2.233.107.15 1.52 2.32 3.682 3.253.514.223.916.356 1.229.456.518.165.989.141 1.361.086.415-.062 1.78-.727 2.031-1.43.252-.703.252-1.306.176-1.43-.076-.124-.277-.199-.578-.35" />
                </svg>
                <span>Chat &amp; Book Instantly</span>
              </motion.a>
            </div>

            {/* Corporate Accreditations and Assurances */}
            <div className="rounded-[32px] border border-gray-150 dark:border-zinc-800 p-6 flex flex-col justify-between bg-[#F8FAFC] dark:bg-zinc-850 shadow-sm flex-1">
              <div>
                <h4 className="text-xs font-bold text-[#0B1F3A] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <ShieldCheck className="h-4.5 w-4.5 text-blue-600" />
                  <span>Clinical Assurances</span>
                </h4>
                <ul className="space-y-2.5 text-xs text-gray-500 leading-normal">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">●</span>
                    <span>100% HIPAA-compliant record management.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">●</span>
                    <span>Pre-authorization cashless support for listing panels.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">●</span>
                    <span>Emergency admissions triaged immediately.</span>
                  </li>
                </ul>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-200/60 text-[10px] text-gray-400 font-semibold tracking-wider text-center uppercase">
                Apollo Standard Hospital Infrastructure
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
