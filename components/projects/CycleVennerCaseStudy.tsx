import Link from "next/link";

export default function CycleVennerCaseStudy() {
  return (
    <div className="bg-white dark:bg-black min-h-screen text-gray-900 dark:text-gray-100">
      <div className="max-w-4xl mx-auto px-6 py-16 flex flex-col gap-16">

        {/* Back Link */}
        <Link href="/projects" className="text-sm font-medium text-gray-500 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors inline-flex items-center gap-2 w-fit">
          ← Back to Projects
        </Link>

        {/* Header & Intro */}
        <section className="flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-gray-200 dark:border-gray-800 pb-8">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Cycle Venner
            </h1>
            {/* Partner Logos */}
            <div className="flex flex-row items-center gap-6">
              {/* TfL Logo */}
              <div className="rounded-lg overflow-hidden">
                <img src="/tfl.png" alt="Transport for London" className="w-16 h-16 object-contain block" />
              </div>

              {/* RCA Logo */}
              <div className="rounded-lg overflow-hidden">
                <img src="/RCA.png" alt="Royal College of Art" className="w-16 h-16 object-contain block" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 mt-4">
            <h2 className="text-xl sm:text-2xl font-semibold leading-snug">
              Designed and tested a behaviour-change service with London users
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl text-lg">
              Translated ethnographic insights into a low-cost intervention with measurable behaviour change indicators.
            </p>
          </div>
          {/* Hero Image Showcase */}
          <div className="w-full mt-6 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm bg-gray-50 dark:bg-gray-900">
            <img
              src="/cyclevenner_Hero.png"
              alt="CycleVenner Hero Image"
              className="w-full h-auto block"
            />
          </div>
        </section>

        {/* Role & Collaborators */}
        <section className="flex flex-wrap gap-2 -mt-8">
          <div className="px-3 py-1 bg-gray-100 dark:bg-gray-900 rounded text-sm">
            <span className="font-bold text-gray-900 dark:text-white">Role:</span>
            <span className="text-gray-700 dark:text-gray-300 ml-2">Service Designer</span>
          </div>

          <div className="px-3 py-1 bg-gray-100 dark:bg-gray-900 rounded text-sm">
            <span className="font-bold text-gray-900 dark:text-white">Collaborators:</span>
            <span className="text-gray-700 dark:text-gray-300 ml-2">Transport for London, Royal College of Art</span>
          </div>
        </section>

        <section className="flex flex-col gap-8">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wider text-sm border-b border-gray-200 dark:border-gray-800 pb-2">Solution & Outcomes</h3>
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Left: Image */}
            <div className="w-full lg:w-1/2">
              <img src="/cyclevenner2.png" alt="Why This Matters" className="w-full h-auto rounded-lg" />
            </div>
            {/* Right: Content */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 marker:text-emerald-500">
                <li>Collaborated with the Royal College of Art's Sustainability Department & Transport for London</li>
                <li>Hosted an official International Women's Day cycling event in Hyde Park, a haven for cyclists.</li>
                <li>The school plans to continue hosting the event as part of its efforts to reduce carbon emissions and cut down on shuttle bus services.</li>
                <li>Positive feedback from participants, considering commuting by bike.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Why This Matters as a Service Designer */}
        <section className="flex flex-col gap-8">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wider text-sm border-b border-gray-200 dark:border-gray-800 pb-2">Why This Matters as a Service Designer</h3>

          <div className="flex flex-col gap-2">
            <h4 className="font-bold text-gray-900 dark:text-white">Collaborator:</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Transport for London: Aiming to increase cycling in London to support a healthier, greener city.
            </p>
            {/* Hero Image Showcase */}
            <div className="w-full mt-6 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm bg-gray-50 dark:bg-gray-900">
              <img
                src="/Cyclevenner_TflPrinciples.png"
                alt="CycleVenner Tfl Principles"
                className="w-full h-auto block"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="font-bold text-gray-900 dark:text-white">RCA Sustainability Dept:</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Working to cut shuttle buses and emissions to improve global ranking scores.
            </p>
          </div>



          {/* Research Insights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="flex flex-col gap-2 md:col-span-1">
              <h5 className="font-bold text-gray-900 dark:text-white">Challenges & Research about Women in London</h5>
              <div className="flex flex-col items-center justify-center p-6 rounded-lg h-full">
                <img src="/cyclevenner_pie1.svg" alt="76% can ride a bike" className="w-24 h-24 object-contain" />
                <span className="text-sm text-gray-600 dark:text-gray-400 mt-2">can ride a bike</span>
              </div>
              <div className="flex flex-col items-center justify-center p-6 rounded-lg">
                <img src="/cyclevenner_pie2.svg" alt="20% ride a bike" className="w-24 h-24 object-contain" />
                <span className="text-sm text-gray-600 dark:text-gray-400 mt-2">ride a bike</span>
              </div>
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <h5 className="font-bold text-gray-900 dark:text-white">Ethnographic sketches drawn on site</h5>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">User interview & on-site sketches</p>
              {/* Ethnographic sketches */}
              <img src="/cyclevenner_sketch.png" alt="Ethnographic sketches" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
        </section>

        {/* Primary Research */}
        <section className="flex flex-col gap-8">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wider text-sm border-b border-gray-200 dark:border-gray-800 pb-2">Primary Research</h3>
          <div className="flex flex-col md:flex-row gap-8 items-stretch">
            <div className="w-full md:w-1/2">
              <img
                src="/cyclevenner_research.png"
                alt="CycleVenner Research"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="w-full md:w-1/2">
              <img
                src="/cyclevenner_sketch2.png"
                alt="CycleVenner Sketch"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Our Insight */}
        <section className="flex flex-col gap-8">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wider text-sm border-b border-gray-200 dark:border-gray-800 pb-2">Our Insight</h3>

          <div className="flex flex-col gap-6">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Through interviews and on-site concept tests, we found that women cyclists are generally less confident than men and need both mental and practical support to take up cycling. This project demonstrated how ethnographic insights can be translated into low-cost, high-impact interventions. The format proved scalable for institutions seeking behavioural change under budget.
            </p>
          </div>
        </section>

        {/* Design decision */}
        <section className="flex flex-col gap-8">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wider text-sm border-b border-gray-200 dark:border-gray-800 pb-2">Design decision</h3>
          <div className="w-full rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm bg-gray-50 dark:bg-gray-900">
            <img
              src="/cyclevenner_concept.png"
              alt="Design decision concept"
              className="w-full h-auto block"
            />
          </div>
        </section>

        {/* Service Storyboard */}
        <section className="flex flex-col gap-8">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wider text-sm border-b border-gray-200 dark:border-gray-800 pb-2">Service Storyboard</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 12 }, (_, i) => {
              const isPanel9 = i === 8;
              const isPanel12 = i === 11;

              let containerClass = "col-span-1 aspect-[4/3]";
              if (isPanel9) {
                containerClass = "col-span-2 aspect-[8/3]";
              } else if (isPanel12) {
                containerClass = "col-span-2 md:col-span-4 aspect-[2/1]";
              }

              return (
                <div
                  key={i}
                  className={`relative w-full flex items-center justify-center ${containerClass}`}
                >
                  <img
                    src={`/Cyclevenner_storyboard${i + 1}.png`}
                    alt={`Storyboard panel ${i + 1}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              );
            })}
          </div>
        </section>

      </div>
    </div>
  );
}
