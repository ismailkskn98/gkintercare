import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.string().trim().min(1, "Email zorunlu.").email("Geçerli bir email yaz."),
  password: z.string().min(1, "Şifre zorunlu."),
});

