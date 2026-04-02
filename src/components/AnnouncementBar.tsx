"use client";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function AnnouncementBar() {
  const [data, setData] = useState<{ text: string; isActive: boolean } | null>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    fetch('/api/settings')
      .then(res => res.json())
      .then(res => {
        if (res.announcement) {
          setData(res.announcement);
        }
      })
      .catch(err => console.error("Could not fetch settings", err));
  }, []);

  if (!data || !data.isActive || !visible) return null;

  return (
    <div className="bg-gradient-to-r from-red-700 to-red-600 text-white text-sm font-semibold tracking-wide py-2.5 px-4 relative z-50 flex items-center justify-center shadow-lg animate-in slide-in-from-top border-b border-red-500/50">
      <div className="container mx-auto text-center pr-8">
        {data.text}
      </div>
      <button 
        onClick={() => setVisible(false)} 
        className="absolute right-4 hover:bg-black/20 p-1 rounded-full transition-colors"
      >
        <X size={16} />
      </button>
    </div>
  );
}
