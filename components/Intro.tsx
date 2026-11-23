"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

/* Layar pembuka: nama muncul huruf per huruf + hitungan 000–100, lalu naik membuka halaman.
   Hanya tampil sekali per sesi tab. Ubah durasi di DURATION (ms). */
const WORDS = ["Welcome", "to", "Aul's", "Portfolio"];
const DURATION = 2000;
type W = Window & { __intro?: boolean };
const done = () => { (window as W).__intro = true; window.dispatchEvent(new Event("intro-done")); };

export default function Intro() {
  const [show, setShow] = useState(true);
  const [skip, setSkip] = useState(false);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    if (sessionStorage.getItem("intro") || matchMedia("(prefers-reduced-motion:reduce)").matches) { setSkip(true); done(); return; }
    document.body.style.overflow = "hidden";
    const t0 = performance.now();
    let raf = 0, to: ReturnType<typeof setTimeout>;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / DURATION);
      setPct(Math.round(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else to = setTimeout(() => { setShow(false); done(); }, 400);
    };
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); clearTimeout(to); };
  }, []);

  if (skip) return null;
  return (
    <AnimatePresence onExitComplete={() => { document.body.style.overflow = ""; sessionStorage.setItem("intro", "1"); }}>
      {show && (
        <motion.div className="intro" exit={{ y: "-100%" }} transition={{ duration: 0.95, ease: [0.76, 0, 0.24, 1] }}>
          <div className="nm" role="img" aria-label="Auliya Malika Idi">
            {WORDS.map((w, wi) => (
              <span className="w" key={w} aria-hidden="true">
                {[...w].map((c, ci) => (
                  <motion.span key={ci} initial={{ y: "110%" }} animate={{ y: 0 }}
                    transition={{ duration: 0.7, delay: 0.15 + (wi * 6 + ci) * 0.045, ease: [0.2, 0.7, 0.2, 1] }}>{c}</motion.span>
                ))}
              </span>
            ))}
          </div>
          <div className="ft"><span>Portofolio</span><span>{String(pct).padStart(3, "0")}</span></div>
          <div className="bar" style={{ width: pct + "%" }} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
