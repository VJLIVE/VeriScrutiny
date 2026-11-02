"use client";

import { useState } from "react";
import { SCRUTINY_STATUS_DATA } from "@/lib/mock-data";
import { BarChart3, Info, CheckCircle2, AlertCircle } from "lucide-react";

export function ScrutinyOverviewChart() {
  const [activeRange, setActiveRange] = useState<"7d" | "30d" | "cycle">("cycle");
  const total = SCRUTINY_STATUS_DATA.reduce((acc, curr) => acc + curr.count, 0);

  return (
    <div className="bg-white rounded-2xl border border-[#E5EAF2] p-6 shadow-xs flex flex-col justify-between">
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-[#2563EB]" />
              <h3 className="text-sm font-bold text-[#0B1736]">
                Application Scrutiny Progress
              </h3>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Breakdown across statutory verification workflow phases
            </p>
          </div>

          {/* Time range selector */}
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg text-xs font-medium text-slate-600">
            <button
              onClick={() => setActiveRange("7d")}
              className={`px-2.5 py-1 rounded-md transition-all ${
                activeRange === "7d" ? "bg-white text-[#0B1736] font-semibold shadow-2xs" : "hover:text-slate-900"
              }`}
            >
              7 Days
            </button>
            <button
              onClick={() => setActiveRange("30d")}
              className={`px-2.5 py-1 rounded-md transition-all ${
                activeRange === "30d" ? "bg-white text-[#0B1736] font-semibold shadow-2xs" : "hover:text-slate-900"
              }`}
            >
              30 Days
            </button>
            <button
              onClick={() => setActiveRange("cycle")}
              className={`px-2.5 py-1 rounded-md transition-all ${
                activeRange === "cycle" ? "bg-white text-[#0B1736] font-semibold shadow-2xs" : "hover:text-slate-900"
              }`}
            >
              Full Cycle
            </button>
          </div>
        </div>

        {/* Stacked progress track */}
        <div className="mt-6 space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
            <span>Overall Verification Completion</span>
            <span className="font-bold text-[#0B1736]">
              {Math.round((986 / total) * 100)}% Verified
            </span>
          </div>

          <div className="h-4 w-full bg-slate-100 rounded-full overflow-hidden flex shadow-inner">
            <div
              style={{ width: `${(986 / total) * 100}%` }}
              className="bg-[#16A34A] transition-all duration-500"
              title="Verified: 986"
            />
            <div
              style={{ width: `${(184 / total) * 100}%` }}
              className="bg-[#2563EB] transition-all duration-500"
              title="Under Review: 184"
            />
            <div
              style={{ width: `${(120 / total) * 100}%` }}
              className="bg-[#94A3B8] transition-all duration-500"
              title="Pending Triage: 120"
            />
            <div
              style={{ width: `${(52 / total) * 100}%` }}
              className="bg-[#D97706] transition-all duration-500"
              title="Rectification: 52"
            />
            <div
              style={{ width: `${(26 / total) * 100}%` }}
              className="bg-[#DC2626] transition-all duration-500"
              title="Rejected: 26"
            />
          </div>
        </div>

        {/* Status bars detail grid */}
        <div className="mt-6 space-y-3">
          {SCRUTINY_STATUS_DATA.map((item, idx) => {
            const percentage = Math.round((item.count / total) * 100);
            return (
              <div key={idx} className="group">
                <div className="flex items-center justify-between text-xs mb-1">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2.5 h-2.5 rounded-sm shrink-0"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="font-medium text-slate-700 group-hover:text-slate-900">
                      {item.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 font-mono">
                    <span className="font-bold text-[#0B1736]">{item.count.toLocaleString()}</span>
                    <span className="text-slate-400 text-[11px] w-10 text-right">
                      {percentage}%
                    </span>
                  </div>
                </div>

                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${percentage}%`,
                      backgroundColor: item.color
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
        <span className="flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
          <span>Statutory Scrutiny SLA: 14 Days Remaining</span>
        </span>
        <span className="font-mono font-medium text-slate-600">
          Target: 100% by Nov 20
        </span>
      </div>
    </div>
  );
}
