"use client";

import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { Wifi, Battery, Search } from "lucide-react";

export default function TopBar() {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setTime(new Date());
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-0 w-full h-8 bg-black/40 backdrop-blur-md border-b border-white/10 z-50 flex items-center justify-between px-4 text-xs text-white font-medium select-none">
      <div className="flex items-center space-x-4">
        <span className="font-bold cursor-pointer hover:text-gray-300">PremOS</span>
        <span className="cursor-pointer hover:text-gray-300 hidden sm:block">File</span>
        <span className="cursor-pointer hover:text-gray-300 hidden sm:block">Edit</span>
        <span className="cursor-pointer hover:text-gray-300 hidden sm:block">View</span>
        <span className="cursor-pointer hover:text-gray-300 hidden sm:block">Go</span>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 text-gray-300 hidden sm:flex">
          <span className="bg-white/10 px-2 py-0.5 rounded flex items-center gap-1 cursor-pointer hover:bg-white/20">
            <Search size={12} /> CMD + K
          </span>
        </div>
        <Wifi size={14} className="cursor-pointer" />
        <Battery size={14} className="cursor-pointer" />
        <span>{time ? format(time, "EEE MMM d   h:mm a") : "Loading..."}</span>
      </div>
    </div>
  );
}
