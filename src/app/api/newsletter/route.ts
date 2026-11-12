import { NextRequest, NextResponse } from "next/server";
import { newsletterSchema } from "@/lib/schema";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (body._hp_verify && body._hp_verify.length > 0) {
      return NextResponse.json({ success: true, message: "Subscribed" });
    }

    const validation = newsletterSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    const { email } = validation.data;
    console.log(`[NEWSLETTER SUBSCRIPTION] Registered subscriber: ${email}`);

    return NextResponse.json({
      success: true,
      message: "Successfully subscribed to Prime Talents HR Market Intelligence",
    });
  } catch (error: unknown) {
    return NextResponse.json({ error: "Failed to process subscription" }, { status: 500 });
  }
}

