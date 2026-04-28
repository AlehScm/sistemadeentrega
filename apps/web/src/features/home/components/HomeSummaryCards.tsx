type Stat = { label: string; value: string; hint: string };

const stats: Stat[] = [
  { label: "Pendentes de retirada", value: "12", hint: "precisam de ação na portaria" },
  { label: "Registradas hoje", value: "8", hint: "chegadas já lançadas" },
  { label: "Retiradas hoje", value: "5", hint: "atualizadas como retirado" },
];

export function HomeSummaryCards() {
  return (
    <section aria-labelledby="home-resumo-heading">
      <h2 id="home-resumo-heading" className="mb-4 text-lg font-semibold text-[var(--foreground)]">
        Resumo do dia
      </h2>
      <p className="mb-4 text-sm text-[var(--muted)]">Valores de demonstração até a API estar ligada.</p>
      <ul className="grid gap-4 sm:grid-cols-3">
        {stats.map((s) => (
          <li
            key={s.label}
            className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm"
          >
            <p className="text-sm font-medium text-[var(--muted)]">{s.label}</p>
            <p className="mt-2 text-3xl font-bold tabular-nums text-[var(--accent)]">{s.value}</p>
            <p className="mt-1 text-xs text-[var(--muted)]">{s.hint}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
