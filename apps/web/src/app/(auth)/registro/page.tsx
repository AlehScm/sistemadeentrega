import { RegisterView } from "@/features/auth";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Registrar | Sistema de Controle de Entregas",
  description: "Crie sua conta no sistema de controle de entregas.",
};

export default function RegisterPage() {
  return <RegisterView />;
}
