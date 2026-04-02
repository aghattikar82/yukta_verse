"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#05080c]/85 backdrop-blur-xl shadow-lg border-b border-white/5 py-3"
          : "bg-[#050505] py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 text-xl md:text-2xl font-bold font-outfit shadow-sm">
          <video src="/logo-animation.mp4" autoPlay loop muted playsInline className="w-8 md:w-10 h-8 md:h-10 object-cover rounded-full mix-blend-screen" />
          <span className="uppercase tracking-wide text-white">YUKTA VERSE</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 items-center text-sm font-medium text-white/80">
          <li>
            <Link href="/#programs" className="hover:text-red-400 transition-colors">Programs</Link>
          </li>
          <li>
            <Link href="/#consultation" className="hover:text-red-400 transition-colors">Career Support</Link>
          </li>
          <li>
            <Link href="/#mentors" className="hover:text-red-400 transition-colors">Mentors</Link>
          </li>
          <li>
            <Link href="/" className="hover:text-red-400 transition-colors">Why Us</Link>
          </li>
          <li>
            <Link
              href="/#consultation"
              className="px-5 py-2 rounded-full border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all shadow-[0_0_15px_rgba(225,29,72,0.3)] hover:shadow-[0_0_20px_rgba(225,29,72,0.6)]"
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-red-500/20 p-6 flex flex-col space-y-4 text-white">
          <Link href="/#programs" onClick={() => setMobileMenuOpen(false)}>Programs</Link>
          <Link href="/#consultation" onClick={() => setMobileMenuOpen(false)}>Career Support</Link>
          <Link href="/#mentors" onClick={() => setMobileMenuOpen(false)}>Mentors</Link>
          <Link href="/" onClick={() => setMobileMenuOpen(false)}>Why Us</Link>
          <Link href="/#consultation" onClick={() => setMobileMenuOpen(false)} className="text-red-500 font-bold">Contact Us</Link>
        </div>
      )}
    </nav>
  );
}
