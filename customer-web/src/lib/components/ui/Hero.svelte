<script lang="ts">
	import type { Hero } from '../../../../../shared/types/HomePageContent';

	const { ctas, description, heroImage, heroImageAlt, imageCaption, subTitle, title }: Hero =
		$props();
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
					<div class="grid gap-3 sm:grid-cols-2 lg:max-w-md">
						{#each ctas as { href, label, variant }}
							{@const className = variant === 'primary' ? 'btn-primary' : 'btn-secondary'}
							<a {href} class={className}>{label}</a>
						{/each}
					</div>
				{/if}
			</div>
		</div>
	</div>
</section>
