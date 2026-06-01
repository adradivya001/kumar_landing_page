"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Phone, User, Stethoscope, Clock, CheckCircle } from "lucide-react";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.date) {
      alert("Please fill in all required fields.");
      return;
    }
    
    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
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
    setIsSuccess(false);
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
            className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl glow-navy dark:bg-zinc-900"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-100 bg-navy-800 px-6 py-4 text-white dark:border-zinc-800">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-teal-100" />
                <h3 className="text-lg font-semibold tracking-tight">Book an Appointment</h3>
              </div>
              <button
                onClick={onClose}
                className="rounded-full p-1 text-navy-200 transition-colors hover:bg-navy-700 hover:text-white"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content Body */}
            <div className="p-6">
              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <p className="text-sm text-gray-500 dark:text-zinc-400">
                    Fill in your details below. Our medical coordinator will reach out to you within 2 hours to confirm your slot.
                  </p>

                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-zinc-400 mb-1">
                      Patient Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2.5 pl-10 pr-4 text-sm outline-none transition-all focus:border-navy-500 focus:bg-white focus:ring-2 focus:ring-navy-100 dark:border-zinc-800 dark:bg-zinc-800 dark:text-white dark:focus:border-teal-500 dark:focus:ring-teal-900/30"
                      />
                    </div>
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-zinc-400 mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
                      <input
                        type="tel"
                        required
                        pattern="[0-9]{10}"
                        placeholder="10-digit mobile number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2.5 pl-10 pr-4 text-sm outline-none transition-all focus:border-navy-500 focus:bg-white focus:ring-2 focus:ring-navy-100 dark:border-zinc-800 dark:bg-zinc-800 dark:text-white dark:focus:border-teal-500 dark:focus:ring-teal-900/30"
                      />
                    </div>
                  </div>

                  {/* Two column layouts */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {/* Specialty Selection */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-zinc-400 mb-1">
                        Specialty
                      </label>
                      <div className="relative">
                        <Stethoscope className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
                        <select
                          value={formData.specialty}
                          onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                          className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2.5 pl-10 pr-4 text-sm outline-none transition-all focus:border-navy-500 focus:bg-white focus:ring-2 focus:ring-navy-100 dark:border-zinc-800 dark:bg-zinc-800 dark:text-white dark:focus:border-teal-500 dark:focus:ring-teal-900/30 appearance-none"
                        >
                          <option value="Orthopedics">Orthopedics & Spine</option>
                          <option value="General Medicine">General Medicine</option>
                          <option value="Physiotherapy">Physiotherapy & Rehab</option>
                          <option value="Emergency Care">Emergency & Trauma</option>
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
                        className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2.5 px-3 text-sm outline-none transition-all focus:border-navy-500 focus:bg-white focus:ring-2 focus:ring-navy-100 dark:border-zinc-800 dark:bg-zinc-800 dark:text-white dark:focus:border-teal-500 dark:focus:ring-teal-900/30"
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
                          className={`flex items-center justify-center gap-1 rounded-lg border py-2 text-xs font-medium transition-all ${
                            formData.time === slot
                              ? "border-navy-500 bg-navy-50 text-navy-800 dark:border-teal-500 dark:bg-teal-900/20 dark:text-teal-400"
                              : "border-gray-200 bg-white text-gray-600 hover:bg-gray-50 dark:border-zinc-800 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
                          }`}
                        >
                          <Clock className="h-3 w-3" />
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-zinc-400 mb-1">
                      Brief Message / Symptoms (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Describe your health issue or specify if you need a follow-up consultation"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-lg border border-gray-200 bg-gray-50 p-3 text-sm outline-none transition-all focus:border-navy-500 focus:bg-white focus:ring-2 focus:ring-navy-100 dark:border-zinc-800 dark:bg-zinc-800 dark:text-white dark:focus:border-teal-500 dark:focus:ring-teal-900/30 resize-none"
                    />
                  </div>

                  {/* Submit buttons */}
                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={onClose}
                      className="flex-1 rounded-lg border border-gray-200 py-2.5 text-sm font-semibold text-gray-600 transition-colors hover:bg-gray-50 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-[2] rounded-lg bg-teal-600 py-2.5 text-sm font-semibold text-white shadow-lg shadow-teal-600/20 transition-all hover:bg-teal-700 active:scale-98 disabled:opacity-50"
                    >
                      {isSubmitting ? "Submitting..." : "Confirm Booking Request"}
                    </button>
                  </div>
                </form>
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
                    className="mb-4 rounded-full bg-teal-50 p-3 dark:bg-teal-900/20"
                  >
                    <CheckCircle className="h-14 w-14 text-teal-600" />
                  </motion.div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Request Received!</h4>
                  <p className="max-w-xs text-sm text-gray-500 dark:text-zinc-400 mb-6">
                    Thank you, <strong className="text-gray-800 dark:text-white">{formData.name}</strong>. We have registered your request for <strong className="text-gray-800 dark:text-white">{formData.specialty}</strong> on <strong className="text-gray-800 dark:text-white">{formData.date}</strong>. Our staff will contact you via phone shortly.
                  </p>
                  <button
                    onClick={handleReset}
                    className="w-full max-w-[200px] rounded-lg bg-navy-800 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-900 dark:bg-teal-600 dark:hover:bg-teal-700"
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
