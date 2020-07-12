import { Router } from "https://deno.land/x/oak/mod.ts";

import {
  getStudById,
  getStud,
  getBook,
  getPurchasedBookByStud,
  getPurchasedBook,
  deleteStud,
} from "./controller.ts";
// import { schema, context } from "./graphql.ts";
//  deno run --allow-net --allow-env app.ts
const router = new Router();
router
  .get("/denostud/:id", getStudById)
  .delete("/denoStud/:studid", deleteStud)
  .get("/denobook", getBook)
  .get("/denostud", getStud)
  .get("/denopurchasedbook", getPurchasedBook)
  .get("/denopurchasedbook/:studId", getPurchasedBookByStud);
// .post("/graphql", graphqlHttp({ schema, context }));
// .post("/graph", async ({ request, response }) => {
//   if (request.hasBody) {
//     const body = await request.body();
//     const result = await executeSchema(body.value);
//     response.body = result;
//   } else {
//     response.body = "Query Unknown";
//   }
// });
export default router;
