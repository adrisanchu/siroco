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
	<div class="card p-4 grid grid-cols-5 gap-2">
		<div class="text-right">
			<h4>Título</h4>
		</div>

		<div class="col-span-4">
			<span>{project.name}</span>
		</div>

		<div class="text-right">
			<h4>Alias</h4>
		</div>

		<div class="col-span-4">
			<span>{project.alias ?? '-'}</span>
		</div>

		<div class="text-right">
			<h4>Código</h4>
		</div>

		<div class="col-span-4">
			<span>{project.code}</span>
		</div>

		<div class="text-right">
			<h4>Fecha de origen</h4>
		</div>

		<div class="col-span-4">
			<span>{project.startDate}</span>
		</div>

		<div class="text-right">
			<h4>Descripción</h4>
		</div>

		<div class="col-span-4">
			<span>{project.description}</span>
		</div>
	</div>
</div>
