"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function ExitIntentPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Show when the user's cursor goes above the top of the viewport
      if (e.clientY <= 0 && !hasShown) {
        setShowPopup(true);
        setHasShown(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasShown]);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="relative glass w-full max-w-md p-8 rounded-2xl animate-in zoom-in duration-300">
        <button
          onClick={() => setShowPopup(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X size={20} />
        </button>
        <div className="text-center">
          <h2 className="text-2xl font-bold font-outfit mb-2 gradient-text">Wait! Before you leave...</h2>
          <p className="text-gray-300 mb-6 text-sm">
            Unlock our exclusive AI & Data Science Starter Guide and get 10% off your first program.
          </p>
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setShowPopup(false); }}>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-[#05080c] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500 transition-colors"
              required
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold rounded-lg px-4 py-3 hover:shadow-[0_0_15px_rgba(225,29,72,0.5)] transition-all"
            >
              Get Free Guide & Discount
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-4">We respect your privacy. No spam.</p>
        </div>
      </div>
    </div>
  );
}
