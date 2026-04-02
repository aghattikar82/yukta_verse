"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock } from "lucide-react";

export default function AdminLogin() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Dummy credential check for demo limits
    if (password === "admin123") {
      router.push("/admin");
    } else {
      setError("Invalid password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden text-white bg-black">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/20 blur-[150px] rounded-full"></div>
      
      <div className="bg-black/60 backdrop-blur-2xl p-12 rounded-[2.5rem] w-full max-w-md relative z-10 border border-white/10 shadow-[0_0_80px_rgba(225,29,72,0.15)]">
        <div className="flex justify-center mb-6">
           <div className="bg-red-600/20 p-4 rounded-full border border-red-500/30 text-red-500 shadow-[0_0_20px_rgba(225,29,72,0.5)]">
              <Lock size={32} />
           </div>
        </div>
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold font-outfit mb-2 text-white">System Admin</h1>
          <p className="text-red-400 font-bold tracking-widest text-sm uppercase">Yukta Verse Control Panel</p>
        </div>
        
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-xs uppercase tracking-widest text-gray-500 font-bold mb-3">Admin Password</label>
            <input 
              type="password" 
              className="w-full bg-[#050505] border-2 border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-red-500 focus:shadow-[0_0_15px_rgba(225,29,72,0.3)] transition-all"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password (try: admin123)"
            />
            {error && <p className="text-red-500 text-sm mt-3 font-semibold text-center">{error}</p>}
          </div>
          
          <button 
            type="submit" 
            className="w-full py-4 mt-4 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-black rounded-2xl shadow-[0_0_30px_rgba(225,29,72,0.5)] transition-all uppercase tracking-widest text-sm transform hover:-translate-y-1 active:scale-95"
          >
            Authenticate
          </button>
        </form>
      </div>
    </div>
  );
}
