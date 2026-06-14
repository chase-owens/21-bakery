<script lang="ts">
	import type { Occasion } from '../../../../../shared/types/Event';

	type OccasionGridProps = {
		occasions: Occasion[];
	};

	const { occasions }: OccasionGridProps = $props();
</script>

<section class="section">
	<div class="page-container">
		<div class="mb-8 text-center">
			<h2 class="section-title mb-3 text-3xl md:text-4xl">Celebrate Every Occasion</h2>

			<p class="mx-auto max-w-2xl text-muted">
				From birthdays and baby showers to weddings and corporate events, we create desserts that
				make every celebration memorable.
			</p>
		</div>

		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each occasions as occasion}
				<a
					href={occasion.href}
					class="card group overflow-hidden transition-transform duration-200 hover:-translate-y-1"
				>
					<div class="aspect-4/3 overflow-hidden">
						<img
							src={occasion.image}
							alt={occasion.title}
							class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
						/>
					</div>

					<div class="p-5">
						<h3 class="mb-2 font-heading text-xl text-primary">
							{occasion.title}
						</h3>

						<p class="text-sm leading-relaxed text-muted">
							{occasion.description}
						</p>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>
