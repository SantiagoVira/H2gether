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
  addWater: publicProcedure
    .input(
      z.object({
        userId: z.string(),
        liters: z.number(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      console.log(input.liters);
      return await ctx.db
        .update(users)
        .set({ drank: sql`${users.drank} + ${input.liters}` })
        .where(eq(users.id, input.userId));
    }),
  getPercentDrank: publicProcedure
    .input(z.object({ userId: z.string() }))
    .query(async ({ input, ctx }) => {
      const user = await ctx.db.query.users.findFirst({
        where: eq(users.id, input.userId),
      });
      if (!user) return 0;
      return user.drank / user.goal;
    }),
  createIfNotExists: publicProcedure
    .input(z.object({ userId: z.string(), fullName: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const exists = await ctx.db.query.users.findFirst({
        where: eq(users.id, input.userId),
      });
      if (exists) {
        return;
      }
      return await ctx.db
        .insert(users)
        .values({ id: input.userId, name: input.fullName });
    }),
});

export const appRouter = router({
  user: userRouter,
});
