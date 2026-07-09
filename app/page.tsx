import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen px-6 py-16 sm:py-24 bg-background">
      <div className="max-w-4xl w-full flex flex-col gap-20">

        {/* Intro Section */}
        <section className="flex flex-col items-start gap-6">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-accent">
            Product &amp; Service Designer
          </p>
          <h1 className="font-display text-5xl sm:text-6xl font-medium tracking-tight text-foreground">
            Satomi Wakabayashi
          </h1>
          <p className="text-muted">
            London, UK — Open to Contract, FTC, and Permanent roles.
          </p>
          <p className="text-lg text-foreground/90 leading-relaxed max-w-2xl">
            6+ years designing B2B SaaS platforms, operational services, and customer-facing digital experiences across Japan and the UK. Specialising in user research, workflow optimisation, and service transformation in complex and regulated environments. MA Service Design, Royal College of Art.
          </p>
        </section>

        {/* Outcome Summary */}
        <section className="flex flex-col gap-6">
          <h2 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-muted">
            Outcome Summary
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-border pt-8">
            <div className="flex flex-col gap-1">
              <p className="font-display text-4xl font-medium text-foreground">5M+</p>
              <p className="text-sm text-muted">users on B2B SaaS platform</p>
            </div>
            <div className="flex flex-col gap-1 sm:border-l sm:border-border sm:pl-8">
              <p className="font-display text-4xl font-medium text-foreground">Zero</p>
              <p className="text-sm text-muted">incidents across all releases</p>
            </div>
            <div className="flex flex-col gap-1 sm:border-l sm:border-border sm:pl-8">
              <p className="font-display text-4xl font-medium text-foreground">£200K</p>
              <p className="text-sm text-muted">quarterly revenue uplift</p>
            </div>
          </div>
        </section>

        {/* Selected Projects */}
        <section className="flex flex-col gap-8">
          <h2 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-muted">
            Selected Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <Link href="/projects/campaign-system" className="group flex flex-col">
              <div className="bg-surface h-56 w-full overflow-hidden border border-border">
                <img src="/Welbox_Hero.png" alt="Campaign System" className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500" />
              </div>
              <div className="pt-5 flex flex-col flex-1">
                <h3 className="font-display text-xl font-medium mb-2 text-foreground group-hover:text-accent transition-colors">Campaign System</h3>
                <p className="text-muted text-sm leading-relaxed">Operationally complex B2B SaaS platform redesign for 5M+ users.</p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-4 text-xs uppercase tracking-wide text-muted">
                  <span>UX/UI</span>
                  <span>Product Design</span>
                  <span>B2B SaaS</span>
                  <span>User Research</span>
                </div>
              </div>
            </Link>
            <Link href="/projects/cycle-venner" className="group flex flex-col">
              <div className="bg-surface h-56 w-full overflow-hidden border border-border">
                <img src="/cyclevenner_Hero.png" alt="Cycle Venner" className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500" />
              </div>
              <div className="pt-5 flex flex-col flex-1">
                <h3 className="font-display text-xl font-medium mb-2 text-foreground group-hover:text-accent transition-colors">Cycle Venner</h3>
                <p className="text-muted text-sm leading-relaxed">Inclusive mobility service concept developed with TfL and RCA.</p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-4 text-xs uppercase tracking-wide text-muted">
                  <span>Service Design</span>
                  <span>User Research</span>
                  <span>Ethnography</span>
                  <span>Prototyping</span>
                </div>
              </div>
            </Link>
          </div>
          <div className="mt-4 flex justify-center">
            <Link href="/projects" className="group inline-flex items-center gap-2 text-base font-medium text-foreground">
              <span className="border-b border-muted pb-0.5 group-hover:text-accent group-hover:border-accent transition-colors duration-300">
                Other projects
              </span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1 group-hover:text-accent">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
