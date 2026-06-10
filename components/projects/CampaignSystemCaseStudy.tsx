"use client";

import Link from "next/link";
import { useState } from "react";

export default function CampaignSystemCaseStudy() {
  const [modalImage, setModalImage] = useState<string | null>(null);

  return (
    <div className="bg-white dark:bg-black min-h-screen text-gray-900 dark:text-gray-100">
      <div className="max-w-4xl mx-auto px-6 py-16 flex flex-col gap-16">

        {/* Back Link */}
        <Link href="/projects" className="text-sm font-medium text-gray-500 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors inline-flex items-center gap-2 w-fit">
          ← Back to Projects
        </Link>

        {/* Header & Intro */}
        <section className="flex flex-col gap-6">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight border-b border-gray-200 dark:border-gray-800 pb-8">
            B2B SaaS platform design
          </h1>

          <div className="flex flex-col gap-4 mt-4">
            <h2 className="text-xl sm:text-2xl font-semibold leading-snug">
              Designing Revenue-Critical Campaign Workflows <br />
              B2B SaaS platform used by 5M+ users
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl text-lg">
              Over 200 B2B employees used the platform serving 5M+ users. It managed high-volume call centre campaigns and heavy data processing — meaning every release is high-stakes.
            </p>
          </div>

          {/* Hero Image Showcase */}
          <div className="w-full mt-6 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm bg-gray-50 dark:bg-gray-900">
            <img
              src="/Welbox_Hero.png"
              alt="WELBOX Platform Campaign System Hero Image"
              className="w-full h-auto block"
            />
          </div>
        </section>

        {/* Role & Client */}
        <section className="flex flex-wrap gap-2 -mt-8">
          <div className="px-3 py-1 bg-gray-100 dark:bg-gray-900 rounded text-sm">
            <span className="font-bold text-gray-900 dark:text-white">Role:</span>
            <span className="text-gray-700 dark:text-gray-300 ml-2">Product Designer</span>
          </div>

          <div className="px-3 py-1 bg-gray-100 dark:bg-gray-900 rounded text-sm">
            <span className="font-bold text-gray-900 dark:text-white">Company:</span>
            <span className="text-gray-700 dark:text-gray-300 ml-2">HR Tech</span>
          </div>
        </section>


        {/* Impact & Outcomes */}
        <section className="flex flex-col gap-4">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wider text-sm">Impact & Outcomes</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-y border-gray-200 dark:border-gray-800 divide-x divide-gray-200 dark:divide-gray-800 py-6 my-2">
            <div className="flex flex-col px-6 gap-1">
              <span className="text-3xl font-bold text-emerald-700 dark:text-emerald-400">£200k</span>
              <span className="text-xs text-gray-500 font-medium uppercase leading-tight">quarterly revenue uplift</span>
            </div>
            <div className="flex flex-col px-6 gap-1">
              <span className="text-3xl font-bold text-emerald-700 dark:text-emerald-400">Zero</span>
              <span className="text-xs text-gray-500 font-medium uppercase leading-tight">incidents across all releases</span>
            </div>
            <div className="flex flex-col px-6 gap-1">
              <span className="text-3xl font-bold text-emerald-700 dark:text-emerald-400">4x</span>
              <span className="text-xs text-gray-500 font-medium uppercase leading-tight">promotion frequency increase</span>
            </div>
            <div className="flex flex-col px-6 gap-1">
              <span className="text-3xl font-bold text-emerald-700 dark:text-emerald-400">25%</span>
              <span className="text-xs text-gray-500 font-medium uppercase leading-tight">reduction in operational effort</span>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
            The campaign system I redesigned enabled the business to run 4x more campaigns per year. At ~£30–40M revenue per campaign cycle, scaling from 1 to 4 annual campaigns directly contributed to significant revenue uplift — conservatively estimated at £200K+ in incremental quarterly gains.
          </p>
        </section>


        {/* Roles & Stakeholders */}
        <section className="flex flex-col gap-8">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wider text-sm border-b border-gray-200 dark:border-gray-800 pb-2">My Role: Senior Product Designer / UX Lead</h3>

          <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
            {/* CSS Stakeholder Map (Quarter Circle Design) */}
            <div className="relative w-full max-w-[400px] aspect-square shrink-0 rounded-tr-[100%] overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm bg-white dark:bg-black">
              {/* Background Concentric Layers */}
              <div className="absolute bottom-0 left-0 w-full h-full bg-slate-100 dark:bg-slate-900/50 rounded-tr-[100%] transition-transform"></div>
              <div className="absolute bottom-0 left-0 w-[85%] h-[85%] bg-slate-50 dark:bg-slate-800/50 rounded-tr-[100%]"></div>
              <div className="absolute bottom-0 left-0 w-[65%] h-[65%] bg-emerald-50 dark:bg-emerald-950/30 rounded-tr-[100%]"></div>
              <div className="absolute bottom-0 left-0 w-[45%] h-[45%] bg-emerald-100 dark:bg-emerald-900/40 rounded-tr-[100%]"></div>

              {/* Layer Labels */}
              <span className="absolute bottom-[75%] left-[5%] font-bold text-emerald-900 dark:text-emerald-100 text-lg opacity-80">Campaign<br />Team</span>
              <span className="absolute bottom-[20%] left-[45%] font-bold text-emerald-800 dark:text-emerald-200 text-sm opacity-60 tracking-wider">WELBOX</span>
              <span className="absolute bottom-[5%] left-[70%] font-bold text-slate-500 dark:text-slate-400 text-sm tracking-wider">WELBOX Users</span>

              {/* Connecting Lines (SVG) */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                {/* Director center is approx at x=100, y=300 */}
                <g className="stroke-emerald-200 dark:stroke-emerald-800/60" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round">
                  {/* To Design Team */}
                  <line x1="100" y1="300" x2="40" y2="360" />
                  {/* To Engineers */}
                  <line x1="100" y1="300" x2="60" y2="200" />
                  {/* To Call Centre */}
                  <line x1="100" y1="300" x2="100" y2="120" />
                  {/* To Sales */}
                  <line x1="100" y1="300" x2="160" y2="230" />
                  {/* To Clients */}
                  <line x1="100" y1="300" x2="210" y2="180" />
                  {/* To Back Office */}
                  <line x1="100" y1="300" x2="220" y2="360" />
                  {/* To Employee */}
                  <line x1="100" y1="300" x2="350" y2="300" />
                </g>
              </svg>

              {/* Nodes */}
              {/* Director (Me) */}
              <div className="absolute bottom-[20%] left-[20%] -translate-x-1/2 translate-y-1/2 w-20 h-20 bg-emerald-600 rounded-full flex flex-col items-center justify-center text-white font-bold text-sm shadow-lg shadow-emerald-600/20 z-10 leading-tight border-2 border-white dark:border-black">
                Director<br /><span className="font-normal text-xs opacity-80">(Me)</span>
              </div>

              {/* Inner Layer Nodes (Campaign Team) */}
              <div className="absolute bottom-[6%] left-[8%] -translate-x-1/2 translate-y-1/2 w-16 h-16 bg-slate-900 dark:bg-slate-800 rounded-full flex flex-col items-center justify-center text-white font-bold text-[11px] shadow-md leading-tight border border-slate-700">
                <svg className="w-5 h-5 mb-0.5 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                Design<br />Team
              </div>
              <div className="absolute bottom-[48%] left-[12%] -translate-x-1/2 translate-y-1/2 w-16 h-16 bg-slate-900 dark:bg-slate-800 rounded-full flex flex-col items-center justify-center text-white font-bold text-[11px] shadow-md leading-tight border border-slate-700">
                <svg className="w-6 h-6 mb-0.5 opacity-80" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>
                Engineers
              </div>
              <div className="absolute bottom-[38%] left-[36%] -translate-x-1/2 translate-y-1/2 w-16 h-16 bg-slate-900 dark:bg-slate-800 rounded-full flex flex-col items-center justify-center text-white font-bold text-[11px] shadow-md leading-tight border border-slate-700">
                <svg className="w-6 h-6 mb-0.5 opacity-80" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>
                Sales<br />Team
              </div>

              {/* Middle Layer Nodes (WELBOX) */}
              <div className="absolute bottom-[65%] left-[24%] -translate-x-1/2 translate-y-1/2 w-16 h-16 bg-slate-600 dark:bg-slate-700 rounded-full flex flex-col items-center justify-center text-white font-bold text-[11px] shadow-md leading-tight border border-slate-500 dark:border-slate-600">
                <svg className="w-5 h-5 mb-0.5 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Call<br />Centre
              </div>
              <div className="absolute bottom-[6%] left-[55%] -translate-x-1/2 translate-y-1/2 w-16 h-16 bg-slate-600 dark:bg-slate-700 rounded-full flex flex-col items-center justify-center text-white font-bold text-[11px] shadow-md leading-tight border border-slate-500 dark:border-slate-600">
                <svg className="w-6 h-6 mb-0.5 opacity-80" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>
                Back<br />Office
              </div>

              {/* Outer Layer Nodes (External) */}
              <div className="absolute bottom-[50%] left-[50%] -translate-x-1/2 translate-y-1/2 w-16 h-16 bg-white dark:bg-black rounded-full flex flex-col items-center justify-center text-slate-800 dark:text-slate-200 font-bold text-[11px] shadow-md leading-tight border border-gray-200 dark:border-gray-800">
                <svg className="w-5 h-5 mb-0.5 opacity-80" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" /></svg>
                Clients
              </div>
              <div className="absolute bottom-[20%] left-[88%] -translate-x-1/2 translate-y-1/2 w-16 h-16 bg-white dark:bg-black rounded-full flex flex-col items-center justify-center text-slate-800 dark:text-slate-200 font-bold text-[11px] shadow-md leading-tight border border-gray-200 dark:border-gray-800">
                <svg className="w-6 h-6 mb-0.5 opacity-80" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>
                Employee
              </div>
            </div>

            <div className="flex flex-col gap-6 flex-1">
              <div className="flex flex-col gap-3">
                <h4 className="font-bold text-gray-900 dark:text-white">Responsibilities</h4>
                <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-2 marker:text-emerald-500">
                  <li>End-to-end interaction design for campaign creation workflows</li>
                  <li>Information architecture and validation logic design</li>
                  <li>Cross-functional collaboration with engineering, Product, Legal, and Operations</li>
                  <li>Identifying operational risks before product release</li>
                </ul>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-gray-900 dark:text-white">Context</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  The platform delivered employee benefit campaigns to over 5 million users.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="flex flex-col gap-6">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wider text-sm">Problem</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            The campaign team was manually loading each promotion from scratch — coordinating across Sales, Legal, Engineering, and Operations within a semi-manual process. A single campaign took weeks of unstandardised manual work, limiting execution to once a year and creating massive risk to a core revenue driver platform used by 5M+ users.
          </p>
          <div className="w-full max-w-2xl mx-auto mt-2 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm bg-gray-50 dark:bg-gray-900">
            <img
              src="/welbox_problems.png"
              alt="WELBOX Platform Campaign System Problems"
              className="w-full h-auto block"
            />
          </div>
        </section>


        {/* Key Design Decisions */}
        <section className="flex flex-col gap-8">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wider text-sm border-b border-gray-200 dark:border-gray-800 pb-2">
            Key Design Decisions
          </h3>

          <div className="flex flex-col gap-6 mt-4">
            {/* Decision 1 */}
            <div className="flex flex-col gap-4 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/30">
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 text-sm font-bold shrink-0 font-mono">
                  1
                </span>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white leading-snug">
                  Prioritising operational reliability for a high-demand campaign system
                </h4>
              </div>
              <div className="flex flex-col gap-3 text-gray-700 dark:text-gray-300 text-sm leading-relaxed pl-11 max-w-3xl">
                <p>
                  A quantitative survey with over 10,000 users revealed strong demand for discount campaigns and time-limited promotional offers.
                </p>
                <p>
                  Because campaign visibility directly affected user engagement and platform revenue, I identified operational reliability as a critical UX issue — not just a backend concern.
                </p>
                <p>
                  I worked closely with Legal, Engineering, Sales, and Operations teams to redesign the release workflow, introducing a structured 3-week validation cycle to reduce ambiguity, improve traceability, and minimise release risk.
                </p>
              </div>
            </div>

            {/* Decision 2 */}
            <div className="flex flex-col gap-4 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/30">
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 text-sm font-bold shrink-0 font-mono">
                  2
                </span>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white leading-snug">
                  Designing workflows for non-technical operational teams
                </h4>
              </div>
              <div className="flex flex-col gap-3 text-gray-700 dark:text-gray-300 text-sm leading-relaxed pl-11 max-w-3xl">
                <p>
                  The original campaign setup process depended heavily on manually maintained Excel files and fragmented operational knowledge.
                </p>
                <p>
                  Rather than replacing existing workflows with engineering-heavy tooling, I designed lightweight JavaScript and JSON-based automation that reduced repetitive manual work while remaining accessible to non-technical teams.
                </p>
                <p>
                  This allowed operational staff to maintain flexibility while significantly reducing human error and production overhead.
                </p>
              </div>
            </div>

            {/* Decision 3 */}
            <div className="flex flex-col gap-6 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/30">
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 text-sm font-bold shrink-0 font-mono">
                  3
                </span>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white leading-snug">
                  Reducing cognitive overload in campaign interfaces
                </h4>
              </div>

              <div className="flex flex-col gap-6 pl-11">
                <div className="flex flex-col gap-3 text-gray-700 dark:text-gray-300 text-sm leading-relaxed max-w-3xl">
                  <p>
                    The original campaign pages exposed large amounts of backend product data directly to users, resulting in visually dense interfaces with weak information hierarchy.
                  </p>
                  <p>
                    I simplified the interface by reducing unnecessary visual noise, restructuring typography, limiting colour usage, and selectively hiding non-essential data through CSS-based presentation rules.
                  </p>
                  <p>
                    This improved scanability and made promotional information easier for users to understand quickly during high-traffic campaigns.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2 w-full">
                  {/* Before */}
                  <div className="rounded-xl border border-gray-200 dark:border-gray-850 bg-white dark:bg-gray-900 p-4 shadow-sm">
                    <div 
                      className="relative rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-800 cursor-zoom-in transition-transform hover:scale-[1.02]"
                      onClick={() => setModalImage("/before-ui.png")}
                    >
                      <img
                        src="/before-ui.png"
                        alt="Before UI Analysis"
                        className="w-full h-auto block"
                      />
                      <div className="absolute inset-0 bg-white/5 dark:bg-black/5 rounded-lg pointer-events-none" />
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-3 font-semibold">Before: Manual workflow bottleneck</p>
                  </div>

                  {/* After */}
                  <div className="rounded-xl border border-gray-200 dark:border-gray-850 bg-white dark:bg-gray-900 p-4 shadow-sm">
                    <div 
                      className="relative rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-800 cursor-zoom-in transition-transform hover:scale-[1.02]"
                      onClick={() => setModalImage("/after-ui.png")}
                    >
                      <img
                        src="/after-ui.png"
                        alt="After UI Redesign"
                        className="w-full h-auto block"
                      />
                      <div className="absolute inset-0 bg-white/5 dark:bg-black/5 rounded-lg pointer-events-none" />
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-3 font-semibold">After: Unified campaign system</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decision 4 */}
            <div className="flex flex-col gap-4 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/30">
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 text-sm font-bold shrink-0 font-mono">
                  4
                </span>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white leading-snug">
                  Aligning UX decisions with operational scalability
                </h4>
              </div>
              <div className="flex flex-col gap-3 text-gray-700 dark:text-gray-300 text-sm leading-relaxed pl-11 max-w-3xl">
                <p>
                  Instead of focusing only on new customer-facing features, I prioritised stabilising the operational infrastructure behind campaign delivery.
                </p>
                <p>
                  By combining workflow redesign, validation improvements, and UI simplification, the business was able to safely increase campaign frequency from annual to quarterly releases without increasing operational risk.
                </p>
              </div>
            </div>
          </div>
        </section>



        {/* Design Process CSS Flowchart */}
        <section className="flex flex-col gap-8 mb-16">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wider text-sm border-b border-gray-200 dark:border-gray-800 pb-2">Design Process</h3>

          <div className="flex flex-col gap-8">
            {/* Flowchart Diagram */}
            <div className="flex flex-col md:flex-row items-center gap-4 w-full bg-gray-50 dark:bg-gray-900/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">

              {/* Step 1 */}
              <div className="flex flex-col items-center gap-2 flex-1 text-center">
                <div className="w-16 h-16 bg-white dark:bg-gray-800 border-2 border-slate-300 dark:border-slate-600 rounded-lg flex items-center justify-center shadow-sm">
                  <svg className="w-8 h-8 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
                </div>
                <span className="font-bold text-xs uppercase tracking-wide">Workflow Analysis</span>
              </div>

              <div className="hidden md:block text-slate-300 dark:text-slate-700">→</div>

              {/* Step 2 */}
              <div className="flex flex-col items-center gap-2 flex-1 text-center">
                <div className="w-16 h-16 bg-white dark:bg-gray-800 border-2 border-slate-300 dark:border-slate-600 rounded-lg flex items-center justify-center shadow-sm font-mono text-xl text-slate-500 font-bold">
                  &lt;JS&gt;
                </div>
                <span className="font-bold text-xs uppercase tracking-wide">Internal Tooling</span>
              </div>

              <div className="hidden md:block text-slate-300 dark:text-slate-700">→</div>

              {/* Step 3 */}
              <div className="flex flex-col items-center gap-2 flex-1 text-center">
                <div className="w-16 h-16 bg-white dark:bg-gray-800 border-2 border-slate-300 dark:border-slate-600 rounded-lg flex items-center justify-center shadow-sm">
                  <svg className="w-8 h-8 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                </div>
                <span className="font-bold text-xs uppercase tracking-wide">Validation & Research</span>
              </div>

              <div className="hidden md:block text-slate-300 dark:text-slate-700">→</div>

              {/* Step 4 */}
              <div className="flex flex-col items-center gap-2 flex-1 text-center">
                <div className="w-16 h-16 bg-white dark:bg-gray-800 border-2 border-slate-300 dark:border-slate-600 rounded-lg flex items-center justify-center shadow-sm">
                  <svg className="w-8 h-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <span className="font-bold text-xs uppercase tracking-wide text-emerald-700 dark:text-emerald-400">UX Redesign</span>
              </div>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 text-sm">
              <div className="flex flex-col gap-2">
                <h5 className="font-bold text-gray-900 dark:text-white">Workflow Analysis</h5>
                <p className="text-gray-600 dark:text-gray-400">Identified manual data registration as a major operational bottleneck.</p>
              </div>
              <div className="flex flex-col gap-2">
                <h5 className="font-bold text-gray-900 dark:text-white">Internal Tooling Improvement</h5>
                <p className="text-gray-600 dark:text-gray-400">Built a lightweight JavaScript tool that converted Excel inputs into JSON and HTML.</p>
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <h5 className="font-bold text-gray-900 dark:text-white">Validation & Research</h5>
                <p className="text-gray-600 dark:text-gray-400">Conducted a 10,000+ user survey to identify unmet needs, revealing strong demand for sales campaigns.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="flex flex-col gap-8 mb-16">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wider text-sm border-b border-gray-200 dark:border-gray-800 pb-2">Reflection</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-3">
              <h4 className="font-bold text-gray-900 dark:text-white text-base">Designing Beyond the Interface</h4>
              <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-2 marker:text-emerald-500">
                <li>Scalable systems are organisational challenges, not only UI challenges</li>
                <li>Product reliability depended on aligning Sales, Legal, Engineering, and Operations</li>
                <li>Reducing ambiguity across teams was as important as improving the interface itself</li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="font-bold text-gray-900 dark:text-white text-base">Working Within Constraints</h4>
              <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-2 marker:text-emerald-500">
                <li>Legacy systems and operational dependencies limited what could realistically be changed</li>
                <li>Many stakeholders were non-technical, requiring solutions that balanced usability and operational flexibility</li>
                <li>Explored lightweight alternatives instead of introducing engineering-heavy processes</li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="font-bold text-gray-900 dark:text-white text-base">Operational Reliability Over Feature Expansion</h4>
              <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-2 marker:text-emerald-500">
                <li>Prioritised stability and validation before adding new functionality</li>
                <li>Introduced clearer workflows and approval structures to reduce operational risk</li>
                <li>Improved predictability enabled the business to scale campaign releases from annual to quarterly cycles</li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="font-bold text-gray-900 dark:text-white text-base">Communication as a Design Tool</h4>
              <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-2 marker:text-emerald-500">
                <li>Used sketches and visual explanations to align multidisciplinary teams</li>
                <li>Visual storytelling helped externalise complex workflows and reduce misunderstanding during planning and validation phases</li>
              </ul>
            </div>
          </div>
        </section>

      </div>

      {/* Fullscreen Image Modal */}
      {modalImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 cursor-zoom-out"
          onClick={() => setModalImage(null)}
        >
          <img src={modalImage} alt="Fullscreen View" className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl" />
        </div>
      )}
    </div>
  );
}
