"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, User, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface ChatMessage {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: string;
  actions?: { label: string; href?: string; query?: string }[];
}

const CANNED_QUESTIONS = [
  {
    q: "How do I submit my CV for job openings?",
    a: "You can easily upload your CV to our dedicated Job Seeker Portal. Our recruitment team reviews every profile against active corporate openings in Sri Lanka and abroad.",
    link: siteConfig.jobPortalUrl,
    linkLabel: "Visit Job Portal",
  },
  {
    q: "What are your employer recruitment fees?",
    a: "We operate primarily on a success-fee model for permanent placements (no upfront cost until your candidate starts), with retained search models for C-suite executive roles. We also offer fixed-rate monthly PEO/EOR arrangements.",
    link: "/appointment",
    linkLabel: "Book a Consultation",
  },
  {
    q: "Do you handle Sri Lankan EPF, ETF & APIT payroll?",
    a: "Yes! Our payroll desk manages end-to-end statutory calculations, monthly C-Form electronic submissions, ETF remittances, and IRD RAMIS-compliant APIT tax withholding with 100% audit protection.",
    link: "/services#payroll",
    linkLabel: "Explore Payroll Services",
  },
  {
    q: "What is your typical placement turnaround time?",
    a: "For standard technical and managerial positions, our consultants present a curated shortlist within 72 hours. From brief to final offer typically takes 10 to 14 business days.",
    link: "/appointment",
    linkLabel: "Request Talent Today",
  },
];

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "initial",
      sender: "bot",
      text: "Hello! Welcome to Prime Talents Solutions Pvt Ltd. How can we assist your talent or career goals today?",
      timestamp: "Just now",
      actions: [
        { label: "Employers: Hire Talent", href: "/appointment" },
        { label: "Job Seekers: Browse Jobs", href: siteConfig.jobPortalUrl },
      ],
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputValue.trim();
    if (!text) return;

    const userMessage: ChatMessage = {
      id: Math.random().toString(36).substring(7),
      sender: "user",
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInputValue("");
    setIsTyping(true);

    // Simulate intelligent response
    setTimeout(() => {
      let botResponse =
        "Thank you for reaching out! Our team in Colombo is happy to assist. For detailed inquiries, you can book an appointment or speak with our HR specialists directly.";
      let actions: { label: string; href?: string; query?: string }[] = [
        { label: "Book an Appointment", href: "/appointment" },
        { label: "Contact Us", href: "/contact" },
      ];

      const lower = text.toLowerCase();
      const match = CANNED_QUESTIONS.find((item) =>
        lower.includes(item.q.toLowerCase().substring(0, 15))
      );

      if (match) {
        botResponse = match.a;
        if (match.link) {
          actions = [{ label: match.linkLabel, href: match.link }];
        }
      } else if (lower.includes("cv") || lower.includes("job") || lower.includes("career")) {
        botResponse =
          "If you're seeking your next career step, visit our candidate portal to view live openings across Sri Lanka and submit your resume.";
        actions = [{ label: "Visit Job Portal", href: siteConfig.jobPortalUrl }];
      } else if (lower.includes("payroll") || lower.includes("epf") || lower.includes("tax")) {
        botResponse =
          "We offer comprehensive payroll outsourcing covering EPF, ETF, and APIT compliance under Sri Lankan labour law.";
        actions = [{ label: "View Payroll Solutions", href: "/services#payroll" }];
      } else if (lower.includes("fee") || lower.includes("cost") || lower.includes("price") || lower.includes("hire")) {
        botResponse =
          "We provide customized engagement models tailored to your hiring volume and organizational size.";
        actions = [{ label: "Schedule a Discussion", href: "/appointment" }];
      }

      setMessages((prev) => [
        ...prev,
        {
          id: Math.random().toString(36).substring(7),
          sender: "bot",
          text: botResponse,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          actions,
        },
      ]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center gap-2.5 px-4 py-3 bg-navy-900 text-white rounded-full shadow-2xl hover:bg-navy-800 border border-teal-500/40 hover:scale-105 transition-all duration-300 dark:bg-teal-500 dark:text-navy-950 dark:hover:bg-teal-400"
          aria-label="Open HR Assistant chat"
        >
          <div className="relative">
            <MessageSquare className="w-5 h-5 text-teal-400 dark:text-navy-950 group-hover:rotate-6 transition-transform" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-teal-400 rounded-full animate-ping" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-teal-400 rounded-full" />
          </div>
          <span className="text-sm font-semibold tracking-wide">HR Assistant</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="HR Assistant Chat Window"
          className="w-[92vw] sm:w-[380px] h-[520px] max-h-[85vh] bg-white dark:bg-navy-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-navy-800 flex flex-col overflow-hidden animate-fadeIn"
        >
          {/* Header */}
          <div className="px-5 py-4 bg-navy-950 text-white flex items-center justify-between border-b border-navy-800">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-teal-500/20 border border-teal-400/40 flex items-center justify-center text-teal-400">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold flex items-center gap-1.5">
                  Prime Talents AI Assistant
                  <Sparkles className="w-3.5 h-3.5 text-teal-400" />
                </h4>
                <p className="text-[11px] text-teal-300 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
                  Online • Colombo Desk
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-navy-800 transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-slate-50/50 dark:bg-navy-950/60 text-sm">
            {messages.map((m) => (
              <div
                key={m.id}
                className={cn(
                  "flex gap-2.5 items-end",
                  m.sender === "user" ? "justify-end" : "justify-start"
                )}
              >
                {m.sender === "bot" && (
                  <div className="w-6 h-6 rounded-full bg-navy-900 text-teal-400 flex items-center justify-center shrink-0 mb-1 text-xs">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}
                <div
                  className={cn(
                    "max-w-[80%] rounded-2xl p-3.5 shadow-sm text-xs md:text-sm leading-relaxed",
                    m.sender === "user"
                      ? "bg-navy-900 text-white dark:bg-teal-500 dark:text-navy-950 rounded-br-xs"
                      : "bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 text-slate-800 dark:text-slate-100 rounded-bl-xs"
                  )}
                >
                  <p>{m.text}</p>
                  {m.actions && m.actions.length > 0 && (
                    <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-navy-800 flex flex-wrap gap-1.5">
                      {m.actions.map((act, idx) => (
                        <Link
                          key={idx}
                          href={act.href || "#"}
                          onClick={() => {
                            if (act.href?.startsWith("http")) return;
                            setIsOpen(false);
                          }}
                          target={act.href?.startsWith("http") ? "_blank" : undefined}
                          rel={act.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-teal-50 dark:bg-navy-800 text-teal-700 dark:text-teal-300 text-[11px] font-semibold hover:bg-teal-100 dark:hover:bg-navy-700 transition-colors"
                        >
                          {act.label}
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      ))}
                    </div>
                  )}
                  <span className="block text-[10px] text-slate-400 dark:text-slate-500 text-right mt-1">
                    {m.timestamp}
                  </span>
                </div>
                {m.sender === "user" && (
                  <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-navy-800 text-slate-600 dark:text-slate-300 flex items-center justify-center shrink-0 mb-1 text-xs">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2 items-center text-slate-400 text-xs pl-8">
                <span className="w-2 h-2 rounded-full bg-teal-500 animate-bounce" />
                <span className="w-2 h-2 rounded-full bg-teal-500 animate-bounce [animation-delay:0.2s]" />
                <span className="w-2 h-2 rounded-full bg-teal-500 animate-bounce [animation-delay:0.4s]" />
                <span className="text-[11px] text-slate-400 ml-1">Assistant is typing...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick FAQ Chips */}
          <div className="px-3 py-2 bg-white dark:bg-navy-900 border-t border-slate-100 dark:border-navy-800/80 overflow-x-auto flex gap-1.5 no-scrollbar">
            {CANNED_QUESTIONS.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(item.q)}
                className="shrink-0 text-[11px] px-2.5 py-1 rounded-full bg-slate-100 dark:bg-navy-800 text-slate-700 dark:text-slate-300 hover:bg-teal-50 hover:text-teal-700 dark:hover:bg-navy-700 transition-colors border border-slate-200/60 dark:border-navy-700"
              >
                {item.q.length > 28 ? item.q.substring(0, 28) + "..." : item.q}
              </button>
            ))}
          </div>

          {/* Input Footer */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-white dark:bg-navy-900 border-t border-slate-200 dark:border-navy-800 flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Type your question..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1 px-3.5 py-2 text-xs md:text-sm bg-slate-100 dark:bg-navy-950 rounded-xl border border-transparent focus:outline-none focus:border-teal-500 dark:text-white"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="p-2 rounded-xl bg-navy-900 text-white hover:bg-navy-800 dark:bg-teal-500 dark:text-navy-950 disabled:opacity-40 transition-colors"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

