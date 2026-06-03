"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Phone, User, Stethoscope, Clock, CheckCircle, ChevronRight, ChevronLeft, ShieldCheck } from "lucide-react";
import { supabase } from "@/lib/supabase";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AppointmentModal({ isOpen, onClose }: AppointmentModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    specialty: "Orthopedics",
    date: "",
    time: "Morning",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleNext = () => {
    if (step === 1) {
      if (!formData.specialty || !formData.date || !formData.time) {
        alert("Please select specialty, preferred date, and time slot.");
        return;
      }
    }
    if (step === 2) {
      if (!formData.name || !formData.phone) {
        alert("Please enter patient name and valid contact details.");
        return;
      }
      if (formData.phone.length !== 10) {
        alert("Please enter a valid 10-digit phone number.");
        return;
      }
    }
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);
    const { error: insertError } = await supabase.from("appointments").insert({
      patient_name: formData.name,
      phone: formData.phone,
      department: formData.specialty,
      preferred_date: formData.date,
      time_slot: formData.time,
      symptoms: formData.message || null,
      source: "appointment_modal",
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
      specialty: "Orthopedics",
      date: "",
      time: "Morning",
      message: "",
    });
    setStep(1);
    setIsSuccess(false);
    onClose();
  };

  const stepsInfo = [
    { num: 1, label: "Consultation" },
    { num: 2, label: "Patient Info" },
    { num: 3, label: "Confirm Slot" },
  ];

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
                className="rounded-full p-1.5 text-navy-200 transition-all hover:bg-navy-700 hover:text-white relative z-10"
                aria-label="Close modal"
              >
                <X className="h-4.5 w-4.5" />
              </button>
            </div>

            {/* Step Progress Bar Indicator */}
            {!isSuccess && (
              <div className="bg-gray-50 dark:bg-zinc-850 px-6 py-4 border-b border-gray-100 dark:border-zinc-800">
                <div className="flex items-center justify-between max-w-md mx-auto relative">
                  {/* Progress Line */}
                  <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 dark:bg-zinc-700 -translate-y-1/2 z-0" />
                  <div 
                    className="absolute top-1/2 left-0 h-0.5 bg-teal-600 dark:bg-teal-500 -translate-y-1/2 z-0 transition-all duration-300"
                    style={{ width: `${((step - 1) / (stepsInfo.length - 1)) * 100}%` }}
                  />

                  {stepsInfo.map((s) => (
                    <div key={s.num} className="flex flex-col items-center relative z-10">
                      <div 
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 border ${
                          step >= s.num 
                            ? "bg-teal-600 border-teal-600 text-white dark:bg-teal-500 dark:border-teal-500" 
                            : "bg-white border-gray-200 text-gray-400 dark:bg-zinc-800 dark:border-zinc-700"
                        }`}
                      >
                        {step > s.num ? <CheckCircle className="w-4 h-4 stroke-[3]" /> : s.num}
                      </div>
                      <span className="text-[10px] font-bold mt-1 uppercase tracking-wider text-gray-500 dark:text-zinc-400">
                        {s.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Content Body */}
            <div className="p-6">
              {!isSuccess ? (
                <div className="min-h-[280px] flex flex-col justify-between">
                  {/* Form Step Contents with AnimatePresence */}
                  <AnimatePresence mode="wait">
                    {step === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        className="space-y-4"
                      >
                        <p className="text-xs text-gray-500 dark:text-zinc-400">
                          Select the clinical specialty and your preferred timing slot below.
                        </p>

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
                              className="w-full rounded-lg border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 text-sm outline-none transition-all focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-100 dark:border-zinc-800 dark:bg-zinc-800 dark:text-white dark:focus:border-teal-500 dark:focus:ring-teal-900/30 appearance-none"
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
                          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-zinc-400 mb-1">
                            Preferred Date <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="date"
                            required
                            min={new Date().toISOString().split("T")[0]}
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            className="w-full rounded-lg border border-gray-200 bg-gray-50 py-3 px-3 text-sm outline-none transition-all focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-100 dark:border-zinc-800 dark:bg-zinc-800 dark:text-white dark:focus:border-teal-500"
                          />
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
                                className={`flex items-center justify-center gap-1.5 rounded-lg border py-2.5 text-xs font-bold transition-all ${
                                  formData.time === slot
                                    ? "border-teal-600 bg-teal-50 text-teal-800 dark:border-teal-500 dark:bg-teal-900/20 dark:text-teal-400"
                                    : "border-gray-200 bg-white text-gray-600 hover:bg-gray-50 dark:border-zinc-800 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
                                }`}
                              >
                                <Clock className="h-3.5 w-3.5" />
                                {slot}
                              </button>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        className="space-y-4"
                      >
                        <p className="text-xs text-gray-500 dark:text-zinc-400">
                          Please enter the patient&apos;s name and phone number for authentication and status updates.
                        </p>

                        {/* Name Input */}
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-zinc-400 mb-1">
                            Patient Full Name <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <User className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-teal-600" />
                            <input
                              type="text"
                              required
                              placeholder="Jane Doe"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              className="w-full rounded-lg border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 text-sm outline-none transition-all focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-100 dark:border-zinc-800 dark:bg-zinc-800 dark:text-white dark:focus:border-teal-500"
                            />
                          </div>
                        </div>

                        {/* Phone Input */}
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-zinc-400 mb-1">
                            Contact Phone Number <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <Phone className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-teal-600" />
                            <input
                              type="tel"
                              required
                              pattern="[0-9]{10}"
                              placeholder="10-digit mobile number"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              className="w-full rounded-lg border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 text-sm outline-none transition-all focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-100 dark:border-zinc-800 dark:bg-zinc-800 dark:text-white dark:focus:border-teal-500"
                            />
                          </div>
                        </div>

                        {/* Message Input */}
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-zinc-400 mb-1">
                            Describe Symptoms / Condition (Optional)
                          </label>
                          <textarea
                            rows={3}
                            placeholder="Brief description of bone, joint, or other medical symptoms..."
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="w-full rounded-lg border border-gray-200 bg-gray-50 p-3 text-sm outline-none transition-all focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-100 dark:border-zinc-800 dark:bg-zinc-800 dark:text-white dark:focus:border-teal-500 resize-none"
                          />
                        </div>
                      </motion.div>
                    )}

                    {step === 3 && (
                      <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        className="space-y-4"
                      >
                        <div className="rounded-2xl border border-teal-100 bg-teal-50/30 p-5 dark:border-teal-900/20 dark:bg-teal-950/10">
                          <h4 className="text-xs font-bold text-teal-800 dark:text-teal-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                            <ShieldCheck className="w-4.5 h-4.5" />
                            <span>Verify Consultation Summary</span>
                          </h4>

                          <div className="space-y-2.5 text-sm text-gray-600 dark:text-zinc-300">
                            <div className="flex justify-between border-b border-gray-100/50 pb-2 dark:border-zinc-800/50">
                              <span className="text-gray-400 text-xs">Patient Name</span>
                              <span className="font-bold text-gray-800 dark:text-white">{formData.name}</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-100/50 pb-2 dark:border-zinc-800/50">
                              <span className="text-gray-400 text-xs">Phone Number</span>
                              <span className="font-bold text-gray-800 dark:text-white">+91 {formData.phone}</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-100/50 pb-2 dark:border-zinc-800/50">
                              <span className="text-gray-400 text-xs">Clinical Specialty</span>
                              <span className="font-bold text-teal-600 dark:text-teal-400">{formData.specialty}</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-100/50 pb-2 dark:border-zinc-800/50">
                              <span className="text-gray-400 text-xs">Consultation Date</span>
                              <span className="font-bold text-gray-800 dark:text-white">{formData.date}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400 text-xs">Preferred Time</span>
                              <span className="font-bold text-gray-800 dark:text-white">{formData.time} Slot</span>
                            </div>
                          </div>
                        </div>

                        <p className="text-[10px] text-gray-400 dark:text-zinc-500 leading-relaxed text-center">
                          By confirming, you agree to receive a callback on your provided phone number to stabilize your OPD scheduling block.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Error message */}
                  {error && (
                    <p className="text-xs text-red-500 font-semibold text-center mt-3">{error}</p>
                  )}

                  {/* Navigation Buttons inside Modal Content */}
                  <div className="flex gap-3 pt-6 border-t border-gray-100 dark:border-zinc-800 mt-4">
                    {step > 1 ? (
                      <button
                        type="button"
                        onClick={handleBack}
                        className="flex-1 flex items-center justify-center gap-1.5 rounded-xl border border-gray-200 py-3 text-sm font-bold text-gray-600 transition-colors hover:bg-gray-50 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800"
                      >
                        <ChevronLeft className="h-4 w-4" />
                        <span>Back</span>
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={onClose}
                        className="flex-1 rounded-xl border border-gray-200 py-3 text-sm font-bold text-gray-500 transition-colors hover:bg-gray-50 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800"
                      >
                        Cancel
                      </button>
                    )}

                    {step < 3 ? (
                      <button
                        type="button"
                        onClick={handleNext}
                        className="flex-[2] flex items-center justify-center gap-1.5 rounded-xl bg-teal-600 py-3 text-sm font-bold text-white shadow-lg shadow-teal-600/20 transition-all hover:bg-teal-700 active:scale-98"
                      >
                        <span>Next Step</span>
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    ) : (
                      <button
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="flex-[2] rounded-xl bg-teal-600 py-3 text-sm font-bold text-white shadow-lg shadow-teal-600/20 transition-all hover:bg-teal-700 active:scale-98 disabled:opacity-50"
                      >
                        {isSubmitting ? "Generating Slot..." : "Confirm & Send Request"}
                      </button>
                    )}
                  </div>
                </div>
              ) : (
                /* Success Screen */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-8 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="mb-4 rounded-full bg-emerald-50 p-4 dark:bg-emerald-950/20 text-emerald-600"
                  >
                    <CheckCircle className="h-14 w-14 text-emerald-600 dark:text-emerald-400" />
                  </motion.div>
                  <h4 className="text-xl font-black text-gray-900 dark:text-white mb-2">OPD Request Confirmed!</h4>
                  <p className="max-w-xs text-xs text-gray-500 dark:text-zinc-400 mb-6 leading-relaxed">
                    Thank you, <strong className="text-gray-800 dark:text-white">{formData.name}</strong>. We have registered your request for <strong className="text-gray-800 dark:text-white">{formData.specialty}</strong> on <strong className="text-gray-800 dark:text-white">{formData.date}</strong> in the <strong className="text-gray-800 dark:text-white">{formData.time}</strong> slot. 
                    Our coordinator will call you back shortly.
                  </p>
                  <button
                    onClick={handleReset}
                    className="w-full max-w-[200px] rounded-xl bg-navy-800 py-3 text-sm font-bold text-white transition-all hover:bg-navy-900 dark:bg-teal-600 dark:hover:bg-teal-700 active:scale-98"
                  >
                    Back to Home
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

