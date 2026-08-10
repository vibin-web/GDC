import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-cyan-500 selection:text-white relative overflow-hidden font-sans">
      {/* Background Decorative Gradients */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15"></div>

      {/* Header */}
      <header className="relative z-10 border-b border-slate-800/80 bg-slate-900/40 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <span className="text-white font-bold text-sm">⚡</span>
            </div>
            <span className="font-semibold text-lg tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Vite + React App
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              Ready to Build
            </span>
          </div>
        </div>
      </header>

      {/* Hero Content */}
      <main className="relative z-10 max-w-4xl mx-auto px-6 py-16 text-center flex-1 flex flex-col items-center justify-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/60 border border-slate-700/60 text-slate-300 text-xs font-medium mb-8 backdrop-blur-sm shadow-inner">
          <span className="text-cyan-400 font-semibold">Tailwind v4</span> Enabled & Integrated
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent leading-tight">
          Empty Starter Template
        </h1>

        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Clean, minimal, and fully configured with <span className="text-cyan-400 font-medium">React</span>, <span className="text-purple-400 font-medium">Vite</span>, and <span className="text-blue-400 font-medium">Tailwind CSS</span>.
        </p>

        {/* Counter Widget */}
        <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl shadow-2xl mb-12 w-full max-w-md">
          <p className="text-sm font-medium text-slate-400 mb-4">
            Test state & interaction
          </p>
          <button
            onClick={() => setCount((c) => c + 1)}
            className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 hover:from-cyan-400 hover:via-blue-400 hover:to-purple-500 text-white font-medium shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 active:scale-[0.98] transition-all duration-200 cursor-pointer flex items-center justify-center gap-3 text-base"
          >
            <span>Count is</span>
            <span className="px-2.5 py-0.5 rounded-md bg-white/20 font-mono font-bold">
              {count}
            </span>
          </button>
        </div>

        {/* Tech Stack Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl text-left">
          <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/60 hover:border-cyan-500/40 transition-colors">
            <div className="text-xl mb-2">⚡</div>
            <h3 className="font-semibold text-white text-base mb-1">Vite</h3>
            <p className="text-xs text-slate-400 leading-normal">
              Next-generation frontend tooling with instant HMR.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/60 hover:border-purple-500/40 transition-colors">
            <div className="text-xl mb-2">⚛️</div>
            <h3 className="font-semibold text-white text-base mb-1">React 19</h3>
            <p className="text-xs text-slate-400 leading-normal">
              Modern component architecture with fast JSX rendering.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/60 hover:border-blue-500/40 transition-colors">
            <div className="text-xl mb-2">🎨</div>
            <h3 className="font-semibold text-white text-base mb-1">Tailwind CSS v4</h3>
            <p className="text-xs text-slate-400 leading-normal">
              First-class utility engine powered by @tailwindcss/vite.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-800/60 bg-slate-950/60 backdrop-blur-md py-6 text-center text-xs text-slate-500">
        <p>Edit <code className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">src/App.jsx</code> to start building your app.</p>
      </footer>
    </div>
  )
}
