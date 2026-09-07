import React from 'react'
import { Check, Sparkles, Send, Bot } from 'lucide-react'

export function AiSection() {
  const points = [
    "Ask about headcount, attrition, or leave balances in plain language.",
    "Auto-summarize appraisal feedback into a fair, readable review.",
    "Flag attendance anomalies and policy exceptions before payroll runs."
  ]

  return (
    <section className="py-24 bg-[#032b26] text-white overflow-hidden relative">
      {/* Subtle Glow Background */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#00A896]/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column Text Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00A896]/20 text-[#00A896] text-xs font-bold border border-[#00A896]/30 tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Sapience AI</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-white">
              AI that does the HR legwork
            </h2>

            <p className="text-base text-slate-300 leading-relaxed font-normal">
              Sapience AI sits on top of your own HR data. Ask a question, get an answer with the record behind it — no report builder, no waiting on the analytics team.
            </p>

            <div className="space-y-4 pt-2">
              {points.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-[#00A896]/20 text-[#00A896] flex items-center justify-center shrink-0 border border-[#00A896]/40">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm text-slate-200 leading-normal font-medium">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column Interactive Chat UI Preview */}
          <div className="lg:col-span-6">
            <div className="bg-slate-900/90 rounded-2xl p-5 border border-slate-800 shadow-2xl space-y-4 backdrop-blur-md">
              
              {/* Chat Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-[#00A896] text-white font-bold">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Sapience AI Assistant</h4>
                    <p className="text-[10px] text-slate-400">Connected to live HR records</p>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#00A896]/10 text-[#00A896] border border-[#00A896]/20">
                  Active
                </span>
              </div>

              {/* Chat Conversation */}
              <div className="space-y-3 font-sans text-xs">
                
                {/* User Prompt */}
                <div className="flex justify-end">
                  <div className="bg-[#00A896] text-white px-3.5 py-2 rounded-2xl rounded-tr-none font-semibold max-w-xs shadow-sm">
                    Summarize Q3 performance reviews for Engineering team
                  </div>
                </div>

                {/* AI Response Card */}
                <div className="flex justify-start items-start gap-2.5">
                  <div className="p-1 rounded bg-slate-800 text-[#00A896] shrink-0 mt-0.5">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <div className="bg-slate-800/90 text-slate-200 p-4 rounded-2xl rounded-tl-none space-y-3 max-w-md border border-slate-700/60">
                    <div className="flex items-center justify-between border-b border-slate-700/60 pb-2">
                      <span className="font-bold text-white text-xs">📊 Q3 Performance Summary</span>
                      <span className="text-[10px] text-slate-400">Engineering • 42 Employees</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div className="bg-slate-900/60 p-2 rounded-lg">
                        <span className="text-slate-400 text-[10px]">Exceeding</span>
                        <p className="font-extrabold text-[#00A896] text-sm">31% (13)</p>
                      </div>
                      <div className="bg-slate-900/60 p-2 rounded-lg">
                        <span className="text-slate-400 text-[10px]">On Target</span>
                        <p className="font-extrabold text-[#FD6602] text-sm">62% (26)</p>
                      </div>
                    </div>

                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      Key strengths highlighted across reviews include code architecture quality and sprint velocity. Zero attendance anomalies detected.
                    </p>
                  </div>
                </div>

              </div>

              {/* Suggested Prompts */}
              <div className="pt-2 flex flex-wrap gap-2">
                <span className="text-[10px] text-slate-400 self-center">Suggested:</span>
                <button className="text-[10px] px-2.5 py-1 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors">
                  Onboard new hire for Design
                </button>
                <button className="text-[10px] px-2.5 py-1 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors">
                  Check leave balances
                </button>
              </div>

              {/* Input Box */}
              <div className="flex items-center gap-2 bg-slate-950 p-2 rounded-xl border border-slate-800">
                <input 
                  type="text" 
                  placeholder="Ask a question about your HR data..." 
                  className="bg-transparent text-xs text-white placeholder-slate-500 focus:outline-none flex-1 px-2"
                  readOnly
                />
                <button className="p-2 rounded-lg bg-[#00A896] text-white font-bold hover:bg-[#00887A]">
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
