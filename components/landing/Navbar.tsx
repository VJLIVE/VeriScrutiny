"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ShieldCheck, ArrowRight, Menu, X, FileCheck, Layers, Cpu, ExternalLink } from "lucide-react";

export function LandingNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E5EAF2]"
          : "bg-white border-b border-[#E5EAF2]/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-[#2563EB] flex items-center justify-center text-white shadow-sm shadow-blue-500/20 group-hover:bg-[#1D4ED8] transition-colors">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-xl tracking-tight text-[#0B1736]">
                  Veri<span className="text-[#2563EB]">Scrutiny</span>
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-blue-50 text-blue-700 border border-blue-200">
                  SIH 2026 • PS 26261
                </span>
              </div>
              <p className="text-[11px] text-[#64748B] hidden md:block">
                AICTE Regulatory Scrutiny & Document Verification
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-[14px] font-medium text-[#475569]">
            <a href="#overview" className="hover:text-[#2563EB] transition-colors">
              Overview
            </a>
            <a href="#capabilities" className="hover:text-[#2563EB] transition-colors">
              Capabilities
            </a>
            <a href="#how-it-works" className="hover:text-[#2563EB] transition-colors">
              How It Works
            </a>
            <a href="#technology" className="hover:text-[#2563EB] transition-colors">
              Technology
            </a>
            <a href="#compliance" className="hover:text-[#2563EB] transition-colors">
              Compliance Rules
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/dashboard"
              className="px-3.5 py-2 text-sm font-medium text-[#1E293B] hover:text-[#2563EB] transition-colors"
            >
              Officer Portal
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-medium shadow-sm shadow-blue-600/10 transition-all"
            >
              <span>Launch Dashboard</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/dashboard"
              className="px-3 py-1.5 rounded-md bg-[#2563EB] text-white text-xs font-medium"
            >
              Dashboard
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#E5EAF2] bg-white px-4 pt-2 pb-5 space-y-3">
          <a
            href="#overview"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
          >
            Overview
          </a>
          <a
            href="#capabilities"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
          >
            Capabilities
          </a>
          <a
            href="#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
          >
            How It Works
          </a>
          <a
            href="#technology"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
          >
            Technology
          </a>
          <div className="pt-2 border-t border-gray-100 flex flex-col gap-2">
            <Link
              href="/dashboard"
              className="w-full text-center px-4 py-2.5 rounded-lg bg-[#2563EB] text-white text-sm font-medium"
            >
              Launch Scrutiny Dashboard
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
