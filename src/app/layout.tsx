import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/constants";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SkipToContent } from "@/components/layout/SkipToContent";
import { FloatingWidgets } from "@/components/layout/FloatingWidgets";
import { ToastProvider } from "@/components/ui/Toast";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `Prime Talents Solutions (Pvt) Ltd | Recruitment Agency in Sri Lanka`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Sri Lanka's trusted recruitment agency and workforce consultancy for permanent hiring, staff augmentation, contract staffing, and executive talent acquisition across IT, customer care, recovery, insurance, apparel, finance, and corporate sectors.",
  keywords: [
    "Recruitment agency in Sri Lanka",
    "Recruitment agencies in Sri Lanka",
    "HR consultancy Sri Lanka",
    "Staffing agency in Sri Lanka",
    "Talent acquisition Sri Lanka",
    "Executive search Sri Lanka",
    "Permanent recruitment services Sri Lanka",
    "Staff augmentation Sri Lanka",
    "Contract staffing solutions Sri Lanka",
    "Call center recruitment Sri Lanka",
    "Customer care executive recruitment Sri Lanka",
    "Customer support hiring Sri Lanka",
    "BPO recruitment agency Sri Lanka",
    "Recovery officer recruitment Sri Lanka",
    "Credit control and recovery jobs Sri Lanka",
    "Insurance recruitment agency Sri Lanka",
    "Insurance advisor & executive hiring Sri Lanka",
    "Banking and finance recruitment Sri Lanka",
    "Accounts and audit recruitment Sri Lanka",
    "Apparel recruitment agency Sri Lanka",
    "Garment merchandiser recruitment Sri Lanka",
    "Apparel sector hiring Sri Lanka",
    "HR executive recruitment Sri Lanka",
    "Human resources consultancy Sri Lanka",
    "Sales executive recruitment Sri Lanka",
    "IT recruitment agency Sri Lanka",
    "Software developer recruitment Sri Lanka",
    "Logistics and supply chain recruitment Sri Lanka",
    "Job vacancies in Sri Lanka",
    "Prime Talents Solutions",
    "Prime Talents Solutions Pvt Ltd",
    "Prime Talents Solutions Sri Lanka",
  ],
  authors: [{ name: siteConfig.legalName }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_LK",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `Prime Talents Solutions (Pvt) Ltd | Recruitment Agency in Sri Lanka`,
    description:
      "Sri Lanka's trusted recruitment agency and workforce consultancy for permanent hiring, staff augmentation, contract staffing, and executive talent acquisition.",
    images: [
      {
        url: "/images/hero-abstract.svg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Connecting Ambition with Opportunity in Sri Lanka`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Prime Talents Solutions (Pvt) Ltd | Recruitment Agency in Sri Lanka`,
    description:
      "Sri Lanka's trusted recruitment agency and workforce consultancy for permanent hiring, staff augmentation, and contract staffing.",
    images: ["/images/hero-abstract.svg"],
    creator: "@primetalents",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["EmploymentAgency", "ProfessionalService"],
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      legalName: siteConfig.legalName,
      alternateName: [siteConfig.brandName, "Prime Talents Sri Lanka"],
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/images/logo.png`,
        caption: siteConfig.name,
      },
      image: `${siteConfig.url}/images/hero-abstract.svg`,
      description: siteConfig.description,
      priceRange: "$$",
      areaServed: {
        "@type": "Country",
        name: "Sri Lanka",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: `${siteConfig.contact.address.line1}, ${siteConfig.contact.address.line2}`,
        addressLocality: siteConfig.contact.address.city,
        postalCode: siteConfig.contact.address.postalCode,
        addressCountry: "LK",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 6.9333,
        longitude: 79.8433,
      },
      telephone: siteConfig.contact.phone,
      email: siteConfig.contact.email,
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "08:30",
          closes: "17:30",
        },
      ],
      sameAs: [
        siteConfig.socials.linkedin,
        siteConfig.socials.facebook,
        siteConfig.socials.twitter,
        siteConfig.socials.instagram,
      ],
      knowsAbout: [
        "Recruitment and Talent Sourcing",
        "Staff Augmentation and Contract Staffing",
        "Executive Search and Headhunting",
        "Call Center and Customer Care Recruitment",
        "Recovery Officer and Credit Control Hiring",
        "Insurance and Banking Recruitment",
        "Apparel and Garment Merchandiser Staffing",
        "Human Resources and Administrative Recruitment",
        "Information Technology and Software Talent Acquisition",
        "Logistics and Supply Chain Staffing",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Workforce & Recruitment Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Talent Sourcing & Permanent Recruitment",
              description: "Full-cycle recruitment with 72-hour shortlist turnaround and 90-day candidate replacement guarantee across Sri Lanka.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Staff Augmentation & Contract Staffing",
              description: "Flexible contractor and temporary workforce solutions for project-based and seasonal business needs in Sri Lanka.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Job Portal for Professionals",
              description: "Connecting verified Sri Lankan job seekers with active career opportunities across key industries.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Candidate Readiness & Advisory",
              description: "Career advisory, CV preparation support, and interview readiness for Sri Lankan professionals.",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      alternateName: "Prime Talents Solutions",
      description: siteConfig.description,
      publisher: {
        "@id": `${siteConfig.url}/#organization`,
      },
      inLanguage: "en-LK",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-slate-50 dark:bg-navy-950 text-slate-800 dark:text-slate-100 antialiased selection:bg-teal-500 selection:text-white">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <ToastProvider>
            <SkipToContent />
            <Navbar />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
            <FloatingWidgets />
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
