const skills = {
  Frontend: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind", "Shadcn"],
  Backend: ["Node.js", "Convex", "tRPC", "Clerk", "Mux", "UploadThing", "Liveblocks"],
  Databases: ["MongoDB", "PostgreSQL", "Drizzle", "Prisma"],
  Tools: ["Git", "GitHub", "Vercel"]
};

export default function SkillsApp() {
  return (
    <div className="p-8 h-full overflow-y-auto text-white">
      <h1 className="text-3xl font-bold mb-8">Technical Arsenal</h1>
      <div className="space-y-8">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h2 className="text-xl font-semibold mb-4 text-gray-300">{category}</h2>
            <div className="flex flex-wrap gap-3">
              {items.map((skill) => (
                <div key={skill} className="px-4 py-2 bg-white/5 border border-os-border rounded-lg text-sm hover:bg-os-accent/20 hover:text-os-accent hover:border-os-accent/50 transition-all cursor-default">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
