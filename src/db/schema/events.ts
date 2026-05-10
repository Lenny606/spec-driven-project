import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
import { users } from './users';
import { addresses } from './addresses';

export const events = sqliteTable('events', {
  id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
  title: text('title').notNull(),
  description: text('description').notNull(),
  date: integer('date', { mode: 'timestamp' }).notNull(),
  location: text('location').notNull(), // General location
  addressId: text('address_id').references(() => addresses.id),
  organizerId: text('organizer_id').notNull().references(() => users.id),
  isPromoted: integer('is_promoted', { mode: 'boolean' }).notNull().default(false),
  imageUrl: text('image_url'),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull().$defaultFn(() => new Date()),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull().$defaultFn(() => new Date()),
});

export type Event = typeof events.$inferSelect;
export type NewEvent = typeof events.$inferInsert;
