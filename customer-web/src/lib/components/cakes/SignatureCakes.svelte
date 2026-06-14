<script lang="ts">
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

	const ingredientStyles: Record<IngredientId, string> = {
		'vanilla-bean': 'bg-yellow-50 text-yellow-950 border-yellow-200',
		'fresh-strawberries': 'bg-pink-100 text-pink-900 border-pink-200',
		'vanilla-buttercream': 'bg-amber-50 text-amber-950 border-amber-200',
		chocolate: 'bg-amber-100 text-amber-950 border-amber-300',
		'marshmallow-fluff': 'bg-slate-50 text-slate-700 border-slate-200',
		'chocolate-ganache': 'bg-stone-200 text-stone-950 border-stone-300',
		'graham-cracker-crumbles': 'bg-orange-100 text-orange-950 border-orange-200',
		'chocolate-buttercream': 'bg-stone-300 text-stone-950 border-stone-400',
		'chocolate-ganache-drip': 'bg-stone-400 text-stone-950 border-stone-500',
		'cookie-butter-ganache': 'bg-orange-100 text-orange-950 border-orange-300',
		'lotus-cookie-crumbles': 'bg-orange-50 text-orange-950 border-orange-200',
		'biscoff-buttercream': 'bg-orange-100 text-orange-950 border-orange-300',
		'cookie-butter-drip': 'bg-orange-200 text-orange-950 border-orange-300',
		'cookies-and-cream': 'bg-slate-100 text-slate-800 border-slate-300',
		'oreo-buttercream': 'bg-slate-100 text-slate-800 border-slate-300',
		'oreo-crumbles': 'bg-zinc-200 text-zinc-900 border-zinc-300',
		'whole-oreos': 'bg-zinc-300 text-zinc-950 border-zinc-400',
		'lemon-velvet': 'bg-yellow-100 text-yellow-950 border-yellow-300',
		'lemon-curd': 'bg-yellow-200 text-yellow-950 border-yellow-300',
		'lemon-buttercream': 'bg-yellow-50 text-yellow-950 border-yellow-200',
		strawberry: 'bg-rose-100 text-rose-900 border-rose-200',
		'strawberry-reduction': 'bg-rose-200 text-rose-950 border-rose-300'
	};

	const signatureCakes: SignatureCake[] = [
		{
			name: 'Strawberry Shortcake',
			summary: 'Moist vanilla bean cake layered with fresh strawberries and vanilla buttercream.',
			cakeFlavor: { id: 'vanilla-bean', label: 'Vanilla Bean' },
			fillings: [{ id: 'fresh-strawberries', label: 'Fresh Strawberries' }],
			toppings: [{ id: 'vanilla-buttercream', label: 'Vanilla Buttercream' }]
		},
		{
			name: 'Campfire',
			summary: 'A rich chocolate cake inspired by classic campfire s’mores flavors.',
			cakeFlavor: { id: 'chocolate', label: 'Chocolate' },
			fillings: [
				{ id: 'marshmallow-fluff', label: 'Marshmallow Fluff' },
				{ id: 'chocolate-ganache', label: 'Chocolate Ganache' },
				{ id: 'graham-cracker-crumbles', label: 'Graham Cracker Crumbles' }
			],
			toppings: [
				{ id: 'chocolate-buttercream', label: 'Chocolate Buttercream' },
				{ id: 'chocolate-ganache-drip', label: 'Chocolate Ganache Drip' },
				{ id: 'graham-cracker-crumbles', label: 'Graham Cracker Crumbles' }
			]
		},
		{
			name: 'Everything Biscoff',
			summary: 'Chocolate cake packed with cookie butter flavor and Lotus cookie crunch.',
			cakeFlavor: { id: 'chocolate', label: 'Chocolate' },
			fillings: [
				{ id: 'cookie-butter-ganache', label: 'Cookie Butter Ganache' },
				{ id: 'lotus-cookie-crumbles', label: 'Lotus Cookie Crumbles' }
			],
			toppings: [
				{ id: 'biscoff-buttercream', label: 'Biscoff Buttercream' },
				{ id: 'cookie-butter-drip', label: 'Cookie Butter Drip' },
				{ id: 'lotus-cookie-crumbles', label: 'Lotus Cookie Crumbles' }
			]
		},
		{
			name: 'Cookies and Cream',
			summary: 'A cookies-and-cream lover’s dream loaded with Oreos throughout.',
			cakeFlavor: { id: 'cookies-and-cream', label: 'Cookies & Cream' },
			fillings: [
				{ id: 'oreo-buttercream', label: 'Oreo Buttercream' },
				{ id: 'chocolate-ganache', label: 'Chocolate Ganache' },
				{ id: 'oreo-crumbles', label: 'Oreo Crumbles' }
			],
			toppings: [
				{ id: 'oreo-buttercream', label: 'Oreo Buttercream' },
				{ id: 'chocolate-ganache-drip', label: 'Chocolate Ganache Drip' },
				{ id: 'whole-oreos', label: 'Whole Oreos' }
			]
		},
		{
			name: 'Lemon Dream',
			summary: 'Bright citrus flavors balanced with silky lemon buttercream.',
			cakeFlavor: { id: 'lemon-velvet', label: 'Lemon Velvet' },
			fillings: [{ id: 'lemon-curd', label: 'Fresh Lemon Curd' }],
			toppings: [{ id: 'lemon-buttercream', label: 'Lemon Buttercream' }]
		},
		{
			name: 'Strawberries and Cream',
			summary: 'Fresh strawberry cake paired with house-made strawberry reduction.',
			cakeFlavor: { id: 'strawberry', label: 'Strawberry' },
			fillings: [{ id: 'strawberry-reduction', label: 'Strawberry Reduction' }],
			toppings: [{ id: 'vanilla-buttercream', label: 'Vanilla Buttercream' }]
		}
	];

	interface SignatureCakeProps {
		onCtaClick: () => void;
	}

	const { onCtaClick }: SignatureCakeProps = $props();
</script>

<section class="section bg-surface">
	<div class="page-container">
		<div class="mb-8 text-center">
			<p class="mb-3 text-xs font-medium tracking-[0.3em] text-primary uppercase">
				House Favorites
			</p>

			<h2 class="section-title mb-3 text-3xl md:text-5xl">Signature Cakes</h2>

			<p class="mx-auto max-w-2xl text-muted">
				Choose one of our signature flavor combinations or use them as inspiration for your own
				custom cake.
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
			<button class="btn-primary" onclick={onCtaClick}> Request a Signature Cake </button>
		</div>
	</div>
</section>
