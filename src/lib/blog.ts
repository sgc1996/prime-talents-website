import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogDirectory = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  category: string;
  tags: string[];
  readingTime: string;
  coverImage: string;
  content: string;
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(blogDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(blogDirectory);
  const posts = fileNames
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, "");
      const fullPath = path.join(blogDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      // Estimate reading time (~200 words per minute)
      const wordCount = content.split(/\s+/g).length;
      const readingMinutes = Math.ceil(wordCount / 200);

      return {
        slug,
        title: data.title || "Untitled Insight",
        description: data.description || "",
        date: data.date || new Date().toISOString(),
        author: data.author || {
          name: "Prime Talents Research Team",
          role: "Human Capital Advisory",
          avatar: "/images/team/avatar-1.svg",
        },
        category: data.category || "HR Strategy",
        tags: data.tags || [],
        readingTime: `${readingMinutes} min read`,
        coverImage: data.coverImage || "/images/services/recruitment.svg",
        content,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPathMdx = path.join(blogDirectory, `${slug}.mdx`);
    const fullPathMd = path.join(blogDirectory, `${slug}.md`);
    const fullPath = fs.existsSync(fullPathMdx) ? fullPathMdx : fullPathMd;

    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const wordCount = content.split(/\s+/g).length;
    const readingMinutes = Math.ceil(wordCount / 200);

    return {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      author: data.author || {
        name: "Prime Talents Advisory",
        role: "Senior Consultant",
        avatar: "/images/team/avatar-1.svg",
      },
      category: data.category || "HR Strategy",
      tags: data.tags || [],
      readingTime: `${readingMinutes} min read`,
      coverImage: data.coverImage || "/images/services/recruitment.svg",
      content,
    };
  } catch (e) {
    return null;
  }
}

