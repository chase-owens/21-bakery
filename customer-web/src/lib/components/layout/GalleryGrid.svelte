<script lang="ts">
	import type { GalleryImageLean } from '../../../../../shared/types/Gallery';

	type Props = {
		images: GalleryImageLean[];
	};

	let { images }: Props = $props();

	const imageClasses = [
		'col-span-3 row-span-2',
		'col-span-3 row-span-1',
		'col-span-3 row-span-1',
		'col-span-6 row-span-1',
		'col-span-3 row-span-2',
		'col-span-3 row-span-1',
		'col-span-3 row-span-1',
		'col-span-6 row-span-1'
	];
</script>

<section class="page-container py-12 md:py-16">
	<div class="columns-2 gap-4 sm:columns-2 md:columns-4">
		{#each images as image}
			<figure class="mb-4 break-inside-avoid overflow-hidden rounded-2xl bg-muted shadow-sm">
				<img
					src={image.src}
					alt={image.alt}
					loading="lazy"
					class="h-auto w-full object-cover transition duration-300 hover:scale-105"
				/>
			</figure>
		{/each}
	</div>
</section>
