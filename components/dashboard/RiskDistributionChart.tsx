"use client";

import { RISK_DISTRIBUTION_DATA } from "@/lib/mock-data";
import { ShieldAlert, ShieldCheck, AlertTriangle, AlertOctagon, HelpCircle } from "lucide-react";

export function RiskDistributionChart() {
  return (
    <div className="bg-white rounded-2xl border border-[#E5EAF2] p-6 shadow-xs flex flex-col justify-between">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-rose-600" />
              <h3 className="text-sm font-bold text-[#0B1736]">
                Risk Triage Distribution
              </h3>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Multi-factor compliance classification of active docket submissions
            </p>
          </div>
          <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-600">
            AI Triage Engine
          </span>
        </div>

        {/* Visual Rings / Segments */}
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {RISK_DISTRIBUTION_DATA.map((risk, idx) => {
            return (
              <div
                key={idx}
                className="p-3.5 rounded-xl border border-slate-100 bg-slate-50/50 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: risk.color }}
                  />
                  <span className="text-lg font-extrabold text-[#0B1736] font-mono">
                    {risk.percentage}%
                  </span>
                </div>

                <div className="mt-2">
                  <h4 className="text-xs font-bold text-[#0B1736]">
                    {risk.level}
                  </h4>
                  <p className="text-[11px] font-mono text-slate-500">
                    {risk.count} dossiers
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Risk Level Descriptive List */}
        <div className="mt-5 space-y-2.5">
          <div className="p-2.5 rounded-lg border border-emerald-100 bg-emerald-50/30 flex items-start gap-2.5 text-xs">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-emerald-950">Low Risk (68%):</span>{" "}
              <span className="text-emerald-800">
                Pristine applications where 100% of statutory deeds are cryptographically source-verified.
              </span>
            </div>
          </div>

          <div className="p-2.5 rounded-lg border border-blue-100 bg-blue-50/30 flex items-start gap-2.5 text-xs">
            <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-blue-950">Medium Risk (21%):</span>{" "}
              <span className="text-blue-800">
                Minor typographical discrepancies in trust resolutions or non-standard notary seals.
              </span>
            </div>
          </div>

          <div className="p-2.5 rounded-lg border border-amber-100 bg-amber-50/30 flex items-start gap-2.5 text-xs">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-amber-950">High Risk (8%):</span>{" "}
              <span className="text-amber-800">
                Expired Fire Safety NOCs, municipal water clearances, or FSI carpet area deviations.
              </span>
            </div>
          </div>

          <div className="p-2.5 rounded-lg border border-rose-100 bg-rose-50/30 flex items-start gap-2.5 text-xs">
            <AlertOctagon className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-rose-950">Critical Risk (3%):</span>{" "}
              <span className="text-rose-800">
                Cross-institution duplicate CAD drawings, shared faculty PANs, or font alteration indicators.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
        <span>Scrutiny Directive: Prioritize High & Critical dossiers first</span>
        <span className="text-blue-600 font-medium">APH 2026-27 Norms</span>
      </div>
    </div>
  );
}
