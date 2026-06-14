<script lang="ts">
	export type OrderType =
		| 'custom-cake'
		| 'signature-cake'
		| 'cookies'
		| 'cupcakes'
		| 'chocolate-covered-treats'
		| 'other';

	type DeliveryMethod = 'pickup' | 'delivery' | 'shipping';

	type Props = {
		open: boolean;
		initialOrderType?: OrderType;
		onClose: () => void;
	};

	let { open, initialOrderType = 'custom-cake', onClose }: Props = $props();
	let selectedOrderTypes = $state<OrderType[]>([]);
	let selectedSignatureCakes = $state<string[]>([]);

	$effect(() => {
		if (open) {
			selectedOrderTypes = [initialOrderType];
		}
	});

	const orderTypes = [
		{ value: 'custom-cake', label: 'Custom Cake' },
		{ value: 'signature-cake', label: 'Signature Cake' },
		{ value: 'cookies', label: 'Decorated Sugar Cookies' },
		{ value: 'cupcakes', label: 'Cupcakes' },
		{ value: 'other', label: 'Something Else' }
	] as const;

	const signatureCakes = [
		'Strawberry Shortcake',
		'Campfire',
		'Everything Biscoff',
		'Cookies and Cream',
		'Lemon Dream',
		'Strawberries and Cream'
	];

	const cakeFlavors = [
		'Vanilla Bean',
		'Chocolate',
		'Lemon Velvet',
		'Cinnamon Roll',
		'Almond',
		'Banana',
		'Lemon Blueberry',
		'Strawberry',
		'Birthday Cake',
		'Cookies & Cream',
		'Marble'
	];

	const cakeFillings = [
		'Fresh Strawberries',
		'Chocolate Ganache',
		"Oreo's",
		'Fresh Raspberries',
		'Biscoff Cookie Butter',
		'Biscoff Cookies',
		'Snickers',
		'Strawberry Reduction',
		'Raspberry Reduction',
		"Reese's",
		'Salted Caramel'
	];

	const buttercreams = [
		'Vanilla',
		'Chocolate',
		'Lemon',
		'Biscoff',
		'Oreo',
		'Cinnamon Roll',
		'Peanut Butter',
		'Almond'
	];

	export const eventTypes = [
		'Baby Shower',
		'Birthday',
		'Bridal Shower',
		'Celebration',
		'Celebration of Life',
		'Graduation',
		'Holiday',
		'Logo / Branding',
		'School Event',
		'Sports',
		'Wedding',
		'Other'
	] as const;

	let deliveryMethod = $state<DeliveryMethod>('pickup');

	let firstName = $state('');
	let lastName = $state('');
	let email = $state('');
	let phoneNumber = $state('');

	let requestedDate = $state('');
	let requestedTime = $state('');

	let eventType = $state('');
	let eventTheme = $state('');
	let servingsRequired = $state('');

	let signatureCake = $state('');
	let cakeFlavor = $state('');
	let cakeFilling = $state('');
	let buttercream = $state('');

	let cookieTheme = $state('');
	let cookieQuantity = $state('');

	let description = $state('');

	function submitForm() {
		const hasCustomCake = selectedOrderTypes.includes('custom-cake');
		const hasSignatureCake = selectedOrderTypes.includes('signature-cake');
		const hasCookies = selectedOrderTypes.includes('cookies');

		const payload = {
			orderTypes: selectedOrderTypes,

			customer: {
				firstName,
				lastName,
				email,
				phoneNumber
			},

			fulfillment: {
				deliveryMethod,
				requestedDate,
				requestedTime
			},

			event: {
				eventType,
				eventTheme,
				servingsRequired: Number(servingsRequired) || undefined
			},

			customCakeDetails: hasCustomCake
				? {
						cakeFlavor,
						cakeFilling
					}
				: undefined,

			signatureCakeDetails: hasSignatureCake
				? {
						selectedSignatureCakes
					}
				: undefined,

			cookieDetails: hasCookies
				? {
						cookieTheme,
						cookieQuantity: Number(cookieQuantity) || undefined
					}
				: undefined,

			description
		};

		console.log('Inquiry payload:', payload);
	}
</script>

{#if open}
	<div class="fixed inset-0 z-50 overflow-y-auto bg-black/40 p-4">
		<div class="mx-auto max-w-2xl rounded-3xl bg-surface p-6 shadow-2xl">
			<div class="mb-6 flex items-start justify-between gap-4">
				<div>
					<p class="mb-2 text-xs font-medium tracking-[0.3em] text-primary uppercase">Inquiry</p>

					<h2 class="font-heading text-3xl text-primary">Tell Us About Your Order</h2>
				</div>

				<button type="button" class="text-2xl text-primary" onclick={onClose}> × </button>
			</div>

			<form
				class="space-y-6"
				onsubmit={(event) => {
					event.preventDefault();
					submitForm();
				}}
			>
				<div class="grid gap-4 sm:grid-cols-2">
					<input
						bind:value={firstName}
						placeholder="First name"
						class="rounded-md border border-border bg-background p-3"
					/>
					<input
						bind:value={lastName}
						placeholder="Last name"
						class="rounded-md border border-border bg-background p-3"
					/>
					<input
						bind:value={email}
						type="email"
						placeholder="Email"
						class="rounded-md border border-border bg-background p-3"
					/>
					<input
						bind:value={phoneNumber}
						placeholder="Phone number"
						class="rounded-md border border-border bg-background p-3"
					/>
				</div>

				<section>
					<p class="mb-3 block text-sm font-medium text-primary">What would you like to order?</p>

					<div class="grid gap-3 sm:grid-cols-2">
						{#each orderTypes as type}
							<label
								class="flex items-center gap-3 rounded-md border border-border bg-background p-3"
							>
								<input
									type="checkbox"
									value={type.value}
									checked={selectedOrderTypes.includes(type.value)}
									onchange={(event) => {
										const checked = event.currentTarget.checked;

										selectedOrderTypes = checked
											? [...selectedOrderTypes, type.value]
											: selectedOrderTypes.filter((value) => value !== type.value);
									}}
								/>

								<span>{type.label}</span>
							</label>
						{/each}
					</div>
				</section>

				{#if selectedOrderTypes.includes('signature-cake')}
					<section>
						<p class="mb-3 text-sm font-medium text-primary">
							Which signature cakes are you interested in?
						</p>

						<div class="grid gap-3 sm:grid-cols-2">
							{#each signatureCakes as cake}
								<label
									class="flex items-center gap-3 rounded-md border border-border bg-background p-3"
								>
									<input
										type="checkbox"
										value={cake}
										checked={selectedSignatureCakes.includes(cake)}
										onchange={(event) => {
											selectedSignatureCakes = event.currentTarget.checked
												? [...selectedSignatureCakes, cake]
												: selectedSignatureCakes.filter((value) => value !== cake);
										}}
									/>

									<span>{cake}</span>
								</label>
							{/each}
						</div>
					</section>
				{/if}

				{#if selectedOrderTypes.includes('custom-cake')}
					<section class="space-y-3 rounded-2xl border border-border bg-background p-4">
						<p class="text-sm font-medium text-primary">Custom Cake Details</p>

						<div class="grid gap-4 sm:grid-cols-3">
							<label class="space-y-2">
								<span class="text-sm text-muted">Cake Flavor</span>

								<select
									bind:value={cakeFlavor}
									class="h-10 w-full rounded-md border border-border bg-surface p-3"
								>
									<option value="">Please Select</option>
									{#each cakeFlavors as flavor}
										<option value={flavor}>{flavor}</option>
									{/each}
								</select>
							</label>

							<label class="space-y-2">
								<span class="text-sm text-muted">Cake Filling</span>

								<select
									bind:value={cakeFilling}
									class="h-10 w-full rounded-md border border-border bg-surface p-3"
								>
									<option value="">Please Select</option>
									{#each cakeFillings as filling}
										<option value={filling}>{filling}</option>
									{/each}
								</select>
							</label>

							<label class="space-y-2">
								<span class="text-sm text-muted">American Buttercream</span>

								<select
									bind:value={buttercream}
									class="h-10 w-full rounded-md border border-border bg-surface p-3"
								>
									<option value="">Please Select</option>
									{#each buttercreams as icingOption}
										<option value={icingOption}>{icingOption}</option>
									{/each}
								</select>
							</label>
						</div>
					</section>
				{/if}

				<div class="grid gap-4 sm:grid-cols-2">
					<input
						bind:value={requestedDate}
						type="date"
						class="rounded-md border border-border bg-background p-3"
					/>
					<input
						bind:value={requestedTime}
						type="time"
						class="rounded-md border border-border bg-background p-3"
					/>
				</div>

				<select
					bind:value={deliveryMethod}
					class="h-10 w-full rounded-md border border-border bg-background p-3"
				>
					<option value="pickup">Pickup</option>
					<option value="delivery">Delivery</option>
					<option value="shipping">Shipping</option>
				</select>

				<div class="grid gap-4 sm:grid-cols-2">
					<label>
						<span class="mb-2 block text-sm text-muted"> Event </span>

						<select bind:value={eventType} class="input">
							<option value="">Please Select</option>

							{#each eventTypes as type}
								<option value={type}>
									{type}
								</option>
							{/each}
						</select>
					</label>
					<input
						bind:value={eventTheme}
						placeholder="Theme or colors"
						class="rounded-md border border-border bg-background p-3"
					/>
				</div>

				{#if selectedOrderTypes.includes('custom-cake')}
					<div class="grid gap-4 sm:grid-cols-3">
						<select
							bind:value={cakeFlavor}
							class="h-10 rounded-md border border-border bg-background p-3"
						>
							<option value="">Cake flavor</option>
							{#each cakeFlavors as flavor}
								<option value={flavor}>{flavor}</option>
							{/each}
						</select>

						<select
							bind:value={cakeFilling}
							class="h-10 rounded-md border border-border bg-background p-3"
						>
							<option value="">Filling</option>
							{#each cakeFillings as filling}
								<option value={filling}>{filling}</option>
							{/each}
						</select>

						<select
							bind:value={buttercream}
							class="h-10 rounded-md border border-border bg-background p-3"
						>
							<option value="">Buttercream</option>
							{#each buttercreams as option}
								<option value={option}>{option}</option>
							{/each}
						</select>
					</div>
				{/if}

				{#if selectedOrderTypes.includes('cookies')}
					<div class="grid gap-4 sm:grid-cols-2">
						<input
							bind:value={cookieTheme}
							placeholder="Cookie theme or logo idea"
							class="rounded-md border border-border bg-background p-3"
						/>
						<input
							bind:value={cookieQuantity}
							type="number"
							placeholder="Quantity"
							class="rounded-md border border-border bg-background p-3"
						/>
					</div>
				{/if}

				<input
					bind:value={servingsRequired}
					type="number"
					placeholder="Guest count / servings needed"
					class="w-full rounded-md border border-border bg-background p-3"
				/>

				<textarea
					bind:value={description}
					rows="5"
					placeholder="Tell us anything else we should know. Inspiration photos, design ideas, allergies, pickup notes, etc."
					class="w-full rounded-md border border-border bg-background p-3"
				></textarea>

				<button type="submit" class="btn-primary w-full"> Submit Inquiry </button>
			</form>
		</div>
	</div>
{/if}
