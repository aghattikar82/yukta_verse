"use client";

import { useState } from "react";

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Add CRM integration logic here
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <div className="glass p-8 rounded-2xl md:max-w-md w-full relative overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#ea3a3a]/10 blur-3xl rounded-full"></div>

      <div className="relative z-10">
        <h3 className="text-2xl font-bold font-outfit mb-2">Book Free Consultation</h3>
        <p className="text-gray-400 text-sm mb-6">Talk to our experts and map out your AI career path today.</p>
        
        {submitted ? (
          <div className="bg-[#25D366]/20 border border-[#25D366]/50 text-[#25D366] p-4 rounded-lg text-center">
            <h4 className="font-semibold mb-1">Request Received!</h4>
            <p className="text-sm">Our mentors will contact you shortly.</p>
          </div>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-xs text-gray-400 mb-1">Full Name</label>
              <input
                type="text"
                className="w-full bg-[#05080c] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-red-500 transition-colors"
                required
              />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">Email Address</label>
              <input
                type="email"
                className="w-full bg-[#05080c] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-red-500 transition-colors"
                required
              />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">Phone Number (WhatsApp)</label>
              <input
                type="tel"
                className="w-full bg-[#05080c] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-red-500 transition-colors"
                required
              />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">Interested Program</label>
              <select className="w-full bg-[#05080c] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-red-500 transition-colors" required>
                <option value="" disabled selected>Select a program</option>
                <option value="data">Data & Business Analytics</option>
                <option value="cloud">Cloud & DevOps</option>
                <option value="genai">Gen AI & Agentic AI</option>
                <option value="marketing">Digital Marketing</option>
                <option value="finance">Financial Modelling</option>
                <option value="multicloud">Multi-Cloud Architecture</option>
              </select>
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold rounded-lg px-4 py-3 hover:shadow-[0_0_15px_rgba(225,29,72,0.5)] transition-all flex items-center justify-center gap-2 mt-4"
            >
              Get Free Consultation
            </button>
            <p className="text-[10px] text-gray-500 text-center mt-2">By submitting this form, you agree to our terms & privacy policy.</p>
          </form>
        )}
      </div>
    </div>
  );
}
