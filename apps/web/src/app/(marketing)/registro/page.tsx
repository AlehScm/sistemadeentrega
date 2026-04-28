import Link from "next/link";
import { Footer } from "@/features/marketing/components/Footer";
import { Header } from "@/features/marketing/components/Header";

export default function RegistroPage() {
  return (
    <div className="flex min-h-full flex-col">
      <Header />
      <main className="flex-1">
        <div className="mx-auto flex min-h-[60vh] max-w-lg flex-col justify-center px-4 py-16 sm:px-6">
          <h1 className="text-2xl font-bold tracking-tight text-[var(--foreground)]">
            Criar conta
          </h1>
          <p className="mt-3 text-[var(--muted)]">
            O cadastro de condomínio ou portaria ainda não está disponível nesta versão de
            demonstração. Em breve você poderá registrar sua organização aqui.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--card)] px-4 py-2.5 text-sm font-semibold text-[var(--foreground)] shadow-sm transition-colors hover:bg-slate-50"
            >
              Voltar ao início
            </Link>
            <Link
              href="/home"
              className="inline-flex items-center justify-center rounded-lg bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[var(--accent-hover)]"
            >
              Ir ao painel
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
