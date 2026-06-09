"use client";

import { motion } from "framer-motion";
import { useOS } from "@/context/OSContext";
import { cn } from "@/lib/utils";

export default function Dock() {
  const { apps, windows, openApp } = useOS();

  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-3 px-4 py-3 bg-os-panel/50 backdrop-blur-xl border border-os-border rounded-2xl shadow-2xl">
        {apps.map((app) => {
          const isOpen = windows.some((w) => w.id === app.id);
          return (
            <motion.button
              key={app.id}
              whileHover={{ scale: 1.2, y: -10 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => openApp(app.id)}
              className="relative group p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
            >
              <div className="text-white">{app.icon}</div>
              {isOpen && (
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full" />
              )}
              {/* Tooltip */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-os-darker border border-os-border rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                {app.title}
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
