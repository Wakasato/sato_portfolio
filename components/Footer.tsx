export default function Footer() {
  return (
    <footer className="border-t border-gray-100 dark:border-gray-900 mt-auto">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Satomi. All rights reserved.
        </p>
        <div className="flex gap-4 text-sm text-gray-500 dark:text-gray-400">
          <a href="https://github.com/Wakasato" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/satowaka/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">
            LinkedIn
          </a>
          <a href="https://x.com/Satom_Satomi" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
