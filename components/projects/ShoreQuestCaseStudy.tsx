import Link from "next/link";

export default function ShoreQuestCaseStudy() {

  return (
    <div className="bg-background min-h-screen text-foreground">
      <div className="max-w-4xl mx-auto px-6 py-16 sm:py-24 flex flex-col gap-16">

        {/* Back Link */}
        <Link href="/projects" className="text-sm font-medium text-muted hover:text-accent transition-colors inline-flex items-center gap-2 w-fit">
          ← Back to Projects
        </Link>

        {/* Header & Intro (Cycle Venner same format) */}
        <section className="flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-border pb-8">
            <h1 className="font-display text-4xl sm:text-5xl font-medium tracking-tight">
              ShoreQuest
            </h1>
            {/* RCA Logo */}
            <div className="flex flex-row items-center gap-6">
              <div>
                <img src="/RCA.png" alt="Royal College of Art" className="w-16 h-16 object-contain block" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 mt-4">
            <h2 className="text-xl sm:text-2xl font-medium leading-snug">
              Ethnographic research for tourism
            </h2>
            <p className="text-muted leading-relaxed max-w-3xl text-lg">
              Project at Royal College of Art MA Service Design
            </p>
          </div>
        </section>

        {/* Role & Collaborators */}
        <section className="flex flex-wrap gap-x-8 gap-y-2 -mt-8 text-sm">
          <div>
            <span className="font-semibold text-foreground">Role:</span>
            <span className="text-muted ml-2">Service Designer, Illustrator</span>
          </div>

          <div>
            <span className="font-semibold text-foreground">Collaborator:</span>
            <span className="text-muted ml-2">Royal College of Art</span>
          </div>
        </section>

        {/* Hero Image Section */}
        <section className="w-full">
          <img src="/shorequesthero.png" alt="ShoreQuest Hero Key Visual" className="w-full h-auto border border-border" />
        </section>

        {/* Overview (Problems, Mission, Solution) */}
        <section className="flex flex-col gap-8">
          <h3 className="font-display text-sm font-semibold text-muted uppercase tracking-[0.2em] border-b border-border pb-4">
            Overview
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Problems</h4>
                <ul className="list-disc list-inside text-muted space-y-2 marker:text-accent text-sm">
                  <li>Families want authentic, sustainable activities, but they lack guidance on how to find them.</li>
                  <li>Current platforms are commercialised and do not support local communities.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Mission</h4>
                <p className="text-sm text-muted leading-relaxed">
                  To create engaging day trips for families that will revitalise UK coastal towns in a sustainable way.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-start">
              <h4 className="font-semibold text-foreground mb-2">Solution</h4>
              <p className="text-sm text-muted leading-relaxed bg-surface p-4 border border-border">
                A family-friendly educational digital platform for regenerative tourism.
              </p>
            </div>
          </div>
        </section>

        {/* Research Section: 100+ on-the-spot interviews */}
        <section className="flex flex-col gap-8">
          <h3 className="font-display text-sm font-semibold text-muted uppercase tracking-[0.2em] border-b border-border pb-4">
            Research: 100+ on-the-spot interviews
          </h3>

          <div className="flex flex-col gap-4">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mt-2">

              {/* Left Column: Sketch 1 & Keith */}
              <div className="w-full flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <span className="text-xs text-muted font-mono">Qualitative insights captured in research notebook</span>
                  <img src="/ShoreQuest_sketch.png" alt="Research notebook sketches" className="w-full h-auto" />
                  <p className="text-sm font-medium italic text-center text-foreground mt-1">
                    &ldquo;I DON&apos;T WANT TO BE A TOURIST&rdquo;
                  </p>
                </div>

                {/* Keith in Hyde Park */}
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-semibold uppercase text-foreground">2025/03/31 Interviews &amp; Survey — Keith in Hyde Park</span>
                  <p className="text-sm italic text-foreground/90 leading-relaxed">
                    &ldquo;Regenerative tourism? I love the idea. I don&apos;t want to be a &lsquo;tourist&rsquo;. Doing-nothing in French rural town was nice.&rdquo;
                  </p>
                  <p className="text-sm italic text-foreground/90 font-semibold mt-1 leading-relaxed">
                    &ldquo;Sit down and Relax... watch. hear... This is what I love.&rdquo;
                  </p>
                </div>
              </div>

              {/* Right Column: Sketch 2 & RNLI */}
              <div className="w-full flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <span className="text-xs text-muted font-mono">RNLI Volunteer Sketch</span>
                  <img src="/ShoreQuest_sketch2.png" alt="RNLI volunteer staff sketch" className="w-full h-auto object-contain" />
                </div>

                {/* RNLI Volunteer Staff Interview */}
                <div className="flex flex-col gap-2 h-full">
                  <span className="text-xs font-semibold uppercase text-foreground tracking-wide">RNLI Volunteer Staff Interview</span>
                  <p className="text-sm italic text-foreground/90 leading-relaxed">
                    &ldquo;It&apos;s off-season, but in high season, summer, people come here to swim and kite boarding. And eat fish &amp; chips.&rdquo;
                  </p>
                </div>
              </div>

            </div>

            {/* Quantitative Survey Section */}
            <div className="mt-8">
              <h5 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
                Questionnaire for UK people
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center justify-center p-6">
                  <img src="/shoreQuest_pie1.png" alt="42% Familiar with Regenerative Tourism" className="w-48 h-auto object-contain" />
                </div>

                <div className="flex items-center justify-center">
                  <img src="/ShoreQuest_pie2.png" alt="22% Experienced Regenerative Tourism" className="w-48 h-auto object-contain" />
                </div>
              </div>
            </div>

            {/* Our Insights & Fieldwork Photo */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 items-start">
              <div className="flex flex-col gap-4">
                <h5 className="font-semibold text-foreground text-sm uppercase tracking-wider">
                  Our Insights
                </h5>
                <p className="text-sm text-muted leading-relaxed italic p-3 border-l-2 border-accent">
                  &ldquo;I conducted interviews without filming to ensure participants&apos; comfort, especially those unwilling to be photographed.&rdquo;
                </p>
                <ul className="list-disc list-inside text-sm text-muted space-y-2 marker:text-accent">
                  <li>Citizens want to travel sustainably but often lack clear guidance.</li>
                  <li>Parents open to joining volunteering activities.</li>
                  <li>Local organisations need tourists&apos; engagement and donations.</li>
                </ul>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-xs text-muted font-mono">Interviewing with citizens in public spaces</span>
                <img src="/shoreQuest2.jpg" alt="Interviewing with citizens in public spaces" className="w-full h-auto border border-border" />
              </div>
            </div>

          </div>
        </section>

        {/* Synthesised Insights Column Row */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-b border-border py-8">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold text-accent uppercase tracking-wide">Key Insight</span>
            <p className="text-sm text-muted leading-relaxed">
              Users wanted to contribute meaningfully to destinations — but had no way to find authentic, locally-endorsed experiences.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold text-accent uppercase tracking-wide">Proposed Solution</span>
            <p className="text-sm text-muted leading-relaxed">
              A matching platform connecting volunteers and tourists with locally-recommended activities, surfacing what residents actually endorse rather than commercialised options.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold text-accent uppercase tracking-wide">Research Scale</span>
            <p className="text-sm text-muted leading-relaxed">
              100+ interactions across fieldwork sessions, synthesised through rapid sketching where recording was restricted.
            </p>
          </div>
        </section>

        {/* Service Design: Storyboard & Service System */}
        <section className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <h3 className="font-display text-sm font-semibold text-muted uppercase tracking-[0.2em] border-b border-border pb-4">
              Storyboard
            </h3>
            <p className="text-sm text-muted">
              The app suggests regenerative activities for families, uploaded by locals.
            </p>
            <img src="/ShoreQuest_storyboard.png" alt="Storyboard comic strip" className="w-full h-auto border border-border" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="flex flex-col gap-4">
              <h3 className="font-display text-sm font-semibold text-muted uppercase tracking-[0.2em] border-b border-border pb-4">
                Service system
              </h3>
              <p className="text-sm text-muted leading-relaxed bg-surface p-4 border border-border">
                The ShoreQuest platform acts as a bridge:
              </p>
              <ul className="list-disc list-inside text-xs text-muted space-y-2 marker:text-accent">
                <li><strong className="text-foreground">Locals:</strong> Upload activities and hidden gems to the platform.</li>
                <li><strong className="text-foreground">Families:</strong> Discover activities, engage with the local community, and provide micro-donations/engagement.</li>
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-xs text-muted font-mono">Service system diagram</span>
              <img src="/shoreQuest_structure.png" alt="Service system blueprint diagram" className="w-full h-auto border border-border" />
            </div>
          </div>
        </section>

        {/* App Mockups & Interface Section */}
        <section className="flex flex-col gap-8">
          <h3 className="font-display text-sm font-semibold text-muted uppercase tracking-[0.2em] border-b border-border pb-4">
            App Mockups
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-surface p-8 border border-border">
            {/* Informational Cards */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold text-accent uppercase">Screen 1: Everyone&apos;s Turn!</span>
                <p className="text-sm font-semibold text-foreground">Decide your destination together!</p>
                <p className="text-xs text-muted leading-relaxed">
                  Allows families to filter by popular, nearest, and cheapest options, displaying clean summary cards (e.g., Dover cliffs) to encourage shared discovery and local care.
                </p>
              </div>

              <div className="flex flex-col gap-2 border-t border-border pt-6">
                <span className="text-xs font-semibold text-accent uppercase">Screen 2: Hello! Onboarding</span>
                <p className="text-sm font-semibold text-foreground">Tell us who you are to begin</p>
                <p className="text-xs text-muted leading-relaxed">
                  Guides users to identify their role as either a <strong className="text-foreground">Family Explorer</strong> or a <strong className="text-foreground">Community Organizer</strong>, providing tailored experiences for planning regenerative activities.
                </p>
              </div>
            </div>

            {/* Hover-based image switcher */}
            <div className="flex flex-col items-center gap-4 w-full">
              <div className="relative overflow-hidden w-full max-w-[280px] sm:max-w-xs aspect-[3/4] bg-background border border-border group cursor-pointer">
                {/* Screen 1 (default) */}
                <img
                  src="/shoreQuest.mock.png"
                  alt="Screen 1: Everyone's Turn!"
                  className="absolute inset-0 w-full h-full object-contain p-3 transition-opacity duration-300 group-hover:opacity-0 select-none"
                  draggable="false"
                />
                {/* Screen 2 (visible on hover) */}
                <img
                  src="/ShoreQuest_hand.png"
                  alt="Screen 2: Role selection onboarding"
                  className="absolute inset-0 w-full h-full object-contain p-3 transition-opacity duration-300 opacity-0 group-hover:opacity-100 select-none"
                  draggable="false"
                />

                {/* Floating "Hover to view" indicator */}
                <div className="absolute top-3 right-3 bg-foreground text-background text-[9px] font-mono px-2 py-0.5 select-none flex items-center gap-1 opacity-90 group-hover:opacity-0 transition-opacity duration-300">
                  <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                  <span>Hover to View Onboarding</span>
                </div>
              </div>
              <span className="text-[10px] text-muted font-mono italic text-center">
                Tip: Hover over the image to preview Screen 2
              </span>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
