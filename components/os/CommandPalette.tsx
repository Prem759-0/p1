"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import { useOS } from "@/context/OSContext";

export default function CommandPalette({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState("");
  const { apps, openApp } = useOS();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const filteredApps = apps.filter((app) => app.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center pt-[-10vh]">
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={onClose}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-xl bg-[#1A1A1D] border border-os-border rounded-xl shadow-2xl overflow-hidden flex flex-col"
        >
          <div className="flex items-center px-4 py-3 border-b border-os-border">
            <Search className="text-gray-400 mr-3" size={20} />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="What do you need?"
              className="flex-1 bg-transparent text-white outline-none text-lg placeholder:text-gray-500"
            />
            <div className="text-xs text-gray-500 bg-white/10 px-2 py-1 rounded">ESC</div>
          </div>
          <div className="max-h-80 overflow-y-auto p-2">
            {filteredApps.length === 0 ? (
              <div className="p-4 text-center text-gray-500">No results found.</div>
            ) : (
              filteredApps.map((app) => (
                <button
                  key={app.id}
                  onClick={() => { openApp(app.id); onClose(); }}
                  className="w-full flex items-center px-4 py-3 hover:bg-os-accent/20 hover:text-os-accent text-gray-300 rounded-lg transition-colors group"
                >
                  <span className="mr-3 text-gray-500 group-hover:text-os-accent">{app.icon}</span>
                  <span>Open {app.title}</span>
                </button>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
