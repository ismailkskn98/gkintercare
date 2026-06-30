import { Suspense } from "react";
import ResetPassword from "@/components/auth/resetPassword";

export const metadata = {
  title: "Yeni Şifre | GK InterCare",
};

export default function ResetPasswordPage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-[#f4f7fb] px-5">
          <div className="rounded-lg border border-primary/10 bg-white px-5 py-4 text-sm font-800 text-primary shadow-sm">Sayfa yükleniyor...</div>
        </main>
      }
    >
      <ResetPassword />
    </Suspense>
  );
}

