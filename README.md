# 📦 Sistema de Controle de Entregas

Um sistema completo de gerenciamento de entregas desenvolvido para **condomínios, portarias e empresas**, que facilita o controle de entrada, armazenamento e retirada de encomendas destinadas aos moradores ou funcionários.

Com ele é possível registrar entregas, vincular produtos a moradores e residências, acompanhar o status de retirada e manter tudo organizado de forma segura e eficiente.

## 🚀 Tecnologias Utilizadas

- **Frontend**: [Next.js](https://nextjs.org/) (App Router + React Server Components)
- **Backend**: [NestJS](https://nestjs.com/) com TypeScript
- **Banco de Dados**: [Supabase](https://supabase.com/) (PostgreSQL)
- **ORM**: [TypeORM](https://typeorm.io/)
- **Estilização**: (Tailwind CSS / Shadcn/ui - se estiver usando)

## ✨ Funcionalidades Principais

- 📥 **Cadastro rápido de entregas** com vínculo automático a morador, residência e produto
- 👤 **Gerenciamento completo de moradores** (nome, CPF, RG, telefone)
- 🏠 **Controle de residências** por bloco e número do apartamento
- 📦 **Registro detalhado de produtos** recebidos
- ✅ **Controle de status de retirada** (pendente ou retirado)
- 🔄 Relacionamentos robustos entre as entidades (Entrega ↔ Morador ↔ Residência ↔ Produto)

## 🗂️ Estrutura do Banco de Dados

O sistema é modelado com as seguintes entidades principais:

- **Entrega** — Vincula morador, residência, produto e status de retirada
- **Morador** — Dados pessoais (nome, CPF, RG, contato)
- **Residência** — Bloco e número do apartamento
- **Produto** — Nome e descrição do item entregue

Todos os relacionamentos são mapeados via TypeORM com Supabase PostgreSQL.

## 🎯 Objetivo do Projeto

Eliminar o uso de planilhas ou controles manuais nas portarias, oferecendo uma solução moderna, rastreável e segura para a gestão de recebimentos. Ideal para condomínios residenciais, empresariais ou qualquer ambiente que receba volumes frequentes de entregas.

## 🚧 Melhorias Futuras (Roadmap)

- Histórico completo de entregas por morador
- Notificações automáticas (e-mail/SMS/WhatsApp) ao morador
- Interface mobile responsiva ou PWA
- Sistema de autenticação com controle de usuários e permissões (portaria x administrador)
- Relatórios e dashboards analíticos
- Integração com QR Code para retirada rápida

## Como Rodar o Projeto

(Adicione aqui as instruções de instalação e execução — exemplo:)

```bash
# Backend (NestJS)
cd backend
npm install
npm run start:dev

# Frontend (Next.js)
cd frontend
npm install
npm run dev
