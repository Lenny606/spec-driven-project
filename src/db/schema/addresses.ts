import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const addresses = sqliteTable('addresses', {
  id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
  city: text('city').notNull(),
  street: text('street').notNull(),
  postalCode: text('postal_code').notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull().$defaultFn(() => new Date()),
});

export type Address = typeof addresses.$inferSelect;
export type NewAddress = typeof addresses.$inferInsert;
