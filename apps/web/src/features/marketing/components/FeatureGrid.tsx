const features = [
  {
    title: "Cadastro rápido de entregas",
    description:
      "Registre o que chegou na portaria e associe morador, unidade e produto em poucos passos.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 4v16m8-8H4" />
    ),
  },
  {
    title: "Moradores e residências",
    description:
      "Mantenha bloco, apartamento e dados de contato organizados para localizar quem retira.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    ),
  },
  {
    title: "Status de retirada",
    description:
      "Veja o que ainda está pendente e o que já foi entregue ao morador, sem planilhas paralelas.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M5 13l4 4L19 7" />
    ),
  },
  {
    title: "Pronto para evoluir",
    description:
      "Base pensada para notificações, relatórios e permissões — quando você quiser ligar o restante.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    ),
  },
];

export function FeatureGrid() {
  return (
    <section id="recursos" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
          Recursos pensados para a operação real da portaria
        </h2>
        <p className="mt-4 text-lg text-[var(--muted)]">
          Menos papel perdido, menos dúvida na retirada — mais clareza para quem recebe e para quem
          busca a encomenda.
        </p>
      </div>
      <ul className="mx-auto mt-14 grid gap-6 sm:grid-cols-2 lg:gap-8">
        {features.map((f) => (
          <li
            key={f.title}
            className="flex gap-4 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent)]">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                {f.icon}
              </svg>
            </span>
            <div>
              <h3 className="text-lg font-semibold text-[var(--foreground)]">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{f.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
