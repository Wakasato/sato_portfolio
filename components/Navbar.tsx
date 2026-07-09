import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-display text-lg font-medium tracking-tight text-foreground">
          Satomi <span className="text-muted font-normal">/ Product Designer</span>
        </Link>
        <ul className="flex items-center gap-8 text-sm font-medium text-foreground">
          <li>
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-accent transition-colors">
              Projects
            </Link>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1Uk0tyKznv3cxQbTYsgPU7cg-x2NmKUdF/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              CV
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
