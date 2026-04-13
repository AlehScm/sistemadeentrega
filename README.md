## 📦 Sistema de Controle de Entregas

Este projeto é um sistema de gerenciamento de entregas desenvolvido para controlar a entrada, armazenamento e retirada de produtos destinados a moradores de uma residência ou condomínio.

O sistema permite registrar entregas associando produtos, moradores e suas respectivas residências, além de acompanhar o status de retirada.

---

## 🚀 Funcionalidades

- 📥 Cadastro de entregas
- 👤 Gerenciamento de moradores
- 🏠 Controle de residências (bloco e número do apartamento)
- 📦 Registro de produtos recebidos
- ✅ Controle de retirada de entregas (retirado ou pendente)

---

## 🗂️ Estrutura do Banco de Dados

O sistema é baseado nas seguintes entidades:

### 📦 Entrega
- `id`
- `morador_id` → Relacionamento com Morador
- `residencia_id` → Relacionamento com Residência
- `produto_id` → Relacionamento com Produto
- `retirada` → Indica se o item foi retirado (true/false)

### 👤 Morador
- `id`
- `nome`
- `cpf`
- `rg`
- `numero`

### 🏠 Residência
- `id`
- `bloco`
- `numero_apto`

### 📦 Produto
- `id`
- `nome`

---

## 🔗 Relacionamentos

- Uma **entrega** está vinculada a:
  - um **morador**
  - uma **residência**
  - um **produto**

---

## 🛠️ Objetivo

Facilitar o controle e rastreamento de entregas em ambientes como condomínios, portarias ou empresas, garantindo organização e segurança na gestão dos itens recebidos.

---

## 📌 Possíveis melhorias futuras

- Histórico de entregas por morador
- Notificações de chegada de encomendas
- Interface web/mobile
- Controle de usuários e permissões
- Relatórios e dashboards
