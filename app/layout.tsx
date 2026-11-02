import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VeriScrutiny | AI-Powered Regulatory Scrutiny & Compliance Verification",
  description:
    "Explainable AI co-pilot for AICTE regulatory scrutiny. Pre-flight application checks, source document verification, cross-institution fingerprinting, and tamper-evident audit trails. Developed for Smart India Hackathon 2026 (PS 26261).",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#F7F9FC] text-[#111827]">
        {children}
      </body>
    </html>
  );
}
