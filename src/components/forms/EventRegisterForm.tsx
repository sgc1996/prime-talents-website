"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Send } from "lucide-react";
import { eventRegisterSchema, EventRegisterFormData } from "@/lib/schema";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { useToast } from "@/components/ui/Toast";

interface EventRegisterFormProps {
  eventId: string;
  eventTitle: string;
  onSuccessClose?: () => void;
}

export function EventRegisterForm({
  eventId,
  eventTitle,
  onSuccessClose,
}: EventRegisterFormProps) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EventRegisterFormData>({
    resolver: zodResolver(eventRegisterSchema),
    defaultValues: {
      eventId,
      attendeeCount: 1,
    },
  });

  const onSubmit = async (data: EventRegisterFormData) => {
    setServerError(null);
    try {
      const response = await fetch("/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.error || "Failed to register for event");
      }

      setIsSuccess(true);
      reset();
      toast({
        type: "success",
        title: "Registration Confirmed!",
        description: `You are registered for "${eventTitle}". Calendar invite sent to your email.`,
      });
      if (onSuccessClose) {
        setTimeout(onSuccessClose, 2500);
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Failed to register.";
      setServerError(msg);
      toast({
        type: "error",
        title: "Registration Error",
        description: msg,
      });
    }
  };

  if (isSuccess) {
    return (
      <div className="p-6 text-center space-y-3">
        <div className="w-12 h-12 rounded-full bg-teal-500/20 text-teal-600 dark:text-teal-400 mx-auto flex items-center justify-center">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h4 className="font-heading font-bold text-lg text-navy-950 dark:text-white">
          Seat Confirmed!
        </h4>
        <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
          A confirmation pass and joining details for <strong>{eventTitle}</strong> have been sent to your inbox.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {serverError && (
        <div className="p-3 rounded-xl bg-red-50 text-red-600 text-xs">
          {serverError}
        </div>
      )}

      {/* Hidden Fields */}
      <input type="hidden" value={eventId} {...register("eventId")} />
      <input
        type="text"
        {...register("_hp_verify")}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="p-3 rounded-xl bg-slate-50 dark:bg-navy-950/60 border border-slate-200 dark:border-navy-800 text-xs">
        <span className="text-slate-500">Registering for:</span>{" "}
        <strong className="text-navy-950 dark:text-white block mt-0.5">
          {eventTitle}
        </strong>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <Input
          id="eventFullName"
          label="Full Name *"
          placeholder="e.g. Kasun Ratnayake"
          error={errors.fullName?.message}
          {...register("fullName")}
        />

        <Input
          id="eventEmail"
          type="email"
          label="Work Email *"
          placeholder="kasun@enterprise.lk"
          error={errors.email?.message}
          {...register("email")}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <Input
          id="eventPhone"
          label="Phone Number *"
          placeholder="+94 77 123 4567"
          error={errors.phone?.message}
          {...register("phone")}
        />

        <Input
          id="eventCompany"
          label="Company / Organization *"
          placeholder="e.g. Lanka Tech PLC"
          error={errors.company?.message}
          {...register("company")}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <Input
          id="eventDesignation"
          label="Designation / Role *"
          placeholder="e.g. HR Manager / Director"
          error={errors.designation?.message}
          {...register("designation")}
        />

        <Input
          id="eventAttendeeCount"
          type="number"
          min={1}
          max={10}
          label="Number of Seats (1-10) *"
          defaultValue={1}
          error={errors.attendeeCount?.message}
          {...register("attendeeCount", { valueAsNumber: true })}
        />
      </div>

      <Textarea
        id="eventNotes"
        label="Questions / Discussion Topics (Optional)"
        placeholder="Any specific questions you would like addressed during the session?"
        rows={2}
        error={errors.notes?.message}
        {...register("notes")}
      />

      <div className="pt-2">
        <Button
          type="submit"
          variant="accent"
          size="md"
          disabled={isSubmitting}
          className="w-full justify-center font-bold"
        >
          {isSubmitting ? "Reserving Seat..." : "Complete Registration"}
        </Button>
      </div>
    </form>
  );
}

