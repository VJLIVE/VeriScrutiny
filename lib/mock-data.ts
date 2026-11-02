export interface ApplicationRecord {
  id: string;
  institutionName: string;
  city: string;
  state: string;
  category: "Extension of Approval (EoA)" | "New Technical Campus" | "Increase in Approved Intake" | "Introduction of Emerging Tech" | "Change of Site / Location";
  submissionDate: string;
  riskScore: number;
  riskLevel: "Low" | "Medium" | "High" | "Critical";
  status: "Verified" | "Under Review" | "Pending" | "Rectification Required" | "Manual Review Required";
  assignedOfficer: string;
  totalDocuments: number;
  verifiedDocuments: number;
  flaggedDocuments: number;
  aphComplianceRate: number;
  summary: string;
  forensicAlerts: {
    type: "Tamper Indicator" | "Cross-Institution Match" | "Field Discrepancy" | "Expired Certificate" | "Source Verified";
    title: string;
    description: string;
    severity: "low" | "medium" | "high" | "critical" | "success";
    evidenceSnippet?: string;
  }[];
  documentsList: {
    name: string;
    category: string;
    source: string;
    status: "Verified" | "Flagged" | "Pending" | "Needs Review";
    timestamp: string;
  }[];
}

export const MOCK_APPLICATIONS: ApplicationRecord[] = [
  {
    id: "APP-2026-ENG-4982",
    institutionName: "K.J. Somaiya College of Engineering",
    city: "Mumbai",
    state: "Maharashtra",
    category: "Extension of Approval (EoA)",
    submissionDate: "2026-11-01",
    riskScore: 24,
    riskLevel: "Low",
    status: "Under Review",
    assignedOfficer: "Dr. S. K. Narayanan",
    totalDocuments: 18,
    verifiedDocuments: 17,
    flaggedDocuments: 1,
    aphComplianceRate: 98,
    summary: "Routine EoA application for 8 undergraduate and 4 postgraduate programs in Engineering & Technology. All statutory NOCs source-verified via state portals.",
    forensicAlerts: [
      {
        type: "Tamper Indicator",
        title: "Font Metric Variance on Municipal Water Clearance",
        description: "OCR detected mismatched kerning on sanction stamp text. Marked as candidate signal for officer review, not definitive alteration.",
        severity: "medium",
        evidenceSnippet: "Doc #09: Water & Sewage Dept NOC, Reg No. MC-88219, p. 2 header block"
      },
      {
        type: "Source Verified",
        title: "Land Title Authenticated via Maharashtra IGR Gateway",
        description: "Registered Lease Deed No. 4410/2008 verified against Land Records Department database. Valid for 99-year leasehold.",
        severity: "success",
        evidenceSnippet: "IGR Mahakosh Response Code: 200 OK • SHA-256 Validated"
      }
    ],
    documentsList: [
      { name: "Land Title & 99-Year Lease Deed", category: "Statutory Land", source: "IGR Maharashtra API", status: "Verified", timestamp: "01 Nov 2026, 14:22" },
      { name: "Approved Building Sanction Plan", category: "Infrastructure", source: "MCGM Portal", status: "Verified", timestamp: "01 Nov 2026, 14:23" },
      { name: "Fire Safety Certificate (NOC)", category: "Safety", source: "Fire Services Gateway", status: "Verified", timestamp: "01 Nov 2026, 14:24" },
      { name: "Municipal Water & Drainage NOC", category: "Utilities", source: "Uploaded PDF", status: "Needs Review", timestamp: "01 Nov 2026, 14:24" },
      { name: "AICTE Trust Resolution & Society Reg.", category: "Governance", source: "Charity Commissioner", status: "Verified", timestamp: "01 Nov 2026, 14:26" }
    ]
  },
  {
    id: "APP-2026-ENG-8821",
    institutionName: "Marathwada Institute of Technology",
    city: "Aurangabad",
    state: "Maharashtra",
    category: "Increase in Approved Intake",
    submissionDate: "2026-10-31",
    riskScore: 78,
    riskLevel: "High",
    status: "Manual Review Required",
    assignedOfficer: "Er. P. K. Deshmukh",
    totalDocuments: 22,
    verifiedDocuments: 15,
    flaggedDocuments: 7,
    aphComplianceRate: 74,
    summary: "Requesting 120 additional seats in AI & Data Science. Carpet area computation fails APH Table 4.1 minimum lab size requirements.",
    forensicAlerts: [
      {
        type: "Cross-Institution Match",
        title: "Perceptual Hash Match on Chemistry Lab Layout",
        description: "Uploaded floor plan CAD export matches identical vector layout from nearby Institute APP-2025-ENG-3199 submitted last cycle.",
        severity: "high",
        evidenceSnippet: "Perceptual similarity: 96.4% on Architectural Drawing Sheet #A3"
      },
      {
        type: "Field Discrepancy",
        title: "Faculty Cadre Ratio Deficit",
        description: "Application declares 1:15 ratio with 4 Professors. PAN cross-check shows 2 senior faculty are simultaneously registered at another campus.",
        severity: "critical",
        evidenceSnippet: "Faculty PAN: ABRPK9921D & CMLPA4102K match active employment records at Campus ID #661"
      }
    ],
    documentsList: [
      { name: "Architectural CAD Blueprint & Carpet Area", category: "Infrastructure", source: "Uploaded Drawing", status: "Flagged", timestamp: "31 Oct 2026, 11:10" },
      { name: "Faculty Roster & Cadre Distribution", category: "Faculty", source: "AICTE Portal Form", status: "Flagged", timestamp: "31 Oct 2026, 11:15" },
      { name: "State Fire Prevention & Life Safety NOC", category: "Safety", source: "Uploaded Scan", status: "Verified", timestamp: "31 Oct 2026, 11:20" },
      { name: "National Board of Accreditation (NBA) Cert", category: "Accreditation", source: "NBA Digital Repository", status: "Verified", timestamp: "31 Oct 2026, 11:22" }
    ]
  },
  {
    id: "APP-2026-NEW-1102",
    institutionName: "Apex Global Institute of Technology & AI",
    city: "Pune",
    state: "Maharashtra",
    category: "New Technical Campus",
    submissionDate: "2026-10-29",
    riskScore: 89,
    riskLevel: "Critical",
    status: "Rectification Required",
    assignedOfficer: "Dr. S. K. Narayanan",
    totalDocuments: 26,
    verifiedDocuments: 14,
    flaggedDocuments: 12,
    aphComplianceRate: 59,
    summary: "New Campus establishment in mega-city zone. Incomplete non-encumbrance certificate and contaminated land conversion zoning classification.",
    forensicAlerts: [
      {
        type: "Expired Certificate",
        title: "Pollution Control Board Consent to Establish Expired",
        description: "MPCB CTE certificate expired on 15 September 2026. Renewal acknowledgement not uploaded.",
        severity: "critical",
        evidenceSnippet: "Certificate #MPCB/RO/P/7740 expired 45 days prior to submission"
      },
      {
        type: "Tamper Indicator",
        title: "Metadata Timestamp Inconsistency in Land Demarcation Map",
        description: "EXIF software header indicates graphic editor modification timestamp newer than government surveyor digital signature date.",
        severity: "high",
        evidenceSnippet: "EXIF Adobe Photoshop CC modified 2026-10-27 vs DS signed 2024-05-12"
      }
    ],
    documentsList: [
      { name: "Land Conversion (NA Order) Document", category: "Land Clearance", source: "Collectorate Pune API", status: "Needs Review", timestamp: "29 Oct 2026, 09:30" },
      { name: "Pollution Control Consent to Establish", category: "Environment", source: "Uploaded PDF", status: "Flagged", timestamp: "29 Oct 2026, 09:35" },
      { name: "Bank Fixed Deposit Receipt ₹1.00 Crore", category: "Finance", source: "State Bank of India e-FDR", status: "Verified", timestamp: "29 Oct 2026, 09:40" }
    ]
  },
  {
    id: "APP-2026-ENG-9104",
    institutionName: "Walchand Institute of Technology",
    city: "Solapur",
    state: "Maharashtra",
    category: "Extension of Approval (EoA)",
    submissionDate: "2026-10-28",
    riskScore: 12,
    riskLevel: "Low",
    status: "Verified",
    assignedOfficer: "Prof. Ananya Roy",
    totalDocuments: 19,
    verifiedDocuments: 19,
    flaggedDocuments: 0,
    aphComplianceRate: 100,
    summary: "Established campus with NAAC A+ and NBA accreditation across all eligible tier-II programs. All 19 documents verified at source with zero discrepancies.",
    forensicAlerts: [
      {
        type: "Source Verified",
        title: "All 19 Documents Verified At Issuer Gateways",
        description: "Complete cryptographic audit trail verified against DigiLocker, Revenue, University affiliation, and Building authority endpoints.",
        severity: "success",
        evidenceSnippet: "Audit Dossier Hash: 4a79b...bc01 • Tamper-evident ledger recorded"
      }
    ],
    documentsList: [
      { name: "Land Title & Ownership Deed", category: "Land", source: "DigiLocker Issuer", status: "Verified", timestamp: "28 Oct 2026, 16:10" },
      { name: "Affiliation Letter from Solapur University", category: "Affiliation", source: "University API", status: "Verified", timestamp: "28 Oct 2026, 16:12" },
      { name: "Fire & Life Safety Clearance", category: "Safety", source: "Fire Gateway", status: "Verified", timestamp: "28 Oct 2026, 16:14" },
      { name: "Audited Financial Balance Sheet (FY25-26)", category: "Finance", source: "CA Portal UDIN Verified", status: "Verified", timestamp: "28 Oct 2026, 16:15" }
    ]
  },
  {
    id: "APP-2026-PHR-3129",
    institutionName: "Government College of Pharmacy",
    city: "Karad",
    state: "Maharashtra",
    category: "Extension of Approval (EoA)",
    submissionDate: "2026-10-27",
    riskScore: 18,
    riskLevel: "Low",
    status: "Verified",
    assignedOfficer: "Dr. V. R. Kulkarni",
    totalDocuments: 17,
    verifiedDocuments: 17,
    flaggedDocuments: 0,
    aphComplianceRate: 97,
    summary: "State government institution. Pharmacy Council of India (PCI) approval and AICTE joint inspection compliance verified.",
    forensicAlerts: [
      {
        type: "Source Verified",
        title: "PCI Approval Verified via Pharmacy Council Registry",
        description: "Institutional approval code 32-114/2026 active for 100 B.Pharm and 30 M.Pharm seats.",
        severity: "success",
        evidenceSnippet: "PCI Central Portal Query: Active & In Good Standing"
      }
    ],
    documentsList: [
      { name: "PCI Approval Order 2026-27", category: "Council Approval", source: "PCI Database", status: "Verified", timestamp: "27 Oct 2026, 10:14" },
      { name: "Machine Room & Lab Equipment Inventory", category: "Infrastructure", source: "Uploaded Geo-tagged Scan", status: "Verified", timestamp: "27 Oct 2026, 10:18" }
    ]
  },
  {
    id: "APP-2026-MBA-1082",
    institutionName: "Dr. D.Y. Patil Institute of Management Studies",
    city: "Navi Mumbai",
    state: "Maharashtra",
    category: "Introduction of Emerging Tech",
    submissionDate: "2026-10-26",
    riskScore: 36,
    riskLevel: "Medium",
    status: "Under Review",
    assignedOfficer: "Dr. S. K. Narayanan",
    totalDocuments: 20,
    verifiedDocuments: 18,
    flaggedDocuments: 2,
    aphComplianceRate: 91,
    summary: "Introducing MBA in Business Analytics & FinTech. Library e-journal subscriptions verify adequate titles; computational lab software licenses require clarification.",
    forensicAlerts: [
      {
        type: "Field Discrepancy",
        title: "Software License Volume Discrepancy",
        description: "Application lists 120 multi-user simulation software licenses; invoice receipt shows purchase of 60 seats.",
        severity: "medium",
        evidenceSnippet: "Invoice #INV-2026-088 vs Portal Form Field 8.4"
      }
    ],
    documentsList: [
      { name: "AICTE Syllabus & Course Matrix", category: "Curriculum", source: "University Affiliation", status: "Verified", timestamp: "26 Oct 2026, 15:40" },
      { name: "Computer Lab & Software Invoices", category: "IT Infrastructure", source: "Uploaded Document", status: "Needs Review", timestamp: "26 Oct 2026, 15:45" }
    ]
  },
  {
    id: "APP-2026-ENG-7210",
    institutionName: "Sardar Patel College of Engineering",
    city: "Mumbai",
    state: "Maharashtra",
    category: "Extension of Approval (EoA)",
    submissionDate: "2026-10-25",
    riskScore: 16,
    riskLevel: "Low",
    status: "Verified",
    assignedOfficer: "Er. P. K. Deshmukh",
    totalDocuments: 21,
    verifiedDocuments: 21,
    flaggedDocuments: 0,
    aphComplianceRate: 99,
    summary: "Autonomous state-aided institution. Heritage campus premises verified against municipal exemption charters and continuous fire audit.",
    forensicAlerts: [
      {
        type: "Source Verified",
        title: "Autonomous Status Extension Order Verified",
        description: "UGC autonomous conferment letter authenticated through UGC institutional repository.",
        severity: "success",
        evidenceSnippet: "UGC Gazette Ref: F.22-1/2022(AC) valid through 2031"
      }
    ],
    documentsList: [
      { name: "Autonomous Status Grant Letter", category: "Statutory", source: "UGC Registry", status: "Verified", timestamp: "25 Oct 2026, 13:05" },
      { name: "Fire NOC & Structural Stability Certificate", category: "Safety", source: "Municipal Chief Fire Officer", status: "Verified", timestamp: "25 Oct 2026, 13:10" }
    ]
  },
  {
    id: "APP-2026-ENG-6119",
    institutionName: "Vidya Pratishthan's Kamalnayan Bajaj Institute",
    city: "Baramati",
    state: "Maharashtra",
    category: "Change of Site / Location",
    submissionDate: "2026-10-24",
    riskScore: 54,
    riskLevel: "Medium",
    status: "Pending",
    assignedOfficer: "Prof. Ananya Roy",
    totalDocuments: 25,
    verifiedDocuments: 20,
    flaggedDocuments: 5,
    aphComplianceRate: 84,
    summary: "Campus expansion to adjacent land survey numbers. Old campus demarcation boundary coordinates require ground truth correlation.",
    forensicAlerts: [
      {
        type: "Field Discrepancy",
        title: "GIS Coordinates Contiguity Verification Pending",
        description: "Land parcels 18/2 and 18/4 separated by a notified public access cart track. APH requires contiguous single plot.",
        severity: "high",
        evidenceSnippet: "Revenue Survey Map: 6-meter public right-of-way intersects Parcel A and Parcel B"
      }
    ],
    documentsList: [
      { name: "Combined 7/12 Revenue Extract", category: "Land", source: "Mahabhulekh Portal", status: "Verified", timestamp: "24 Oct 2026, 11:45" },
      { name: "District Collector Demarcation Certificate", category: "Revenue", source: "Uploaded Scan", status: "Needs Review", timestamp: "24 Oct 2026, 11:50" }
    ]
  }
];

export const KPI_DATA = {
  totalApplications: {
    value: 1248,
    change: "+14.2%",
    timeframe: "vs previous AICTE cycle",
    description: "Active submissions in Western Regional Office jurisdiction"
  },
  pendingReview: {
    value: 184,
    change: "42 Urgent",
    timeframe: "require scrutiny within 72 hrs",
    description: "Awaiting final scrutiny officer verification sign-off"
  },
  verifiedApplications: {
    value: 986,
    change: "79.0%",
    timeframe: "completion rate",
    description: "Passed all pre-flight, OCR, and issuer gateway checks"
  },
  highRiskApplications: {
    value: 78,
    change: "6.2%",
    timeframe: "flagged for scrutiny review",
    description: "Exhibiting forensic anomalies, expired NOCs, or duplicate infra"
  }
};

export const SCRUTINY_STATUS_DATA = [
  { name: "Verified", count: 986, color: "#16A34A" },
  { name: "Under Review", count: 184, color: "#2563EB" },
  { name: "Pending Initial Triage", count: 120, color: "#64748B" },
  { name: "Rectification Required", count: 52, color: "#D97706" },
  { name: "Rejected / Ineligible", count: 26, color: "#DC2626" }
];

export const RISK_DISTRIBUTION_DATA = [
  { level: "Low Risk", percentage: 68, count: 848, color: "#16A34A", description: "All documents source-verified with zero discrepancies" },
  { level: "Medium Risk", percentage: 21, count: 262, color: "#3B82F6", description: "Minor field formatting or non-critical documentation questions" },
  { level: "High Risk", percentage: 8, count: 100, color: "#D97706", description: "Expired statutory NOCs or carpet area deviations" },
  { level: "Critical Risk", percentage: 3, count: 38, color: "#DC2626", description: "Cross-institution duplicate infrastructure or document alteration signals" }
];

export const RECENT_ACTIVITIES = [
  {
    id: "act-1",
    type: "report",
    title: "Validation Report Generated",
    description: "Cryptographically stamped compliance audit report created for APP-2026-ENG-9104 (Walchand Institute of Technology).",
    timestamp: "12 minutes ago",
    badge: "Report Issued",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200"
  },
  {
    id: "act-2",
    type: "duplicate",
    title: "Cross-Campus Infrastructure Flag",
    description: "Perceptual hashing detected 96.4% drawing similarity between APP-2026-ENG-8821 and previously submitted blueprint.",
    timestamp: "38 minutes ago",
    badge: "Forensics Signal",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200"
  },
  {
    id: "act-3",
    type: "verification",
    title: "DigiLocker Source Verification Passed",
    description: "Automated API verification confirmed 12 educational & trust credentials for K.J. Somaiya College of Engineering.",
    timestamp: "1 hour ago",
    badge: "Source Authenticated",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200"
  },
  {
    id: "act-4",
    type: "manual",
    title: "Manual Officer Review Assigned",
    description: "Dr. S. K. Narayanan assigned to evaluate land contiguity survey for Vidya Pratishthan application APP-2026-ENG-6119.",
    timestamp: "2 hours ago",
    badge: "Triage Assigned",
    badgeColor: "bg-slate-100 text-slate-700 border-slate-200"
  },
  {
    id: "act-5",
    type: "rectification",
    title: "Rectification Notice Dispatched",
    description: "Deficiency notice automatically compiled and sent to Apex Global Institute for expired MPCB consent certificate.",
    timestamp: "3 hours ago",
    badge: "Rectification Sent",
    badgeColor: "bg-rose-50 text-rose-700 border-rose-200"
  }
];

export const VERIFICATION_INSIGHTS = {
  sourceVerified: {
    count: "8,420",
    label: "Documents Verified at Source",
    detail: "Validated via DigiLocker, State Land Revenue, BCI, COA & Municipal APIs",
    trend: "+94.2% automated confidence"
  },
  manualReviewNeeded: {
    count: "142",
    label: "Pending Manual Review",
    detail: "Cases with non-standard vernacular notary stamps or handwritten registry notations",
    trend: "Officer attention required"
  },
  expiredCertificates: {
    count: "36",
    label: "Expired Certificates Detected",
    detail: "Fire safety renewals, pollution consent orders, or expired bank guarantees",
    trend: "Pre-flight rejected before officer queue"
  },
  duplicateInfra: {
    count: "9",
    label: "Cross-Institution Duplicates",
    detail: "Identical lab equipment invoices and shared faculty PANs across multiple entities",
    trend: "Referred to AICTE Vigilance Cell"
  },
  mismatchedFields: {
    count: "28",
    label: "Application vs Document Mismatches",
    detail: "Discrepancy between web form entered carpet area and registered deed figures",
    trend: "Highlighted in side-by-side evidence viewer"
  }
};
