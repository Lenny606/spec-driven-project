import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import * as usersSchema from './schema/users';
import * as eventsSchema from './schema/events';
import * as addressesSchema from './schema/addresses';
import * as rolesSchema from './schema/roles';
import * as sessionsSchema from './schema/sessions';
import * as accountsSchema from './schema/accounts';
import * as verificationsSchema from './schema/verifications';

const sqlite = new Database('local.db');

export const db = drizzle(sqlite, { 
  schema: { 
    ...usersSchema, 
    ...eventsSchema, 
    ...addressesSchema, 
    ...rolesSchema,
    ...sessionsSchema,
    ...accountsSchema,
    ...verificationsSchema
  } 
});
