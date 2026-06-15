import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white/80 dark:bg-black/80 backdrop-blur-md z-50 border-b border-gray-100 dark:border-gray-900">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight text-emerald-900 dark:text-emerald-400">
          Satomi <span className="font-light">| Product Designer</span>
        </Link>
        <ul className="flex items-center gap-6 text-sm sm:text-base font-semibold text-gray-900 dark:text-white">
          <li>
            <Link href="/" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              Projects
            </Link>
          </li>
          <li>
            <a 
              href="https://drive.google.com/file/d/1Uk0tyKznv3cxQbTYsgPU7cg-x2NmKUdF/view?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              CV
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
