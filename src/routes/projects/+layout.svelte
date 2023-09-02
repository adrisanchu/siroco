<script lang="ts">
	import { AppShell, AppBar, Avatar } from '@skeletonlabs/skeleton';
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">Siroco</strong></svelte:fragment
			>
			<svelte:fragment slot="trail"
				><Avatar initials="AS" width="w-10" background="bg-primary-500" /></svelte:fragment
			>
		</AppBar>
	</svelte:fragment>

	<!-- Router Slot -->
	<div class="container p-6 mx-auto">
		<slot />
	</div>
</AppShell>
