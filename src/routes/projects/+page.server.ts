import type { PageServerLoad } from './$types';
import { prisma } from '$lib/server/prisma';
import type { Project } from '@prisma/client';

export const load: PageServerLoad = async () => {
	const getProjects = async () => {
		const projects: Project[] = await prisma.project.findMany();
		return projects;
	};
	return {
		projects: getProjects()
	};
};
