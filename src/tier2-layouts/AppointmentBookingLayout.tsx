"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Phone, User, Stethoscope, CheckCircle, AlertCircle, ShieldCheck, Lock, ArrowRight, MessageSquare } from "lucide-react";
import { supabase } from "@/lib/supabase";

interface ValidationErrors {
  name?: string;
  phone?: string;
  date?: string;
}

const STEPS = ["Patient Info", "Department", "Confirm"];

export default function AppointmentBooking() {
  const [step, setStep] = useState(0); // 0, 1, 2

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    department: "Orthopedics",
    doctor: "Dr. Y. M. V. Kumar",
    date: "",
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [dbError, setDbError] = useState("");

  useEffect(() => {
    const newErrors: ValidationErrors = {};
    if (touched.name) {
      if (!formData.name) newErrors.name = "Patient name is required.";
      else if (formData.name.trim().length < 2) newErrors.name = "Name must be at least 2 characters.";
      else if (!/^[A-Za-z\s.]+$/.test(formData.name)) newErrors.name = "Name can only contain letters, spaces, and dots.";
    }
    if (touched.phone) {
      if (!formData.phone) newErrors.phone = "Phone number is required.";
      else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = "Phone must be exactly 10 digits.";
    }
    if (touched.date) {
      if (!formData.date) newErrors.date = "Preferred date is required.";
      else {
        const selected = new Date(formData.date);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (selected < today) newErrors.date = "Date cannot be in the past.";
      }
    }
    setErrors(newErrors);
  }, [formData, touched]);

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleNext = () => {
    if (step === 0) {
      setTouched({ name: true, phone: true });
      if (!formData.name || formData.name.trim().length < 2 || !/^[A-Za-z\s.]+$/.test(formData.name)) return;
      if (!formData.phone || !/^\d{10}$/.test(formData.phone)) return;
    }
    setStep((prev) => Math.min(prev + 1, 2));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setDbError("");
    setTouched({ name: true, phone: true, date: true });

    const finalErrors: ValidationErrors = {};
    if (!formData.name || formData.name.trim().length < 2 || !/^[A-Za-z\s.]+$/.test(formData.name)) {
      finalErrors.name = "Please enter a valid patient name.";
    }
    if (!formData.phone || !/^\d{10}$/.test(formData.phone)) {
      finalErrors.phone = "Please enter a valid 10-digit mobile number.";
    }
    if (!formData.date) {
      finalErrors.date = "Please select a date.";
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) finalErrors.date = "Date cannot be in the past.";
    }

    if (Object.keys(finalErrors).length > 0) {
      setErrors(finalErrors);
      return;
    }

    setIsSubmitting(true);
    const { error: insertError } = await supabase.from("appointments").insert({
      patient_name: formData.name.trim(),
      phone: formData.phone,
      department: formData.department,
      doctor_name: formData.doctor,
      preferred_date: formData.date,
      source: "booking_section",
    });
    setIsSubmitting(false);

    if (insertError) {
      setDbError("System Offline: Unable to process booking. Please try calling us directly.");
    } else {
      setIsSuccess(true);
    }
  };

  const handleReset = () => {
    setFormData({ name: "", phone: "", department: "Orthopedics", doctor: "Dr. Y. M. V. Kumar", date: "" });
    setErrors({});
    setTouched({});
    setIsSuccess(false);
    setDbError("");
    setStep(0);
  };

  return (
    <section id="booking-section" className="pt-16 pb-10 bg-white dark:bg-zinc-900 font-sans relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-72 h-72 bg-teal-300/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1.5 rounded-md">
            Direct Care Access
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] dark:text-white mt-4 tracking-tight">
            Book Your Appointment
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 dark:text-zinc-400 mt-4 text-sm sm:text-base">
            Select your preferred medical department, pick a specialist, and secure your schedule in minutes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto items-stretch">

          {/* ── Form Column ── */}
          <div className="lg:col-span-7 bg-[#F8FAFC] dark:bg-zinc-850 p-6 sm:p-8 rounded-[32px] border border-gray-150 dark:border-zinc-800 shadow-lg relative min-h-[500px] flex flex-col">

            {/* Step Progress Bar */}
            {!isSuccess && (
              <div className="flex items-center mb-8">
                {STEPS.map((label, i) => (
                  <div key={i} className="flex items-center flex-1">
                    <div className="flex flex-col items-center">
                      <div
                        className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-400 ${
                          i < step
                            ? "bg-blue-600 text-white shadow-md shadow-blue-600/25"
                            : i === step
                            ? "bg-blue-600 text-white ring-4 ring-blue-200 dark:ring-blue-800 shadow-md shadow-blue-600/25 scale-110"
                            : "bg-gray-200 dark:bg-zinc-700 text-gray-500 dark:text-zinc-400"
                        }`}
                      >
                        {i < step ? <CheckCircle className="h-4 w-4" /> : i + 1}
                      </div>
                      <span className={`text-[10px] mt-1 font-bold uppercase tracking-wider transition-colors ${i === step ? "text-blue-600 dark:text-blue-400" : "text-gray-400"}`}>
                        {label}
                      </span>
                    </div>
                    {i < STEPS.length - 1 && (
                      <div className={`step-connector ${i < step ? "active" : ""} mx-1 mb-5`} />
                    )}
                  </div>
                ))}
              </div>
            )}

            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="booking-form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSubmit}
                  className="space-y-4 flex-1 flex flex-col"
                  noValidate
                >
                  {/* Step 0: Patient Info */}
                  <AnimatePresence mode="wait">
                    {step === 0 && (
                      <motion.div
                        key="step0"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        className="space-y-4 flex-1"
                      >
                        {/* Name */}
                        <div className="relative">
                          <label className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-zinc-400 mb-1.5">
                            <span>Patient Name <span className="text-red-500">*</span></span>
                            {errors.name && <span className="text-[10px] text-red-500 font-semibold lowercase tracking-normal flex items-center gap-1"><AlertCircle className="h-3 w-3" /> {errors.name}</span>}
                          </label>
                          <div className="relative group/input">
                            <User className="absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-blue-600 transition-transform group-focus-within/input:scale-110" />
                            <input
                              type="text"
                              required
                              placeholder="Enter patient full name"
                              value={formData.name}
                              onBlur={() => handleBlur("name")}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              className={`w-full rounded-xl border bg-white text-gray-900 dark:bg-zinc-800 dark:text-white py-3 pl-10 pr-4 text-sm outline-none transition-all placeholder:text-gray-400 ${
                                errors.name
                                  ? "border-red-400 ring-2 ring-red-100 dark:ring-red-950/20"
                                  : "border-gray-200 dark:border-zinc-700 focus:border-teal-500 focus:ring-2 focus:ring-teal-400/20"
                              }`}
                            />
                          </div>
                        </div>

                        {/* Phone */}
                        <div className="relative">
                          <label className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-zinc-400 mb-1.5">
                            <span>Phone Number <span className="text-red-500">*</span></span>
                            {errors.phone && <span className="text-[10px] text-red-500 font-semibold lowercase tracking-normal flex items-center gap-1"><AlertCircle className="h-3 w-3" /> {errors.phone}</span>}
                          </label>
                          <div className="relative group/input">
                            <Phone className="absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-blue-600" />
                            <input
                              type="tel"
                              required
                              placeholder="10-digit mobile number"
                              value={formData.phone}
                              onBlur={() => handleBlur("phone")}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, "").slice(0, 10) })}
                              className={`w-full rounded-xl border bg-white text-gray-900 dark:bg-zinc-800 dark:text-white py-3 pl-10 pr-4 text-sm outline-none transition-all placeholder:text-gray-400 ${
                                errors.phone
                                  ? "border-red-400 ring-2 ring-red-100 dark:ring-red-950/20"
                                  : "border-gray-200 dark:border-zinc-700 focus:border-teal-500 focus:ring-2 focus:ring-teal-400/20"
                              }`}
                            />
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={handleNext}
                          className="w-full mt-4 flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700 hover:scale-[1.01] active:scale-[0.99] transition-all"
                        >
                          <span>Next: Select Department</span>
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </motion.div>
                    )}

                    {/* Step 1: Department + Doctor */}
                    {step === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        className="space-y-4 flex-1"
                      >
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-zinc-400 mb-1.5">Specialty Department</label>
                          <div className="relative">
                            <Stethoscope className="absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-blue-600" />
                            <select
                              value={formData.department}
                              onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                              className="w-full rounded-xl border border-gray-200 bg-white text-gray-900 dark:bg-zinc-800 dark:text-white dark:border-zinc-700 py-3 pl-10 pr-4 text-sm outline-none transition-all focus:border-teal-500 focus:ring-2 focus:ring-teal-400/20 appearance-none cursor-pointer"
                            >
                              <option>Orthopedics & Spine</option>
                              <option>Cardiology</option>
                              <option>Neurology</option>
                              <option>General Medicine</option>
                              <option>General Surgery</option>
                              <option>Pediatrics</option>
                              <option>Women&apos;s Health</option>
                              <option>Diagnostics & Lab</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-zinc-400 mb-1.5">Select Specialist</label>
                          <div className="relative">
                            <User className="absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-blue-600" />
                            <select
                              value={formData.doctor}
                              onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                              className="w-full rounded-xl border border-gray-200 bg-white text-gray-900 dark:bg-zinc-800 dark:text-white dark:border-zinc-700 py-3 pl-10 pr-4 text-sm outline-none transition-all focus:border-teal-500 focus:ring-2 focus:ring-teal-400/20 appearance-none cursor-pointer"
                            >
                              <option>Dr. Y. M. V. Kumar (Orthopedics)</option>
                              <option>Dr. V. Karthik Reddy (General Medicine)</option>
                              <option>Dr. A. Mithun Rakesh (General Medicine)</option>
                              <option>Dr. K. Karun Kumar Reddy (General Surgery)</option>
                              <option>Dr. Rajashekar Battula (Urology)</option>
                              <option>Dr. C. Aruna Jyothi (Gynecology)</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-zinc-400 mb-1.5">
                            <span>Preferred Date <span className="text-red-500">*</span></span>
                            {errors.date && <span className="text-[10px] text-red-500 font-semibold lowercase tracking-normal flex items-center gap-1"><AlertCircle className="h-3 w-3" /> {errors.date}</span>}
                          </label>
                          <input
                            type="date"
                            required
                            min={new Date().toISOString().split("T")[0]}
                            value={formData.date}
                            onBlur={() => handleBlur("date")}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            className={`w-full rounded-xl border bg-white text-gray-900 dark:bg-zinc-800 dark:text-white py-3 px-4 text-sm outline-none transition-all ${
                              errors.date
                                ? "border-red-400 ring-2 ring-red-100 dark:ring-red-950/20"
                                : "border-gray-200 dark:border-zinc-700 focus:border-teal-500 focus:ring-2 focus:ring-teal-400/20"
                            }`}
                          />
                        </div>

                        <div className="flex gap-3 mt-2">
                          <button type="button" onClick={() => setStep(0)}
                            className="flex-1 rounded-xl border border-gray-200 py-3 text-sm font-bold text-gray-600 hover:bg-gray-50 transition-all">
                            Back
                          </button>
                          <button type="button" onClick={handleNext}
                            className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all">
                            Review & Confirm
                            <ArrowRight className="h-4 w-4" />
                          </button>
                        </div>
                      </motion.div>
                    )}

                    {/* Step 2: Confirm */}
                    {step === 2 && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        className="space-y-4 flex-1"
                      >
                        <div className="bg-blue-50 dark:bg-blue-950/20 rounded-2xl p-5 border border-blue-100 dark:border-blue-900 space-y-3">
                          <h4 className="text-sm font-extrabold text-[#0B1F3A] dark:text-white mb-2">Appointment Summary</h4>
                          {[
                            { label: "Patient", value: formData.name },
                            { label: "Phone", value: formData.phone },
                            { label: "Department", value: formData.department },
                            { label: "Doctor", value: formData.doctor },
                            { label: "Date", value: formData.date },
                          ].map(({ label, value }) => (
                            <div key={label} className="flex justify-between text-sm">
                              <span className="text-gray-500 font-medium">{label}</span>
                              <span className="font-bold text-[#0B1F3A] dark:text-white text-right max-w-[55%]">{value || "—"}</span>
                            </div>
                          ))}
                        </div>

                        {dbError && (
                          <div className="rounded-xl bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 p-3 flex gap-2 items-center">
                            <AlertCircle className="h-4 w-4 text-red-500 flex-shrink-0" />
                            <p className="text-xs text-red-600 dark:text-red-400 font-semibold">{dbError}</p>
                          </div>
                        )}

                        {/* Trust badge */}
                        <div className="flex items-center gap-2 text-[11px] text-gray-400">
                          <Lock className="h-3.5 w-3.5" />
                          <span>256-bit encrypted · HIPAA compliant · Your data is safe</span>
                        </div>

                        <div className="flex gap-3">
                          <button type="button" onClick={() => setStep(1)}
                            className="flex-1 rounded-xl border border-gray-200 py-3 text-sm font-bold text-gray-600 hover:bg-gray-50 transition-all">
                            Edit
                          </button>
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex-1 relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/25 hover:from-blue-700 hover:to-blue-800 transition-all disabled:opacity-60"
                          >
                            {isSubmitting ? (
                              <span className="flex items-center justify-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-white animate-bounce" style={{ animationDelay: "0ms" }} />
                                <span className="w-1.5 h-1.5 rounded-full bg-white animate-bounce" style={{ animationDelay: "150ms" }} />
                                <span className="w-1.5 h-1.5 rounded-full bg-white animate-bounce" style={{ animationDelay: "300ms" }} />
                              </span>
                            ) : "Confirm Booking Request"}
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.form>
              ) : (
                /* Success */
                <motion.div
                  key="booking-success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-8 text-center flex-1"
                >
                  <div className="relative mb-6">
                    <div className="absolute inset-0 rounded-full bg-emerald-400/20 animate-ping" />
                    <div className="relative rounded-full bg-emerald-50 p-5 dark:bg-emerald-950/40 text-emerald-600 border border-emerald-100 dark:border-emerald-900">
                      <CheckCircle className="h-12 w-12 text-emerald-600 dark:text-emerald-400" />
                    </div>
                  </div>
                  <h4 className="text-2xl font-extrabold text-[#0B1F3A] dark:text-white mb-2 tracking-tight">Slot Reserved Successfully!</h4>
                  <div className="h-0.5 w-12 bg-emerald-500 mx-auto mb-4 rounded-full" />
                  <p className="text-sm text-gray-600 dark:text-zinc-300 leading-relaxed max-w-sm mb-8">
                    Thank you, <strong className="text-blue-600 dark:text-blue-400">{formData.name}</strong>. Your slot for{" "}
                    <strong className="text-[#0B1F3A] dark:text-white">{formData.doctor}</strong> on{" "}
                    <strong className="text-[#0B1F3A] dark:text-white">{formData.date}</strong> is registered.
                    Our front desk will call you shortly to confirm your timing.
                  </p>
                  <button onClick={handleReset}
                    className="rounded-xl bg-[#0B1F3A] py-3.5 px-8 text-sm font-bold text-white hover:bg-navy-900 transition-all dark:bg-zinc-700 dark:hover:bg-zinc-600">
                    Book Another Appointment
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ── Right Column ── */}
          <div className="lg:col-span-5 flex flex-col gap-5 justify-between">

            {/* WhatsApp Card */}
            <div className="rounded-[32px] bg-gradient-to-br from-[#EAF3FF] to-white dark:from-zinc-850 dark:to-zinc-900 p-6 border border-blue-100 dark:border-zinc-800 shadow-md flex flex-col justify-between flex-1 min-h-[220px]">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-extrabold text-blue-600 dark:text-blue-400 uppercase tracking-widest">WhatsApp Consultation</span>
                  <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-[9px] font-bold text-emerald-700 uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Online Now
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#0B1F3A] dark:text-white mb-2">Book Instantly via WhatsApp</h3>
                <p className="text-xs text-gray-500 dark:text-zinc-400 leading-relaxed">
                  Skip the form entirely! Chat directly with our scheduling assistant to book and verify slots instantly.
                </p>

                {/* Typing indicator */}
                <div className="mt-3 flex items-center gap-2">
                  <div className="flex items-center gap-1 px-3 py-1.5 bg-white dark:bg-zinc-800 rounded-full border border-gray-100 dark:border-zinc-700 shadow-sm">
                    <MessageSquare className="h-3 w-3 text-emerald-500" />
                    <span className="text-[10px] text-gray-500 font-medium">Kumar Hospital is typing</span>
                    <span className="flex gap-0.5 ml-0.5">
                      {[0, 150, 300].map((delay) => (
                        <span key={delay} className="w-1 h-1 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: `${delay}ms` }} />
                      ))}
                    </span>
                  </div>
                </div>
              </div>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/919440275556?text=I%20want%20to%20book%20an%20OPD%20appointment%20with%20Kumar%20Hospital"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 transition-all mt-5 cursor-pointer"
              >
                <svg viewBox="0 0 24 24" className="h-4.5 w-4.5 fill-white stroke-none">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.863-9.847.001-2.63-1.023-5.101-2.885-6.963C16.531 1.932 14.06 .907 11.433.907c-5.434 0-9.858 4.414-9.861 9.848-.001 1.942.507 3.834 1.47 5.514L2.017 21.6l5.522-1.446zM17.472 14.382c-.301-.15-1.78-.879-2.057-.98-.277-.101-.478-.15-.678.15-.199.299-.773.979-.949 1.179-.176.2-.351.224-.652.074-1.022-.512-1.795-.877-2.507-1.492-.562-.487-.887-1.077-.997-1.272-.11-.2-.012-.307.088-.407.089-.09.199-.232.299-.348.101-.115.134-.199.199-.332.066-.133.033-.25-.016-.35-.05-.1-.478-1.15-.655-1.579-.173-.414-.347-.358-.478-.365-.123-.006-.264-.007-.406-.007-.142 0-.374.053-.57.266-.197.213-.753.737-.753 1.798 0 1.06.773 2.083.88 2.233.107.15 1.52 2.32 3.682 3.253.514.223.916.356 1.229.456.518.165.989.141 1.361.086.415-.062 1.78-.727 2.031-1.43.252-.703.252-1.306.176-1.43-.076-.124-.277-.199-.578-.35" />
                </svg>
                <span>Chat & Book Instantly</span>
              </motion.a>
            </div>

            {/* Clinical Assurances */}
            <div className="rounded-[32px] border border-gray-150 dark:border-zinc-800 p-6 flex flex-col justify-between bg-[#F8FAFC] dark:bg-zinc-850 shadow-sm flex-1">
              <div>
                <h4 className="text-xs font-bold text-[#0B1F3A] dark:text-white uppercase tracking-wider mb-4 flex items-center gap-1.5">
                  <ShieldCheck className="h-4.5 w-4.5 text-blue-600 dark:text-blue-400" />
                  <span>Clinical Assurances</span>
                </h4>
                <ul className="space-y-3 text-xs text-gray-500 dark:text-zinc-400 leading-normal">
                  {[
                    "100% HIPAA-compliant record management.",
                    "Pre-authorization cashless support for insurance panels.",
                    "Emergency admissions triaged immediately 24/7.",
                    "Confirmed appointment slot via SMS callback.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 group">
                      <CheckCircle className="h-3.5 w-3.5 text-blue-500 flex-shrink-0 mt-0.5 group-hover:text-teal-500 transition-colors" />
                      <span className="group-hover:text-gray-700 dark:group-hover:text-zinc-200 transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-5 pt-4 border-t border-gray-200/60 dark:border-zinc-800 text-[10px] text-gray-400 font-semibold tracking-wider text-center uppercase">
                Apollo Standard Hospital Infrastructure
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
