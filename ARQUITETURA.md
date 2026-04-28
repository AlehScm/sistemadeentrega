# Arquitetura do projeto

Este documento descreve a organização em **monorepo**: front (Next.js), API (controllers, use cases, repositories) e código compartilhado. O objetivo é manter responsabilidades separadas e facilitar evolução sem misturar UI com regras de negócio nem detalhes de banco com o domínio.

---

## Visão geral

```
sistemadeentrega/
├── apps/
│   ├── web/          # Frontend Next.js (App Router + features verticais)
│   └── api/          # Backend (controllers → use cases → repositories)
├── packages/
│   └── shared/       # Tipos e constantes usados por web e api
└── README.md
```

- **Supabase**: Postgres, autenticação e (opcionalmente) storage/realtime. O front usa o cliente público com políticas RLS; a API usa credenciais de serviço apenas na camada de infraestrutura, quando necessário.

---

## `apps/web` — Frontend (Next.js)

Código da aplicação que roda no navegador e no servidor Next (RSC, rotas). A organização segue **arquitetura por features** (vertical slice): cada domínio do produto vira uma pasta em **`src/features/<feature>/`** com sua própria UI e lógica. As rotas em **`src/app/`** ficam finas — só ligam URL → view do feature.

```
apps/web/
└── src/
    ├── app/                       # App Router (rotas finas)
    │   ├── (marketing)/           # Route group: páginas públicas (URL não muda)
    │   │   └── page.tsx           # Rota `/` → MarketingView
    │   ├── layout.tsx             # Root layout, fontes, metadata
    │   ├── globals.css
    │   └── favicon.ico
    ├── features/                  # Módulos verticais por domínio
    │   └── marketing/
    │       ├── components/        # UI específica desta feature
    │       ├── views/             # Compõe a tela completa
    │       └── index.ts           # Superfície pública da feature
    ├── components/                # Compartilhado entre features
    │   ├── ui/                    # Design system (Button, Input, Card…)
    │   └── layout/                # Header/Footer/Sidebar reutilizáveis
    ├── hooks/                     # Hooks React reutilizáveis
    ├── lib/                       # Cliente Supabase (browser), fetch, formatação
    └── types/                     # Tipos específicos do front
```

| Pasta | Função |
|--------|--------|
| `src/app/` | **App Router**: `layout.tsx`, `globals.css`, favicon. Rotas em pastas; **route groups** `(nome)` não aparecem na URL — ex.: `(marketing)/page.tsx` é a rota `/`. Convenção sugerida: `(marketing)` para páginas públicas, `(dashboard)` para área autenticada, `(auth)` para login/registro. |
| `src/features/<feature>/` | **Feature vertical** (ex.: `marketing`, `entregas`, `moradores`). `components/` para UI da feature, `views/` compõe a tela completa, `index.ts` expõe só o que outras camadas podem importar. Novos domínios = nova pasta aqui, **sem mexer no App Router** além de uma rota fininha. |
| `src/components/ui/` | **Design system**: componentes genéricos (botões, inputs, cards), sem regra de negócio. |
| `src/components/layout/` | Estruturas de layout reutilizadas entre features (ex.: shell autenticado, navegação principal). |
| `src/lib/` | Utilitários e **cliente Supabase para o browser**, helpers de fetch, formatação. |
| `src/hooks/` | Hooks React reutilizáveis (`useMediaQuery`, `useDebounce`, hooks de dados). |
| `src/types/` | Tipos **específicos do frontend** (props, estado de UI). Contratos de API compartilhados preferir em `packages/shared`. |

**Regra de import:** uma feature **não** importa de outra feature direto — usa `components/`, `hooks/`, `lib/` ou `packages/shared`. Isso evita acoplamento entre domínios.

---

## `apps/api` — Backend

API REST com fluxo direto: **controller → use case → repository** (e entidades de domínio quando fizer sentido). Objetivo: HTTP fino, regra no use case, persistência no repository.

```
apps/api/
├── prisma/
│   └── schema.prisma   # Prisma: Usuario, Morador, Residencia, Produto, Entrega, StatusRetirada
└── src/
    ├── controllers/    # HTTP: rotas, DTOs, chama use cases
    │   ├── entregas/
    │   ├── moradores/
    │   ├── residencias/
    │   ├── produtos/
    │   └── usuarios/
    ├── use-cases/
    ├── types/           # Tipos por domínio (sem Prisma / sem HTTP)
    │   └── usuario/
    ├── repositories/
    │   ├── prisma.ts   # singleton PrismaClient
    │   ├── usuario/
    │   │   ├── interfaces/
    │   │   └── usuario.prisma-repository.ts
    │   └── supabase/
    ├── domain/
    │   ├── entities/
    │   └── exceptions/
    ├── common/
    │   ├── guards/
    │   ├── pipes/
    │   └── filters/
    └── config/
```

| Pasta | Função |
|--------|--------|
| `src/controllers/` | **Controllers**: expõem endpoints, validam entrada, chamam **use cases** e devolvem resposta. Um subdiretório por área (`entregas`, `moradores`, `residencias`, `produtos`, `usuarios`). |
| `src/use-cases/` | **Use cases**: uma ação do sistema por classe (ex.: `RegistrarEntregaUseCase`). Orquestra domínio e chama **repositories**; não conhece detalhe de HTTP. |
| `src/types/<domínio>/` | Tipos e aliases **só de dados** (DTOs de leitura/escrita entre camadas), sem dependência de framework. |
| `src/repositories/<domínio>/interfaces/` | Contratos do repositório (ex.: `UsuarioRepository`). |
| `src/repositories/<domínio>/` | Implementação Prisma (`*.prisma-repository.ts`) + `index.ts`. |
| `src/repositories/` | `prisma.ts` (singleton) e pastas por domínio; **Supabase** em `supabase/` quando não for Prisma. |
| `src/repositories/supabase/` | **Supabase server-side** (cliente service-role, Auth, Storage, Realtime) quando não for via Prisma — nunca o mesmo cliente exposto ao browser. |
| `prisma/schema.prisma` | Modelo do Postgres (Supabase): tabelas, relações e enums; `npm run db:migrate` / `db:push` na pasta `apps/api`. |
| `src/domain/entities/` | Entidades de negócio (Morador, Entrega, …): regras e invariantes sem depender de HTTP ou de como o dado é gravado. |
| `src/domain/exceptions/` | Erros de domínio; os **filters** em `common` convertem em status HTTP. |
| `src/common/guards/` | Autenticação/autorização (ex.: JWT Supabase). |
| `src/common/pipes/` | Validação/transformação de body, query, params. |
| `src/common/filters/` | Tratamento global de erros → respostas consistentes. |
| `src/config/` | Variáveis de ambiente e config tipada (URL Supabase, secrets). |

Fluxo típico: **Controller** → **Use case** → **Repository** (+ **entidades** no meio quando a regra não for só CRUD).

**Prisma (em `apps/api`):** copie `.env.example` → `.env`, preencha `DATABASE_URL` e `DIRECT_URL` com as strings do Supabase (*Connect*). Comandos: `npm run db:generate`, `npm run db:migrate` (migrations) ou `npm run db:push` (protótipo), `npm run db:studio`.

---

## `packages/shared`

Código **sem dependência de React nem Nest**, que tanto o `web` quanto o `api` podem importar.

| Pasta | Função |
|--------|--------|
| `src/types/` | DTOs, tipos de API, enums compartilhados (ex.: status de retirada) para não duplicar definições. |
| `src/constants/` | Valores fixos compartilhados (labels, limites, chaves de cache, etc.). |

---

## Relação com o README do produto

O README descreve o **produto** (entregas, moradores, residências, produtos). Esta estrutura é o **esqueleto técnico**: modelo relacional inicial já espelhado em `prisma/schema.prisma`; entidades de domínio em código podem evoluir em paralelo ao schema.
