"use client";

import { courses } from "@/data/courses";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Calendar, IndianRupee, Clock, DownloadCloud } from "lucide-react";
import LeadForm from "@/components/LeadForm";

export default function CoursePage({ params }: { params: { slug: string } }) {
  const course = courses.find((c) => c.slug === params.slug);

  if (!course) {
    notFound();
  }

  return (
    <div className="bg-[#050505] text-white min-h-screen pt-24 font-inter">
      {/* 1. Header Banner */}
      <section className="relative">
        <div className="absolute inset-0 h-[50vh] w-full z-0 overflow-hidden">
           <Image src={course.img} alt={course.title} fill className="object-cover opacity-30 mix-blend-screen" />
           <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/80 to-[#050505]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 pt-16 pb-24">
          <Link href="/#programs" className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 font-bold tracking-widest text-sm uppercase mb-8 transition-colors">
             <ArrowLeft size={16} /> Back to Programs
          </Link>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl">
            <div className="inline-block px-4 py-1.5 rounded-full border border-red-500/40 bg-red-600/10 text-red-500 text-xs font-bold tracking-widest uppercase backdrop-blur-md mb-6">
              Premium Certification
            </div>
            <h1 className="text-5xl md:text-7xl font-black font-outfit leading-tight mb-6 drop-shadow-2xl">{course.title}</h1>
            <p className="text-xl md:text-2xl text-gray-300 font-medium mb-10 leading-relaxed border-l-4 border-red-600 pl-6">{course.shortDesc}</p>
            
            <div className="flex flex-wrap gap-6 items-center">
               <div className="glass px-6 py-4 rounded-2xl flex items-center gap-4 bg-black/60 border border-white/10">
                 <div className="bg-red-600/20 p-3 rounded-xl"><IndianRupee className="text-red-500" size={24} /></div>
                 <div>
                   <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">Total Fee</div>
                   <div className="text-2xl font-black text-white">{course.price}</div>
                   <div className="text-[10px] text-red-500">{course.priceDetail}</div>
                 </div>
               </div>
               <div className="glass px-6 py-4 rounded-2xl flex items-center gap-4 bg-black/60 border border-white/10">
                 <div className="bg-red-600/20 p-3 rounded-xl"><Clock className="text-red-500" size={24} /></div>
                 <div>
                   <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">Duration</div>
                   <div className="text-2xl font-black text-white">{course.duration}</div>
                   <div className="text-[10px] text-red-500">Intensive Bootcamp</div>
                 </div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Main Body Content */}
      <section className="py-16">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          <div className="lg:col-span-2 space-y-16">
            {/* Overview */}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once:true }}>
               <h2 className="text-3xl font-bold font-outfit mb-6 flex items-center gap-3"><span className="text-red-600">|</span> Program Overview</h2>
               <p className="text-gray-300 text-lg leading-relaxed">{course.overview}</p>
            </motion.div>

            {/* Curriculum */}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once:true }}>
               <h2 className="text-3xl font-bold font-outfit mb-8 flex items-center gap-3"><span className="text-red-600">|</span> Extensive Curriculum</h2>
               <div className="grid gap-4">
                 {course.curriculum.map((item, idx) => (
                    <div key={idx} className="glass bg-white/[0.02] border border-white/5 p-6 rounded-2xl hover:bg-white/[0.05] hover:border-white/10 transition-colors flex flex-col md:flex-row gap-4 md:items-center">
                       <h3 className="text-red-500 font-bold uppercase tracking-widest text-sm min-w-[100px]">{item.module}</h3>
                       <div className="text-lg font-semibold text-white">{item.title}</div>
                    </div>
                 ))}
               </div>
            </motion.div>

            {/* Tools Covered */}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once:true }} className="bg-gradient-to-br from-red-950/30 to-black p-10 rounded-3xl border border-red-500/20">
               <h2 className="text-2xl font-bold font-outfit mb-6 text-white">Softwares & Tools Mastered</h2>
               <div className="flex flex-wrap gap-4">
                 {course.tools.map((tool, idx) => (
                    <span key={idx} className="bg-black border border-white/10 px-5 py-3 rounded-xl text-gray-300 font-medium font-outfit text-sm flex items-center gap-2 shadow-lg">
                      <Star size={14} className="text-red-500" /> {tool}
                    </span>
                 ))}
               </div>
            </motion.div>

            {/* Outcomes */}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once:true }}>
               <h2 className="text-3xl font-bold font-outfit mb-8 flex items-center gap-3"><span className="text-red-600">|</span> Key Outcomes</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {course.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex gap-4 p-5 rounded-2xl border border-white/5 bg-white/[0.02]">
                       <CheckCircle2 className="text-red-500 shrink-0" size={24} />
                       <div className="font-semibold text-white">{benefit}</div>
                    </div>
                 ))}
               </div>
            </motion.div>
          </div>

          {/* 3. Sticky Sidebar / Form */}
          <div className="relative">
            <div className="sticky top-32 space-y-8">
              <div className="bg-black/80 backdrop-blur-3xl border-2 border-white/10 p-8 rounded-[2rem] shadow-[0_0_50px_rgba(225,29,72,0.1)]">
                 <h3 className="text-2xl font-bold font-outfit mb-2 text-white">Enroll in {course.title}</h3>
                 <p className="text-sm text-gray-400 mb-8 border-b border-white/10 pb-6">Fill the form to trigger an automatic discount & download the detailed brochure instantly.</p>
                 <LeadForm />
              </div>
              <a href="#" className="w-full flex items-center justify-center gap-3 py-5 rounded-2xl bg-white/[0.05] border border-white/10 text-white hover:bg-white/[0.1] transition-colors font-bold font-outfit">
                <DownloadCloud size={20} className="text-red-500" /> Download Brochure PDF
              </a>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}

// Temporary icon to satisfy compiler since I used <Star/> above without importing it.
function Star(props: any) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>;
}
