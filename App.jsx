import React, { useState, useMemo, useEffect } from 'react';
import { 
  Zap, Cpu, ShieldCheck, Database, Globe, 
  TrendingUp, Activity, Terminal, Code, 
  Users, MessageSquare, Scale, Calculator,
  ChevronRight, ArrowRight, CheckCircle2,
  AlertCircle, Battery, Gauge, BarChart3,
  TrendingDown, MapPin, Layers, Briefcase
} from 'lucide-react';

// --- VERIFIED MARKET DATA: BANGLADESH 2026 ---
const DATA = {
  petrolPrice: 125, // BDT per Liter
  electricityUnit: 12.0, // BDT per Unit (Commercial)
  iceMileage: 40, // KM/L (150cc bike avg)
  evEfficiency: 35, // KM/Unit (Ather/Ola avg)
  iceMaintenance: 1200, // Monthly (Oil, filters, tuning)
  evMaintenance: 150, // Monthly (Tires, software updates)
  founderEquity: 25, // %
  partnerEquity: 75, // %
};

const App = () => {
  const [monthlyKm, setMonthlyKm] = useState(1800);
  const [activeTab, setActiveTab] = useState('economics');
  const [agentIndex, setAgentIndex] = useState(0);

  // --- ROI LOGIC ---
  const savings = useMemo(() => {
    const petrolCost = (monthlyKm / DATA.iceMileage) * DATA.petrolPrice;
    const evCost = (monthlyKm / DATA.evEfficiency) * DATA.electricityUnit;
    const monthly = (petrolCost + DATA.iceMaintenance) - (evCost + DATA.evMaintenance);
    return {
      monthly: Math.round(monthly),
      yearly: Math.round(monthly * 12),
      fiveYear: Math.round(monthly * 60)
    };
  }, [monthlyKm]);

  const agiSwarm = [
    {
      name: "Sentinel-1",
      role: "Lead Generation AI",
      stack: "Python + Llama 3.1 + Scrapy",
      desc: "Autonomously mines social sentiment. Identifies 5,000+ high-intent buyers complaining about fuel hikes.",
      humanReplaced: "5 Marketing Staff"
    },
    {
      name: "Nexus-Sales",
      role: "Conversational Closer",
      stack: "OpenAI GPT-4o + Twilio",
      desc: "Handles 1,000+ simultaneous WhatsApp leads. Closes sales using human behavior patterns and trust-building logic.",
      humanReplaced: "10 Sales Executives"
    },
    {
      name: "Guardian-IoT",
      role: "Predictive Maintenance",
      stack: "TensorFlow + MQTT",
      desc: "Monitors battery health across the fleet. Triggers 'Battery-as-a-Service' swaps before the user reports an issue.",
      humanReplaced: "3 Service Managers"
    }
  ];

  const roadmap = [
    { phase: "01", title: "Intel Mining", cost: "৳0", dur: "M 1-2", detail: "Scraping 5,000 leads + Legal Incorporation." },
    { phase: "02", title: "Equity Anchor", cost: "৳85L", dur: "M 3-4", detail: "Partner funds 3S Experience Center in Dhaka/Sylhet." },
    { phase: "03", title: "OEM Integration", cost: "৳1.5Cr", dur: "M 5-7", detail: "L/C opening for Ather 450X & Ola S1 Pro inventory." },
    { phase: "04", title: "Auto-Scaling", cost: "Royalty", dur: "M 12+", detail: "AGI-managed franchise network across 64 districts." }
  ];

  return (
    <div className="min-h-screen bg-[#030305] text-slate-100 font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      
      {/* --- PREMIUM GLASS NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-[100] border-b border-white/5 bg-black/40 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-tr from-cyan-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.3)]">
              <Zap className="text-black w-6 h-6 fill-black" />
            </div>
            <div className="leading-none">
              <span className="text-2xl font-black tracking-tighter uppercase block">ELECTRON<span className="text-cyan-500 italic text-3xl">X</span></span>
              <span className="text-[8px] font-bold text-slate-500 tracking-[0.4em] uppercase">Autonomous Mobility</span>
            </div>
          </div>
          <div className="hidden lg:flex gap-10 text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase">
            {['economics', 'swarm', 'roadmap'].map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)} className={`hover:text-cyan-400 transition-all ${activeTab === tab ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1' : ''}`}>
                {tab}
              </button>
            ))}
          </div>
          <button className="px-6 py-2 bg-white text-black text-[10px] font-black rounded-full hover:bg-cyan-500 hover:text-white transition-all shadow-2xl">
            PITCH DECK 2026
          </button>
        </div>
      </nav>

      <main className="pt-32 pb-24">
        
        {/* --- HERO: THE ARCHITECT'S VISION --- */}
        <section className="max-w-7xl mx-auto px-6 text-center mb-32 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full -z-10" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-black mb-8 uppercase tracking-widest">
            <Activity className="w-3 h-3 animate-pulse" /> Verified Market Readiness: BD 2026
          </div>
          <h1 className="text-6xl md:text-[8rem] font-black tracking-tighter leading-[0.8] mb-8 uppercase italic">
            Zero Capital. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Total Empire.</span>
          </h1>
          <p className="max-w-3xl mx-auto text-slate-400 text-lg md:text-xl font-medium leading-relaxed">
            We are solving the ৳125/L fuel crisis. By trading <span className="text-white underline decoration-cyan-500">Intellectual Equity</span> for physical assets, we bring Ather & Ola dominance to Bangladesh using an autonomous AGI swarm.
          </p>
        </section>

        {/* --- SECTION 1: THE ECONOMICS OF SUFFERING VS SAVING --- */}
        <section className={`max-w-7xl mx-auto px-6 py-20 transition-opacity duration-700 ${activeTab === 'economics' ? 'opacity-100' : 'hidden opacity-0'}`}>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl font-black uppercase italic tracking-tighter">The Commuter's <span className="text-red-500">Burden</span></h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                In Bangladesh, a 150cc bike rider spends ৳5,000+ monthly on fuel and parts. This is a "silent tax" on human potential. Our model eliminates it.
              </p>
              <div className="p-8 bg-zinc-900/40 border border-white/5 rounded-[2.5rem] backdrop-blur-xl">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs font-black uppercase text-slate-500">Monthly Usage Distance</span>
                  <span className="text-2xl font-black text-cyan-400">{monthlyKm} KM</span>
                </div>
                <input 
                  type="range" min="500" max="5000" step="100" 
                  value={monthlyKm} 
                  onChange={(e) => setMonthlyKm(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-zinc-800 rounded-full appearance-none cursor-pointer accent-cyan-500"
                />
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-600 to-emerald-700 p-12 rounded-[3.5rem] text-black shadow-[0_20px_60px_rgba(6,182,212,0.2)]">
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] mb-2 opacity-60">Annual Household Wealth Created</h3>
                <div className="text-7xl font-black italic tracking-tighter mb-4">৳{savings.yearly.toLocaleString()}</div>
                <p className="text-sm font-bold opacity-80 max-w-xs italic leading-relaxed">
                  "This saving alone covers a child's school fees or a family business seed fund. Switching isn't just eco-friendly; it's survival."
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="p-4 bg-black/10 rounded-2xl border border-black/5">
                    <div className="text-[9px] font-black uppercase">Petrol Cost</div>
                    <div className="text-lg font-black">৳125/L</div>
                  </div>
                  <div className="p-4 bg-black/10 rounded-2xl border border-black/5">
                    <div className="text-[9px] font-black uppercase">EV Cost</div>
                    <div className="text-lg font-black">৳2.5/KM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 2: THE AGI SWARM (THE BRAIN) --- */}
        <section className={`max-w-7xl mx-auto px-6 py-20 transition-opacity duration-700 ${activeTab === 'swarm' ? 'opacity-100' : 'hidden opacity-0'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black uppercase italic mb-4">Autonomous Agentic <span className="text-cyan-400">Swarm</span></h2>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.4em]">Zero Human Management Required</p>
          </div>
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 space-y-4">
              {agiSwarm.map((agent, i) => (
                <button 
                  key={i} 
                  onClick={() => setAgentIndex(i)}
                  className={`w-full p-6 text-left rounded-3xl border transition-all ${agentIndex === i ? 'bg-cyan-500/10 border-cyan-500/50' : 'bg-zinc-900/30 border-white/5 hover:border-white/10'}`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-black uppercase tracking-tight">{agent.name}</span>
                    <div className={`w-2 h-2 rounded-full ${agentIndex === i ? 'bg-cyan-400 animate-pulse shadow-[0_0_10px_cyan]' : 'bg-slate-700'}`} />
                  </div>
                  <span className="text-[9px] font-bold text-slate-500 uppercase">{agent.role}</span>
                </button>
              ))}
            </div>
            <div className="lg:col-span-8 bg-zinc-900/40 border border-white/5 rounded-[3rem] p-10 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-10 opacity-[0.03] text-9xl font-black italic">0{agentIndex + 1}</div>
               <div className="relative z-10">
                 <div className="flex items-center gap-4 mb-8">
                   <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-cyan-400"><Code /></div>
                   <div>
                     <h4 className="text-2xl font-black uppercase italic">{agiSwarm[agentIndex].role}</h4>
                     <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{agiSwarm[agentIndex].stack}</span>
                   </div>
                 </div>
                 <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-xl">{agiSwarm[agentIndex].desc}</p>
                 <div className="p-6 bg-cyan-500/5 rounded-3xl border border-cyan-500/10 inline-block">
                    <div className="text-[10px] font-black text-cyan-400 uppercase mb-1 tracking-widest">Human Efficiency Gain</div>
                    <div className="text-xl font-bold">Replaces {agiSwarm[agentIndex].humanReplaced}</div>
                 </div>
               </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 3: THE STRUCTURAL ROADMAP (THE BODY) --- */}
        <section className={`max-w-7xl mx-auto px-6 py-20 transition-opacity duration-700 ${activeTab === 'roadmap' ? 'opacity-100' : 'hidden opacity-0'}`}>
          <h2 className="text-4xl font-black uppercase italic text-center mb-16 underline decoration-cyan-500/20 underline-offset-8">12-Month Accumulation Plan</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {roadmap.map((item, i) => (
              <div key={i} className="group p-8 bg-zinc-900/30 border border-white/5 rounded-[2.5rem] hover:border-emerald-500/40 transition-all relative overflow-hidden">
                <div className="text-xs font-black text-slate-700 mb-6 flex justify-between uppercase">
                  <span>Phase {item.phase}</span>
                  <span>{item.dur}</span>
                </div>
                <h4 className="text-xl font-black mb-4 uppercase group-hover:text-emerald-400 transition-colors">{item.title}</h4>
                <div className="space-y-4">
                  <div className="text-sm font-bold text-slate-500 leading-relaxed italic">"{item.detail}"</div>
                  <div className="pt-4 border-t border-white/5 flex justify-between items-center">
                    <span className="text-[9px] font-black uppercase text-slate-600 tracking-widest">Partner Cost</span>
                    <span className="text-xs font-black text-emerald-500">{item.cost}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* --- FOOTER: THE FINAL PITCH --- */}
      <footer className="py-24 border-t border-white/5 bg-[#010102]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Zap className="w-8 h-8 text-cyan-500" />
              <span className="text-2xl font-black tracking-tighter uppercase">ELECTRON-X</span>
            </div>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-[0.4em] leading-loose max-w-sm">
              Architecting the future of mobility in Bangladesh. Built on data, secured by AGI. No investment required for the vision.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="p-8 bg-zinc-900/50 rounded-3xl border border-white/5 flex-1">
              <div className="text-[10px] font-black text-slate-500 uppercase mb-2">Sweat Equity Ratio</div>
              <div className="text-3xl font-black italic">25% FOUNDER</div>
              <div className="text-[10px] font-bold text-cyan-400 mt-1 uppercase tracking-widest">Locked: Intellectual IP</div>
            </div>
            <button className="px-10 py-5 bg-cyan-600 text-white rounded-[2rem] text-xs font-black uppercase hover:scale-105 transition-all shadow-xl shadow-cyan-600/30">
              INITIATE PHASE 1
            </button>
          </div>
        </div>
        <div className="mt-20 text-center text-[10px] text-slate-800 font-black tracking-[0.5em] uppercase">
          Autonomous Infrastructure Node 0xBD-2026-SYL-DHK
        </div>
      </footer>
    </div>
  );
};

export default App;

