import Link from "next/link";

export default function CheckoutUICaseStudy() {
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
            Checkout UI
          </h1>
          
          <div className="flex flex-col gap-4 mt-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">Project 4/5 - Components Design for Checkout UI</p>
            <h2 className="text-xl sm:text-2xl font-semibold leading-snug">
              Designed and implemented UI components for e-commerce checkout experiences
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl text-lg">
              Reduced confusion and complaints by creating clear visual distinction between actionable elements and informational text.
            </p>
          </div>
        </section>

        {/* Role & Client */}
        <section className="flex flex-wrap gap-2 -mt-8">
          <div className="px-3 py-1 bg-gray-100 dark:bg-gray-900 rounded text-sm">
            <span className="font-bold text-gray-900 dark:text-white">Role:</span>
            <span className="text-gray-700 dark:text-gray-300 ml-2">UI Designer, Coder</span>
          </div>
          
          <div className="px-3 py-1 bg-gray-100 dark:bg-gray-900 rounded text-sm">
            <span className="font-bold text-gray-900 dark:text-white">Client:</span>
            <span className="text-gray-700 dark:text-gray-300 ml-2">E-commerce Websites</span>
          </div>
        </section>

        {/* Overview */}
        <section className="flex flex-col gap-6">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wider text-sm border-b border-gray-200 dark:border-gray-800 pb-2">Overview</h3>
          
          <div className="flex flex-col lg:flex-row gap-8 items-stretch">
            <div className="w-full lg:w-1/2 flex items-center justify-center">
              <img src="/UI.png" alt="Checkout UI Components" className="w-full max-w-xs max-h-full object-contain rounded-lg" />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <h4 className="font-bold text-gray-900 dark:text-white">Scope of Work</h4>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 marker:text-emerald-500 text-sm">
                  <li>Designed the UI components</li>
                  <li>Implemented the frontend (HTML/CSS/JS)</li>
                  <li>Collaborated with backend engineers</li>
                  <li>Reduced confusing elements across 5 sites</li>
                </ul>
              </div>

              <div className="flex flex-col gap-3">
                <h4 className="font-bold text-gray-900 dark:text-white">Problems</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  The existing checkout UI had accumulated so many disclaimer-style button components that users couldn't distinguish actionable elements from informational text. Complaint volume was high.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="flex flex-col gap-8">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wider text-sm border-b border-gray-200 dark:border-gray-800 pb-2">Solution</h3>
          
          <div className="flex flex-col gap-6">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="w-full lg:w-1/2">
                <img src="/UI2.png" alt="Solution" className="w-full h-auto rounded-lg" />
              </div>
              
              <div className="w-full lg:w-1/2 flex flex-col gap-4">
                <div className="flex flex-col gap-3">
                  <h4 className="font-bold text-gray-900 dark:text-white">Approach</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    I rebuilt the component library using typographic hierarchy to create clear visual distinction between actions and information — eliminating the need for excessive annotations.
                  </p>
                </div>
                
                <div className="flex flex-col gap-3">
                  <h4 className="font-bold text-gray-900 dark:text-white">Key Changes</h4>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 marker:text-emerald-500 text-sm">
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
          <h3 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wider text-sm">Outcomes</h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-3 marker:text-emerald-500">
            <li>Complaint volume dropped to near-zero following redesign, with no escalations reported post-launch</li>
            <li>Achieved strong client satisfaction and positive feedback</li>
            <li>Component library became the standard for all 5 e-commerce sites</li>
          </ul>
        </section>

      </div>
    </div>
  );
}
