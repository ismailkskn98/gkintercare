import { NextResponse } from "next/server";
import { sendSiteEmail } from "@/lib/mail/mailTransport";
import { createPartnerEmail } from "@/lib/mail/templates";

const emailPattern = /^\S+@\S+\.\S+$/;

function cleanText(value, maxLength) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request) {
  try {
    const body = await request.json();
    const values = {
      fullName: cleanText(body.fullName, 120),
      companyName: cleanText(body.companyName, 160),
      businessType: cleanText(body.businessType, 80),
      email: cleanText(body.email, 160),
      phone: cleanText(body.phone, 60),
      country: cleanText(body.country, 120),
      monthlyPatients: cleanText(body.monthlyPatients, 60),
      message: cleanText(body.message, 2000),
      consent: body.consent === true,
    };

    const isValid = values.fullName && values.companyName && values.businessType && emailPattern.test(values.email) && values.phone && values.country && values.monthlyPatients && values.consent;

    if (!isValid) {
      return NextResponse.json({ error: "Invalid partner request" }, { status: 400 });
    }

    const email = createPartnerEmail(values);
    await sendSiteEmail({ ...email, replyTo: values.email });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Partner request email could not be sent", error);
    return NextResponse.json({ error: "Unable to send partner request" }, { status: 500 });
  }
}
