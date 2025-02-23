import { int, sqliteTable, text, real } from "drizzle-orm/sqlite-core";

export const usersTable = sqliteTable("users_table", {
  id: text().primaryKey().$defaultFn(crypto.randomUUID),
  name: text().notNull(),
  goal: real().notNull().default(2),
});
