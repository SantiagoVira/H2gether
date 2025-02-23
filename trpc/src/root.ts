import { router } from "./trpc";
import { authRouter } from "./routers/authRouter";
import { samplesRouter } from "./routers/samplesRouter";
import { queryRouter } from "./routers/queryRouter";
import { indexRouter } from "./routers/indexRouter";

export const appRouter = router({
  auth: authRouter,
  samples: samplesRouter,
  queries: queryRouter,
  index: indexRouter,
});

export type AppRouter = typeof appRouter;
