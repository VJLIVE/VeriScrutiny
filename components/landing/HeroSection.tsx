"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ShieldCheck,
  ArrowRight,
  FileSearch,
  CheckCircle2,
  AlertTriangle,
  Building2,
  Lock,
  Layers,
  Sparkles,
  FileCheck2,
  Scale,
  Eye,
  Info
} from "lucide-react";

export function HeroSection() {
  const [activeTab, setActiveTab] = useState<"findings" | "evidence" | "forensics">("findings");

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-16 md:pb-28 bg-gradient-to-b from-[#F7F9FC] via-white to-[#F7F9FC]">
      {/* Background regulatory grid texture */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-60" />
      
      {/* Subtle blue accent glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Description & CTAs */}
          <div className="lg:col-span-5 text-left space-y-6">
            
            {/* Regulatory Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-[#2563EB] animate-pulse" />
              <span className="text-xs font-semibold text-[#1D4ED8] tracking-wide uppercase">
                AICTE Scrutiny Co-Pilot • PS 26261
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[46px] font-extrabold text-[#0B1736] tracking-tight leading-[1.15]">
              Regulatory Scrutiny, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#1D4ED8]">
                Reimagined with AI.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-xl font-normal">
              Validate applications, authenticate documents, and detect compliance gaps before they reach the scrutiny officer. Every finding is explainable. Every verification is traceable.
            </p>

            {/* Regulatory Motto Pill */}
            <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-[#334155]">
              <Scale className="w-4 h-4 text-[#2563EB] shrink-0" />
              <span className="font-medium">
                <strong className="text-[#0B1736]">Statutory Governance:</strong> AI advises. Officials always decide. Tamper indicators are signals for human review, not definitive proof.
              </span>
            </div>

            {/* Primary & Secondary Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-sm shadow-md shadow-blue-500/20 transition-all hover:translate-y-[-1px]"
              >
                <span>Launch Dashboard</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="#capabilities"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-white hover:bg-slate-50 text-[#0B1736] font-semibold text-sm border border-[#E5EAF2] shadow-xs transition-colors"
              >
                <span>Explore Capabilities</span>
                <FileSearch className="w-4 h-4 text-[#64748B]" />
              </a>
            </div>

            {/* Micro stats banner */}
            <div className="pt-4 border-t border-slate-200/80 grid grid-cols-3 gap-4">
              <div>
                <p className="text-xl font-bold text-[#0B1736]">100%</p>
                <p className="text-xs text-[#64748B]">Source Traceable</p>
              </div>
              <div>
                <p className="text-xl font-bold text-[#0B1736]">&lt; 30s</p>
                <p className="text-xs text-[#64748B]">Pre-Flight Triage</p>
              </div>
              <div>
                <p className="text-xl font-bold text-[#0B1736]">14+ APIs</p>
                <p className="text-xs text-[#64748B]">Direct Verification</p>
              </div>
            </div>

          </div>

          {/* Right Column: Realistic Software Preview Mockup */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl bg-white border border-[#E5EAF2] shadow-xl shadow-slate-200/60 overflow-hidden">
              
              {/* Window Chrome Header */}
              <div className="bg-[#0B1736] px-4 py-3 flex items-center justify-between text-white border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="h-4 w-px bg-slate-700 mx-1" />
                  <span className="text-xs font-mono font-medium text-slate-300 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                    VeriScrutiny Officer Console • AICTE Scrutiny Cycle 2026-27
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Live Session
                  </span>
                </div>
              </div>

              {/* Case Bar */}
              <div className="bg-slate-50 border-b border-[#E5EAF2] px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-slate-500" />
                  <div>
                    <span className="font-semibold text-slate-900">APP-2026-ENG-4982:</span>{" "}
                    <span className="text-slate-600">K.J. Somaiya College of Engineering</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-medium text-[11px]">
                    EoA Tier-I
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-medium text-[11px] flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    Risk Score: 24 (Low)
                  </span>
                </div>
              </div>

              {/* Interactive Tabs within the preview */}
              <div className="border-b border-slate-200 px-4 flex items-center gap-4 bg-white text-xs font-medium text-slate-600">
                <button
                  onClick={() => setActiveTab("findings")}
                  className={`py-2.5 border-b-2 transition-colors flex items-center gap-1.5 ${
                    activeTab === "findings"
                      ? "border-[#2563EB] text-[#2563EB] font-semibold"
                      : "border-transparent hover:text-slate-900"
                  }`}
                >
                  <FileCheck2 className="w-3.5 h-3.5" />
                  Statutory Findings (18)
                </button>
                <button
                  onClick={() => setActiveTab("forensics")}
                  className={`py-2.5 border-b-2 transition-colors flex items-center gap-1.5 ${
                    activeTab === "forensics"
                      ? "border-[#2563EB] text-[#2563EB] font-semibold"
                      : "border-transparent hover:text-slate-900"
                  }`}
                >
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
                  Forensics Signals (1)
                </button>
                <button
                  onClick={() => setActiveTab("evidence")}
                  className={`py-2.5 border-b-2 transition-colors flex items-center gap-1.5 ${
                    activeTab === "evidence"
                      ? "border-[#2563EB] text-[#2563EB] font-semibold"
                      : "border-transparent hover:text-slate-900"
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  Live Evidence Viewer
                </button>
              </div>

              {/* Preview Body Content */}
              <div className="p-4 sm:p-5 bg-white space-y-4">
                
                {activeTab === "findings" && (
                  <div className="space-y-3">
                    {/* Finding Item 1 */}
                    <div className="p-3 rounded-lg border border-emerald-200 bg-emerald-50/40 flex items-start justify-between gap-3">
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-semibold text-emerald-950">
                            Land Ownership & Title Deed Verified
                          </p>
                          <p className="text-[11px] text-emerald-800 mt-0.5">
                            Maharashtra IGR Land Registry confirmed Lease Deed #4410/2008. Minimum 5.0 acres contiguous area satisfied.
                          </p>
                        </div>
                      </div>
                      <span className="shrink-0 text-[10px] font-mono bg-white px-2 py-0.5 rounded border border-emerald-300 text-emerald-800">
                        API 200 OK
                      </span>
                    </div>

                    {/* Finding Item 2 */}
                    <div className="p-3 rounded-lg border border-amber-200 bg-amber-50/40 flex items-start justify-between gap-3">
                      <div className="flex items-start gap-2.5">
                        <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-semibold text-amber-950">
                            Water Clearance Stamp: Font Metrics Anomaly
                          </p>
                          <p className="text-[11px] text-amber-800 mt-0.5">
                            OCR detected kerning variance on municipal seal. Flagged as advisory signal for human scrutiny officer inspection.
                          </p>
                        </div>
                      </div>
                      <span className="shrink-0 text-[10px] font-mono bg-white px-2 py-0.5 rounded border border-amber-300 text-amber-800">
                        Review Signal
                      </span>
                    </div>

                    {/* Finding Item 3 */}
                    <div className="p-3 rounded-lg border border-slate-200 bg-slate-50/50 flex items-start justify-between gap-3">
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-semibold text-slate-900">
                            Faculty Cadre Ratio (1:15 Norm)
                          </p>
                          <p className="text-[11px] text-slate-600 mt-0.5">
                            94 approved faculty verified against AICTE Portal repository. Zero cross-institution dual employment detected.
                          </p>
                        </div>
                      </div>
                      <span className="shrink-0 text-[10px] font-mono bg-white px-2 py-0.5 rounded border border-slate-300 text-slate-700">
                            APH 4.2 Compliant
                      </span>
                    </div>
                  </div>
                )}

                {activeTab === "forensics" && (
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-amber-50/70 border border-amber-200">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="w-2 h-2 rounded-full bg-amber-500" />
                        <h4 className="text-xs font-semibold text-amber-900">
                          Forensic Tamper Indicator #FT-2026-0881
                        </h4>
                      </div>
                      <p className="text-xs text-amber-800 leading-relaxed">
                        Document Page 2: Kerning compression ratio (0.81) differs from Municipal Corporation standard template typeface.
                      </p>
                      <div className="mt-2.5 p-2 bg-white rounded border border-amber-200 text-[11px] font-mono text-slate-700">
                        Algorithm: ResNet-50 Font-Mesh Analyzer • Confidence: 68.4% (Threshold: 65%)
                      </div>
                      <p className="mt-2 text-[10px] text-slate-500 italic">
                        Note: Signals assist officer verification and do not constitute definitive proof of forgery.
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === "evidence" && (
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
                    <div className="flex items-center justify-between text-xs font-medium text-slate-700 pb-1.5 border-b border-slate-200">
                      <span>Source Evidence: IGR Maharashtra Query</span>
                      <span className="text-emerald-600 font-mono text-[11px]">Verified Cryptographic Proof</span>
                    </div>
                    <div className="bg-slate-900 text-slate-200 p-2.5 rounded font-mono text-[11px] overflow-x-auto">
                      <code>
                        {`{
  "registration_no": "BOM-4410-2008",
  "stamp_duty_paid": "INR 4,50,000",
  "status": "CLEAR_TITLE",
  "land_area_sqm": 20234.3,
  "sha256": "8f3b2a...7c91"
}`}
                      </code>
                    </div>
                  </div>
                )}

                {/* Bottom Decision Bar */}
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <Info className="w-3.5 h-3.5 text-blue-600" />
                    <span>Officer Action Required:</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="px-2.5 py-1 text-xs rounded border border-slate-300 hover:bg-slate-50 font-medium text-slate-700">
                      Request Rectification
                    </button>
                    <Link
                      href="/dashboard"
                      className="px-3 py-1 text-xs rounded bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-medium flex items-center gap-1"
                    >
                      <span>Open Full Dossier</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
