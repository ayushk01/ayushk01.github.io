import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export type WorkCardProps = {
  title: string;
  blurb: string;
  stack: string[];
  href: string;
  external?: boolean;
};

export function WorkCard({ title, blurb, stack, href, external }: WorkCardProps) {
  const Wrapper = ({ children }: { children: React.ReactNode }) =>
    external ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group block rounded-lg border border-ink/10 p-6 transition hover:border-ink/30 hover:bg-paper-raised"
      >
        {children}
      </a>
    ) : (
      <Link
        href={href}
        className="group block rounded-lg border border-ink/10 p-6 transition hover:border-ink/30 hover:bg-paper-raised"
      >
        {children}
      </Link>
    );

  return (
    <Wrapper>
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-medium">{title}</h3>
        <ArrowUpRight
          size={18}
          className="text-ink-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
        />
      </div>
      <p className="mt-3 text-ink-muted leading-relaxed">{blurb}</p>
      <ul className="mt-4 flex flex-wrap gap-1.5 text-xs text-ink-muted">
        {stack.map((s) => (
          <li
            key={s}
            className="rounded-full border border-ink/10 px-2.5 py-1"
          >
            {s}
          </li>
        ))}
      </ul>
    </Wrapper>
  );
}
