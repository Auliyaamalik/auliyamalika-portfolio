"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { jobs } from "@/data/content";

export default function Experience() {
  const [open, setOpen] = useState(0);
  return (
    <div className="tl">
      {jobs.map((j, i) => {
        const toggle = () => setOpen(open === i ? -1 : i);
        return (
          <motion.article key={j.title} className={`job glass${open === i ? " open" : ""}`} tabIndex={0} role="button" aria-expanded={open === i}
            onClick={toggle} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); } }}
            initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.7 }}>
            <i />
            <header><h3>{j.title}</h3><time>{j.date}</time></header>
            <p className="org">{j.org}</p>
            <ul><div>{j.points.map((p) => <li key={p}>{p}</li>)}</div></ul>
          </motion.article>
        );
      })}
    </div>
  );
}
