"use client";
import { useEffect, useState } from "react";
import Modal from "./Modal";

const PDF = "/CV_-_AULIYA_MALIKA_IDI.pdf";
export default function CvModal() {
  const [open, setOpen] = useState(false);
  useEffect(() => { const f = () => setOpen(true); addEventListener("open-cv", f); return () => removeEventListener("open-cv", f); }, []);
  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <div className="in">
        <h3>Curriculum Vitae</h3>
        <p>Auliya Malika Idi · Sistem Informasi ITS · IPK 3.76</p>
        <h4>Summary</h4>
        <ul>
          <li>Enterprise Architecture at Pelindo (Jul 2026 – Present)</li>
          <li>Information Management &amp; Data Analytics at PHR Regional 1 (Jan – Feb 2026)</li>
          <li>Teaching Assistant Database Analysis (Sep – Des 2025)</li>
          <li>Head of External Affairs, HMSI ITS (Mar 2026 – Present)</li>
          <li>Juara 1 UI/UX Rafatech 2024 · Bakti BCA 2025 · SAP S/4HANA (2024)</li>
        </ul>
        <div className="actions">
          <a className="btn main" href={PDF} target="_blank" rel="noopener">View PDF</a>
          <a className="btn" href={PDF} download>Download CV</a>
        </div>
      </div>
    </Modal>
  );
}
