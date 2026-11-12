import React from "react";
import { getAllPosts } from "@/lib/blog";
import { HeroSection } from "@/components/sections/HeroSection";
import { ClientMarquee } from "@/components/sections/ClientMarquee";
import { StatsCounter } from "@/components/sections/StatsCounter";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { ConsultancyGrid } from "@/components/sections/ConsultancyGrid";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonials } from "@/components/sections/Testimonials";
import { LatestInsights } from "@/components/sections/LatestInsights";
import { FinalCtaBanner } from "@/components/sections/FinalCtaBanner";

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* 2. Hero Section */}
      <HeroSection />

      {/* 3. Trusted-by Logo Marquee */}
      <ClientMarquee />

      {/* 4. Animated Stats Counters with SSR Fallback */}
      <StatsCounter />

      {/* 5. Services Overview: 4 Alternating Blocks + Payroll Block */}
      <ServicesOverview />

      {/* 6. HR Consultancy Grid: 8 Outcome-Focused Cards */}
      <ConsultancyGrid />

      {/* 7. Why Choose Us: 6 Value Pillars */}
      <WhyChooseUs />

      {/* 8. How It Works: 4-Step Process Timeline */}
      <HowItWorks />

      {/* 9. Testimonials Carousel */}
      <Testimonials />

      {/* 10. Latest Insights: 3 MDX Thought Leadership Cards */}
      <LatestInsights posts={posts} />

      {/* 11. Final CTA Banner */}
      <FinalCtaBanner />
    </>
  );
}

