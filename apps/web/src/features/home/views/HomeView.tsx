import { HomeSummaryCards } from "../components/HomeSummaryCards";
import { PendingDeliveriesTable } from "../components/PendingDeliveriesTable";
import { QuickActions } from "../components/QuickActions";

/**
 * Painel operacional (equipe da portaria no dia a dia).
 * Dados mockados até integração com a API.
 */
export function HomeView() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-6 flex flex-col gap-4 sm:mb-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="min-w-0">
          <h1 className="text-2xl font-bold tracking-tight text-[var(--foreground)] sm:text-3xl">
            Painel de entregas
          </h1>
        </div>
        <QuickActions />
      </header>

      <div className="space-y-10">
        <PendingDeliveriesTable />
        <HomeSummaryCards />
      </div>
    </div>
  );
}
