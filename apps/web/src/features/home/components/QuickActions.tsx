/** Atalhos principais (mock até existir fluxo real). */
export function QuickActions() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <button
        type="button"
        className="rounded-lg bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[var(--accent-hover)] disabled:cursor-not-allowed disabled:opacity-60"
        disabled
        title="Em breve: formulário de nova entrega"
      >
        Nova entrega
      </button>
    </div>
  );
}
