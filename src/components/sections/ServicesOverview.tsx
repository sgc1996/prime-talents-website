import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

const MAIN_SERVICES = [
  {
    id: "recruitment",
    title: "Precision Talent Sourcing & Recruitment",
    category: "Talent Sourcing",
    tagline: "Fast, reliable hiring tailored for growing businesses across Sri Lanka.",
    description:
      "We help growing businesses across Sri Lanka find and hire the right talent—fast. By combining modern sourcing strategies with thorough candidate screening, we take the stress out of hiring so you can focus on scaling your business.",
    points: [
      "Targeted sourcing for junior, mid-level, and specialist roles across key industries",
      "Pre-screened & verified candidates with thorough background and reference checks",
      "Within 72 hours shortlist turnaround to keep your hiring pipeline moving",
      "Flexible 90-day replacement guarantee for complete peace of mind",
    ],
    image: "/images/services/recruitment.svg",
    link: "/services#recruitment",
    buttonLabel: "Explore Talent Sourcing",
  },
  {
    id: "job-portal",
    title: "Dedicated Job Portal & Candidate Gateway",
    category: "For Job Seekers & Employers",
    tagline: "Connecting ambitious Sri Lankan professionals with market-leading careers.",
    description:
      "A modern career hub where professionals access verified vacancies across IT, banking, manufacturing, apparel, and multinational shared services. Employers gain direct access to a pre-screened pool of 25,000+ active candidates.",
    points: [
      "Curated listings for high-growth tech and corporate roles",
      "Intelligent CV parsing and skill-matching algorithms",
      "Transparent salary ranges and clear role expectations",
      "Direct interview scheduling and career advisory",
    ],
    image: "/images/services/job-portal.svg",
    link: siteConfig.jobPortalUrl,
    isExternal: true,
    buttonLabel: "Visit Job Portal",
  },
  {
    id: "recruitment-solutions",
    title: "End-to-End Recruitment & Talent Solutions",
    category: "Permanent Hiring",
    tagline: "Build and scale your core team in Sri Lanka faster, without the internal hiring bottleneck.",
    description:
      "Whether you are a growing local business or an international company establishing a long-term presence, our dedicated recruitment team manages the entire permanent hiring lifecycle—from sourcing to onboarding—so you can focus on your core operations.",
    points: [
      "Targeted Talent Sourcing: Finding pre-vetted, high-caliber candidates for permanent roles across key industries",
      "Customized Hiring Support: Tailored recruitment strategies for executive, mid-level, and operational positions",
      "Thorough Screening & Reference Checks: Structured interviews and verified background checks before shortlisting",
      "Seamless Onboarding Coordination: Smooth offer management and joining support for a great candidate experience",
    ],
    image: "/images/services/recruitment-lifecycle.svg",
    link: "/services#recruitment-solutions",
    buttonLabel: "Explore Recruitment Solutions",
  },
  {
    id: "staffing",
    title: "Staff Augmentation & Contract Staffing",
    category: "Workforce Scalability",
    tagline: "Scale project and operational capacity rapidly with pre-vetted temporary professionals.",
    description:
      "Whether bridging specialized skill gaps for a high-priority tech project or scaling seasonal operational capacity, our flexible contract staffing solutions connect you with verified professionals ready to contribute from day one.",
    points: [
      "Rapid Deployment: Immediate access to vetted technical and corporate specialists without long hiring cycles",
      "Flexible Engagement Models: Choose from project-based, fixed-term contract, or contract-to-hire arrangements",
      "Operational & Attendance Management: Seamless onboarding along with ongoing attendance and contractor coordination",
      "Strict Credential Verification: Comprehensive background screening to ensure reliability and compliance",
    ],
    image: "/images/services/staff-augmentation.svg",
    link: "/services#staffing",
    buttonLabel: "Explore Contract Staffing",
  },
];

export function ServicesOverview() {
  return (
    <section className="py-20 md:py-28 bg-white dark:bg-navy-900 border-b border-slate-200/80 dark:border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="teal">End-to-End Solutions</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 dark:text-white font-heading tracking-tight">
            Comprehensive Human Capital Capabilities
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Practical hiring, job portal access, permanent recruitment, and contract staffing built for businesses and professionals in Sri Lanka.
          </p>
        </div>

        {/* 4 Alternating Feature Blocks */}
        <div className="space-y-20 lg:space-y-28">
          {MAIN_SERVICES.map((srv, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <div
                key={srv.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                  isReversed ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Visual Side */}
                <div
                  className={`lg:col-span-6 ${
                    isReversed ? "lg:col-start-7" : ""
                  }`}
                >
                  <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-navy-800 shadow-xl group bg-slate-50 dark:bg-navy-950 p-2">
                    <Image
                      src={srv.image}
                      alt={srv.title}
                      width={600}
                      height={400}
                      className="w-full h-auto rounded-2xl group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Content Side */}
                <div
                  className={`lg:col-span-6 space-y-5 ${
                    isReversed ? "lg:col-start-1" : ""
                  }`}
                >
                  <Badge variant="outline">{srv.category}</Badge>
                  <h3 className="text-2xl sm:text-3xl font-bold text-navy-950 dark:text-white font-heading">
                    {srv.title}
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-teal-700 dark:text-teal-400">
                    {srv.tagline}
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                    {srv.description}
                  </p>

                  <ul className="space-y-2.5 pt-2">
                    {srv.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4">
                    {srv.isExternal ? (
                      <a
                        href={srv.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="secondary" className="font-semibold shadow-sm">
                          <span>{srv.buttonLabel}</span>
                          <ExternalLink className="w-4 h-4 ml-1 text-slate-500" />
                        </Button>
                      </a>
                    ) : (
                      <Link href={srv.link}>
                        <Button variant="primary" className="font-semibold shadow-sm">
                          <span>{srv.buttonLabel}</span>
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

