"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, HelpCircle, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { AccordionItem } from "@/components/ui/Accordion";

interface FAQItem {
  q: string;
  a: string;
  category: "employers" | "jobseekers" | "staffing" | "pricing";
}

const FAQ_DATA: FAQItem[] = [
  // For Employers (1–4)
  {
    category: "employers",
    q: "How does your recruitment and hiring process work?",
    a: "We start with a quick role briefing to understand your required skills, budget, team fit, and hiring timeline. From there, we source and screen active and passive candidates across Sri Lanka, run practical competency and reference checks, and share a curated shortlist within 72 hours.",
  },
  {
    category: "employers",
    q: "Do you offer a candidate replacement guarantee?",
    a: "Yes. All permanent placements include a 90-day replacement guarantee. If a hired candidate leaves or does not work out during the first 90 days, we will source and provide a suitable replacement at no extra recruitment fee.",
  },
  {
    category: "employers",
    q: "Can you provide temporary or contract staff for short-term projects?",
    a: "Yes. Through our staff augmentation and contract staffing service, we supply pre-vetted technical, administrative, and operational professionals for project-based, seasonal, or fixed-term work—helping your team scale without long-term hiring overhead.",
  },
  {
    category: "employers",
    q: "How can my company submit a job vacancy or start hiring with you?",
    a: "You can book a quick consultation using the Book an Appointment button on our website or reach out via our Contact page with your role details. Once we confirm the role scope, we begin candidate sourcing immediately.",
  },

  // For Job Seekers (5–8)
  {
    category: "jobseekers",
    q: "Do job seekers pay any fees to Prime Talents Solutions?",
    a: "No, never. We do not charge job seekers any fees for registration, CV submission, job matching, or interview coordination. Our recruitment services are completely free for candidates.",
  },
  {
    category: "jobseekers",
    q: "How do I submit my CV and apply for active vacancies?",
    a: "You can explore open roles and submit your CV directly through the Prime Talents Job Portal. Our team reviews your background and skills to match you with verified opportunities across IT, finance, sales, operations, logistics, and corporate roles.",
  },
  {
    category: "jobseekers",
    q: "Will my current employer know that I am exploring new opportunities?",
    a: "No. We treat every candidate profile as strictly confidential. We never share your CV, personal details, or application status with any employer without your clear permission first.",
  },
  {
    category: "jobseekers",
    q: "Do you offer support with CV preparation or interview readiness?",
    a: "Yes. As part of our Candidate Readiness & Advisory support, we provide practical guidance on structuring your CV clearly and preparing for role-specific interviews.",
  },

  // Staff Augmentation (9–10)
  {
    category: "staffing",
    q: "How does contract staffing work with Prime Talents Solutions?",
    a: "We match pre-vetted contract professionals to your project scope and schedule. Our team handles initial sourcing, credential verification, and ongoing attendance and contractor coordination while your team directs the day-to-day work.",
  },
  {
    category: "staffing",
    q: "How quickly can contract or temporary personnel be deployed?",
    a: "Depending on the role and skill requirements, pre-vetted contract and temporary staff can typically be deployed within 3 to 7 business days.",
  },

  // Pricing & Models (11)
  {
    category: "pricing",
    q: "What are your recruitment engagement and fee structures?",
    a: "We keep our pricing straightforward and aligned with your hiring model:\n\n• Permanent Recruitment: We work on a success-fee basis—a pre-agreed percentage of the candidate's starting annual compensation, payable only after the candidate joins your team.\n\n• Contract Staffing & Staff Augmentation: Structured around transparent daily or monthly contractor rates agreed upfront based on role scope and duration.\n\n• Custom Hiring Support: For multi-role hiring or dedicated support, we offer flexible engagement terms tailored to your budget.",
  },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = FAQ_DATA.filter((item) => {
    const matchesCategory =
      activeCategory === "all" || item.category === activeCategory;
    const matchesSearch =
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-12 md:py-20 space-y-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <Badge variant="teal">Help &amp; Guidance</Badge>
        <h1 className="text-4xl sm:text-5xl font-black font-heading text-navy-950 dark:text-white tracking-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Clear answers about our recruitment models, contract staffing, candidate privacy, and hiring process.
        </p>

        {/* Real-time Search Input */}
        <div className="max-w-xl mx-auto pt-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by keyword (e.g. replacement guarantee, fees, job portal)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-slate-300 dark:border-navy-700 bg-white dark:bg-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-sm text-navy-950 dark:text-white"
            />
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          </div>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {[
            { id: "all", label: "All Questions" },
            { id: "employers", label: "For Employers" },
            { id: "jobseekers", label: "For Job Seekers" },
            { id: "staffing", label: "Staff Augmentation" },
            { id: "pricing", label: "Pricing & Models" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setOpenIndex(0);
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === cat.id
                  ? "bg-navy-900 text-white dark:bg-teal-500 dark:text-navy-950 shadow-sm"
                  : "bg-white dark:bg-navy-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-navy-800 hover:border-slate-300"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Accordion FAQ List */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-12 p-8 rounded-3xl bg-slate-50 dark:bg-navy-900 border border-slate-200 dark:border-navy-800 space-y-3">
            <HelpCircle className="w-10 h-10 text-slate-400 mx-auto" />
            <h3 className="font-heading font-bold text-lg text-navy-950 dark:text-white">
              No matching answers found
            </h3>
            <p className="text-sm text-slate-500">
              Try a different keyword or contact our team directly.
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
              }}
            >
              Reset Filters
            </Button>
          </div>
        ) : (
          filteredFaqs.map((faq, idx) => (
            <AccordionItem
              key={idx}
              title={faq.q}
              isOpen={openIndex === idx}
              onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <div className="whitespace-pre-line leading-relaxed">
                {faq.a}
              </div>
            </AccordionItem>
          ))
        )}
      </section>

      {/* Still Have Questions CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="p-8 sm:p-10 rounded-3xl bg-navy-950 text-white border border-teal-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-xl">
          <div className="space-y-1">
            <h3 className="font-heading font-bold text-xl sm:text-2xl">
              Still have questions about our services?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Our team in Sri Lanka is ready to help with your hiring plans or job search questions.
            </p>
          </div>
          <Link href="/contact" className="shrink-0">
            <Button variant="accent" className="font-bold flex items-center gap-2">
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
