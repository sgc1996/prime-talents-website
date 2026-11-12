"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Send } from "lucide-react";
import { contactSchema, ContactFormData } from "@/lib/schema";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import { useToast } from "@/components/ui/Toast";

const INQUIRY_OPTIONS = [
  { label: "Select Inquiry Category", value: "" },
  { label: "Employer: Hiring & Talent Search", value: "employer-hiring" },
  { label: "Employer: HR Outsourcing & PEO", value: "employer-peo" },
  { label: "Employer: Payroll & Compliance", value: "employer-payroll" },
  { label: "Job Seeker: Application Status / Portal", value: "candidate-portal" },
  { label: "Corporate Training & Workshops", value: "corporate-training" },
  { label: "Media & Press Inquiries", value: "media-press" },
  { label: "General Business Partnerships", value: "partnerships" },
];

export function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setServerError(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.error || "Failed to deliver message");
      }

      setIsSuccess(true);
      reset();
      toast({
        type: "success",
        title: "Message Delivered",
        description:
          "Our Colombo representative will review your message and reply within 1 business day.",
      });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Failed to submit inquiry.";
      setServerError(msg);
      toast({
        type: "error",
        title: "Error Sending Message",
        description: msg,
      });
    }
  };

  if (isSuccess) {
    return (
      <div className="p-8 sm:p-10 rounded-3xl bg-teal-50 dark:bg-navy-900 border border-teal-500/40 text-center space-y-4 animate-fadeIn">
        <div className="w-14 h-14 rounded-full bg-teal-500/20 text-teal-600 dark:text-teal-400 mx-auto flex items-center justify-center">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h3 className="font-heading font-bold text-xl text-navy-950 dark:text-white">
          Message Received!
        </h3>
        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed max-w-sm mx-auto">
          Thank you for reaching out to Prime Talents Solutions. Our departmental
          specialist will review your message and respond promptly.
        </p>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsSuccess(false)}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {serverError && (
        <div className="p-3.5 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 text-red-600 dark:text-red-400 text-xs">
          {serverError}
        </div>
      )}

      {/* Honeypot field */}
      <input
        type="text"
        {...register("_hp_verify")}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          id="contactFullName"
          label="Your Name *"
          placeholder="e.g. Shanika Fernando"
          error={errors.fullName?.message}
          {...register("fullName")}
        />

        <Input
          id="contactEmail"
          type="email"
          label="Email Address *"
          placeholder="shanika@company.com"
          error={errors.email?.message}
          {...register("email")}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          id="contactPhone"
          label="Contact Number *"
          placeholder="+94 77 123 4567"
          error={errors.phone?.message}
          {...register("phone")}
        />

        <Select
          id="inquiryType"
          label="Inquiry Type *"
          options={INQUIRY_OPTIONS}
          error={errors.inquiryType?.message}
          {...register("inquiryType")}
        />
      </div>

      <Input
        id="contactSubject"
        label="Subject Line *"
        placeholder="Brief summary of your inquiry..."
        error={errors.subject?.message}
        {...register("subject")}
      />

      <Textarea
        id="contactMessage"
        label="Your Message *"
        rows={4}
        placeholder="How can our Colombo team assist your business or career today?"
        error={errors.message?.message}
        {...register("message")}
      />

      <Button
        type="submit"
        variant="primary"
        size="md"
        disabled={isSubmitting}
        className="w-full sm:w-auto font-semibold"
      >
        {isSubmitting ? (
          <span>Sending...</span>
        ) : (
          <span className="flex items-center gap-2">
            <span>Send Inquiry</span>
            <Send className="w-4 h-4" />
          </span>
        )}
      </Button>
    </form>
  );
}

