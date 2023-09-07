<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	$: ({ project } = data);
</script>

<svelte:head>
	<title>Siroco - Editar Proyecto</title>
</svelte:head>

<div class="container h-full mx-auto gap-8 flex flex-col">
	<form method="POST" action="?/updateProject" class="card p-4 flex flex-col gap-3">
		<h2>Editando Proyecto: {project.name}</h2>

		<label class="label">
			<span>Título</span>
			<input class="input" name="name" type="text" value={project.name} />
		</label>

		<label class="label">
			<span>Alias</span>
			<input class="input" name="alias" type="text" value={project.alias ?? ''} />
		</label>

		<label class="label">
			<span>Código</span>
			<input class="input" name="code" type="number" value={project.code} />
		</label>

		<label class="label">
			<span>Fecha de origen</span>
			<input class="input" name="startDate" title="Input (date)" type="date" value={project.startDate} />
		</label>

		<label class="label">
			<span>Descripción</span>
			<textarea
				value={project.description}
				name="description"
				class="textarea"
				rows="4"
				placeholder="Introduce una descripción..."
			/>
		</label>
		<button type="submit" class="btn variant-ghost-primary self-end">Guardar Proyecto</button>
	</form>
</div>
