import Link from "next/link";
import { Mail, Calendar } from "lucide-react";
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
          <a href="#services" className="hover:text-ink transition">
            Services
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
            I've spent the last three years building and scaling a production
            SaaS platform from scratch — the EHR at DocPlix. It started as a
            single-tenant prototype and now powers branded deployments for
            dozens of clinic chains and thousands of clinicians off one
            codebase, with patient and clinician mobile apps live on the App
            Store and Play Store. Web, React Native, AWS — the whole stack.
          </p>
          <p>
            I'm a generalist by temperament. The same week I'll be tuning a
            Postgres query, debugging a Hermes bytecode crash on Android, and
            setting up the CI release pipeline. The point of being a generalist
            is being able to take a SaaS product from <em>idea</em> to{" "}
            <em>shipped and surviving real users</em> without handing off
            between five contractors.
          </p>
          <p>
            I take on freelance SaaS builds and app-rescue work in my own time.
            If you're starting a multi-tenant product, or you have a half-built
            app that doesn't hold up yet, that's the kind of thing I'm good at.
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
            title="DocPlix EHR — multi-tenant SaaS frontend"
            blurb="Built the EHR frontend from scratch and grew it into a multi-tenant platform — one codebase powering branded deployments for dozens of clinic chains and thousands of clinicians. React + TypeScript on Node.js APIs, AWS underneath."
            stack={["React", "TypeScript", "Multi-tenant", "Node.js", "AWS"]}
            href="/work/docplix-ehr"
          />
          <WorkCard
            title="DocPlix mobile — patient + clinician apps"
            blurb="A family of React Native apps (patient + clinician), live on the App Store and Play Store. Shared types and data layer with the web platform. Owned navigation, networking, push, and release engineering end to end."
            stack={["React Native", "iOS", "Android", "Hermes", "Fastlane"]}
            href="/work/docplix-mobile"
          />
          <WorkCard
            title="WoodVer Reward — loyalty app (freelance)"
            blurb="Shipped a loyalty-rewards Android app in Flutter for a wood-coatings manufacturer. Built solo from scoping to Play Store release; client has since commissioned a follow-on build."
            stack={["Flutter", "Dart", "Firebase", "Android"]}
            href="/work/woodver"
          />
        </div>
      </section>

      {/* Work with me / Services */}
      <section id="services" className="py-12">
        <h2 className="text-sm font-medium uppercase tracking-widest text-ink-muted">
          Work with me
        </h2>
        <div className="mt-6 grid gap-4">
          <div className="rounded-lg border border-ink/10 p-6">
            <h3 className="text-lg font-medium">Production-ready SaaS builds</h3>
            <p className="mt-3 text-ink-muted leading-relaxed">
              Multi-tenant web plus iOS and Android, on AWS. I take a product
              from architecture decisions through shipped releases — auth and
              tenant scoping done right, a design system that scales past the
              first three customers, a release pipeline that doesn't dread
              Mondays. Best fit: startups that need a senior engineer to own
              the build instead of stitching together contractors.
            </p>
          </div>
          <div className="rounded-lg border border-ink/10 p-6">
            <h3 className="text-lg font-medium">App rescue</h3>
            <p className="mt-3 text-ink-muted leading-relaxed">
              Finishing or fixing half-built apps that don't hold up yet —
              including the increasingly common case of an AI-generated or
              outsourced build that compiles but doesn't survive real users.
              I read what's there, tell you honestly what's salvageable, and
              get it shippable. Web, React Native, or both.
            </p>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href="mailto:ayushkashyaptx@gmail.com?subject=New%20project"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper hover:opacity-90 transition"
          >
            <Mail size={16} />
            Start a project
          </a>
          <a
            href="https://cal.com/ayushk01"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 px-5 py-2.5 text-sm font-medium text-ink hover:border-ink/40 transition"
          >
            <Calendar size={16} />
            Book a 15-min call
          </a>
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
          . I read everything and reply when there's something specific to talk
          about. If you're starting a SaaS build or want a half-built app
          rescued — a couple of lines on what the product is, where it stands
          today, and what shipping looks like for you saves a round trip.
        </p>
      </section>

      <Footer />
    </main>
  );
}
