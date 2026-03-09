import fs from "node:fs/promises";
import path from "node:path";

import matter from "gray-matter";

export type PostFrontmatter = {
  title: string;
  date: string; // ISO date string
  summary?: string;
  tags?: string[];
};

export type PostListItem = {
  slug: string;
  frontmatter: PostFrontmatter;
};

export type Post = PostListItem & {
  content: string;
};

const POSTS_DIR = path.join(process.cwd(), "src", "content", "posts");

function slugFromFilename(filename: string) {
  return filename.replace(/\.mdx$/, "");
}

export async function getAllPosts(): Promise<PostListItem[]> {
  const entries = await fs.readdir(POSTS_DIR, { withFileTypes: true });
  const files = entries
    .filter((e) => e.isFile() && e.name.endsWith(".mdx"))
    .map((e) => e.name);

  const items = await Promise.all(
    files.map(async (filename) => {
      const slug = slugFromFilename(filename);
      const fullPath = path.join(POSTS_DIR, filename);
      const raw = await fs.readFile(fullPath, "utf8");
      const { data } = matter(raw);
      return {
        slug,
        frontmatter: data as PostFrontmatter,
      };
    }),
  );

  return items.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime(),
  );
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const fullPath = path.join(POSTS_DIR, `${slug}.mdx`);
  try {
    const raw = await fs.readFile(fullPath, "utf8");
    const { data, content } = matter(raw);
    return { slug, frontmatter: data as PostFrontmatter, content };
  } catch {
    return null;
  }
}

