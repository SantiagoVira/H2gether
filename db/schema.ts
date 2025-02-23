import { relations } from "drizzle-orm";
import {
  int,
  sqliteTable,
  text,
  real,
  primaryKey,
} from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: text().primaryKey(),
  name: text().notNull(),
  goal: real().notNull().default(2),
  drank: real().notNull().default(0),
});

export const usersRelations = relations(users, ({ many }) => ({
  friendships: many(friendships),
  requests: many(friendRequests),
  logs: many(logs),
}));

export const friendRequests = sqliteTable(
  "friend_requests",
  {
    sourceId: text(),
    destinationId: text(),
  },
  (table) => [primaryKey({ columns: [table.sourceId, table.destinationId] })]
);

export const friendRequestsRelations = relations(friendRequests, ({ one }) => ({
  source: one(users, {
    fields: [friendRequests.sourceId],
    references: [users.id],
  }),
  destination: one(users, {
    fields: [friendRequests.destinationId],
    references: [users.id],
  }),
}));

export const friendships = sqliteTable(
  "friendships",
  {
    user1Id: text(),
    user2Id: text(),
  },
  (table) => [primaryKey({ columns: [table.user1Id, table.user2Id] })]
);

export const friendshipsRelations = relations(friendships, ({ one }) => ({
  source: one(users, {
    fields: [friendships.user1Id],
    references: [users.id],
  }),
  destination: one(users, {
    fields: [friendships.user2Id],
    references: [users.id],
  }),
}));

export const logs = sqliteTable("logs", {
  id: text()
    .primaryKey()
    .$default(() => crypto.randomUUID()),
  type: int(),
  message: text(),
  userId: text(),
  time: text().$default(() =>
    new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    })
  ),
});

export const logsRelations = relations(logs, ({ one }) => ({
  user: one(users, {
    fields: [logs.userId],
    references: [users.id],
  }),
}));
