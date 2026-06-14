<script lang="ts">
	import type { TastingBoxSection } from '../../../../../shared/types/Cakes';

	const { cta, description, image, included, smallTitle, title }: TastingBoxSection = $props();
</script>

<section class="section bg-surface">
	<div class="page-container">
		<div class="grid gap-8 lg:grid-cols-2 lg:items-center">
			<div class="overflow-hidden rounded-3xl">
				<img src={image} alt="21 Bakehouse Cake Tasting Box" class="h-full w-full object-cover" />
			</div>

			<div class="flex flex-col">
				<p class="mb-3 text-xs font-medium tracking-[0.3em] text-primary uppercase">
					{smallTitle}
				</p>
				<h2 class="section-title mb-3 text-3xl md:text-5xl">{title}</h2>
				<p class="mb-6 text-lg leading-relaxed text-muted">
					{description}
				</p>
				<div class="mb-6 rounded-2xl bg-background p-5">
					<h3 class="mb-3 font-heading text-xl text-primary">{included.title}</h3>

					<ul class="space-y-2 text-muted">
						{#each included.items as item}
							<li>{item}</li>
						{/each}
					</ul>
				</div>

				<a href={cta.href} class="btn-primary m-auto">{cta.label}</a>
			</div>
		</div>
	</div>
</section>
