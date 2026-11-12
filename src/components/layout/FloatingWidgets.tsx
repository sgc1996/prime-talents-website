"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { ChatbotWidget } from "@/components/ui/ChatbotWidget";

export function FloatingWidgets() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber.replace(
    /[^0-9]/g,
    ""
  )}?text=${encodeURIComponent(
    "Hello Prime Talents Solutions Pvt Ltd, I would like to inquire about your recruitment and HR services."
  )}`;

  return (
    <>
      {/* Floating WhatsApp Action Button (positioned left of chatbot on desktop, or above on mobile) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-24 sm:right-48 z-40 flex items-center gap-2 px-3.5 py-3 rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#1EBE5D] hover:scale-105 transition-all duration-300 font-semibold text-xs sm:text-sm"
        aria-label="Chat with Prime Talents Solutions on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>

      {/* Interactive AI / FAQ Chatbot Widget */}
      <ChatbotWidget />
    </>
  );
}

