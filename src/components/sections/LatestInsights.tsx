import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { BlogPost } from "@/lib/blog";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";
import { formatDate } from "@/lib/utils";

interface LatestInsightsProps {
  posts: BlogPost[];
}

export function LatestInsights({ posts }: LatestInsightsProps) {
  return (
    <section className="py-20 md:py-28 bg-slate-50/70 dark:bg-navy-950/70 border-b border-slate-200/80 dark:border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <Badge variant="teal">Market Intelligence</Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 dark:text-white font-heading tracking-tight">
              Latest HR &amp; Workforce Insights
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              In-depth research, legal updates, and compensation trends shaping
              the Sri Lankan corporate landscape.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold text-teal-700 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300 transition-colors group shrink-0"
          >
            <span>View All Insights</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 3 Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Card
              key={post.slug}
              className="group overflow-hidden flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 border-slate-200 dark:border-navy-800 bg-white dark:bg-navy-900 shadow-sm hover:shadow-xl hover:border-teal-500/40"
            >
              <div>
                {/* Cover Image */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100 dark:bg-navy-950">
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

                {/* Card Content */}
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

                  <h3 className="font-heading font-bold text-lg text-navy-950 dark:text-white line-clamp-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 text-sm line-clamp-2 leading-relaxed">
                    {post.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="p-6 pt-0 border-t border-slate-100 dark:border-navy-800/80 mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full overflow-hidden border border-teal-500">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      width={24}
                      height={24}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                    {post.author.name}
                  </span>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="text-xs font-bold text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 inline-flex items-center gap-1"
                >
                  <span>Read</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

