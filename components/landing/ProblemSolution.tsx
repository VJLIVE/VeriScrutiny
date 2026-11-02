import { XCircle, CheckCircle2, ArrowRight } from "lucide-react";

export function ProblemSolution() {
  const comparisons = [
    {
      problem: "Exhaustive Manual Verification",
      problemDetail: "Committees manually flip through 200+ pages per dossier, leading to scrutiny fatigue and oversight of subtle discrepancies.",
      solution: "Multilingual OCR & Semantic Extraction",
      solutionDetail: "Instant extraction across English, Hindi & regional scripts into normalized JSON schemas aligned with APH handbook standards."
    },
    {
      problem: "Missing & Expired Statutory NOCs",
      problemDetail: "Dossiers reach officers with outdated Fire Safety NOCs or lapsed Environmental consents, wasting scrutiny committee hours.",
      solution: "Mandatory Pre-Flight Validation",
      solutionDetail: "Institutions receive immediate automated pre-flight feedback blocking submission until all required statutory documents are current."
    },
    {
      problem: "Mismatched Application Data",
      problemDetail: "Discrepancies between self-declared carpet area on web forms and actual registered values on uploaded municipal deeds.",
      solution: "Cross-Record Automated Reconciliation",
      solutionDetail: "Dual-column comparison engine flags numerical variances, surveyor discrepancies, and zoning classification mismatches."
    },
    {
      problem: "Duplicate Infrastructure & Tampering",
      problemDetail: "Malpractice where single lab equipment or rented buildings are submitted across multiple institutional applications.",
      solution: "Cross-Institution Perceptual Fingerprinting",
      solutionDetail: "Perceptual hashing, vector CAD comparisons, and faculty PAN deduplication instantly detect cross-institution resource sharing."
    },
    {
      problem: "Slow, Unverifiable Verification",
      problemDetail: "Verifying authenticity requires weeks of manual correspondence with municipal registrars and universities.",
      solution: "Direct Cryptographic Issuer Gateways",
      solutionDetail: "Instant zero-trust queries via DigiLocker, Revenue IGR, Municipal, and Statutory Council APIs with cryptographic hash receipts."
    }
  ];

  return (
    <section className="py-20 bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#2563EB] tracking-wider uppercase mb-2 block">
            Transformation of Scrutiny
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1736] tracking-tight">
            From Manual Administrative Burden to Verified Intelligence
          </h2>
          <p className="mt-3 text-base text-[#64748B]">
            How VeriScrutiny bridges the critical gap between voluminous institutional filings and statutory compliance mandates.
          </p>
        </div>

        {/* Comparison Table / Cards */}
        <div className="space-y-4 max-w-5xl mx-auto">
          {comparisons.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-[#E5EAF2] p-5 shadow-xs hover:border-slate-300 transition-all"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                
                {/* Traditional Bottleneck */}
                <div className="md:col-span-5 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center shrink-0 mt-0.5">
                    <XCircle className="w-4 h-4 text-rose-600" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold tracking-wider uppercase text-rose-600">
                      Current Manual Bottleneck
                    </span>
                    <h4 className="text-sm font-bold text-[#0B1736] mt-0.5">
                      {item.problem}
                    </h4>
                    <p className="text-xs text-[#64748B] mt-1 leading-relaxed">
                      {item.problemDetail}
                    </p>
                  </div>
                </div>

                {/* Transition Arrow Indicator */}
                <div className="hidden md:flex md:col-span-2 justify-center">
                  <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#2563EB]">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                {/* VeriScrutiny Solution */}
                <div className="md:col-span-5 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold tracking-wider uppercase text-emerald-600">
                      VeriScrutiny Solution
                    </span>
                    <h4 className="text-sm font-bold text-[#0B1736] mt-0.5">
                      {item.solution}
                    </h4>
                    <p className="text-xs text-[#475569] mt-1 leading-relaxed">
                      {item.solutionDetail}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
