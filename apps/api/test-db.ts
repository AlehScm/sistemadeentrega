import * as dotenv from "dotenv";
dotenv.config();
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  try {
    const usuarios = await prisma.usuario.findMany();
    console.log("Conexão com Prisma ok:", usuarios.length);
  } catch (e) {
    console.error("Erro no Prisma:", e);
  } finally {
    await prisma.$disconnect();
  }
}

main();
