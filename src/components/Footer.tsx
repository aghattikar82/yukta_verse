import Link from "next/link";
import { Mail, Phone, MapPin, Globe, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#05080c] border-t border-white/10 pt-20 pb-10 mt-20">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold font-outfit mb-2">YUKTA VERSE</h2>
          <p className="text-gray-400 mb-6 text-sm">Learn Future Skills in One Place. The ultimate platform to build your tech and AI career.</p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-[#FFD700] hover:text-black transition-colors" title="LinkedIn"><Share2 size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-[#FFD700] hover:text-black transition-colors" title="Website"><Globe size={18} /></a>
          </div>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-6">Navigation</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><Link href="/" className="hover:text-[#FFD700] transition-colors">Home</Link></li>
            <li><Link href="/programs" className="hover:text-[#FFD700] transition-colors">Our Programs</Link></li>
            <li><Link href="/about" className="hover:text-[#FFD700] transition-colors">About Us</Link></li>
            <li><Link href="/career-support" className="hover:text-[#FFD700] transition-colors">Career Support</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-6">Links</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><Link href="/mentors" className="hover:text-[#FFD700] transition-colors">Mentors</Link></li>
            <li><Link href="/blog" className="hover:text-[#FFD700] transition-colors">Blogs</Link></li>
            <li><Link href="#" className="hover:text-[#FFD700] transition-colors">Careers</Link></li>
            <li><Link href="/contact" className="hover:text-[#FFD700] transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="flex items-center gap-3"><Mail size={16} className="text-[#FFD700]" /> hello@yuktaverse.ai</li>
            <li className="flex items-center gap-3"><Phone size={16} className="text-[#FFD700]" /> +91 98765 43210</li>
            <li className="flex items-center gap-3"><MapPin size={16} className="text-[#FFD700]" /> Tech Hub, Bangalore, India</li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-white/5 pt-8 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} YUKTA VERSE (AI Lab). All Rights Reserved.</p>
      </div>
    </footer>
  );
}
