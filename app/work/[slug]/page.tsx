import { notFound } from "next/navigation";
import Link from "next/link";
import { promises as fs } from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import { Footer } from "@/components/footer";

type Params = { params: { slug: string } };

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), "content/work");
  try {
    const files = await fs.readdir(dir);
    return files
      .filter((f) => f.endsWith(".mdx"))
      .map((f) => ({ slug: f.replace(/\.mdx$/, "") }));
  } catch {
    return [];
  }
}

async function readPost(slug: string) {
  const filePath = path.join(process.cwd(), "content/work", `${slug}.mdx`);
  try {
    const raw = await fs.readFile(filePath, "utf-8");
    const { content, frontmatter } = await compileMDX<{
      title: string;
      blurb: string;
      stack?: string[];
    }>({
      source: raw,
      options: { parseFrontmatter: true },
    });
    return { content, frontmatter };
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: Params) {
  const post = await readPost(params.slug);
  if (!post) return { title: "Not found" };
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.blurb,
  };
}

export default async function WorkPage({ params }: Params) {
  const post = await readPost(params.slug);
  if (!post) notFound();

  return (
    <main className="mx-auto max-w-3xl px-6 md:px-8">
      <header className="pt-6 text-sm text-ink-muted">
        <Link href="/" className="hover:text-ink transition">
          ← Home
        </Link>
      </header>

      <article className="pt-12 pb-16">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          {post.frontmatter.title}
        </h1>
        <p className="mt-4 text-ink-muted">{post.frontmatter.blurb}</p>
        {post.frontmatter.stack && (
          <ul className="mt-5 flex flex-wrap gap-1.5 text-xs text-ink-muted">
            {post.frontmatter.stack.map((s) => (
              <li
                key={s}
                className="rounded-full border border-ink/10 px-2.5 py-1"
              >
                {s}
              </li>
            ))}
          </ul>
        )}
        <div className="prose-page mt-10">{post.content}</div>
      </article>

      <Footer />
    </main>
  );
}
