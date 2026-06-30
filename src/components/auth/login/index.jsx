import AuthCard from "../common/authCard";
import LoginForm from "./loginForm";

export default function Login() {
  return (
    <AuthCard description="Yetkili hesabınla panele giriş yap." title="Admin girişi">
      <LoginForm />
    </AuthCard>
  );
}

