import Link from "next/link";

export default function ShoreQuestCaseStudy() {

  return (
    <div className="bg-white dark:bg-black min-h-screen text-gray-900 dark:text-gray-100">
      <div className="max-w-4xl mx-auto px-6 py-16 flex flex-col gap-16">
        
        {/* Back Link */}
        <Link href="/projects" className="text-sm font-medium text-gray-500 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors inline-flex items-center gap-2 w-fit">
          ← Back to Projects
        </Link>

        {/* Header & Intro (Cycle Venner same format) */}
        <section className="flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-gray-200 dark:border-gray-800 pb-8">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              ShoreQuest
            </h1>
            {/* RCA Logo */}
            <div className="flex flex-row items-center gap-6">
              <div className="rounded-lg overflow-hidden">
                <img src="/RCA.png" alt="Royal College of Art" className="w-16 h-16 object-contain block" />
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-4 mt-4">
            <h2 className="text-xl sm:text-2xl font-semibold leading-snug">
              Ethnographic research for tourism
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl text-lg">
              Project at Royal College of Art MA Service Design
            </p>
          </div>
        </section>

        {/* Role & Collaborators */}
        <section className="flex flex-wrap gap-2 -mt-8">
          <div className="px-3 py-1 bg-gray-100 dark:bg-gray-900 rounded text-sm">
            <span className="font-bold text-gray-900 dark:text-white">Role:</span>
            <span className="text-gray-700 dark:text-gray-300 ml-2">Service Designer, Illustrator</span>
          </div>
          
          <div className="px-3 py-1 bg-gray-100 dark:bg-gray-900 rounded text-sm">
            <span className="font-bold text-gray-900 dark:text-white">Collaborator:</span>
            <span className="text-gray-700 dark:text-gray-300 ml-2">Royal College of Art</span>
          </div>
        </section>

        {/* Hero Image Section */}
        <section className="w-full">
          <img src="/shorequesthero.png" alt="ShoreQuest Hero Key Visual" className="w-full h-auto rounded-2xl shadow-md border border-gray-100 dark:border-gray-950" />
        </section>

        {/* Overview (Problems, Mission, Solution) */}
        <section className="flex flex-col gap-8">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wider text-sm border-b border-gray-200 dark:border-gray-800 pb-2">
            Overview
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-6">
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Problems</h4>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 marker:text-emerald-500 text-sm">
                  <li>Families want authentic, sustainable activities, but they lack guidance on how to find them.</li>
                  <li>Current platforms are commercialised and do not support local communities.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Mission</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  To create engaging day trips for families that will revitalise UK coastal towns in a sustainable way.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col justify-start">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">Solution</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed bg-gray-50 dark:bg-gray-950 p-4 rounded-xl border border-gray-100 dark:border-gray-900">
                A family-friendly educational digital platform for regenerative tourism.
              </p>
            </div>
          </div>
        </section>

        {/* Research Section: 100+ on-the-spot interviews */}
        <section className="flex flex-col gap-8">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wider text-sm border-b border-gray-200 dark:border-gray-800 pb-2">
            Research: 100+ on-the-spot interviews
          </h3>
          
          <div className="flex flex-col gap-4">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mt-2">
              
              {/* Left Column: Sketch 1 & Keith */}
              <div className="w-full flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">Qualitative insights captured in research notebook</span>
                  <img src="/ShoreQuest_sketch.png" alt="Research notebook sketches" className="w-full h-auto rounded-lg" />
                  <p className="text-sm font-medium italic text-center text-gray-900 dark:text-gray-100 mt-1">
                    "I DON'T WANT TO BE A TOURIST"
                  </p>
                </div>
                
                {/* Keith in Hyde Park */}
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-bold uppercase text-gray-900 dark:text-gray-100">2025/03/31 Interviews & Survey — Keith in Hyde Park</span>
                  <p className="text-sm italic text-gray-900 dark:text-gray-100 leading-relaxed">
                    "Regenerative tourism? I love the idea. I don't want to be a 'tourist'. Doing-nothing in French rural town was nice."
                  </p>
                  <p className="text-sm italic text-gray-900 dark:text-gray-100 font-semibold mt-1 leading-relaxed">
                    "Sit down and Relax... watch. hear... This is what I love."
                  </p>
                </div>
              </div>

              {/* Right Column: Sketch 2 & RNLI */}
              <div className="w-full flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">RNLI Volunteer Sketch</span>
                  <img src="/ShoreQuest_sketch2.png" alt="RNLI volunteer staff sketch" className="w-full h-auto object-contain rounded-lg" />
                </div>
                
                {/* RNLI Volunteer Staff Interview */}
                <div className="flex flex-col gap-2 h-full">
                  <span className="text-xs font-bold uppercase text-gray-900 dark:text-gray-100 tracking-wide">RNLI Volunteer Staff Interview</span>
                  <p className="text-sm italic text-gray-900 dark:text-gray-100 leading-relaxed">
                    "It's off-season, but in high season, summer, people come here to swim and kite boarding. And eat fish & chips."
                  </p>
                </div>
              </div>

            </div>

            {/* Quantitative Survey Section */}
            <div className="mt-8">
              <h5 className="font-bold text-gray-900 dark:text-white mb-4 text-sm uppercase tracking-wider">
                Questionnaire for UK people
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center justify-center p-6 rounded-xl">
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
                <h5 className="font-bold text-gray-900 dark:text-white text-sm uppercase tracking-wider">
                  Our Insights
                </h5>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed italic bg-emerald-50/20 dark:bg-emerald-950/10 p-3 rounded-lg border-l-2 border-emerald-500">
                  "I conducted interviews without filming to ensure participants' comfort, especially those unwilling to be photographed."
                </p>
                <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-2 marker:text-emerald-500">
                  <li>Citizens want to travel sustainably but often lack clear guidance.</li>
                  <li>Parents open to joining volunteering activities.</li>
                  <li>Local organisations need tourists' engagement and donations.</li>
                </ul>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">Interviewing with citizens in public spaces</span>
                <img src="/shoreQuest2.jpg" alt="Interviewing with citizens in public spaces" className="w-full h-auto rounded-lg shadow-sm border border-gray-100 dark:border-gray-900" />
              </div>
            </div>

          </div>
        </section>

        {/* Synthesised Insights Column Row */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-b border-gray-200 dark:border-gray-800 py-8">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide">Key Insight</span>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              Users wanted to contribute meaningfully to destinations — but had no way to find authentic, locally-endorsed experiences.
            </p>
          </div>
          
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide">Proposed Solution</span>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              A matching platform connecting volunteers and tourists with locally-recommended activities, surfacing what residents actually endorse rather than commercialised options.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide">Research Scale</span>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              100+ interactions across fieldwork sessions, synthesised through rapid sketching where recording was restricted.
            </p>
          </div>
        </section>

        {/* Service Design: Storyboard & Service System */}
        <section className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wider text-sm border-b border-gray-200 dark:border-gray-800 pb-2">
              Storyboard
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              The app suggests regenerative activities for families, uploaded by locals.
            </p>
            <img src="/ShoreQuest_storyboard.png" alt="Storyboard comic strip" className="w-full h-auto rounded-xl shadow-sm border border-gray-100 dark:border-gray-900" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wider text-sm border-b border-gray-200 dark:border-gray-800 pb-2">
                Service system
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed bg-gray-50 dark:bg-gray-950 p-4 rounded-xl border border-gray-100 dark:border-gray-900">
                The ShoreQuest platform acts as a bridge:
              </p>
              <ul className="list-disc list-inside text-xs text-gray-600 dark:text-gray-400 space-y-2 marker:text-emerald-500">
                <li><strong>Locals:</strong> Upload activities and hidden gems to the platform.</li>
                <li><strong>Families:</strong> Discover activities, engage with the local community, and provide micro-donations/engagement.</li>
              </ul>
            </div>
            
            <div className="flex flex-col gap-2">
              <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">Service system diagram</span>
              <img src="/shoreQuest_structure.png" alt="Service system blueprint diagram" className="w-full h-auto rounded-lg shadow-sm border border-gray-100 dark:border-gray-900" />
            </div>
          </div>
        </section>

        {/* App Mockups & Interface Section */}
        <section className="flex flex-col gap-8">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wider text-sm border-b border-gray-200 dark:border-gray-800 pb-2">
            App Mockups
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-gray-50 dark:bg-gray-950 p-8 rounded-2xl border border-gray-100 dark:border-gray-900">
            {/* Informational Cards */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2 p-4 rounded-xl border border-transparent">
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase">Screen 1: Everyone's Turn!</span>
                <p className="text-sm font-bold text-gray-900 dark:text-white">Decide your destination together!</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                  Allows families to filter by popular, nearest, and cheapest options, displaying clean summary cards (e.g., Dover cliffs) to encourage shared discovery and local care.
                </p>
              </div>

              <div className="flex flex-col gap-2 p-4 rounded-xl border border-transparent border-t border-gray-200 dark:border-gray-800 pt-6">
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase">Screen 2: Hello! Onboarding</span>
                <p className="text-sm font-bold text-gray-900 dark:text-white">Tell us who you are to begin</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                  Guides users to identify their role as either a <strong>Family Explorer</strong> or a <strong>Community Organizer</strong>, providing tailored experiences for planning regenerative activities.
                </p>
              </div>
            </div>

            {/* Hover-based image switcher */}
            <div className="flex flex-col items-center gap-4 w-full">
              <div className="relative overflow-hidden w-full max-w-[280px] sm:max-w-xs rounded-2xl aspect-[3/4] bg-gray-150/30 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 shadow-inner group cursor-pointer">
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
                <div className="absolute top-3 right-3 bg-black/75 dark:bg-white/85 backdrop-blur-xs text-white dark:text-black text-[9px] font-mono px-2 py-0.5 rounded-full select-none flex items-center gap-1 opacity-90 group-hover:opacity-0 transition-opacity duration-300 shadow-xs border border-white/10 dark:border-black/5">
                  <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                  <span>Hover to View Onboarding</span>
                </div>
              </div>
              <span className="text-[10px] text-gray-400 font-mono italic text-center">
                Tip: Hover over the image to preview Screen 2
              </span>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
