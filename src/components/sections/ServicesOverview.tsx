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
    title: "Executive Search & Precision Talent Acquisition",
    category: "Talent Sourcing",
    tagline: "Unearthing exceptional leaders and technical innovators who drive enterprise outcomes.",
    description:
      "Our specialized recruitment consultants combine discreet headhunting networks with rigorous competency benchmarking. We identify, evaluate, and deliver top-tier executives, engineering leads, and functional specialists across Sri Lanka and the Asia-Pacific.",
    points: [
      "Targeted headhunting across passive C-Suite & VP talent",
      "Rigorous technical vetting and competency psychometrics",
      "72-hour shortlist turnaround with verified reference checks",
      "Comprehensive 90-day placement replacement guarantee",
    ],
    image: "/images/services/recruitment.svg",
    link: "/services#recruitment",
    buttonLabel: "Explore Executive Search",
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
      "Transparent salary ranges (including USD-pegged positions)",
      "Direct interview scheduling and career advisory",
    ],
    image: "/images/services/job-portal.svg",
    link: siteConfig.jobPortalUrl,
    isExternal: true,
    buttonLabel: "Visit Job Portal",
  },
  {
    id: "staffing",
    title: "Staff Augmentation & Contract Staffing",
    category: "Workforce Scalability",
    tagline: "Scale project and operational capacity with pre-vetted temporary professionals.",
    description:
      "Whether bridging specialized skills for a high-priority tech project or scaling seasonal operational capacity, our flexible contract staffing solutions connect you with verified professionals ready to contribute immediately.",
    points: [
      "Rapid deployment of vetted technical and corporate specialists",
      "Flexible engagement models: project-based, contract, or contract-to-hire",
      "Seamless operational onboarding and attendance coordination",
      "Strict background screening and credential verification",
    ],
    image: "/images/services/outsourcing.svg",
    link: "/services#outsourcing",
    buttonLabel: "Explore Staff Augmentation",
  },
  {
    id: "training",
    title: "Corporate Training & Leadership Development",
    category: "Organizational Excellence",
    tagline: "Upskilling teams to navigate digital transformation and strategic execution.",
    description:
      "Custom-designed corporate learning academies, executive leadership coaching, and practical workplace relations masterclasses led by industry practitioners and accredited organizational psychologists.",
    points: [
      "Executive leadership & emotional intelligence (EQ) retreats",
      "Sri Lanka Labour Law & disciplinary inquiry masterclasses",
      "Sales performance acceleration and key account frameworks",
      "Pre- and post-training impact assessments with measurable ROI",
    ],
    image: "/images/services/training.svg",
    link: "/services#training",
    buttonLabel: "View Training Programs",
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
            From strategic executive search and specialized tech placements to tailored
            staff augmentation and leadership training, we power your organizational growth.
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

