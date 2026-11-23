"use client";
import { useEffect, useState } from "react";

const LINKS = [["about", "About"], ["experience", "Experience"], ["projects", "Projects"], ["stack", "Tech stack"]];

export default function Nav() {
  const [active, setActive] = useState("");
  useEffect(() => {
    const o = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-40% 0px -55% 0px" });
    document.querySelectorAll("section[id]").forEach((s) => o.observe(s));
    return () => o.disconnect();
  }, []);
  return (
    <nav className="glass" aria-label="Navigasi utama">
      <a className="logo" href="#home">Auliya</a>
      <ul>{LINKS.map(([id, t]) => <li key={id}><a href={"#" + id} className={active === id ? "on" : ""}>{t}</a></li>)}</ul>
      <a className="btn main" href="#contact">Contact</a>
    </nav>
  );
}
