"use client";
import { useEffect, useState } from "react";
import { Save } from "lucide-react";

export default function AdminSettings() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [announcementText, setAnnouncementText] = useState("");
  const [announcementActive, setAnnouncementActive] = useState(true);

  useEffect(() => {
    fetch('/api/settings')
      .then(res => res.json())
      .then(data => {
        if (data.announcement) {
          setAnnouncementText(data.announcement.text);
          setAnnouncementActive(data.announcement.isActive);
        }
        setLoading(false);
      });
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    await fetch('/api/settings', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        announcement: {
          text: announcementText,
          isActive: announcementActive
        }
      })
    });
    setSaving(false);
    alert("Settings saved successfully!");
  };

  if (loading) return <div className="text-red-500 font-bold p-8">Loading settings payload...</div>;

  return (
    <div className="animate-in fade-in zoom-in-95 duration-300">
      <h1 className="text-4xl font-black font-outfit mb-8 drop-shadow-lg">Global Settings</h1>
      
      <div className="bg-black/80 backdrop-blur-3xl p-10 border-2 border-white/5 rounded-3xl shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 blur-[80px] rounded-full pointer-events-none"></div>
        <h2 className="text-2xl font-bold mb-8 border-b-2 border-white/5 pb-4 text-white">Top Announcement Bar</h2>
        
        <form onSubmit={handleSave} className="space-y-8 relative z-10">
          
          {/* Toggle Block */}
          <div className="flex items-center justify-between bg-white/[0.02] p-6 rounded-2xl border border-white/5">
            <div>
              <div className="font-bold text-white text-lg">Enable Announcement</div>
              <div className="text-sm text-gray-500 mt-1">Show the red bar at the very top of all pages.</div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" checked={announcementActive} onChange={(e) => setAnnouncementActive(e.target.checked)} />
              <div className="w-14 h-8 bg-gray-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-red-600 shadow-inner"></div>
            </label>
          </div>

          {/* Text Input Block */}
          <div>
            <label className="block text-sm font-bold uppercase tracking-widest text-gray-400 mb-3">Announcement Text</label>
            <input 
              type="text" 
              className="w-full bg-[#050505] border-2 border-white/10 rounded-2xl px-6 py-4 text-lg text-white focus:outline-none focus:border-red-500 transition-colors shadow-inner"
              value={announcementText}
              onChange={(e) => setAnnouncementText(e.target.value)}
              placeholder="e.g. Next batch starts in 5 days! Use code AI50..."
            />
          </div>

          {/* Setup CRM Block - Placeholder */}
          <div className="pt-6 mt-6 border-t border-white/5">
             <label className="block text-sm font-bold uppercase tracking-widest text-gray-400 mb-3">Lead Capture Email (CRM Setup)</label>
             <input 
               type="email"
               disabled
               className="w-full bg-[#050505] border-2 border-white/5 rounded-2xl px-6 py-4 text-lg text-gray-600 cursor-not-allowed"
               placeholder="hi@yuktaverse.com"
             />
             <p className="text-xs text-red-500/80 mt-2 font-medium">To modify this, please contact your systems administrator to unlock CRM settings.</p>
          </div>

           {/* Submit */}
          <div className="flex justify-end pt-8">
            <button 
              type="submit" 
              disabled={saving}
              className="px-10 py-4 bg-red-600 hover:bg-red-500 text-white font-black rounded-xl shadow-[0_0_30px_rgba(225,29,72,0.6)] disabled:opacity-50 disabled:shadow-none transition-all flex items-center gap-3 uppercase tracking-wide text-sm transform hover:-translate-y-1 active:scale-95"
            >
              <Save size={20} /> {saving ? 'Saving...' : 'Save Settings'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
