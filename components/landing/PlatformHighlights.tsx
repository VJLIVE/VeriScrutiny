import { FileSearch2, Database, ShieldAlert, UserCheck } from "lucide-react";

export function PlatformHighlights() {
  const highlights = [
    {
      icon: FileSearch2,
      title: "Explainable AI",
      tagline: "Every finding links to ground truth",
      description:
        "No opaque scoring. Every compliance observation cites the exact clause of the AICTE Approval Process Handbook (APH), highlights the document bounding box, and provides verifiable rationales.",
      metric: "100% Citable Evidence"
    },
    {
      icon: Database,
      title: "Source Verification",
      tagline: "Direct statutory API integration",
      description:
        "Bypasses easily altered physical photocopies by querying issuing authorities directly: State Land Revenue (IGR), DigiLocker, University Affiliations, Municipal CFOs, and Statutory Councils.",
      metric: "14+ Direct Gateways"
    },
    {
      icon: ShieldAlert,
      title: "Risk-Based Triage",
      tagline: "Intelligent queue prioritization",
      description:
        "Differentiates routine, clean renewals from high-risk applications exhibiting forensic tampering signals, missing NOCs, or duplicate infrastructure before scrutiny begins.",
      metric: "70% Faster Triage"
    },
    {
      icon: UserCheck,
      title: "Human-in-the-Loop",
      tagline: "AI advises. Officials always decide.",
      description:
        "Statutory authority remains exclusively with authorized scrutiny committees. AI serves as a vigilant co-pilot that surfaces anomalies and streamlines the evidentiary dossier.",
      metric: "Zero Autonomous Approvals"
    }
  ];

  return (
    <section id="overview" className="py-16 md:py-24 bg-white border-y border-[#E5EAF2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-bold text-[#2563EB] tracking-wider uppercase mb-2">
            Architected for Regulatory Trust
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1736] tracking-tight">
            Built on Four Pillars of Verification Integrity
          </h2>
          <p className="mt-3 text-base text-[#64748B] leading-relaxed">
            Designed specifically for regulatory officers, statutory committees, and institutional registrars who require rock-solid evidentiary guarantees.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative p-6 rounded-xl bg-white border border-[#E5EAF2] hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-colors mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0B1736] group-hover:text-[#2563EB] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#2563EB] mt-1 mb-3">
                    {item.tagline}
                  </p>
                  <p className="text-sm text-[#475569] leading-relaxed">
                    {item.description}
                  </p>
                </div>
                
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Standard</span>
                  <span className="font-semibold text-[#0B1736] font-mono bg-slate-100 px-2 py-0.5 rounded">
                    {item.metric}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
