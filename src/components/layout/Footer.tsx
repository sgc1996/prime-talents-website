"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  Linkedin,
  Facebook,
  Twitter,
  Instagram,
  CheckCircle2,
} from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setLoading(true);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setIsSubscribed(true);
        setEmail("");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-slate-300 pt-16 pb-12 border-t border-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-navy-800">
          {/* Column 1: Brand & Bio (2 cols wide on LG) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative h-10 w-10 sm:h-11 sm:w-11 shrink-0 rounded-xl overflow-hidden bg-white/10 p-1 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                <Image
                  src="/images/logo.png"
                  alt={`${siteConfig.name} Logo`}
                  width={44}
                  height={44}
                  style={{ width: "100%", height: "100%", objectFit: "contain" }}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg text-white group-hover:text-teal-400 transition-colors">
                  {siteConfig.name}
                </span>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-teal-400">
                  Workforce &amp; HR Solutions • Sri Lanka
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Sri Lanka&apos;s outcome-focused human capital consultancy. We bridge
              enterprises with exceptional executive talent, compliant payroll
              infrastructure, and turnkey PEO outsourcing solutions.
            </p>

            <div className="pt-2">
              <p className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-2">
                Connect With Us
              </p>
              <div className="flex items-center gap-3">
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-navy-900 border border-navy-800 flex items-center justify-center text-slate-300 hover:text-teal-400 hover:border-teal-500/50 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-navy-900 border border-navy-800 flex items-center justify-center text-slate-300 hover:text-teal-400 hover:border-teal-500/50 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-navy-900 border border-navy-800 flex items-center justify-center text-slate-300 hover:text-teal-400 hover:border-teal-500/50 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-navy-900 border border-navy-800 flex items-center justify-center text-slate-300 hover:text-teal-400 hover:border-teal-500/50 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Overview Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Overview
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-teal-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-teal-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-teal-400 transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-teal-400 transition-colors">
                  Industry Insights
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-teal-400 transition-colors">
                  Events & Training
                </Link>
              </li>
              <li>
                <Link href="/media" className="hover:text-teal-400 transition-colors">
                  Media & Press
                </Link>
              </li>
              <li>
                <Link href="/appointment" className="text-teal-400 font-semibold hover:underline">
                  Book an Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Information & Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Information
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services#recruitment" className="hover:text-teal-400 transition-colors">
                  Executive Search
                </Link>
              </li>
              <li>
                <a
                  href={siteConfig.jobPortalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-400 transition-colors"
                >
                  Visit Job Portal
                </a>
              </li>
              <li>
                <Link href="/services#outsourcing" className="hover:text-teal-400 transition-colors">
                  HR Outsourcing & PEO
                </Link>
              </li>
              <li>
                <Link href="/services#training" className="hover:text-teal-400 transition-colors">
                  Corporate Training
                </Link>
              </li>
              <li>
                <Link href="/services#payroll" className="hover:text-teal-400 transition-colors">
                  Payroll & EPF/ETF
                </Link>
              </li>
              <li>
                <Link href="/services#consultancy" className="hover:text-teal-400 transition-colors">
                  HR Consultancy
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-teal-400 transition-colors">
                  FAQ & Guidance
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Colombo Head Office & Newsletter */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Colombo Head Office
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>
                  {siteConfig.contact.address.line1}, {siteConfig.contact.address.line2},{" "}
                  {siteConfig.contact.address.city} {siteConfig.contact.address.postalCode},{" "}
                  {siteConfig.contact.address.country}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-teal-400 shrink-0" />
                <span>{siteConfig.contact.hours}</span>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="pt-2">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                HR Market Intelligence
              </h5>
              {isSubscribed ? (
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Subscribed! Check your inbox for updates.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Work email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-3 py-2 rounded-xl text-xs bg-navy-900 border border-navy-800 text-white placeholder:text-slate-500 focus:outline-none focus:border-teal-500"
                  />
                  <Button
                    type="submit"
                    variant="accent"
                    size="sm"
                    disabled={loading}
                    className="px-3"
                    aria-label="Subscribe to newsletter"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Working Legal Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} {siteConfig.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-teal-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-teal-400 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/contact" className="hover:text-teal-400 transition-colors">
              Contact Desk
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

