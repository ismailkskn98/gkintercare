"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/toast";
import { requestPasswordReset } from "@/lib/api/adminAuth";
import CustomButton from "../common/customButton";
import CustomInput from "../common/customInput";
import { forgotPasswordFormSchema } from "./formSchema";

export default function ForgotPasswordForm() {
  const { toast } = useToast();
  const [result, setResult] = useState(null);
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    setError,
  } = useForm({
    defaultValues: { email: "" },
    resolver: zodResolver(forgotPasswordFormSchema),
  });

  async function onSubmit(values) {
    setResult(null);

    try {
      const response = await requestPasswordReset(values.email);
      setResult(response);
      toast({ title: "İstek alındı", description: "Şifre yenileme bağlantısı hazırlandı." });
    } catch (err) {
      const message = err.response?.data?.error || "İstek gönderilemedi.";
      setError("root", { message });
      toast({ title: "İstek gönderilemedi", description: message, variant: "destructive" });
    }
  }

  return (
    <form className="mt-8 space-y-5" onSubmit={handleSubmit(onSubmit)}>
      <CustomInput autoComplete="email" error={errors.email?.message} icon={Mail} label="Email" type="email" {...register("email")} />

      {errors.root?.message ? <p className="rounded-md bg-[#fff1f1] px-3 py-2 text-sm font-700 text-destructive">{errors.root.message}</p> : null}
      {result ? (
        <div className="rounded-md bg-[#eef8f2] px-3 py-2 text-sm font-700 text-[#247348]">
          {process.env.NODE_ENV === "development" && result.resetUrl ? (
            <>
              İstek alındı.
              <a className="mt-2 block break-all underline" href={result.resetUrl}>
                Development reset linki
              </a>
            </>
          ) : (
            "E-posta adresine şifre yenileme bağlantısı gönderildi. Gelen kutunu kontrol et."
          )}
        </div>
      ) : null}

      <CustomButton icon={Send} isLoading={isSubmitting} loadingText="Gönderiliyor..." type="submit">
        Bağlantı hazırla
      </CustomButton>
    </form>
  );
}

