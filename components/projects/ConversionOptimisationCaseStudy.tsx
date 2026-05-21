import Link from "next/link";

export default function ConversionOptimisationCaseStudy() {
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
            Conversion Optimisation
          </h1>
          
          <div className="flex flex-col gap-4 mt-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">Deech, Inc. | 2019-2020</p>
            <h2 className="text-xl sm:text-2xl font-semibold leading-snug">
              Designed and optimised a high-end gym membership conversion experience
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl text-lg">
              Used A/B testing and demographic analysis to identify the most effective campaign messaging for high-income professionals.
            </p>
          </div>
        </section>

        {/* Role & Client */}
        <section className="flex flex-wrap gap-2 -mt-8">
          <div className="px-3 py-1 bg-gray-100 dark:bg-gray-900 rounded text-sm">
            <span className="font-bold text-gray-900 dark:text-white">Role:</span>
            <span className="text-gray-700 dark:text-gray-300 ml-2">Designer, Coder</span>
          </div>
          
          <div className="px-3 py-1 bg-gray-100 dark:bg-gray-900 rounded text-sm">
            <span className="font-bold text-gray-900 dark:text-white">Client:</span>
            <span className="text-gray-700 dark:text-gray-300 ml-2">Personal Training Gyms</span>
          </div>
        </section>

        {/* Challenges */}
        <section className="flex flex-col gap-4">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wider text-sm border-b border-gray-200 dark:border-gray-800 pb-2">Challenges</h3>
          
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="w-full lg:w-1/2">
              <img src="/UXDesign2.png" alt="Challenge" className="w-full h-auto rounded-lg" />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-3 marker:text-emerald-500">
                <li>Our customer was a high-end gym targeting specific customers.</li>
                <li>Their target users were high-income, highly educated, motivated businesspeople.</li>
                <li>Effectively reaching these users was challenging.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* A/B Testing */}
        <section className="flex flex-col gap-8">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wider text-sm border-b border-gray-200 dark:border-gray-800 pb-2">A/B Testing & Analysis</h3>
          
          <div className="flex flex-col gap-6">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="w-full lg:w-1/2">
                <img src="/UXDesign.png" alt="A/B Testing" className="w-full h-auto rounded-lg" />
              </div>
              
              <div className="w-full lg:w-1/2 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <h4 className="font-bold text-gray-900 dark:text-white">Approach</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Our team conducted A/B tests to examine which offer is the most attractive one to the customers.
                  </p>
                </div>
                
                <div className="flex flex-col gap-2">
                  <h4 className="font-bold text-gray-900 dark:text-white">Demographic Insights</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    The map provides information on the density of prospective customers, broken down by age and income bracket.
                  </p>
                </div>

                <img src="/UXDesign_demographic.png" alt="Demographic Analysis" className="w-64 h-auto rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Outcome */}
        <section className="flex flex-col gap-4">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wider text-sm">Outcome</h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-3 marker:text-emerald-500">
            <li>A/B test results informed campaign creative decisions, with the winning variant achieving higher conversion rates</li>
            <li>Contributed to improved campaign ROI for personal training gym clients</li>
            <li>Demonstrated the value of data-driven design decisions for targeting high-income professionals</li>
          </ul>
        </section>

      </div>
    </div>
  );
}
