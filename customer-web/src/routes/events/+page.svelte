<script lang="ts">
	import EventSectionCards from '$lib/components/events/EventSectionCards.svelte';
	import WhatsIncluded from '$lib/components/events/WhatsIncluded.svelte';
	import Hero from '$lib/components/ui/Hero.svelte';
	import InquiryModal, { type OrderType } from '$lib/components/ui/inquiryModal.svelte';
	import type { EventsPageContent, EventType } from '../../../../shared/types/Event';

	let isInquiryOpen = $state(false);
	let inquiryType: OrderType = $state<OrderType>('private-class');

	function openInquiry() {
		isInquiryOpen = true;
	}
	const { data }: { data: EventsPageContent; onCtaClick: () => void } = $props();

	let heroCta = $derived({
		variant: data.hero.ctas[0].variant,
		label: data.hero.ctas[0].label,
		onCtaClick: openInquiry
	});
	let heroCta2 = $derived({
		variant: data.hero.ctas[1].variant,
		label: data.hero.ctas[1].label,
		onCtaClick: openInquiry
	});
	const hero = $derived({ ...data.hero, ctas: [heroCta, heroCta2] });
</script>

<svelte:head>
	<title>21 Bakehouse | Events</title>

	<meta
		name="description"
		content="Custom cakes, cookies, and desserts for birthdays, weddings, baby showers, graduations, and corporate events."
	/>
</svelte:head>

<Hero {...hero} />
<WhatsIncluded {...data.included} />
<EventSectionCards sections={data.sections} onInquire={openInquiry} />
<WhatsIncluded {...data.perfectFor} />
<InquiryModal
	open={isInquiryOpen}
	initialOrderType={inquiryType}
	onClose={() => (isInquiryOpen = false)}
/>
