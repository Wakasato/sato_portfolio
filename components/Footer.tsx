export default function Footer() {
  return (
    <footer className="border-t border-gray-100 dark:border-gray-900 mt-auto">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Sato. All rights reserved.
        </p>
        <div className="flex gap-4 text-sm text-gray-500 dark:text-gray-400">
          <a href="#" className="hover:text-black dark:hover:text-white transition-colors">
            GitHub
          </a>
          <a href="#" className="hover:text-black dark:hover:text-white transition-colors">
            LinkedIn
          </a>
          <a href="#" className="hover:text-black dark:hover:text-white transition-colors">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
