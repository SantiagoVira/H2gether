import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";

import { config } from "dotenv";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter, createTRPCContext } from "../../trpc";
import { trpcServer } from "@hono/trpc-server";
import { logger } from "hono/logger";

config();
const app = new Hono();

app.use(logger());
app.use(cors({ origin: "*" }));

// app.use("*", (_, next) => {
//   console.log("hi there");
//   return next();
// });

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.use("/trpc/*", (ctx) => {
  console.log("hi there");
  console.log(JSON.stringify(ctx.req));
  return fetchRequestHandler({
    endpoint: "/trpc",
    router: appRouter,
    createContext: () => createTRPCContext(ctx),
    req: ctx.req.raw,
  });
});

serve(app);
