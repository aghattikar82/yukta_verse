"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Users, Award, Briefcase, PlayCircle, BarChart3, Cloud, BrainCircuit, LineChart, Building, Network, MessageCircle } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import { motion, useScroll, useTransform, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="overflow-hidden bg-black text-white">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-24 pb-20 justify-center overflow-hidden perspective-1000">
        {/* Animated Glow Backgrounds */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-10 w-96 h-96 bg-red-600/30 rounded-full blur-[120px] -z-10" 
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-red-500/20 rounded-full blur-[120px] -z-10" 
        />

        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={staggerContainer} 
            className="space-y-8"
          >
            <motion.div variants={fadeUp} className="inline-block px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-sm font-semibold tracking-wider backdrop-blur-md">
              🔥 Learn Future Skills in One Place
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-extrabold font-outfit leading-tight text-white drop-shadow-2xl">
              Master AI, Data & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-white">Future Technologies</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-gray-300 max-w-lg leading-relaxed mix-blend-screen">
              Industry-ready programs designed for modern careers. Build production-grade skills and scale your career with 1-on-1 expert mentorship.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-4">
              <Link href="#programs" className="px-8 py-4 rounded-full bg-red-600 text-white font-semibold hover:bg-red-500 shadow-[0_0_20px_rgba(225,29,72,0.6)] hover:shadow-[0_0_35px_rgba(225,29,72,0.8)] transition-all flex items-center gap-2 transform hover:scale-105">
                Explore Programs <ChevronRight size={18} />
              </Link>
              <Link href="#consultation" className="px-8 py-4 rounded-full border border-white/20 hover:border-white/50 bg-white/5 text-white font-medium backdrop-blur-md transition-all flex items-center gap-2 transform hover:scale-105">
                <PlayCircle size={20} className="text-red-500" /> Book Consultation
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, rotateY: 15, x: 100 }}
            animate={{ opacity: 1, rotateY: 0, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ y: heroY }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative p-2 rounded-3xl w-full max-w-lg shadow-[0_0_50px_rgba(225,29,72,0.2)] border border-red-500/20 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-2xl">
              <motion.img 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                src="/hero_ai_graphic.png" 
                alt="AI Tech Concept" 
                className="w-full h-auto rounded-2xl mix-blend-lighten"
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-6 -left-6 bg-black/60 border border-white/10 backdrop-blur-xl p-4 rounded-xl flex items-center gap-4 shadow-2xl"
              >
                <div className="bg-red-600 p-3 rounded-full text-white">
                  <Briefcase size={24} />
                </div>
                <div>
                  <div className="font-bold font-outfit text-xl text-white">Top 1%</div>
                  <div className="text-xs text-red-200">Curriculum standard</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. TRUST SECTION */}
      <section className="py-10 border-y border-white/10 relative z-10 bg-black/80 backdrop-blur-xl">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { icon: Users, val: "1000+", label: "Active Students" },
              { icon: Award, val: "50+", label: "Industry Mentors" },
              { icon: Briefcase, val: "95%", label: "Placement Support" }
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeUp} className="flex flex-col items-center justify-center text-center space-y-2 p-6 glass hover:border-red-500/50 transition-colors group">
                <stat.icon className="text-red-500 w-10 h-10 mb-2 group-hover:scale-110 transition-transform" />
                <div className="text-4xl font-bold font-outfit text-white">{stat.val}</div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </motion.div>
            ))}
            
            <motion.div variants={fadeUp} className="flex flex-col items-center justify-center text-center space-y-2 p-6 glass border-white/5">
              <div className="text-sm text-red-300 mb-2 uppercase tracking-wider font-semibold">Top Hiring Partners</div>
              <div className="flex gap-4 items-center opacity-80">
                <span className="font-bold text-xl text-white">Google</span>
                <span className="font-bold text-xl text-white">AWS</span>
                <span className="font-bold text-xl text-white">Meta</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. OUR PROGRAMS (CORE SECTION) */}
      <section id="programs" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/5 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-2xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-outfit font-bold mb-4">Our Premium <span className="gradient-text">Programs</span></h2>
            <p className="text-white/60 font-inter text-lg">Industry-curated curriculum with hands-on labs, real-world case studies, and scalable AI infrastructure.</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { title: "Data & Business Analytics", icon: <BarChart3 />, desc: "Master big data tools, dashboards, and analytical storytelling." },
              { title: "Cloud & DevOps", icon: <Cloud />, desc: "Design & deploy resilient cloud infra with AWS, Kubernetes & CI/CD." },
              { title: "Gen AI & Agentic AI", icon: <BrainCircuit />, desc: "Build enterprise LLMs, RAG layers, and autonomous agents." },
              { title: "AI Digital Marketing", icon: <LineChart />, desc: "Growth hacking with precision AI campaigns and automation." },
              { title: "Financial Modelling", icon: <Building />, desc: "IB standards, Valuation, and Risk assessment in modern finance." },
              { title: "Multi-Cloud Architecture", icon: <Network />, desc: "Seamless interoperability and scaling across AWS, Azure, GCP." }
            ].map((program, idx) => (
              <motion.div 
                key={idx} 
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } }
                }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass p-8 group transition-all duration-300 border-t-4 border-t-white/10 hover:border-t-red-600 bg-white/5 backdrop-blur-md relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-red-600/20 text-red-500 border border-red-500/20`}>
                  <div className="w-8 h-8">{program.icon}</div>
                </div>
                <h3 className="text-2xl font-bold mb-3 font-outfit text-white">{program.title}</h3>
                <p className="text-white/60 text-sm mb-6">{program.desc}</p>
                <Link href={`/programs`} className="text-red-400 hover:text-white font-medium flex items-center gap-2 group-hover:gap-4 transition-all text-sm">
                  Learn More <ChevronRight size={16} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. CAREER SUPPORT & 5. LEAD FORM */}
      <section id="consultation" className="py-32 bg-black relative border-y border-white/10 overflow-hidden">
        <motion.div 
          animate={{ rotate: 360 }} 
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[url('/grid.svg')] opacity-[0.03] z-0 pointer-events-none"
        ></motion.div>
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-outfit font-bold mb-6 text-white">Complete <br/><span className="gradient-text">Career Support</span></h2>
            <p className="text-white/70 mb-10 text-lg leading-relaxed">We focus exclusively on outcome-driven education. Your success is the only metric we optimize for. Get access to insider networks and resume curation.</p>
            
            <div className="space-y-6">
              {[
                { title: "Placement Assistance", desc: "Direct referrals to startups and tech giants." },
                { title: "Resume Building", desc: "ATS-optimized profiles guaranteed to pass screening." },
                { title: "Mock Interviews", desc: "Live sessions mimicking top tier hiring standards." },
                { title: "Industry Mentors", desc: "1-on-1 guidance from professionals actively working in the field." }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4 items-start group"
                >
                  <div className="w-8 h-8 mt-1 rounded-full bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <ChevronRight size={16} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold font-outfit text-white">{item.title}</h4>
                    <p className="text-white/50 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <LeadForm />
          </motion.div>
        </div>
      </section>

      {/* 6. MENTORS SECTION */}
      <section id="mentors" className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-outfit font-bold mb-4 text-white">Learn From <span className="text-red-500">The Best</span></h2>
            <p className="text-white/60 text-lg">Our mentors actively build products at the world's most innovative companies.</p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { name: "Rajiv Sharma", role: "Lead AI Researcher", exp: "12+ Years Exp.", img: "/mentor_1.png" },
              { name: "Priya Mehta", role: "Sr. Data Scientist", exp: "8+ Years Exp.", img: "/mentor_2.png" },
              { name: "David Miller", role: "Cloud Architect", exp: "10+ Years Exp.", img: "/mentor_3.png" }
            ].map((mentor, i) => (
              <motion.div 
                key={i} 
                variants={fadeUp}
                whileHover={{ y: -15 }}
                className="glass rounded-2xl overflow-hidden group bg-black border border-white/10"
              >
                <div className="h-80 w-full relative overflow-hidden">
                  <Image src={mentor.img} alt={mentor.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                </div>
                <div className="p-6 relative -mt-20 text-center z-10">
                  <h3 className="text-3xl font-bold font-outfit text-white drop-shadow-lg">{mentor.name}</h3>
                  <div className="text-sm font-semibold mb-1 text-red-500 uppercase tracking-widest mt-1">{mentor.role}</div>
                  <div className="text-sm text-white/50">{mentor.exp}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* 7. CTA SECTION */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
            className="glass p-12 md:p-24 text-center rounded-3xl relative overflow-hidden border border-red-500/20 shadow-[0_0_50px_rgba(225,29,72,0.15)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-black/80"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-7xl font-bold font-outfit mb-6 text-white drop-shadow-xl">Start Your AI Journey <span className="text-red-500">Today</span></h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10 font-light">
                Don't let the AI revolution pass you by. Join the next cohort and engineer your future.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link href="#programs" className="px-10 py-5 rounded-full bg-red-600 text-white font-bold uppercase tracking-widest hover:bg-red-500 hover:shadow-[0_0_30px_rgba(225,29,72,0.8)] transition-all transform hover:-translate-y-1">
                  Enroll Now
                </Link>
                <a href="https://wa.me/919876543210" className="px-10 py-5 rounded-full border border-white/20 hover:border-white/50 backdrop-blur-lg hover:bg-white/10 transition-all font-medium flex items-center gap-3 text-white">
                  <MessageCircle size={24} className="text-[#25D366]" /> WhatsApp Us
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
