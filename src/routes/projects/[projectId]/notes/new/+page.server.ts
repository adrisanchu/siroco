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
		const id = url.searchParams.get('id');

		if (!id) {
			return fail(400, { message: 'Invalid request' });
		}
		// TODO!

		// success!
		console.log('=> createNote:ok');
		throw redirect(303, `/projects/${id}`);
		// return { success: true };
	}
};
