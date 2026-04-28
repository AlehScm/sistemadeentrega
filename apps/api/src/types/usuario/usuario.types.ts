/** Usuário recém-persistido (sem senha). */
export type UsuarioCriado = {
  id: string;
  email: string;
  nome: string;
  createdAt: Date;
};

/** Item da listagem pública de usuários. */
export type UsuarioListaItem = UsuarioCriado & { updatedAt: Date };

/** Dados para inserção no banco (já com hash). */
export type UsuarioCreatePersistenceInput = {
  email: string;
  nome: string;
  senhaHash: string;
};
