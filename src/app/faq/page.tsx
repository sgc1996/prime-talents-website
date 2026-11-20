"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, HelpCircle, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { AccordionItem } from "@/components/ui/Accordion";
import { siteConfig } from "@/lib/constants";

interface FAQItem {
  q: string;
  a: string;
  category: "employers" | "jobseekers" | "staffing" | "pricing";
}

const FAQ_DATA: FAQItem[] = [
  {
    category: "employers",
    q: "How does your executive search and recruitment process work?",
    a: "We begin with a strategic discovery session to profile your role, company culture, compensation parameters, and ideal candidate persona. Our consultants tap into passive talent networks across Sri Lanka and regional hubs, conduct behavioral and competency vetting, and present a curated shortlist within 72 hours.",
  },
  {
    category: "employers",
    q: "Do you offer a candidate replacement guarantee?",
    a: "Yes. All our permanent executive and professional placements are backed by an industry-leading 90-day replacement warranty. If a placed candidate departs or fails to meet defined probation criteria within this period, we provide an equivalent replacement at zero additional recruitment cost.",
  },
  {
    category: "employers",
    q: "Can you provide temporary or contract staff for short-term projects?",
    a: "Yes. Our staff augmentation and contract staffing service supplies qualified technical, administrative, and operational professionals for project-based or seasonal assignments, helping you scale quickly without long-term overhead.",
  },
  {
    category: "jobseekers",
    q: "Do job seekers pay any fees to Prime Talents Solutions?",
    a: "Never. Under our strict ethical charter, we never charge candidates for job placement, CV registration, or interview scheduling. Our recruitment services are entirely employer-funded.",
  },
  {
    category: "jobseekers",
    q: "How do I submit my CV and apply for active vacancies?",
    a: "You can submit your resume directly through our dedicated Job Seeker Portal. Our system parses your experience and skills, matching you with relevant open roles across IT, finance, apparel, logistics, and engineering.",
  },
  {
    category: "jobseekers",
    q: "Will my current employer know that I am exploring new opportunities?",
    a: "We maintain absolute confidentiality. We will never share your profile, CV, or employment history with any potential employer without your explicit prior authorization.",
  },
  {
    category: "staffing",
    q: "How does contract staffing work with Prime Talents Solutions?",
    a: "We deploy verified candidates to work on your designated projects according to your scope and schedule requirements, handling sourcing, vetting, and workforce coordination so you can focus on execution.",
  },
  {
    category: "staffing",
    q: "How quickly can contract or temporary personnel be deployed?",
    a: "Depending on role specialization, pre-vetted contractors and technical staff can typically be onboarded within 3 to 7 business days.",
  },
  {
    category: "pricing",
    q: "What are your recruitment engagement and fee structures?",
    a: "For permanent placements, we operate on a success-fee model (a percentage of the candidate's first-year gross annual remuneration, payable only once the candidate commences employment). For retained executive search (C-suite/VP), we offer milestone-based retained arrangements. Staff augmentation engagements are structured based on agreed transparent day-rates or monthly contractor fees.",
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
          Clear answers about our recruitment models, contract staffing,
          candidate privacy, and hiring process.
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
              Try a different keyword or contact our Colombo advisory desk directly.
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
              <p>{faq.a}</p>
            </AccordionItem>
          ))
        )}
      </section>

      {/* Still Have Questions CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="p-8 sm:p-10 rounded-3xl bg-navy-950 text-white border border-teal-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h3 className="font-heading font-bold text-xl sm:text-2xl">
              Still have questions about our services?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Our Colombo recruitment and compliance specialists are available to guide you.
            </p>
          </div>
          <Link href="/contact" className="shrink-0">
            <Button variant="accent" className="font-bold flex items-center gap-2">
              <span>Contact Support</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

