"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export function LoginView() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const registrado = searchParams?.get("registrado");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const senha = formData.get("password");

    try {
      const response = await fetch("http://localhost:4000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha }),
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || "E-mail ou senha inválidos");
      }

      const userData = await response.json();
      
      // Simples mock de sessão armazenando no localStorage
      localStorage.setItem("user", JSON.stringify(userData));
      
      // Redireciona para home ou painel
      router.push("/home");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--background)] p-4 sm:p-8">
      {/* Container */}
      <div className="w-full max-w-md overflow-hidden rounded-2xl bg-[var(--card)] shadow-xl ring-1 ring-[var(--border)]">
        {/* Header/Banner */}
        <div className="bg-[var(--accent)] px-8 py-10 text-center text-white relative overflow-hidden">
          {/* Subtle background decoration */}
          <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-white/10 blur-2xl"></div>
          <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-black/10 blur-2xl"></div>
          
          <h1 className="relative z-10 text-3xl font-bold tracking-tight">Bem-vindo de volta</h1>
          <p className="relative z-10 mt-2 text-sm text-white/80">
            Acesse o Sistema de Controle de Entregas
          </p>
        </div>

        {/* Form Content */}
        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6" suppressHydrationWarning>
            {registrado && (
              <div className="p-3 text-sm text-green-700 bg-green-50 rounded-lg border border-green-200">
                Conta criada com sucesso! Você já pode fazer login.
              </div>
            )}
            
            {error && (
              <div className="p-3 text-sm text-red-600 bg-red-50 rounded-lg border border-red-200">
                {error}
              </div>
            )}

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[var(--foreground)]"
              >
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
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-[var(--foreground)]"
                >
                  Senha
                </label>
                <Link
                  href="/esqueci-minha-senha"
                  className="text-xs font-semibold text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors"
                >
                  Esqueci minha senha
                </Link>
              </div>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                className="w-full rounded-lg border border-[var(--border)] bg-transparent px-4 py-3 text-[var(--foreground)] outline-none transition-all focus:border-[var(--ring)] focus:ring-2 focus:ring-[var(--accent-soft)]"
                required
                suppressHydrationWarning
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="group relative w-full overflow-hidden rounded-lg bg-[var(--accent)] px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-[var(--accent-hover)] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[var(--ring)] focus:ring-offset-2 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <span className="relative z-10">{loading ? "Entrando..." : "Entrar"}</span>
            </button>
          </form>

          {/* Footer */}
          <p className="mt-8 text-center text-sm text-[var(--muted)]">
            Ainda não tem uma conta?{" "}
            <Link
              href="/registro"
              className="font-semibold text-[var(--accent)] hover:underline"
            >
              Crie agora
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
