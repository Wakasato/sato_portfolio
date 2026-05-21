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

        {/* Side Project */}
        <section className="flex flex-col sm:flex-row gap-8 items-start border-t border-gray-100 dark:border-gray-900 pt-8">
          <div className="flex-1 flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">My side project : React.JS + AI coding</h2>
            <div className="flex flex-col gap-2 text-sm text-gray-700 dark:text-gray-300">
              <p>
                <span className="font-medium">GitHub repository:</span> <a href="https://github.com/wakasato/my-jobhunting-app" target="_blank" rel="noopener noreferrer" className="text-emerald-600 dark:text-emerald-400 hover:underline">my-jobhunting-app</a>
              </p>
              <p>
                <span className="font-medium">Demo:</span> <a href="https://my-jobhunting-app.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 dark:text-emerald-400 hover:underline">https://my-jobhunting-app.vercel.app/</a>
              </p>
              <div className="flex gap-4 mt-2">
                <p>
                  <span className="font-medium">Demo ID:</span> <span className="bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 px-2 py-0.5 rounded font-mono text-xs">demo@example.com</span>
                </p>
                <p>
                  <span className="font-medium">Demo Password:</span> <span className="bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 px-2 py-0.5 rounded font-mono text-xs">password123</span>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 shrink-0">
             <img 
               src="/jobtracker.png" 
               alt="Job Tracker UI Screenshot" 
               className="rounded-lg shadow-md object-cover w-full h-48 border border-gray-100 dark:border-gray-800"
             />
          </div>
        </section>

        {/* Visual Storytelling */}
        <section className="flex flex-col sm:flex-row gap-8 items-start border-t border-gray-100 dark:border-gray-900 pt-8">
          <div className="flex-1 flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Visual Storytelling</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Parallel Career in Manga: Strengthening visual storytelling, narrative structures, and communication design.
            </p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 shrink-0">
             <img 
               src="/storytelling.png" 
               alt="Visual Storytelling - Manga Illustrations" 
               className="rounded-lg shadow-md object-cover w-full h-48 border border-gray-100 dark:border-gray-800"
             />
          </div>
        </section>

      </div>
    </div>
  );
}
