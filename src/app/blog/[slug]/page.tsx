import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { formatDate } from "@/lib/utils";
import { siteConfig } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  Linkedin,
  Twitter,
  Facebook,
  CheckCircle2,
} from "lucide-react";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return { title: "Insight Not Found" };
  }

  return {
    title: `${post.title} | ${siteConfig.name}`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
      url: `${siteConfig.url}/blog/${post.slug}`,
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.coverImage],
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) {
    notFound();
  }

  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: `${siteConfig.url}${post.coverImage}`,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/images/hero-abstract.svg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${post.slug}`,
    },
  };

  return (
    <article className="py-12 md:py-20 space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />

      {/* Top Breadcrumb Nav */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to all insights</span>
        </Link>
      </div>

      {/* Article Header */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="teal">{post.category}</Badge>
          <span className="flex items-center gap-1.5 text-xs text-slate-500">
            <Calendar className="w-3.5 h-3.5" />
            {formatDate(post.date)}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-slate-500">
            <Clock className="w-3.5 h-3.5" />
            {post.readingTime}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-navy-950 dark:text-white tracking-tight leading-tight">
          {post.title}
        </h1>

        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          {post.description}
        </p>

        {/* Author Details & Social Share Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-y border-slate-200/80 dark:border-navy-800 py-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-teal-500">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                width={44}
                height={44}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-bold text-navy-950 dark:text-white">
                {post.author.name}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {post.author.role} • Colombo Desk
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400 font-semibold mr-1">
              Share:
            </span>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                `${siteConfig.url}/blog/${post.slug}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-100 dark:bg-navy-800 text-slate-600 dark:text-slate-300 hover:text-teal-600 transition-colors"
              aria-label="Share on LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                `${siteConfig.url}/blog/${post.slug}`
              )}&text=${encodeURIComponent(post.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-100 dark:bg-navy-800 text-slate-600 dark:text-slate-300 hover:text-teal-600 transition-colors"
              aria-label="Share on Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>
      </header>

      {/* Featured Cover Graphic */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="relative h-64 sm:h-96 w-full rounded-3xl overflow-hidden border border-slate-200 dark:border-navy-800 shadow-xl bg-navy-950">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>

      {/* Article Content Body */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="space-y-6 text-slate-800 dark:text-slate-200 text-base sm:text-lg leading-relaxed">
          {post.content
            .split("\n\n")
            .filter((block) => !block.startsWith("# ")) // Avoid duplicate H1
            .map((block, idx) => {
              if (block.startsWith("## ")) {
                return (
                  <h2
                    key={idx}
                    className="text-2xl sm:text-3xl font-bold font-heading text-navy-950 dark:text-white pt-6 pb-2"
                  >
                    {block.replace("## ", "")}
                  </h2>
                );
              }
              if (block.startsWith("### ")) {
                return (
                  <h3
                    key={idx}
                    className="text-xl font-bold font-heading text-navy-950 dark:text-white pt-4 pb-1"
                  >
                    {block.replace("### ", "")}
                  </h3>
                );
              }
              if (block.startsWith("> ")) {
                return (
                  <blockquote
                    key={idx}
                    className="p-4 rounded-2xl bg-teal-50 dark:bg-navy-900 border-l-4 border-teal-500 text-teal-900 dark:text-teal-200 font-medium my-4 italic text-base"
                  >
                    {block.replace("> ", "")}
                  </blockquote>
                );
              }
              if (block.startsWith("```")) {
                const codeText = block.replace(/```[a-z]*\n?/g, "").trim();
                return (
                  <pre
                    key={idx}
                    className="p-4 rounded-2xl bg-navy-950 text-teal-300 font-mono text-xs sm:text-sm overflow-x-auto border border-navy-800 my-4"
                  >
                    <code>{codeText}</code>
                  </pre>
                );
              }
              if (block.startsWith("- ") || block.startsWith("1. ")) {
                const items = block.split("\n");
                return (
                  <ul key={idx} className="space-y-2 my-3 pl-2">
                    {items.map((it, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-2.5 text-sm sm:text-base">
                        <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0 mt-1" />
                        <span>{it.replace(/^[-*]|\d+\.\s*/, "")}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={idx} className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  {block}
                </p>
              );
            })}
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="pt-8 mt-12 border-t border-slate-200 dark:border-navy-800 flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-slate-500 mr-2">Tags:</span>
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                #{tag}
              </Badge>
            ))}
          </div>
        )}

        {/* Appointment Consultation Box */}
        <div className="mt-12 p-8 rounded-3xl bg-slate-50 dark:bg-navy-900 border border-teal-500/40 space-y-4">
          <h3 className="font-heading font-bold text-xl text-navy-950 dark:text-white">
            Need Expert HR Advisory for Your Enterprise?
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Our Colombo advisory team conducts customized workforce audits,
            compensation reviews, and executive searches tailored to your organizational goals.
          </p>
          <Link href="/appointment">
            <Button variant="accent" className="font-bold">
              Book a Consultation with Our Authors
            </Button>
          </Link>
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <aside className="max-w-4xl mx-auto px-4 sm:px-6 pt-16 border-t border-slate-200/80 dark:border-navy-800 space-y-8">
          <h3 className="font-heading font-bold text-2xl text-navy-950 dark:text-white">
            Related Thought Leadership
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedPosts.map((rel) => (
              <div
                key={rel.slug}
                className="p-6 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 hover:border-teal-500/40 transition-colors space-y-3"
              >
                <Badge variant="teal">{rel.category}</Badge>
                <h4 className="font-heading font-bold text-lg text-navy-950 dark:text-white line-clamp-2">
                  <Link href={`/blog/${rel.slug}`} className="hover:text-teal-600 dark:hover:text-teal-400">
                    {rel.title}
                  </Link>
                </h4>
                <p className="text-xs text-slate-500 line-clamp-2">
                  {rel.description}
                </p>
              </div>
            ))}
          </div>
        </aside>
      )}
    </article>
  );
}

