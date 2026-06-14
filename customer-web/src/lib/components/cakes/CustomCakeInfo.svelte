<script lang="ts">
	import type { PricingGuideSection } from '../../../../../shared/types/Cakes';

	const { description, tiers, title }: PricingGuideSection = $props();
</script>

<section id="price" class="section">
	<div class="page-container max-w-4xl">
		<div class="rounded-3xl border border-border bg-surface p-8 md:p-12">
			<div class="text-center">
				<h2 class="mb-4 font-heading text-3xl text-primary md:text-5xl">{title}</h2>

				<p class="mx-auto mb-6 max-w-2xl text-base leading-relaxed text-muted">
					{description}
				</p>
			</div>

			<div class="grid gap-2 md:grid-cols-3">
				{#each tiers as { title, price, serves }}
					<div class="rounded-2xl border border-border p-3 text-center">
						<p class="mb-1 text-sm tracking-wide text-muted uppercase">{title}</p>
						<p class="mb-1 font-heading text-3xl text-primary">{price}</p>
						{#if !!serves}
							<p class="text-sm text-muted">{serves}</p>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
