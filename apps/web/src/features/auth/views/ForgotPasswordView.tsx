import Link from "next/link";
import React from "react";

export function ForgotPasswordView() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--background)] p-4 sm:p-8">
      {/* Container */}
      <div className="w-full max-w-md overflow-hidden rounded-2xl bg-[var(--card)] shadow-xl ring-1 ring-[var(--border)]">
        {/* Header/Banner */}
        <div className="bg-[var(--accent)] px-8 py-10 text-center text-white relative overflow-hidden">
          {/* Subtle background decoration */}
          <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-white/10 blur-2xl"></div>
          <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-black/10 blur-2xl"></div>
          
          <h1 className="relative z-10 text-3xl font-bold tracking-tight">Recuperar Senha</h1>
          <p className="relative z-10 mt-2 text-sm text-white/80">
            Digite seu e-mail para receber as instruções
          </p>
        </div>

        {/* Form Content */}
        <div className="p-8">
          <form className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[var(--foreground)]"
              >
                E-mail cadastrado
              </label>
              <input
                id="email"
                type="email"
                placeholder="seu@email.com"
                className="w-full rounded-lg border border-[var(--border)] bg-transparent px-4 py-3 text-[var(--foreground)] outline-none transition-all focus:border-[var(--ring)] focus:ring-2 focus:ring-[var(--accent-soft)]"
                required
              />
            </div>

            <button
              type="submit"
              className="group relative w-full overflow-hidden rounded-lg bg-[var(--accent)] px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-[var(--accent-hover)] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[var(--ring)] focus:ring-offset-2 active:scale-[0.98]"
            >
              <span className="relative z-10">Enviar instruções</span>
              {/* Button hover effect */}
              <div className="absolute inset-0 h-full w-full bg-white/20 scale-x-0 opacity-0 transition-all duration-300 group-hover:scale-x-100 group-hover:opacity-100 origin-left"></div>
            </button>
          </form>

          {/* Footer */}
          <div className="mt-8 flex flex-col items-center gap-4 text-sm text-[var(--muted)]">
            <Link
              href="/login"
              className="flex items-center gap-2 font-semibold text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              Voltar para o login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
