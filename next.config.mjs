import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for GitHub Pages (ayushk01.github.io).
  // For Vercel SSR instead, comment these three lines out.
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,

  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  reactStrictMode: true,
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
