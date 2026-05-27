import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen px-6 py-12 bg-white dark:bg-black">
      <div className="max-w-4xl w-full flex flex-col gap-16">
        
        {/* Intro Section */}
        <section className="flex flex-col items-start gap-4">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
            Satomi Portfolio
          </h1>
          <p className="text-sm font-medium tracking-widest text-emerald-700 dark:text-emerald-400 uppercase">
            | UX/UI | B2B SaaS | Service Design | RCA |
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            London, UK | Open to Contract, FTC, and Permanent roles.
          </p>
          <div className="mt-4 text-lg text-gray-800 dark:text-gray-200 leading-relaxed max-w-3xl space-y-4">
            <p>
              MA Service Design (Royal College of Art, 2025) · 6+ years designing B2B SaaS and enterprise digital products. </p>
                 <p> Published manga artist — visual storytelling applied to complex system design.
            </p>
          </div>
        </section>

        {/* Outcome Summary */}
        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Outcome Summary</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-emerald-100 bg-emerald-50/50 dark:bg-emerald-950/20 dark:border-emerald-900/50 shadow-sm">
              <p className="text-3xl font-bold text-emerald-900 dark:text-emerald-400 mb-2">5M+</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">users on B2B SaaS platform</p>
            </div>
            <div className="p-6 rounded-2xl border border-emerald-100 bg-emerald-50/50 dark:bg-emerald-950/20 dark:border-emerald-900/50 shadow-sm">
              <p className="text-3xl font-bold text-emerald-900 dark:text-emerald-400 mb-2">Zero</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">incidents across all releases</p>
            </div>
            <div className="p-6 rounded-2xl border border-emerald-100 bg-emerald-50/50 dark:bg-emerald-950/20 dark:border-emerald-900/50 shadow-sm">
              <p className="text-3xl font-bold text-emerald-900 dark:text-emerald-400 mb-2">£200K</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">quarterly revenue uplift</p>
            </div>
          </div>
        </section>

          {/* Selected Projects */}
          <section className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Selected projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Link href="/projects/campaign-system" className="group flex flex-col border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
                  <div className="bg-gray-100 dark:bg-gray-900 h-48 w-full overflow-hidden">
                    <img src="/Welbox_Hero.png" alt="Campaign System" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">Campaign System</h3>
                    <p>Operationally complex B2B SaaS platform redesign for 5M+ users.</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded text-gray-700 dark:text-gray-300">UX/UI</span>
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded text-gray-700 dark:text-gray-300">Product Design</span>
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded text-gray-700 dark:text-gray-300">B2B SaaS</span>
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded text-gray-700 dark:text-gray-300">User Research</span>
                    </div>
                  </div>
              </Link>
              <Link href="/projects/cycle-venner" className="group flex flex-col border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
                  <div className="bg-gray-100 dark:bg-gray-900 h-48 w-full overflow-hidden">
                    <img src="/cyclevenner_Hero.png" alt="Cycle Venner" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300" />
                  </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">Cycle Venner</h3>
                       <p>Inclusive mobility service concept developed with TfL and RCA.</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded text-gray-700 dark:text-gray-300">Service Design</span>
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded text-gray-700 dark:text-gray-300">User Research</span>
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded text-gray-700 dark:text-gray-300">Ethnography</span>
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded text-gray-700 dark:text-gray-300">Prototyping</span>
                      </div>
                    </div>
              </Link>
            </div>
            <div className="mt-8 flex justify-center">
              <Link href="/projects" className="group inline-flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                  <span className="border-b-[3px] border-gray-400 dark:border-gray-600 pb-0.5 group-hover:border-black dark:group-hover:border-white transition-colors duration-300">
                    Other projects
                  </span>
              </Link>
            </div>
          </section>

          {/* Side projects */}
          <section className="flex flex-col gap-6 border-t border-gray-100 dark:border-gray-900 pt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Side projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* AI Coding Card */}
              <a href="https://github.com/wakasato/my-jobhunting-app" target="_blank" rel="noopener noreferrer" className="group flex flex-col border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
                  <div className="bg-gray-100 dark:bg-gray-900 h-48 w-full overflow-hidden">
                    <img src="/jobtracker.png" alt="React.JS + AI coding" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">React.JS + AI coding</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                      AI-assisted product experiments and workflow tools.
                    </p>
                  </div>
              </a>

              {/* Visual Storytelling Card */}
              <Link href="/projects/shore-quest" className="group flex flex-col border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
                  <div className="bg-gray-100 dark:bg-gray-900 h-48 w-full overflow-hidden">
                    <img src="/storytelling.png" alt="Visual Storytelling" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">Visual Storytelling</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1 mb-4 flex-1">
                      Using sketching and narrative techniques to communicate complex services, align stakeholders, and synthesise user research.
                    </p>
                    <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400 group-hover:underline underline-offset-4">
                      View Shore Quest Case Study →
                    </span>
                  </div>
              </Link>

            </div>
          </section>

      </div>
    </div>
  );
}
