"use client";

import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import Image from "next/image";

const companies = [
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
  { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
  { name: "Accenture", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture_2017_logo.svg" },
  { name: "TCS", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg" },
  { name: "Infosys", logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" },
  { name: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" },
  { name: "Intel", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Intel_logo_%282020%2C_light_blue%29.svg" },
  { name: "Salesforce", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" },
];

export default function HiringPartners() {
  return (
    <div className="py-20 overflow-hidden bg-[#050505] border-y border-white/5 relative perspective-1000">
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505] z-10 pointer-events-none w-full"></div>
      
      <div className="container mx-auto px-6 mb-12 text-center relative z-20">
        <h3 className="text-2xl md:text-3xl font-black font-outfit text-white mb-2 flex items-center justify-center gap-3">
          <Building2 className="text-red-500" size={28} /> Hiring Partnerships with <span className="text-red-500">100+ MNCs</span>
        </h3>
        <p className="text-gray-400 text-base max-w-2xl mx-auto">Our alumni are actively recruited by top global enterprises and fast-growing tech startups.</p>
      </div>

      <div className="relative z-20 w-full flex overflow-x-hidden group mt-8">
        <motion.div 
          className="flex whitespace-nowrap gap-16 sm:gap-32 items-center px-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        >
          {/* Duplicate the list to make it infinite loop smoothly */}
          {[...companies, ...companies].map((company, i) => (
            <div 
              key={i} 
              className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert"
            >
              <img 
                src={company.logo} 
                alt={company.name} 
                className="h-10 md:h-14 object-contain"
                onError={(e) => { 
                   e.currentTarget.style.display = 'none'; 
                   const span = e.currentTarget.parentElement?.querySelector('span');
                   if (span) span.style.display = 'inline-block';
                }} 
              />
              <span style={{ display: 'none' }} className="text-2xl sm:text-4xl lg:text-5xl font-black text-gray-500 uppercase tracking-[0.2em] font-outfit drop-shadow-md">
                 {company.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
