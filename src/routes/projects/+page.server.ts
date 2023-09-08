import { fail } from '@sveltejs/kit';
import type { Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { prisma } from '$lib/server/prisma';
import type { Project } from '@prisma/client';

export const load: PageServerLoad = async () => {
	const getProjects = async () => {
		console.log('=> getProjects:');
		const projects: Project[] = await prisma.project.findMany();
		return projects;
	};
	console.log('=> getProjects:ok');
	return {
		projects: getProjects()
	};
};

export const actions: Actions = {
	deleteProject: async ({ url }) => {
		console.log('=> deleteProject:');
		const id = url.searchParams.get('id');
		if (!id) {
			return fail(400, { message: 'Invalid request' });
		}
		try {
			await prisma.project.delete({
				where: {
					id: id
				}
			});
		} catch (err) {
			console.error(err);
			return fail(500, { message: 'Something went wrong' });
		}
		console.log('=> deleteProject:ok');
		return { status: 200 };
	}
};
