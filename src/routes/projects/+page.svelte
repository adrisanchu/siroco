<script lang="ts">
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Siroco - Proyectos</title>
</svelte:head>

<div class="container h-full mx-auto gap-8 flex flex-col">
	<div class="flex items-center justify-between">
		<h2>Proyectos</h2>
		<a href={`${$page.url.pathname}/new`} class="btn variant-ghost-primary">Nuevo Proyecto</a>
	</div>
	<p>Aún no hay proyectos...</p>
</div>
