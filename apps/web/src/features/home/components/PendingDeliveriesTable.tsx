"use client";

import { useEffect, useMemo, useState } from "react";
import {
  MOCK_PENDING_DELIVERIES,
  type PendingDeliveryRow,
} from "../lib/mock-pending-deliveries";

const PAGE_SIZE = 10;

function rowMatchesQuery(row: PendingDeliveryRow, query: string): boolean {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  const haystack = [row.morador, row.unidade, row.produto, row.chegada]
    .join(" ")
    .toLowerCase();
  return haystack.includes(q);
}

export function PendingDeliveriesTable() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(
    () => MOCK_PENDING_DELIVERIES.filter((r) => rowMatchesQuery(r, query)),
    [query],
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(Math.max(1, page), totalPages);

  useEffect(() => {
    setPage(1);
  }, [query]);

  const start = (currentPage - 1) * PAGE_SIZE;
  const pageRows = filtered.slice(start, start + PAGE_SIZE);
  const from = filtered.length === 0 ? 0 : start + 1;
  const to = start + pageRows.length;

  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-sm">
      <div className="border-b border-[var(--border)] px-5 py-4">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-base font-semibold text-[var(--foreground)]">
              Entregas pendentes de retirada
            </h2>
          </div>
          <div className="relative w-full max-w-md shrink-0">
            <label htmlFor="pending-search" className="sr-only">
              Pesquisar na lista
            </label>
            <svg
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--muted)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              id="pending-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Pesquisar morador, unidade ou produto…"
              className="w-full rounded-lg border border-[var(--border)] bg-[var(--card)] py-2 pl-9 pr-3 text-sm text-[var(--foreground)] shadow-sm outline-none ring-[var(--ring)] placeholder:text-[var(--muted)] focus:ring-2"
              autoComplete="off"
            />
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="border-b border-[var(--border)] bg-slate-50/80 text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">
            <tr>
              <th className="px-5 py-3 font-medium">Chegada</th>
              <th className="px-5 py-3 font-medium">Morador</th>
              <th className="px-5 py-3 font-medium">Unidade</th>
              <th className="px-5 py-3 font-medium">Produto / descrição</th>
              <th className="px-5 py-3 text-right font-medium">Ação</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--border)]">
            {pageRows.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-5 py-10 text-center text-[var(--muted)]">
                  Nenhum resultado para esta pesquisa.
                </td>
              </tr>
            ) : (
              pageRows.map((row) => (
                <tr key={row.id} className="transition-colors hover:bg-slate-50/50">
                  <td className="whitespace-nowrap px-5 py-3.5 text-[var(--foreground)]">
                    {row.chegada}
                  </td>
                  <td className="px-5 py-3.5 font-medium text-[var(--foreground)]">
                    {row.morador}
                  </td>
                  <td className="px-5 py-3.5 text-[var(--muted)]">{row.unidade}</td>
                  <td className="px-5 py-3.5 text-[var(--muted)]">{row.produto}</td>
                  <td className="px-5 py-3.5 text-right">
                    <button
                      type="button"
                      className="rounded-lg border border-[var(--border)] bg-[var(--card)] px-3 py-1.5 text-xs font-semibold text-[var(--foreground)] shadow-sm transition-colors hover:bg-slate-50 disabled:opacity-50"
                      disabled
                      title="Em breve: marcar como retirado"
                    >
                      Registrar retirada
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col gap-3 border-t border-[var(--border)] bg-slate-50/40 px-5 py-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-[var(--muted)]">
          {filtered.length === 0 ? (
            "0 resultados"
          ) : (
            <>
              Mostrando <span className="font-medium text-[var(--foreground)]">{from}</span>–
              <span className="font-medium text-[var(--foreground)]">{to}</span> de{" "}
              <span className="font-medium text-[var(--foreground)]">{filtered.length}</span>{" "}
              pendente{filtered.length !== 1 ? "s" : ""}
            </>
          )}
        </p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={currentPage <= 1 || filtered.length === 0}
            className="rounded-lg border border-[var(--border)] bg-[var(--card)] px-3 py-1.5 text-sm font-semibold text-[var(--foreground)] shadow-sm transition-colors hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Anterior
          </button>
          <span className="text-sm text-[var(--muted)]">
            Página{" "}
            <span className="font-semibold text-[var(--foreground)]">{currentPage}</span> de{" "}
            <span className="font-semibold text-[var(--foreground)]">{totalPages}</span>
          </span>
          <button
            type="button"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage >= totalPages || filtered.length === 0}
            className="rounded-lg border border-[var(--border)] bg-[var(--card)] px-3 py-1.5 text-sm font-semibold text-[var(--foreground)] shadow-sm transition-colors hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Próxima
          </button>
        </div>
      </div>
    </div>
  );
}
