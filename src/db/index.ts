import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import * as usersSchema from './schema/users';
import * as eventsSchema from './schema/events';
import * as addressesSchema from './schema/addresses';
import * as rolesSchema from './schema/roles';

const sqlite = new Database('local.db');

export const db = drizzle(sqlite, { 
  schema: { 
    ...usersSchema, 
    ...eventsSchema, 
    ...addressesSchema, 
    ...rolesSchema 
  } 
});
