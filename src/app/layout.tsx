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
    default: `${siteConfig.name} | Executive Search & HR Outsourcing Sri Lanka`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Colombo's premier HR consultancy for executive search, staff augmentation, turnkey PEO outsourcing, and compliant EPF/ETF payroll management.",
  keywords: [
    "HR consultancy Sri Lanka",
    "Recruitment agency Colombo",
    "Executive search Sri Lanka",
    "HR outsourcing Colombo",
    "PEO Sri Lanka",
    "Employer of Record Sri Lanka",
    "Payroll outsourcing Colombo",
    "EPF ETF compliance Sri Lanka",
    "Talent acquisition South Asia",
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
    title: `${siteConfig.name} | Executive Search & HR Outsourcing Sri Lanka`,
    description: siteConfig.description,
    images: [
      {
        url: "/images/hero-abstract.svg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Connecting Ambition with Opportunity`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Executive Search & HR Outsourcing Sri Lanka`,
    description: siteConfig.description,
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
  "@type": "EmploymentAgency",
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  alternateName: siteConfig.brandName,
  url: siteConfig.url,
  logo: `${siteConfig.url}/images/logo.png`,
  description: siteConfig.description,
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
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:30",
      closes: "17:30",
    },
  ],
  sameAs: [
    siteConfig.socials.linkedin,
    siteConfig.socials.facebook,
    siteConfig.socials.twitter,
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
