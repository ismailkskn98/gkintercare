import { NextResponse } from "next/server";
import { sendSiteEmail } from "@/lib/mail/mailTransport";
import { createQuickConsultationEmail } from "@/lib/mail/templates";

const emailPattern = /^\S+@\S+\.\S+$/;

function cleanText(value, maxLength) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request) {
  try {
    const body = await request.json();
    const values = {
      fullName: cleanText(body.fullName, 120),
      email: cleanText(body.email, 160),
      phone: cleanText(body.phone, 60),
      country: cleanText(body.country, 120),
      message: cleanText(body.message, 2000),
    };

    const isValid = values.fullName && emailPattern.test(values.email) && values.phone && values.country && values.message;

    if (!isValid) {
      return NextResponse.json({ error: "Invalid quick consultation request" }, { status: 400 });
    }

    const email = createQuickConsultationEmail(values);
    await sendSiteEmail({ ...email, replyTo: values.email });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Quick consultation email could not be sent", error);
    return NextResponse.json({ error: "Unable to send quick consultation request" }, { status: 500 });
  }
}
