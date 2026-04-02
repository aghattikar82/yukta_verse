"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Users, Award, Briefcase, PlayCircle, BarChart3, Cloud, BrainCircuit, LineChart, Building, Network, MessageCircle } from "lucide-react";
import LeadForm from "@/components/LeadForm";

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-24 pb-20">
        {/* Glow Backgrounds */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#FFD700]/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#ea3a3a]/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>

        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-1.5 rounded-full glass text-[#FFD700] text-sm font-semibold tracking-wider">
              🔥 Learn Future Skills in One Place
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold font-outfit leading-tight">
              Master AI, Data & <br />
              <span className="gradient-text">Future Technologies</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-lg leading-relaxed">
              Industry-ready programs designed for modern careers. Build production-grade skills and scale your career with 1-on-1 expert mentorship.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="#programs" className="px-8 py-4 rounded-full bg-gradient-to-r from-[#FFD700] to-[#ffb300] text-black font-semibold hover:shadow-[0_0_20px_rgba(255,215,0,0.4)] transition-all flex items-center gap-2">
                Explore Programs <ChevronRight size={18} />
              </Link>
              <Link href="#consultation" className="px-8 py-4 rounded-full glass text-white font-medium hover:bg-white/10 transition-all flex items-center gap-2">
                <PlayCircle size={20} className="text-[#FFD700]" /> Watch Preview
              </Link>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end animate-float">
            <div className="relative p-2 glass rounded-3xl w-full max-w-lg">
              <Image 
                src="/hero_ai_graphic.png" 
                alt="AI Tech Concept" 
                width={600} 
                height={600} 
                className="w-full h-auto rounded-2xl"
                priority
              />
              <div className="absolute -bottom-6 -left-6 glass p-4 rounded-xl flex items-center gap-4">
                <div className="bg-[#ea3a3a] p-3 rounded-full text-white">
                  <Briefcase size={24} />
                </div>
                <div>
                  <div className="font-bold font-outfit text-xl">Top 1%</div>
                  <div className="text-xs text-gray-400">Curriculum standard</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST SECTION */}
      <section className="py-10 border-y border-white/5 relative z-10 bg-[#05080c]/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center justify-center text-center space-y-2 p-6 glass glass-hover transition-all">
              <Users className="text-[#FFD700] w-10 h-10 mb-2" />
              <div className="text-4xl font-bold font-outfit">1000+</div>
              <div className="text-gray-400 text-sm">Active Students</div>
            </div>
            <div className="flex flex-col items-center justify-center text-center space-y-2 p-6 glass glass-hover transition-all">
              <Award className="text-[#ea3a3a] w-10 h-10 mb-2" />
              <div className="text-4xl font-bold font-outfit">50+</div>
              <div className="text-gray-400 text-sm">Industry Mentors</div>
            </div>
            <div className="flex flex-col items-center justify-center text-center space-y-2 p-6 glass glass-hover transition-all">
              <Briefcase className="text-[#FFD700] w-10 h-10 mb-2" />
              <div className="text-4xl font-bold font-outfit">95%</div>
              <div className="text-gray-400 text-sm">Placement Support</div>
            </div>
            <div className="flex flex-col items-center justify-center text-center space-y-2 p-6 glass">
              <div className="text-sm text-gray-400 mb-2 uppercase tracking-wider">Top Hiring Partners</div>
              <div className="flex gap-4 items-center opacity-70">
                <span className="font-bold text-xl">Google</span>
                <span className="font-bold text-xl">AWS</span>
                <span className="font-bold text-xl">Meta</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR PROGRAMS (CORE SECTION) */}
      <section id="programs" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-outfit font-bold mb-4">Our Premium <span className="gradient-text">Programs</span></h2>
            <p className="text-gray-400 font-inter">Industry-curated curriculum with hands-on labs, real-world case studies, and scalable AI infrastructure.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Data & Business Analytics", icon: <BarChart3 />, desc: "Master big data tools, dashboards, and analytical storytelling.", color: "text-[#FFD700]", bg: "bg-[#FFD700]/10" },
              { title: "Cloud & DevOps", icon: <Cloud />, desc: "Design & deploy resilient cloud infra with AWS, Kubernetes & CI/CD.", color: "text-[#ea3a3a]", bg: "bg-[#ea3a3a]/10" },
              { title: "Gen AI & Agentic AI", icon: <BrainCircuit />, desc: "Build enterprise LLMs, RAG layers, and autonomous agents.", color: "text-blue-400", bg: "bg-blue-400/10" },
              { title: "AI Digital Marketing", icon: <LineChart />, desc: "Growth hacking with precision AI campaigns and automation.", color: "text-[#FFD700]", bg: "bg-[#FFD700]/10" },
              { title: "Financial Modelling", icon: <Building />, desc: "IB standards, Valuation, and Risk assessment in modern finance.", color: "text-[#ea3a3a]", bg: "bg-[#ea3a3a]/10" },
              { title: "Multi-Cloud Architecture", icon: <Network />, desc: "Seamless interoperability and scaling across AWS, Azure, GCP.", color: "text-purple-400", bg: "bg-purple-400/10" }
            ].map((program, idx) => (
              <div key={idx} className="glass glass-hover p-8 group transition-all duration-300 border-t-4 border-t-transparent hover:border-t-[#FFD700]">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 {program.bg} ${program.color} ${program.bg}`}>
                  <div className="w-8 h-8">{program.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-3 font-outfit">{program.title}</h3>
                <p className="text-gray-400 text-sm mb-6">{program.desc}</p>
                <Link href={`/programs`} className="text-[#FFD700] hover:text-white font-medium flex items-center gap-2 group-hover:gap-4 transition-all text-sm">
                  Learn More <ChevronRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CAREER SUPPORT & 5. LEAD FORM (CONSULTATION) */}
      <section id="consultation" className="py-24 bg-[#05080c] relative">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <h2 className="text-3xl md:text-5xl font-outfit font-bold mb-6">Complete <span className="gradient-text">Career Support</span></h2>
            <p className="text-gray-400 mb-10 leading-relaxed">We focus exclusively on outcome-driven education. Your success is the only metric we optimize for. Get access to insider networks and resume curation.</p>
            
            <div className="space-y-6">
              {[
                { title: "Placement Assistance", desc: "Direct referrals to startups and tech giants." },
                { title: "Resume Building", desc: "ATS-optimized profiles guaranteed to pass screening." },
                { title: "Mock Interviews", desc: "Live sessions mimicking top tier hiring standards." },
                { title: "Industry Mentors", desc: "1-on-1 guidance from professionals actively working in the field." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-6 h-6 mt-1 rounded-full bg-[#FFD700]/20 flex items-center justify-center text-[#FFD700]">
                    <ChevronRight size={14} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold font-outfit text-white">{item.title}</h4>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <LeadForm />
          </div>
        </div>
      </section>

      {/* 6. MENTORS SECTION */}
      <section id="mentors" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-outfit font-bold mb-4">Learn From <span className="gradient-text">The Best</span></h2>
            <p className="text-gray-400">Our mentors actively build products at the world's most innovative companies.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Rajiv Sharma", role: "Lead AI Researcher", exp: "12+ Years Exp.", img: "/mentor_1.png", color: "text-[#FFD700]" },
              { name: "Priya Mehta", role: "Sr. Data Scientist", exp: "8+ Years Exp.", img: "/mentor_2.png", color: "text-[#ea3a3a]" },
              { name: "David Miller", role: "Cloud Architect", exp: "10+ Years Exp.", img: "/mentor_3.png", color: "text-blue-400" }
            ].map((mentor, i) => (
              <div key={i} className="glass rounded-2xl overflow-hidden group">
                <div className="h-80 w-full relative overflow-hidden">
                  <Image src={mentor.img} alt={mentor.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110 group-hover:grayscale-0 grayscale-[20%]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f18] to-transparent"></div>
                </div>
                <div className="p-6 relative -mt-16 text-center">
                  <h3 className="text-2xl font-bold font-outfit">{mentor.name}</h3>
                  <div className={`text-sm font-semibold mb-1 ${mentor.color}`}>{mentor.role}</div>
                  <div className="text-xs text-gray-400">{mentor.exp}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* 7. CTA SECTION */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="glass p-12 md:p-20 text-center rounded-3xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/10 to-[#ea3a3a]/10"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold font-outfit mb-6">Start Your AI Journey <span className="gradient-text">Today</span></h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
                Don't let the AI revolution pass you by. Join the next cohort and engineer your future.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="#programs" className="px-8 py-4 rounded-full bg-gradient-to-r from-[#FFD700] to-[#ffb300] text-black font-bold uppercase tracking-wide hover:shadow-[0_0_20px_rgba(255,215,0,0.5)] transition-all">
                  Enroll Now
                </Link>
                <a href="https://wa.me/919876543210" className="px-8 py-4 rounded-full glass hover:bg-white/10 transition-all font-medium flex items-center gap-2 text-[#25D366] border-[#25D366]/30">
                  <MessageCircle size={20} /> WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
