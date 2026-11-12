import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "accent";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, disabled, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

    const variantStyles = {
      primary:
        "bg-navy-900 text-white hover:bg-navy-800 shadow-sm hover:shadow-md border border-navy-800 dark:bg-teal-500 dark:text-navy-950 dark:hover:bg-teal-400",
      secondary:
        "bg-white text-navy-900 border border-slate-200 hover:bg-slate-50 shadow-sm hover:border-slate-300 dark:bg-navy-800 dark:text-white dark:border-navy-700 dark:hover:bg-navy-700",
      accent:
        "bg-teal-500 text-white hover:bg-teal-600 shadow-md shadow-teal-500/20 hover:shadow-lg hover:shadow-teal-500/30",
      outline:
        "border-2 border-navy-900 text-navy-900 hover:bg-navy-900/5 dark:border-teal-400 dark:text-teal-400 dark:hover:bg-teal-400/10",
      ghost:
        "text-slate-700 hover:bg-slate-100 hover:text-navy-900 dark:text-slate-300 dark:hover:bg-navy-800 dark:hover:text-white",
    };

    const sizeStyles = {
      sm: "text-xs px-3.5 py-1.5 gap-1.5",
      md: "text-sm px-5 py-2.5 gap-2",
      lg: "text-base px-6 py-3.5 gap-2.5",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

