<script lang="ts">
	import '../app.css';
	import AppShell from '$lib/components/layout/AppShell.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/favicon.png" />

	<meta name="viewport" content="width=device-width, initial-scale=1" />

	<meta
		name="description"
		content="Custom cakes, cookies, and desserts for celebrations in Norman, Oklahoma."
	/>
</svelte:head>

<AppShell>{@render children()}</AppShell>
