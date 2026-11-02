"use client";

import { useState } from "react";
import { ApplicationRecord } from "@/lib/mock-data";
import {
  X,
  Building2,
  MapPin,
  Calendar,
  ShieldAlert,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  FileText,
  FileCheck2,
  ExternalLink,
  Download,
  Scale,
  Printer,
  ChevronRight,
  Info
} from "lucide-react";

interface ModalProps {
  application: ApplicationRecord | null;
  onClose: () => void;
}

export function ApplicationDetailModal({ application, onClose }: ModalProps) {
  const [activeTab, setActiveTab] = useState<"findings" | "documents" | "ocr" | "aph">("findings");
  const [decisionNote, setDecisionNote] = useState("");
  const [isDecisionSubmitted, setIsDecisionSubmitted] = useState(false);

  if (!application) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        
        {/* Modal Top Bar */}
        <div className="bg-[#0B1736] text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-sm text-blue-300">
                  {application.id}
                </span>
                <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-medium">
                  {application.category}
                </span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-white truncate max-w-lg">
                {application.institutionName}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Metadata Strip */}
        <div className="bg-slate-50 border-b border-slate-200 px-6 py-3 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-4 text-slate-600">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              {application.city}, {application.state}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              Submitted: {application.submissionDate}
            </span>
            <span>
              Officer: <strong className="text-slate-800">{application.assignedOfficer}</strong>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span
              className={`px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 border ${
                application.riskLevel === "Low"
                  ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                  : application.riskLevel === "Medium"
                  ? "bg-blue-50 text-blue-800 border-blue-200"
                  : application.riskLevel === "High"
                  ? "bg-amber-50 text-amber-800 border-amber-200"
                  : "bg-rose-50 text-rose-800 border-rose-200"
              }`}
            >
              <ShieldAlert className="w-3.5 h-3.5" />
              Risk Score: {application.riskScore}/100 ({application.riskLevel})
            </span>
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-white border border-slate-200 text-slate-700">
              APH Compliance: {application.aphComplianceRate}%
            </span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-slate-200 px-6 flex items-center gap-6 text-xs font-semibold text-slate-600 bg-white">
          <button
            onClick={() => setActiveTab("findings")}
            className={`py-3 border-b-2 transition-all flex items-center gap-1.5 ${
              activeTab === "findings"
                ? "border-blue-600 text-blue-600"
                : "border-transparent hover:text-slate-900"
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            Forensics & Findings ({application.forensicAlerts.length})
          </button>

          <button
            onClick={() => setActiveTab("documents")}
            className={`py-3 border-b-2 transition-all flex items-center gap-1.5 ${
              activeTab === "documents"
                ? "border-blue-600 text-blue-600"
                : "border-transparent hover:text-slate-900"
            }`}
          >
            <FileText className="w-4 h-4" />
            Statutory Documents ({application.documentsList.length})
          </button>

          <button
            onClick={() => setActiveTab("ocr")}
            className={`py-3 border-b-2 transition-all flex items-center gap-1.5 ${
              activeTab === "ocr"
                ? "border-blue-600 text-blue-600"
                : "border-transparent hover:text-slate-900"
            }`}
          >
            <FileCheck2 className="w-4 h-4" />
            OCR Field Comparison
          </button>

          <button
            onClick={() => setActiveTab("aph")}
            className={`py-3 border-b-2 transition-all flex items-center gap-1.5 ${
              activeTab === "aph"
                ? "border-blue-600 text-blue-600"
                : "border-transparent hover:text-slate-900"
            }`}
          >
            <Scale className="w-4 h-4" />
            APH Clause Engine
          </button>
        </div>

        {/* Tab Content Area */}
        <div className="p-6 overflow-y-auto max-h-[50vh] space-y-4 bg-[#F8FAFC]">
          
          {/* TAB 1: FINDINGS & FORENSICS */}
          {activeTab === "findings" && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Executive Case Summary
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {application.summary}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-900 flex items-center gap-2">
                  <span>Advisory Forensics & Compliance Signals</span>
                  <span className="text-[10px] text-slate-500 font-normal">
                    (Tampering indicators are signals for human review, not definitive proof of forgery)
                  </span>
                </h4>

                {application.forensicAlerts.map((alert, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-xl border bg-white shadow-2xs space-y-2 ${
                      alert.severity === "critical"
                        ? "border-rose-300"
                        : alert.severity === "high"
                        ? "border-amber-300"
                        : alert.severity === "medium"
                        ? "border-blue-300"
                        : "border-emerald-300"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {alert.severity === "success" ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        ) : (
                          <AlertTriangle
                            className={`w-4 h-4 ${
                              alert.severity === "critical"
                                ? "text-rose-600"
                                : alert.severity === "high"
                                ? "text-amber-600"
                                : "text-blue-600"
                            }`}
                          />
                        )}
                        <h5 className="text-xs font-bold text-slate-900">{alert.title}</h5>
                      </div>
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-semibold">
                        {alert.type}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {alert.description}
                    </p>

                    {alert.evidenceSnippet && (
                      <div className="p-2.5 rounded-lg bg-slate-900 text-slate-200 font-mono text-[11px] border border-slate-800">
                        <span className="text-slate-400 block text-[10px] mb-0.5">Verified Ground Truth Snippet:</span>
                        {alert.evidenceSnippet}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: DOCUMENTS LIST */}
          {activeTab === "documents" && (
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold uppercase text-[10px]">
                  <tr>
                    <th className="px-4 py-3">Document Title</th>
                    <th className="px-4 py-3">Category</th>
                    <th className="px-4 py-3">Source / Issuer</th>
                    <th className="px-4 py-3">Timestamp</th>
                    <th className="px-4 py-3 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {application.documentsList.map((doc, idx) => (
                    <tr key={idx} className="hover:bg-slate-50">
                      <td className="px-4 py-3 font-medium text-slate-900 flex items-center gap-2">
                        <FileText className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>{doc.name}</span>
                      </td>
                      <td className="px-4 py-3 text-slate-500">{doc.category}</td>
                      <td className="px-4 py-3 font-mono text-[11px] text-slate-600">
                        {doc.source}
                      </td>
                      <td className="px-4 py-3 text-slate-400 text-[11px]">{doc.timestamp}</td>
                      <td className="px-4 py-3 text-right">
                        <span
                          className={`px-2 py-0.5 rounded text-[11px] font-semibold ${
                            doc.status === "Verified"
                              ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                              : doc.status === "Flagged"
                              ? "bg-rose-50 text-rose-700 border border-rose-200"
                              : "bg-amber-50 text-amber-700 border border-amber-200"
                          }`}
                        >
                          {doc.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* TAB 3: OCR FIELD COMPARISON */}
          {activeTab === "ocr" && (
            <div className="space-y-3">
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl text-xs text-blue-900 flex items-center gap-2">
                <Info className="w-4 h-4 text-blue-600 shrink-0" />
                <span>
                  Side-by-side reconciliation between institutional self-declaration form and verified document OCR extractions.
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <span className="text-[10px] uppercase font-bold text-slate-400">Parameter</span>
                  <h5 className="font-bold text-xs text-slate-800 mt-0.5">Total Land Area (Acres)</h5>
                  <div className="mt-2 space-y-1 text-xs">
                    <p className="text-slate-500">Portal Declared: <strong className="text-slate-800">5.02 Acres</strong></p>
                    <p className="text-slate-500">Deed OCR Extracted: <strong className="text-emerald-700">5.02 Acres (Exact Match)</strong></p>
                  </div>
                </div>

                <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <span className="text-[10px] uppercase font-bold text-slate-400">Parameter</span>
                  <h5 className="font-bold text-xs text-slate-800 mt-0.5">Approved Instructional Area</h5>
                  <div className="mt-2 space-y-1 text-xs">
                    <p className="text-slate-500">Portal Declared: <strong className="text-slate-800">14,250 sq.m</strong></p>
                    <p className="text-slate-500">Sanction Plan OCR: <strong className="text-emerald-700">14,310 sq.m (Within 0.5% tolerance)</strong></p>
                  </div>
                </div>

                <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <span className="text-[10px] uppercase font-bold text-slate-400">Parameter</span>
                  <h5 className="font-bold text-xs text-slate-800 mt-0.5">Registered Trust Resolution</h5>
                  <div className="mt-2 space-y-1 text-xs">
                    <p className="text-slate-500">Portal Declared: <strong className="text-slate-800">Resolution #44/2026</strong></p>
                    <p className="text-slate-500">Verified at Source: <strong className="text-emerald-700">Charity Comm. Verified</strong></p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: APH CHECKLIST */}
          {activeTab === "aph" && (
            <div className="space-y-3">
              <div className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-2xs flex items-center justify-between">
                <div>
                  <h5 className="text-xs font-bold text-slate-900">AICTE Approval Process Handbook (APH 2026-27) Evaluation</h5>
                  <p className="text-xs text-slate-500 mt-0.5">Category: Engineering & Technology (Tier-I UG & PG)</p>
                </div>
                <span className="font-mono text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                  {application.aphComplianceRate}% Compliance
                </span>
              </div>

              <div className="divide-y divide-slate-100 bg-white rounded-xl border border-slate-200 overflow-hidden text-xs">
                <div className="p-3.5 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-slate-800">APH Clause 2.1: Land Requirement in Metro Zone</p>
                    <p className="text-slate-500 text-[11px] mt-0.5">Minimum contiguous plot of 2.5 acres in Greater Mumbai</p>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-50 text-emerald-700">
                    Compliant (5.02 Acres)
                  </span>
                </div>

                <div className="p-3.5 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-slate-800">APH Clause 4.2: Faculty to Student Cadre Ratio</p>
                    <p className="text-slate-500 text-[11px] mt-0.5">Cadre distribution 1 Professor : 2 Associate : 6 Assistant Professors</p>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-50 text-emerald-700">
                    Compliant (1:15 ratio)
                  </span>
                </div>

                <div className="p-3.5 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-slate-800">APH Clause 7.4: Fire Safety & Structural Stability</p>
                    <p className="text-slate-500 text-[11px] mt-0.5">Valid CFO clearance certificate and registered structural audit</p>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-50 text-emerald-700">
                    Compliant (Valid to 2028)
                  </span>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Officer Decision Box */}
        <div className="bg-white border-t border-slate-200 p-4 sm:p-5 space-y-3">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-800">
                Statutory Decision:
              </span>
              <span className="text-[11px] text-slate-500">
                (AI advises. Officer Narayanan authorizes.)
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => {
                  setIsDecisionSubmitted(true);
                  setTimeout(() => {
                    alert(`Deficiency intimation drafted for ${application.id}`);
                  }, 200);
                }}
                className="px-3 py-2 rounded-lg border border-amber-300 text-amber-800 hover:bg-amber-50 text-xs font-semibold"
              >
                Request Rectification
              </button>

              <button
                onClick={() => {
                  alert(`Case ${application.id} referred for surprise on-site verification.`);
                }}
                className="px-3 py-2 rounded-lg border border-rose-300 text-rose-800 hover:bg-rose-50 text-xs font-semibold"
              >
                Recommend Surprise Inspection
              </button>

              <button
                onClick={() => {
                  setIsDecisionSubmitted(true);
                  alert(`Approval granted for ${application.id}. Stamped on hash ledger.`);
                }}
                className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-xs"
              >
                Approve Scrutiny Dossier
              </button>

              <button
                onClick={() => {
                  alert(`Downloading cryptographic verification dossier for ${application.id}`);
                }}
                className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600"
                title="Download Verification Dossier"
              >
                <Download className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
