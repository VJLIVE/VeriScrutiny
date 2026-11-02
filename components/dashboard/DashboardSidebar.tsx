"use client";

import Link from "next/link";
import {
  ShieldCheck,
  LayoutDashboard,
  FileCheck2,
  FileSearch,
  ClipboardCheck,
  ShieldAlert,
  FileText,
  History,
  BookOpenCheck,
  Settings,
  ChevronLeft,
  ChevronRight,
  LogOut,
  UserCheck,
  ExternalLink
} from "lucide-react";

interface SidebarProps {
  collapsed: boolean;
  onToggleCollapse: () => void;
  activeNav: string;
  onSelectNav: (id: string) => void;
}

export function DashboardSidebar({
  collapsed,
  onToggleCollapse,
  activeNav,
  onSelectNav
}: SidebarProps) {
  const navItems = [
    { id: "overview", label: "Overview", icon: LayoutDashboard },
    { id: "applications", label: "Applications", icon: FileCheck2, badge: "184" },
    { id: "verification", label: "Document Verification", icon: FileSearch },
    { id: "pre-flight", label: "Pre-Flight Checks", icon: ClipboardCheck },
    { id: "risk-forensics", label: "Risk & Forensics", icon: ShieldAlert, alert: true },
    { id: "reports", label: "Verification Reports", icon: FileText },
    { id: "audit-trail", label: "Audit Trail", icon: History },
    { id: "aph-checklist", label: "APH Checklist", icon: BookOpenCheck },
    { id: "settings", label: "Settings", icon: Settings }
  ];

  return (
    <aside
      className={`fixed top-0 left-0 z-40 h-screen transition-all duration-300 ease-in-out bg-[#0B1736] text-white flex flex-col justify-between border-r border-slate-800 ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Top Header & Brand */}
      <div>
        <div className="h-16 flex items-center justify-between px-4 border-b border-slate-800">
          {!collapsed ? (
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#2563EB] flex items-center justify-center text-white shrink-0 shadow-sm shadow-blue-500/30">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold text-lg tracking-tight text-white">
                  Veri<span className="text-[#3B82F6]">Scrutiny</span>
                </span>
                <span className="block text-[10px] text-slate-400 font-mono">
                  AICTE PS 26261
                </span>
              </div>
            </Link>
          ) : (
            <Link href="/" className="mx-auto">
              <div className="w-10 h-10 rounded-lg bg-[#2563EB] flex items-center justify-center text-white shadow-sm shadow-blue-500/30">
                <ShieldCheck className="w-6 h-6" />
              </div>
            </Link>
          )}

          {/* Collapse Toggle */}
          <button
            onClick={onToggleCollapse}
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            className="p-1.5 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors hidden md:block"
          >
            {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>
        </div>

        {/* Officer Status Badge */}
        {!collapsed && (
          <div className="px-4 py-3 mx-3 my-3 rounded-lg bg-slate-900/80 border border-slate-800 text-xs">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Active Desk
              </span>
              <span className="flex items-center gap-1.5 text-emerald-400 font-medium text-[11px]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live Session
              </span>
            </div>
            <p className="font-medium text-slate-200 mt-1 text-xs truncate">
              Western Region • Mumbai WRO
            </p>
          </div>
        )}

        {/* Navigation List */}
        <nav className="px-3 py-2 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeNav === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectNav(item.id)}
                title={collapsed ? item.label : undefined}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-medium transition-all ${
                  isActive
                    ? "bg-[#2563EB] text-white shadow-sm shadow-blue-600/30 font-semibold"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/80"
                } ${collapsed ? "justify-center" : ""}`}
              >
                <Icon className={`w-4 h-4 shrink-0 ${isActive ? "text-white" : "text-slate-400"}`} />
                {!collapsed && (
                  <div className="flex-1 flex items-center justify-between text-left">
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="px-1.5 py-0.5 rounded-full text-[10px] font-semibold bg-blue-500/20 text-blue-300 border border-blue-400/30">
                        {item.badge}
                      </span>
                    )}
                    {item.alert && (
                      <span className="w-2 h-2 rounded-full bg-amber-400 ring-2 ring-amber-400/20" />
                    )}
                  </div>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom Profile & Exit */}
      <div className="p-3 border-t border-slate-800 bg-slate-950/60">
        {!collapsed ? (
          <div className="space-y-3">
            <div className="flex items-center gap-3 px-2">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xs shrink-0 ring-2 ring-blue-500/20">
                SN
              </div>
              <div className="overflow-hidden">
                <h4 className="text-xs font-semibold text-white truncate">
                  Dr. S. K. Narayanan
                </h4>
                <p className="text-[11px] text-slate-400 truncate">
                  Senior Scrutiny Officer
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs px-2">
              <Link
                href="/"
                className="text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors"
                title="Return to Public Landing"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Exit Portal</span>
              </Link>
              <span className="text-[10px] font-mono text-slate-500">v1.2.6-SIH</span>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3 py-1">
            <div
              className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xs ring-2 ring-blue-500/20"
              title="Dr. S. K. Narayanan (Senior Scrutiny Officer)"
            >
              SN
            </div>
            <Link
              href="/"
              className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              title="Exit Portal"
            >
              <LogOut className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </aside>
  );
}
