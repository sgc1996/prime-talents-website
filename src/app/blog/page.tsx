import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { formatDate } from "@/lib/utils";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Industry Insights & Research | Sri Lanka HR & Labor Intelligence",
  description:
    "Empirical reports, salary trends, statutory compliance frameworks, and executive workforce strategies by Prime Talents Solutions advisory team.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="space-y-16 py-12 md:py-20">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <Badge variant="teal">Market Intelligence</Badge>
        <h1 className="text-4xl sm:text-5xl font-black font-heading text-navy-950 dark:text-white tracking-tight">
          Industry Insights &amp; Strategic HR Research
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Expert analysis on compensation trends, Department of Labour compliance,
          executive headhunting, and cross-border workforce dynamics in Sri Lanka.
        </p>
      </section>

      {/* Featured / Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Card
              key={post.slug}
              className="group overflow-hidden flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 border-slate-200 dark:border-navy-800 bg-white dark:bg-navy-900 shadow-sm hover:shadow-xl hover:border-teal-500/40"
            >
              <div>
                <div className="relative h-52 w-full overflow-hidden bg-slate-100 dark:bg-navy-950">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="navy" className="bg-navy-900/90 text-white backdrop-blur-xs">
                      {post.category}
                    </Badge>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {formatDate(post.date)}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readingTime}
                    </span>
                  </div>

                  <h2 className="font-heading font-bold text-xl text-navy-950 dark:text-white line-clamp-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>

                  <p className="text-slate-600 dark:text-slate-300 text-sm line-clamp-3 leading-relaxed">
                    {post.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 dark:border-navy-800/80 mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full overflow-hidden border border-teal-500">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      width={28}
                      height={28}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-navy-950 dark:text-white">
                      {post.author.name}
                    </p>
                    <p className="text-[10px] text-slate-400">{post.author.role}</p>
                  </div>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="text-xs font-bold text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 inline-flex items-center gap-1"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

