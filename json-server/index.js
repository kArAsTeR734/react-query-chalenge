import jsonServer from "json-server";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = jsonServer.create();
// Убедитесь, что файл db.json лежит в той же папке, что и этот скрипт
const router = jsonServer.router(path.resolve(__dirname, "db.json"));

const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Ваша задержка (имитация медленной сети)
server.use(async (req, res, next) => {
  await new Promise((resolve) => setTimeout(resolve, 800));
  next();
});

server.use(router);

const PORT = 5000;

// Запускаем напрямую через server.listen
server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});
