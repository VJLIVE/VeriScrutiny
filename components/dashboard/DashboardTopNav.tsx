"use client";

import { useState } from "react";
import {
  Search,
  Bell,
  HelpCircle,
  Calendar,
  ChevronRight,
  Shield,
  FileCheck,
  AlertTriangle,
  X,
  ExternalLink
} from "lucide-react";

interface TopNavProps {
  onSearchChange: (query: string) => void;
  searchQuery: string;
}

export function DashboardTopNav({ onSearchChange, searchQuery }: TopNavProps) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showHelpModal, setShowHelpModal] = useState(false);

  const notifications = [
    {
      id: 1,
      title: "Forensic Kerning Anomaly",
      time: "10 mins ago",
      desc: "Municipal Water NOC for APP-2026-ENG-4982 flagged for officer review.",
      unread: true
    },
    {
      id: 2,
      title: "Duplicate Faculty Record",
      time: "45 mins ago",
      desc: "Dr. R. K. Joshi (PAN: ABRPJ9912A) registered in 2 simultaneous applications.",
      unread: true
    },
    {
      id: 3,
      title: "Batch Verification Complete",
      time: "2 hours ago",
      desc: "42 applications verified against Maharashtra IGR land records database.",
      unread: false
    }
  ];

  return (
    <>
      <header className="sticky top-0 z-30 h-16 bg-white border-b border-[#E5EAF2] px-4 sm:px-6 flex items-center justify-between gap-4">
        
        {/* Left: Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs text-slate-500 overflow-hidden">
          <span className="font-medium text-slate-400 hidden sm:inline">AICTE Portal</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-300 hidden sm:inline" />
          <span className="font-medium text-slate-600 truncate">Western Regional Office (WRO)</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
          <span className="font-semibold text-[#0B1736] truncate">Scrutiny & Verification Desk</span>
        </div>

        {/* Center: Global Search Bar */}
        <div className="flex-1 max-w-md mx-2 sm:mx-6">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search applications, institutions, PINs, or file IDs..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-9 pr-14 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all"
            />
            <div className="absolute right-2.5 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-0.5 text-[10px] font-mono font-medium text-slate-400 bg-white border border-slate-200 px-1.5 py-0.5 rounded shadow-2xs">
              <span>Ctrl</span>
              <span>K</span>
            </div>
          </div>
        </div>

        {/* Right: Controls & Profile */}
        <div className="flex items-center gap-2.5 shrink-0">
          
          {/* Cycle Selector Pill */}
          <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-xs font-medium text-slate-700">
            <Calendar className="w-3.5 h-3.5 text-blue-600" />
            <span>AY 2026-27 (Batch 3)</span>
          </div>

          {/* Help & Standards Button */}
          <button
            onClick={() => setShowHelpModal(true)}
            aria-label="View Scrutiny Guidelines"
            title="AICTE Scrutiny Guidelines (APH 2026-27)"
            className="p-2 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors relative"
          >
            <HelpCircle className="w-4 h-4" />
          </button>

          {/* Notifications Button */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              aria-label="Notifications"
              className="p-2 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors relative"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white" />
            </button>

            {/* Notifications Dropdown Drawer */}
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 sm:w-96 rounded-xl bg-white border border-slate-200 shadow-xl p-4 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <h4 className="text-xs font-bold text-slate-900">
                      Scrutiny Alerts
                    </h4>
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-rose-100 text-rose-700">
                      2 Unread
                    </span>
                  </div>
                  <button
                    onClick={() => setShowNotifications(false)}
                    className="text-slate-400 hover:text-slate-600 text-xs"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="py-2 divide-y divide-slate-100 max-h-72 overflow-y-auto">
                  {notifications.map((n) => (
                    <div key={n.id} className="py-2.5 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-slate-900 flex items-center gap-1.5">
                          {n.unread && <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />}
                          {n.title}
                        </span>
                        <span className="text-[10px] text-slate-400">{n.time}</span>
                      </div>
                      <p className="text-slate-600 mt-1 text-[11px] leading-relaxed">
                        {n.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-2 border-t border-slate-100 text-center">
                  <button
                    onClick={() => setShowNotifications(false)}
                    className="text-xs text-blue-600 font-medium hover:underline"
                  >
                    Mark all alerts as acknowledged
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="h-6 w-px bg-slate-200 mx-1 hidden sm:block" />

          {/* Officer Avatar & Role */}
          <div className="flex items-center gap-2.5 pl-1">
            <div className="w-8 h-8 rounded-full bg-[#0B1736] text-white flex items-center justify-center font-bold text-xs ring-2 ring-blue-500/20">
              SN
            </div>
            <div className="hidden xl:block text-left">
              <p className="text-xs font-semibold text-slate-900 leading-none">
                Dr. S. K. Narayanan
              </p>
              <p className="text-[10px] text-slate-500 leading-tight mt-0.5">
                AICTE Scrutiny Officer
              </p>
            </div>
          </div>

        </div>

      </header>

      {/* Help Modal */}
      {showHelpModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-600" />
                <h3 className="text-base font-bold text-slate-900">
                  AICTE Regulatory Scrutiny Standards
                </h3>
              </div>
              <button
                onClick={() => setShowHelpModal(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-4 space-y-3 text-xs text-slate-600 leading-relaxed">
              <p>
                <strong>Statutory Mandate:</strong> This system assists the Scrutiny Committee constituted under Section 10 of the AICTE Act, 1987.
              </p>
              <div className="p-3 bg-blue-50 rounded-lg text-blue-900 border border-blue-200">
                <strong>Forensic Signals Policy:</strong> Tampering indicators generated by computer vision algorithms (ELA, Font variance) are purely advisory signals for human officer investigation, not definitive proof of forgery.
              </div>
              <p>
                <strong>Norms Referenced:</strong> AICTE Approval Process Handbook (APH) 2026-27 Chapters I, II & IV; National Building Code (NBC) 2016 Part IV (Fire & Life Safety).
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setShowHelpModal(false)}
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-medium"
              >
                Understood & Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
