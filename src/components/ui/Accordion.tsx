"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
  className?: string;
}

export function AccordionItem({
  title,
  children,
  isOpen = false,
  onToggle,
  className,
}: AccordionItemProps) {
  return (
    <div
      className={cn(
        "border border-slate-200 dark:border-navy-800 rounded-2xl bg-white dark:bg-navy-900 overflow-hidden transition-all duration-200",
        isOpen && "ring-1 ring-teal-500/30 border-teal-500/40 shadow-sm",
        className
      )}
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full py-5 px-6 text-left flex justify-between items-center gap-4 transition-colors hover:text-teal-600 dark:hover:text-teal-400"
        aria-expanded={isOpen}
      >
        <span className="font-heading font-semibold text-navy-950 dark:text-white text-base md:text-lg">
          {title}
        </span>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-slate-400 transition-transform duration-300 shrink-0",
            isOpen && "transform rotate-180 text-teal-600 dark:text-teal-400"
          )}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-6 pt-1 text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed border-t border-slate-100 dark:border-navy-800/60 animate-fadeIn">
          {children}
        </div>
      )}
    </div>
  );
}

