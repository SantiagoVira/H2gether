import { publicProcedure, router } from "./trpc";
import { z } from "zod";
import { eq, or } from "drizzle-orm";
import { friendships } from "../../db/schema";

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
});

export const appRouter = router({
  user: userRouter,
});
