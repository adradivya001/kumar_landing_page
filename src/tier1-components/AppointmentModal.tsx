"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Phone, User, Stethoscope, Clock, CheckCircle, ChevronRight, ChevronLeft, ShieldCheck, AlertCircle } from "lucide-react";
import { supabase } from "@/lib/supabase";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ValidationErrors {
  name?: string;
  phone?: string;
  date?: string;
}

export default function AppointmentModal({ isOpen, onClose }: AppointmentModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    specialty: "Orthopedics",
    date: "",
    time: "Morning",
    message: "",
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [dbError, setDbError] = useState("");

  // Validate fields in real-time
  useEffect(() => {
    const newErrors: ValidationErrors = {};

    if (touched.name) {
      if (!formData.name) {
        newErrors.name = "Patient name is required.";
      } else if (formData.name.trim().length < 2) {
        newErrors.name = "Name must be at least 2 characters.";
      } else if (!/^[A-Za-z\s.]+$/.test(formData.name)) {
        newErrors.name = "Name can only contain letters, spaces, and dots.";
      }
    }

    if (touched.phone) {
      if (!formData.phone) {
        newErrors.phone = "Phone number is required.";
      } else if (!/^\d{10}$/.test(formData.phone)) {
        newErrors.phone = "Phone number must be exactly 10 digits.";
      }
    }

    if (touched.date) {
      if (!formData.date) {
        newErrors.date = "Preferred date is required.";
      } else {
        const selectedDate = new Date(formData.date);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (selectedDate < today) {
          newErrors.date = "Preferred date cannot be in the past.";
        }
      }
    }

    setErrors(newErrors);
  }, [formData, touched]);

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
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
      finalErrors.phone = "Please enter a valid 10-digit phone number.";
    }
    if (!formData.date) {
      finalErrors.date = "Please select preferred date.";
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        finalErrors.date = "Preferred date cannot be in the past.";
      }
    }

    if (Object.keys(finalErrors).length > 0) {
      setErrors(finalErrors);
      return;
    }

    setIsSubmitting(true);
    const { error: insertError } = await supabase.from("appointments").insert({
      patient_name: formData.name.trim(),
      phone: formData.phone,
      department: formData.specialty,
      preferred_date: formData.date,
      time_slot: formData.time,
      symptoms: formData.message || null,
      source: "appointment_modal",
    });
    setIsSubmitting(false);

    if (insertError) {
      setDbError("System Offline: Unable to process booking. Please try calling us directly.");
    } else {
      setIsSuccess(true);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phone: "",
      specialty: "Orthopedics",
      date: "",
      time: "Morning",
      message: "",
    });
    setErrors({});
    setTouched({});
    setIsSuccess(false);
    setDbError("");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-navy-900/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl glow-navy dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-100 bg-navy-800 px-6 py-5 text-white dark:border-zinc-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-teal-500/10 blur-xl pointer-events-none" />
              <div className="flex items-center gap-2 relative z-10">
                <Calendar className="h-5 w-5 text-teal-300 animate-float" />
                <div>
                  <h3 className="text-lg font-bold tracking-tight">Schedule Consultation</h3>
                  <p className="text-[10px] text-teal-100 uppercase tracking-widest font-semibold mt-0.5">Kumar Ortho & Multi-Speciality</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="rounded-full p-1.5 text-navy-200 transition-all hover:bg-navy-700 hover:text-white relative z-10 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="h-4.5 w-4.5" />
              </button>
            </div>

            {/* Content Body */}
            <div className="p-6">
              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <p className="text-xs text-gray-500 dark:text-zinc-400">
                    Please fill out the details below to request your consultation slot.
                  </p>

                  {/* Name Input */}
                  <div>
                    <label className="flex justify-between items-center text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-zinc-400 mb-1">
                      <span>Patient Full Name <span className="text-red-500">*</span></span>
                      {errors.name && <span className="text-[10px] text-red-500 font-semibold flex items-center gap-1"><AlertCircle className="h-3 w-3" /> {errors.name}</span>}
                    </label>
                    <div className="relative">
                      <User className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-teal-600" />
                      <input
                        type="text"
                        required
                        placeholder="Enter patient full name"
                        value={formData.name}
                        onBlur={() => handleBlur("name")}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full rounded-lg border py-2.5 pl-10 pr-4 text-sm outline-none transition-all ${
                          errors.name 
                            ? "border-red-400 ring-2 ring-red-100 dark:ring-red-950/20" 
                            : "border-gray-200 bg-gray-50 focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-400/20 dark:border-zinc-800 dark:bg-zinc-800 dark:text-white dark:focus:border-teal-500"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label className="flex justify-between items-center text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-zinc-400 mb-1">
                      <span>Contact Phone Number <span className="text-red-500">*</span></span>
                      {errors.phone && <span className="text-[10px] text-red-500 font-semibold flex items-center gap-1"><AlertCircle className="h-3 w-3" /> {errors.phone}</span>}
                    </label>
                    <div className="relative">
                      <Phone className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-teal-600" />
                      <input
                        type="tel"
                        required
                        placeholder="10-digit mobile number"
                        value={formData.phone}
                        onBlur={() => handleBlur("phone")}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, "").slice(0, 10) })}
                        className={`w-full rounded-lg border py-2.5 pl-10 pr-4 text-sm outline-none transition-all ${
                          errors.phone 
                            ? "border-red-400 ring-2 ring-red-100 dark:ring-red-950/20" 
                            : "border-gray-200 bg-gray-50 focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-400/20 dark:border-zinc-800 dark:bg-zinc-800 dark:text-white dark:focus:border-teal-500"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Grid for Specialty & Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Specialty Selection */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-zinc-400 mb-1">
                        Clinical Specialty
                      </label>
                      <div className="relative">
                        <Stethoscope className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-teal-600" />
                        <select
                          value={formData.specialty}
                          onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                          className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2.5 pl-10 pr-4 text-sm outline-none transition-all focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-400/20 dark:border-zinc-800 dark:bg-zinc-800 dark:text-white dark:focus:border-teal-500 appearance-none cursor-pointer"
                        >
                          <option value="Orthopedics">Orthopedics & Spine Care</option>
                          <option value="General Medicine">General & Preventive Medicine</option>
                          <option value="Physiotherapy">Physiotherapy & Rehabilitation</option>
                          <option value="Emergency Care">Emergency & Trauma Unit</option>
                        </select>
                      </div>
                    </div>

                    {/* Date Picker */}
                    <div>
                      <label className="flex justify-between items-center text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-zinc-400 mb-1">
                        <span>Preferred Date <span className="text-red-500">*</span></span>
                        {errors.date && <span className="text-[10px] text-red-500 font-semibold flex items-center gap-1"><AlertCircle className="h-3 w-3" /> {errors.date}</span>}
                      </label>
                      <input
                        type="date"
                        required
                        min={new Date().toISOString().split("T")[0]}
                        value={formData.date}
                        onBlur={() => handleBlur("date")}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className={`w-full rounded-lg border py-2.5 px-3 text-sm outline-none transition-all ${
                          errors.date 
                            ? "border-red-400 ring-2 ring-red-100 dark:ring-red-950/20" 
                            : "border-gray-200 bg-gray-50 focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-400/20 dark:border-zinc-800 dark:bg-zinc-800 dark:text-white dark:focus:border-teal-500"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Time Preferences */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-zinc-400 mb-2">
                      Preferred Time Slot
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {["Morning", "Afternoon", "Evening"].map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setFormData({ ...formData, time: slot })}
                          className={`flex items-center justify-center gap-1.5 rounded-lg border py-2 text-xs font-bold transition-all cursor-pointer ${
                            formData.time === slot
                              ? "border-teal-600 bg-teal-50/30 text-teal-800 dark:border-teal-500 dark:bg-teal-900/20 dark:text-teal-400"
                              : "border-gray-200 bg-white text-gray-600 hover:bg-gray-50 dark:border-zinc-800 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
                          }`}
                        >
                          <Clock className="h-3.5 w-3.5" />
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-zinc-400 mb-1">
                      Describe Symptoms / Condition (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Brief description of symptoms..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-lg border border-gray-200 bg-gray-50 p-3 text-sm outline-none transition-all focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-400/20 dark:border-zinc-800 dark:bg-zinc-800 dark:text-white dark:focus:border-teal-500 resize-none"
                    />
                  </div>

                  {/* DB Error message */}
                  {dbError && (
                    <div className="rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 p-2.5 flex gap-2 items-center mt-3">
                      <AlertCircle className="h-4.5 w-4.5 text-red-500 flex-shrink-0" />
                      <p className="text-xs text-red-600 dark:text-red-400 font-semibold">{dbError}</p>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex gap-3 pt-4 border-t border-gray-100 dark:border-zinc-800 mt-4">
                    <button
                      type="button"
                      onClick={onClose}
                      className="flex-1 rounded-xl border border-gray-200 py-3 text-sm font-bold text-gray-500 transition-colors hover:bg-gray-50 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800 cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-[2] rounded-xl bg-teal-600 py-3 text-sm font-bold text-white shadow-lg shadow-teal-600/20 transition-all hover:bg-teal-700 active:scale-98 disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? "Generating Slot..." : "Confirm & Send Request"}
                    </button>
                  </div>
                </form>
              ) : (
                /* Success Screen Overlay with bounce-in animations */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-8 text-center"
                >
                  <div className="relative mb-5">
                    <div className="absolute inset-0 rounded-full bg-emerald-400/20 dark:bg-emerald-500/10 animate-ping" />
                    <div className="relative rounded-full bg-emerald-50 p-4 dark:bg-emerald-950/40 text-emerald-600 border border-emerald-100 dark:border-emerald-900">
                      <CheckCircle className="h-12 w-12 text-emerald-600 dark:text-emerald-400" />
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-extrabold text-[#0B1F3A] dark:text-white mb-2 tracking-tight">OPD Request Confirmed!</h4>
                  <div className="h-0.5 w-10 bg-emerald-500 mx-auto mb-4 rounded-full" />
                  
                  <p className="max-w-xs text-xs text-gray-500 dark:text-zinc-400 mb-6 leading-relaxed">
                    Thank you, <strong className="text-blue-600 dark:text-blue-400">{formData.name}</strong>. We have registered your request for <strong className="text-gray-800 dark:text-white">{formData.specialty}</strong> on <strong className="text-gray-800 dark:text-white">{formData.date}</strong> in the <strong className="text-gray-800 dark:text-white">{formData.time}</strong> slot. Our coordinator will call you back shortly.
                  </p>
                  
                  <button
                    onClick={handleReset}
                    className="w-full max-w-[200px] rounded-xl bg-navy-800 py-3 text-sm font-bold text-white transition-all hover:bg-navy-900 dark:bg-teal-600 dark:hover:bg-teal-700 active:scale-98 cursor-pointer"
                  >
                    Close Window
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
