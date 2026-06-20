import { NextResponse } from "next/server";
import { sendSiteEmail } from "@/lib/mail/mailTransport";
import { createCallbackEmail } from "@/lib/mail/templates";

const emailPattern = /^\S+@\S+\.\S+$/;

export async function POST(request) {
  try {
    const body = await request.json();
    const email = typeof body.email === "string" ? body.email.trim().slice(0, 160) : "";

    if (!emailPattern.test(email)) {
      return NextResponse.json({ error: "Invalid callback request" }, { status: 400 });
    }

    const message = createCallbackEmail({ email });
    await sendSiteEmail({ ...message, replyTo: email });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Callback request email could not be sent", error);
    return NextResponse.json({ error: "Unable to send callback request" }, { status: 500 });
  }
}
