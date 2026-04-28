import bcrypt from "bcryptjs";
import { registrarUsuarioSchema } from "../schemas/registrar-usuario";
import { DadosInvalidosError } from "../domain/exceptions/dados-invalidos.error";
import type { UsuarioRepository } from "../repositories/usuario";

export class RegistrarUsuarioUseCase {
  constructor(private readonly usuarios: UsuarioRepository) {}

  /**
   * Valida entrada (regra de aplicação), persiste hash da senha e delega criação ao repositório.
   */
  async execute(body: unknown) {
    const parsed = registrarUsuarioSchema.safeParse(body);
    if (!parsed.success) {
      throw new DadosInvalidosError(parsed.error.flatten());
    }

    const { email, senha, nome } = parsed.data;
    const senhaHash = await bcrypt.hash(senha, 10);
    return this.usuarios.create({
      email: email.toLowerCase().trim(),
      nome: nome.trim(),
      senhaHash,
    });
  }
}
