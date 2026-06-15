<script lang="ts">
	type IncludedItem = {
		title: string;
		description: string;
	};

	type Props = {
		title?: string;
		items: IncludedItem[];
	};

	let { title = "What's Included?", items }: Props = $props();
</script>

<section class="section bg-surface">
	<div class="page-container">
		<div class="mb-8 text-center">
			<h2 class="section-title mb-3 text-3xl md:text-4xl">
				{title}
			</h2>
		</div>

		<div class="grid gap-4 md:grid-cols-3">
			{#each items as item}
				<article class="card p-6 text-center">
					<h3 class="mb-4 font-heading text-2xl text-primary">
						{item.title}
					</h3>

					<p class="leading-relaxed text-muted">
						{item.description}
					</p>
				</article>
			{/each}
		</div>
	</div>
</section>
