import { Router } from "express";
import { DadosInvalidosError } from "../../domain/exceptions/dados-invalidos.error";
import { EmailJaCadastradoError } from "../../domain/exceptions/email-ja-cadastrado.error";
import { UsuarioPrismaRepository } from "../../repositories/usuario";
import { ListarUsuariosUseCase } from "../../use-cases/listar-usuarios.use-case";
import { RegistrarUsuarioUseCase } from "../../use-cases/registrar-usuario.use-case";

const usuarioRepository = new UsuarioPrismaRepository();
const registrarUsuarioUseCase = new RegistrarUsuarioUseCase(usuarioRepository);
const listarUsuariosUseCase = new ListarUsuariosUseCase(usuarioRepository);

export const usuariosRouter = Router();

usuariosRouter.post("/", async (req, res, next) => {
  try {
    const usuario = await registrarUsuarioUseCase.execute(req.body);
    return res.status(201).json(usuario);
  } catch (err) {
    if (err instanceof DadosInvalidosError) {
      return res.status(400).json({ error: err.message, details: err.details });
    }
    if (err instanceof EmailJaCadastradoError) {
      return res.status(409).json({ error: err.message });
    }
    next(err);
  }
});

usuariosRouter.get("/", async (_req, res, next) => {
  try {
    const usuarios = await listarUsuariosUseCase.execute();
    return res.json(usuarios);
  } catch (err) {
    next(err);
  }
});
