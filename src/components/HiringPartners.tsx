"use client";

import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

export default function HiringPartners() {
  const companies = [
    { name: "Google", logo: "/logos/google.svg" },
    { name: "Microsoft", logo: "/logos/microsoft.svg" },
    { name: "Amazon", logo: "/logos/amazon.svg" },
    { name: "Meta", logo: "/logos/meta.svg" },
    { name: "IBM", logo: "/logos/ibm.svg" },
    { name: "Accenture", logo: "/logos/accenture.svg" },
    { name: "TCS", logo: "/logos/tcs.svg" },
    { name: "Infosys", logo: "/logos/infosys.svg" },
    { name: "Oracle", logo: "/logos/oracle.svg" },
    { name: "Intel", logo: "/logos/intel.svg" },
    { name: "Salesforce", logo: "/logos/salesforce.svg" },
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
              className="bg-white rounded-2xl px-10 py-6 flex items-center justify-center min-w-[200px] h-[100px] shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_35px_rgba(255,255,255,0.3)] transition-all duration-500 hover:-translate-y-2 cursor-pointer group"
            >
              <img 
                src={company.logo} 
                alt={company.name} 
                className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
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
