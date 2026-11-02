import Link from "next/link";
import { ShieldCheck, ArrowRight, ExternalLink, Scale, CheckCircle2 } from "lucide-react";

export function LandingFooter() {
  return (
    <footer className="bg-[#0B1736] text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Pre-Footer CTA Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-blue-900/60 via-blue-800/40 to-slate-900 border border-blue-500/30 p-8 sm:p-12 mb-16 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3 border border-blue-400/20">
                <Scale className="w-3.5 h-3.5" />
                Evidence-Driven Compliance
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                Make every regulatory decision evidence-driven.
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Empower scrutiny officers with transparent document verification, instant APH compliance checks, and cryptographic auditability.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-sm shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02]"
              >
                <span>Access VeriScrutiny</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#2563EB] flex items-center justify-center text-white">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                Veri<span className="text-[#3B82F6]">Scrutiny</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              AI-Powered Regulatory Scrutiny & Document Authentication Co-Pilot. Transparent. Verifiable. Accountable. Designed for AICTE regulatory scrutiny workflows.
            </p>
            <div className="pt-2 text-[11px] text-slate-500 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Smart India Hackathon 2026 Project (PS 26261)</span>
            </div>
          </div>

          {/* Capabilities */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3">
              Capabilities
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#capabilities" className="hover:text-white transition-colors">Pre-Flight Readiness</a></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors">Multilingual OCR</a></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors">APH Checklist Engine</a></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors">Document Forensics</a></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors">Cross-Campus Fingerprinting</a></li>
            </ul>
          </div>

          {/* Platform & Governance */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3">
              Governance
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#overview" className="hover:text-white transition-colors">Human-in-the-Loop</a></li>
              <li><a href="#overview" className="hover:text-white transition-colors">Explainable AI Audit</a></li>
              <li><a href="#technology" className="hover:text-white transition-colors">Issuer Gateway APIs</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">Tamper-Evident Dossier</a></li>
              <li><Link href="/dashboard" className="hover:text-white transition-colors">Officer Triage Queue</Link></li>
            </ul>
          </div>

          {/* Hackathon & AICTE Context */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3">
              Project Context
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><span className="text-slate-300">Smart India Hackathon 2026</span></li>
              <li><span className="text-slate-300">AICTE • PS 26261</span></li>
              <li><span className="text-slate-300">Approval Process Handbook</span></li>
              <li><span className="text-slate-300">Western Regional Office Demo</span></li>
            </ul>
          </div>

        </div>

        {/* Bottom Disclaimers */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>
            &copy; 2026 VeriScrutiny Team. Developed for Smart India Hackathon 2026.
          </p>
          <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-[10px] text-slate-400 max-w-xl text-center md:text-right">
            <strong>Statutory Disclaimer:</strong> VeriScrutiny is an AI co-pilot proof-of-concept for AICTE PS 26261. It does not replace statutory scrutiny committees or claim official government endorsement. AI advises; official statutory bodies make all final decisions.
          </div>
        </div>

      </div>
    </footer>
  );
}
