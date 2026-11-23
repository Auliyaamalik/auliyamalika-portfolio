export default function CvButton({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <a className={className} href="/CV_-_AULIYA_MALIKA_IDI.pdf" target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}