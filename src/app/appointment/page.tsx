import React from "react";
import { Metadata } from "next";
import {
  ShieldCheck,
  Clock,
  CalendarCheck,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { AppointmentForm } from "@/components/forms/AppointmentForm";

export const metadata: Metadata = {
  title: "Book an Appointment | Schedule an Executive HR Consultation",
  description:
    "Schedule a confidential workforce advisory session with a senior partner at Prime Talents Solutions Pvt Ltd in Colombo, Sri Lanka.",
};

export default function AppointmentPage() {
  return (
    <div className="py-12 md:py-20 space-y-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <Badge variant="teal">Confidential Consultation</Badge>
        <h1 className="text-4xl sm:text-5xl font-black font-heading text-navy-950 dark:text-white tracking-tight">
          Book an Executive Consultation
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Schedule a direct advisory session with our senior talent acquisition
          and statutory payroll partners at our Colombo office or via secure video conference.
        </p>
      </section>

      {/* Main Form Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Form (7 cols) */}
          <div className="lg:col-span-7">
            <Card className="p-6 sm:p-10 border-slate-200 dark:border-navy-800 bg-white dark:bg-navy-900 shadow-xl">
              <h2 className="font-heading font-bold text-2xl text-navy-950 dark:text-white mb-2">
                Consultation Request Form
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-8">
                Please complete the details below. Our partner desk will confirm your
                preferred slot within two business hours.
              </p>
              <AppointmentForm />
            </Card>
          </div>

          {/* Right Column: Trust Signals & Direct Contacts (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="p-8 border-slate-200 dark:border-navy-800 bg-slate-50 dark:bg-navy-900 space-y-6">
              <h3 className="font-heading font-bold text-xl text-navy-950 dark:text-white">
                What to Expect
              </h3>

              <div className="space-y-4 text-sm text-slate-700 dark:text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-navy-950 dark:text-white">
                      Fast 2-Hour Confirmation
                    </strong>
                    <span className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      Our Colombo practice head personally reviews your brief and
                      confirms the calendar invitation.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-navy-950 dark:text-white">
                      Strict Non-Disclosure Guarantee
                    </strong>
                    <span className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      All headhunting briefs and organizational restructuring discussions
                      remain strictly privileged under mutual NDA.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0 mt-0.5">
                    <CalendarCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-navy-950 dark:text-white">
                      Tailored Action Plan
                    </strong>
                    <span className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      You receive a concrete hiring roadmap, salary benchmark range,
                      or payroll compliance audit summary following the call.
                    </span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Direct Line Card */}
            <Card className="p-8 border-slate-200 dark:border-navy-800 bg-white dark:bg-navy-900 space-y-4">
              <h3 className="font-heading font-bold text-lg text-navy-950 dark:text-white">
                Urgent Consultation Required?
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                If you have an immediate C-suite vacancy or statutory inquiry,
                reach our executive desk directly via phone or WhatsApp.
              </p>
              <div className="space-y-2.5 pt-2 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-teal-600" />
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                    className="font-bold text-navy-900 dark:text-white hover:underline"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-teal-600" />
                  <a
                    href={`mailto:${siteConfig.contact.clientEmail}`}
                    className="hover:underline"
                  >
                    {siteConfig.contact.clientEmail}
                  </a>
                </div>
                <div className="flex items-start gap-2 pt-1">
                  <MapPin className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>
                    Level 14, West Tower, World Trade Center, Echelon Square, Colombo 01
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

