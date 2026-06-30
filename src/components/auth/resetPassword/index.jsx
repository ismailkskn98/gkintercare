import AuthCard from "../common/authCard";
import ResetPasswordForm from "./resetPasswordForm";

export default function ResetPassword() {
  return (
    <AuthCard backHref="/admin/login" title="Yeni şifre">
      <ResetPasswordForm />
    </AuthCard>
  );
}

