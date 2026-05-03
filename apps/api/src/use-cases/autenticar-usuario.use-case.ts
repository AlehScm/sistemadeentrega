import bcrypt from "bcryptjs";
import { autenticarUsuarioSchema } from "../schemas/autenticar-usuario";
import { DadosInvalidosError } from "../domain/exceptions/dados-invalidos.error";
import { CredenciaisInvalidasError } from "../domain/exceptions/credenciais-invalidas.error";
import type { UsuarioRepository } from "../repositories/usuario";

export class AutenticarUsuarioUseCase {
  constructor(private readonly usuarios: UsuarioRepository) {}

  async execute(body: unknown) {
    const parsed = autenticarUsuarioSchema.safeParse(body);
    if (!parsed.success) {
      throw new DadosInvalidosError(parsed.error.flatten());
    }

    const { email, senha } = parsed.data;
    const usuario = await this.usuarios.findByEmail(email.toLowerCase().trim());

    if (!usuario) {
      throw new CredenciaisInvalidasError();
    }

    const senhaCorreta = await bcrypt.compare(senha, usuario.senhaHash);

    if (!senhaCorreta) {
      throw new CredenciaisInvalidasError();
    }

    // Retorna os dados do usuário. O frontend poderá armazená-los para manter a sessão
    // Numa versão de produção, aqui retornaríamos um JWT
    return {
      id: usuario.id,
      email: usuario.email,
      nome: usuario.nome,
    };
  }
}
