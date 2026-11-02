import { RECENT_ACTIVITIES } from "@/lib/mock-data";
import { Activity, Clock, CheckCircle2, AlertTriangle, FileBadge, ArrowUpRight } from "lucide-react";

export function RecentActivityFeed() {
  return (
    <div className="bg-white rounded-2xl border border-[#E5EAF2] p-6 shadow-xs flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-[#2563EB]" />
            <h3 className="text-sm font-bold text-[#0B1736]">
              Real-Time Scrutiny Activity
            </h3>
          </div>
          <span className="flex items-center gap-1 text-[11px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Live Stream
          </span>
        </div>

        <div className="mt-4 divide-y divide-slate-100">
          {RECENT_ACTIVITIES.map((act) => (
            <div key={act.id} className="py-3.5 first:pt-1 last:pb-1">
              <div className="flex items-start justify-between gap-2">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-semibold border ${act.badgeColor}`}
                    >
                      {act.badge}
                    </span>
                    <h5 className="text-xs font-bold text-slate-900">
                      {act.title}
                    </h5>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {act.description}
                  </p>
                </div>
                <span className="text-[10px] text-slate-400 shrink-0 whitespace-nowrap font-mono mt-0.5">
                  {act.timestamp}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
        <span>Logged in Tamper-Evident Audit Ledger</span>
        <button
          onClick={() => alert("Loading full tamper-evident audit ledger log...")}
          className="text-[#2563EB] font-semibold hover:underline flex items-center gap-0.5 text-xs"
        >
          <span>View complete audit log</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
