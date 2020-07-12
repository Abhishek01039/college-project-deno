import { Client } from "https://deno.land/x/postgres/mod.ts";

// async function main() {
export const client = new Client({
  user: "postgres",
  database: "postgres",
  hostname: "localhost",
  port: 5432,
  password: "root",
});
await client.connect();

export default client;
// const client = new Client({
//   user: "postgres",
//   database: "postgres",
//   hostname: "localhost",
//   port: 5432,
//   password: "root",
// });
// await client.connect();
// await client.end();
