import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { config } from "dotenv";
import { db } from "../../db/index.ts";

config();
const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  }
);
