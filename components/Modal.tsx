"use client";
import { AnimatePresence, motion } from "motion/react";
import { useEffect } from "react";

export default function Modal({ open, onClose, children }: { open: boolean; onClose: () => void; children: React.ReactNode }) {
  useEffect(() => {
    if (!open) return;
    const k = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    addEventListener("keydown", k); document.body.style.overflow = "hidden";
    return () => { removeEventListener("keydown", k); document.body.style.overflow = ""; };
  }, [open, onClose]);
  return (
    <AnimatePresence>
      {open && (
        <motion.div className="modal show" role="dialog" aria-modal="true" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }} onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
          <motion.div className="sheet glass" initial={{ y: 28, scale: 0.98 }} animate={{ y: 0, scale: 1 }} exit={{ y: 20, opacity: 0 }}
            transition={{ type: "spring", damping: 26, stiffness: 260 }}>
            <button className="x" aria-label="Tutup" onClick={onClose}>×</button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
