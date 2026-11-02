import { LandingNavbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { PlatformHighlights } from "@/components/landing/PlatformHighlights";
import { ProblemSolution } from "@/components/landing/ProblemSolution";
import { CoreCapabilities } from "@/components/landing/CoreCapabilities";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { TechStack } from "@/components/landing/TechStack";
import { LandingFooter } from "@/components/landing/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F9FC] selection:bg-blue-600 selection:text-white">
      {/* 1. Sticky Navigation Bar */}
      <LandingNavbar />

      <main className="flex-1">
        {/* 2. Hero Section with Real Software Preview */}
        <HeroSection />

        {/* 3. Four Trust Pillars / Platform Highlights */}
        <PlatformHighlights />

        {/* 4. Problem and Solution Matrix */}
        <ProblemSolution />

        {/* 5. Core Capabilities (8 Rich Cards) */}
        <CoreCapabilities />

        {/* 6. How It Works (10-Step Interactive Pipeline) */}
        <HowItWorks />

        {/* 7. Technology Stack */}
        <TechStack />
      </main>

      {/* 8. Final CTA & Footer */}
      <LandingFooter />
    </div>
  );
}
