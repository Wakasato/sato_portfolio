import Link from "next/link";

export default function CheckoutUICaseStudy() {
  return (
    <div className="bg-background min-h-screen text-foreground">
      <div className="max-w-4xl mx-auto px-6 py-16 sm:py-24 flex flex-col gap-16">

        {/* Back Link */}
        <Link href="/projects" className="text-sm font-medium text-muted hover:text-accent transition-colors inline-flex items-center gap-2 w-fit">
          ← Back to Projects
        </Link>

        {/* Header & Intro */}
        <section className="flex flex-col gap-6">
          <h1 className="font-display text-4xl sm:text-5xl font-medium tracking-tight border-b border-border pb-8">
            Checkout UI
          </h1>

          <div className="flex flex-col gap-4 mt-4">
            <p className="text-sm text-muted">Project 4/5 - Components Design for Checkout UI</p>
            <h2 className="text-xl sm:text-2xl font-medium leading-snug">
              Designed and implemented UI components for e-commerce checkout experiences
            </h2>
            <p className="text-muted leading-relaxed max-w-3xl text-lg">
              Reduced confusion and complaints by creating clear visual distinction between actionable elements and informational text.
            </p>
          </div>
        </section>

        {/* Role & Client */}
        <section className="flex flex-wrap gap-x-8 gap-y-2 -mt-8 text-sm">
          <div>
            <span className="font-semibold text-foreground">Role:</span>
            <span className="text-muted ml-2">UI Designer, Coder</span>
          </div>

          <div>
            <span className="font-semibold text-foreground">Client:</span>
            <span className="text-muted ml-2">E-commerce Websites</span>
          </div>
        </section>

        {/* Overview */}
        <section className="flex flex-col gap-6">
          <h3 className="font-display text-sm font-semibold text-muted uppercase tracking-[0.2em] border-b border-border pb-4">Overview</h3>

          <div className="flex flex-col lg:flex-row gap-8 items-stretch">
            <div className="w-full lg:w-1/2 flex items-center justify-center border border-border bg-surface">
              <img src="/UI.png" alt="Checkout UI Components" className="w-full max-w-xs max-h-full object-contain" />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <h4 className="font-semibold text-foreground">Scope of Work</h4>
                <ul className="list-disc list-inside text-muted space-y-2 marker:text-accent text-sm">
                  <li>Designed the UI components</li>
                  <li>Implemented the frontend (HTML/CSS/JS)</li>
                  <li>Collaborated with backend engineers</li>
                  <li>Reduced confusing elements across 5 sites</li>
                </ul>
              </div>

              <div className="flex flex-col gap-3">
                <h4 className="font-semibold text-foreground">Problems</h4>
                <p className="text-sm text-muted">
                  The existing checkout UI had accumulated so many disclaimer-style button components that users couldn&apos;t distinguish actionable elements from informational text. Complaint volume was high.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="flex flex-col gap-8">
          <h3 className="font-display text-sm font-semibold text-muted uppercase tracking-[0.2em] border-b border-border pb-4">Solution</h3>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="w-full lg:w-1/2 border border-border bg-surface">
                <img src="/UI2.png" alt="Solution" className="w-full h-auto" />
              </div>

              <div className="w-full lg:w-1/2 flex flex-col gap-4">
                <div className="flex flex-col gap-3">
                  <h4 className="font-semibold text-foreground">Approach</h4>
                  <p className="text-sm text-muted">
                    I rebuilt the component library using typographic hierarchy to create clear visual distinction between actions and information — eliminating the need for excessive annotations.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <h4 className="font-semibold text-foreground">Key Changes</h4>
                  <ul className="list-disc list-inside text-muted space-y-2 marker:text-accent text-sm">
                    <li>Clearer visual hierarchy for actions vs. information</li>
                    <li>Reduced disclaimer-style elements</li>
                    <li>Improved usability across checkout flows</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Outcome */}
        <section className="flex flex-col gap-4">
          <h3 className="font-display text-sm font-semibold text-muted uppercase tracking-[0.2em]">Outcomes</h3>
          <ul className="list-disc list-inside text-muted space-y-3 marker:text-accent">
            <li>Complaint volume dropped to near-zero following redesign, with no escalations reported post-launch</li>
            <li>Achieved strong client satisfaction and positive feedback</li>
            <li>Component library became the standard for all 5 e-commerce sites</li>
          </ul>
        </section>

      </div>
    </div>
  );
}
