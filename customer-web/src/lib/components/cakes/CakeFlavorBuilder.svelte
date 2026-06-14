<script lang="ts">
	type Option = {
		id: string;
		label: string;
		className: string;
	};

	const cakeFlavors: Option[] = [
		{
			id: 'vanilla-bean',
			label: 'Vanilla Bean',
			className: 'bg-yellow-50 text-yellow-950 border-yellow-200'
		},
		{
			id: 'chocolate',
			label: 'Chocolate',
			className: 'bg-amber-100 text-amber-950 border-amber-300'
		},
		{
			id: 'lemon-velvet',
			label: 'Lemon Velvet',
			className: 'bg-yellow-100 text-yellow-950 border-yellow-300'
		},
		{
			id: 'cinnamon-roll',
			label: 'Cinnamon Roll',
			className: 'bg-orange-100 text-orange-950 border-orange-300'
		},
		{ id: 'almond', label: 'Almond', className: 'bg-stone-100 text-stone-900 border-stone-300' },
		{ id: 'banana', label: 'Banana', className: 'bg-yellow-50 text-yellow-950 border-yellow-200' },
		{
			id: 'lemon-blueberry',
			label: 'Lemon Blueberry',
			className: 'bg-indigo-100 text-indigo-950 border-indigo-200'
		},
		{
			id: 'strawberry',
			label: 'Strawberry',
			className: 'bg-rose-100 text-rose-900 border-rose-200'
		},
		{
			id: 'birthday-cake',
			label: 'Birthday Cake',
			className: 'bg-purple-100 text-purple-900 border-purple-200'
		},
		{
			id: 'cookies-and-cream',
			label: 'Cookies & Cream',
			className: 'bg-slate-100 text-slate-800 border-slate-300'
		},
		{
			id: 'marble',
			label: 'Marble',
			className: 'bg-neutral-100 text-neutral-900 border-neutral-300'
		}
	];

	const fillings: Option[] = [
		{
			id: 'fresh-strawberries',
			label: 'Fresh Strawberries',
			className: 'bg-pink-100 text-pink-900 border-pink-200'
		},
		{
			id: 'chocolate-ganache',
			label: 'Chocolate Ganache',
			className: 'bg-stone-200 text-stone-950 border-stone-300'
		},
		{ id: 'oreos', label: "Oreo's", className: 'bg-slate-100 text-slate-800 border-slate-300' },
		{
			id: 'fresh-raspberries',
			label: 'Fresh Raspberries',
			className: 'bg-rose-100 text-rose-900 border-rose-200'
		},
		{
			id: 'biscoff-cookie-butter',
			label: 'Biscoff Cookie Butter',
			className: 'bg-orange-100 text-orange-950 border-orange-300'
		},
		{
			id: 'biscoff-cookies',
			label: 'Biscoff Cookies',
			className: 'bg-orange-50 text-orange-950 border-orange-200'
		},
		{
			id: 'snickers',
			label: 'Snickers',
			className: 'bg-amber-100 text-amber-950 border-amber-300'
		},
		{
			id: 'strawberry-reduction',
			label: 'Strawberry Reduction',
			className: 'bg-rose-200 text-rose-950 border-rose-300'
		},
		{
			id: 'raspberry-reduction',
			label: 'Raspberry Reduction',
			className: 'bg-pink-200 text-pink-950 border-pink-300'
		},
		{
			id: 'reeses',
			label: "Reese's",
			className: 'bg-orange-100 text-orange-950 border-orange-300'
		},
		{
			id: 'salted-caramel',
			label: 'Salted Caramel',
			className: 'bg-amber-100 text-amber-950 border-amber-300'
		}
	];

	const buttercreams: Option[] = [
		{
			id: 'vanilla-buttercream',
			label: 'Vanilla',
			className: 'bg-amber-50 text-amber-950 border-amber-200'
		},
		{
			id: 'chocolate-buttercream',
			label: 'Chocolate',
			className: 'bg-stone-300 text-stone-950 border-stone-400'
		},
		{
			id: 'lemon-buttercream',
			label: 'Lemon',
			className: 'bg-yellow-50 text-yellow-950 border-yellow-200'
		},
		{
			id: 'biscoff-buttercream',
			label: 'Biscoff',
			className: 'bg-orange-100 text-orange-950 border-orange-300'
		},
		{
			id: 'oreo-buttercream',
			label: 'Oreo',
			className: 'bg-slate-100 text-slate-800 border-slate-300'
		},
		{
			id: 'cinnamon-roll-buttercream',
			label: 'Cinnamon Roll',
			className: 'bg-orange-100 text-orange-950 border-orange-300'
		},
		{
			id: 'peanut-butter-buttercream',
			label: 'Peanut Butter',
			className: 'bg-amber-100 text-amber-950 border-amber-300'
		},
		{
			id: 'almond-buttercream',
			label: 'Almond',
			className: 'bg-stone-100 text-stone-900 border-stone-300'
		}
	];

	const groups = [
		{
			title: 'Cake Flavors',
			description: 'Choose the foundation of your cake.',
			options: cakeFlavors
		},
		{
			title: 'Fillings',
			description: 'Add fruit, ganache, cookie butter, caramel, or crunch.',
			options: fillings
		},
		{
			title: 'Buttercream',
			description: 'Finish with a buttercream that ties it all together.',
			options: buttercreams
		}
	];

	interface CustomCakeProps {
		onCtaClick: () => void;
	}

	const { onCtaClick }: CustomCakeProps = $props();
</script>

<section id="cake-flavors" class="section">
	<div class="page-container">
		<div class="mb-8 text-center">
			<p class="mb-3 text-xs font-medium tracking-[0.3em] text-primary uppercase">
				Build Your Cake
			</p>

			<h2 class="section-title mb-3 text-3xl md:text-5xl">Choose Your Flavors</h2>

			<p class="mx-auto max-w-2xl text-muted">
				Mix and match cake flavors, fillings, and buttercream options to create a custom cake that
				fits your celebration.
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
			<button onclick={onCtaClick} class="btn-primary"> Request a Custom Cake </button>
		</div>
	</div>
</section>
