import { z } from "zod";

export const appointmentSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid work email address"),
  phone: z.string().min(9, "Please enter a valid phone number with country code"),
  company: z.string().min(2, "Company / Organization name is required"),
  service: z.string().min(1, "Please select the service required"),
  companySize: z.string().optional(),
  preferredDate: z.string().min(1, "Please select a preferred consultation date"),
  preferredTime: z.string().min(1, "Please select a preferred time slot"),
  message: z.string().min(10, "Please provide brief details about your workforce needs (min 10 characters)"),
  _hp_verify: z.string().max(0, "Bot detected").optional(),
});

export type AppointmentFormData = z.infer<typeof appointmentSchema>;

export const contactSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(9, "Please enter a valid phone number"),
  inquiryType: z.string().min(1, "Please select your inquiry type"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  _hp_verify: z.string().max(0, "Bot detected").optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  _hp_verify: z.string().max(0, "Bot detected").optional(),
});

export type NewsletterFormData = z.infer<typeof newsletterSchema>;

export const eventRegisterSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(9, "Please enter a valid contact number"),
  company: z.string().min(2, "Company name is required"),
  designation: z.string().min(2, "Job title / Designation is required"),
  eventId: z.string().min(1, "Event selection is required"),
  attendeeCount: z.number().min(1).max(10).default(1),
  notes: z.string().optional(),
  _hp_verify: z.string().max(0, "Bot detected").optional(),
});

export type EventRegisterFormData = z.infer<typeof eventRegisterSchema>;

