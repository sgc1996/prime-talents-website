"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Award,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Modal } from "@/components/ui/Modal";
import { EventRegisterForm } from "@/components/forms/EventRegisterForm";

interface EventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  type: "In-Person Masterclass" | "Executive Webinar" | "Certification Workshop";
  fee: string;
  speaker: {
    name: string;
    role: string;
    avatar: string;
  };
  description: string;
  keyTopics: string[];
  seatsLeft: number;
}

const UPCOMING_EVENTS: EventItem[] = [
  {
    id: "labour-law-2025",
    title: "Navigating Sri Lanka Labour Law Reforms & Disciplinary Inquiries",
    date: "March 20, 2025",
    time: "09:00 AM – 04:30 PM (IST)",
    location: "World Trade Center, West Tower (Level 14), Colombo 01",
    type: "In-Person Masterclass",
    fee: "LKR 18,500 / Attendee (Inclusive of Materials & Lunch)",
    speaker: {
      name: "Kavinda Wickramasinghe",
      role: "Director of Labour Compliance & Legal Advisory",
      avatar: "/images/team/avatar-2.svg",
    },
    description:
      "A hands-on, case-study driven masterclass for HR Directors, Legal Counsel, and Business Heads on conducting legally bulletproof domestic inquiries under the Termination of Employment of Workmen Act (TEWA).",
    keyTopics: [
      "Drafting enforceable show-cause letters and charge sheets",
      "Rules of natural justice during domestic inquiries",
      "Calculating statutory severance and gratuity liabilities",
      "Department of Labour conciliation and tribunal navigation",
    ],
    seatsLeft: 8,
  },
  {
    id: "epf-etf-masterclass",
    title: "Sri Lanka EPF, ETF & APIT Statutory Compliance Masterclass",
    date: "April 10, 2025",
    time: "10:00 AM – 01:00 PM (IST)",
    location: "Live Interactive Digital Session (Zoom Executive)",
    type: "Executive Webinar",
    fee: "Complimentary (Invitation for Corporate Payroll Heads)",
    speaker: {
      name: "Dinesh Samarasinghe",
      role: "Managing Director, Prime Talents Solutions",
      avatar: "/images/team/avatar-1.svg",
    },
    description:
      "Step-by-step guidance on automated C-Form remittances, electronic return filing with the Department of Labour, and resolving IRD RAMIS discrepancies for corporate payroll teams.",
    keyTopics: [
      "EPF total earnings definitions and non-contributory components",
      "ETF surcharge mitigation and reconciliation",
      "APIT dynamic tax withholding calculations",
      "Digital audit readiness checklist for 2025/2026",
    ],
    seatsLeft: 14,
  },
  {
    id: "leadership-eq",
    title: "High-Performance Leadership & Strategic Emotional Intelligence (EQ)",
    date: "May 15, 2025",
    time: "09:30 AM – 05:00 PM (IST)",
    location: "Cinnamon Grand Colombo (Atrium Suite)",
    type: "Certification Workshop",
    fee: "LKR 28,000 / Attendee (Certification Awarded)",
    speaker: {
      name: "Dr. Anoma Jayasuriya",
      role: "Principal Workforce Strategist & Leadership Coach",
      avatar: "/images/team/avatar-3.svg",
    },
    description:
      "An intensive retreat for senior managers and executives focused on psychological safety, resolving cross-generational workplace conflict, and accelerating team accountability.",
    keyTopics: [
      "Assessing leadership EQ through psychometric self-discovery",
      "Constructive feedback frameworks for technical talent",
      "Building resilient hybrid team cultures",
      "Managing organizational change and restructuring anxiety",
    ],
    seatsLeft: 5,
  },
];

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  return (
    <div className="space-y-24 py-12 md:py-20">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <Badge variant="teal">Knowledge &amp; Professional Development</Badge>
        <h1 className="text-4xl sm:text-5xl font-black font-heading text-navy-950 dark:text-white tracking-tight">
          Executive Masterclasses &amp; Corporate Training
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Accredited programs led by recognized practitioners designed to equip
          HR leaders, business heads, and executives with practical statutory and leadership skills.
        </p>
      </section>

      {/* Upcoming Events List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy-950 dark:text-white">
            Upcoming Calendar
          </h2>
          <span className="text-xs text-slate-500 font-medium">
            3 High-Impact Sessions Open
          </span>
        </div>

        <div className="space-y-8">
          {UPCOMING_EVENTS.map((event) => (
            <Card
              key={event.id}
              className="p-6 sm:p-8 border-slate-200 dark:border-navy-800 bg-white dark:bg-navy-900 shadow-sm hover:shadow-xl hover:border-teal-500/40 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Event Core Info (8 cols) */}
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge variant="teal">{event.type}</Badge>
                    <span className="text-xs font-semibold text-red-500 bg-red-50 dark:bg-red-950/40 px-2.5 py-0.5 rounded-full border border-red-200 dark:border-red-900">
                      Only {event.seatsLeft} Seats Remaining
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-2xl text-navy-950 dark:text-white">
                    {event.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {event.description}
                  </p>

                  {/* Metadata Chips */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600 dark:text-slate-300 pt-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-teal-600 shrink-0" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-teal-600 shrink-0" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-teal-600 shrink-0" />
                      <span className="truncate">{event.location}</span>
                    </div>
                  </div>

                  {/* Key Topics Covered */}
                  <div className="pt-3">
                    <p className="text-xs uppercase font-bold tracking-wider text-slate-500 mb-2">
                      Key Curriculum Takeaways:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {event.keyTopics.map((topic, tIdx) => (
                        <div
                          key={tIdx}
                          className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 shrink-0 mt-0.5" />
                          <span>{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Speaker & Registration Card (4 cols) */}
                <div className="lg:col-span-4 p-6 rounded-2xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-800 space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-teal-500 shrink-0">
                      <Image
                        src={event.speaker.avatar}
                        alt={event.speaker.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-semibold uppercase">
                        Lead Facilitator
                      </p>
                      <h4 className="font-heading font-bold text-sm text-navy-950 dark:text-white">
                        {event.speaker.name}
                      </h4>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">
                        {event.speaker.role}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-200 dark:border-navy-800">
                    <p className="text-xs text-slate-400">Investment:</p>
                    <p className="text-sm font-bold text-navy-950 dark:text-white">
                      {event.fee}
                    </p>
                  </div>

                  <Button
                    variant="accent"
                    size="md"
                    onClick={() => setSelectedEvent(event)}
                    className="w-full justify-center font-bold shadow-sm"
                  >
                    Register for This Session
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Corporate In-House Inquiries */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-navy-950 text-white border border-teal-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="font-heading font-bold text-2xl">
              Need a Custom In-House Workshop for Your Organization?
            </h3>
            <p className="text-slate-300 text-sm max-w-xl">
              We design and deliver bespoke corporate training programs on-site
              at your premises or offsite retreat.
            </p>
          </div>
          <Button
            variant="accent"
            size="lg"
            onClick={() =>
              setSelectedEvent({
                id: "custom-inhouse-workshop",
                title: "Custom In-House Corporate Training Inquiry",
                date: "Custom Date / Flexible",
                time: "Custom Schedule",
                location: "Client Premises / Hybrid",
                type: "Certification Workshop",
                fee: "Custom Enterprise Quote",
                speaker: {
                  name: "Prime Talents Advisory Faculty",
                  role: "Senior Facilitators",
                  avatar: "/images/team/avatar-1.svg",
                },
                description: "Tailored corporate academy for your enterprise workforce.",
                keyTopics: ["Customized curriculum", "On-site facilitation"],
                seatsLeft: 50,
              })
            }
            className="font-bold shrink-0"
          >
            Request Custom Training Proposal
          </Button>
        </div>
      </section>

      {/* Interactive Registration Modal */}
      {selectedEvent && (
        <Modal
          isOpen={!!selectedEvent}
          onClose={() => setSelectedEvent(null)}
          title="Event Seat Registration"
          description="Complete the form below to receive your delegate pass and official invoice."
        >
          <EventRegisterForm
            eventId={selectedEvent.id}
            eventTitle={selectedEvent.title}
            onSuccessClose={() => setSelectedEvent(null)}
          />
        </Modal>
      )}
    </div>
  );
}

