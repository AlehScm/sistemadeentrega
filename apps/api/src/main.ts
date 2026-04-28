import { createApp } from "./app";

const port = Number(process.env.PORT) || 4000;
const app = createApp();

app.listen(port, () => {
  console.log(`API em http://localhost:${port}`);
  console.log(`  POST /usuarios — registrar`);
  console.log(`  GET  /usuarios — listar`);
});
