import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { OSProvider } from "@/context/OSContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prem Gaikwad | Developer OS",
  description: "Portfolio of Prem Gaikwad - Full Stack Developer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-os-darker text-white overflow-hidden select-none`}>
        <OSProvider>
          {children}
        </OSProvider>
      </body>
    </html>
  );
}
