import { NextResponse } from "next/server";
import { sendSiteEmail } from "@/lib/mail/mailTransport";
import { createFreeConsultationEmail } from "@/lib/mail/templates";

const emailPattern = /^\S+@\S+\.\S+$/;
const allowedImageTypes = ["image/jpeg", "image/png"];
const maxImageBytes = 5 * 1024 * 1024;

function cleanText(value, maxLength) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function safeFileName(value, index) {
  const fallback = `consultation-image-${index + 1}.jpg`;
  if (!value) return fallback;

  return value.replace(/[^a-zA-Z0-9._-]/g, "-").slice(0, 120) || fallback;
}

export async function POST(request) {
  try {
    const formData = await request.formData();
    const values = {
      fullName: cleanText(formData.get("fullName"), 120),
      email: cleanText(formData.get("email"), 160),
      phone: cleanText(formData.get("phone"), 80),
      country: cleanText(formData.get("country"), 120),
      treatment: cleanText(formData.get("treatment"), 160),
      doctorPreference: cleanText(formData.get("doctorPreference"), 160),
      message: cleanText(formData.get("message"), 2000),
      source: cleanText(formData.get("source"), 160) || "Get a free consultation drawer",
      consent: formData.get("consent") === "true",
    };
    const images = formData.getAll("images").filter((file) => file && typeof file === "object" && typeof file.arrayBuffer === "function");

    const isValid = values.fullName && emailPattern.test(values.email) && values.phone && values.country && values.treatment && values.message && values.consent;

    if (!isValid || images.length > 3) {
      return NextResponse.json({ error: "Invalid consultation request" }, { status: 400 });
    }

    for (const image of images) {
      if (!allowedImageTypes.includes(image.type) || image.size > maxImageBytes) {
        return NextResponse.json({ error: "Invalid image attachment" }, { status: 400 });
      }
    }

    const attachments = await Promise.all(
      images.map(async (image, index) => ({
        content: Buffer.from(await image.arrayBuffer()),
        contentType: image.type,
        filename: safeFileName(image.name, index),
      })),
    );

    const email = createFreeConsultationEmail({ ...values, attachmentCount: attachments.length });
    await sendSiteEmail({ ...email, attachments, replyTo: values.email });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Free consultation email could not be sent", error);
    return NextResponse.json({ error: "Unable to send consultation request" }, { status: 500 });
  }
}
