import {
  Code2,
  Server,
  Database,
  Eye,
  FileCode,
  HardDrive,
  Cpu,
  Layers,
  Sparkles,
  ShieldCheck
} from "lucide-react";

export function TechStack() {
  const stackItems = [
    {
      name: "Next.js 16 & React 19",
      category: "Frontend Application",
      description: "App Router architecture with Partial Prefetching and responsive officer audit UI.",
      badge: "Core UI"
    },
    {
      name: "TypeScript",
      category: "Type Safety",
      description: "End-to-end typed contracts across document schemas, API envelopes, and audit logs.",
      badge: "Reliability"
    },
    {
      name: "Tailwind CSS v4",
      category: "Design System",
      description: "Restrained enterprise visual language crafted for maximum data density and clarity.",
      badge: "GovTech Styling"
    },
    {
      name: "FastAPI & Python",
      category: "Scrutiny Engine Microservices",
      description: "High-throughput asynchronous engine coordinating OCR, rules, and external gateway queries.",
      badge: "Microservices"
    },
    {
      name: "PaddleOCR & Tesseract",
      category: "Multilingual Intelligence",
      description: "High-precision character recognition for English, Hindi, and Indian regional scripts.",
      badge: "Multilingual"
    },
    {
      name: "OpenCV Forensics",
      category: "Forensic Analysis",
      description: "Perceptual hashing, Error Level Analysis (ELA), and vector CAD blueprint deduplication.",
      badge: "Computer Vision"
    },
    {
      name: "PostgreSQL",
      category: "Relational Ledger",
      description: "ACID-compliant storage for statutory records, institution profiles, and hash-chained audit trails.",
      badge: "Data Store"
    },
    {
      name: "Redis",
      category: "Message Broker & Cache",
      description: "Distributed task queues for async document pipelines and low-latency API caching.",
      badge: "Queue & Cache"
    },
    {
      name: "AWS S3 Encrypted Vault",
      category: "Document Storage",
      description: "Object storage with client-side encryption and immutability object locks for statutory filings.",
      badge: "Encrypted Storage"
    },
    {
      name: "Explainable LLM Layer",
      category: "Reasoning & Synthesis",
      description: "Synthesizes complex legal clauses, extracts tabular data, and generates plain-language citations.",
      badge: "Reasoning AI"
    }
  ];

  return (
    <section id="technology" className="py-20 bg-white border-y border-[#E5EAF2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#2563EB] tracking-wider uppercase mb-2 block">
            Enterprise Compliance Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1736] tracking-tight">
            Production-Grade Regulatory Tech Stack
          </h2>
          <p className="mt-3 text-base text-[#64748B]">
            Engineered with modern, verifiable, and modular technologies ready for large-scale institutional scrutiny deployments.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {stackItems.map((tech, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-300 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                  {tech.category}
                </span>
                <h4 className="text-sm font-bold text-[#0B1736] mt-1 mb-2">
                  {tech.name}
                </h4>
                <p className="text-xs text-[#475569] leading-relaxed">
                  {tech.description}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between">
                <span className="inline-block px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-blue-50 text-blue-700 border border-blue-200">
                  {tech.badge}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Architecture Guarantee Note */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-sm font-bold text-[#0B1736]">
                Zero-Trust Cryptographic Assurance
              </h5>
              <p className="text-xs text-[#475569]">
                Every extraction, source API query, and officer judgment is stamped into a SHA-256 hash-chained audit ledger.
              </p>
            </div>
          </div>
          <span className="shrink-0 text-xs font-mono font-semibold text-blue-800 bg-white px-3 py-1.5 rounded-lg border border-blue-200 shadow-xs">
            Tamper-Evident Standard
          </span>
        </div>

      </div>
    </section>
  );
}
