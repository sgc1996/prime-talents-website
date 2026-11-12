import { NextRequest, NextResponse } from "next/server";
import { eventRegisterSchema } from "@/lib/schema";
import { sendNotificationEmail } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (body._hp_verify && body._hp_verify.length > 0) {
      return NextResponse.json({ success: true, message: "Registered" });
    }

    const validation = eventRegisterSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { error: "Validation failed", details: validation.error.flatten() },
        { status: 400 }
      );
    }

    const data = validation.data;

    await sendNotificationEmail({
      to: process.env.ADMIN_NOTIFICATION_EMAIL || "events@primetalentssolutions.lk",
      replyTo: data.email,
      subject: `[Event Registration] ${data.fullName} - ${data.eventId} (${data.attendeeCount} seats)`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #1e293b; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
          <div style="background-color: #0b1f3a; padding: 20px; color: #ffffff;">
            <h2 style="margin: 0; font-size: 18px;">Event Seat Reservation</h2>
            <p style="margin: 4px 0 0; font-size: 13px; color: #14b8a6;">Event: ${data.eventId}</p>
          </div>
          <div style="padding: 20px;">
            <p><strong>Attendee:</strong> ${data.fullName}</p>
            <p><strong>Designation:</strong> ${data.designation}</p>
            <p><strong>Company:</strong> ${data.company}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
            <p><strong>Seats Reserved:</strong> ${data.attendeeCount}</p>
            ${data.notes ? `<p><strong>Notes:</strong> ${data.notes}</p>` : ""}
          </div>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Event registration completed successfully",
    });
  } catch (error: unknown) {
    console.error("API /api/events error:", error);
    return NextResponse.json(
      { error: "Internal server error occurred during event registration" },
      { status: 500 }
    );
  }
}

