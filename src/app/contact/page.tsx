import React from "react";
import { Metadata } from "next";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  ShieldCheck,
  Building2,
} from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Get in Touch With Our Team",
  description:
    "Get in touch with Prime Talents Solutions (Pvt) Ltd. Reach our recruitment, staffing, and candidate support teams in Colombo, Sri Lanka.",
};

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber.replace(
    /[^0-9]/g,
    ""
  )}?text=${encodeURIComponent(
    "Hello Prime Talents Solutions, I would like to make an inquiry."
  )}`;

  return (
    <div className="py-12 md:py-20 space-y-16">
      {/* 1. Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <Badge variant="teal">Get In Touch</Badge>
        <h1 className="text-4xl sm:text-5xl font-black font-heading text-navy-950 dark:text-white tracking-tight">
          Get in Touch With Our Team
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Whether you are hiring for your team, looking for job opportunities, or reaching out about a partnership or media inquiry, we are happy to help.
        </p>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <Card className="p-6 sm:p-10 border-slate-200 dark:border-navy-800 bg-white dark:bg-navy-900 shadow-xl">
              <h2 className="font-heading font-bold text-2xl text-navy-950 dark:text-white mb-2">
                Send Us a Direct Message
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-8">
                Share your details and message below, and our team will get back to you.
              </p>
              <ContactForm />
            </Card>
          </div>

          {/* Right Column: Office & Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="p-8 border-slate-200 dark:border-navy-800 bg-white dark:bg-navy-900 shadow-xl space-y-6">
              <h3 className="font-heading font-bold text-xl text-navy-950 dark:text-white">
                Contact Information
              </h3>

              <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-navy-950 dark:text-white">
                      Location
                    </strong>
                    <span>Colombo, Sri Lanka</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-navy-950 dark:text-white">
                      Direct Telephone &amp; WhatsApp
                    </strong>
                    <a
                      href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                      className="hover:underline font-semibold text-navy-950 dark:text-white"
                    >
                      {siteConfig.contact.phone}
                    </a>
                    <span className="block text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      Hotline &amp; WhatsApp: {siteConfig.contact.hotline}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-navy-950 dark:text-white">
                      Email Inquiries
                    </strong>
                    <div className="space-y-1.5 text-xs mt-1.5">
                      <p>
                        <span className="text-slate-500 dark:text-slate-400 font-medium">General:</span>{" "}
                        <a href="mailto:info@primetalentssolutions.lk" className="text-teal-600 dark:text-teal-400 font-semibold hover:underline">
                          info@primetalentssolutions.lk
                        </a>
                      </p>
                      <p>
                        <span className="text-slate-500 dark:text-slate-400 font-medium">Hiring &amp; Solutions:</span>{" "}
                        <a href="mailto:solutions@primetalentssolutions.lk" className="text-teal-600 dark:text-teal-400 font-semibold hover:underline">
                          solutions@primetalentssolutions.lk
                        </a>
                      </p>
                      <p>
                        <span className="text-slate-500 dark:text-slate-400 font-medium">Job Seekers &amp; Careers:</span>{" "}
                        <a href="mailto:careers@primetalentssolutions.lk" className="text-teal-600 dark:text-teal-400 font-semibold hover:underline">
                          careers@primetalentssolutions.lk
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-navy-950 dark:text-white">
                      Working Hours
                    </strong>
                    <span>{siteConfig.contact.hours}</span>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Link */}
              <div className="pt-2 border-t border-slate-100 dark:border-navy-800">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-[#25D366] text-white font-bold text-sm hover:bg-[#1EBE5D] transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Chat With Us on WhatsApp</span>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

