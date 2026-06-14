<script lang="ts">
	import Hero from '$lib/components/ui/Hero.svelte';
	import HowItWorks from '$lib/components/ui/HowItWorks.svelte';
	import OccasionGrid from '$lib/components/ui/OccasionGrid.svelte';
	import type { Hero as HeroI } from '../../../shared/types/HomePageContent.js';

	const { data } = $props();
</script>

<svelte:head>
	<title>21 Bakehouse | Custom Cakes & Cookies</title>

	<meta
		name="description"
		content="Custom cakes, cookies, and desserts for birthdays, weddings, baby showers, graduations, and corporate events."
	/>
</svelte:head>

<Hero {...data.hero as HeroI} />

<OccasionGrid occasions={data.occasions} />

<HowItWorks steps={data.steps} />
