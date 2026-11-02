import {
  Languages,
  ClipboardCheck,
  BookOpenCheck,
  ScanEye,
  Fingerprint,
  Building,
  Gauge,
  FileBadge2
} from "lucide-react";

export function CoreCapabilities() {
  const capabilities = [
    {
      icon: Languages,
      title: "Multilingual OCR & Extraction",
      description:
        "Extracts structured fields from scanned revenue records, gazette notifications, and deeds across English, Hindi, Marathi, Tamil, and Devanagari scripts with sub-word confidence scoring.",
      badge: "High Precision"
    },
    {
      icon: ClipboardCheck,
      title: "Application Readiness Checks",
      description:
        "Performs automated institutional pre-flight screening before docket submission. Catches missing documents, corrupt scans, and unsigned annexures instantly.",
      badge: "Pre-Submission"
    },
    {
      icon: BookOpenCheck,
      title: "Configurable APH Rules Engine",
      description:
        "Deterministic rule execution mapping to AICTE Approval Process Handbook clauses (FSI, instructional carpet area, land contiguity, faculty cadre ratios).",
      badge: "AICTE Norms"
    },
    {
      icon: ScanEye,
      title: "Document Forensics & Signals",
      description:
        "Deep inspection of digital artifacts: Error Level Analysis (ELA), font kerning anomalies, PDF compression revisions, and EXIF timestamp inconsistencies.",
      badge: "Advisory Signals"
    },
    {
      icon: Fingerprint,
      title: "Cross-Institution Fingerprinting",
      description:
        "Perceptual vector hashing detects shared architectural blueprints, leased equipment invoices, and faculty PANs claimed simultaneously across multiple campuses.",
      badge: "Anti-Collusion"
    },
    {
      icon: Building,
      title: "Issuer Verification Gateway",
      description:
        "Zero-trust API connectors verifying credentials against DigiLocker, State Land Revenue departments, Municipal CFOs, PCI, COA, and University databases.",
      badge: "Source Authenticated"
    },
    {
      icon: Gauge,
      title: "Risk-Based Queue Prioritization",
      description:
        "Multi-variable compliance scoring categorizes files into Low, Medium, High, and Critical risk tiers, optimizing scrutiny committee bandwidth.",
      badge: "Smart Triage"
    },
    {
      icon: FileBadge2,
      title: "Evidence-Linked Validation Reports",
      description:
        "Generates tamper-evident scrutiny dossiers containing cryptographic SHA-256 hashes, exact clause citations, bounding box overlays, and immutable audit logs.",
      badge: "Verifiable Dossier"
    }
  ];

  return (
    <section id="capabilities" className="py-20 bg-white border-y border-[#E5EAF2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#2563EB] tracking-wider uppercase mb-2 block">
            Comprehensive Regulatory Arsenal
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1736] tracking-tight">
            Engineered for Exhaustive Regulatory Scrutiny
          </h2>
          <p className="mt-3 text-base text-[#64748B]">
            From initial docket upload to final statutory gazette verification, every stage is backed by explainable artificial intelligence.
          </p>
        </div>

        {/* 8 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group p-6 rounded-xl bg-white border border-[#E5EAF2] hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-lg bg-blue-50 flex items-center justify-center text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#0B1736] group-hover:text-[#2563EB] transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 text-xs text-[#475569] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 text-[11px] font-medium text-[#2563EB] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  <span>Explore capability</span>
                  <span>&rarr;</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
