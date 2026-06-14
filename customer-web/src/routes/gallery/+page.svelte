<script lang="ts">
	import GalleryGrid from '$lib/components/layout/GalleryGrid.svelte';
	import Hero from '$lib/components/ui/Hero.svelte';
	import type { GalleryPageContent } from '../../../../shared/types/Gallery';

	const { data }: { data: GalleryPageContent } = $props();
</script>

<Hero {...data.hero} />
<GalleryGrid images={data.images} />
