import express from "express";
import cors from "cors";
import { usuariosRouter } from "./controllers/usuarios";
import { authRouter } from "./controllers/auth";

export function createApp() {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.get("/health", (_req, res) => {
    res.json({ ok: true });
  });

  app.use("/usuarios", usuariosRouter);
  app.use("/auth", authRouter);

  app.use(
    (
      err: unknown,
      _req: express.Request,
      res: express.Response,
      _next: express.NextFunction,
    ) => {
      console.error(err);
      res.status(500).json({ 
        error: "Erro interno do servidor",
        detail: err instanceof Error ? err.message : String(err),
        stack: err instanceof Error ? err.stack : undefined
      });
    },
  );

  return app;
}
