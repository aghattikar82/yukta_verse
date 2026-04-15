"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import LeadForm from "./LeadForm";
import { motion, AnimatePresence } from "framer-motion";

export default function LeadModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpenModal = () => setIsOpen(true);
    window.addEventListener("open-lead-modal", handleOpenModal);
    return () => window.removeEventListener("open-lead-modal", handleOpenModal);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-lg z-10"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-4 -right-4 bg-red-600 text-white p-2 rounded-full shadow-lg z-20 hover:bg-red-500 transition-colors"
            >
              <X size={20} />
            </button>
            <LeadForm />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export const triggerLeadModal = () => {
  window.dispatchEvent(new Event("open-lead-modal"));
};
