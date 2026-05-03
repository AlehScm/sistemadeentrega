import { LoginView } from "@/features/auth";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | Sistema de Controle de Entregas",
  description: "Acesse sua conta no sistema de controle de entregas.",
};

export default function LoginPage() {
  return <LoginView />;
}
