<script lang="ts">
	import type { SignatureCakesSection } from '../../../../../shared/types/Cakes';

	type IngredientId =
		| 'vanilla-bean'
		| 'fresh-strawberries'
		| 'vanilla-buttercream'
		| 'chocolate'
		| 'marshmallow-fluff'
		| 'chocolate-ganache'
		| 'graham-cracker-crumbles'
		| 'chocolate-buttercream'
		| 'chocolate-ganache-drip'
		| 'cookie-butter-ganache'
		| 'lotus-cookie-crumbles'
		| 'biscoff-buttercream'
		| 'cookie-butter-drip'
		| 'cookies-and-cream'
		| 'oreo-buttercream'
		| 'oreo-crumbles'
		| 'whole-oreos'
		| 'lemon-velvet'
		| 'lemon-curd'
		| 'lemon-buttercream'
		| 'strawberry'
		| 'strawberry-reduction';

	type IngredientRef = {
		id: IngredientId;
		label: string;
	};

	type SignatureCake = {
		name: string;
		summary: string;
		cakeFlavor: IngredientRef;
		fillings: IngredientRef[];
		toppings: IngredientRef[];
	};

	interface SignatureCakeProps extends SignatureCakesSection {
		onCtaClick: () => void;
	}

	const {
		ctaLabel,
		description,
		ingredientStyles,
		onCtaClick,
		signatureCakes,
		smallTitle,
		title
	}: SignatureCakeProps = $props();
</script>

<section class="section bg-surface">
	<div class="page-container">
		<div class="mb-8 text-center">
			<p class="mb-3 text-xs font-medium tracking-[0.3em] text-primary uppercase">
				{smallTitle}
			</p>

			<h2 class="section-title mb-3 text-3xl md:text-5xl">{title}</h2>

			<p class="mx-auto max-w-2xl text-muted">
				{description}
			</p>
		</div>

		<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
			{#each signatureCakes as cake}
				<article class="card p-5">
					<h3 class="mb-3 font-heading text-2xl text-primary">
						{cake.name}
					</h3>

					<p class="mb-5 text-sm leading-relaxed text-muted">
						{cake.summary}
					</p>

					<div class="flex flex-wrap gap-2">
						<span
							class={`rounded-full border px-3 py-1 text-xs ${ingredientStyles[cake.cakeFlavor.id]}`}
						>
							{cake.cakeFlavor.label}
						</span>

						{#each cake.fillings as filling}
							<span class={`rounded-full border px-3 py-1 text-xs ${ingredientStyles[filling.id]}`}>
								{filling.label}
							</span>
						{/each}

						{#each cake.toppings as topping}
							<span class={`rounded-full border px-3 py-1 text-xs ${ingredientStyles[topping.id]}`}>
								{topping.label}
							</span>
						{/each}
					</div>
				</article>
			{/each}
		</div>
		<div class="mt-8 text-center">
			<button class="btn-primary" onclick={onCtaClick}> {ctaLabel}</button>
		</div>
	</div>
</section>
