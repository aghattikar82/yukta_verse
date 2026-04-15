"use client";

import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

export default function HiringPartners() {
  const companies = [
    { name: "Google", domain: "google.com" },
    { name: "Microsoft", domain: "microsoft.com" },
    { name: "Amazon", domain: "amazon.com" },
    { name: "Meta", domain: "meta.com" },
    { name: "IBM", domain: "ibm.com" },
    { name: "Accenture", domain: "accenture.com" },
    { name: "TCS", domain: "tcs.com" },
    { name: "Infosys", domain: "infosys.com" },
    { name: "Oracle", domain: "oracle.com" },
    { name: "Intel", domain: "intel.com" },
    { name: "Salesforce", domain: "salesforce.com" },
  ];

  return (
    <div className="py-20 overflow-hidden bg-[#050505] border-y border-white/5 relative perspective-1000">
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505] z-10 pointer-events-none w-full"></div>
      
      <div className="container mx-auto px-6 mb-12 text-center relative z-20">
        <h3 className="text-2xl md:text-3xl font-black font-outfit text-white mb-2 flex items-center justify-center gap-3">
          <Building2 className="text-red-500" size={28} /> Hiring Partnerships with <span className="text-red-500">100+ MNCs</span>
        </h3>
        <p className="text-gray-400 text-base max-w-2xl mx-auto">Our alumni are actively recruited by top global enterprises and fast-growing tech startups.</p>
      </div>

      <div className="relative z-20 w-full overflow-hidden mt-10 p-2">
        <motion.div 
          className="flex w-max gap-8 sm:gap-12 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 35, ease: "linear", repeat: Infinity }}
        >
          {/* Duplicate the array to make it infinite loop smoothly */}
          {[...companies, ...companies].map((company, i) => (
            <div 
              key={i} 
              className="bg-white rounded-2xl px-8 py-5 flex items-center justify-center min-w-[220px] h-[90px] shadow-[0_0_15px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              <img 
                src={`https://logo.clearbit.com/${company.domain}`} 
                alt={company.name} 
                className="h-10 md:h-12 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                  if(fallback) fallback.style.display = 'block';
                }}
              />
              <span style={{ display: 'none' }} className="text-xl md:text-2xl font-black text-black tracking-widest font-outfit uppercase">
                {company.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
