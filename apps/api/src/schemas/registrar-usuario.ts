import { z } from "zod";

export const registrarUsuarioSchema = z.object({
  email: z.string().email(),
  senha: z.string().min(8, "Senha deve ter pelo menos 8 caracteres"),
  nome: z.string().min(2, "Nome muito curto").max(120),
});

export type RegistrarUsuarioInput = z.infer<typeof registrarUsuarioSchema>;
