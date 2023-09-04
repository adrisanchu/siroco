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
		<div class="grid gap-6">
			{#each projects as project (project.id)}
				<article class="card p-4 relative">
					<header class="card-header p-0">
						<div>
							<span>#{project.code}:</span>
							<span>{project.name}</span>
							<span> · {project.startDate}</span>
						</div>
					</header>
					{#if project.description}
						<section class="blockquote whitespace-pre mt-2">{project.description}</section>
					{/if}
					<form method="POST" action="?/deleteProject&id={project.id}">
						<div class="grid grid-flow-col gap-0 absolute -top-4 right-4 btn-group variant-filled-secondary">
							<a
								title="Consultar"
								class="btn-icon btn-icon-sm bg-initial border-0"
								href={`${$page.url.pathname}/${project.id}`}><span>🔎</span></a
							>
							<a
								title="Editar"
								class="btn-icon btn-icon-sm bg-initial border-0"
								href={`${$page.url.pathname}/${project.id}`}><span>✏</span></a
							>
							<button title="Eliminar" type="submit" class="btn-icon btn-icon-sm border-0">🗑</button>
						</div>
					</form>
				</article>
			{/each}
		</div>
	{/if}
</div>
