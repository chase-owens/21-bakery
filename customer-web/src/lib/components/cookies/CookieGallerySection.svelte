<script lang="ts">
	import { getImageClasses } from '$lib/util/getImageClasses';
	import type { CookieGallerySection } from '../../../../../shared/types/Cookies';

	type Props = {
		section: CookieGallerySection;
		onInquireClick?: () => void;
	};

	let { section, onInquireClick }: Props = $props();

	const imageClasses = $derived(getImageClasses(section.images.length));
</script>

<section class="section">
	<div class="page-container">
		<div class="space-y-2">
			<h2 class="font-display text-4xl text-primary md:text-5xl">
				{section.title}
			</h2>

			<p class="text-muted-foreground max-w-2xl text-primary">
				{section.description}
			</p>
		</div>

		{#if onInquireClick}
			<button type="button" class="btn btn-primary" onclick={onInquireClick}>
				Inquire About {section.title}
			</button>
		{/if}
	</div>

	<div
		class="page-container grid auto-rows-[130px] grid-cols-6 gap-4 md:auto-rows-[150px] md:grid-cols-12"
	>
		{#each section.images as image, index}
			<figure class={`overflow-hidden rounded-2xl ${imageClasses[index]}`}>
				<img src={image.src} alt={image.alt} loading="lazy" class="h-full w-full object-cover" />
			</figure>
		{/each}
	</div>
</section>
