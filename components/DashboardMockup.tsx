'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  TrendingUp, Users, Activity, Layers, Database, Sparkles, 
  ArrowUpRight, ArrowDownRight, Globe, Command, ShieldCheck, Cpu
} from 'lucide-react';

type DashboardTab = 'overview' | 'analytics' | 'servers' | 'security';

export default function DashboardMockup() {
  const [activeTab, setActiveTab] = useState<DashboardTab>('overview');
  const [loading, setLoading] = useState(false);
  const [metrics, setMetrics] = useState({
    activeUsers: 14302,
    conversionRate: 3.48,
    responseTime: 18,
    queryCount: 92841
  });

  const tabTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Small local loop to periodically update figures slightly for extra realism
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 5) - 2,
        conversionRate: +(prev.conversionRate + (Math.random() * 0.04 - 0.02)).toFixed(2),
        responseTime: Math.max(14, prev.responseTime + Math.floor(Math.random() * 3) - 1),
        queryCount: prev.queryCount + Math.floor(Math.random() * 8) + 1
      }));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Clean up any pending tab switch timers on unmount
  useEffect(() => {
    return () => {
      if (tabTimerRef.current) {
        clearTimeout(tabTimerRef.current);
      }
    };
  }, []);

  const handleTabChange = (tab: DashboardTab) => {
    if (tab === activeTab) return;
    
    if (tabTimerRef.current) {
      clearTimeout(tabTimerRef.current);
    }

    setLoading(true);
    tabTimerRef.current = setTimeout(() => {
      setActiveTab(tab);
      setLoading(false);
      tabTimerRef.current = null;
    }, 400);
  };

  return (
    <div className="w-full rounded-2xl bg-[#0F1424] border border-white/10 shadow-2xl overflow-hidden text-left relative group">
      {/* Glow Effects */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-60" />

      {/* Terminal Mockup Header */}
      <div className="bg-[#0b0e1a] px-4 py-3 border-b border-white/5 flex items-center justify-between select-none">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          <span className="text-xs text-gray-500 font-mono ml-3">mnqe-enterprise-v4.0.0</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-semibold border border-emerald-500/20 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Live Cloud
          </span>
        </div>
      </div>

      {/* Main Grid Area */}
      <div className="grid grid-cols-1 md:grid-cols-4 h-[420px] md:h-[480px]">
        {/* Sidebar Nav */}
        <div className="p-4 bg-[#0B0F19]/60 border-r border-white/5 flex flex-col justify-between hidden md:flex font-sans">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-bold text-gray-500 tracking-wider uppercase px-2 mb-2">Metrics Control</span>
            <button
              onClick={() => handleTabChange('overview')}
              className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                activeTab === 'overview'
                  ? 'bg-[#6D5DFC] text-white shadow-lg shadow-accent/10 font-bold'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Layers className="w-4 h-4" />
              Dynamic Overview
            </button>
            <button
              onClick={() => handleTabChange('analytics')}
              className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                activeTab === 'analytics'
                  ? 'bg-[#6D5DFC] text-white shadow-lg shadow-accent/10 font-bold'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <TrendingUp className="w-4 h-4" />
              Analytics Feed
            </button>
            <button
              onClick={() => handleTabChange('servers')}
              className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                activeTab === 'servers'
                  ? 'bg-[#6D5DFC] text-white shadow-lg shadow-accent/10 font-bold'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Cpu className="w-4 h-4" />
              Server Health
            </button>
            <button
              onClick={() => handleTabChange('security')}
              className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                activeTab === 'security'
                  ? 'bg-[#6D5DFC] text-white shadow-lg shadow-accent/10 font-bold'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Database className="w-4 h-4" />
              DB Connectors
            </button>
          </div>

          <div className="p-3 rounded-xl bg-accent/5 border border-[#6D5DFC]/10 flex flex-col gap-2">
            <span className="text-[10px] font-bold text-[#6D5DFC] uppercase tracking-wider">Enterprise Deal</span>
            <span className="text-xs text-gray-300 leading-normal">Premium domain MNQE.com is for purchase. Immediate escrow transfer.</span>
            <a 
              href="https://www.godaddy.com/domainsearch/find?domainToCheck=mnqe.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-white font-bold inline-flex items-center gap-1 hover:underline"
            >
              Buy Domain <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Console Workspace Area */}
        <div className="md:col-span-3 p-5 flex flex-col justify-between overflow-y-auto relative bg-[#0f1424]/40">
          {loading ? (
            <div className="absolute inset-0 bg-[#0F1424]/90 backdrop-blur-sm flex items-center justify-center z-10">
              <div className="flex flex-col items-center gap-3">
                <div id="loading-spinner" className="w-10 h-10 rounded-full border-2 border-accent border-t-transparent animate-spin" />
                <span className="text-xs text-gray-400 font-mono">Syncing pipeline telemetry...</span>
              </div>
            </div>
          ) : null}

          {/* Active Tab View */}
          {activeTab === 'overview' && (
            <div className="flex flex-col gap-5 h-full justify-between">
              {/* Stat Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="flex items-center justify-between text-gray-400 mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider">Active Cohorts</span>
                    <Users className="w-3.5 h-3.5 text-accent" />
                  </div>
                  <div className="text-base font-display font-extrabold text-white">{metrics.activeUsers.toLocaleString()}</div>
                  <div className="text-[10px] font-medium text-emerald-400 mt-1 flex items-center gap-0.5">
                    <ArrowUpRight className="w-3 h-3" />
                    +12.4% vs last hr
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="flex items-center justify-between text-gray-400 mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider">Conversion</span>
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div className="text-base font-display font-extrabold text-white">{metrics.conversionRate}%</div>
                  <div className="text-[10px] font-medium text-emerald-400 mt-1 flex items-center gap-0.5">
                    <ArrowUpRight className="w-3 h-3" />
                    +0.32% spikes
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="flex items-center justify-between text-gray-400 mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider">Query Latency</span>
                    <Activity className="w-3.5 h-3.5 text-amber-400" />
                  </div>
                  <div className="text-base font-display font-extrabold text-white">{metrics.responseTime} ms</div>
                  <div className="text-[10px] font-medium text-emerald-400 mt-1 flex items-center gap-0.5">
                    <ArrowDownRight className="w-3 h-3 text-emerald-400" />
                    -9.2% optimal
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="flex items-center justify-between text-gray-400 mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider">Total Queries</span>
                    <Sparkles className="w-3.5 h-3.5 text-[#6D5DFC]" />
                  </div>
                  <div className="text-base font-display font-extrabold text-white">{metrics.queryCount.toLocaleString()}</div>
                  <div className="text-[10px] font-medium text-gray-400 mt-1 font-mono">
                    238.4 req/s avg
                  </div>
                </div>
              </div>

              {/* Graphic Plotter */}
              <div className="flex-1 min-h-[160px] bg-white/[0.01] border border-white/5 rounded-xl p-4 flex flex-col justify-between relative overflow-hidden">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#6D5DFC] animate-ping" />
                    <span className="text-xs font-bold text-gray-300">Live Traffic Volume (Escrow Stream)</span>
                  </div>
                  <span className="text-[10px] text-gray-500 font-mono">20-sec slide</span>
                </div>

                {/* Simulated Chart Bars */}
                <div className="flex items-end gap-1.5 h-28 pt-4">
                  {[24, 38, 45, 30, 42, 55, 68, 50, 40, 58, 62, 75, 90, 84, 70, 78, 88, 92, 100].map((val, idx) => (
                    <div key={idx} className="flex-1 bg-gradient-to-t from-accent/20 to-accent/80 rounded-t transition-all duration-500 hover:to-white/90" style={{ height: `${val}%` }} />
                  ))}
                </div>

                <div className="flex justify-between items-center text-[10px] text-gray-500 font-mono">
                  <span>18:00 UTC</span>
                  <span>18:10 UTC</span>
                  <span>18:20 UTC</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="flex flex-col gap-4 h-full justify-between">
              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <div>
                  <h5 className="text-sm font-bold text-white font-display">Deep Pipeline Telemetry</h5>
                  <p className="text-[11px] text-gray-400">Escrow analysis & real-time query trace logs</p>
                </div>
                <span className="text-xs text-[#6D5DFC] font-semibold bg-[#6D5DFC]/10 px-2 py-0.5 rounded-lg border border-accent/20">Operational</span>
              </div>

              <div className="flex-1 flex flex-col gap-2 py-2 font-mono text-[11px] text-gray-400">
                <div className="flex items-center justify-between p-2 rounded bg-white/[0.02] border border-white/5 hover:border-accent/20 transition-all">
                  <span className="text-gray-300 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    GET /api/v1/metrics/domain-valuation
                  </span>
                  <span className="text-emerald-400">200 OK — 12ms</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-white/[0.02] border border-white/5 hover:border-accent/20 transition-all">
                  <span className="text-gray-300 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    POST /api/v1/escrow/initialize
                  </span>
                  <span className="text-emerald-400">201 CREATED — 24ms</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-white/[0.02] border border-white/5 hover:border-accent/20 transition-all">
                  <span className="text-gray-300 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    GET /api/v1/whois/mnqe.com
                  </span>
                  <span className="text-emerald-400">200 OK — 8ms</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-white/[0.02] border border-white/5 hover:border-accent/20 transition-all">
                  <span className="text-gray-300 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    SOCKET ws://dispatcher.prod/tunnel
                  </span>
                  <span className="text-amber-400">ESTABLISHED — 112s</span>
                </div>
              </div>

              <button className="w-full text-center py-2.5 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 text-xs font-semibold tracking-wide transition-all text-gray-300 flex items-center justify-center gap-1.5">
                View Live Audit Logs <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {activeTab === 'servers' && (
            <div className="flex flex-col gap-4 h-full justify-between">
              <div>
                <h5 className="text-sm font-bold text-white font-display flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-emerald-400" /> 
                  Distributed Cloud Nodes
                </h5>
                <p className="text-[11px] text-gray-400">Kubernetes pod clustering across 4 global regions</p>
              </div>

              <div className="grid grid-cols-2 gap-3 flex-1 py-1">
                <div className="p-3 rounded-xl bg-white/[0.01] border border-white/5 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-[10px] text-gray-400 mb-1">
                    <span>USEast-01 (Primary)</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  </div>
                  <div className="text-sm font-bold text-white">99.98% uptime</div>
                  <div className="w-full bg-white/5 h-1 rounded mt-2 overflow-hidden">
                    <div className="bg-[#6D5DFC] h-full" style={{ width: '92%' }} />
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.01] border border-white/5 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-[10px] text-gray-400 mb-1">
                    <span>USWest-02 (Backup)</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  </div>
                  <div className="text-sm font-bold text-white">100% stable</div>
                  <div className="w-full bg-white/5 h-1 rounded mt-2 overflow-hidden">
                    <div className="bg-[#6D5DFC] h-full" style={{ width: '98%' }} />
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.01] border border-white/5 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-[10px] text-gray-400 mb-1">
                    <span>EUWest-1 (Cluster)</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  </div>
                  <div className="text-sm font-bold text-white">99.96% stable</div>
                  <div className="w-full bg-white/5 h-1 rounded mt-2 overflow-hidden">
                    <div className="bg-[#6D5DFC] h-full" style={{ width: '85%' }} />
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.01] border border-white/5 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-[10px] text-gray-400 mb-1">
                    <span>APEast-2 (Edge Router)</span>
                    <span className="w-2 h-2 rounded-full bg-[#6D5DFC] animate-pulse" />
                  </div>
                  <div className="text-sm font-bold text-white">Edge Caching On</div>
                  <div className="w-full bg-white/5 h-1 rounded mt-2 overflow-hidden">
                    <div className="bg-[#6D5DFC] h-full animate-pulse" style={{ width: '70%' }} />
                  </div>
                </div>
              </div>

              <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs rounded-lg p-2 flex items-center justify-between leading-normal">
                <span>All core services operational at maximum throughput. Zero queued transactions.</span>
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="flex flex-col gap-4 h-full justify-between">
              <div>
                <h5 className="text-sm font-bold text-white font-display flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#6D5DFC]" />
                  Secure Cryptographic Tunneling
                </h5>
                <p className="text-[11px] text-gray-400">Hardware-enforced transport layers, OAuth gateways, & escrow storage.</p>
              </div>

              <div className="flex-1 bg-white/[0.02] border border-white/5 rounded-xl p-4 flex flex-col gap-3 justify-center">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-8 h-8 text-emerald-400 shrink-0" />
                  <div>
                    <h6 className="text-xs font-bold text-white uppercase tracking-wider">Domain Trust Vault</h6>
                    <p className="text-[11px] text-gray-400 leading-normal">
                      The domain MNQE.com is legally owned & verified for immediate transfer via Escrow.com or GoDaddy.
                    </p>
                  </div>
                </div>

                <div className="h-px bg-white/5 my-1" />

                <div className="flex items-center justify-between py-1 text-[11px] font-mono text-gray-400">
                  <span>SSL Encryption Status</span>
                  <span className="text-emerald-400">A+ Certified</span>
                </div>
                <div className="flex items-center justify-between py-1 text-[11px] font-mono text-gray-400">
                  <span>WHOIS Verification Authority</span>
                  <span className="text-[#6D5DFC] font-bold">VERIFIED SUCCESSFUL</span>
                </div>
              </div>

              <a
                href="https://www.godaddy.com/domainsearch/find?domainToCheck=mnqe.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 rounded-xl bg-[#6D5DFC] hover:bg-[#5C4CEB] text-xs font-bold tracking-wide transition-all text-white shadow-lg shadow-accent/20 flex items-center justify-center gap-1.5"
              >
                Escrow Purchase Portal <ArrowUpRight className="w-4 h-4 text-white" />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
