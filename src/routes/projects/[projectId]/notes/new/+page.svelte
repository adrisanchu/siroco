<script lang="ts">
	import { page } from '$app/stores';
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ project } = data);

	let content: string;
	let priority: string = 'Baja';
	const priorities = [
		{
			value: 'Baja',
			className: 'variant-filled-tertiary'
		},
		{
			value: 'Media',
			className: 'variant-filled-warning'
		},
		{
			value: 'Alta',
			className: 'variant-filled-error'
		}
	];

	function selection(p: string): void {
		priority = p;
	}
</script>

<svelte:head>
	<title>Siroco - Notas</title>
</svelte:head>

<div class="container h-full mx-auto gap-8 flex flex-col">
	<ol class="breadcrumb-nonresponsive">
		<li class="crumb"><a class="anchor" href="/projects">Proyectos</a></li>
		<li class="crumb-separator" aria-hidden>&rsaquo;</li>
		<li class="crumb"><a class="anchor" href="/projects/{project.id}">{project.name}</a></li>
		<li class="crumb-separator" aria-hidden>&rsaquo;</li>
		<li>Nueva Nota</li>
	</ol>
	<form method="POST" action="?/createNote&id={project.id}" class="card p-4 flex flex-col gap-3">
		<div class="flex justify-between">
			<label class="label">
				<span>Título</span>
				<input class="input" name="name" type="text" placeholder="Título de la nota..." />
			</label>
			<div>
				<span>Prioridad</span>
				<input class="hidden" name="priority" bind:value={priority} />
				<div class="flex gap-1.5 mt-1">
					{#each priorities as { value, className }}
						<label for={value}>
							<span
								class="chip {priority === value ? className : 'variant-soft'}"
								on:click={() => {
									selection(value);
								}}
								on:keypress
							>
								<!-- {#if priority === p}{/if} -->
								<span>{value}</span>
							</span>
						</label>
					{/each}
				</div>
			</div>
		</div>

		<label class="label">
			<span>Descripción</span>
			<textarea
				bind:value={content}
				name="description"
				class="textarea"
				rows="5"
				placeholder="Introduce una descripción..."
			/>
		</label>
		<button type="submit" class="btn variant-ghost-primary self-end">Crear Nota</button>
	</form>
</div>
