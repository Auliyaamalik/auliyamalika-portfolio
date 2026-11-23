import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Backdrop from "@/components/Backdrop";
import Nav from "@/components/Nav";
import CvModal from "@/components/CvModal";
import Intro from "@/components/Intro";

const font = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", weight: ["400", "500", "600", "700", "800"] });
export const metadata: Metadata = { title: "Auliya Malika Idi – Portofolio", description: "Portofolio Auliya Malika Idi, mahasiswa Sistem Informasi ITS." };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={font.variable}>
      <body>
        <Intro /><Backdrop /><Nav />{children}
        <footer>© 2026 Auliya Malika Idi</footer>
        <CvModal />
      </body>
    </html>
  );
}
