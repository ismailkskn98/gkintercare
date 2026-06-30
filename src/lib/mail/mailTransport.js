import nodemailer from "nodemailer";

function getMailConfig() {
  const port = Number(process.env.SMTP_PORT || "587");
  const { EMAIL_PASS, EMAIL_TO, EMAIL_USER, SMTP_HOST } = process.env;

  if (!EMAIL_PASS || !EMAIL_TO || !EMAIL_USER || !SMTP_HOST || !Number.isInteger(port)) {
    throw new Error("Incomplete SMTP configuration");
  }

  return { EMAIL_PASS, EMAIL_TO, EMAIL_USER, SMTP_HOST, port };
}

export async function sendSiteEmail({ attachments = [], html, replyTo, subject }) {
  const config = getMailConfig();
  const transporter = nodemailer.createTransport({
    host: config.SMTP_HOST,
    port: config.port,
    secure: config.port === 465,
    auth: {
      user: config.EMAIL_USER,
      pass: config.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    attachments,
    from: `GK InterCare Website <${config.EMAIL_USER}>`,
    to: config.EMAIL_TO,
    replyTo,
    subject,
    html,
  });
}
