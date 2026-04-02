"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Users, Award, Briefcase, PlayCircle, BarChart3, Cloud, BrainCircuit, LineChart, Building, Network, MessageCircle, Star, Zap, Cpu } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import { motion, useScroll, useTransform, Variants } from "framer-motion";

const popUp: Variants = {
  hidden: { opacity: 0, scale: 0.5, y: 60, rotateX: -20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0, 
    rotateX: 0,
    transition: { type: "spring", bounce: 0.6, stiffness: 120, damping: 10 } 
  }
};

const popRight: Variants = {
  hidden: { opacity: 0, scale: 0.5, x: -60 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    x: 0, 
    transition: { type: "spring", bounce: 0.5, stiffness: 100, damping: 12 } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const floatY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <div className="overflow-hidden bg-[#050505] text-white">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-24 pb-20 justify-center overflow-hidden perspective-1000">
        
        {/* Animated Glow Backgrounds */}
        <motion.div 
          animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.7, 0.3], x: [0, 50, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-10 w-[400px] h-[400px] bg-red-600/30 rounded-full blur-[140px] -z-10" 
        />
        <motion.div 
          animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.6, 0.2], y: [0, -50, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-red-500/20 rounded-full blur-[140px] -z-10" 
        />

        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={staggerContainer} 
            className="space-y-8 relative"
          >
            {/* Background 3D Floating Elements */}
            <motion.div style={{ y: floatY }} className="absolute -left-10 md:-left-20 -top-10 opacity-40">
              <Cpu className="text-red-500 w-24 h-24 mix-blend-screen" />
            </motion.div>

            <motion.div variants={popUp} className="inline-block px-5 py-2 rounded-full border border-red-500/40 bg-red-500/10 text-white text-sm font-bold tracking-wider backdrop-blur-md shadow-[0_0_20px_rgba(225,29,72,0.3)]">
              <span className="animate-pulse inline-block mr-2 text-red-500">🔥</span> Learn Future Skills in One Place
            </motion.div>
            
            <motion.h1 variants={popUp} className="text-5xl md:text-7xl font-extrabold font-outfit leading-tight text-white drop-shadow-2xl">
              Master AI, Data & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-400 to-white animate-gradient-x relative inline-block">
                Future Technologies
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -right-8 -top-8 text-red-500 mix-blend-screen"
                >
                  <Star size={40} fill="currentColor" />
                </motion.div>
              </span>
            </motion.h1>
            
            <motion.p variants={popUp} className="text-lg text-gray-300 max-w-lg leading-relaxed mix-blend-screen bg-black/20 p-4 rounded-xl border border-white/5 backdrop-blur-sm">
              Industry-ready programs designed for modern careers. Build production-grade skills and scale your career with 1-on-1 expert mentorship.
            </motion.p>
            
            <motion.div variants={popUp} className="flex flex-col sm:flex-row flex-wrap gap-5 pt-8 w-full group relative z-20">
              <Link href="#programs" className="w-full sm:w-auto px-10 py-5 rounded-full bg-gradient-to-r from-red-600 to-red-500 text-white font-black tracking-widest hover:from-red-500 hover:to-red-400 shadow-[0_0_30px_rgba(225,29,72,0.5)] hover:shadow-[0_0_50px_rgba(225,29,72,0.8)] transition-all flex items-center justify-center gap-3 transform hover:-translate-y-1 text-[15px] uppercase ring-2 ring-red-600/50 hover:ring-red-400">
                Explore Programs <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link href="#consultation" className="w-full sm:w-auto px-10 py-5 rounded-full border border-white/20 bg-white/[0.05] text-white font-bold backdrop-blur-xl hover:bg-white/[0.1] hover:border-white/50 transition-all flex items-center justify-center gap-3 transform hover:-translate-y-1 text-[15px] uppercase shadow-lg">
                <PlayCircle size={24} className="text-red-500 group-hover:scale-110 transition-transform" /> Consultation
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, rotateY: 25, scale: 0.8, x: 50, z: -100 }}
            animate={{ opacity: 1, rotateY: 0, scale: 1, x: 0, z: 0 }}
            transition={{ type: "spring", bounce: 0.4, duration: 1.5, stiffness: 80 }}
            style={{ y: heroY }}
            className="flex justify-center flex-col items-center relative perspective-1000"
          >
            {/* Pop-up Widget 1 (Top Right) */}
            <motion.div 
              initial={{ scale: 0, opacity: 0, rotate: 15 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ type: "spring", delay: 0.5, bounce: 0.6 }}
              whileHover={{ scale: 1.1, rotate: -5 }}
              className="absolute -top-10 -right-4 md:-right-10 z-20 bg-white border border-white text-black p-4 rounded-2xl flex items-center gap-3 shadow-[0_20px_50px_rgba(225,29,72,0.5)] cursor-pointer"
            >
              <div className="bg-red-600 p-2 rounded-full text-white animate-pulse">
                <Zap size={20} />
              </div>
              <div className="font-bold font-outfit text-sm">100% Industry<br/>Aligned</div>
            </motion.div>

            {/* Main Graphic */}
            <motion.div 
              whileHover={{ rotateY: -10, rotateX: 5, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative p-1 rounded-3xl w-full max-w-lg shadow-[0_0_80px_rgba(225,29,72,0.3)] bg-gradient-to-br from-red-600/40 via-transparent to-red-500/20 backdrop-blur-3xl border border-white/10"
            >
              <div className="bg-black/50 p-2 rounded-3xl overflow-hidden backdrop-blur-xl h-full w-full relative">
                <motion.img 
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  src="/hero_ai_graphic.png" 
                  alt="AI Tech Concept" 
                  className="w-full h-auto rounded-2xl mix-blend-lighten"
                />
              </div>
            </motion.div>

            {/* Pop-up Widget 2 (Bottom Left) */}
            <motion.div 
              initial={{ scale: 0, opacity: 0, x: -50, y: 50 }}
              animate={{ scale: 1, opacity: 1, x: 0, y: 0 }}
              transition={{ type: "spring", delay: 0.7, bounce: 0.7 }}
              whileHover={{ scale: 1.15, rotate: 5 }}
              className="absolute -bottom-8 -left-4 md:-left-12 z-20 bg-black/80 border border-white/20 backdrop-blur-2xl p-5 rounded-3xl flex items-center gap-4 shadow-[0_20px_50px_rgba(0,0,0,0.8)] cursor-pointer"
            >
              <div className="bg-gradient-to-br from-red-600 to-red-900 p-4 rounded-2xl text-white shadow-[0_0_15px_rgba(225,29,72,0.8)]">
                <Briefcase size={28} />
              </div>
              <div>
                <div className="font-extrabold font-outfit text-2xl text-white">Top <span className="text-red-500 animate-pulse">1%</span></div>
                <div className="text-sm text-gray-400 font-medium tracking-wide">Curriculum</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. TRUST SECTION */}
      <section className="py-16 relative z-10 bg-black/90 backdrop-blur-3xl border-y border-white/10 border-t-red-500/30 overflow-hidden">
        <motion.div 
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-[0.03] bg-[url('/grid.svg')] z-0 pointer-events-none" 
        />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { icon: Users, val: "1000+", label: "Active Students" },
              { icon: Award, val: "50+", label: "Industry Mentors" },
              { icon: Briefcase, val: "95%", label: "Placement Support" }
            ].map((stat, i) => (
              <motion.div key={i} variants={popUp} whileHover={{ scale: 1.1, translateY: -10 }} className="flex flex-col items-center justify-center text-center space-y-3 p-8 glass hover:bg-white/10 border border-white/5 hover:border-red-500/50 transition-colors group cursor-pointer shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/30 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <stat.icon className="text-red-500 w-12 h-12 mb-2 group-hover:scale-125 transition-transform duration-300 relative z-10" />
                <div className="text-4xl md:text-5xl font-black font-outfit text-white relative z-10">{stat.val}</div>
                <div className="text-white/60 text-sm font-bold tracking-widest uppercase relative z-10">{stat.label}</div>
              </motion.div>
            ))}
            
            <motion.div variants={popUp} whileHover={{ scale: 1.05 }} className="flex flex-col items-center justify-center text-center space-y-4 p-8 glass border-white/5 bg-gradient-to-b from-white/5 to-transparent">
              <div className="text-sm text-red-500 mb-2 uppercase tracking-widest font-black">Top Hiring Partners</div>
              <div className="flex gap-4 items-center opacity-80 mix-blend-screen">
                <span className="font-extrabold text-2xl text-white">Google</span>
                <span className="font-extrabold text-2xl text-white">AWS</span>
                <span className="font-extrabold text-2xl text-white">Meta</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. OUR PROGRAMS (CORE SECTION) */}
      <section id="programs" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/20 to-black"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", bounce: 0.5, duration: 1 }}
            className="text-center mb-20 max-w-3xl mx-auto"
          >
            <h2 className="text-5xl md:text-7xl font-outfit font-black mb-6 drop-shadow-xl">Our Elite <span className="text-transparent bg-clip-text bg-gradient-to-b from-red-400 to-red-700">Programs</span></h2>
            <p className="text-white/70 font-inter text-xl">Industry-curated curriculum with hands-on labs, real-world case studies, and scalable AI infrastructure.</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { title: "Data & Business Analytics", icon: <BarChart3 />, desc: "Master big data tools, dashboards, and analytical storytelling.", img: "/course_data.png" },
              { title: "Cloud & DevOps", icon: <Cloud />, desc: "Design & deploy resilient cloud infra with AWS, Kubernetes & CI/CD.", img: "/course_cloud.png" },
              { title: "Gen AI & Agentic AI", icon: <BrainCircuit />, desc: "Build enterprise LLMs, RAG layers, and autonomous agents.", img: "/course_ai.png" },
              { title: "AI Digital Marketing", icon: <LineChart />, desc: "Growth hacking with precision AI campaigns and automation.", img: "/course_marketing.png" },
              { title: "Financial Modelling", icon: <Building />, desc: "IB standards, Valuation, and Risk assessment in modern finance.", img: "/course_finance.png" },
              { title: "Multi-Cloud Architecture", icon: <Network />, desc: "Seamless interoperability and scaling across AWS, Azure, GCP.", img: "/course_multicloud.png" }
            ].map((program, idx) => (
              <motion.div 
                key={idx} 
                variants={popUp}
                whileHover={{ y: -15, scale: 1.05 }}
                className="glass group transition-all duration-300 border-2 border-white/5 hover:border-red-500/50 bg-black/80 hover:bg-black/95 backdrop-blur-3xl relative overflow-hidden shadow-2xl cursor-pointer rounded-3xl"
              >
                <div className="relative h-56 w-full overflow-hidden bg-black/50">
                   <Image src={program.img} alt={program.title} fill className="object-cover opacity-70 group-hover:opacity-100 transition-transform duration-700 group-hover:scale-110 mix-blend-screen" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                   <div className="absolute bottom-4 left-4 z-10">
                     <motion.div 
                       whileHover={{ rotate: 180, scale: 1.2 }}
                       className={`w-12 h-12 rounded-xl flex items-center justify-center bg-black/80 backdrop-blur-md text-red-500 border border-red-500/50 group-hover:bg-red-600 group-hover:text-white shadow-[0_0_20px_rgba(225,29,72,0.8)]`}
                     >
                       <div className="w-6 h-6">{program.icon}</div>
                     </motion.div>
                   </div>
                </div>
                <div className="p-8 relative">
                  <h3 className="text-2xl md:text-3xl font-extrabold mb-3 font-outfit text-white group-hover:text-red-400 transition-colors drop-shadow-xl">{program.title}</h3>
                  <p className="text-white/60 text-sm mb-8 leading-relaxed font-medium">{program.desc}</p>
                  <Link href={`/programs`} className="inline-flex w-full px-6 py-4 rounded-xl border border-white/10 bg-white/5 text-white hover:text-white hover:bg-red-600 hover:border-red-500 hover:shadow-[0_0_25px_rgba(225,29,72,0.6)] font-bold items-center justify-center gap-3 transition-all text-sm uppercase tracking-wider relative overflow-hidden group/btn">
                    <span className="relative z-10 w-full text-center flex items-center justify-center gap-2">Learn More <ChevronRight size={18} className="group-hover/btn:translate-x-2 transition-transform" /></span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. CAREER SUPPORT & 5. LEAD FORM */}
      <section id="consultation" className="py-32 bg-[#030303] relative border-y border-white/10 overflow-hidden">
        <motion.div 
          animate={{ rotate: 360, scale: [1, 1.2, 1] }} 
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[url('/grid.svg')] opacity-[0.08] z-0 pointer-events-none mix-blend-screen"
        ></motion.div>
        
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={popRight} className="text-5xl md:text-7xl font-outfit font-black mb-6 text-white drop-shadow-lg">Complete <br/><span className="text-red-600 drop-shadow-[0_0_20px_rgba(225,29,72,0.5)]">Career Support</span></motion.h2>
            <motion.p variants={popRight} className="text-white/70 mb-12 text-xl leading-relaxed">We focus exclusively on outcome-driven education. Your success is the only metric we optimize for. Get access to insider networks and elite resume curation.</motion.p>
            
            <div className="space-y-8">
              {[
                { title: "Placement Assistance", desc: "Direct referrals to startups and tech giants." },
                { title: "Resume Building", desc: "ATS-optimized profiles guaranteed to pass screening." },
                { title: "Mock Interviews", desc: "Live sessions mimicking top tier hiring standards." },
                { title: "Industry Mentors", desc: "1-on-1 guidance from professionals actively working in the field." }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  variants={popRight}
                  whileHover={{ scale: 1.05, x: 20 }}
                  className="flex gap-6 items-start group bg-white/[0.03] p-4 rounded-2xl border border-white/5 cursor-pointer backdrop-blur-md"
                >
                  <div className="w-12 h-12 rounded-xl bg-red-600/20 border border-red-500/50 flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all shadow-[0_0_15px_rgba(225,29,72,0.3)]">
                    <ChevronRight size={24} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold font-outfit text-white group-hover:text-red-400 transition-colors">{item.title}</h4>
                    <p className="text-white/60 text-base mt-1">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", bounce: 0.5, duration: 1.2 }}
            className="flex justify-center perspective-1000 relative"
          >
            {/* Pulsing rings around form */}
            <div className="absolute inset-0 w-full h-full flex items-center justify-center">
              <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }} transition={{ duration: 4, repeat: Infinity }} className="absolute w-[110%] h-[110%] border border-red-500/30 rounded-[3rem]" />
              <motion.div animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }} transition={{ duration: 4, repeat: Infinity, delay: 0.5 }} className="absolute w-[120%] h-[120%] border border-red-500/20 rounded-[4rem]" />
            </div>
            <LeadForm />
          </motion.div>
        </div>
      </section>

      {/* 6. MENTORS SECTION */}
      <section id="mentors" className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", bounce: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-24"
          >
            <h2 className="text-5xl md:text-7xl font-outfit font-black mb-6 text-white drop-shadow-xl">Learn From <span className="text-red-600 drop-shadow-[0_0_20px_rgba(225,29,72,0.8)]">The Best</span></h2>
            <p className="text-white/70 text-xl max-w-3xl mx-auto">Our mentors actively engineer and build products at the world's most innovative tech companies.</p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            {[
              { name: "Rajiv Sharma", role: "Lead AI Researcher", exp: "12+ Years Exp.", img: "/mentor_1.png" },
              { name: "Priya Mehta", role: "Sr. Data Scientist", exp: "8+ Years Exp.", img: "/mentor_2.png" },
              { name: "David Miller", role: "Cloud Architect", exp: "10+ Years Exp.", img: "/mentor_3.png" }
            ].map((mentor, i) => (
              <motion.div 
                key={i} 
                variants={popUp}
                whileHover={{ y: -25, scale: 1.05 }}
                className="glass rounded-3xl overflow-hidden group bg-black border-2 border-white/10 hover:border-red-500/50 shadow-2xl cursor-pointer"
              >
                <div className="h-96 w-full relative overflow-hidden backdrop-blur-sm">
                  <motion.div 
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full"
                  >
                    <Image src={mentor.img} alt={mentor.name} fill className="object-cover opacity-60 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700" />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                  
                  {/* Floating badge */}
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.2 }}
                    className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-[0_0_15px_rgba(225,29,72,0.6)]"
                  >
                    EXPERT
                  </motion.div>
                </div>
                <div className="p-8 relative -mt-32 text-center z-10">
                  <h3 className="text-4xl font-black font-outfit text-white drop-shadow-2xl mb-2 group-hover:text-red-400 transition-colors">{mentor.name}</h3>
                  <div className="text-base font-bold text-red-500 uppercase tracking-[0.2em] mb-2 bg-red-500/10 inline-block px-4 py-1 rounded-full backdrop-blur-md border border-red-500/30">{mentor.role}</div>
                  <div className="text-sm font-semibold text-white/50">{mentor.exp}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* 7. CTA SECTION */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/10 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
            whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ scale: 1.02, rotateX: -5 }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="glass p-12 md:p-32 text-center rounded-[3rem] relative overflow-hidden border-2 border-red-500/40 shadow-[0_0_80px_rgba(225,29,72,0.25)] perspective-1000"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/30 via-black to-red-900/30"></div>
            
            {/* Animated particles */}
            {[...Array(5)].map((_, i) => (
              <motion.div 
                key={i}
                animate={{ 
                  y: [0, Math.random() * -100 - 50, 0],
                  x: [0, Math.random() * 100 - 50, 0],
                  opacity: [0, 0.5, 0]
                }}
                transition={{ duration: 4 + Math.random() * 4, repeat: Infinity }}
                className="absolute w-2 h-2 bg-red-500 rounded-full blur-[2px]"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`
                }}
              />
            ))}

            <div className="relative z-10">
              <h2 className="text-5xl md:text-8xl font-black font-outfit mb-8 text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">Start Your AI Journey <br/><span className="text-red-500 drop-shadow-[0_0_40px_rgba(225,29,72,0.8)] animate-pulse">Today</span></h2>
              <p className="text-2xl text-white/80 max-w-3xl mx-auto mb-12 font-medium">
                Don't let the AI revolution pass you by. Join the next elite cohort and engineer your future.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-5 w-full max-w-2xl mx-auto z-20 relative">
                <Link href="#programs" className="w-full sm:w-auto px-12 py-5 rounded-full bg-gradient-to-r from-red-600 to-red-500 text-white font-black uppercase tracking-widest hover:from-red-500 hover:to-red-400 shadow-[0_0_50px_rgba(225,29,72,0.6)] hover:shadow-[0_0_70px_rgba(225,29,72,0.9)] transition-all transform hover:-translate-y-2 hover:scale-105 active:scale-95 text-lg ring-2 ring-red-600/50 flex justify-center">
                  Enroll Now
                </Link>
                <a href="https://wa.me/919876543210" className="w-full sm:w-auto px-12 py-5 rounded-full border-2 border-white/20 hover:border-white/80 backdrop-blur-xl bg-white/[0.05] hover:bg-white/[0.1] transition-all font-bold flex items-center justify-center gap-3 text-white text-lg transform hover:-translate-y-2 hover:scale-105 shadow-xl">
                  <MessageCircle size={28} className="text-[#25D366] drop-shadow-[0_0_15px_rgba(37,211,102,0.8)]" /> WhatsApp Us
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
