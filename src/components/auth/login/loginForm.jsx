"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { LogIn, Mail } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/toast";
import { loginAdmin } from "@/lib/api/adminAuth";
import CustomButton from "../common/customButton";
import CustomInput from "../common/customInput";
import CustomPasswordInput from "../common/customPasswordInput";
import { loginFormSchema } from "./formSchema";

export default function LoginForm() {
  const router = useRouter();
  const { toast } = useToast();
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    setError,
  } = useForm({
    defaultValues: { email: "", password: "" },
    resolver: zodResolver(loginFormSchema),
  });

  async function onSubmit(values) {
    try {
      await loginAdmin(values);
      toast({ title: "Giriş başarılı", description: "Admin paneline yönlendiriliyorsun." });
      router.replace("/admin/before-after");
    } catch (err) {
      const message = err.response?.data?.error || "Giriş yapılamadı.";
      setError("root", { message });
      toast({ title: "Giriş yapılamadı", description: message, variant: "destructive" });
    }
  }

  return (
    <form className="mt-8 space-y-5" onSubmit={handleSubmit(onSubmit)}>
      <CustomInput autoComplete="email" error={errors.email?.message} icon={Mail} label="Email" type="email" {...register("email")} />
      <CustomPasswordInput autoComplete="current-password" error={errors.password?.message} label="Şifre" {...register("password")} />

      {errors.root?.message ? <p className="rounded-md bg-[#fff1f1] px-3 py-2 text-sm font-700 text-destructive">{errors.root.message}</p> : null}

      <CustomButton icon={LogIn} isLoading={isSubmitting} loadingText="Giriş yapılıyor..." type="submit">
        Giriş yap
      </CustomButton>

      <Link className="block text-center text-sm font-800 text-primary/70 transition-colors hover:text-primary" href="/admin/forgot-password">
        Şifremi unuttum
      </Link>
    </form>
  );
}

