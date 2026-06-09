import React from "react";
import { Mail, Github, Linkedin, ExternalLink } from "lucide-react";

export default function ContactApp() {
  return (
    <div className="p-8 h-full bg-os-dark/50 text-white flex flex-col items-center justify-center">
      <div className="max-w-md w-full bg-white/5 border border-os-border p-8 rounded-2xl shadow-2xl backdrop-blur-xl">
        <h1 className="text-3xl font-bold mb-2 text-center">Let's Connect</h1>
        <p className="text-gray-400 text-center mb-8">Looking for opportunities and open to collaborate on exciting projects.</p>
        
        <div className="space-y-4">
          <a 
            href="mailto:a70064182@gmail.com" 
            className="flex items-center justify-between p-4 bg-white/5 border border-os-border rounded-xl hover:bg-white/10 transition-colors group"
          >
            <div className="flex items-center gap-4">
              <Mail className="text-os-accent" />
              <span className="font-medium">a70064182@gmail.com</span>
            </div>
            <ExternalLink size={16} className="text-gray-500 group-hover:text-white transition-colors" />
          </a>

          <a 
            href="https://github.com/Prem759-0" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center justify-between p-4 bg-white/5 border border-os-border rounded-xl hover:bg-white/10 transition-colors group"
          >
            <div className="flex items-center gap-4">
              <Github className="text-white" />
              <span className="font-medium">GitHub Profile</span>
            </div>
            <ExternalLink size={16} className="text-gray-500 group-hover:text-white transition-colors" />
          </a>

          <a 
            href="https://www.linkedin.com/in/prem-gaikwad-64a417370/" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center justify-between p-4 bg-white/5 border border-os-border rounded-xl hover:bg-white/10 transition-colors group"
          >
            <div className="flex items-center gap-4">
              <Linkedin className="text-blue-400" />
              <span className="font-medium">LinkedIn Network</span>
            </div>
            <ExternalLink size={16} className="text-gray-500 group-hover:text-white transition-colors" />
          </a>
        </div>
      </div>
    </div>
  );
}
