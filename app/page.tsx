import Link from "next/link";
import { Hero } from "@/components/hero";
import { WorkCard } from "@/components/work-card";
import { StackGrid } from "@/components/stack-grid";
import { ThemeToggle } from "@/components/theme-toggle";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 md:px-8">
      <header className="flex items-center justify-between pt-6">
        <Link href="/" className="text-sm font-semibold tracking-tight">
          AK
        </Link>
        <nav className="flex items-center gap-6 text-sm text-ink-muted">
          <a href="#work" className="hover:text-ink transition">
            Work
          </a>
          <a href="#stack" className="hover:text-ink transition">
            Stack
          </a>
          <Link href="/notes" className="hover:text-ink transition">
            Notes
          </Link>
          <a href="#contact" className="hover:text-ink transition">
            Contact
          </a>
          <ThemeToggle />
        </nav>
      </header>

      <Hero />

      {/* About */}
      <section className="py-12">
        <h2 className="text-sm font-medium uppercase tracking-widest text-ink-muted">
          About
        </h2>
        <div className="mt-6 space-y-4 text-ink leading-relaxed">
          <p>
            I joined DocPlix as an intern in 2022 and converted full-time the following
            April. Since then I've built the EHR frontend from a single repo into a
            multi-tenant platform that powers branded deployments for several clinic
            chains, all running off the same codebase.
          </p>
          <p>
            I'm a generalist by temperament. The same week I'll be tuning a Postgres
            query, debugging a Hermes bytecode issue on Android, and onboarding a new
            engineer to our frontend stack. I care more about{" "}
            <em>shipping things that work</em> than about defending a specialty.
          </p>
          <p>
            Before DocPlix I founded and ran the Google Developer Student Club chapter
            at Graphic Era Hill University for two years — 15+ workshops, a community of
            900+ developers. That's where I learned that engineering is a team sport.
          </p>
        </div>
      </section>

      {/* Selected work */}
      <section id="work" className="py-12">
        <h2 className="text-sm font-medium uppercase tracking-widest text-ink-muted">
          Selected work
        </h2>
        <div className="mt-6 grid gap-4">
          <WorkCard
            title="DocPlix EHR — multi-tenant frontend"
            blurb="Built the EHR frontend from scratch and grew it into a multi-tenant platform — one codebase, several clinic-branded deployments. React + TypeScript on Node.js APIs, AWS underneath."
            stack={["React", "TypeScript", "Node.js", "Multi-tenant", "AWS"]}
            href="/work/docplix-ehr"
          />
          <WorkCard
            title="DocPlix mobile — patient + clinician apps"
            blurb="Two React Native apps. Live on the App Store and Play Store. Shared types and data layer with the web platform."
            stack={["React Native", "Hermes", "iOS", "Android"]}
            href="/work/docplix-mobile"
          />
          <WorkCard
            title="WoodVer Reward — loyalty app (freelance)"
            blurb="Built and shipped a loyalty-rewards Android app in Flutter for a wood-coating manufacturer. 500+ installs on Google Play."
            stack={["Flutter", "Dart", "Firebase"]}
            href="/work/woodver"
          />
        </div>
      </section>

      {/* Stack */}
      <section id="stack" className="py-12">
        <h2 className="text-sm font-medium uppercase tracking-widest text-ink-muted">
          Stack
        </h2>
        <div className="mt-6">
          <StackGrid />
        </div>
      </section>

      {/* Writing */}
      <section id="writing" className="py-12">
        <h2 className="text-sm font-medium uppercase tracking-widest text-ink-muted">
          Writing
        </h2>
        <p className="mt-4 text-ink-muted">
          Short notes on building, debugging, and shipping. Threads I'd want to read myself.
        </p>
        <Link
          href="/notes"
          className="mt-4 inline-flex text-sm underline underline-offset-4 decoration-ink/30 hover:decoration-ink"
        >
          Read the notes →
        </Link>
      </section>

      {/* Contact */}
      <section id="contact" className="py-12">
        <h2 className="text-sm font-medium uppercase tracking-widest text-ink-muted">
          Get in touch
        </h2>
        <p className="mt-4 max-w-prose text-ink-muted">
          The fastest way to reach me is{" "}
          <a
            href="mailto:ayushkashyaptx@gmail.com"
            className="text-ink underline underline-offset-4 decoration-ink/30 hover:decoration-ink"
          >
            ayushkashyaptx@gmail.com
          </a>
          . I read everything; I reply when there's something specific to talk about.
          For roles, please include the company, role title, and the rough comp band — saves a round trip.
        </p>
      </section>

      <Footer />
    </main>
  );
}
