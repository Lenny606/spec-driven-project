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
  // Explicitly allow both localhost and 127.0.0.1 for development on both 3000 and 3001 ports
  trustedOrigins: [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://localhost:3001",
    "http://127.0.0.1:3001",
  ],
  emailAndPassword: {
    enabled: true,
  },
});
