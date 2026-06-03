"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, MessageSquare, Clock, Compass, Car, Info, ExternalLink } from "lucide-react";

export default function Contact() {
  const handleDirectionsClick = () => {
    window.open(
      "https://maps.google.com/?q=Vidyut+Nagar+80+Feet+Rd,+Vidyut+Nagar,+Anantapur,+Andhra+Pradesh+515001",
      "_blank"
    );
  };

  return (
    <section id="contact" className="py-14 bg-[#F8FAFC] dark:bg-zinc-950 font-sans relative overflow-hidden">
      {/* Background Decorative Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1.5 rounded-md">
            Locate & Visit Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] dark:text-white mt-4 tracking-tight">
            Hospital Location & Directions
          </h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 dark:text-zinc-400 mt-4 text-sm sm:text-base">
            Easily navigate to Kumar Hospital in Anantapur. Find precise driving directions, parking layout, and quick contact details.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch max-w-6xl mx-auto">
          
          {/* Left Column: Interactive Map Embed & Directions Action (7/12 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="relative w-full h-[380px] sm:h-[450px] rounded-[32px] overflow-hidden shadow-lg border border-gray-200 dark:border-zinc-800 bg-gray-100 group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.4287895315806!2d77.58552147573031!3d14.660600175628588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb14ab59e219491%3A0x6b19a16f2c79f3cf!2sVidyut%20Nagar%2080%20Feet%20Rd%2C%20Vidyut%20Nagar%2C%20Anantapur%2C%20Andhra%20Pradesh%20515001!5e0!3m2!1sen!2sin!4v1716658000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kumar Hospital Google Map"
                className="transition-transform duration-700 group-hover:scale-[1.01]"
              ></iframe>
              
              {/* Overlay floating action to open Google Maps */}
              <div className="absolute bottom-5 right-5 z-20">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleDirectionsClick}
                  className="flex items-center gap-2 bg-[#0B1F3A] hover:bg-navy-950 text-white text-xs font-bold px-4.5 py-2.5 rounded-xl shadow-xl transition-colors border border-navy-800"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </motion.button>
              </div>
            </div>

            {/* Directions & Key Landmarks Panel */}
            <div className="bg-white dark:bg-zinc-900 p-6 sm:p-8 rounded-[32px] border border-gray-150 dark:border-zinc-800 shadow-md">
              <h3 className="text-lg font-extrabold text-[#0B1F3A] dark:text-white mb-4 flex items-center gap-2">
                <Compass className="h-5 w-5 text-blue-600" />
                <span>How to Reach Kumar Hospital</span>
              </h3>
              
              <div className="space-y-4 text-xs sm:text-sm text-gray-600 dark:text-zinc-300">
                <div className="flex gap-3.5 items-start">
                  <div className="h-5 w-5 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center font-bold text-[10px] text-blue-600 mt-0.5 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <strong className="text-[#0B1F3A] dark:text-white block font-bold mb-0.5">From Anantapur RTC Bus Stand (Approx. 2.5 km)</strong>
                    Take the 80 Feet Road directly heading towards Vidyuth Nagar. Head straight past the Housing Board Colony arch. The hospital is prominently located on the main double road.
                  </div>
                </div>

                <div className="flex gap-3.5 items-start">
                  <div className="h-5 w-5 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center font-bold text-[10px] text-blue-600 mt-0.5 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <strong className="text-[#0B1F3A] dark:text-white block font-bold mb-0.5">From Anantapur Railway Station (Approx. 3.5 km)</strong>
                    Head north-east on Station Road towards Subash Road, join the main bypass line, then take the immediate left onto the Vidyuth Nagar double road junction.
                  </div>
                </div>

                <div className="flex gap-3.5 items-start">
                  <div className="h-5 w-5 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center font-bold text-[10px] text-blue-600 mt-0.5 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <strong className="text-[#0B1F3A] dark:text-white block font-bold mb-0.5">Key Landmarks</strong>
                    Right adjacent to the Vidyuth Nagar Housing Board Park, next to the main electrical substation avenue. Look for the large prominent modern blue Kumar Hospital glow sign boards.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Address, Contact Info, Parking Layout (5/12 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Primary Address Card */}
            <div className="bg-white dark:bg-zinc-900 p-6 sm:p-8 rounded-[32px] border border-gray-150 dark:border-zinc-800 shadow-md flex-1">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 mb-5">
                <MapPin className="h-5.5 w-5.5" />
              </div>
              
              <h3 className="text-xl font-extrabold text-[#0B1F3A] dark:text-white mb-2">Hospital Campus</h3>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-zinc-400 leading-relaxed mb-4">
                Kumar Hospital is easily accessible for patients coming from all corners of Anantapur District.
              </p>
              
              <address className="not-italic text-sm text-[#0B1F3A] dark:text-zinc-200 font-semibold leading-relaxed border-t border-gray-100 dark:border-zinc-800 pt-4">
                12-4, 80 Feet Road,<br />
                Vidyuth Nagar, Housing Board Colony,<br />
                Anantapur, Andhra Pradesh - 515001, India
              </address>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleDirectionsClick}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-3 px-4 rounded-xl shadow-md transition-colors"
                >
                  <span>Get Driving Directions</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* Parking & Accessibility layout */}
            <div className="bg-[#EAF3FF]/60 dark:bg-zinc-900 p-6 rounded-[32px] border border-blue-100 dark:border-zinc-800 shadow-sm">
              <h4 className="text-sm font-extrabold text-[#0B1F3A] dark:text-white mb-3.5 flex items-center gap-2">
                <Car className="h-4.5 w-4.5 text-blue-600" />
                <span>Parking &amp; Accessibility</span>
              </h4>
              
              <ul className="space-y-2.5 text-xs text-gray-600 dark:text-zinc-400">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold mt-0.5">•</span>
                  <span><strong>Dedicated Safe Parking:</strong> Free spacious car and two-wheeler parking spaces are available directly in front of the primary hospital block.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold mt-0.5">•</span>
                  <span><strong>Emergency Trauma Access:</strong> Specialized dedicated wide ambulance bays and ramps for immediate stretcher wheeling.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold mt-0.5">•</span>
                  <span><strong>Wheelchair Friendly:</strong> Step-free entrance, elevators, and specially designed restrooms are available throughout all clinic levels.</span>
                </li>
              </ul>
            </div>

            {/* Consulting Hours & Direct Phone/WhatsApp Anchors */}
            <div className="bg-[#0B1F3A] text-white p-6 sm:p-8 rounded-[32px] border border-navy-800 shadow-lg flex flex-col justify-between gap-6">
              
              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <Clock className="h-5 w-5 text-teal-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-teal-400 uppercase tracking-widest block mb-1">Consulting Hours</span>
                    <span className="text-sm font-bold block">Mon - Sat: 9:00 AM - 8:00 PM</span>
                    <span className="text-xs text-red-300 font-semibold block mt-1">● Emergency Admissions &amp; Trauma Care: 24/7 Live</span>
                  </div>
                </div>

                <div className="flex gap-3 items-start border-t border-navy-800 pt-4">
                  <Phone className="h-5 w-5 text-teal-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-teal-400 uppercase tracking-widest block mb-1">Direct Helpline Contacts</span>
                    <a href="tel:08554245678" className="text-sm font-bold block hover:text-teal-300 transition-colors">
                      OPD Desk: 08554-245678
                    </a>
                    <a href="tel:+919440275556" className="text-sm font-bold block hover:text-teal-300 transition-colors mt-0.5">
                      Hotline: +91 94402 75556
                    </a>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/919440275556?text=Hi%20Kumar%20Hospital,%20I%2527d%20like%20to%20inquire%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-3 px-4 shadow-md transition-colors"
              >
                <MessageSquare className="h-4 w-4 fill-white stroke-none" />
                <span>Chat Instantly on WhatsApp</span>
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

