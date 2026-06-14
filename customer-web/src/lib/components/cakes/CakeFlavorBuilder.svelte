<script lang="ts">
	import type { CakeBuilderSection } from '../../../../../shared/types/Cakes';

	interface CustomCakeProps extends CakeBuilderSection {
		onCtaClick: () => void;
	}

	const { onCtaClick, ctaLabel, description, groups, smallTitle, title }: CustomCakeProps =
		$props();
</script>

<section id="cake-flavors" class="section">
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

		<div class="grid gap-5 lg:grid-cols-3">
			{#each groups as group}
				<section class="card p-5">
					<h3 class="mb-2 font-heading text-2xl text-primary">
						{group.title}
					</h3>

					<p class="mb-5 text-sm leading-relaxed text-muted">
						{group.description}
					</p>

					<div class="flex flex-wrap gap-2">
						{#each group.options as option}
							<span class={`rounded-full border px-3 py-1 text-xs ${option.className}`}>
								{option.label}
							</span>
						{/each}
					</div>
				</section>
			{/each}
		</div>

		<div class="mt-8 text-center">
			<button onclick={onCtaClick} class="btn-primary"> {ctaLabel} </button>
		</div>
	</div>
</section>
