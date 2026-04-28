import Link from "next/link";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-full flex-col bg-[var(--background)]">
      <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--card)]/95 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-7xl items-center gap-4 px-4 sm:px-6">
          <div className="flex items-center gap-6">
            <Link
              href="/home"
              className="text-lg font-semibold tracking-tight text-[var(--foreground)]"
            >
              Painel
            </Link>
            <nav className="hidden items-center gap-1 sm:flex" aria-label="Operação">
              <span className="rounded-md bg-[var(--accent-soft)] px-2.5 py-1 text-xs font-semibold text-[var(--accent)]">
                Início
              </span>
            </nav>
          </div>
        </div>
      </header>
      <div className="flex-1">{children}</div>
    </div>
  );
}
