import { z } from "zod";

export const autenticarUsuarioSchema = z.object({
  email: z.string().email(),
  senha: z.string().min(1, "A senha é obrigatória"),
});

export type AutenticarUsuarioInput = z.infer<typeof autenticarUsuarioSchema>;
