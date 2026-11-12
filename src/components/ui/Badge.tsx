import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "teal" | "outline" | "navy";
}

export function Badge({
  className,
  variant = "default",
  children,
  ...props
}: BadgeProps) {
  const styles = {
    default:
      "bg-slate-100 text-slate-800 dark:bg-navy-800 dark:text-slate-200 border-slate-200 dark:border-navy-700",
    teal: "bg-teal-50 text-teal-700 dark:bg-teal-950/60 dark:text-teal-300 border-teal-200/80 dark:border-teal-800",
    navy: "bg-navy-900 text-white dark:bg-navy-800 dark:text-teal-400 border-navy-800 dark:border-navy-700",
    outline:
      "bg-transparent text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border transition-colors",
        styles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

