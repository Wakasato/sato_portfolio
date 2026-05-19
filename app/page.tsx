import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-6">
      <div className="max-w-3xl w-full flex flex-col items-start gap-8">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
          Hi, I'm <span className="text-blue-600 dark:text-blue-400">Sato</span>.
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
          A passionate software developer creating modern, minimalist, and performant web applications. Welcome to my digital portfolio.
        </p>
        
        <div className="flex gap-4 mt-4">
          <Link 
            href="/projects" 
            className="px-6 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black font-medium transition-transform hover:scale-105 active:scale-95"
          >
            View Projects
          </Link>
          <Link 
            href="/contact" 
            className="px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}
