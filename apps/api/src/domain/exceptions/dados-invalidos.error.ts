import type { z } from "zod";

export class DadosInvalidosError extends Error {
  constructor(public readonly details: ReturnType<z.ZodError["flatten"]>) {
    super("Dados inválidos");
    this.name = "DadosInvalidosError";
  }
}
