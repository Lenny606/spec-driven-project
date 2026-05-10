import { betterAuth } from "better-auth";
import { drizzleAdapter } from "@better-auth/drizzle-adapter";
import { db } from "../db";
import * as usersSchema from "../db/schema/users";
import * as sessionsSchema from "../db/schema/sessions";
import * as accountsSchema from "../db/schema/accounts";
import * as verificationsSchema from "../db/schema/verifications";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "sqlite",
    schema: {
      user: usersSchema.users,
      session: sessionsSchema.sessions,
      account: accountsSchema.accounts,
      verification: verificationsSchema.verifications,
    },
  }),
  emailAndPassword: {
    enabled: true,
  },
});
