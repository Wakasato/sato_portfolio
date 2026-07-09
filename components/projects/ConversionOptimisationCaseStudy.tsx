import Link from "next/link";

export default function ConversionOptimisationCaseStudy() {
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
            Conversion Optimisation
          </h1>

          <div className="flex flex-col gap-4 mt-4">
            <p className="text-sm text-muted">Deech, Inc. | 2019-2020</p>
            <h2 className="text-xl sm:text-2xl font-medium leading-snug">
              Designed and optimised a high-end gym membership conversion experience
            </h2>
            <p className="text-muted leading-relaxed max-w-3xl text-lg">
              Used A/B testing and demographic analysis to identify the most effective campaign messaging for high-income professionals.
            </p>
          </div>
        </section>

        {/* Role & Client */}
        <section className="flex flex-wrap gap-x-8 gap-y-2 -mt-8 text-sm">
          <div>
            <span className="font-semibold text-foreground">Role:</span>
            <span className="text-muted ml-2">Designer, Coder</span>
          </div>

          <div>
            <span className="font-semibold text-foreground">Client:</span>
            <span className="text-muted ml-2">Personal Training Gyms</span>
          </div>
        </section>

        {/* Challenges */}
        <section className="flex flex-col gap-4">
          <h3 className="font-display text-sm font-semibold text-muted uppercase tracking-[0.2em] border-b border-border pb-4">Challenges</h3>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="w-full lg:w-1/2 border border-border bg-surface">
              <img src="/UXDesign2.png" alt="Challenge" className="w-full h-auto" />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <ul className="list-disc list-inside text-muted space-y-3 marker:text-accent">
                <li>Our customer was a high-end gym targeting specific customers.</li>
                <li>Their target users were high-income, highly educated, motivated businesspeople.</li>
                <li>Effectively reaching these users was challenging.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* A/B Testing */}
        <section className="flex flex-col gap-8">
          <h3 className="font-display text-sm font-semibold text-muted uppercase tracking-[0.2em] border-b border-border pb-4">A/B Testing &amp; Analysis</h3>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="w-full lg:w-1/2 border border-border bg-surface">
                <img src="/UXDesign.png" alt="A/B Testing" className="w-full h-auto" />
              </div>

              <div className="w-full lg:w-1/2 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <h4 className="font-semibold text-foreground">Approach</h4>
                  <p className="text-sm text-muted">
                    Our team conducted A/B tests to examine which offer is the most attractive one to the customers.
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <h4 className="font-semibold text-foreground">Demographic Insights</h4>
                  <p className="text-sm text-muted">
                    The map provides information on the density of prospective customers, broken down by age and income bracket.
                  </p>
                </div>

                <img src="/UXDesign_demographic.png" alt="Demographic Analysis" className="w-64 h-auto border border-border" />
              </div>
            </div>
          </div>
        </section>

        {/* Outcome */}
        <section className="flex flex-col gap-4">
          <h3 className="font-display text-sm font-semibold text-muted uppercase tracking-[0.2em]">Outcome</h3>
          <ul className="list-disc list-inside text-muted space-y-3 marker:text-accent">
            <li>A/B test results informed campaign creative decisions, with the winning variant achieving higher conversion rates</li>
            <li>Contributed to improved campaign ROI for personal training gym clients</li>
            <li>Demonstrated the value of data-driven design decisions for targeting high-income professionals</li>
          </ul>
        </section>

      </div>
    </div>
  );
}
