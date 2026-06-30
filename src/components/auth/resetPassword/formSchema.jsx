import { z } from "zod";

export const resetPasswordFormSchema = z
  .object({
    confirmPassword: z.string().min(1, "Şifre tekrarı zorunlu."),
    password: z.string().min(8, "Şifre en az 8 karakter olmalı."),
  })
  .refine((values) => values.password === values.confirmPassword, {
    message: "Şifreler eşleşmiyor.",
    path: ["confirmPassword"],
  });
