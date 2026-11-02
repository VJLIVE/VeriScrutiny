import { VERIFICATION_INSIGHTS } from "@/lib/mock-data";
import {
  FileCheck2,
  FileQuestion,
  CalendarX2,
  CopyX,
  FileDiff,
  ShieldCheck,
  ExternalLink
} from "lucide-react";

export function VerificationInsights() {
  const items = [
    {
      data: VERIFICATION_INSIGHTS.sourceVerified,
      icon: FileCheck2,
      border: "border-emerald-200",
      bg: "bg-emerald-50/40",
      iconBg: "bg-emerald-50 text-emerald-600",
      tag: "Automated Authenticated"
    },
    {
      data: VERIFICATION_INSIGHTS.manualReviewNeeded,
      icon: FileQuestion,
      border: "border-blue-200",
      bg: "bg-blue-50/40",
      iconBg: "bg-blue-50 text-blue-600",
      tag: "Officer Attention"
    },
    {
      data: VERIFICATION_INSIGHTS.expiredCertificates,
      icon: CalendarX2,
      border: "border-amber-200",
      bg: "bg-amber-50/40",
      iconBg: "bg-amber-50 text-amber-600",
      tag: "Pre-Flight Blocked"
    },
    {
      data: VERIFICATION_INSIGHTS.duplicateInfra,
      icon: CopyX,
      border: "border-rose-200",
      bg: "bg-rose-50/40",
      iconBg: "bg-rose-50 text-rose-600",
      tag: "Vigilance Referral"
    },
    {
      data: VERIFICATION_INSIGHTS.mismatchedFields,
      icon: FileDiff,
      border: "border-purple-200",
      bg: "bg-purple-50/40",
      iconBg: "bg-purple-50 text-purple-600",
      tag: "Reconciliation Deficit"
    }
  ];

  return (
    <div className="bg-white rounded-2xl border border-[#E5EAF2] p-6 shadow-xs space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
        <div>
          <h3 className="text-sm font-bold text-[#0B1736] flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#2563EB]" />
            Regulatory Verification Insights
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Aggregated diagnostics across statutory deeds, council approvals, and municipal filings
          </p>
        </div>
        <span className="text-xs font-mono text-slate-400">
          Source Verification SLA: 99.4%
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className={`p-4 rounded-xl border ${item.border} ${item.bg} flex flex-col justify-between hover:shadow-xs transition-shadow`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className={`w-8 h-8 rounded-lg ${item.iconBg} flex items-center justify-center shrink-0`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                    {item.tag}
                  </span>
                </div>

                <div className="mt-2">
                  <span className="text-2xl font-extrabold text-[#0B1736] font-mono tracking-tight">
                    {item.data.count}
                  </span>
                  <h4 className="text-xs font-bold text-slate-800 mt-0.5">
                    {item.data.label}
                  </h4>
                  <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
                    {item.data.detail}
                  </p>
                </div>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-200/50 text-[10px] font-semibold text-slate-500">
                {item.data.trend}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
