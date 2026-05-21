import Link from "next/link";

export default function ShoreQuestCaseStudy() {
  return (
    <div className="bg-white dark:bg-black min-h-screen text-gray-900 dark:text-gray-100">
      <div className="max-w-4xl mx-auto px-6 py-16 flex flex-col gap-16">
        {/* Back Link */}
        <Link href="/projects" className="text-sm font-medium text-gray-500 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors inline-flex items-center gap-2 w-fit">
          ← Back to Projects
        </Link>

        {/* Hero Image */}
        <section className="flex flex-col gap-6 items-center">
          <img src="/ShoreQuest.png" alt="ShoreQuest Hero" className="w-full max-w-3xl h-auto rounded-lg" />
        </section>

        {/* Header & Intro */}
        <section className="flex flex-col gap-6">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight border-b border-gray-200 dark:border-gray-800 pb-8">
              Ethnographic Research for Tourism (RCA project)
            </h1>
            <div className="flex flex-col gap-4 mt-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">Ethnographic research for tourism. Project at Royal College of Art MA Service Design.</p>
            </div>
        </section>

        {/* Role & Client */}
          <section className="flex flex-wrap gap-2 -mt-8">
            <div className="px-3 py-1 bg-gray-100 dark:bg-gray-900 rounded text-sm">
              <span className="font-bold text-gray-900 dark:text-white">Role:</span>
              <span className="text-gray-700 dark:text-gray-300 ml-2">Service Designer, Illustrator</span>
            </div>
            <div className="px-3 py-1 bg-gray-100 dark:bg-gray-900 rounded text-sm">
              <span className="font-bold text-gray-900 dark:text-white">Client:</span>
              <span className="text-gray-700 dark:text-gray-300 ml-2">Royal College of Art</span>
            </div>
          </section>

          <section className="flex flex-col gap-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wider text-sm border-b border-gray-200 dark:border-gray-800 pb-2">
              Overview
            </h3>
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="w-full lg:w-1/2 flex flex-col gap-4">
                <h4 className="font-bold text-gray-900 dark:text-white">Problems</h4>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 marker:text-emerald-500 text-sm">
                  <li>Travelers want authentic, sustainable activities but lack guidance.</li>
                  <li>Current platforms are commercialised and do not support local communities.</li>
                </ul>
                <h4 className="font-bold text-gray-900 dark:text-white mt-4">Mission</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">Create engaging day trips for families that revitalise UK coastal towns in a sustainable way.</p>
                <h4 className="font-bold text-gray-900 dark:text-white mt-4">Solution</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">A family‑friendly educational digital platform for regenerative tourism, built from 100+ on‑the‑spot interviews.</p>
              </div>
              <div className="w-full lg:w-1/2 flex items-center justify-center">
                <img src="/ShoreQuest_overview.png" alt="ShoreQuest overview diagram" className="w-full max-w-sm h-auto object-contain rounded-lg" />
              </div>
            </div>
          </section>

        {/* Solution */}
        <section className="flex flex-col gap-8">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wider text-sm border-b border-gray-200 dark:border-gray-800 pb-2">
            Solution
          </h3>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-1/2">
              <img src="/ShoreQuest_solution.png" alt="ShoreQuest solution screenshot" className="w-full h-auto rounded-lg" />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
              <h4 className="font-bold text-gray-900 dark:text-white">Key Features</h4>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 marker:text-emerald-500 text-sm">
              <li>Matching platform connecting volunteers and tourists with locally‑endorsed activities.</li>
              <li>Interactive map for sustainable day‑trip planning.</li>
              <li>Real‑time telemetry and data visualisations for impact tracking.</li>
              <li>Exportable reports (PDF/CSV) for community partners.</li>
            </ul>
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="flex flex-col gap-4">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wider text-sm">
            Outcomes
          </h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-3 marker:text-emerald-500">
              <li>Conducted 100+ on‑the‑spot interviews, uncovering key insights on sustainable tourism.</li>
              <li>Enabled families to discover authentic coastal experiences, supporting local economies.</li>
              <li>Positive client feedback and ongoing partnership for future modules.</li>
            </ul>
        </section>
      </div>
    </div>
  );
}
