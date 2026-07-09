import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center min-h-[calc(100vh-4rem)] px-6 py-16 sm:py-24 bg-background">
      <div className="max-w-3xl w-full flex flex-col gap-10">

        <div>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-accent mb-3">Get in touch</p>
          <h1 className="font-display text-4xl sm:text-5xl font-medium tracking-tight text-foreground">
            Contact
          </h1>
        </div>

        <div className="flex flex-col gap-6 text-foreground border-t border-border pt-8">
          <div className="flex items-center gap-2">
            <span className="font-medium">PDF Portfolio :</span>
            <a href="https://drive.google.com/file/d/1y71yAzYkVOBZ0-lE5mVrkuVsZU56x4H-/view?usp=drive_link" className="flex items-center gap-1.5 text-accent hover:underline">
              <svg viewBox="0 0 48 48" className="w-5 h-5"><path fill="#FFC107" d="M17 14l-7.5 13h15L32 14H17z" /><path fill="#1976D2" d="M24.5 27L17 40h15.5l7.5-13H24.5z" /><path fill="#4CAF50" d="M17 14L2 40h15l15-26H17z" /></svg>
              portfolio_20260325.pdf
            </a>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <span className="font-medium">LinkedIn:</span>
            <a href="https://www.linkedin.com/in/satowaka/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent underline underline-offset-2 transition-colors">
              https://www.linkedin.com/in/satowaka/
            </a>
          </div>

          <div className="flex flex-col gap-2 mt-2">
            <span className="font-medium">CV:</span>
            <a
              href="https://drive.google.com/file/d/1y71yAzYkVOBZ0-lE5mVrkuVsZU56x4H-/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 border border-border hover:bg-surface transition-colors w-full max-w-lg"
            >
              <svg viewBox="0 0 48 48" className="w-8 h-8 shrink-0"><path fill="#FFC107" d="M17 14l-7.5 13h15L32 14H17z" /><path fill="#1976D2" d="M24.5 27L17 40h15.5l7.5-13H24.5z" /><path fill="#4CAF50" d="M17 14L2 40h15l15-26H17z" /></svg>
              <div className="flex flex-col">
                <span className="font-medium text-sm text-foreground">SATOMI_WAKABAYASHI_CV.pdf</span>
                <span className="text-xs text-muted">147.6 KB • pdf • drive.google.com</span>
              </div>
            </a>
          </div>
        </div>


      </div>
    </div>
  );
}
