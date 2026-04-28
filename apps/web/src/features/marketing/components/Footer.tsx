export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-slate-900 py-12 text-slate-300">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm">
          © {new Date().getFullYear()} Sistema de Controle de Entregas — interface de demonstração.
        </p>
        <p className="text-center text-xs text-slate-500 sm:text-right">
          Front-end apenas; login e dados reais serão conectados depois ao backend e Supabase.
        </p>
      </div>
    </footer>
  );
}
