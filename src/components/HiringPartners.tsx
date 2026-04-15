"use client";

import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

export default function HiringPartners() {
  const companies = [
    { name: "Google", logo: "/logos/google.svg", tagline: "Search & AI Leader" },
    { name: "Microsoft", logo: "/logos/microsoft.svg", tagline: "Cloud & Dev Standards" },
    { name: "Amazon", logo: "/logos/amazon.svg", tagline: "E-commerce & AWS" },
    { name: "Meta", logo: "/logos/meta.svg", tagline: "Social & Open Source" },
    { name: "IBM", logo: "/logos/ibm.svg", tagline: "Enterprise Computing" },
    { name: "Accenture", logo: "/logos/accenture.svg", tagline: "Global Consulting" },
    { name: "TCS", logo: "/logos/tcs.svg", tagline: "IT Services Giant" },
    { name: "Infosys", logo: "/logos/infosys.svg", tagline: "Digital Innovation" },
    { name: "Oracle", logo: "/logos/oracle.svg", tagline: "Database Solutions" },
    { name: "Intel", logo: "/logos/intel.svg", tagline: "Processor Innovation" },
    { name: "Salesforce", logo: "/logos/salesforce.svg", tagline: "CRM Leader" },
  ];

  return (
    <div className="py-20 overflow-hidden bg-[#050505] border-y border-white/5 relative perspective-1000">
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505] z-10 pointer-events-none w-full"></div>
      
      <div className="container mx-auto px-6 mb-12 text-center relative z-20">
        <h3 className="text-2xl md:text-3xl font-black font-outfit text-white mb-2 flex items-center justify-center gap-3">
          <Building2 className="text-red-500" size={28} /> Hiring Partnerships with <span className="text-red-500">100+ MNCs</span>
        </h3>
        <p className="text-gray-400 text-base max-w-2xl mx-auto">Transforming your career with the world's most innovative companies.</p>
      </div>

      <div className="relative z-20 w-full overflow-hidden mt-10 p-2">
        <motion.div 
          className="flex w-max gap-8 sm:gap-12 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        >
          {/* Duplicate the array to make it infinite loop smoothly */}
          {[...companies, ...companies].map((company, i) => (
            <div 
              key={i} 
              className="bg-white rounded-3xl px-8 py-6 flex flex-col items-center justify-center min-w-[220px] h-[120px] shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_35px_rgba(255,255,255,0.3)] transition-all duration-500 hover:-translate-y-2 cursor-pointer group border border-gray-100"
            >
              <img 
                src={company.logo} 
                alt={company.name} 
                className="h-8 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                  if(fallback) fallback.style.display = 'block';
                }}
              />
              <span style={{ display: 'none' }} className="text-xl md:text-2xl font-black text-black tracking-widest font-outfit uppercase">
                {company.name}
              </span>
              <div className="mt-3 text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {company.tagline}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
