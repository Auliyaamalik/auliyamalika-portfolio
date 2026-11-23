"use client";
import { useState } from "react";

/* Taruh foto di public/photo.jpg. Kalau belum ada, tampil monogram. */
export default function Photo() {
  const [fail, setFail] = useState(false);
  return fail ? <b>AM</b> : <img src="/fotoaul.jpeg" alt="Foto Auliya Malika Idi" onError={() => setFail(true)} />;
}
