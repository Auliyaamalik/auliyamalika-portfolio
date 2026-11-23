"use client";
import { useEffect, useRef, useState } from "react";
import Modal from "./Modal";
import { projects, type Project } from "@/data/content";

function Img({ p, src }: { p: Project; src?: string }) {
  return src ? <img src={src} alt={p.title} /> : <div className="gb" style={{ width: "100%", height: "100%", display: "grid", placeItems: "center", padding: 16, textAlign: "center", fontWeight: 700 }}>{p.title}</div>;
}

export default function Projects() {
  const rail = useRef<HTMLDivElement>(null);
  const car = useRef<HTMLDivElement>(null);
  const drag = useRef({ on: false, x: 0, l: 0, m: 0 });
  const [open, setOpen] = useState(false);
  const [sel, setSel] = useState<Project>(projects[0]);
  const [idx, setIdx] = useState(0);

  const scrollRail = (d: number) => rail.current?.scrollBy({ left: d * rail.current.clientWidth * 0.6, behavior: "smooth" });
  const slide = (d: number) => car.current?.scrollBy({ left: d * car.current.clientWidth, behavior: "smooth" });

  useEffect(() => {
    const move = (e: PointerEvent) => { const d = drag.current; if (!d.on || !rail.current) return; d.m = Math.abs(e.clientX - d.x); rail.current.scrollLeft = d.l - (e.clientX - d.x); };
    const up = () => { drag.current.on = false; rail.current?.classList.remove("drag"); };
    addEventListener("pointermove", move); addEventListener("pointerup", up);
    return () => { removeEventListener("pointermove", move); removeEventListener("pointerup", up); };
  }, []);
  useEffect(() => {
    if (!open) return;
    const k = (e: KeyboardEvent) => { if (e.key === "ArrowRight") slide(1); if (e.key === "ArrowLeft") slide(-1); };
    addEventListener("keydown", k); return () => removeEventListener("keydown", k);
  }, [open]);

  const slides = sel.images.length ? sel.images : [""];

  return (
    <>
      <div className="rctl">
        <button className="btn" aria-label="Geser kiri" onClick={() => scrollRail(-1)}>‹</button>
        <button className="btn" aria-label="Geser kanan" onClick={() => scrollRail(1)}>›</button>
      </div>
      <div className="rail" ref={rail}
        onPointerDown={(e) => { if (e.pointerType !== "mouse" || !rail.current) return; drag.current = { on: true, x: e.clientX, l: rail.current.scrollLeft, m: 0 }; rail.current.classList.add("drag"); }}
        onClickCapture={(e) => { if (drag.current.m > 5) { e.stopPropagation(); e.preventDefault(); drag.current.m = 0; } }}>
        {projects.map((p, i) => (
          <div className="pw" key={p.title}>
            <button className="proj glass" style={{ "--i": i, "--r": [-1.6, 1, -0.6, 1.8, -1.2][i % 5] + "deg" } as React.CSSProperties}
              onClick={() => { setSel(p); setIdx(0); setOpen(true); }}>
              <div className="art"><Img p={p} src={p.images[0]} /></div>
              <div className="body"><h3>{p.title}</h3><p>{p.subtitle}</p><div className="kw">{p.keywords.map((k) => <span key={k}>{k}</span>)}</div></div>
            </button>
          </div>
        ))}
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="cw">
          <div className="car" ref={car} onScroll={(e) => setIdx(Math.round(e.currentTarget.scrollLeft / e.currentTarget.clientWidth))}>
            {slides.map((s, i) => <div className="sl" key={i}><Img p={sel} src={s} /></div>)}
          </div>
          {slides.length > 1 && (<>
            <button className="ar l" aria-label="Sebelumnya" onClick={() => slide(-1)}>‹</button>
            <button className="ar r" aria-label="Berikutnya" onClick={() => slide(1)}>›</button>
            <div className="dt">{slides.map((_, i) => <i key={i} className={i === idx ? "on" : ""} />)}</div>
          </>)}
        </div>
        <div className="in">
          <h3>{sel.title}</h3>
          <p style={{ marginBottom: 0 }}>{sel.subtitle}</p>
          <div className="kw">{sel.keywords.map((k) => <span key={k}>{k}</span>)}</div>
          <h4>Overview</h4><p>{sel.summary}</p>
          <h4>What I Worked On</h4><ul>{sel.points.map((x) => <li key={x}>{x}</li>)}</ul>
          <div className="actions"><a className="btn main" href={sel.link} target="_blank" rel="noopener">View Project</a></div>
        </div>
      </Modal>
    </>
  );
}
