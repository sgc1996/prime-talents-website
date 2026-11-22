import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/schema";
import {
  sendContactAdminNotification,
  sendContactAutoReply,
} from "@/lib/email";
import { checkRateLimit, getClientIp } from "@/lib/rateLimit";

export async function POST(req: NextRequest) {
  try {
    const clientIp = getClientIp(req);

    // 1. Rate Limiting Check (by IP: max 5 requests per 10 minutes)
    const ipRate = checkRateLimit(`contact-ip-${clientIp}`, 5, 10 * 60 * 1000);
    if (!ipRate.success) {
      return NextResponse.json(
        {
          error:
            "Too many requests from this network. Please wait a few minutes before submitting again.",
        },
        {
          status: 429,
          headers: {
            "Retry-After": "600",
          },
        }
      );
    }

    // 2. Parse request payload
    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid JSON request payload" },
        { status: 400 }
      );
    }

    // 3. Honeypot Anti-Bot Verification
    if (
      body &&
      typeof body === "object" &&
      "_hp_verify" in body &&
      Boolean((body as { _hp_verify?: unknown })._hp_verify)
    ) {
      console.warn(`[Anti-Bot] Honeypot triggered from IP: ${clientIp}`);
      // Return 200 OK silently to deceive spambots without dispatching emails
      return NextResponse.json({
        success: true,
        message: "Message received successfully",
      });
    }

    // 4. Strict Schema Validation & Sanitization
    const validation = contactSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        {
          error: "Validation failed. Please verify all required fields.",
          details: validation.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = validation.data;

    // 5. Rate Limiting Check (by Email: max 3 requests per 10 minutes)
    const emailRate = checkRateLimit(
      `contact-email-${data.email.toLowerCase()}`,
      3,
      10 * 60 * 1000
    );
    if (!emailRate.success) {
      return NextResponse.json(
        {
          error:
            "Multiple inquiries have recently been submitted from this email address. Please allow our team time to reply.",
        },
        {
          status: 429,
          headers: {
            "Retry-After": "600",
          },
        }
      );
    }

    // 6. Asynchronous Dual Email Dispatch:
    //    a) Admin Notification to contact@primetalentssolutions.lk
    //    b) Polite, professional Auto-Reply to the sender
    const [adminResult, autoReplyResult] = await Promise.allSettled([
      sendContactAdminNotification({
        ...data,
        clientIp,
      }),
      sendContactAutoReply({
        ...data,
        clientIp,
      }),
    ]);

    if (adminResult.status === "rejected") {
      console.error("[Email Error] Admin notification failed:", adminResult.reason);
    }
    if (autoReplyResult.status === "rejected") {
      console.error("[Email Error] Auto-reply failed:", autoReplyResult.reason);
    }

    return NextResponse.json({
      success: true,
      message:
        "Your message has been delivered to Prime Talents Solutions. An automated confirmation has been sent to your email address.",
    });
  } catch (error: unknown) {
    console.error("[API Error] /api/contact unhandled exception:", error);
    return NextResponse.json(
      {
        error:
          "An unexpected error occurred while processing your message. Please try again or contact us directly via WhatsApp.",
      },
      { status: 500 }
    );
  }
}
