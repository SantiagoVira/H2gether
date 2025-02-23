import "dotenv/config";
import * as schema from "./schema";
import { drizzle } from "drizzle-orm/libsql";
// You can specify any property from the libsql connection options
export const db = drizzle({
  connection: {
    url: process.env.DATABASE_URL!,
    authToken: process.env.AUTH_TOKEN!,
  },
  schema,
});

// npx drizzle-kit push
