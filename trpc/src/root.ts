import { publicProcedure, router } from "./trpc";
import { z } from "zod";
import { eq, or, sql } from "drizzle-orm";
import { friendships, users } from "../../db/schema";
import { authedProcedure } from "./authed-procedure";

const userRouter = router({
  getFriends: publicProcedure
    .input(
      z.object({
        userId: z.string(),
      })
    )
    .query(async ({ input, ctx }) => {
      return await ctx.db.query.users.findMany({
        with: {
          friendships: {
            where: or(
              eq(friendships.user1Id, input.userId),
              eq(friendships.user2Id, input.userId)
            ),
          },
        },
      });
    }),
  addWater: authedProcedure
    .input(
      z.object({
        liters: z.number(),
        userId: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      return await ctx.db
        .update(users)
        .set({ drank: sql`${users.drank} + ${input.liters}` })
        .where(eq(users.id, ctx.user.id));
    }),
  createIfNotExists: publicProcedure
    .input(z.object({ userId: z.string(), fullName: z.string() }))
    .mutation(async ({ ctx, input }) => {
      console.log("wahhhhhh");
      return await ctx.db
        .insert(users)
        .values({ id: input.userId, name: input.fullName });
    }),
});

export const appRouter = router({
  user: userRouter,
});
