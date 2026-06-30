import { z } from "zod";

const allowedImageTypes = ["image/jpeg", "image/png"];
const maxImageSize = 5 * 1024 * 1024;

export function createConsultationSchema(t) {
  return z.object({
    fullName: z.string().trim().min(1, t("validation.required")).max(120, t("validation.tooLong")),
    email: z.string().trim().min(1, t("validation.required")).email(t("validation.invalidEmail")).max(160, t("validation.tooLong")),
    phone: z.string().trim().min(1, t("validation.required")).max(80, t("validation.tooLong")),
    country: z.string().trim().min(1, t("validation.required")).max(120, t("validation.tooLong")),
    treatment: z.string().trim().min(1, t("validation.required")).max(160, t("validation.tooLong")),
    doctorPreference: z.string().trim().max(160, t("validation.tooLong")).optional(),
    source: z.string().trim().max(160, t("validation.tooLong")).optional(),
    message: z.string().trim().min(1, t("validation.required")).max(2000, t("validation.tooLong")),
    consent: z.literal(true, { error: t("validation.consent") }),
    images: z
      .array(z.any())
      .max(3, t("validation.maxFiles"))
      .superRefine((files, context) => {
        files.forEach((file, index) => {
          if (!allowedImageTypes.includes(file.type)) {
            context.addIssue({ code: "custom", message: t("validation.fileType"), path: [index] });
          }

          if (file.size > maxImageSize) {
            context.addIssue({ code: "custom", message: t("validation.fileSize"), path: [index] });
          }
        });
      }),
  });
}
