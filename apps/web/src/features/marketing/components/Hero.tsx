import Link from "next/link";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b border-[var(--border)] bg-[var(--card)]"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `radial-gradient(at 40% 20%, rgba(13, 148, 136, 0.15) 0px, transparent 50%),
            radial-gradient(at 80% 0%, rgba(15, 23, 42, 0.06) 0px, transparent 45%)`,
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-slate-50/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
            Condomínios · Portarias · Empresas
          </p>
          <h1 className="text-balance text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
            Controle de entregas{" "}
            <span className="text-[var(--accent)]">sem planilha e sem caos</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-[var(--muted)]">
            Registre encomendas, vincule a moradores e unidades, acompanhe retiradas e mantenha a
            portaria organizada — tudo em um painel simples e moderno.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/home"
              className="inline-flex h-12 min-w-[180px] items-center justify-center rounded-lg bg-[var(--accent)] px-6 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[var(--accent-hover)]"
            >
              Abrir painel
            </Link>
            <Link
              href="#recursos"
              className="inline-flex h-12 min-w-[180px] items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--card)] px-6 text-sm font-semibold text-[var(--foreground)] shadow-sm transition-colors hover:bg-slate-50"
            >
              Ver recursos
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-4 sm:grid-cols-3">
          {[
            { value: "4", label: "pilares do cadastro", hint: "Entrega, morador, residência, produto" },
            { value: "100%", label: "rastreável", hint: "Status pendente ou retirado" },
            { value: "1", label: "painel central", hint: "Menos fila na portaria" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-[var(--border)] bg-slate-50/60 px-5 py-4 text-center backdrop-blur-sm"
            >
              <p className="text-2xl font-bold text-[var(--accent)]">{stat.value}</p>
              <p className="mt-1 text-sm font-semibold text-[var(--foreground)]">{stat.label}</p>
              <p className="mt-0.5 text-xs text-[var(--muted)]">{stat.hint}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
