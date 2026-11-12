import { NextRequest, NextResponse } from "next/server";
import { appointmentSchema } from "@/lib/schema";
import { sendNotificationEmail } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Honeypot bot protection check
    if (body._hp_verify && body._hp_verify.length > 0) {
      console.warn("Bot submission prevented via appointment honeypot.");
      return NextResponse.json({ success: true, message: "Request received" });
    }

    const validation = appointmentSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { error: "Validation failed", details: validation.error.flatten() },
        { status: 400 }
      );
    }

    const data = validation.data;

    // Send Admin Notification Email
    await sendNotificationEmail({
      to: process.env.ADMIN_NOTIFICATION_EMAIL || "leads@primetalentssolutions.lk",
      replyTo: data.email,
      subject: `[New Appointment Request] ${data.company} - ${data.service}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #1e293b; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
          <div style="background-color: #0b1f3a; padding: 24px; color: #ffffff;">
            <h2 style="margin: 0; font-size: 20px;">New Consultation Booking</h2>
            <p style="margin: 4px 0 0; font-size: 14px; color: #14b8a6;">Prime Talents Solutions Lead Portal</p>
          </div>
          <div style="padding: 24px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; font-weight: bold; width: 140px;">Client Name:</td><td>${data.fullName}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Work Email:</td><td><a href="mailto:${data.email}">${data.email}</a></td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Phone:</td><td><a href="tel:${data.phone}">${data.phone}</a></td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Company:</td><td>${data.company}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Company Size:</td><td>${data.companySize || "Not specified"}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Service Needed:</td><td><strong style="color: #0d9488;">${data.service}</strong></td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Preferred Date:</td><td>${data.preferredDate}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Time Window:</td><td>${data.preferredTime}</td></tr>
            </table>
            <div style="margin-top: 20px; padding: 16px; background-color: #f8fafc; border-radius: 8px; border-left: 4px solid #14b8a6;">
              <h4 style="margin: 0 0 8px; font-size: 14px;">Workforce Challenge / Objectives:</h4>
              <p style="margin: 0; font-size: 14px; line-height: 1.5;">${data.message}</p>
            </div>
          </div>
          <div style="padding: 16px 24px; background-color: #f1f5f9; font-size: 12px; color: #64748b;">
            Logged at: ${new Date().toISOString()} • Colombo Head Office Gateway
          </div>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Appointment request registered successfully",
    });
  } catch (error: unknown) {
    console.error("API /api/appointment error:", error);
    return NextResponse.json(
      { error: "Internal server error occurred while processing appointment" },
      { status: 500 }
    );
  }
}

