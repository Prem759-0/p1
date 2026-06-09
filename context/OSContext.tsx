"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { AppID, WindowState, AppConfig } from "@/types/os";
import { User, Briefcase, Code2, Terminal as TerminalIcon, Mail } from "lucide-react";

import AboutApp from "@/components/apps/AboutApp";
import ProjectsApp from "@/components/apps/ProjectsApp";
import SkillsApp from "@/components/apps/SkillsApp";
import TerminalApp from "@/components/apps/TerminalApp";
import ContactApp from "@/components/apps/ContactApp";

const appsConfig: AppConfig[] = [
  { id: "about", title: "About Me", icon: <User size={24} />, component: <AboutApp /> },
  { id: "projects", title: "Projects", icon: <Briefcase size={24} />, component: <ProjectsApp /> },
  { id: "skills", title: "Skills", icon: <Code2 size={24} />, component: <SkillsApp /> },
  { id: "terminal", title: "Terminal", icon: <TerminalIcon size={24} />, component: <TerminalApp /> },
  { id: "contact", title: "Contact", icon: <Mail size={24} />, component: <ContactApp /> },
];

interface OSContextType {
  windows: WindowState[];
  apps: AppConfig[];
  openApp: (id: AppID) => void;
  closeApp: (id: AppID) => void;
  minimizeApp: (id: AppID) => void;
  maximizeApp: (id: AppID) => void;
  focusApp: (id: AppID) => void;
}

const OSContext = createContext<OSContextType | undefined>(undefined);

export function OSProvider({ children }: { children: React.ReactNode }) {
  const [windows, setWindows] = useState<WindowState[]>([]);
  const [highestZ, setHighestZ] = useState(1);

  const focusApp = useCallback((id: AppID) => {
    setHighestZ((prev) => prev + 1);
    setWindows((prev) =>
      prev.map((win) => (win.id === id ? { ...win, zIndex: highestZ + 1, isMinimized: false } : win))
    );
  }, [highestZ]);

  const openApp = useCallback((id: AppID) => {
    const existing = windows.find((w) => w.id === id);
    if (existing) {
      focusApp(id);
      return;
    }
    const app = appsConfig.find((a) => a.id === id);
    if (!app) return;

    const newHighestZ = highestZ + 1;
    setHighestZ(newHighestZ);
    setWindows((prev) => [
      ...prev,
      {
        id,
        title: app.title,
        isOpen: true,
        isMinimized: false,
        isMaximized: false,
        zIndex: newHighestZ,
        component: app.component,
        icon: app.icon,
      },
    ]);
  }, [windows, highestZ, focusApp]);

  const closeApp = useCallback((id: AppID) => {
    setWindows((prev) => prev.filter((win) => win.id !== id));
  }, []);

  const minimizeApp = useCallback((id: AppID) => {
    setWindows((prev) => prev.map((win) => (win.id === id ? { ...win, isMinimized: true } : win)));
  }, []);

  const maximizeApp = useCallback((id: AppID) => {
    setWindows((prev) => prev.map((win) => (win.id === id ? { ...win, isMaximized: !win.isMaximized } : win)));
    focusApp(id);
  }, [focusApp]);

  return (
    <OSContext.Provider value={{ windows, apps: appsConfig, openApp, closeApp, minimizeApp, maximizeApp, focusApp }}>
      {children}
    </OSContext.Provider>
  );
}

export const useOS = () => {
  const context = useContext(OSContext);
  if (!context) throw new Error("useOS must be used within OSProvider");
  return context;
};
