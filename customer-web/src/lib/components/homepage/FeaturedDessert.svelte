<script lang="ts">
	type FeaturedDessert = {
		title: string;
		description: string;
		image: string;
		price?: string;
		ctaLabel?: string;
	};

	type Props = {
		dessert: FeaturedDessert;
		onOrder: () => void;
	};

	let { dessert, onOrder }: Props = $props();
</script>

<section class="bg-surface py-16">
	<div class="page-container">
		<div
			class="grid items-center gap-8 rounded-3xl border border-border bg-background p-6 shadow-sm md:grid-cols-2 md:p-10"
		>
			<div class="overflow-hidden rounded-2xl">
				<img src={dessert.image} alt={dessert.title} class="h-full w-full object-cover" />
			</div>

			<div>
				<p class="text-sm font-semibold tracking-wide text-primary uppercase">
					This Week’s Featured Dessert
				</p>

				<h2 class="mt-3 font-heading text-3xl text-foreground md:text-4xl">
					{dessert.title}
				</h2>

				<p class="mt-4 text-foreground/70">
					{dessert.description}
				</p>

				{#if dessert.price}
					<p class="mt-4 text-lg font-semibold text-foreground">
						{dessert.price}
					</p>
				{/if}

				<button class="button-primary mt-6" onclick={onOrder}>
					{dessert.ctaLabel ?? 'Order This Dessert'}
				</button>
			</div>
		</div>
	</div>
</section>
