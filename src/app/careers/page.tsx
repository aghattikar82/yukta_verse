"use client";

import { Briefcase, ArrowRight, CheckCircle2, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function CareersPage() {
  const jobs = [
    {
      title: "Business Development Manager",
      type: "Full-time",
      location: "Bangalore / Remote",
      experience: "4-7 Years",
      desc: "Drive growth and strategic partnerships. Responsibilities include owning the sales funnel, managing enterprise clients, and scaling the B2B revenue pipeline.",
      reqs: ["Proven track record in EdTech B2B sales", "Excellent communication and negotiation skills", "Ability to lead a high-performing sales team"]
    },
    {
      title: "Senior Career Counsellor",
      type: "Full-time",
      location: "Bangalore / Remote",
      experience: "3-5 Years",
      desc: "Lead and mentor our team of career counsellors. Guide senior professionals and executives toward making the right upskilling choices in AI and Data.",
      reqs: ["Experience in premium EdTech counselling", "Strong leadership and mentoring abilities", "Deep understanding of the current tech job market"]
    },
    {
      title: "Career Counsellor",
      type: "Full-time",
      location: "Bangalore / Remote",
      experience: "1-3 Years",
      desc: "Advise learners on their career paths. Your role is vital in helping prospective students understand the value of our specialized AI programs.",
      reqs: ["Excellent interpersonal and empathy skills", "Target-driven mindset with a passion for education", "Prior inside sales or counselling experience preferred"]
    }
  ];

  return (
    <div className="bg-[#050505] text-white min-h-screen pt-32 pb-20 font-inter">
      {/* Header */}
      <section className="container mx-auto px-6 text-center mb-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-5xl md:text-7xl font-black font-outfit mb-6">Join <span className="text-red-500">YUKTA VERSE</span></h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
            We are building the elite team that will democratize premium AI and technical education globally. Come build the future with us.
          </p>
        </motion.div>
      </section>

      {/* Why Join Us */}
      <section className="container mx-auto px-6 mb-24">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Impact Driven", desc: "Every role directly contributes to shaping the next generation of tech leaders." },
            { title: "Rapid Growth", desc: "Work in a high-velocity environment with unparalleled opportunities for career advancement." },
            { title: "Premium Culture", desc: "Collaborate with industry experts, AI researchers, and passionate educators." }
          ].map((perk, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }} transition={{ delay: i * 0.1 }} className="bg-[#0a0a0a] border border-white/5 p-8 rounded-3xl hover:border-red-500/30 transition-colors">
              <h3 className="text-2xl font-bold font-outfit mb-4 text-white">{perk.title}</h3>
              <p className="text-gray-400">{perk.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Open Positions */}
      <section className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-4xl font-black font-outfit mb-10 text-white flex items-center gap-4">
          <Briefcase className="text-red-500" size={32} /> Open Positions
        </h2>
        
        <div className="space-y-6">
          {jobs.map((job, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once:true }}
              className="bg-gradient-to-r from-white/[0.02] to-black border border-white/10 p-8 rounded-3xl hover:border-red-500/50 transition-all group"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <div>
                  <h3 className="text-2xl font-bold font-outfit text-white group-hover:text-red-400 transition-colors">{job.title}</h3>
                  <div className="flex flex-wrap gap-3 mt-3 text-sm font-semibold tracking-wide uppercase">
                    <span className="bg-red-600/10 text-red-500 border border-red-500/20 px-3 py-1 rounded-md">{job.type}</span>
                    <span className="bg-white/5 text-gray-300 border border-white/10 px-3 py-1 rounded-md">{job.location}</span>
                    <span className="bg-white/5 text-gray-300 border border-white/10 px-3 py-1 rounded-md">{job.experience}</span>
                  </div>
                </div>
                <a href="mailto:connect@yuktaverse.com" className="bg-red-600 hover:bg-red-500 text-white font-bold py-3 px-8 rounded-full shadow-[0_0_20px_rgba(225,29,72,0.4)] transition-all flex items-center gap-2 shrink-0">
                  Apply Now <ArrowRight size={18} />
                </a>
              </div>
              
              <div className="text-gray-400 mb-6 leading-relaxed">
                {job.desc}
              </div>
              
              <div>
                <h4 className="text-white font-bold mb-3 font-outfit">Requirements:</h4>
                <ul className="space-y-2">
                  {job.reqs.map((req, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                      <CheckCircle2 size={18} className="text-red-500 shrink-0 mt-0.5" /> {req}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="container mx-auto px-6 mt-32 max-w-4xl">
        <div className="bg-gradient-to-br from-red-950/40 via-black to-red-900/20 border border-red-500/20 p-12 text-center rounded-[3rem] relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-black font-outfit mb-4 text-white">Don't see a role that fits?</h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">We are always on the lookout for exceptional talent. Send us your resume and let's talk.</p>
            <a href="mailto:connect@yuktaverse.com" className="inline-flex items-center gap-3 bg-white text-black hover:bg-gray-200 font-bold py-4 px-8 rounded-full transition-colors mx-auto">
              <Mail size={20} /> connect@yuktaverse.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
