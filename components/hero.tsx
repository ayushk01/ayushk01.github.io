import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-20 pb-16 md:pt-32 md:pb-24">
      <p className="text-sm uppercase tracking-widest text-ink-muted">
        Software engineer · Dehradun, India
      </p>
      <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
        Ayush Kashyap.
      </h1>
      <p className="mt-6 max-w-prose text-lg text-ink-muted">
        I'm a software engineer at{" "}
        <a
          href="https://docplix.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-ink underline underline-offset-4 decoration-ink/30 hover:decoration-ink"
        >
          DocPlix
        </a>
        , a healthtech company. I built the EHR frontend from scratch and grew it into a multi-tenant platform — one codebase, several branded clinic deployments — across web, React Native mobile, and AWS.
      </p>
      <p className="mt-4 max-w-prose text-lg text-ink-muted">
        Currently open to SDE / SDE II roles at product companies. Bengaluru on-site / hybrid or fully remote.
      </p>

      <div className="mt-8 flex items-center gap-3">
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper hover:opacity-90 transition"
        >
          Get in touch
        </a>
        <a
          href="/resume.pdf"
          className="inline-flex items-center justify-center rounded-full border border-ink/15 px-5 py-2.5 text-sm font-medium text-ink hover:border-ink/40 transition"
        >
          Résumé
        </a>
      </div>

      <div className="mt-10 flex items-center gap-5 text-ink-muted">
        <a
          href="https://github.com/ayushk01"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-ink transition"
        >
          <Github size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/ayushk01"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-ink transition"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="https://x.com/ayushhhkk_"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X"
          className="hover:text-ink transition"
        >
          <Twitter size={20} />
        </a>
        <a
          href="mailto:ayushkashyaptx@gmail.com"
          aria-label="Email"
          className="hover:text-ink transition"
        >
          <Mail size={20} />
        </a>
      </div>
    </section>
  );
}
