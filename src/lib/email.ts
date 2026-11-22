import nodemailer from "nodemailer";
import { escapeHtml, sanitizeHeader } from "./sanitize";

export interface SendEmailOptions {
  to: string;
  subject: string;
  html: string;
  text?: string;
  replyTo?: string;
  from?: string;
  headers?: Record<string, string>;
}

export interface ContactNotificationData {
  fullName: string;
  email: string;
  phone: string;
  inquiryType: string;
  subject: string;
  message: string;
  clientIp?: string;
}

/**
 * Creates a reusable Nodemailer transporter when SMTP credentials are provided.
 */
function getSmtpTransporter() {
  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT || "587", 10);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    return null;
  }

  const isSecure = process.env.SMTP_SECURE === "true" || port === 465;

  return nodemailer.createTransport({
    host,
    port,
    secure: isSecure,
    auth: {
      user,
      pass,
    },
    // Pool connections for faster delivery
    pool: true,
    maxConnections: 3,
    maxMessages: 50,
  });
}

/**
 * Universal email dispatcher supporting:
 * 1. Nodemailer (SMTP - Hostinger, cPanel, Google Workspace, Titan, etc.)
 * 2. Resend API (HTTP REST API)
 * 3. Safe Mock Logger (for local development or when credentials are not yet configured)
 */
export async function sendEmail(
  options: SendEmailOptions
): Promise<{ success: boolean; messageId?: string; error?: string }> {
  const provider = (process.env.EMAIL_PROVIDER || "").toLowerCase();
  const defaultFrom =
    process.env.SMTP_FROM ||
    `"Prime Talents Solutions" <contact@primetalentssolutions.lk>`;
  const from = options.from || defaultFrom;
  const sanitizedSubject = sanitizeHeader(options.subject);
  const sanitizedTo = sanitizeHeader(options.to);
  const sanitizedReplyTo = options.replyTo ? sanitizeHeader(options.replyTo) : undefined;

  // 1. SMTP / Nodemailer
  if (provider === "nodemailer" || (!provider && process.env.SMTP_HOST)) {
    try {
      const transporter = getSmtpTransporter();
      if (transporter) {
        const info = await transporter.sendMail({
          from,
          to: sanitizedTo,
          replyTo: sanitizedReplyTo,
          subject: sanitizedSubject,
          html: options.html,
          text: options.text,
          headers: options.headers,
        });

        return { success: true, messageId: info.messageId };
      }
    } catch (err: unknown) {
      console.error("[Email Dispatch Error - Nodemailer]:", err);
      return { success: false, error: err instanceof Error ? err.message : String(err) };
    }
  }

  // 2. Resend Integration (HTTP API)
  if ((provider === "resend" || (!provider && process.env.RESEND_API_KEY)) && process.env.RESEND_API_KEY) {
    try {
      const resendFrom = process.env.RESEND_FROM || "Prime Talents Solutions <onboarding@resend.dev>";
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: resendFrom,
          to: sanitizedTo,
          reply_to: sanitizedReplyTo,
          subject: sanitizedSubject,
          html: options.html,
          text: options.text,
          headers: options.headers,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("[Email Dispatch Error - Resend]:", errorText);
        return { success: false, error: errorText };
      }

      const data = await response.json();
      return { success: true, messageId: data.id };
    } catch (err: unknown) {
      console.error("[Email Dispatch Error - Resend]:", err);
      return { success: false, error: err instanceof Error ? err.message : String(err) };
    }
  }

  // 3. Fallback: Mock / Local Development Console Logger
  console.log("==================================================================");
  console.log("📧 [EMAIL DISPATCHED - MOCK MODE / SAFE FALLBACK]");
  console.log(`To: ${sanitizedTo}`);
  console.log(`From: ${from}`);
  console.log(`Reply-To: ${sanitizedReplyTo || "N/A"}`);
  console.log(`Subject: ${sanitizedSubject}`);
  if (options.headers) {
    console.log(`Headers:`, options.headers);
  }
  console.log("------------------------------------------------------------------");
  console.log("Preview text:");
  console.log(options.text || options.html.replace(/<[^>]+>/g, " ").substring(0, 300) + "...");
  console.log("==================================================================");

  return {
    success: true,
    messageId: `mock-${Date.now()}`,
  };
}

/**
 * 1. Admin Notification Email
 * Delivered directly to `contact@primetalentssolutions.lk` with complete inquiry details.
 */
export async function sendContactAdminNotification(data: ContactNotificationData) {
  const adminRecipient =
    process.env.CONTACT_NOTIFICATION_EMAIL ||
    process.env.ADMIN_NOTIFICATION_EMAIL ||
    "contact@primetalentssolutions.lk";

  const safeName = escapeHtml(data.fullName);
  const safeEmail = escapeHtml(data.email);
  const safePhone = escapeHtml(data.phone);
  const safeCategory = escapeHtml(data.inquiryType);
  const safeSubject = escapeHtml(data.subject);
  const safeMessage = escapeHtml(data.message);
  const safeIp = escapeHtml(data.clientIp || "N/A");

  const nowSriLanka = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Colombo",
    dateStyle: "full",
    timeStyle: "medium",
  }).format(new Date());

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>New Contact Desk Inquiry</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f1f5f9; padding: 32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); border: 1px solid #e2e8f0;">
          
          <!-- Header Banner -->
          <tr>
            <td style="background-color: #0b1f3a; padding: 28px 32px; border-bottom: 3px solid #14b8a6;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <h1 style="margin: 0; font-size: 20px; font-weight: 700; color: #ffffff; letter-spacing: -0.3px;">
                      New Contact Inquiry
                    </h1>
                    <p style="margin: 4px 0 0; font-size: 13px; color: #2dd4bf; font-weight: 500;">
                      Prime Talents Solutions (Pvt) Ltd • Official Desk
                    </p>
                  </td>
                  <td align="right">
                    <span style="display: inline-block; padding: 4px 12px; background-color: rgba(20, 184, 166, 0.2); border: 1px solid #14b8a6; color: #2dd4bf; border-radius: 20px; font-size: 11px; font-weight: 700; text-transform: uppercase;">
                      Website Lead
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Content Body -->
          <tr>
            <td style="padding: 32px;">
              
              <!-- Sender Overview Card -->
              <table role="presentation" width="100%" style="background-color: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0; margin-bottom: 24px;" cellpadding="12">
                <tr>
                  <td width="35%" style="font-size: 13px; color: #64748b; font-weight: 600; padding: 10px 16px; border-bottom: 1px solid #e2e8f0;">Full Name:</td>
                  <td width="65%" style="font-size: 14px; color: #0b1f3a; font-weight: 700; padding: 10px 16px; border-bottom: 1px solid #e2e8f0;">${safeName}</td>
                </tr>
                <tr>
                  <td style="font-size: 13px; color: #64748b; font-weight: 600; padding: 10px 16px; border-bottom: 1px solid #e2e8f0;">Email Address:</td>
                  <td style="font-size: 14px; padding: 10px 16px; border-bottom: 1px solid #e2e8f0;">
                    <a href="mailto:${safeEmail}" style="color: #0d9488; text-decoration: none; font-weight: 600;">${safeEmail}</a>
                  </td>
                </tr>
                <tr>
                  <td style="font-size: 13px; color: #64748b; font-weight: 600; padding: 10px 16px; border-bottom: 1px solid #e2e8f0;">Phone Number:</td>
                  <td style="font-size: 14px; padding: 10px 16px; border-bottom: 1px solid #e2e8f0;">
                    <a href="tel:${safePhone.replace(/\s+/g, "")}" style="color: #0d9488; text-decoration: none; font-weight: 600;">${safePhone}</a>
                  </td>
                </tr>
                <tr>
                  <td style="font-size: 13px; color: #64748b; font-weight: 600; padding: 10px 16px; border-bottom: 1px solid #e2e8f0;">Inquiry Category:</td>
                  <td style="font-size: 13px; color: #0b1f3a; font-weight: 600; padding: 10px 16px; border-bottom: 1px solid #e2e8f0;">${safeCategory}</td>
                </tr>
                <tr>
                  <td style="font-size: 13px; color: #64748b; font-weight: 600; padding: 10px 16px;">Subject:</td>
                  <td style="font-size: 14px; color: #0b1f3a; font-weight: 600; padding: 10px 16px;">${safeSubject}</td>
                </tr>
              </table>

              <!-- Message Section -->
              <h3 style="margin: 0 0 8px; font-size: 14px; font-weight: 700; color: #0b1f3a; text-transform: uppercase; letter-spacing: 0.5px;">
                Client / Candidate Message:
              </h3>
              <div style="background-color: #ffffff; border: 1px solid #cbd5e1; border-left: 4px solid #14b8a6; border-radius: 8px; padding: 16px 20px; font-size: 14px; line-height: 1.6; color: #334155; white-space: pre-wrap;">${safeMessage}</div>

              <!-- Quick Action Button -->
              <div style="margin-top: 28px; text-align: center;">
                <a href="mailto:${safeEmail}?subject=Re:%20${encodeURIComponent(data.subject)}" style="display: inline-block; background-color: #14b8a6; color: #ffffff; font-size: 14px; font-weight: 700; padding: 12px 28px; border-radius: 8px; text-decoration: none; box-shadow: 0 2px 6px rgba(20, 184, 166, 0.4);">
                  Reply to ${safeName}
                </a>
              </div>

              <!-- Audit Trail -->
              <div style="margin-top: 28px; padding-top: 16px; border-top: 1px solid #f1f5f9; font-size: 11px; color: #94a3b8; line-height: 1.5;">
                <p style="margin: 0;"><strong>Received At:</strong> ${nowSriLanka} (Sri Lanka Time)</p>
                <p style="margin: 2px 0 0;"><strong>Security Fingerprint:</strong> IP ${safeIp} • Honeypot Passed • Rate Limit Checked</p>
              </div>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 16px 32px; border-top: 1px solid #e2e8f0; text-align: center; font-size: 12px; color: #64748b;">
              Prime Talents Solutions (Pvt) Ltd • Colombo, Sri Lanka • <a href="https://primetalentssolutions.lk" style="color: #0d9488; text-decoration: none;">primetalentssolutions.lk</a>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;

  const text = `
NEW CONTACT INQUIRY - PRIME TALENTS SOLUTIONS
--------------------------------------------------
From: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone}
Category: ${data.inquiryType}
Subject: ${data.subject}

Message:
${data.message}

Received: ${nowSriLanka}
IP: ${data.clientIp || "N/A"}
  `.trim();

  return sendEmail({
    to: adminRecipient,
    replyTo: `${data.fullName} <${data.email}>`,
    subject: `[Contact Inquiry] ${data.subject} - ${data.fullName}`,
    html,
    text,
  });
}

/**
 * 2. Instant Auto-Reply Email
 * Automatically sent to the client/job-seeker in professional, reassuring English.
 */
export async function sendContactAutoReply(data: ContactNotificationData) {
  const safeName = escapeHtml(data.fullName);
  const safeSubject = escapeHtml(data.subject);
  const safeCategory = escapeHtml(data.inquiryType);
  const safeMessage = escapeHtml(data.message);

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Thank You for Contacting Prime Talents Solutions</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f1f5f9; padding: 32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); border: 1px solid #e2e8f0;">
          
          <!-- Header Banner -->
          <tr>
            <td style="background-color: #0b1f3a; padding: 28px 32px; border-bottom: 3px solid #14b8a6; text-align: left;">
              <h1 style="margin: 0; font-size: 20px; font-weight: 700; color: #ffffff; letter-spacing: -0.3px;">
                Prime Talents Solutions
              </h1>
              <p style="margin: 4px 0 0; font-size: 13px; color: #2dd4bf; font-weight: 500;">
                Workforce &amp; Recruitment Solutions • Sri Lanka
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding: 32px 32px 24px;">
              
              <h2 style="margin: 0 0 16px; font-size: 18px; font-weight: 700; color: #0b1f3a;">
                Thank you for reaching out, ${safeName}!
              </h2>

              <p style="margin: 0 0 14px; font-size: 14px; line-height: 1.6; color: #334155;">
                We have successfully received your inquiry regarding <strong>&ldquo;${safeSubject}&rdquo;</strong>.
              </p>

              <p style="margin: 0 0 20px; font-size: 14px; line-height: 1.6; color: #334155;">
                Our team in Colombo is currently reviewing your message. A dedicated specialist will get back to you shortly—typically within <strong>1 business day</strong> (or within 72 hours for specialized talent sourcing and candidate shortlists).
              </p>

              <!-- Submission Recap Box -->
              <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px 20px; margin-bottom: 24px;">
                <p style="margin: 0 0 8px; font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">
                  Your Message Summary
                </p>
                <p style="margin: 0 0 4px; font-size: 13px; color: #0b1f3a;">
                  <strong>Inquiry Type:</strong> ${safeCategory}
                </p>
                <p style="margin: 0 0 8px; font-size: 13px; color: #0b1f3a;">
                  <strong>Contact Phone:</strong> ${safePhone(data.phone)}
                </p>
                <div style="margin-top: 8px; padding-top: 8px; border-top: 1px dashed #cbd5e1; font-size: 13px; color: #475569; font-style: italic;">
                  &ldquo;${safeMessage}&rdquo;
                </div>
              </div>

              <!-- Need Faster Assistance? -->
              <div style="background-color: #f0fdfa; border: 1px solid #ccfbf1; border-radius: 12px; padding: 16px 20px; margin-bottom: 24px;">
                <p style="margin: 0 0 6px; font-size: 13px; font-weight: 700; color: #0f766e;">
                  Need immediate or urgent assistance?
                </p>
                <p style="margin: 0; font-size: 13px; line-height: 1.5; color: #115e59;">
                  You can also connect with our team directly via WhatsApp or phone at <strong style="color: #0f766e;">+94 76 695 5021</strong> (Monday – Saturday: 8:30 AM – 5:30 PM).
                </p>
              </div>

              <!-- Sign-off -->
              <p style="margin: 0 0 4px; font-size: 14px; color: #334155; line-height: 1.5;">
                Warm regards,
              </p>
              <p style="margin: 0; font-size: 14px; font-weight: 700; color: #0b1f3a;">
                Prime Talents Solutions Team
              </p>
              <p style="margin: 2px 0 0; font-size: 12px; color: #64748b;">
                Colombo, Sri Lanka
              </p>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 20px 32px; border-top: 1px solid #e2e8f0; text-align: center; font-size: 12px; color: #64748b; line-height: 1.5;">
              <p style="margin: 0 0 4px;">
                This is an automated confirmation sent to <strong>${escapeHtml(data.email)}</strong>.
              </p>
              <p style="margin: 0;">
                Prime Talents Solutions (Pvt) Ltd • <a href="https://primetalentssolutions.lk" style="color: #0d9488; text-decoration: none; font-weight: 600;">www.primetalentssolutions.lk</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;

  const text = `
Dear ${data.fullName},

Thank you for contacting Prime Talents Solutions (Pvt) Ltd. We have successfully received your inquiry regarding "${data.subject}".

Our team in Colombo is currently reviewing your details. A dedicated specialist will get back to you shortly—typically within 1 business day (or within 72 hours for talent sourcing and candidate shortlists).

Summary of your inquiry:
- Category: ${data.inquiryType}
- Contact Phone: ${data.phone}
- Message:
${data.message}

If you need urgent assistance, you can also reach our team via WhatsApp or telephone at +94 76 695 5021 (Monday – Saturday: 8:30 AM – 5:30 PM).

Warm regards,
Prime Talents Solutions Team
Colombo, Sri Lanka
https://primetalentssolutions.lk
  `.trim();

  // Loop suppression headers to avoid bounce loops with automated mailboxes
  const headers = {
    "Auto-Submitted": "auto-replied",
    "X-Auto-Response-Suppress": "All",
    Precedence: "bulk",
  };

  return sendEmail({
    to: `${data.fullName} <${data.email}>`,
    replyTo: "contact@primetalentssolutions.lk",
    subject: `Thank you for contacting Prime Talents Solutions - We'll be in touch soon`,
    html,
    text,
    headers,
  });
}

function safePhone(phone: string): string {
  return escapeHtml(phone);
}

// Backward compatibility helper
export async function sendNotificationEmail(options: SendEmailOptions) {
  return sendEmail(options);
}
