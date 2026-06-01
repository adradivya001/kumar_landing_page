"use client";

import { Phone, Mail, MapPin, Clock, Heart, Shield } from "lucide-react";

import content from "@/tier3-content/content.json";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { footer } = content.layout;

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
                {footer.brand.title}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              {footer.brand.description}
            </p>
            <div className="flex items-center gap-2 mt-2 rounded-lg bg-navy-800/40 p-2.5 border border-navy-800 w-fit">
              <Shield className="h-4 w-4 text-teal-400 flex-shrink-0" />
              <span className="text-xs font-semibold text-gray-200">
                {footer.brand.badge}
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-5">
              {footer.quickLinks.title}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {footer.quickLinks.links.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="transition-colors hover:text-white">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Departments */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-5">
              {footer.specialties.title}
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              {footer.specialties.items.map((item) => (
                <li key={item} className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Information */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-1">
              {footer.reachOut.title}
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex gap-2.5 items-start">
                <MapPin className="h-5 w-5 text-teal-400 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed text-gray-400 whitespace-pre-line">
                  {footer.reachOut.address}
                </span>
              </li>
              <li className="flex gap-2.5 items-center">
                <Phone className="h-4 w-4 text-teal-400 flex-shrink-0" />
                <a href={footer.reachOut.phone1.href} className="transition-colors hover:text-white">
                  {footer.reachOut.phone1.display}
                </a>
              </li>
              <li className="flex gap-2.5 items-center">
                <Phone className="h-4 w-4 text-teal-400 flex-shrink-0" />
                <a href={footer.reachOut.phone2.href} className="transition-colors hover:text-white">
                  {footer.reachOut.phone2.display}
                </a>
              </li>
              <li className="flex gap-2.5 items-center">
                <Mail className="h-4 w-4 text-teal-400 flex-shrink-0" />
                <a href={footer.reachOut.email.href} className="transition-colors hover:text-white">
                  {footer.reachOut.email.display}
                </a>
              </li>
            </ul>

            {/* OPD Timings */}
            <div className="flex items-start gap-2 border-t border-navy-800 pt-3">
              <Clock className="h-4.5 w-4.5 text-teal-400 flex-shrink-0 mt-0.5" />
              <div className="text-xs">
                <span className="font-bold text-white block">{footer.opdTimings.title}</span>
                <span className="text-gray-400 block mt-0.5">{footer.opdTimings.regular}</span>
                <span className="text-red-400 block mt-0.5">{footer.opdTimings.sunday}</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal / Credits Bar */}
      <div className="border-t border-navy-800 bg-navy-950/80 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-xs text-gray-500">
          <p>
            &copy; {currentYear} {footer.legal.copyright}
          </p>
          <div className="flex gap-4">
            {footer.legal.links.map(link => (
              <a key={link.name} href={link.href} className="hover:underline hover:text-gray-400">{link.name}</a>
            ))}
          </div>
          <p className="flex items-center gap-1">
            {footer.legal.madeWith} <Heart className="h-3 w-3 text-red-500 fill-current" /> {footer.legal.madeIn}
          </p>
        </div>
      </div>
    </footer>
  );
}
