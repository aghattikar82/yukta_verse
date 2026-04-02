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
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#05080c]/85 backdrop-blur-xl shadow-lg border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-xl md:text-2xl font-bold font-outfit uppercase tracking-wide">
          YUKTA VERSE <span className="text-[#FFD700] text-sm md:text-base ml-1 font-normal">(AI Lab)</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 items-center text-sm font-medium">
          <li>
            <Link href="/programs" className="hover:text-[#FFD700] transition-colors">Programs</Link>
          </li>
          <li>
            <Link href="/career-support" className="hover:text-[#FFD700] transition-colors">Career Support</Link>
          </li>
          <li>
            <Link href="/mentors" className="hover:text-[#FFD700] transition-colors">Mentors</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-[#FFD700] transition-colors">Why Us</Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="px-5 py-2 rounded-full border border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700]/10 transition-colors"
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
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0a0f18] border-b border-white/10 p-6 flex flex-col space-y-4">
          <Link href="/programs" onClick={() => setMobileMenuOpen(false)}>Programs</Link>
          <Link href="/career-support" onClick={() => setMobileMenuOpen(false)}>Career Support</Link>
          <Link href="/mentors" onClick={() => setMobileMenuOpen(false)}>Mentors</Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)}>Why Us</Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="text-[#FFD700]">Contact Us</Link>
        </div>
      )}
    </nav>
  );
}
