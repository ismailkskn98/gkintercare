function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function emailLayout({ eyebrow, title, rows }) {
  const rowMarkup = rows
    .filter(([, value]) => value)
    .map(([label, value]) => `
      <tr>
        <td style="padding: 12px 16px; border-bottom: 1px solid #e6edf2; color: #6b7380; font-size: 13px; vertical-align: top; width: 36%;">${escapeHtml(label)}</td>
        <td style="padding: 12px 16px; border-bottom: 1px solid #e6edf2; color: #0b3c5d; font-size: 14px; font-weight: 600; white-space: pre-wrap;">${escapeHtml(value)}</td>
      </tr>
    `)
    .join("");

  return `
    <div style="background: #f6fafd; padding: 32px 16px; font-family: Arial, Helvetica, sans-serif;">
      <table role="presentation" style="width: 100%; max-width: 680px; margin: 0 auto; border-collapse: collapse; background: #ffffff; border: 1px solid #dce6ed;">
        <tr>
          <td style="padding: 28px 32px; background: #0b3c5d; color: #ffffff;">
            <div style="color: #c8a969; font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase;">${escapeHtml(eyebrow)}</div>
            <h1 style="margin: 10px 0 0; color: #ffffff; font-size: 24px; line-height: 1.25;">${escapeHtml(title)}</h1>
          </td>
        </tr>
        <tr>
          <td style="padding: 8px 0 24px;">
            <table role="presentation" style="width: 100%; border-collapse: collapse;">${rowMarkup}</table>
          </td>
        </tr>
      </table>
    </div>
  `;
}

export function createPartnerEmail(values) {
  return {
    subject: `New partnership enquiry from ${values.companyName}`,
    html: emailLayout({
      eyebrow: "Partner enquiry",
      title: "New GK InterCare partnership request",
      rows: [
        ["Full name", values.fullName],
        ["Company", values.companyName],
        ["Organisation type", values.businessType],
        ["Business email", values.email],
        ["WhatsApp / phone", values.phone],
        ["Country", values.country],
        ["Monthly patient volume", values.monthlyPatients],
        ["Message", values.message],
      ],
    }),
  };
}

export function createCallbackEmail({ email }) {
  return {
    subject: "New callback request",
    html: emailLayout({
      eyebrow: "Callback request",
      title: "A visitor requested a call back",
      rows: [["Email address", email]],
    }),
  };
}

export function createQuickConsultationEmail(values) {
  return {
    subject: `New quick consultation request from ${values.fullName}`,
    html: emailLayout({
      eyebrow: "Homepage quick consultation",
      title: "New patient consultation request",
      rows: [
        ["Source", "Homepage quick consultation form"],
        ["Full name", values.fullName],
        ["Email", values.email],
        ["Phone", values.phone],
        ["Country", values.country],
        ["Treatment enquiry", values.message],
      ],
    }),
  };
}
