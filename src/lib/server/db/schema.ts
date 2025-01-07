import { pgTable, text, timestamp } from 'drizzle-orm/pg-core';

export const message = pgTable('message', {
	id: text('id').primaryKey(),
	content: text('content').notNull(),
	userName: text('user_name')
		.notNull()
		.references(() => user.username),
	createdAt: timestamp('created_at', { withTimezone: true, mode: 'date' }).notNull()
});

export const user = pgTable('user', {
	id: text('id').primaryKey(),
	username: text('username').notNull().unique(),
	passwordHash: text('password_hash').notNull()
});

export const session = pgTable('session', {
	id: text('id').primaryKey(),
	userId: text('user_id')
		.notNull()
		.references(() => user.id),
	expiresAt: timestamp('expires_at', { withTimezone: true, mode: 'date' }).notNull()
});

export type Session = typeof session.$inferSelect;

export type User = typeof user.$inferSelect;
