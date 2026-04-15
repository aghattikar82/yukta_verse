"use client";

import { use } from "react";
import { courses } from "@/data/courses";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, IndianRupee, Clock, DownloadCloud, Star, Users, Flag, ShieldCheck, Target, HelpCircle, Briefcase } from "lucide-react";
import LeadForm from "@/components/LeadForm";

export default function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  // @ts-ignore
  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  return (
    <div className="bg-[#050505] text-white min-h-screen pt-24 font-inter selection:bg-red-500/30">
      {/* 1. Full Page Background Photo Overlay */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
         <Image src={course.img} alt={course.title} fill className="object-cover opacity-20 mix-blend-screen scale-110 blur-[10px] transform" />
         <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* 2. Header Banner Photo */}
      <section className="relative">
        <div className="absolute inset-0 h-[60vh] w-full z-0 overflow-hidden">
           <Image src={course.img} alt={course.title} fill className="object-cover opacity-50 mix-blend-luminosity scale-105 transform" />
           <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-transparent"></div>
           <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 pt-16 pb-24 border-b border-white/10">
          <Link href="/#programs" className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 font-bold tracking-widest text-sm uppercase mb-8 transition-colors bg-red-500/10 px-4 py-2 rounded-full border border-red-500/20">
             <ArrowLeft size={16} /> Back to Programs
          </Link>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-black font-outfit leading-tight mb-6 drop-shadow-2xl">{course.title}</h1>
            <p className="text-xl md:text-2xl text-gray-300 font-medium mb-12 leading-relaxed border-l-4 border-red-600 pl-6">{course.shortDesc}</p>
            
            <div className="flex flex-wrap gap-6 items-center">
               <div className="bg-gradient-to-br from-black to-red-950/20 px-8 py-5 rounded-3xl flex items-center gap-5 border border-white/10 shadow-2xl">
                 <div className="bg-red-600 text-white p-3 rounded-2xl shadow-lg shadow-red-600/20"><IndianRupee size={28} /></div>
                 <div>
                   <div className="text-sm text-gray-400 uppercase tracking-widest font-bold mb-1">{course.feesHeading || "Course Fees"}</div>
                   <div className="flex items-baseline gap-2">
                     <span className="text-3xl font-black text-white">{course.price}</span>
                     <span className="text-xs text-red-500 font-bold uppercase tracking-widest">{course.priceDetail}</span>
                   </div>
                 </div>
               </div>
               
               <div className="bg-gradient-to-br from-black to-[#111] px-8 py-5 rounded-3xl flex items-center gap-5 border border-white/10 shadow-2xl">
                 <div className="bg-white/10 text-white p-3 rounded-2xl"><Clock size={28} /></div>
                 <div>
                   <div className="text-sm text-gray-400 uppercase tracking-widest font-bold mb-1">Duration</div>
                   <div className="flex items-baseline gap-2">
                     <span className="text-3xl font-black text-white">{course.duration}</span>
                     <span className="text-xs text-gray-500 font-bold uppercase tracking-widest">Intensive</span>
                   </div>
                 </div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Main Body Content */}
      <section className="py-16">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16 relative">
          
          <div className="lg:col-span-2 space-y-20">
            
            {/* Overview */}
            {course.overview && (
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once:true }}>
                 <h2 className="text-3xl font-black font-outfit mb-6 text-white">{course.overview.heading}</h2>
                 <p className="text-gray-400 text-lg leading-relaxed bg-[#0a0a0a] border border-white/5 p-8 rounded-3xl">{course.overview.content}</p>
              </motion.div>
            )}

            {/* Why Pursue */}
            {course.whyPursue && (
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once:true }} className="flex gap-6 items-start">
                 <div className="bg-red-600/20 p-4 rounded-2xl hidden md:block border border-red-500/20"><Flag className="text-red-500" size={32} /></div>
                 <div>
                   <h2 className="text-3xl font-black font-outfit mb-4 text-white">{course.whyPursue.heading}</h2>
                   <p className="text-gray-400 text-lg leading-relaxed">{course.whyPursue.content}</p>
                 </div>
              </motion.div>
            )}

            {/* Advantage */}
            {course.advantage && (
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once:true }} className="bg-gradient-to-r from-red-950/40 to-black p-8 md:p-12 rounded-[2.5rem] border border-red-500/20 relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 blur-[100px] rounded-full pointer-events-none"></div>
                 <h2 className="text-3xl font-black font-outfit mb-4 text-white relative z-10">{course.advantage.heading}</h2>
                 <p className="text-gray-300 text-lg leading-relaxed relative z-10">{course.advantage.content}</p>
              </motion.div>
            )}

            {/* Curriculum */}
            {course.curriculum && (
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once:true }}>
                 <h2 className="text-3xl font-black font-outfit mb-8 flex items-center gap-4"><span className="bg-white/10 p-2 rounded-xl"><Target size={24}/></span> {course.curriculumHeading || "Curriculum"}</h2>
                 <div className="grid gap-4">
                   {course.curriculum.map((item: any, idx: number) => (
                      <div key={idx} className="bg-[#0a0a0a] border-l-4 border-l-red-600 border border-white/5 p-6 md:p-8 rounded-2xl hover:bg-[#111] transition-colors flex flex-col md:flex-row gap-4 md:items-center shadow-lg">
                         <h3 className="text-red-500 font-black uppercase tracking-widest text-sm min-w-[120px]">{item.module}</h3>
                         <div className="text-lg font-bold text-white/90">{item.title}</div>
                      </div>
                   ))}
                 </div>
              </motion.div>
            )}

            {/* Projects & Experiential */}
            {course.projects && (
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once:true }}>
                 <h2 className="text-3xl font-black font-outfit mb-8 text-white">{course.projectsHeading}</h2>
                 <div className="grid gap-6 md:grid-cols-2">
                   {course.projects.map((proj: any, idx: number) => (
                      <div key={idx} className="bg-[#0a0a0a] border border-white/10 p-8 rounded-3xl group hover:border-red-500/50 transition-colors">
                         <div className="bg-white/5 w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600/20 group-hover:text-red-500 transition-colors">
                           <Briefcase size={20} />
                         </div>
                         <h3 className="text-xl font-bold mb-3 text-white">{proj.title}</h3>
                         <p className="text-gray-400 text-sm leading-relaxed">{proj.desc}</p>
                      </div>
                   ))}
                 </div>
              </motion.div>
            )}

            {/* Team / Mentors */}
            {course.team && (
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once:true }}>
                 <h2 className="text-3xl font-black font-outfit mb-8 text-white">{course.teamHeading}</h2>
                 <div className="flex flex-wrap gap-4">
                   {course.team.map((member: any, idx: number) => (
                      <div key={idx} className="flex items-center gap-4 bg-[#0a0a0a] border border-white/5 py-4 px-6 rounded-full">
                         <div className="bg-red-600 text-white rounded-full p-2"><Users size={16} /></div>
                         <div>
                           <div className="font-bold text-white text-sm">{member.name}</div>
                           <div className="text-xs text-gray-500 uppercase tracking-widest">{member.role}</div>
                         </div>
                      </div>
                   ))}
                 </div>
              </motion.div>
            )}

            {/* Skills & Tools */}
            {course.tools && (
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once:true }} className="bg-white/[0.02] p-10 rounded-[2.5rem] border border-white/5">
                 <h2 className="text-2xl font-black font-outfit mb-8 text-white">{course.skillsHeading || "Skills & Tools Mastered"}</h2>
                 <div className="flex flex-wrap gap-4">
                   {course.tools.map((tool: string, idx: number) => (
                      <span key={idx} className="bg-black border border-white/10 px-6 py-4 rounded-2xl text-gray-300 font-bold font-outfit text-sm flex items-center gap-3 shadow-xl">
                        <Star size={16} className="text-red-500" /> {tool}
                      </span>
                   ))}
                 </div>
              </motion.div>
            )}
            
            {/* The Journey & Support Sequence */}
            <div className="grid md:grid-cols-2 gap-8">
              {course.journey && (
                <div className="bg-[#050505] border border-white/10 p-8 rounded-3xl">
                  <h3 className="text-xl font-bold mb-4 font-outfit text-white">{course.journeyHeading}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{course.journey}</p>
                </div>
              )}
              {course.support && (
                <div className="bg-[#050505] border border-white/10 p-8 rounded-3xl">
                  <h3 className="text-xl font-bold mb-4 font-outfit text-white">{course.supportHeading}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{course.support}</p>
                </div>
              )}
            </div>

            {/* Eligibility & Admissions */}
            {course.eligibility && (
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once:true }} className="bg-red-600/5 border border-red-500/20 p-8 rounded-3xl flex gap-6 items-start">
                 <div className="mt-1"><ShieldCheck size={28} className="text-red-500" /></div>
                 <div>
                   <h2 className="text-2xl font-black font-outfit mb-3 text-white">{course.eligibilityHeading}</h2>
                   <p className="text-gray-300 leading-relaxed">{course.eligibility}</p>
                 </div>
              </motion.div>
            )}

            {/* Certification */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }}>
              <div className="bg-gradient-to-br from-[#111] to-black border border-white/10 p-8 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-white to-gray-400"></div>
                <h2 className="text-3xl font-black font-outfit mb-4 text-white">{course.certification?.heading || "Program Certificate"}</h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-10">{course.certification?.content || "Earn a prestigious industry-recognized certificate upon successful completion of this program."}</p>
                
                <div className="flex justify-center w-full relative z-10">
                  <motion.div 
                    whileHover={{ y: -20, scale: 1.03 }}
                    transition={{ type: "spring", bounce: 0.6, stiffness: 200 }}
                    className="w-full md:w-[80%] relative bg-white p-3 rounded-2xl shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:shadow-[0_0_70px_rgba(255,255,255,0.8)] cursor-pointer transition-shadow duration-500"
                  >
                    <div className="relative aspect-[1.414/1] w-full overflow-hidden rounded-xl bg-gray-50 flex items-center justify-center border border-gray-200">
                      <Image 
                        src={`/${course.slug}-cert.png`} 
                        alt={`${course.title} Certificate`}
                        fill
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Career Outcomes */}
            {course.careerOutcomes && (
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once:true }}>
                 <h2 className="text-3xl font-black font-outfit mb-6 text-white">{course.careerOutcomesHeading}</h2>
                 <p className="text-gray-400 text-lg leading-relaxed bg-[#0a0a0a] border border-white/5 p-8 rounded-3xl">{course.careerOutcomes}</p>
              </motion.div>
            )}

            {/* FAQs */}
            {course.faqs && (
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once:true }}>
                 <h2 className="text-3xl font-black font-outfit mb-8 text-white">{course.faqsHeading}</h2>
                 <div className="space-y-4">
                   {course.faqs.map((faq: any, idx: number) => (
                      <div key={idx} className="bg-[#0a0a0a] border border-white/5 p-6 rounded-2xl">
                         <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                           <HelpCircle className="text-red-500 shrink-0 mt-1" size={20} /> {faq.q}
                         </h3>
                         <p className="text-gray-400 pl-8">{faq.a}</p>
                      </div>
                   ))}
                 </div>
              </motion.div>
            )}

          </div>

          {/* 3. Sticky Sidebar / Form */}
          <div className="relative">
            <div className="sticky top-32 space-y-6">
              <div className="bg-gradient-to-b from-[#111] to-black border-2 border-white/10 p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-full h-2 bg-gradient-to-r from-red-600 to-red-400"></div>
                 <h3 className="text-3xl font-black font-outfit mb-3 text-white">Enroll Now</h3>
                 <p className="text-sm text-gray-400 mb-8 pb-6 border-b border-white/10 font-medium">Register for {course.title} to trigger an exclusive discount & syllabus download.</p>
                 <LeadForm />
              </div>
              <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="w-full flex items-center justify-center gap-3 py-6 rounded-3xl bg-white/[0.03] border border-white/10 text-white hover:bg-white/[0.08] hover:border-white/30 transition-all font-bold font-outfit text-sm tracking-wide uppercase shadow-lg">
                <DownloadCloud size={20} className="text-red-500" /> Apply & Download Brochure
              </button>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}
