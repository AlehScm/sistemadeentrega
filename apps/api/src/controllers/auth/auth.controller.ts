import { Router } from "express";
import { DadosInvalidosError } from "../../domain/exceptions/dados-invalidos.error";
import { CredenciaisInvalidasError } from "../../domain/exceptions/credenciais-invalidas.error";
import { UsuarioPrismaRepository } from "../../repositories/usuario";
import { AutenticarUsuarioUseCase } from "../../use-cases/autenticar-usuario.use-case";

const usuarioRepository = new UsuarioPrismaRepository();
const autenticarUsuarioUseCase = new AutenticarUsuarioUseCase(usuarioRepository);

export const authRouter = Router();

authRouter.post("/login", async (req, res, next) => {
  try {
    const result = await autenticarUsuarioUseCase.execute(req.body);
    return res.status(200).json(result);
  } catch (err) {
    if (err instanceof DadosInvalidosError) {
      return res.status(400).json({ error: err.message, details: err.details });
    }
    if (err instanceof CredenciaisInvalidasError) {
      return res.status(401).json({ error: err.message });
    }
    next(err);
  }
});
