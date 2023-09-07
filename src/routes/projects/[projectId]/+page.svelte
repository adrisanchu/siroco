<script lang="ts">
	import { page } from '$app/stores';
	import type { PageData } from './$types';
	export let data: PageData;

	$: ({ project } = data);
</script>

<svelte:head>
	<title>Siroco - Proyecto</title>
</svelte:head>

<div class="container h-full mx-auto gap-8 flex flex-col">
	<div class="flex items-center justify-between">
		<ol class="breadcrumb">
			<li class="crumb"><a class="anchor" href="/projects">Proyectos</a></li>
			<li class="crumb-separator" aria-hidden>&rsaquo;</li>
			<li>{project.name}</li>
		</ol>
		<a href={`${$page.url.pathname}/edit`} class="btn variant-ghost-secondary">Editar Proyecto</a>
	</div>
	<h3 class="h3">Información General</h3>
	<div class="card">
		<div class="p-2 flex">
			<div class="text-right mx-2 fixed-width">
				<h4>Título</h4>
			</div>

			<div class="mx-4 flex-grow">
				<span>{project.name}</span>
			</div>
		</div>

		<div class="p-2 flex">
			<div class="text-right mx-2 fixed-width">
				<h4>Alias</h4>
			</div>

			<div class="mx-4 flex-grow">
				<span>{project.alias ?? '-'}</span>
			</div>
		</div>

		<div class="p-2 flex">
			<div class="text-right mx-2 fixed-width">
				<h4>Código</h4>
			</div>

			<div class="mx-4 flex-grow">
				<span>{project.code}</span>
			</div>
		</div>

		<div class="p-2 flex">
			<div class="text-right mx-2 fixed-width">
				<h4>Fecha de origen</h4>
			</div>

			<div class="mx-4 flex-grow">
				<span>{project.startDate}</span>
			</div>
		</div>

		<div class="p-2 flex">
			<div class="text-right mx-2 fixed-width fijado">
				<h4>Descripción</h4>
			</div>

			<div class="mx-4 flex-grow whitespace-pre-wrap">
				<span>{project.description ?? '-'}</span>
			</div>
		</div>
	</div>

	<div class="flex justify-between">
		<h3 class="h3">Notas</h3>
		<a href={`${$page.url.pathname}/notes/new`} class="btn variant-ghost-primary">Nueva Nota</a>
	</div>
	{#if project.notes.length === 0}
		<p>Aún no hay notas...</p>
	{:else}
		{#each project.notes as note (note.id)}
			<div class="card p-4">
				<header class="card-header p-0">
					<div>
						<span>#{note.id}:</span>
						<span>{note.name}</span>
					</div>
				</header>
				<div>
					<span>Prioridad: {note.priority}</span>
				</div>
				{#if note.description}
					<section class="blockquote whitespace-pre-wrap mt-2">{note.description}</section>
				{/if}
			</div>
		{/each}
	{/if}
	<div class="card" />
</div>

<style>
	.fixed-width {
		min-width: 7rem;
	}
</style>
