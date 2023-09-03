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
				<article class="card card-hover p-4">
					<div class="flex justify-between">
						<div class="mr-2">
							<header class="card-header p-0">
								<div>
									<span>#{project.code}:</span>
									<span>{project.name}</span>
									<span> · {project.startDate}</span>
								</div>
							</header>
							<section class="blockquote whitespace-pre mt-2">{project.description}</section>
						</div>
						<div>
							<form method="POST" action="?/deleteProject&id={project.id}">
								<div class="grid grid-rows-1 gap-2">
									<a class="chip variant-filled-secondary" href={`${$page.url.pathname}/${project.id}`}
										><span>Consultar</span></a
									>
									<button type="submit" class="chip variant-filled-error">Borrar</button>
								</div>
							</form>
						</div>
					</div>
				</article>
			{/each}
		</div>
	{/if}
</div>
