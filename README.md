# Prime Talents Solutions Pvt Ltd — Corporate Website & Talent Portal

A modern, production-grade corporate web application built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion** for **Prime Talents Solutions Pvt Ltd**, based in Colombo, Sri Lanka.

Designed for high-conversion B2B lead generation (executive search, payroll outsourcing, PEO/EOR, corporate training) and serves as the gateway to the candidate career job portal.

---

## 🚀 Key Features

- **Strict Section Ordering**: All 12 homepage sections crafted in sequence with original, realistic copy and zero lorem ipsum.
- **SSR-Safe Numeric Counters**: Animated statistics with hardcoded fallback markup for instant rendering even before JS hydration.
- **11 Production Routes**:
  - `Home (/)`
  - `About (/about)`
  - `Services (/services)` with interactive anchor navigation: `#recruitment`, `#job-portal`, `#outsourcing`, `#training`, `#payroll`, `#consultancy`
  - `Industry Insights (/blog, /blog/[slug])` powered by local MDX articles
  - `Events & Training (/events)` with calendar & interactive modal registration
  - `Media & Press (/media)` with downloadable brand assets
  - `Book an Appointment (/appointment)` with multi-step validated booking
  - `Contact (/contact)` with departmental channels & Colombo WTC office map
  - `FAQ (/faq)` with real-time keyword search & accessible accordions
  - `Privacy Policy (/privacy)` & `Terms & Conditions (/terms)` compliant with Sri Lanka's Personal Data Protection Act No. 9 of 2022 (PDPA)
  - `Custom 404 Page (/not-found)`
- **Forms & Anti-Spam**:
  - Validated via **Zod** + **React Hook Form**
  - Invisible honeypot spam protection (`_hp_verify`)
  - Configurable email notification dispatcher (Resend, Nodemailer SMTP, or mock logger)
- **Interactive Widgets**:
  - Floating WhatsApp action button linking directly to Colombo desk
  - Floating FAQ / AI Chatbot Assistant with canned answers and structured intent routing
  - Dark / Light mode toggle with persistent theme tokens
  - Sri Lanka local SEO metadata, Open Graph cards, dynamic `sitemap.xml`, `robots.txt`, and rich `EmploymentAgency` & `Article` JSON-LD schemas.

---

## 🛠 Tech Stack

- **Framework**: Next.js 14.2+ (App Router)
- **Language**: TypeScript 5.6+
- **Styling**: Tailwind CSS 3.4+ with custom CSS design tokens
- **Typography**: Inter (Body) + Plus Jakarta Sans (Headings) via `next/font`
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **Animations**: Framer Motion
- **Markdown / CMS**: gray-matter for local MDX parsing
- **Themes**: next-themes

---

## 📦 Getting Started

### 1. Prerequisites
- Node.js 18.18+ or 20+ (tested on Node.js v24)
- npm or pnpm

### 2. Installation
```bash
# Clone the repository
git clone <repo-url>
cd "Prime Talents Solutions (Pvt) Ltd Website"

# Install dependencies
npm install
```

### 3. Environment Configuration
Copy the `.env.example` file to create `.env.local`:
```bash
cp .env.example .env.local
```

Configure your environment variables:
```env
# Application URLs
NEXT_PUBLIC_SITE_URL=https://primetalents.lk
NEXT_PUBLIC_COMPANY_NAME="Prime Talents Solutions Pvt Ltd"
NEXT_PUBLIC_BRAND_NAME="Prime Talents Solutions"
NEXT_PUBLIC_JOB_PORTAL_URL=https://jobs.primetalents.lk

# Direct Contact
NEXT_PUBLIC_WHATSAPP_NUMBER=+94771234567
NEXT_PUBLIC_CONTACT_PHONE="+94 11 234 5678"
NEXT_PUBLIC_CONTACT_EMAIL=info@primetalents.lk

# Email Dispatch Provider ('resend', 'nodemailer', or 'mock')
EMAIL_PROVIDER=mock
ADMIN_NOTIFICATION_EMAIL=leads@primetalents.lk
```

### 4. Running the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Production Build
```bash
npm run build
npm start
```

---

## 🎨 How to Customize for Your Business

Everything is centralized so you can customize the entire site in minutes:

### 1. Company Name & Contact Info
Modify `src/lib/constants.ts`:
- Update `siteConfig.name`, `legalName`, and `brandName`.
- Update `siteConfig.contact.phone`, `email`, and `address`.
- Update `siteConfig.socials` links.

### 2. Job Portal Target URL
In `.env.local`, set:
```env
NEXT_PUBLIC_JOB_PORTAL_URL="https://your-custom-job-board.com"
```
Every "Visit Job Portal" button across the navbar, hero, services, and footer will automatically link to this address.

### 3. Colors & Branding
Modify the CSS tokens in `src/app/globals.css`:
- `--primary`: Deep Navy tone (`#0b1f3a`)
- `--accent`: Emerald/Teal highlight (`#14b8a6`)
- `--background`: Off-white canvas (`#f8fafc`)

### 4. Adding Blog Articles
Simply add a `.mdx` or `.md` file to the `content/blog/` directory with frontmatter:
```yaml
---
title: "Your Article Title"
description: "Short summary..."
date: "2025-02-01"
author:
  name: "Author Name"
  role: "Title"
  avatar: "/images/team/avatar-1.svg"
category: "Talent Trends"
tags: ["Recruitment", "HR"]
coverImage: "/images/services/recruitment.svg"
---

# Your Article Content
```
The blog index (`/blog`), dynamic reader (`/blog/[slug]`), and dynamic sitemap will automatically index the new post.

---

## 🚢 Deploying to Vercel

1. Push your repository to GitHub, GitLab, or Bitbucket.
2. Import the project in [Vercel](https://vercel.com/new).
3. Under **Environment Variables**, add the keys defined in `.env.example`.
4. Click **Deploy**. Next.js App Router will generate all static pages and dynamic routes automatically.

---

## 📄 License & Compliance

© 2025 Prime Talents Solutions (Pvt) Ltd. All rights reserved.
Built in compliance with Sri Lanka Department of Labour standards and Personal Data Protection Act (PDPA) No. 9 of 2022.

