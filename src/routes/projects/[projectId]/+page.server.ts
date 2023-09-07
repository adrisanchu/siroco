import { prisma } from '$lib/server/prisma';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

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
