import { fail } from '@sveltejs/kit';
import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
	createProject: async (event) => {
		console.log('createProject runs');
		const data = await event.request.formData();

		// extract valuable fields
		const name = data.get('name');
		const alias = data.get('alias');
		const startDate = data.get('startDate');
		const description = data.get('description');

		if (!name) {
			return fail(400, { name, missing: true });
		}

		/*
		console.log('data!', {
			name,
			alias,
			startDate,
			description
		});
		*/
		try {
			// TODO: Prisma!
			/*
			await prisma.project.create({
				data: {
					name,
					alias,
					startDate,
					description
				}
			});
			*/
			console.log('data added to DB');
		} catch (e) {
			console.error(e);
			// return message(form, "Something went wrong");
		}

		return { name, success: true };
	}
};
