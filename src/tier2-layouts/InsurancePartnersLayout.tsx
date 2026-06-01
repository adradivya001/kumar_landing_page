"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function InsurancePartners() {
  const partners = [
    { name: "Star Health Insurance", type: "Cashless" },
    { name: "HDFC ERGO General", type: "TPA Approved" },
    { name: "Niva Bupa Health", type: "Cashless" },
    { name: "ICICI Lombard", type: "TPA Approved" },
    { name: "Care Health (Religare)", type: "Cashless" },
    { name: "SBI General Insurance", type: "Cashless" },
    { name: "United India Insurance", type: "Govt / PSU" },
    { name: "Bajaj Allianz Health", type: "TPA Approved" },
  ];

  return (
    <section className="py-16 bg-navy-50 dark:bg-zinc-950 font-sans border-y border-gray-100 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Subtle section header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 max-w-5xl mx-auto border-b border-gray-200/60 dark:border-zinc-800 pb-6">
          <div className="flex items-center gap-2 text-navy-800 dark:text-white">
            <ShieldCheck className="h-5 w-5 text-teal-600" />
            <h3 className="text-lg font-bold tracking-tight">
              Cashless Treatment &amp; TPA Insurance Partners
            </h3>
          </div>
          <p className="text-xs text-gray-500 dark:text-zinc-400 text-center sm:text-right max-w-xs sm:max-w-none">
            We facilitate direct cashless pre-authorization for planned orthopedic surgeries.
          </p>
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {partners.map((partner, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-white dark:bg-zinc-900 border border-gray-200/80 dark:border-zinc-800/80 px-4 py-4 rounded-xl text-center shadow-sm hover:shadow-md hover:border-teal-500/20 transition-all duration-300 flex flex-col justify-center items-center gap-1 group"
            >
              <span className="text-sm font-bold text-navy-800 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                {partner.name}
              </span>
              <span className="text-[9px] font-extrabold uppercase tracking-widest text-gray-400 bg-gray-100 dark:bg-zinc-800 px-2 py-0.5 rounded mt-1">
                {partner.type}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Small TPA notice */}
        <p className="text-center text-[10px] text-gray-400 dark:text-zinc-500 mt-8 max-w-lg mx-auto">
          * Please note that pre-authorization approval depends on individual insurance policy terms and conditions. Reimbursement pathways are also supported for non-listed panels.
        </p>

      </div>
    </section>
  );
}
