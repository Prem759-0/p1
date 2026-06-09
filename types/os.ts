import { ReactNode } from "react";

export type AppID = "about" | "projects" | "skills" | "terminal" | "contact";

export interface WindowState {
  id: AppID;
  title: string;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
  component: ReactNode;
  icon: ReactNode;
}

export interface AppConfig {
  id: AppID;
  title: string;
  icon: ReactNode;
  component: ReactNode;
}
