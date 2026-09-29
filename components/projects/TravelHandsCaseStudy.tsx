"use client";

import Link from "next/link";
import { useState } from "react";

export default function TravelHandsCaseStudy() {
  const [modalImage, setModalImage] = useState<string | null>(null);

  return (
    <div className="bg-background min-h-screen text-foreground">
      <div className="max-w-4xl mx-auto px-6 py-16 sm:py-24 flex flex-col gap-16">

        {/* Back Link */}
        <Link href="/projects" className="text-sm font-medium text-muted hover:text-accent transition-colors inline-flex items-center gap-2 w-fit">
          ← Back to Projects
        </Link>

        {/* Header & Intro */}
        <section className="flex flex-col gap-6">
          <div className="border-b border-border pb-8">
            <h1 className="font-display text-4xl sm:text-5xl font-medium tracking-tight">
              Travel Hands
            </h1>
          </div>

          <div className="flex flex-col gap-4 mt-4">
            <h2 className="text-xl sm:text-2xl font-medium leading-snug">
              AI Voice Assistant Accessibility Investigation
            </h2>
            <p className="text-muted leading-relaxed max-w-3xl text-lg">
              Travel Hands × Macmillan Cancer Support-funded feasibility study | 2026
            </p>
          </div>
        </section>

        {/* Role */}
        <section className="flex flex-wrap gap-x-8 gap-y-2 -mt-8 text-sm">
          <div>
            <span className="font-semibold text-foreground">Role:</span>
            <span className="text-muted ml-2">Service Designer (Intern)</span>
          </div>

          <div>
            <span className="font-semibold text-foreground">Collaborator:</span>
            <span className="text-muted ml-2">Travel Hands, Macmillan Cancer Support</span>
          </div>
        </section>

        {/* Hero Image */}
        <section className="w-full">
          <img src="/Travelhands_hero.png" alt="Travel Hands AI voice assistant hero visual" className="w-full h-auto border border-border" />
        </section>

        {/* Context & My Role */}
        <section className="flex flex-col gap-8">
          <h3 className="font-display text-sm font-semibold text-muted uppercase tracking-[0.2em] border-b border-border pb-4">
            Overview
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Context</h4>
              <p className="text-sm text-muted leading-relaxed">
                Travel Hands is a UK charity supporting the mobility needs of visually impaired people. As part of a Macmillan Cancer Support-funded feasibility study, I researched the barriers visually impaired people face when accessing healthcare and cancer treatment services, and investigated whether an AI voice assistant could support their mobility and navigation needs.
              </p>
            </div>

            <div className="flex flex-col justify-start">
              <h4 className="font-semibold text-foreground mb-2">My Role</h4>
              <p className="text-sm text-muted leading-relaxed bg-surface p-4 border border-border">
                Service Designer (Intern) — research planning, stakeholder mapping, journey mapping, and hands-on accessibility evaluation of an AI voice assistant.
              </p>
            </div>
          </div>
        </section>

        {/* Research */}
        <section className="flex flex-col gap-12">
          <h3 className="font-display text-sm font-semibold text-muted uppercase tracking-[0.2em] border-b border-border pb-4">
            Research
          </h3>

          {/* Mobility Ecosystem Map */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider">
              Mobility Ecosystem Map
            </h4>
            <button
              type="button"
              className="block w-full border border-border cursor-zoom-in transition-transform hover:scale-[1.01]"
              onClick={() => setModalImage("/Travelhands_interviewmap.jpg")}
              aria-label="Enlarge Mobility Ecosystem Map"
            >
              <img src="/Travelhands_interviewmap.jpg" alt="Mobility ecosystem map around Travel Hands' users, with listening opportunities ranked by value" className="w-full h-auto block" />
            </button>
            <ul className="list-disc list-outside pl-5 text-sm text-muted space-y-2 marker:text-accent leading-relaxed">
              <li>Before starting research, mapped the ecosystem around Travel Hands&apos; users — core groups (VIPs/patients, family and carers, volunteers, guide dog users), existing support networks (community centres, sight loss groups, RNIB, other charities), and potential partners (councils, hospitals, TfL, NHS, GP clinics)</li>
              <li>Used this map to plan research methods, prioritising direct listening opportunities with VIPs, volunteers and carers, using community organisations to reach underrepresented users, and validating findings through indirect stakeholders such as hospitals and councils</li>
              <li>Ranked engagement methods by value — from high-value direct methods (ride debriefs, volunteer interviews, RNIB partnerships) to validation-stage methods (hospital feedback)</li>
            </ul>
          </div>

          {/* Interviews & journey mapping */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider">
              Interviews &amp; Journey Mapping
            </h4>
            <button
              type="button"
              className="block w-full border border-border cursor-zoom-in transition-transform hover:scale-[1.01]"
              onClick={() => setModalImage("/Travelhands_mobilitymap.png")}
              aria-label="Enlarge interview findings map"
            >
              <img src="/Travelhands_mobilitymap.png" alt="Map of organisations around VIPs from interviews, showing fragmented support" className="w-full h-auto block" />
            </button>
            <ul className="list-disc list-outside pl-5 text-sm text-muted space-y-2 marker:text-accent leading-relaxed">
              <li>Interviewed visually impaired people, volunteers and healthcare professionals about their experiences navigating healthcare and mobility services</li>
              <li>Synthesised findings into a storyboard, using illustration to communicate barriers across the healthcare journey clearly to non-technical stakeholders</li>
              <li>Conducted hands-on testing of an AI voice assistant to evaluate its real-world accessibility, rather than relying on how it was expected to behave</li>
            </ul>
          </div>
        </section>

        {/* Insights */}
        <section className="flex flex-col gap-8">
          <h3 className="font-display text-sm font-semibold text-muted uppercase tracking-[0.2em] border-b border-border pb-4">
            Insights
          </h3>

          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider">
              Storyboard: six gaps in the healthcare journey
            </h4>
            <button
              type="button"
              className="block w-full border border-border cursor-zoom-in transition-transform hover:scale-[1.01]"
              onClick={() => setModalImage("/Travelhands_storyboard.jpg")}
              aria-label="Enlarge storyboard"
            >
              <img src="/Travelhands_storyboard.jpg" alt="Storyboard illustrating six gaps in the healthcare journey for visually impaired patients" className="w-full h-auto block" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              ["Information-format gap", "Written correspondence (e.g. NHS letters) assumed sight, with no accessible alternative offered by default."],
              ["Real-time reassurance gap", "Automated phone systems (e.g. “press 1, 2, 3”) excluded people who couldn’t see the options and had no equivalent spoken alternative."],
              ["Rehabilitation-content accessibility gap", "Recovery and rehabilitation information was distributed in print formats not usable by visually impaired patients."],
              ["Recognition gap", "Healthcare staff did not always recognise or account for a patient’s visual impairment during in-person interactions."],
              ["Transport-eligibility gap", "Unclear or restrictive transport eligibility rules left some patients isolated, unable to join others or attend appointments independently."],
              ["Signposting-awareness gap", "Staff were not always aware of relevant sight-loss support and services to refer patients to."],
            ].map(([title, body], i) => (
              <div key={title} className="flex flex-col gap-2 p-5 border border-border bg-surface">
                <div className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-7 h-7 rounded-full border border-border text-foreground text-xs font-semibold shrink-0 font-mono">
                    {i + 1}
                  </span>
                  <h5 className="font-semibold text-foreground leading-snug pt-0.5">{title}</h5>
                </div>
                <p className="text-sm text-muted leading-relaxed pl-10">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Key Insights */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-b border-border py-8">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold text-accent uppercase tracking-wide">Systemic Barriers</span>
            <p className="text-sm text-muted leading-relaxed">
              Barriers were not limited to any single touchpoint — they were spread across information formats, in-person interactions, transport access and staff awareness, meaning no single fix would close the gap.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold text-accent uppercase tracking-wide">Voice in Practice</span>
            <p className="text-sm text-muted leading-relaxed">
              Voice interaction was seen as a promising way to reduce reliance on visual interfaces, but hands-on testing showed the experience broke down in practice — some barriers sat in the interface itself, others in how the underlying system handled information, and some were invisible unless testing with assistive technology such as screen readers.
            </p>
          </div>
        </section>

        {/* Recommendations */}
        <section className="flex flex-col gap-8">
          <h3 className="font-display text-sm font-semibold text-muted uppercase tracking-[0.2em] border-b border-border pb-4">
            Recommendations
          </h3>
          <ul className="list-disc list-outside pl-5 text-sm text-muted space-y-2 marker:text-accent leading-relaxed">
            <li>Evaluated multiple voice/AI models for how reliably they handled real-world speech input</li>
            <li>Recommended interaction design changes to make controls usable with screen readers and keyboard navigation</li>
            <li>Recommended technical fixes to how location input was handled, to reduce failed or ambiguous results</li>
            <li>Documented findings in a handover report to support the charity&apos;s next development phase and funding case</li>
          </ul>
        </section>

        {/* Reflection */}
        <section className="flex flex-col gap-8 mb-16">
          <h3 className="font-display text-sm font-semibold text-muted uppercase tracking-[0.2em] border-b border-border pb-4">
            Reflection
          </h3>
          <p className="text-sm text-muted leading-relaxed italic p-3 border-l-2 border-accent">
            This project reinforced that accessibility problems are often systemic rather than purely visual, spanning information design, technology and staff awareness — and that testing directly, rather than assuming a solution works, is necessary to find where a service actually fails for the people who rely on it most.
          </p>
        </section>

      </div>

      {/* Fullscreen Image Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 cursor-zoom-out"
          onClick={() => setModalImage(null)}
        >
          <img src={modalImage} alt="Fullscreen View" className="max-w-full max-h-[90vh] object-contain" />
        </div>
      )}
    </div>
  );
}
