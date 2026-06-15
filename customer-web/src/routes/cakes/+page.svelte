<script lang="ts">
	import CakeFlavorBuilder from '$lib/components/cakes/CakeFlavorBuilder.svelte';
	import CakeTastingBox from '$lib/components/cakes/CakeTastingBox.svelte';
	import CakeTestingBoxModal from '$lib/components/cakes/CakeTestingBoxModal.svelte';
	import CustomCakeInfo from '$lib/components/cakes/CustomCakeInfo.svelte';
	import SignatureCakes from '$lib/components/cakes/SignatureCakes.svelte';
	import Hero from '$lib/components/ui/Hero.svelte';
	import InquiryModal, { type OrderType } from '$lib/components/ui/inquiryModal.svelte';
	import type { CakesPageContent } from '../../../../shared/types/Cakes';

	let isInquiryOpen = $state(false);
	let inquiryType = $state<OrderType>('custom-cake');
	function openInquiry(type: typeof inquiryType) {
		inquiryType = type;
		isInquiryOpen = true;
	}

	let isCakeBoxOpen = $state(false);
	function openCakeBox() {
		isCakeBoxOpen = true;
	}
	function closeCakeBox() {
		isCakeBoxOpen = false;
	}
	const { data }: { data: CakesPageContent } = $props();
</script>

<svelte:head>
	<title>21 Bakehouse | Custom Cakes & Cookies</title>

	<meta
		name="description"
		content="Custom cakes, cookies, and desserts for birthdays, weddings, baby showers, graduations, and corporate events."
	/>
</svelte:head>

<Hero {...data.hero} />
<SignatureCakes {...data.signatures} onCtaClick={() => openInquiry('signature-cake')} />
<CakeFlavorBuilder {...data.cakeBuilder} onCtaClick={() => openInquiry('custom-cake')} />
<CakeTastingBox {...data.tastingBox} onCtaClick={openCakeBox} />
<CustomCakeInfo {...data.pricingGuide} />
<InquiryModal
	open={isInquiryOpen}
	initialOrderType={inquiryType}
	onClose={() => (isInquiryOpen = false)}
/>
<CakeTestingBoxModal open={isCakeBoxOpen} onClose={closeCakeBox} />
