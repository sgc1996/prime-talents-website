"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Send, Calendar, Clock, Building, User, Mail, Phone, Briefcase } from "lucide-react";
import { appointmentSchema, AppointmentFormData } from "@/lib/schema";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import { useToast } from "@/components/ui/Toast";

const SERVICE_OPTIONS = [
  { label: "Select Service Required", value: "" },
  { label: "Executive Search & Leadership Hiring", value: "executive-search" },
  { label: "HR Outsourcing (HRO & PEO Services)", value: "hr-outsourcing" },
  { label: "Sri Lankan Payroll & EPF/ETF Compliance", value: "payroll-compliance" },
  { label: "Corporate Training & Leadership Development", value: "corporate-training" },
  { label: "Workforce Architecture & HR Consultancy", value: "hr-consultancy" },
  { label: "Employer of Record (EOR) for Overseas Firm", value: "eor-overseas" },
];

const TIME_OPTIONS = [
  { label: "Select Time Window", value: "" },
  { label: "Morning: 09:30 AM – 11:30 AM (IST)", value: "morning" },
  { label: "Midday: 11:30 AM – 01:30 PM (IST)", value: "midday" },
  { label: "Afternoon: 02:00 PM – 04:00 PM (IST)", value: "afternoon" },
  { label: "Late Afternoon: 04:00 PM – 05:30 PM (IST)", value: "late-afternoon" },
];

const COMPANY_SIZE_OPTIONS = [
  { label: "Select Organization Size", value: "" },
  { label: "1 – 15 Employees (Startup / Boutique)", value: "1-15" },
  { label: "16 – 50 Employees (Growth Scaleup)", value: "16-50" },
  { label: "51 – 250 Employees (Mid-Market)", value: "51-250" },
  { label: "250+ Employees (Enterprise / Conglomerate)", value: "250+" },
];

export function AppointmentForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
  });

  const onSubmit = async (data: AppointmentFormData) => {
    setServerError(null);
    try {
      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.error || "Failed to submit booking request");
      }

      setIsSuccess(true);
      reset();
      toast({
        type: "success",
        title: "Appointment Request Received!",
        description:
          "Our senior advisory partner will confirm your consultation slot within 2 business hours.",
      });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "An unexpected error occurred.";
      setServerError(msg);
      toast({
        type: "error",
        title: "Submission Failed",
        description: msg,
      });
    }
  };

  if (isSuccess) {
    return (
      <div className="p-8 sm:p-12 rounded-3xl bg-teal-50 dark:bg-navy-900 border border-teal-500/40 text-center space-y-4 animate-fadeIn">
        <div className="w-16 h-16 rounded-full bg-teal-500/20 text-teal-600 dark:text-teal-400 mx-auto flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="font-heading font-bold text-2xl text-navy-950 dark:text-white">
          Appointment Scheduled!
        </h3>
        <p className="text-slate-600 dark:text-slate-300 max-w-md mx-auto text-sm sm:text-base leading-relaxed">
          Thank you for trusting Prime Talents Solutions. A calendar invite and
          meeting agenda will be dispatched to your work email shortly.
        </p>
        <div className="pt-2">
          <Button
            variant="outline"
            onClick={() => setIsSuccess(false)}
            className="text-xs"
          >
            Schedule Another Consultation
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {serverError && (
        <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 text-red-600 dark:text-red-400 text-xs sm:text-sm">
          {serverError}
        </div>
      )}

      {/* Honeypot Spam Protection Field - Hidden from humans */}
      <input
        type="text"
        {...register("_hp_verify")}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Input
          id="fullName"
          label="Full Name *"
          placeholder="e.g. Priyantha Jayawardena"
          error={errors.fullName?.message}
          {...register("fullName")}
        />

        <Input
          id="email"
          type="email"
          label="Work Email Address *"
          placeholder="priyantha@enterprise.lk"
          error={errors.email?.message}
          {...register("email")}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Input
          id="phone"
          label="Phone Number (with Country Code) *"
          placeholder="+94 77 123 4567"
          error={errors.phone?.message}
          {...register("phone")}
        />

        <Input
          id="company"
          label="Company / Enterprise Name *"
          placeholder="e.g. Ceylon Logistics PLC"
          error={errors.company?.message}
          {...register("company")}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Select
          id="service"
          label="Service Needed *"
          options={SERVICE_OPTIONS}
          error={errors.service?.message}
          {...register("service")}
        />

        <Select
          id="companySize"
          label="Organization Size"
          options={COMPANY_SIZE_OPTIONS}
          error={errors.companySize?.message}
          {...register("companySize")}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Input
          id="preferredDate"
          type="date"
          label="Preferred Date *"
          min={new Date().toISOString().split("T")[0]}
          error={errors.preferredDate?.message}
          {...register("preferredDate")}
        />

        <Select
          id="preferredTime"
          label="Preferred Time Window *"
          options={TIME_OPTIONS}
          error={errors.preferredTime?.message}
          {...register("preferredTime")}
        />
      </div>

      <Textarea
        id="message"
        label="Workforce Objectives / Challenge Overview *"
        placeholder="Briefly describe the key roles, challenges, or headcount timeline you would like to address during our consultation..."
        rows={4}
        error={errors.message?.message}
        {...register("message")}
      />

      <div className="pt-2">
        <Button
          type="submit"
          variant="accent"
          size="lg"
          disabled={isSubmitting}
          className="w-full sm:w-auto font-bold text-base shadow-md"
        >
          {isSubmitting ? (
            <span>Securing Appointment...</span>
          ) : (
            <span className="flex items-center gap-2">
              <span>Confirm Consultation Request</span>
              <Send className="w-4 h-4" />
            </span>
          )}
        </Button>
      </div>

      <p className="text-xs text-slate-500 dark:text-slate-400">
        Strict confidentiality guaranteed. We respect your corporate privacy under
        the Sri Lanka Personal Data Protection Act No. 9 of 2022.
      </p>
    </form>
  );
}

