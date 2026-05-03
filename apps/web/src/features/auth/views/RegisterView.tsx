"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export function RegisterView() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const nome = formData.get("nome");
    const email = formData.get("email");
    const senha = formData.get("senha");

    try {
      const response = await fetch("http://localhost:4000/usuarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email, senha }),
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || "Erro ao registrar conta");
      }

      // Se sucesso, redireciona para login
      router.push("/login?registrado=true");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--background)] p-4 sm:p-8">
      <div className="w-full max-w-md overflow-hidden rounded-2xl bg-[var(--card)] shadow-xl ring-1 ring-[var(--border)]">
        <div className="bg-[var(--accent)] px-8 py-10 text-center text-white relative overflow-hidden">
          <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-white/10 blur-2xl"></div>
          <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-black/10 blur-2xl"></div>
          
          <h1 className="relative z-10 text-3xl font-bold tracking-tight">Criar Conta</h1>
          <p className="relative z-10 mt-2 text-sm text-white/80">
            Cadastre-se no Sistema de Controle de Entregas
          </p>
        </div>

        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6" suppressHydrationWarning>
            {error && (
              <div className="p-3 text-sm text-red-600 bg-red-50 rounded-lg border border-red-200">
                {error}
              </div>
            )}

            <div className="space-y-2">
              <label htmlFor="nome" className="block text-sm font-medium text-[var(--foreground)]">
                Nome completo
              </label>
              <input
                id="nome"
                name="nome"
                type="text"
                placeholder="Seu nome"
                className="w-full rounded-lg border border-[var(--border)] bg-transparent px-4 py-3 text-[var(--foreground)] outline-none transition-all focus:border-[var(--ring)] focus:ring-2 focus:ring-[var(--accent-soft)]"
                required
                minLength={2}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-[var(--foreground)]">
                E-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="seu@email.com"
                className="w-full rounded-lg border border-[var(--border)] bg-transparent px-4 py-3 text-[var(--foreground)] outline-none transition-all focus:border-[var(--ring)] focus:ring-2 focus:ring-[var(--accent-soft)]"
                required
                suppressHydrationWarning
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="senha" className="block text-sm font-medium text-[var(--foreground)]">
                Senha
              </label>
              <input
                id="senha"
                name="senha"
                type="password"
                placeholder="••••••••"
                className="w-full rounded-lg border border-[var(--border)] bg-transparent px-4 py-3 text-[var(--foreground)] outline-none transition-all focus:border-[var(--ring)] focus:ring-2 focus:ring-[var(--accent-soft)]"
                required
                minLength={8}
                suppressHydrationWarning
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="group relative w-full overflow-hidden rounded-lg bg-[var(--accent)] px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-[var(--accent-hover)] focus:outline-none disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <span className="relative z-10">{loading ? "Criando..." : "Registrar"}</span>
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-[var(--muted)]">
            Já tem uma conta?{" "}
            <Link href="/login" className="font-semibold text-[var(--accent)] hover:underline">
              Entrar
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
