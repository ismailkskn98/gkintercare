import { z } from "zod";

export const forgotPasswordFormSchema = z.object({
  email: z.string().trim().min(1, "Email zorunlu.").email("Geçerli bir email yaz."),
});

