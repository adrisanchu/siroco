import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from '@sveltejs/kit';
import { prisma } from '$lib/server/prisma';

export const actions: Actions = {
	createProject: async ({ request }) => {
		console.log('=> createProject:');
		// extract fields from form
		const data = await request.formData();
		const name: string | undefined = data.get('name')?.toString();
		const code: number | undefined = Number(data.get('code')?.toString());
		const alias: string | undefined | null = data.get('alias')?.toString() || null;
		const startDate: string | undefined = data.get('startDate')?.toString();
		const description: string | undefined | null = data.get('description')?.toString() || null;

		// check for mandatory props
		if (!name || !code || !startDate) {
			return fail(400, {
				name,
				code,
				alias,
				startDate,
				description,
				missing: true
			});
		}

		// save in the DB
		try {
			await prisma.project.create({
				data: {
					name,
					code,
					alias,
					startDate,
					description
				}
			});
			console.log('data added to DB');
		} catch (err) {
			console.error(err);
			return fail(500, {
				name,
				code,
				alias,
				startDate,
				description,
				message: 'Something went wrong'
			});
		}

		// success!
		console.log('=> createProject:ok');
		throw redirect(303, '/projects');
		// return { success: true };
	}
};
