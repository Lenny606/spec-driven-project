import { createMiddleware } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";
import { auth } from "./auth";

export const authMiddleware = createMiddleware().server(async ({ next }) => {
  const request = getRequest();
  if (!request) {
    throw new Error("Request not found");
  }

  const session = await auth.api.getSession({
    headers: request.headers,
  });

  if (!session) {
    throw new Error("Unauthorized");
  }

  return next({
    context: {
      user: session.user,
      session: session.session,
    },
  });
});
