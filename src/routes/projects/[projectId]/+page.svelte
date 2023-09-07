<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	$: ({ project } = data);
</script>

<svelte:head>
	<title>Siroco - Proyecto</title>
</svelte:head>

<div class="container h-full mx-auto gap-8 flex flex-col">
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
