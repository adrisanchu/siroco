import { prisma } from '$lib/server/prisma';
import { fail, error, redirect } from '@sveltejs/kit';
import type { Actions } from '@sveltejs/kit';
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

export const actions: Actions = {
	updateProject: async ({ request, params }) => {
		console.log('=> updateProject:');
		const data = await request.formData();
		const name: string | undefined = data.get('name')?.toString();
		const code: number | undefined = Number(data.get('code')?.toString());
		const alias: string | undefined | null = data.get('alias')?.toString() || null;
		const startDate: string | undefined = data.get('startDate')?.toString();
		const description: string | undefined | null = data.get('description')?.toString() || null;

		try {
			await prisma.project.update({
				where: {
					id: Number(params.projectId)
				},
				data: {
					name,
					code,
					alias,
					startDate,
					description
				}
			});
		} catch (err) {
			console.error(err);
			return fail(500, { message: 'Something went wrong' });
		}
		// success!
		console.log('=> updateProject:ok');
		throw redirect(303, '/projects');
		// return { status: 200 };
	}
};
