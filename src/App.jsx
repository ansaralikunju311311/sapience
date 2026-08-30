import { useState } from 'react'
import { 
  Zap, 
  Layers, 
  Sparkles, 
  Cpu, 
  ShieldCheck, 
  Terminal, 
  CheckCircle2, 
  ArrowRight,
  Code2,
  Boxes,
  Activity
} from 'lucide-react'


function App() {
  const [count, setCount] = useState(0)
  const [activeTab, setActiveTab] = useState('overview')

  const features = [
    {
      icon: <Zap className="w-6 h-6 text-amber-400" />,
      title: "Vite 8 & HMR",
      description: "Instant server start and lightning fast Hot Module Replacement during development."
    },
    {
      icon: <Layers className="w-6 h-6 text-cyan-400" />,
      title: "Tailwind CSS v4",
      description: "Next-gen utility-first styling engine directly integrated with Vite."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-purple-400" />,
      title: "React 19 Core",
      description: "Latest React features for fluid UI rendering and clean modular state management."
    },
    {
      icon: <Boxes className="w-6 h-6 text-emerald-400" />,
      title: "Lucide Icons",
      description: "Clean, consistent icon system ready out of the box."
    }
  ]

  const packages = [
    { name: "react", version: "^19.2.8", category: "Framework Core", status: "Installed" },
    { name: "react-dom", version: "^19.2.8", category: "DOM Renderer", status: "Installed" },
    { name: "tailwindcss", version: "^4.3.3", category: "Styling Engine", status: "Active" },
    { name: "@tailwindcss/vite", version: "^4.3.3", category: "Vite Plugin", status: "Active" },
    { name: "lucide-react", version: "^1.37.0", category: "Icons Library", status: "Ready" },
    { name: "clsx & tailwind-merge", version: "^2.1.1", category: "Class Utilities", status: "Ready" },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-slate-950">
      {/* Background Glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl"></div>
      </div>

      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/20">
              <Cpu className="w-5 h-5 text-slate-950 font-bold" />
            </div>
            <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Sapience
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              React + Tailwind v4
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Environment Ready
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-6 py-12 relative z-10 space-y-12">
        {/* Hero Section */}
        <section className="text-center space-y-6 max-w-3xl mx-auto pt-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-blue-500/10 border border-slate-800 text-xs font-medium text-slate-300">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Modern Web Stack Initialized</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            React App environment successfully configured for <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">Sapience</span>
          </h1>

          <p className="text-lg text-slate-400 leading-relaxed">
            All core dependencies, Tailwind CSS v4 styling engine, Vite build toolchain, and Lucide React icons are installed and fully functional.
          </p>

          {/* Interactive Counter Demo */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setCount((c) => c + 1)}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold transition-all duration-200 shadow-lg shadow-cyan-500/25 active:scale-95 flex items-center justify-center gap-2"
            >
              <Activity className="w-5 h-5" />
              Interactive Counter: <span className="bg-slate-950/20 px-2 py-0.5 rounded text-slate-950 font-mono">{count}</span>
            </button>

            <a
              href="#packages"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-semibold transition-all duration-200 flex items-center justify-center gap-2"
            >
              View Installed Packages
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </a>
          </div>
        </section>

        {/* Feature Cards Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all duration-300 space-y-3 hover:-translate-y-1 shadow-lg shadow-slate-950/50"
            >
              <div className="p-3 w-fit rounded-xl bg-slate-800/80 border border-slate-700/50">
                {item.icon}
              </div>
              <h3 className="font-bold text-lg text-slate-100">{item.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </section>

        {/* Installed Packages Table */}
        <section id="packages" className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-2">
                <Code2 className="w-6 h-6 text-cyan-400" />
                Configured Dependencies & Libraries
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                Packages installed in package.json and configured for Sapience
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400 font-mono bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800">
                JavaScript (.jsx)
              </span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  <th className="py-3 px-4">Package</th>
                  <th className="py-3 px-4">Category</th>
                  <th className="py-3 px-4">Version</th>
                  <th className="py-3 px-4 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-sm">
                {packages.map((pkg, i) => (
                  <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                    <td className="py-3.5 px-4 font-mono font-medium text-cyan-300">{pkg.name}</td>
                    <td className="py-3.5 px-4 text-slate-300">{pkg.category}</td>
                    <td className="py-3.5 px-4 font-mono text-xs text-slate-400">{pkg.version}</td>
                    <td className="py-3.5 px-4 text-right">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {pkg.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Quick Instructions / Terminal Card */}
        <section className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
          <div className="flex items-center gap-2 text-slate-300 font-semibold text-sm">
            <Terminal className="w-4 h-4 text-cyan-400" />
            Quick Commands
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <div className="text-slate-500"># Start local development server</div>
              <div className="text-emerald-400">npm run dev</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <div className="text-slate-500"># Build production bundle</div>
              <div className="text-cyan-400">npm run build</div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 py-8 text-center text-xs text-slate-500">
        <p>Sapience • Powered by React 19, Tailwind CSS v4, and Vite</p>
      </footer>
    </div>
  )
}

export default App
