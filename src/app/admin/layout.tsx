"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Settings, Users, MessageSquare, LogOut } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/admin/login";

  if (isLoginPage) return <div className="min-h-screen bg-black">{children}</div>;

  return (
    <div className="min-h-screen bg-[#050505] flex text-white pt-24 font-inter">
      {/* Sidebar */}
      <aside className="w-72 border-r border-white/10 bg-[#030303] hidden md:block relative">
        <div className="p-6 sticky top-24">
          <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6">Admin Panel</div>
          <nav className="space-y-3">
            <Link href="/admin" className={`flex items-center gap-3 px-4 py-3.5 rounded-xl transition-colors ${pathname === '/admin' ? 'bg-red-600/20 text-red-500 border border-red-500/30 font-bold' : 'text-gray-400 hover:bg-white/5 hover:text-white font-medium'}`}>
              <Settings size={20} /> Site Settings
            </Link>
            <Link href="/admin/mentors" className={`flex items-center gap-3 px-4 py-3.5 rounded-xl transition-colors ${pathname === '/admin/mentors' ? 'bg-red-600/20 text-red-500 border border-red-500/30 font-bold' : 'text-gray-400 hover:bg-white/5 hover:text-white font-medium'}`}>
              <Users size={20} /> Manage Mentors
            </Link>
            <Link href="/admin/blogs" className={`flex items-center gap-3 px-4 py-3.5 rounded-xl transition-colors ${pathname === '/admin/blogs' ? 'bg-red-600/20 text-red-500 border border-red-500/30 font-bold' : 'text-gray-400 hover:bg-white/5 hover:text-white font-medium'}`}>
              <MessageSquare size={20} /> Manage Blogs
            </Link>
          </nav>
        </div>
        <div className="absolute bottom-6 left-6 w-[calc(100%-3rem)]">
          <Link href="/admin/login" className="flex justify-center w-full items-center gap-3 text-white bg-white/5 hover:bg-red-600 border border-white/10 rounded-xl px-4 py-3 transition-colors text-sm font-bold shadow-lg uppercase tracking-wide">
            <LogOut size={16} /> Logout
          </Link>
        </div>
      </aside>
      
      {/* Main Content */}
      <main className="flex-1 p-10 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
