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

    <div className="bg-white text-red-600 outline outline-1 outline-red-100 text-sm font-bold tracking-wide py-2.5 px-4 relative z-50 flex items-center justify-center shadow-[0_4px_20px_rgba(255,255,255,0.1)] animate-in slide-in-from-top">
      <div className="container mx-auto text-center pr-8 drop-shadow-sm">
        {data.text}
      </div>
      <button 
        onClick={() => setVisible(false)} 
        className="absolute right-4 hover:bg-gray-100 p-1 rounded-full transition-colors text-red-400 hover:text-red-600"
      >
        <X size={16} />
      </button>
    </div>
  );
}
