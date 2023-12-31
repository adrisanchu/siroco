import { prisma } from '$lib/server/prisma';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const getProject = async () => {
		console.log('=> getProject:');
		const project = await prisma.project.findUnique({
			where: {
				id: params.projectId
			},
			// expose the notes!
			include: {
				notes: true
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
