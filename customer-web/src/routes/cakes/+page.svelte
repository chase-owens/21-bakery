<script lang="ts">
	import CakeFlavorBuilder from '$lib/components/cakes/CakeFlavorBuilder.svelte';
	import CakeTastingBox from '$lib/components/cakes/CakeTastingBox.svelte';
	import CustomCakeInfo from '$lib/components/cakes/CustomCakeInfo.svelte';
	import SignatureCakes from '$lib/components/cakes/SignatureCakes.svelte';
	import Hero from '$lib/components/ui/Hero.svelte';
	import InquiryModal, { type OrderType } from '$lib/components/ui/inquiryModal.svelte';
	import type { Hero as HeroI } from '../../../../shared/types/HomePageContent';

	let isInquiryOpen = $state(false);
	let inquiryType = $state<OrderType>('custom-cake');

	function openInquiry(type: typeof inquiryType) {
		inquiryType = type;
		isInquiryOpen = true;
	}
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
<SignatureCakes onCtaClick={() => openInquiry('signature-cake')} />
<CakeFlavorBuilder onCtaClick={() => openInquiry('custom-cake')} />
<CakeTastingBox />
<CustomCakeInfo />
<InquiryModal
	open={isInquiryOpen}
	initialOrderType={inquiryType}
	onClose={() => (isInquiryOpen = false)}
/>
