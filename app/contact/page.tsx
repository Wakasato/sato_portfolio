import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center min-h-[calc(100vh-4rem)] px-6 py-12 bg-white dark:bg-black">
      <div className="max-w-3xl w-full flex flex-col gap-8">
        
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
          Contact
        </h1>

        <div className="flex flex-col gap-4 text-gray-800 dark:text-gray-200">
          <div className="flex items-center gap-2">
            <span className="font-medium">PDF Portfolio :</span>
            <a href="#" className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 hover:underline">
              <svg viewBox="0 0 48 48" className="w-5 h-5"><path fill="#FFC107" d="M17 14l-7.5 13h15L32 14H17z"/><path fill="#1976D2" d="M24.5 27L17 40h15.5l7.5-13H24.5z"/><path fill="#4CAF50" d="M17 14L2 40h15l15-26H17z"/></svg>
              portfolio_20260325.pdf
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <span className="font-medium">LinkedIn:</span>
            <a href="https://www.linkedin.com/in/satowaka/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white underline underline-offset-2 transition-colors">
              https://www.linkedin.com/in/satowaka/
            </a>
          </div>

          <div className="flex flex-col gap-2 mt-2">
            <span className="font-medium">CV:</span>
            <a href="#" className="flex items-center gap-4 p-4 border border-gray-200 dark:border-gray-800 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors w-full max-w-lg">
               <svg viewBox="0 0 48 48" className="w-8 h-8 shrink-0"><path fill="#FFC107" d="M17 14l-7.5 13h15L32 14H17z"/><path fill="#1976D2" d="M24.5 27L17 40h15.5l7.5-13H24.5z"/><path fill="#4CAF50" d="M17 14L2 40h15l15-26H17z"/></svg>
               <div className="flex flex-col">
                  <span className="font-medium text-sm text-gray-900 dark:text-gray-100">SATOMI_WAKABAYASHI_CV_v4.pdf</span>
                  <span className="text-xs text-gray-500">147.6 KB • pdf • drive.google.com</span>
               </div>
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-100 dark:border-gray-900">
           <a href="#" className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors group">
              <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-600 dark:text-gray-500 dark:group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              <span className="font-medium">B2B SaaS platform design</span>
           </a>
        </div>

      </div>
    </div>
  );
}
