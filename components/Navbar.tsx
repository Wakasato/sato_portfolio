import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white/80 dark:bg-black/80 backdrop-blur-md z-50 border-b border-gray-100 dark:border-gray-900">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight">
          Sato Portfolio
        </Link>
        <ul className="flex items-center gap-6 text-sm font-medium text-gray-600 dark:text-gray-300">
          <li>
            <Link href="/" className="hover:text-black dark:hover:text-white transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-black dark:hover:text-white transition-colors">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-black dark:hover:text-white transition-colors">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
