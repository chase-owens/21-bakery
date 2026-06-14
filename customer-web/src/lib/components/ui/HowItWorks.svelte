<!-- src/lib/components/home/HowItWorks.svelte -->

<script lang="ts">
	type Step = {
		description: string;
		number: string;
		title: string;
	};
	interface HowItWorksProps {
		steps: Step[];
	}
	const { steps }: HowItWorksProps = $props();
</script>

<section class="section bg-surface">
	<div class="page-container">
		<div class="mb-8 text-center">
			<p class="mb-3 text-xs font-medium tracking-[0.3em] text-primary uppercase">Custom Orders</p>

			<h2 class="section-title mb-3 text-3xl md:text-4xl">How It Works</h2>

			<p class="mx-auto max-w-2xl text-muted">
				From the first idea to the final pickup, we make custom ordering simple, clear, and
				personal.
			</p>
		</div>

		<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
			{#each steps as step}
				<article class="card p-5">
					<p class="mb-4 font-heading text-4xl text-primary/30">
						{step.number}
					</p>

					<h3 class="mb-3 font-heading text-xl text-primary">
						{step.title}
					</h3>

					<p class="text-sm leading-relaxed text-muted">
						{step.description}
					</p>
				</article>
			{/each}
		</div>

		<div class="mt-8 text-center">
			<a href="/custom-orders" class="btn-primary"> Start a Custom Order </a>
		</div>
	</div>
</section>
