<script lang="ts">
	import { page } from '$app/stores';
	import type { Project } from '@prisma/client';
	import type { PageData } from './$types';

	export let data: PageData;
	const projects: Project[] = data.projects;
</script>

<svelte:head>
	<title>Siroco - Proyectos</title>
</svelte:head>

<div class="container h-full mx-auto gap-8 flex flex-col">
	<div class="flex items-center justify-between">
		<h2>Proyectos</h2>
		<a href={`${$page.url.pathname}/new`} class="btn variant-ghost-primary">Nuevo Proyecto</a>
	</div>
	{#if projects.length === 0}
		<p>Aún no hay proyectos...</p>
	{:else}
		<div class="grid gap-4">
			{#each projects as project (project.id)}
				<article class="card p-4">
					<div>
						<span>#{project.code} - </span>{project.name}
					</div>
					<div><span>Fecha Origen: </span>{project.startDate}</div>
				</article>
			{/each}
		</div>
	{/if}
</div>
