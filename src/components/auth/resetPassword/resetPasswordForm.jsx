"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Save } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/toast";
import { resetAdminPassword } from "@/lib/api/adminAuth";
import CustomButton from "../common/customButton";
import CustomPasswordInput from "../common/customPasswordInput";
import { resetPasswordFormSchema } from "./formSchema";

export default function ResetPasswordForm() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token")?.trim() || "";
  const { toast } = useToast();
  const [message, setMessage] = useState("");
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    setError,
  } = useForm({
    defaultValues: {
      confirmPassword: "",
      password: "",
    },
    resolver: zodResolver(resetPasswordFormSchema),
  });

  async function onSubmit(values) {
    if (!token) {
      setError("root", { message: "Geçersiz veya eksik bağlantı. Lütfen şifre yenileme isteğini tekrar gönder." });
      return;
    }

    setMessage("");

    try {
      await resetAdminPassword({ password: values.password, token });
      setMessage("Şifre yenilendi. Artık giriş yapabilirsin.");
      toast({ title: "Şifre yenilendi", description: "Yeni şifrenle giriş yapabilirsin." });
    } catch (err) {
      const errorMessage = err.response?.data?.error || "Şifre yenilenemedi.";
      setError("root", { message: errorMessage });
      toast({ title: "Şifre yenilenemedi", description: errorMessage, variant: "destructive" });
    }
  }

  if (!token) {
    return (
      <div className="mt-8 space-y-4">
        <p className="rounded-md bg-[#fff1f1] px-3 py-2 text-sm font-700 text-destructive">
          Bu bağlantı geçersiz veya süresi dolmuş. Lütfen yeni bir şifre yenileme isteği gönder.
        </p>
        <Link className="text-sm font-700 text-primary underline" href="/admin/forgot-password">
          Şifre yenileme isteği gönder
        </Link>
      </div>
    );
  }

  return (
    <form className="mt-8 space-y-5" onSubmit={handleSubmit(onSubmit)}>
      <CustomPasswordInput autoComplete="new-password" error={errors.password?.message} label="Yeni şifre" {...register("password")} />
      <CustomPasswordInput autoComplete="new-password" error={errors.confirmPassword?.message} label="Yeni şifre tekrar" {...register("confirmPassword")} />

      {errors.root?.message ? <p className="rounded-md bg-[#fff1f1] px-3 py-2 text-sm font-700 text-destructive">{errors.root.message}</p> : null}
      {message ? (
        <p className="rounded-md bg-[#eef8f2] px-3 py-2 text-sm font-700 text-[#247348]">
          {message}{" "}
          <Link className="underline" href="/admin/login">
            Girişe dön
          </Link>
        </p>
      ) : null}

      <CustomButton icon={Save} isLoading={isSubmitting} loadingText="Kaydediliyor..." type="submit">
        Şifreyi yenile
      </CustomButton>
    </form>
  );
}
