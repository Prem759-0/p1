"use client";

import React, { useState, useRef, useEffect } from "react";
import { useOS } from "@/context/OSContext";

type History = { cmd: string; output: React.ReactNode };

export default function TerminalApp() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<History[]>([{ cmd: "", output: "Welcome to PremOS Terminal v1.0.0. Type 'help' to see available commands." }]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const { openApp } = useOS();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const cmd = input.trim().toLowerCase();
      let output: React.ReactNode = "";

      switch (cmd) {
        case "help":
          output = "Available commands: help, about, skills, projects, contact, clear, github, linkedin";
          break;
        case "clear":
          setHistory([]);
          setInput("");
          return;
        case "about":
        case "skills":
        case "projects":
        case "contact":
          openApp(cmd as any);
          output = `Launching ${cmd}...`;
          break;
        case "github":
          window.open("https://github.com/Prem759-0", "_blank");
          output = "Opening GitHub...";
          break;
        case "linkedin":
          window.open("https://www.linkedin.com/in/prem-gaikwad-64a417370/", "_blank");
          output = "Opening LinkedIn...";
          break;
        case "":
          output = "";
          break;
        default:
          output = `Command not found: ${cmd}`;
      }

      setHistory((prev) => [...prev, { cmd: `visitor@premos:~$ ${input}`, output }]);
      setInput("");
    }
  };

  return (
    <div className="h-full bg-[#0C0C0C] p-4 text-green-400 font-mono text-sm overflow-auto">
      {history.map((h, i) => (
        <div key={i} className="mb-2">
          {h.cmd && <div className="text-white">{h.cmd}</div>}
          <div className="whitespace-pre-wrap">{h.output}</div>
        </div>
      ))}
      <div className="flex">
        <span className="text-white mr-2">visitor@premos:~$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleCommand}
          className="flex-1 bg-transparent outline-none border-none text-green-400 caret-green-400"
          autoFocus
        />
      </div>
      <div ref={bottomRef} />
    </div>
  );
}
