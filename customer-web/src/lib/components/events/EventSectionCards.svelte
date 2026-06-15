<script lang="ts">
	import type { EventType } from '../../../../../shared/types/Event';

	export type EventSection = {
		title: string;
		description: string;
		image: string;
		imageAlt?: string;
		ctaLabel: string;
		inquiryType: EventType;
		imagePosition?: 'left' | 'right';
	};

	type Props = {
		sections: EventSection[];
		onInquire: (section: EventSection) => void;
	};

	let { sections, onInquire }: Props = $props();
</script>

<section class="section bg-background">
	<div class="page-container space-y-16">
		{#each sections as section}
			<article class="grid items-center gap-8 md:grid-cols-2">
				<div class:md:order-2={section.imagePosition === 'right'}>
					<img
						src={section.image}
						alt={section.imageAlt ?? section.title}
						class="aspect-4/3 w-full rounded-3xl object-cover shadow-sm"
					/>
				</div>

				<div class="text-center md:text-left">
					<h2 class="section-title mb-4 text-3xl md:text-4xl">
						{section.title}
					</h2>

					<p class="mx-auto max-w-xl leading-relaxed text-muted md:mx-0">
						{section.description}
					</p>

					<button class="btn-secondary mt-6 cursor-pointer" onclick={() => onInquire(section)}>
						{section.ctaLabel}
					</button>
				</div>
			</article>
		{/each}
	</div>
</section>
