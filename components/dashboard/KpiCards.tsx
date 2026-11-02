"use client";

import { Files, Clock, CheckCircle2, ShieldAlert, ArrowUpRight, TrendingUp } from "lucide-react";
import { KPI_DATA } from "@/lib/mock-data";

interface KpiProps {
  activeKpiFilter: string | null;
  onSelectKpiFilter: (filter: string | null) => void;
}

export function KpiCards({ activeKpiFilter, onSelectKpiFilter }: KpiProps) {
  const cards = [
    {
      id: "all",
      title: "Total Applications",
      metric: KPI_DATA.totalApplications.value.toLocaleString(),
      change: KPI_DATA.totalApplications.change,
      timeframe: KPI_DATA.totalApplications.timeframe,
      description: KPI_DATA.totalApplications.description,
      icon: Files,
      color: "blue",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200"
    },
    {
      id: "pending",
      title: "Pending Officer Review",
      metric: KPI_DATA.pendingReview.value.toLocaleString(),
      change: KPI_DATA.pendingReview.change,
      timeframe: KPI_DATA.pendingReview.timeframe,
      description: KPI_DATA.pendingReview.description,
      icon: Clock,
      color: "amber",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200"
    },
    {
      id: "verified",
      title: "Verified Applications",
      metric: KPI_DATA.verifiedApplications.value.toLocaleString(),
      change: KPI_DATA.verifiedApplications.change,
      timeframe: KPI_DATA.verifiedApplications.timeframe,
      description: KPI_DATA.verifiedApplications.description,
      icon: CheckCircle2,
      color: "emerald",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200"
    },
    {
      id: "high-risk",
      title: "High-Risk & Flagged",
      metric: KPI_DATA.highRiskApplications.value.toLocaleString(),
      change: KPI_DATA.highRiskApplications.change,
      timeframe: KPI_DATA.highRiskApplications.timeframe,
      description: KPI_DATA.highRiskApplications.description,
      icon: ShieldAlert,
      color: "rose",
      badgeColor: "bg-rose-50 text-rose-700 border-rose-200"
    }
  ];

  return (
    <div className="space-y-2">
      {/* Demo data notice banner */}
      <div className="flex items-center justify-between text-[11px] text-slate-500 px-1">
        <span className="flex items-center gap-1.5 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
          Jurisdiction: AICTE Western Region • Live telemetry active
        </span>
        <span className="font-mono text-[10px] text-slate-400">
          Showing Mocked Regional Data for Demonstration
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card) => {
          const Icon = card.icon;
          const isSelected = activeKpiFilter === card.id;

          return (
            <div
              key={card.id}
              onClick={() => onSelectKpiFilter(isSelected ? null : card.id)}
              className={`p-5 rounded-2xl bg-white border cursor-pointer transition-all duration-200 flex flex-col justify-between hover:shadow-md ${
                isSelected
                  ? "border-[#2563EB] ring-2 ring-blue-500/20 shadow-sm bg-blue-50/20"
                  : "border-[#E5EAF2] hover:border-slate-300"
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">
                    {card.title}
                  </span>
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                      card.color === "blue"
                        ? "bg-blue-50 text-[#2563EB]"
                        : card.color === "amber"
                        ? "bg-amber-50 text-amber-600"
                        : card.color === "emerald"
                        ? "bg-emerald-50 text-emerald-600"
                        : "bg-rose-50 text-rose-600"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="mt-3 flex items-baseline gap-2">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1736] tracking-tight">
                    {card.metric}
                  </h3>
                  <span
                    className={`inline-flex items-center gap-0.5 px-2 py-0.5 rounded text-[11px] font-semibold border ${card.badgeColor}`}
                  >
                    <TrendingUp className="w-3 h-3" />
                    {card.change}
                  </span>
                </div>

                <p className="mt-1 text-[11px] text-slate-400">
                  {card.timeframe}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                <span className="text-slate-500 truncate max-w-[170px]">
                  {card.description}
                </span>
                <span
                  className={`text-[10px] font-semibold shrink-0 ${
                    isSelected ? "text-[#2563EB]" : "text-slate-400"
                  }`}
                >
                  {isSelected ? "Filtered ✓" : "Click to filter"}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
