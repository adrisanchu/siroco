import { fail, error, redirect } from '@sveltejs/kit';
import type { Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { prisma } from '$lib/server/prisma';

export const load: PageServerLoad = async ({ params }) => {
	const getProject = async () => {
		console.log('=> getProject:');
		const project = await prisma.project.findUnique({
			where: {
				id: Number(params.projectId)
			}
		});
		if (!project) {
			throw error(404, 'Project not found');
		}
		return project;
	};
	console.log('=> getProject:ok');
	return {
		project: getProject()
	};
};

export const actions: Actions = {
	createNote: async ({ request, url }) => {
		console.log('=> createNote:');

		// method 1: get the id in the middle of the url!
		// const id = url.pathname.substring('/projects/'.length, url.pathname.lastIndexOf('/notes/new'));

		// method 2: use query params
		const projectId = url.searchParams.get('id');

		if (!projectId) {
			return fail(400, { message: 'Invalid request' });
		}

		// extract fields from form
		const data = await request.formData();
		const name: string | undefined = data.get('name')?.toString();
		const priority: string | undefined = data.get('priority')?.toString();
		// const startDate: string | undefined = data.get('startDate')?.toString();
		const description: string | undefined | null = data.get('description')?.toString() || null;

		// check for mandatory props
		if (!name || !priority) {
			return fail(400, {
				name,
				priority,
				// startDate,
				description,
				missing: true
			});
		}

		// save in the DB
		try {
			await prisma.note.create({
				data: {
					name,
					priority,
					// startDate,
					description,
					// relationship with a project
					projectId: Number(projectId)
				}
			});
			console.log('note added to DB');
		} catch (err) {
			console.error(err);
			return fail(500, {
				name,
				priority,
				// startDate,
				description,
				message: 'Something went wrong'
			});
		}

		// success!
		console.log('=> createNote:ok');
		throw redirect(303, `/projects/${projectId}`);
		// return { success: true };
	}
};
