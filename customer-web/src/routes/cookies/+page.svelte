<script lang="ts">
	import CookieGallerySection from '$lib/components/cookies/CookieGallerySection.svelte';
	import Hero from '$lib/components/ui/Hero.svelte';
	import InquiryModal, { type OrderType } from '$lib/components/ui/inquiryModal.svelte';
	import type { CookiesPageContent } from '../../../../shared/types/Cookies';

	let isInquiryOpen = $state(false);
	const inquiryType: OrderType = 'cookies';

	function openInquiry() {
		isInquiryOpen = true;
	}
	const { data }: { data: CookiesPageContent; onCtaClick: () => void } = $props();

	let heroCta = $derived({
		variant: data.hero.ctas[0].variant,
		label: data.hero.ctas[0].label,
		onCtaClick: openInquiry
	});
	const hero = $derived({ ...data.hero, ctas: [heroCta] });
</script>

<svelte:head>
	<title>21 Bakehouse | Decorated Cookies</title>

	<meta
		name="description"
		content="Custom cakes, cookies, and desserts for birthdays, weddings, baby showers, graduations, and corporate events."
	/>
</svelte:head>

<Hero {...hero} />
{#each data.gallerySections as section}
	<CookieGallerySection {section} />
{/each}
<InquiryModal
	open={isInquiryOpen}
	initialOrderType={inquiryType}
	onClose={() => (isInquiryOpen = false)}
/>
