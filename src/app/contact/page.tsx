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
  title: "Contact Us | Colombo Head Office & Inquiries",
  description:
    "Get in touch with Prime Talents Solutions Pvt Ltd at our World Trade Center Colombo office. Reach our executive search, payroll, and candidate support teams.",
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
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <Badge variant="teal">Get In Touch</Badge>
        <h1 className="text-4xl sm:text-5xl font-black font-heading text-navy-950 dark:text-white tracking-tight">
          We&apos;re Here to Power Your Workforce Growth
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Whether you represent an enterprise seeking top-tier talent, a job seeker
          with questions about our portal, or a journalist requiring industry commentary,
          we look forward to speaking with you.
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
                Complete the inquiry form and our Colombo desk will connect you
                with the relevant practice lead.
              </p>
              <ContactForm />
            </Card>
          </div>

          {/* Right Column: Office Address, Phone & Map (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="p-8 border-slate-200 dark:border-navy-800 bg-white dark:bg-navy-900 shadow-sm space-y-6">
              <h3 className="font-heading font-bold text-xl text-navy-950 dark:text-white">
                Colombo Head Office
              </h3>

              <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-navy-950 dark:text-white">
                      Physical Location
                    </strong>
                    <span>
                      {siteConfig.contact.address.line1},{" "}
                      {siteConfig.contact.address.line2},{" "}
                      {siteConfig.contact.address.city}{" "}
                      {siteConfig.contact.address.postalCode},{" "}
                      {siteConfig.contact.address.country}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-navy-950 dark:text-white">
                      Direct Telephone
                    </strong>
                    <a
                      href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                      className="hover:underline font-semibold"
                    >
                      {siteConfig.contact.phone}
                    </a>
                    <span className="block text-xs text-slate-400 mt-0.5">
                      Hotline: {siteConfig.contact.hotline}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-navy-950 dark:text-white">
                      Email Inquiries
                    </strong>
                    <div className="space-y-0.5 text-xs">
                      <p>
                        General:{" "}
                        <a href={`mailto:${siteConfig.contact.email}`} className="text-teal-600 hover:underline">
                          {siteConfig.contact.email}
                        </a>
                      </p>
                      <p>
                        Clients &amp; Headhunting:{" "}
                        <a href={`mailto:${siteConfig.contact.clientEmail}`} className="text-teal-600 hover:underline">
                          {siteConfig.contact.clientEmail}
                        </a>
                      </p>
                      <p>
                        Job Seekers:{" "}
                        <a href={`mailto:${siteConfig.contact.recruitmentEmail}`} className="text-teal-600 hover:underline">
                          {siteConfig.contact.recruitmentEmail}
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

            {/* Interactive Styled Colombo WTC Map Graphic */}
            <Card className="overflow-hidden border-slate-200 dark:border-navy-800 bg-slate-100 dark:bg-navy-900 shadow-sm">
              <div className="p-4 bg-navy-950 text-white flex items-center justify-between text-xs">
                <span className="flex items-center gap-1.5 font-bold">
                  <Building2 className="w-4 h-4 text-teal-400" />
                  World Trade Center Colombo (Fort)
                </span>
                <span className="text-teal-400 font-mono text-[10px]">6.9333° N, 79.8433° E</span>
              </div>
              <div className="relative h-48 w-full bg-slate-200 dark:bg-navy-950 flex flex-col items-center justify-center text-center p-6 space-y-2">
                <div className="w-10 h-10 rounded-full bg-teal-500/20 text-teal-600 dark:text-teal-400 flex items-center justify-center animate-bounce">
                  <MapPin className="w-6 h-6" />
                </div>
                <h4 className="font-heading font-bold text-sm text-navy-950 dark:text-white">
                  Prime Talents Solutions Executive Office
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs">
                  Level 14, West Tower, World Trade Center, Colombo 01, Sri Lanka
                </p>
                <a
                  href="https://maps.google.com/?q=World+Trade+Center+Colombo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-bold text-teal-600 dark:text-teal-400 hover:underline pt-1"
                >
                  Open in Google Maps →
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

