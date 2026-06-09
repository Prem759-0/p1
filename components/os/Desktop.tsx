"use client";

import React, { useRef, useEffect, useState } from "react";
import { useOS } from "@/context/OSContext";
import WindowNode from "./WindowNode";
import Dock from "./Dock";
import TopBar from "./TopBar";
import CommandPalette from "./CommandPalette";

export default function Desktop() {
  const desktopRef = useRef<HTMLDivElement>(null);
  const { windows } = useOS();
  const [cmdKOpen, setCmdKOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setCmdKOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div 
      ref={desktopRef} 
      className="relative h-screen w-screen bg-gradient-to-br from-[#0F172A] via-[#1E1B4B] to-[#000000] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <TopBar />
      
      <div className="absolute inset-0 pt-8 pb-20 pointer-events-none z-10">
        {windows.map((win) => (
          <WindowNode key={win.id} windowState={win} desktopRef={desktopRef} />
        ))}
      </div>

      <Dock />
      {cmdKOpen && <CommandPalette onClose={() => setCmdKOpen(false)} />}
    </div>
  );
}
