export default function Footer() {
  return (
    <footer className="border-t border-border mt-auto">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Satomi. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm text-muted">
          <a href="https://github.com/Wakasato" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/satowaka/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
            LinkedIn
          </a>
          <a href="https://x.com/Satom_Satomi" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
