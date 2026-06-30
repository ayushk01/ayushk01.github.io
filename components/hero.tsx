import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-20 pb-16 md:pt-32 md:pb-24">
      <Image
        src="/avatar.jpg"
        alt="Ayush Kashyap"
        width={76}
        height={76}
        priority
        className="mb-6 rounded-full ring-1 ring-ink/10"
      />
      <p className="text-sm uppercase tracking-widest text-ink-muted">
        Senior Software Engineer · Healthtech · Lucknow / Remote
      </p>
      <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
        Ayush Kashyap.
      </h1>
      <p className="mt-6 max-w-prose text-lg text-ink-muted">
        I build and operate a multi-tenant EHR at scale — ~2,160 clinics,
        ~2,100+ doctors, and ~770K patients across 100+ specialties. FHIR/NDHM,
        a clinical-AI scribe, and React Native at scale.
      </p>
      <p className="mt-4 max-w-prose text-lg text-ink-muted">
        ~4 years at Docplix, where I'm the #1 all-time contributor to the core
        platform (~25% of the codebase) and lead the engineering team that ships
        it. I'm now openly looking for a senior role — remote, or relocation to
        Australia.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href="mailto:ayushkashyaptx@gmail.com?subject=Senior%20engineering%20role"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper hover:opacity-90 transition"
        >
          <Mail size={16} />
          Get in touch
        </a>
        <a
          href="https://www.linkedin.com/in/ayushk01"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 px-5 py-2.5 text-sm font-medium text-ink hover:border-ink/40 transition"
        >
          <Linkedin size={16} />
          Connect on LinkedIn
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
