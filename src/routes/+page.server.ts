import { fail, redirect, type Actions } from '@sveltejs/kit';
import * as auth from '$lib/server/auth';
import type { PageServerLoad } from './$types';
import { db } from '$lib/server/db';
import { message } from '$lib/server/db/schema';
import { v4 as uuid } from 'uuid';
import { desc } from 'drizzle-orm';

export const load: PageServerLoad = async (event) => {
	if (!event.locals.user) {
		return redirect(301, '/login');
	}

	const messages = await db.query.message.findMany({
		limit: 10,
		orderBy: [desc(message.createdAt)]
	});
	messages.reverse();

	return { messages };
};

export const actions: Actions = {
	logout: async (event) => {
		if (!event.locals.session) {
			return fail(401);
		}

		await auth.invalidateSession(event.locals.session.id);
		auth.deleteSessionTokenCookie(event);

		return redirect(301, '/login');
	},

	sendMessage: async ({ locals, request }) => {
		if (!locals.user) {
			return fail(401);
		}

		const formData = await request.formData();
		const content = formData.get('content') as string;

		if (content.trim()) {
			await db.insert(message).values({
				id: uuid(),
				content,
				userName: locals.user.username,
				createdAt: new Date()
			});
		}

		return { success: true };
	}
};
