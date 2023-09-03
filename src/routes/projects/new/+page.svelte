<script lang="ts">
	import type { ActionData } from './$types';

	// export let data: PageData;
	export let form: ActionData;

	let content: string;
	// input variables for the form
	let inputName = `Super Proyecto #${Math.round(Math.random() * 1000)}`;
	let todaysDate = new Date().toLocaleDateString('en-CA'); // date in YYYY-MM-DD format (Canadians got it right!)
</script>

<svelte:head>
	<title>Siroco - Nuevo Proyecto</title>
</svelte:head>

<div class="container h-full mx-auto gap-8 flex flex-col">
	<form method="POST" action="?/createProject" class="card p-4 flex flex-col gap-3">
		<h2>Nuevo Proyecto</h2>

		{#if form?.missing}<p class="error">Nombre obligatorio</p>{/if}
		<label class="label">
			<span>Título</span>
			<input class="input" name="name" type="text" placeholder={inputName} value={form?.name ?? ''} />
		</label>

		<label class="label">
			<span>Alias</span>
			<input class="input" name="alias" type="text" placeholder="Nombre de viento..." />
		</label>

		<label class="label">
			<span>Código</span>
			<input class="input" name="code" type="number" />
		</label>

		<label class="label">
			<span>Fecha de origen</span>
			<input class="input" name="startDate" title="Input (date)" type="date" value={todaysDate} />
		</label>

		<label class="label">
			<span>Descripción</span>
			<textarea
				bind:value={content}
				name="description"
				class="textarea"
				rows="4"
				placeholder="Introduce una descripción..."
			/>
		</label>
		<button type="submit" class="btn variant-ghost-primary self-end">Crear Proyecto</button>
	</form>
</div>
