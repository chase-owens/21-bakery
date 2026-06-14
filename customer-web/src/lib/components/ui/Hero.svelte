<script lang="ts">
	import type { Hero } from '../../../../../shared/types/HomePageContent';

	const { ctas, description, heroImage, heroImageAlt, imageCaption, subTitle, title }: Hero =
		$props();

	const ctaContainerClass = $derived(
		ctas.length === 1
			? 'flex justify-center lg:justify-start cursor-pointer'
			: 'grid sm:grid-cols-2 lg:max-w-md'
	);
</script>

<section class="section pt-8 md:pt-16">
	<div class="page-container">
		<div class="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
			<div class="overflow-hidden rounded-3xl bg-surface">
				<img
					src={heroImage}
					alt={heroImageAlt}
					class="mx-auto max-h-105 w-full object-contain md:max-h-140"
				/>
			</div>

			<div class="text-center lg:text-left">
				<p class="mb-3 text-xs font-medium tracking-[0.3em] text-primary uppercase">
					{imageCaption}
				</p>

				<h1 class="mb-5 font-heading text-4xl leading-tight text-primary md:text-6xl">
					{title}
					<span class="block">{subTitle}</span>
				</h1>

				<p class="mx-auto mb-7 max-w-xl text-base leading-relaxed text-muted md:text-lg lg:mx-0">
					{description}
				</p>
				{#if ctas.length > 0}
					<div class={ctaContainerClass}>
						{#each ctas as cta}
							{@const className = cta.variant === 'primary' ? 'btn-primary' : 'btn-secondary'}

							{#if 'onCtaClick' in cta}
								<button type="button" class={className} onclick={cta.onCtaClick}>
									{cta.label}
								</button>
							{:else}
								<a href={cta.href} class={className}>
									{cta.label}
								</a>
							{/if}
						{/each}
					</div>
				{/if}
			</div>
		</div>
	</div>
</section>
