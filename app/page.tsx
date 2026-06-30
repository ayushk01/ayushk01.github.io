import Link from "next/link";
import { Mail, Linkedin } from "lucide-react";
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
          <a href="#expertise" className="hover:text-ink transition">
            Expertise
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
            For ~4 years at Docplix I've built and now operate a multi-tenant,
            white-label EHR end to end. It serves <strong>~2,160 active clinics
            and hospitals, ~2,100+ doctors, and ~770,000 patients across 100+
            specialties</strong>, processing ~30,000 appointments a month — on a
            single shared multi-tenant MySQL (organisationId isolation, 1,000+
            tables, per-org modules and branding), plus a white-label layer of
            ~45 custom-branded deployments including internationally rebranded
            sales. I'm the <strong>#1 all-time contributor to the core platform
            (~25% of the codebase)</strong> and lead the engineering team that
            ships it.
          </p>
          <p>
            My role spans architecture, backend, frontend, mobile, the AI stack,
            and cloud. The same week I'll be tuning a MySQL query, debugging a
            Hermes bytecode crash on Android, shaping a FHIR DocumentBundle for
            NDHM, and setting up the release pipeline. The parts I'm proudest of
            are the hard, specialized ones: an in-house clinical-AI scribe with
            Whisper fine-tuning and speech-to-text, and FHIR R4 / HL7
            interoperability for India's national digital-health network.
          </p>
          <p>
            Healthtech depth — FHIR/HL7, multi-tenant SaaS at real scale,
            clinical AI — is my specialty, and it's a rare one. I'm now openly
            looking for a senior engineering role: <strong>remote, or relocation
            to Australia</strong>. If you're building in this space, let's talk.
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
            title="Docplix EHR — multi-tenant healthcare SaaS"
            blurb="Architected and operate a multi-tenant, white-label EHR — ~2,160 active clinics, ~2,100+ doctors, ~770K patients across 100+ specialties, ~30K appointments/month. #1 all-time contributor (~25% of the core platform). FHIR/NDHM interop and an in-house clinical-AI scribe."
            stack={["React", "TypeScript", "Node.js", "Python", "MySQL", "FHIR/HL7", "AWS"]}
            href="/work/docplix-ehr"
          />
          <WorkCard
            title="Docplix mobile — patient + clinician apps"
            blurb="A family of React Native apps (patient + per-specialty clinician Rx), live on the App Store and Play Store. Shared types and data layer with the web platform. Owned navigation, networking, push, and release engineering end to end — Hermes, Fastlane, CodePush."
            stack={["React Native", "iOS", "Android", "Hermes", "Fastlane", "CodePush"]}
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

      {/* Expertise */}
      <section id="expertise" className="py-12">
        <h2 className="text-sm font-medium uppercase tracking-widest text-ink-muted">
          What I'm strongest at
        </h2>
        <div className="mt-6 grid gap-4">
          <div className="rounded-lg border border-ink/10 p-6">
            <h3 className="text-lg font-medium">
              Multi-tenant SaaS at real scale
            </h3>
            <p className="mt-3 text-ink-muted leading-relaxed">
              I architected and operate a multi-tenant EHR on a single shared
              MySQL — organisationId isolation, 1,000+ tables, per-org modules
              and branding — serving ~2,160 active clinics, ~770K patients, and
              ~30K appointments/month, plus a ~45 deployment white-label layer.
              Onboarding a new clinic is config, not a release.
            </p>
          </div>
          <div className="rounded-lg border border-ink/10 p-6">
            <h3 className="text-lg font-medium">
              Healthcare interop & clinical AI
            </h3>
            <p className="mt-3 text-ink-muted leading-relaxed">
              FHIR R4 / HL7 interoperability for India's NDHM/ABDM — compliant
              DocumentBundles, validation, terminology. And an in-house clinical
              AI &amp; speech stack in Python: an AI medical scribe ("Pāṇini"),
              Whisper fine-tuning, and speech-to-text for ambient clinical
              documentation. Plus React Native clinician and patient apps live
              on both stores.
            </p>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
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
          </a>{" "}
          or on{" "}
          <a
            href="https://www.linkedin.com/in/ayushk01"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink underline underline-offset-4 decoration-ink/30 hover:decoration-ink"
          >
            LinkedIn
          </a>
          . I'm open to senior engineering roles — remote or relocation to
          Australia — and available immediately / flexible. A couple of lines on
          the role and the team saves a round trip.
        </p>
      </section>

      <Footer />
    </main>
  );
}
