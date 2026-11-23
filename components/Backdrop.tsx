"use client";
import { useEffect, useRef } from "react";

/* Latar gradasi + titik + cahaya yang mengikuti kursor */
export default function Backdrop() {
  const glow = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const R = document.documentElement;
    const reduce = matchMedia("(prefers-reduced-motion:reduce)").matches;
    let tx = innerWidth / 2, ty = innerHeight / 3, x = tx, y = ty, raf = 0;
    const move = (e: PointerEvent) => {
      tx = e.clientX; ty = e.clientY;
      R.style.setProperty("--cx", tx + "px"); R.style.setProperty("--cy", ty + "px");
      const t = (e.target as HTMLElement).closest?.(".glass") as HTMLElement | null;
      if (t) { const r = t.getBoundingClientRect(); t.style.setProperty("--mx", e.clientX - r.left + "px"); t.style.setProperty("--my", e.clientY - r.top + "px"); }
      const n = document.getElementById("name");
      if (n) { const h = n.getBoundingClientRect(); n.style.setProperty("--hx", e.clientX - h.left + "px"); n.style.setProperty("--hy", e.clientY - h.top + "px"); }
    };
    const loop = () => {
      x += (tx - x) * (reduce ? 1 : 0.12); y += (ty - y) * (reduce ? 1 : 0.12);
      if (glow.current) glow.current.style.transform = `translate3d(${x - 310}px,${y - 310}px,0)`;
      raf = requestAnimationFrame(loop);
    };
    addEventListener("pointermove", move, { passive: true });
    loop();
    return () => { removeEventListener("pointermove", move); cancelAnimationFrame(raf); };
  }, []);
  return (<><div className="bg" aria-hidden="true"><i /><i /><i /></div><div className="dots" aria-hidden="true" /><div className="glow" ref={glow} aria-hidden="true" /></>);
}
