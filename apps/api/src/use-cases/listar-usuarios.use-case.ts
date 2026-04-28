import type { UsuarioRepository } from "../repositories/usuario";

export class ListarUsuariosUseCase {
  constructor(private readonly usuarios: UsuarioRepository) {}

  execute() {
    return this.usuarios.findManyForList();
  }
}
