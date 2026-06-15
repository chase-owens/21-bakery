<script lang="ts">
	import Hero from '$lib/components/ui/Hero.svelte';
	import HowItWorks from '$lib/components/homepage/HowItWorks.svelte';
	import OccasionGrid from '$lib/components/homepage/OccasionGrid.svelte';
	import type { Hero as HeroI } from '../../../shared/types/HomePageContent.js';
	import FeaturedDessert from '$lib/components/homepage/FeaturedDessert.svelte';
	import InquiryModal, { type OrderType } from '$lib/components/ui/inquiryModal.svelte';

	const { data } = $props();

	const inquiryType: OrderType = 'featured-dessert';

	let isInquiryOpen = $state(false);

	function openInquiry() {
		isInquiryOpen = true;
	}
</script>

<svelte:head>
	<title>21 Bakehouse | Custom Cakes & Cookies</title>

	<meta
		name="description"
		content="Custom cakes, cookies, and desserts for birthdays, weddings, baby showers, graduations, and corporate events."
	/>
</svelte:head>

<Hero {...data.hero as HeroI} />
{#if data.featuredDesserts.length > 0}
	<div class="flex flex-col gap-4">
		{#each data.featuredDesserts as dessert}
			<FeaturedDessert {dessert} onOrder={openInquiry} />
		{/each}
	</div>
{/if}
<OccasionGrid occasions={data.occasions} />
<HowItWorks steps={data.steps} />
<InquiryModal
	open={isInquiryOpen}
	initialOrderType={inquiryType}
	onClose={() => (isInquiryOpen = false)}
/>
