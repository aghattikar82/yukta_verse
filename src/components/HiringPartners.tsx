"use client";

import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

const companies = [
  "Google", "Microsoft", "Amazon", "Meta", "IBM", "Accenture", 
  "Deloitte", "TCS", "Infosys", "Capgemini", "NetApp", "Cisco",
  "Oracle", "Intel", "NVIDIA", "Adobe", "Salesforce", "Atlassian",
  "VMware", "PwC", "KPMG", "EY"
];

export default function HiringPartners() {
  return (
    <div className="py-16 overflow-hidden bg-[#050505] border-y border-white/5 relative perspective-1000">
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505] z-10 pointer-events-none w-full"></div>
      
      <div className="container mx-auto px-6 mb-10 text-center relative z-20">
        <h3 className="text-2xl md:text-3xl font-black font-outfit text-white mb-2 flex items-center justify-center gap-3">
          <Building2 className="text-red-500" size={28} /> Hiring Partnerships with <span className="text-red-500">100+ MNCs</span>
        </h3>
        <p className="text-gray-400 text-base max-w-2xl mx-auto">Our alumni are actively recruited by top global enterprises and fast-growing tech startups.</p>
      </div>

      <div className="relative w-full flex overflow-x-hidden group mt-4">
        <motion.div 
          className="flex whitespace-nowrap gap-12 sm:gap-24 items-center px-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        >
          {/* Duplicate the list to make it infinite loop smoothly */}
          {[...companies, ...companies].map((company, i) => (
            <div 
              key={i} 
              className="text-2xl sm:text-4xl lg:text-5xl font-black text-white/10 uppercase tracking-[0.2em] font-outfit hover:text-white/40 transition-colors cursor-default drop-shadow-md"
            >
              {company}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
