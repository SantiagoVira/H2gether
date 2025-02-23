import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { config } from "dotenv";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter, createTRPCContext } from "../../trpc";
import { trpcServer } from "@hono/trpc-server";

config();
const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.use("/trpc/*", (ctx) =>
  fetchRequestHandler({
    endpoint: "/trpc",
    router: appRouter,
    createContext: () => createTRPCContext(ctx),
    req: ctx.req.raw,
  })
);

// serve(
//   {
//     fetch: app.fetch,
//     port: 3000,
//   },
//   (info) => {
//     console.log(`Server is running on http://localhost:${info.port}`);
//   }
// );

serve(app);
