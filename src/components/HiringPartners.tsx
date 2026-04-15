"use client";

import { motion } from "framer-motion";
import { Building2, Infinity, Cloud } from "lucide-react";

export default function HiringPartners() {
  const companies = [
    { id: "google", node: <span className="font-sans font-medium tracking-tighter text-4xl">Google</span> },
    { id: "microsoft", node: <div className="flex items-center gap-3"><div className="grid grid-cols-2 gap-[3px]"><div className="w-4 h-4 bg-gray-400"></div><div className="w-4 h-4 bg-gray-400"></div><div className="w-4 h-4 bg-gray-400"></div><div className="w-4 h-4 bg-gray-400"></div></div><span className="font-semibold font-sans tracking-tight text-4xl">Microsoft</span></div> },
    { id: "amazon", node: <span className="font-sans font-bold tracking-tighter lowercase text-4xl">amazon</span> },
    { id: "meta", node: <div className="flex items-center gap-2"><Infinity size={40} strokeWidth={2.5} /><span className="font-sans font-medium text-4xl">Meta</span></div> },
    { id: "ibm", node: <span className="font-serif font-black tracking-widest border-y-4 border-gray-400 border-dotted px-1 text-4xl">IBM</span> },
    { id: "accenture", node: <span className="font-sans font-black lowercase tracking-tighter text-4xl">accenture<span className="text-red-500 font-normal">></span></span> },
    { id: "tcs", node: <span className="font-sans font-black tracking-widest text-4xl">TCS</span> },
    { id: "infosys", node: <span className="font-sans font-bold tracking-wide text-4xl">Infosys</span> },
    { id: "oracle", node: <span className="font-sans font-black tracking-tighter text-4xl">ORACLE</span> },
    { id: "intel", node: <div className="border-[3px] border-gray-400 rounded-full px-5 py-1 font-sans font-bold italic text-4xl">intel</div> },
    { id: "salesforce", node: <div className="flex items-center gap-2"><Cloud size={40} fill="currentColor" /><span className="font-sans font-medium italic text-4xl">salesforce</span></div> },
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

      <div className="relative z-20 w-full flex overflow-x-hidden group mt-10">
        <motion.div 
          className="flex whitespace-nowrap gap-20 sm:gap-32 items-center px-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 45, ease: "linear", repeat: Infinity }}
        >
          {/* Duplicate the array to make it infinite loop smoothly */}
          {[...companies, ...companies].map((company, i) => (
            <div 
              key={i} 
              className="flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-300 text-gray-400 drop-shadow-md cursor-default"
            >
              {company.node}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
