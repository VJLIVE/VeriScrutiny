"use client";

import { useState } from "react";
import {
  UploadCloud,
  ClipboardList,
  Binary,
  GitCompare,
  FileSearch,
  KeyRound,
  ShieldAlert,
  UserCheck2,
  FileCheck,
  CheckCircle,
  FileCode2
} from "lucide-react";

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      icon: UploadCloud,
      stage: "Ingestion",
      title: "Institution Uploads Documents",
      summary: "Institutions submit statutory deeds, building sanction drawings, fire NOCs, and faculty rolls through the encrypted upload gateway.",
      detail: "Supports PDF, multi-page TIFF, and high-res vector CAD blueprints. Files are encrypted with AES-256 and assigned unique SHA-256 hash digests immediately upon ingestion."
    },
    {
      num: "02",
      icon: ClipboardList,
      stage: "Ingestion",
      title: "Pre-Flight Readiness Check",
      summary: "Automated scan verifies presence of mandatory certificates, scan legibility, digital signatures, and page completeness.",
      detail: "Incomplete files or unreadable scans are caught immediately, generating an instant corrective checklist for the college before reaching the officer."
    },
    {
      num: "03",
      icon: Binary,
      stage: "Rule Evaluation",
      title: "APH Checklist Engine Activation",
      summary: "Dynamically maps the institution's category (New Campus, EoA, Intake Expansion) to AICTE Approval Process Handbook clauses.",
      detail: "Loads statutory norms for minimum land in mega/metro/rural zones, built-up instructional carpet area, and student-to-faculty ratios."
    },
    {
      num: "04",
      icon: FileCode2,
      stage: "Rule Evaluation",
      title: "Multilingual OCR & Field Extraction",
      summary: "Extracts structured values from scanned revenue stamps, survey deeds, and university affiliation seals across multiple languages.",
      detail: "Extracts survey numbers, owner names, lease durations, registered encumbrances, and surveyor credentials into standardized JSON schemas."
    },
    {
      num: "05",
      icon: GitCompare,
      stage: "Cross-Validation",
      title: "Cross-Record Field Validation",
      summary: "Triangulates web-form declarations against uploaded documents and registered land authority datasets.",
      detail: "Flags discrepancies in declared versus deed land area, built-up instructional square meters, and program intake capacities."
    },
    {
      num: "06",
      icon: FileSearch,
      stage: "Forensics",
      title: "Forensics & Document Fingerprinting",
      summary: "Inspects digital files for font anomalies, compression tampering, and matches blueprints across all historical applications.",
      detail: "Perceptual hashing detects if architectural plans or equipment invoices were duplicated from another campus or prior academic year."
    },
    {
      num: "07",
      icon: KeyRound,
      stage: "Forensics",
      title: "Issuer Verification Gateway",
      summary: "Cryptographically verifies digital signatures, embeds, and queries DigiLocker, Revenue IGR, Municipal CFOs, and Councils.",
      detail: "Direct zero-trust queries confirm genuine issue dates and validity without depending on paper notarization."
    },
    {
      num: "08",
      icon: ShieldAlert,
      stage: "Triage",
      title: "Risk-Based Case Prioritization",
      summary: "Risk engine scores dossiers from 0-100 based on weighted compliance factors, routing critical cases for specialist review.",
      detail: "Pristine, 100% verified files enter accelerated queues; files with forensic signals or expired NOCs are highlighted for scrutiny focus."
    },
    {
      num: "09",
      icon: UserCheck2,
      stage: "Human Decision",
      title: "Human-in-the-Loop Officer Scrutiny",
      summary: "Statutory scrutiny officers examine explainable evidence cards, review flagged signals, and make final regulatory determinations.",
      detail: "Officers choose: Full Approval, Request Rectification with itemized deficiency notice, or Recommend Physical Surprise Inspection."
    },
    {
      num: "10",
      icon: FileCheck,
      stage: "Human Decision",
      title: "Verifiable Scrutiny Report Generated",
      summary: "Produces an immutable, cryptographically signed scrutiny dossier with complete audit trails for appellate committees.",
      detail: "Every approval or rectification decision is stamped with officer e-signatures and permanently logged in the tamper-evident audit ledger."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#2563EB] tracking-wider uppercase mb-2 block">
            End-to-End Scrutiny Pipeline
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1736] tracking-tight">
            How VeriScrutiny Works: From Upload to Approved Gazette
          </h2>
          <p className="mt-3 text-base text-[#64748B]">
            A 10-step rigorous verification pipeline combining explainable AI automation with authoritative statutory governance.
          </p>
        </div>

        {/* Interactive Steps Grid & Active Step Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Steps selector column (Left) */}
          <div className="lg:col-span-5 space-y-2.5">
            {steps.map((step, idx) => {
              const isSelected = activeStep === idx;
              const Icon = step.icon;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between ${
                    isSelected
                      ? "bg-white border-[#2563EB] shadow-md shadow-blue-500/5 ring-1 ring-[#2563EB]"
                      : "bg-white/80 border-[#E5EAF2] hover:bg-white hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-xs font-mono font-bold px-2 py-1 rounded ${
                        isSelected
                          ? "bg-[#2563EB] text-white"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {step.num}
                    </span>
                    <div>
                      <h4
                        className={`text-xs font-bold ${
                          isSelected ? "text-[#2563EB]" : "text-[#0B1736]"
                        }`}
                      >
                        {step.title}
                      </h4>
                      <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
                        {step.stage}
                      </span>
                    </div>
                  </div>
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                      isSelected ? "text-[#2563EB]" : "text-slate-400"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Highlight Card (Right) */}
          <div className="lg:col-span-7 sticky top-24">
            <div className="bg-white rounded-2xl border border-[#E5EAF2] p-8 shadow-xl shadow-slate-200/50">
              
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center border border-blue-100">
                    {(() => {
                      const ActiveIcon = steps[activeStep].icon;
                      return <ActiveIcon className="w-6 h-6" />;
                    })()}
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-[#2563EB]">
                      Step {steps[activeStep].num} • {steps[activeStep].stage}
                    </span>
                    <h3 className="text-xl font-bold text-[#0B1736]">
                      {steps[activeStep].title}
                    </h3>
                  </div>
                </div>

                <span className="hidden sm:inline-block px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Automated Pipeline
                </span>
              </div>

              {/* Step Description */}
              <div className="py-6 space-y-4">
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Process Summary
                  </h5>
                  <p className="text-sm text-slate-700 leading-relaxed font-normal">
                    {steps[activeStep].summary}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-1.5 flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-[#2563EB]" />
                    Evidentiary Guarantee & Engine Specification
                  </h5>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {steps[activeStep].detail}
                  </p>
                </div>
              </div>

              {/* Progress Tracker Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>
                  Pipeline Step {activeStep + 1} of {steps.length}
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                    disabled={activeStep === 0}
                    className="px-3 py-1.5 rounded border border-slate-200 text-xs font-medium disabled:opacity-40 hover:bg-slate-50"
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))}
                    disabled={activeStep === steps.length - 1}
                    className="px-3 py-1.5 rounded bg-[#2563EB] text-white text-xs font-medium disabled:opacity-40 hover:bg-[#1D4ED8]"
                  >
                    Next Step
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
