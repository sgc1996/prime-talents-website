import React from "react";
import { Metadata } from "next";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Recruitment & Hiring in Sri Lanka",
  description:
    "Find answers to common questions about recruitment fees, 90-day replacement guarantees, contract staffing, and candidate screening with Prime Talents Solutions (Pvt) Ltd in Sri Lanka.",
  keywords: [
    "Recruitment agency FAQ Sri Lanka",
    "Recruitment fee structure Sri Lanka",
    "Replacement guarantee recruitment",
    "Staff augmentation FAQ Sri Lanka",
    "Contract staffing questions Sri Lanka",
    "Prime Talents Solutions FAQ",
  ],
  openGraph: {
    title: "Frequently Asked Questions | Recruitment & Hiring in Sri Lanka",
    description:
      "Find clear answers to common questions about recruitment fees, replacement guarantees, contract staffing, and candidate screening in Sri Lanka.",
    url: `${siteConfig.url}/faq`,
    type: "website",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does your recruitment and hiring process work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We start with a quick role briefing to understand your required skills, budget, team fit, and hiring timeline. From there, we source and screen active and passive candidates across Sri Lanka, run practical competency and reference checks, and share a curated shortlist within 72 hours.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer a candidate replacement guarantee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All permanent placements include a 90-day replacement guarantee. If a hired candidate leaves or does not work out during the first 90 days, we will source and provide a suitable replacement at no extra recruitment fee.",
      },
    },
    {
      "@type": "Question",
      name: "Can you provide temporary or contract staff for short-term projects?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Through our staff augmentation and contract staffing service, we supply pre-vetted technical, administrative, and operational professionals for project-based, seasonal, or fixed-term work—helping your team scale without long-term hiring overhead.",
      },
    },
    {
      "@type": "Question",
      name: "How can my company submit a job vacancy or start hiring with you?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can book a quick consultation using the Book an Appointment button on our website or reach out via our Contact page with your role details. Once we confirm the role scope, we begin candidate sourcing immediately.",
      },
    },
    {
      "@type": "Question",
      name: "Do job seekers pay any fees to Prime Talents Solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, never. We do not charge job seekers any fees for registration, CV submission, job matching, or interview coordination. Our recruitment services are completely free for candidates.",
      },
    },
    {
      "@type": "Question",
      name: "How do I submit my CV and apply for active vacancies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can explore open roles and submit your CV directly through the Prime Talents Job Portal. Our team reviews your background and skills to match you with verified opportunities across IT, finance, sales, operations, logistics, and corporate roles.",
      },
    },
    {
      "@type": "Question",
      name: "How does contract staffing work with Prime Talents Solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We match pre-vetted contract professionals to your project scope and schedule. Our team handles initial sourcing, credential verification, and ongoing attendance and contractor coordination while your team directs the day-to-day work.",
      },
    },
    {
      "@type": "Question",
      name: "What are your recruitment engagement and fee structures?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We keep our pricing straightforward and aligned with your hiring model: Permanent Recruitment is on a success-fee basis payable only after the candidate joins; Contract Staffing is based on transparent daily or monthly contractor rates; and Custom Hiring Support is tailored to multi-role or dedicated hiring projects.",
      },
    },
  ],
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
