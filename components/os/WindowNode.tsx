"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WindowState } from "@/types/os";
import { useOS } from "@/context/OSContext";
import { X, Minus, Maximize2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface WindowNodeProps {
  windowState: WindowState;
  desktopRef: React.RefObject<HTMLDivElement>;
}

export default function WindowNode({ windowState, desktopRef }: WindowNodeProps) {
  const { closeApp, minimizeApp, maximizeApp, focusApp } = useOS();

  if (windowState.isMinimized) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        drag={!windowState.isMaximized}
        dragConstraints={desktopRef}
        dragElastic={0}
        dragMomentum={false}
        onPointerDown={() => focusApp(windowState.id)}
        style={{ zIndex: windowState.zIndex }}
        className={cn(
          "absolute flex flex-col bg-os-dark/80 backdrop-blur-os border border-os-border shadow-2xl rounded-xl overflow-hidden pointer-events-auto origin-center",
          windowState.isMaximized ? "inset-0 !transform-none rounded-none m-0 pt-8 pb-16" : "w-[800px] h-[550px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        )}
      >
        {/* Title Bar */}
        <div className="h-10 border-b border-os-border flex items-center px-4 bg-white/5 cursor-grab active:cursor-grabbing">
          <div className="flex space-x-2 mr-4">
            <button onClick={() => closeApp(windowState.id)} className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center group"><X className="opacity-0 group-hover:opacity-100 w-2 h-2 text-red-950" /></button>
            <button onClick={() => minimizeApp(windowState.id)} className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 flex items-center justify-center group"><Minus className="opacity-0 group-hover:opacity-100 w-2 h-2 text-yellow-950" /></button>
            <button onClick={() => maximizeApp(windowState.id)} className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center group"><Maximize2 className="opacity-0 group-hover:opacity-100 w-2 h-2 text-green-950" /></button>
          </div>
          <div className="flex-1 text-center text-xs font-medium text-gray-400 select-none">
            {windowState.title}
          </div>
        </div>
        
        {/* App Content */}
        <div className="flex-1 overflow-auto relative">
          {windowState.component}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
