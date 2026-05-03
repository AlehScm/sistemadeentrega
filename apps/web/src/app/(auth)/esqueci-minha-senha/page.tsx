import { ForgotPasswordView } from "@/features/auth";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recuperar Senha | Sistema de Controle de Entregas",
  description: "Recupere o acesso à sua conta.",
};

export default function ForgotPasswordPage() {
  return <ForgotPasswordView />;
}
