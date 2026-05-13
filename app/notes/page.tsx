import Link from "next/link";
import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import { Footer } from "@/components/footer";

type Note = {
  slug: string;
  title: string;
  blurb: string;
  date: string;
};

async function listNotes(): Promise<Note[]> {
  const dir = path.join(process.cwd(), "content/notes");
  try {
    const files = await fs.readdir(dir);
    const notes = await Promise.all(
      files
        .filter((f) => f.endsWith(".mdx"))
        .map(async (file) => {
          const raw = await fs.readFile(path.join(dir, file), "utf-8");
          const { data } = matter(raw);
          return {
            slug: file.replace(/\.mdx$/, ""),
            title: (data.title as string) || file,
            blurb: (data.blurb as string) || "",
            date: (data.date as string) || "",
          };
        })
    );
    return notes.sort((a, b) => (a.date < b.date ? 1 : -1));
  } catch {
    return [];
  }
}

export const metadata = {
  title: "Notes",
  description: "Short notes on building, debugging, and shipping.",
};

export default async function NotesPage() {
  const notes = await listNotes();
  return (
    <main className="mx-auto max-w-3xl px-6 md:px-8">
      <header className="pt-6 text-sm text-ink-muted">
        <Link href="/" className="hover:text-ink transition">
          ← Home
        </Link>
      </header>

      <section className="pt-12 pb-16">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Notes
        </h1>
        <p className="mt-4 text-ink-muted max-w-prose">
          Short writing on building, debugging, and shipping production software.
          Threads I'd want to read myself.
        </p>

        <ul className="mt-10 space-y-6">
          {notes.length === 0 && (
            <li className="text-ink-muted">No notes yet. Check back soon.</li>
          )}
          {notes.map((note) => (
            <li
              key={note.slug}
              className="border-b border-ink/10 pb-6 last:border-b-0"
            >
              <p className="text-xs uppercase tracking-widest text-ink-muted">
                {note.date}
              </p>
              <h2 className="mt-2 text-lg font-medium">{note.title}</h2>
              {note.blurb && (
                <p className="mt-1 text-ink-muted">{note.blurb}</p>
              )}
            </li>
          ))}
        </ul>
      </section>

      <Footer />
    </main>
  );
}
