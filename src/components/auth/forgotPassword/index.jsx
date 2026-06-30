import AuthCard from "../common/authCard";
import ForgotPasswordForm from "./forgotPasswordForm";

export default function ForgotPassword() {
  return (
    <AuthCard backHref="/admin/login" description="Email adresini yaz, yenileme bağlantısı hazırlansın." title="Şifre yenileme">
      <ForgotPasswordForm />
    </AuthCard>
  );
}

