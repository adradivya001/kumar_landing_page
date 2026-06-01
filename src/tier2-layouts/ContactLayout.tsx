"use client";

import { useState } from "react";
import { MapPin, Phone, MessageSquare, Send, CheckCircle, Clock } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      alert("Please fill in the required fields.");
      return;
    }

    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "General Inquiry",
        message: "",
      });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-zinc-950 font-sans relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/20 px-3 py-1.5 rounded-md">
            Find Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-800 dark:text-white mt-4 tracking-tight">
            Contact Us &amp; Locate Hospital
          </h2>
          <div className="h-1 w-20 bg-teal-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-stretch">
          
          {/* Column 1: Hospital Details (5/12 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-navy-800 dark:text-white">
                Get in Touch Directly
              </h3>
              <p className="text-sm text-gray-500 dark:text-zinc-400 leading-relaxed">
                If you have an emergency, please call our hotline immediately. For general inquiries, consultations, or documentation queries, feel free to drop us a message or chat via WhatsApp.
              </p>

              {/* Address card */}
              <div className="flex gap-4 items-start bg-white dark:bg-zinc-900 p-5 rounded-2xl border border-gray-100 dark:border-zinc-800 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 dark:bg-teal-900/30 text-teal-600 flex-shrink-0 mt-1">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-sm font-bold text-navy-800 dark:text-white">Clinic Address</span>
                  <span className="text-sm text-gray-600 dark:text-zinc-300 leading-relaxed mt-1 block">
                    12-4, 80 Feet Road, Vidyuth Nagar,<br />
                    Housing Board Colony, Anantapur,<br />
                    Andhra Pradesh 515001, India
                  </span>
                </div>
              </div>

              {/* Contact lines */}
              <div className="flex gap-4 items-start bg-white dark:bg-zinc-900 p-5 rounded-2xl border border-gray-100 dark:border-zinc-800 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 dark:bg-teal-900/30 text-teal-600 flex-shrink-0 mt-1">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <span className="block text-sm font-bold text-navy-800 dark:text-white">Phone Contacts</span>
                  <a href="tel:+918554245678" className="block text-sm text-gray-600 dark:text-zinc-300 hover:text-teal-600 transition-colors">
                    Emergency: 08554-245678
                  </a>
                  <a href="tel:+919440275556" className="block text-sm text-gray-600 dark:text-zinc-300 hover:text-teal-600 transition-colors">
                    OPD Desk: +91 94402 75556
                  </a>
                </div>
              </div>

              {/* WhatsApp direct links */}
              <div className="flex gap-4 items-start bg-white dark:bg-zinc-900 p-5 rounded-2xl border border-gray-100 dark:border-zinc-800 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 dark:bg-teal-900/30 text-teal-600 flex-shrink-0 mt-1">
                  <MessageSquare className="h-5 w-5 text-teal-600" />
                </div>
                <div>
                  <span className="block text-sm font-bold text-navy-800 dark:text-white">WhatsApp Inquiry</span>
                  <a
                    href="https://wa.me/919440275556?text=Hello%20Kumar%20Hospital,%20I%20have%20an%20inquiry."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:underline mt-1"
                  >
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Consulting times overlay */}
            <div className="bg-navy-850 text-white p-5 rounded-2xl border border-navy-800 flex gap-3.5 items-start">
              <Clock className="h-5 w-5 text-teal-400 flex-shrink-0 mt-0.5 animate-float" />
              <div className="text-xs space-y-1">
                <span className="font-extrabold text-teal-300 uppercase tracking-wider block">Consultation Timings</span>
                <span className="block text-gray-200">Monday - Saturday: 9:00 AM - 8:00 PM</span>
                <span className="block text-red-300 font-bold">24 Hours Emergency &amp; Accident Trauma Care</span>
              </div>
            </div>
          </div>

          {/* Column 2: Maps & Form Panel (7/12 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Interactive Map Embed */}
            <div className="relative w-full h-[280px] rounded-3xl overflow-hidden shadow-sm border border-gray-200 dark:border-zinc-800 bg-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.4287895315806!2d77.58552147573031!3d14.660600175628588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb14ab59e219491%3A0x6b19a16f2c79f3cf!2sVidyut%20Nagar%2080%20Feet%20Rd%2C%20Vidyut%20Nagar%2C%20Anantapur%2C%20Andhra%20Pradesh%20515001!5e0!3m2!1sen!2sin!4v1716658000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kumar Hospital Location Map"
              ></iframe>
            </div>

            {/* Contact Form */}
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-gray-150 dark:border-zinc-800 shadow-sm flex flex-col justify-center flex-1">
              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h4 className="text-lg font-bold text-navy-800 dark:text-white">
                    Send a Quick Message
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wider">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full text-sm rounded-lg border border-gray-200 bg-gray-50 p-2.5 outline-none transition-all focus:border-navy-500 focus:bg-white dark:border-zinc-800 dark:bg-zinc-800 dark:text-white dark:focus:border-teal-500"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wider">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="10-digit mobile number"
                        className="w-full text-sm rounded-lg border border-gray-200 bg-gray-50 p-2.5 outline-none transition-all focus:border-navy-500 focus:bg-white dark:border-zinc-800 dark:bg-zinc-800 dark:text-white dark:focus:border-teal-500"
                      />
                    </div>
                  </div>

                  {/* Email & Subject */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wider">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full text-sm rounded-lg border border-gray-200 bg-gray-50 p-2.5 outline-none transition-all focus:border-navy-500 focus:bg-white dark:border-zinc-800 dark:bg-zinc-800 dark:text-white dark:focus:border-teal-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wider">
                        Subject
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full text-sm rounded-lg border border-gray-200 bg-gray-50 p-2.5 outline-none transition-all focus:border-navy-500 focus:bg-white dark:border-zinc-800 dark:bg-zinc-800 dark:text-white dark:focus:border-teal-500"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Appointment Help">Appointment Help</option>
                        <option value="Physiotherapy Inquiry">Physiotherapy Inquiry</option>
                        <option value="Feedback">Feedback</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wider">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your question or request details here..."
                      className="w-full text-sm rounded-lg border border-gray-200 bg-gray-50 p-3 outline-none transition-all focus:border-navy-500 focus:bg-white dark:border-zinc-800 dark:bg-zinc-800 dark:text-white dark:focus:border-teal-500 resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-navy-800 py-3 text-sm font-bold text-white transition-all hover:bg-navy-950 dark:bg-teal-600 dark:hover:bg-teal-700 disabled:opacity-50"
                  >
                    <Send className="h-4 w-4" />
                    <span>{isSubmitting ? "Sending message..." : "Send Inquiry"}</span>
                  </button>
                </form>
              ) : (
                /* Success view */
                <div className="flex flex-col items-center justify-center py-6 text-center">
                  <div className="mb-3 rounded-full bg-teal-50 dark:bg-teal-900/20 p-2 text-teal-650">
                    <CheckCircle className="h-10 w-10" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">Message Sent!</h4>
                  <p className="max-w-xs text-xs text-gray-550 dark:text-zinc-400 mt-2 mb-4">
                    Thank you. We have received your inquiry. Our front-office helpdesk will get in touch with you shortly.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="text-xs font-bold text-teal-600 hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
