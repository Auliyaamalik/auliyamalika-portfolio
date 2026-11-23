"use client";
import { useEffect, useState } from "react";
import CvButton from "./CvButton";

const NAME = "Auliya Malika Idi";
export default function Hero() {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion:reduce)").matches) { setN(NAME.length); return; }
    let i = 0, t: ReturnType<typeof setTimeout>;
    const run = () => { t = setTimeout(function tick() { setN(++i); if (i < NAME.length) t = setTimeout(tick, 90); }, 450); };
    if ((window as unknown as { __intro?: boolean }).__intro) run(); else addEventListener("intro-done", run, { once: true });
    return () => { clearTimeout(t); removeEventListener("intro-done", run); };
  }, []);
  const text = NAME.slice(0, n);
  const caret = n < NAME.length ? <span className="caret" /> : null;
  return (
    <section id="home">
      <div className="wrap">
        <span className="status glass">Final Year Student @ Information Systems ITS</span>
        <h1 className="name" id="name" aria-label={NAME}>
          <span className="base" aria-hidden="true">{text}{caret}</span>
          <span className="lit" aria-hidden="true">{text}{caret}</span>
        </h1>
        <p className="interest">Interested in how businesses operate, how data informs decisions, and how systems and processes can be structured to work more effectively.</p>
        <div className="cta"><a className="btn main" href="#projects">Project</a><CvButton className="btn">CV</CvButton></div>
      </div>
    </section>
  );
}
