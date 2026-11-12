interface SendEmailOptions {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}

export async function sendNotificationEmail(options: SendEmailOptions): Promise<{ success: boolean; messageId?: string; error?: string }> {
  const provider = process.env.EMAIL_PROVIDER || "mock";
  const adminEmail = process.env.ADMIN_NOTIFICATION_EMAIL || "leads@primetalentssolutions.lk";
  const recipient = options.to || adminEmail;

  // 1. Resend Integration (if configured)
  if (provider === "resend" && process.env.RESEND_API_KEY) {
    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "Prime Talents Notifications <onboarding@resend.dev>",
          to: recipient,
          reply_to: options.replyTo,
          subject: options.subject,
          html: options.html,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Resend API error:", errorText);
        return { success: false, error: errorText };
      }

      const data = await response.json();
      return { success: true, messageId: data.id };
    } catch (err: unknown) {
      console.error("Failed to send email via Resend:", err);
      return { success: false, error: String(err) };
    }
  }

  // 2. Mock / Local Development Logger (Default safe fallback)
  console.log("=================================================");
  console.log("📧 [NOTIFICATION EMAIL DISPATCHED - MOCK MODE]");
  console.log(`To: ${recipient}`);
  console.log(`Reply-To: ${options.replyTo || "N/A"}`);
  console.log(`Subject: ${options.subject}`);
  console.log("HTML Preview:");
  console.log(options.html.substring(0, 300) + "...");
  console.log("=================================================");

  return {
    success: true,
    messageId: `mock-${Date.now()}`,
  };
}

