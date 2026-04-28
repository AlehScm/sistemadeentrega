import { Prisma } from "@prisma/client";
import type { PrismaClient } from "@prisma/client";
import { EmailJaCadastradoError } from "../../domain/exceptions/email-ja-cadastrado.error";
import { prisma } from "../prisma";
import type {
  UsuarioCriado,
  UsuarioCreatePersistenceInput,
  UsuarioListaItem,
} from "../../types/usuario";
import type { UsuarioRepository } from "./interfaces/usuario-repository.interface";

export class UsuarioPrismaRepository implements UsuarioRepository {
  constructor(private readonly db: PrismaClient = prisma) {}

  async create(data: UsuarioCreatePersistenceInput): Promise<UsuarioCriado> {
    try {
      return await this.db.usuario.create({
        data,
        select: {
          id: true,
          email: true,
          nome: true,
          createdAt: true,
        },
      });
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === "P2002") {
        throw new EmailJaCadastradoError();
      }
      throw err;
    }
  }

  async findManyForList(): Promise<UsuarioListaItem[]> {
    return this.db.usuario.findMany({
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        email: true,
        nome: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }
}
