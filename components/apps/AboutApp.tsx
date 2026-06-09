export default function AboutApp() {
  return (
    <div className="p-8 md:p-12 h-full text-gray-200 overflow-y-auto max-w-4xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="w-32 h-32 rounded-2xl bg-gradient-to-tr from-os-accent to-purple-500 flex-shrink-0" />
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">Prem Gaikwad</h1>
          <p className="text-os-accent text-lg font-medium mb-4">Self-Taught Full Stack Developer & AI Product Builder</p>
          <p className="text-gray-400 leading-relaxed">
            Based in Kamothe, Panvel, Maharashtra, India. I build production-grade web applications with a focus on seamless UX, robust architecture, and cutting-edge frontend technologies. I am a BCA student passionate about open source, modern web development, and future entrepreneurship.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white/5 p-6 rounded-xl border border-os-border">
          <h3 className="text-xl font-semibold text-white mb-4">Career Goals</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-400">
            <li>Future Startup Founder</li>
            <li>AI Product Builder</li>
            <li>Open Source Contributor</li>
            <li>Mastering the Modern Web Stack</li>
          </ul>
        </div>
        <div className="bg-white/5 p-6 rounded-xl border border-os-border">
          <h3 className="text-xl font-semibold text-white mb-4">Current Learning</h3>
          <p className="text-gray-400 leading-relaxed">
            Continuously expanding my knowledge in system design, WebRTC, real-time collaboration infrastructures (Liveblocks/Convex), and AI integrations.
          </p>
        </div>
      </div>
    </div>
  );
}
