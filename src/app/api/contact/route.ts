import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/schema";
import { sendNotificationEmail } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (body._hp_verify && body._hp_verify.length > 0) {
      console.warn("Bot submission prevented via contact honeypot.");
      return NextResponse.json({ success: true, message: "Message received" });
    }

    const validation = contactSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { error: "Validation failed", details: validation.error.flatten() },
        { status: 400 }
      );
    }

    const data = validation.data;

    await sendNotificationEmail({
      to: process.env.ADMIN_NOTIFICATION_EMAIL || "leads@primetalentssolutions.lk",
      replyTo: data.email,
      subject: `[Contact Inquiry] ${data.subject} (${data.inquiryType})`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #1e293b; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
          <div style="background-color: #0b1f3a; padding: 20px; color: #ffffff;">
            <h2 style="margin: 0; font-size: 18px;">New Contact Desk Inquiry</h2>
            <p style="margin: 4px 0 0; font-size: 13px; color: #14b8a6;">Prime Talents Solutions</p>
          </div>
          <div style="padding: 20px;">
            <p><strong>From:</strong> ${data.fullName} (${data.email})</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
            <p><strong>Category:</strong> ${data.inquiryType}</p>
            <p><strong>Subject:</strong> ${data.subject}</p>
            <div style="margin-top: 16px; padding: 16px; background-color: #f8fafc; border-radius: 8px;">
              <p style="margin: 0; font-size: 14px; white-space: pre-wrap;">${data.message}</p>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Contact message sent successfully",
    });
  } catch (error: unknown) {
    console.error("API /api/contact error:", error);
    return NextResponse.json(
      { error: "Internal server error occurred while sending message" },
      { status: 500 }
    );
  }
}

