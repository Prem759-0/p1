import React from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    name: "TeleChat",
    desc: "Modern messaging platform with chat, groups, video calls, authentication, realtime communication.",
    tech: ["Next.js", "TypeScript", "Convex", "Clerk", "Stream", "Tailwind"],
  },
  {
    name: "YouTube V2",
    desc: "Production-grade YouTube clone with robust video hosting and streaming capabilities.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle", "Mux", "UploadThing", "Clerk", "tRPC"],
  },
  {
    name: "Miro Clone",
    desc: "Collaborative realtime whiteboard platform supporting multi-user cursors and drawing.",
    tech: ["Next.js", "TypeScript", "Convex", "Liveblocks", "Clerk"],
  },
];

export default function ProjectsApp() {
  return (
    <div className="p-8 bg-os-dark/50 h-full text-white overflow-y-auto">
      <h1 className="text-3xl font-bold mb-8">Featured Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((proj, idx) => (
          <div key={idx} className="bg-white/5 border border-os-border p-6 rounded-xl hover:bg-white/10 transition-colors flex flex-col h-full">
            <h2 className="text-xl font-semibold mb-2">{proj.name}</h2>
            <p className="text-gray-400 text-sm mb-6 flex-1">{proj.desc}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {proj.tech.map((t) => (
                <span key={t} className="px-2 py-1 text-xs bg-os-accent/20 text-os-accent rounded-md border border-os-accent/30">{t}</span>
              ))}
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 text-sm bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors w-full justify-center">
                <ExternalLink size={16} /> Live
              </button>
              <button className="flex items-center gap-2 text-sm bg-white/10 text-white px-4 py-2 rounded-lg font-medium hover:bg-white/20 transition-colors w-full justify-center">
                <Github size={16} /> Code
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
