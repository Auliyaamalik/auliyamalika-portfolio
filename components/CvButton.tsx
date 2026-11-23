"use client";
export default function CvButton({ children, className }: { children: React.ReactNode; className?: string }) {
  return <button className={className} onClick={() => window.dispatchEvent(new Event("open-cv"))}>{children}</button>;
}
