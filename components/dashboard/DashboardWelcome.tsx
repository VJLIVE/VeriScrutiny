"use client";

import { Calendar, Download, FileSearch, Sparkles, Filter } from "lucide-react";

interface WelcomeProps {
  onScrollToApplications: () => void;
  onFilterHighRisk: () => void;
  isHighRiskActive: boolean;
}

export function DashboardWelcome({
  onScrollToApplications,
  onFilterHighRisk,
  isHighRiskActive
}: WelcomeProps) {
  return (
    <div className="bg-white rounded-2xl border border-[#E5EAF2] p-6 shadow-xs flex flex-col md:flex-row md:items-center md:justify-between gap-6">
      
      {/* Left: Salutation & Details */}
      <div className="space-y-1.5 max-w-2xl">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-blue-50 text-blue-700 border border-blue-200">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            AICTE Scrutiny Cycle 2026-27
          </span>
          <span className="text-xs text-slate-400 font-medium">Batch 3 (Western Region)</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B1736] tracking-tight">
          Good morning, Officer Narayanan.
        </h1>

        <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
          Here's an overview of application scrutiny and document verification activities across 142 affiliated technical institutions in your jurisdiction.
        </p>

        <div className="pt-2 flex items-center gap-2 text-xs text-slate-500">
          <Calendar className="w-3.5 h-3.5 text-slate-400" />
          <span>Monday, Nov 2, 2026 • Cutoff for Initial Deficiency Intimations: Nov 15</span>
        </div>
      </div>

      {/* Right: Quick Action Controls */}
      <div className="flex flex-wrap items-center gap-3 shrink-0">
        <button
          onClick={onFilterHighRisk}
          className={`inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg text-xs font-semibold border transition-all ${
            isHighRiskActive
              ? "bg-rose-50 border-rose-300 text-rose-700 shadow-xs"
              : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
          }`}
        >
          <Filter className="w-3.5 h-3.5 text-rose-600" />
          <span>{isHighRiskActive ? "Showing High Risk" : "Filter High Risk (78)"}</span>
        </button>

        <button
          onClick={onScrollToApplications}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold shadow-sm shadow-blue-500/20 transition-all hover:translate-y-[-0.5px]"
        >
          <FileSearch className="w-4 h-4" />
          <span>Review Applications</span>
        </button>
      </div>

    </div>
  );
}
