"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Phone,
  Mail,
  Menu,
  X,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Info Bar */}
      <div className="bg-navy-950 text-slate-300 text-xs py-2 px-4 sm:px-8 border-b border-navy-900 hidden sm:block">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-2 hover:text-teal-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-teal-400" />
              <span>{siteConfig.contact.phone}</span>
            </a>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center gap-2 hover:text-teal-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-teal-400" />
              <span>{siteConfig.contact.email}</span>
            </a>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
              Department of Labour Accredited (Sri Lanka)
            </span>
            <span className="text-slate-600">|</span>
            <span>{siteConfig.contact.hours}</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={cn(
          "w-full transition-all duration-300 px-4 sm:px-8",
          isScrolled
            ? "bg-white/95 dark:bg-navy-950/95 backdrop-blur-md shadow-md py-3 border-b border-slate-200/80 dark:border-navy-800"
            : "bg-white dark:bg-navy-900 py-4 border-b border-slate-100 dark:border-navy-800"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-10 w-10 sm:h-11 sm:w-11 shrink-0 rounded-xl overflow-hidden bg-slate-50 dark:bg-navy-800 border border-slate-200/80 dark:border-navy-700/80 p-1 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
              <Image
                src="/images/logo.png"
                alt={`${siteConfig.name} Logo`}
                width={44}
                height={44}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-base sm:text-lg leading-tight text-navy-950 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                {siteConfig.name}
              </span>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400">
                Workforce Solutions • Colombo
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {siteConfig.navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-teal-600 dark:hover:text-teal-400 relative py-1",
                    isActive
                      ? "text-teal-600 dark:text-teal-400 font-semibold"
                      : "text-slate-700 dark:text-slate-300"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-500 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs & Controls */}
          <div className="hidden sm:flex items-center gap-3">
            <ThemeToggle />

            {/* Secondary CTA: Job Portal */}
            <a
              href={siteConfig.jobPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-navy-800 hover:bg-slate-200 dark:hover:bg-navy-700 transition-colors border border-slate-200 dark:border-navy-700"
            >
              <span>Visit Job Portal</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
            </a>

            {/* Primary CTA: Book Appointment */}
            <Link href="/appointment">
              <Button variant="accent" size="sm" className="font-semibold shadow-sm">
                Book an Appointment
              </Button>
            </Link>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-navy-800 transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Slide-Down Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[73px] sm:top-[105px] bg-white dark:bg-navy-950 border-b border-slate-200 dark:border-navy-800 shadow-2xl p-6 transition-all duration-300 z-50 max-h-[85vh] overflow-y-auto">
          {/* Mobile Contact Quick-Row */}
          <div className="sm:hidden mb-5 p-3 rounded-xl bg-slate-50 dark:bg-navy-900 border border-slate-200 dark:border-navy-800 space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
            <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`} className="flex items-center gap-2 text-teal-600 dark:text-teal-400 font-medium">
              <Phone className="w-3.5 h-3.5" />
              {siteConfig.contact.phone}
            </a>
            <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              {siteConfig.contact.email}
            </a>
          </div>

          <nav className="flex flex-col space-y-2">
            {siteConfig.navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center justify-between p-3 rounded-xl text-base font-medium transition-colors",
                    isActive
                      ? "bg-teal-50 dark:bg-navy-800 text-teal-600 dark:text-teal-400 font-semibold"
                      : "text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-navy-900"
                  )}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>
              );
            })}
          </nav>

          <div className="pt-6 mt-6 border-t border-slate-200 dark:border-navy-800 space-y-3">
            <Link
              href="/appointment"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full"
            >
              <Button variant="accent" className="w-full justify-center py-3 text-base font-semibold">
                Book an Appointment
              </Button>
            </Link>

            <a
              href={siteConfig.jobPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl border border-slate-300 dark:border-navy-700 text-slate-800 dark:text-slate-200 font-semibold text-sm hover:bg-slate-50 dark:hover:bg-navy-800 transition-colors"
            >
              <span>Visit Job Portal</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

