import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./routes.ts";

const app = new Application();
const env = Deno.env.toObject();
const HOST = env.HOST || "192.168.43.182";
const PORT = env.PORT || 7700;
app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Listening on port ${PORT} ...`);
await app.listen(`${HOST}:${PORT}`);
