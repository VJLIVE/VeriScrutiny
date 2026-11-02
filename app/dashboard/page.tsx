"use client";

import { useState } from "react";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DashboardTopNav } from "@/components/dashboard/DashboardTopNav";
import { DashboardWelcome } from "@/components/dashboard/DashboardWelcome";
import { KpiCards } from "@/components/dashboard/KpiCards";
import { ScrutinyOverviewChart } from "@/components/dashboard/ScrutinyOverviewChart";
import { RiskDistributionChart } from "@/components/dashboard/RiskDistributionChart";
import { RecentApplicationsTable } from "@/components/dashboard/RecentApplicationsTable";
import { RecentActivityFeed } from "@/components/dashboard/RecentActivityFeed";
import { VerificationInsights } from "@/components/dashboard/VerificationInsights";
import { ApplicationDetailModal } from "@/components/dashboard/ApplicationDetailModal";
import { ApplicationRecord } from "@/lib/mock-data";

export default function DashboardPage() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeNav, setActiveNav] = useState("overview");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeKpiFilter, setActiveKpiFilter] = useState<string | null>(null);
  const [selectedApplication, setSelectedApplication] = useState<ApplicationRecord | null>(null);

  const scrollToApplications = () => {
    const el = document.getElementById("applications-table");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleHighRiskFilter = () => {
    if (activeKpiFilter === "high-risk") {
      setActiveKpiFilter(null);
    } else {
      setActiveKpiFilter("high-risk");
      scrollToApplications();
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F9FC] text-[#111827] flex">
      {/* 1. Persistent Collapsible Sidebar */}
      <DashboardSidebar
        collapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
        activeNav={activeNav}
        onSelectNav={(id) => {
          setActiveNav(id);
          if (id === "applications") {
            scrollToApplications();
          }
        }}
      />

      {/* Main Content Area */}
      <div
        className={`flex-1 flex flex-col min-w-0 transition-all duration-300 ease-in-out ${
          sidebarCollapsed ? "md:ml-20" : "md:ml-64"
        }`}
      >
        {/* 2. Top Navigation Bar */}
        <DashboardTopNav
          onSearchChange={setSearchQuery}
          searchQuery={searchQuery}
        />

        {/* Dashboard Body Container */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 max-w-7xl w-full mx-auto">
          
          {/* 3. Welcome & Salutation Card */}
          <DashboardWelcome
            onScrollToApplications={scrollToApplications}
            onFilterHighRisk={toggleHighRiskFilter}
            isHighRiskActive={activeKpiFilter === "high-risk"}
          />

          {/* 4. 4 Distinct KPI Metric Cards */}
          <KpiCards
            activeKpiFilter={activeKpiFilter}
            onSelectKpiFilter={(filter) => {
              setActiveKpiFilter(filter);
              if (filter) {
                scrollToApplications();
              }
            }}
          />

          {/* 5. Charts Row: Scrutiny Overview & Risk Distribution */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7">
              <ScrutinyOverviewChart />
            </div>
            <div className="lg:col-span-5">
              <RiskDistributionChart />
            </div>
          </div>

          {/* 6. Verification Insights High-Scannability Matrix */}
          <VerificationInsights />

          {/* 7. Recent Applications Interactive Data Table */}
          <RecentApplicationsTable
            onSelectApplication={(app) => setSelectedApplication(app)}
            externalSearchQuery={searchQuery}
            forceRiskFilter={activeKpiFilter}
          />

          {/* 8. Recent Real-Time Activity Feed */}
          <RecentActivityFeed />

        </main>
      </div>

      {/* Detail Modal for Application Inspection */}
      <ApplicationDetailModal
        application={selectedApplication}
        onClose={() => setSelectedApplication(null)}
      />
    </div>
  );
}
