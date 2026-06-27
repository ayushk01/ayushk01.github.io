import { Github, Linkedin } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-ink/10 py-10 text-sm text-ink-muted">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} Ayush Kashyap. Built with Next.js + Tailwind.</p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/ayushk01"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink transition"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/ayushk01"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink transition"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a href="mailto:ayushkashyaptx@gmail.com" className="hover:text-ink transition">
            ayushkashyaptx@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
