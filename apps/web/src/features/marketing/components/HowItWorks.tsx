const steps = [
  {
    step: "01",
    title: "Cadastre moradores e unidades",
    text: "Bloco, apartamento e contatos ficam salvos para vincular cada entrega corretamente.",
  },
  {
    step: "02",
    title: "Registre a encomenda na chegada",
    text: "Produto, destinatário e unidade entram no sistema no momento em que o pacote chega.",
  },
  {
    step: "03",
    title: "Atualize na retirada",
    text: "Marque como retirado quando o morador levar — o histórico fica consistente.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="border-t border-[var(--border)] bg-[var(--card)] py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
          Como funciona
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-[var(--muted)]">
          Um fluxo linear que a portaria reconhece no dia a dia — sem treinamento longo.
        </p>
        <ol className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((s) => (
            <li
              key={s.step}
              className="relative rounded-2xl border border-[var(--border)] bg-slate-50/50 p-6 pt-10"
            >
              <span className="absolute -top-3 left-6 inline-flex rounded-md bg-[var(--accent)] px-2 py-0.5 text-xs font-bold text-white">
                {s.step}
              </span>
              <h3 className="text-lg font-semibold text-[var(--foreground)]">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
