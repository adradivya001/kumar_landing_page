"use client";

import { Phone, Mail, MapPin, Clock, Heart, Shield } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-gray-300 font-sans mt-auto border-t border-navy-800">
      {/* Upper Grid Area */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Col 1: Brand & Philosophy */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-500 text-white shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M12 22V14" />
                  <path d="M19 10c0-3.87-3.13-7-7-7S5 6.13 5 10c0 4 7 11 7 11s7-7 7-11z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <span className="text-base font-extrabold tracking-tight text-white">
                KUMAR ORTHO HOSPITAL
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Established in 2021, Kumar Ortho & Multi-Speciality Hospital is dedicated to delivering state-of-the-art orthopedic surgery, trauma care, and multi-speciality healthcare services to the community of Anantapur.
            </p>
            <div className="flex items-center gap-2 mt-2 rounded-lg bg-navy-800/40 p-2.5 border border-navy-800 w-fit">
              <Shield className="h-4 w-4 text-teal-400 flex-shrink-0" />
              <span className="text-xs font-semibold text-gray-200">
                Certified Orthopedic Excellence
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#home" className="transition-colors hover:text-white">Home</a>
              </li>
              <li>
                <a href="#about" className="transition-colors hover:text-white">About Us</a>
              </li>
              <li>
                <a href="#doctor" className="transition-colors hover:text-white">Our Specialist</a>
              </li>
              <li>
                <a href="#services" className="transition-colors hover:text-white">Clinical Services</a>
              </li>
              <li>
                <a href="#why-choose-us" className="transition-colors hover:text-white">Why Choose Us</a>
              </li>
              <li>
                <a href="#facilities" className="transition-colors hover:text-white">Facilities & Gallery</a>
              </li>
              <li>
                <a href="#contact" className="transition-colors hover:text-white">Contact & Location</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Departments */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-5">
              Our Specialties
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
                <span>Orthopedic & Spine Surgery</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
                <span>Complex Fracture & Trauma Care</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
                <span>General & Preventive Medicine</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
                <span>Physiotherapy & Rehabilitation</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
                <span>24/7 Emergency & ICU Care</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Information */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-1">
              Reach Out
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex gap-2.5 items-start">
                <MapPin className="h-5 w-5 text-teal-400 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed text-gray-400">
                  12-4, 80 Feet Road, Vidyuth Nagar,<br />
                  Housing Board Colony, Anantapur,<br />
                  Andhra Pradesh 515001
                </span>
              </li>
              <li className="flex gap-2.5 items-center">
                <Phone className="h-4 w-4 text-teal-400 flex-shrink-0" />
                <a href="tel:+918554245678" className="transition-colors hover:text-white">
                  08554-245678
                </a>
              </li>
              <li className="flex gap-2.5 items-center">
                <Phone className="h-4 w-4 text-teal-400 flex-shrink-0" />
                <a href="tel:+919440275556" className="transition-colors hover:text-white">
                  +91 94402 75556
                </a>
              </li>
              <li className="flex gap-2.5 items-center">
                <Mail className="h-4 w-4 text-teal-400 flex-shrink-0" />
                <a href="mailto:info@kumarorthohospital.com" className="transition-colors hover:text-white">
                  info@kumarorthohospital.com
                </a>
              </li>
            </ul>

            {/* OPD Timings */}
            <div className="flex items-start gap-2 border-t border-navy-800 pt-3">
              <Clock className="h-4.5 w-4.5 text-teal-400 flex-shrink-0 mt-0.5" />
              <div className="text-xs">
                <span className="font-bold text-white block">OPD CONSULTATION TIMES</span>
                <span className="text-gray-400 block mt-0.5">Mon - Sat: 9:00 AM - 8:00 PM</span>
                <span className="text-red-400 block mt-0.5">Sunday: Emergency Trauma Only</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal / Credits Bar */}
      <div className="border-t border-navy-800 bg-navy-950/80 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-xs text-gray-500">
          <p>
            &copy; {currentYear} Kumar Ortho & Multi-Speciality Hospital. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#about" className="hover:underline hover:text-gray-400">Terms of Use</a>
            <a href="#contact" className="hover:underline hover:text-gray-400">Privacy Policy</a>
            <a href="#faq" className="hover:underline hover:text-gray-400">Sitemap</a>
          </div>
          <p className="flex items-center gap-1">
            Made with <Heart className="h-3 w-3 text-red-500 fill-current" /> in India.
          </p>
        </div>
      </div>
    </footer>
  );
}
