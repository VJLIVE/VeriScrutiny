"use client";

import { useState, useMemo } from "react";
import { ApplicationRecord, MOCK_APPLICATIONS } from "@/lib/mock-data";
import {
  Search,
  Filter,
  ArrowUpDown,
  Eye,
  Building2,
  Calendar,
  ShieldAlert,
  ChevronLeft,
  ChevronRight,
  FileCheck2,
  Download,
  CheckCircle2,
  Clock,
  AlertTriangle
} from "lucide-react";

interface TableProps {
  onSelectApplication: (app: ApplicationRecord) => void;
  externalSearchQuery: string;
  forceRiskFilter?: string | null;
}

export function RecentApplicationsTable({
  onSelectApplication,
  externalSearchQuery,
  forceRiskFilter
}: TableProps) {
  const [internalSearch, setInternalSearch] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<string>("All");
  const [selectedRisk, setSelectedRisk] = useState<string>("All");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [sortField, setSortField] = useState<"riskScore" | "submissionDate" | "institutionName">("riskScore");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const searchQuery = externalSearchQuery || internalSearch;

  // Filter and sort applications
  const filteredApplications = useMemo(() => {
    let result = [...MOCK_APPLICATIONS];

    // Force risk filter from KPI if present
    if (forceRiskFilter === "high-risk") {
      result = result.filter((a) => a.riskLevel === "High" || a.riskLevel === "Critical");
    } else if (forceRiskFilter === "verified") {
      result = result.filter((a) => a.status === "Verified");
    } else if (forceRiskFilter === "pending") {
      result = result.filter((a) => a.status === "Pending" || a.status === "Under Review" || a.status === "Manual Review Required");
    }

    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (app) =>
          app.institutionName.toLowerCase().includes(q) ||
          app.id.toLowerCase().includes(q) ||
          app.city.toLowerCase().includes(q) ||
          app.category.toLowerCase().includes(q)
      );
    }

    // Status filter
    if (selectedStatus !== "All") {
      result = result.filter((app) => app.status === selectedStatus);
    }

    // Risk level filter
    if (selectedRisk !== "All") {
      result = result.filter((app) => app.riskLevel === selectedRisk);
    }

    // Category filter
    if (selectedCategory !== "All") {
      result = result.filter((app) => app.category === selectedCategory);
    }

    // Sorting
    result.sort((a, b) => {
      let comparison = 0;
      if (sortField === "riskScore") {
        comparison = a.riskScore - b.riskScore;
      } else if (sortField === "submissionDate") {
        comparison = new Date(a.submissionDate).getTime() - new Date(b.submissionDate).getTime();
      } else if (sortField === "institutionName") {
        comparison = a.institutionName.localeCompare(b.institutionName);
      }
      return sortOrder === "asc" ? comparison : -comparison;
    });

    return result;
  }, [
    searchQuery,
    selectedStatus,
    selectedRisk,
    selectedCategory,
    sortField,
    sortOrder,
    forceRiskFilter
  ]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredApplications.length / itemsPerPage) || 1;
  const paginatedApplications = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredApplications.slice(start, start + itemsPerPage);
  }, [filteredApplications, currentPage, itemsPerPage]);

  const toggleSort = (field: "riskScore" | "submissionDate" | "institutionName") => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("desc");
    }
  };

  return (
    <div id="applications-table" className="bg-white rounded-2xl border border-[#E5EAF2] shadow-xs overflow-hidden">
      
      {/* Table Header & Controls Bar */}
      <div className="p-5 border-b border-slate-200/80 space-y-4">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#2563EB]" />
              <h3 className="text-sm font-bold text-[#0B1736]">
                Institutional Scrutiny Queue
              </h3>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-slate-100 text-slate-700">
                {filteredApplications.length} Submissions
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Live dockets awaiting statutory review, pre-flight clearance, and validation sign-off
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                alert("Exporting Scrutiny Audit Register (CSV format with cryptographic digests)...");
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-slate-500" />
              <span>Export Queue</span>
            </button>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-wrap items-center gap-2.5 pt-1 text-xs">
          
          {/* Quick Search */}
          <div className="relative min-w-[200px] flex-1 max-w-xs">
            <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Filter by name, ID or city..."
              value={internalSearch}
              onChange={(e) => {
                setInternalSearch(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Status Dropdown */}
          <select
            value={selectedStatus}
            onChange={(e) => {
              setSelectedStatus(e.target.value);
              setCurrentPage(1);
            }}
            className="px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700 font-medium focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="All">All Statuses</option>
            <option value="Verified">Verified</option>
            <option value="Under Review">Under Review</option>
            <option value="Pending">Pending</option>
            <option value="Manual Review Required">Manual Review Required</option>
            <option value="Rectification Required">Rectification Required</option>
          </select>

          {/* Risk Level Dropdown */}
          <select
            value={selectedRisk}
            onChange={(e) => {
              setSelectedRisk(e.target.value);
              setCurrentPage(1);
            }}
            className="px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700 font-medium focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="All">All Risk Tiers</option>
            <option value="Low">Low Risk</option>
            <option value="Medium">Medium Risk</option>
            <option value="High">High Risk</option>
            <option value="Critical">Critical Risk</option>
          </select>

          {/* Category Dropdown */}
          <select
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setCurrentPage(1);
            }}
            className="px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700 font-medium focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="All">All Categories</option>
            <option value="Extension of Approval (EoA)">Extension of Approval (EoA)</option>
            <option value="New Technical Campus">New Technical Campus</option>
            <option value="Increase in Approved Intake">Increase in Approved Intake</option>
            <option value="Introduction of Emerging Tech">Introduction of Emerging Tech</option>
            <option value="Change of Site / Location">Change of Site / Location</option>
          </select>

          {(selectedStatus !== "All" || selectedRisk !== "All" || selectedCategory !== "All" || internalSearch) && (
            <button
              onClick={() => {
                setSelectedStatus("All");
                setSelectedRisk("All");
                setSelectedCategory("All");
                setInternalSearch("");
                setCurrentPage(1);
              }}
              className="px-2.5 py-1 text-slate-500 hover:text-slate-800 text-[11px] font-semibold underline"
            >
              Reset Filters
            </button>
          )}

        </div>

      </div>

      {/* Responsive Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          
          <thead className="bg-slate-50/80 border-b border-slate-200 text-slate-500 font-semibold uppercase text-[10px] tracking-wider">
            <tr>
              <th className="px-5 py-3.5">
                <button
                  onClick={() => toggleSort("institutionName")}
                  className="flex items-center gap-1 hover:text-slate-900"
                >
                  <span>Institution & Campus</span>
                  <ArrowUpDown className="w-3 h-3 text-slate-400" />
                </button>
              </th>
              <th className="px-4 py-3.5">Application ID</th>
              <th className="px-4 py-3.5">Category</th>
              <th className="px-4 py-3.5">
                <button
                  onClick={() => toggleSort("submissionDate")}
                  className="flex items-center gap-1 hover:text-slate-900"
                >
                  <span>Date</span>
                  <ArrowUpDown className="w-3 h-3 text-slate-400" />
                </button>
              </th>
              <th className="px-4 py-3.5">
                <button
                  onClick={() => toggleSort("riskScore")}
                  className="flex items-center gap-1 hover:text-slate-900"
                >
                  <span>Risk Triage</span>
                  <ArrowUpDown className="w-3 h-3 text-slate-400" />
                </button>
              </th>
              <th className="px-4 py-3.5">Verification Status</th>
              <th className="px-4 py-3.5">Assigned Officer</th>
              <th className="px-5 py-3.5 text-right">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100 text-slate-700">
            {paginatedApplications.length === 0 ? (
              <tr>
                <td colSpan={8} className="px-5 py-12 text-center text-slate-500">
                  <div className="max-w-xs mx-auto space-y-2">
                    <Building2 className="w-8 h-8 text-slate-300 mx-auto" />
                    <p className="font-semibold text-slate-800 text-sm">No applications found</p>
                    <p className="text-xs text-slate-400">
                      No matching docket records found for the current search or filter combination.
                    </p>
                  </div>
                </td>
              </tr>
            ) : (
              paginatedApplications.map((app) => (
                <tr
                  key={app.id}
                  onClick={() => onSelectApplication(app)}
                  className="hover:bg-blue-50/30 cursor-pointer transition-colors group"
                >
                  {/* Institution Name & Location */}
                  <td className="px-5 py-3.5 max-w-[240px]">
                    <div className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors truncate">
                      {app.institutionName}
                    </div>
                    <div className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                      <span>{app.city}, {app.state}</span>
                      <span>•</span>
                      <span>{app.verifiedDocuments}/{app.totalDocuments} Docs</span>
                    </div>
                  </td>

                  {/* Application ID */}
                  <td className="px-4 py-3.5 font-mono text-slate-600 font-medium">
                    {app.id}
                  </td>

                  {/* Category */}
                  <td className="px-4 py-3.5 text-slate-600 max-w-[160px] truncate">
                    <span className="truncate block" title={app.category}>
                      {app.category}
                    </span>
                  </td>

                  {/* Submission Date */}
                  <td className="px-4 py-3.5 text-slate-500 whitespace-nowrap">
                    {app.submissionDate}
                  </td>

                  {/* Risk Score */}
                  <td className="px-4 py-3.5 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${
                        app.riskLevel === "Low"
                          ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                          : app.riskLevel === "Medium"
                          ? "bg-blue-50 text-blue-800 border-blue-200"
                          : app.riskLevel === "High"
                          ? "bg-amber-50 text-amber-800 border-amber-200"
                          : "bg-rose-50 text-rose-800 border-rose-200"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          app.riskLevel === "Low"
                            ? "bg-emerald-500"
                            : app.riskLevel === "Medium"
                            ? "bg-blue-500"
                            : app.riskLevel === "High"
                            ? "bg-amber-500"
                            : "bg-rose-500"
                        }`}
                      />
                      <span>{app.riskScore}</span>
                      <span className="text-[10px] opacity-75">({app.riskLevel})</span>
                    </span>
                  </td>

                  {/* Verification Status */}
                  <td className="px-4 py-3.5 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-semibold ${
                        app.status === "Verified"
                          ? "bg-emerald-100/70 text-emerald-800"
                          : app.status === "Under Review"
                          ? "bg-blue-100/70 text-blue-800"
                          : app.status === "Pending"
                          ? "bg-slate-100 text-slate-700"
                          : app.status === "Manual Review Required"
                          ? "bg-amber-100/70 text-amber-800"
                          : "bg-rose-100/70 text-rose-800"
                      }`}
                    >
                      {app.status === "Verified" && <CheckCircle2 className="w-3 h-3 text-emerald-600" />}
                      {app.status === "Under Review" && <Clock className="w-3 h-3 text-blue-600" />}
                      {app.status === "Manual Review Required" && <AlertTriangle className="w-3 h-3 text-amber-600" />}
                      {app.status}
                    </span>
                  </td>

                  {/* Assigned Officer */}
                  <td className="px-4 py-3.5 text-slate-600 whitespace-nowrap">
                    {app.assignedOfficer}
                  </td>

                  {/* Actions */}
                  <td className="px-5 py-3.5 text-right whitespace-nowrap">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectApplication(app);
                      }}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-white hover:bg-blue-50 text-blue-600 hover:text-blue-700 border border-slate-200 hover:border-blue-300 font-semibold text-[11px] shadow-2xs transition-all"
                    >
                      <Eye className="w-3 h-3" />
                      <span>Inspect</span>
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>

        </table>
      </div>

      {/* Pagination Footer */}
      <div className="p-4 border-t border-slate-200/80 bg-slate-50/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
        <div>
          Showing{" "}
          <strong className="text-slate-800">
            {filteredApplications.length > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0}
          </strong>{" "}
          to{" "}
          <strong className="text-slate-800">
            {Math.min(currentPage * itemsPerPage, filteredApplications.length)}
          </strong>{" "}
          of <strong className="text-slate-800">{filteredApplications.length}</strong> applications
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="p-1.5 rounded border border-slate-200 hover:bg-white disabled:opacity-40 disabled:hover:bg-transparent"
            aria-label="Previous Page"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <span className="px-2 font-mono text-slate-700 font-medium">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="p-1.5 rounded border border-slate-200 hover:bg-white disabled:opacity-40 disabled:hover:bg-transparent"
            aria-label="Next Page"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

    </div>
  );
}
