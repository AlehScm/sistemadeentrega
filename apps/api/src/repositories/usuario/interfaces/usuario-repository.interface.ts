import type {
  UsuarioCriado,
  UsuarioCreatePersistenceInput,
  UsuarioListaItem,
} from "../../../types/usuario";

export interface UsuarioRepository {
  create(data: UsuarioCreatePersistenceInput): Promise<UsuarioCriado>;
  findManyForList(): Promise<UsuarioListaItem[]>;
}
