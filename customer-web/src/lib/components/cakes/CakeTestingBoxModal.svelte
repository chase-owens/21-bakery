<script lang="ts">
	type PreferredContact = 'email' | 'text';
	type DeliveryMethod = 'pickup' | 'shipping';
	type InterestType = 'custom-cake' | 'sweet-tooth' | 'gift';
	type BoxType = 'classic' | 'luxe' | 'choose-4';

	type Props = {
		open: boolean;
		onClose: () => void;
	};

	let { open, onClose }: Props = $props();

	const flavors = [
		'Banana',
		'Blueberry Lemon',
		'Cinnamon Roll',
		'Confetti',
		'Cookies and Cream',
		'Chocolate Fudge',
		'Lemon Velvet',
		'Marble',
		'Red Velvet',
		'Signature Vanilla',
		'Strawberry',
		'Wedding Cake (Almond)'
	];

	let firstName = $state('');
	let lastName = $state('');
	let email = $state('');
	let phoneNumber = $state('');

	let preferredContact = $state<PreferredContact>('email');
	let interestType = $state<InterestType>('custom-cake');
	let deliveryMethod = $state<DeliveryMethod>('pickup');
	let requestedDate = $state('');

	let boxType = $state<BoxType>('classic');

	let flavor1 = $state('');
	let flavor2 = $state('');
	let flavor3 = $state('');
	let flavor4 = $state('');

	let referralSource = $state('');
	let referrerName = $state('');
	let notes = $state('');

	const boxPrices: Record<BoxType, number> = {
		classic: 35,
		luxe: 70,
		'choose-4': 25
	};

	const shippingPrice = 15;

	let total = $derived(boxPrices[boxType] + (deliveryMethod === 'shipping' ? shippingPrice : 0));

	function submitForm() {
		const payload = {
			type: 'cake-tasting-box',

			customer: {
				firstName,
				lastName,
				email,
				phoneNumber,
				preferredContact
			},

			cakeTasting: {
				interestType,
				deliveryMethod,
				requestedDate,
				boxType,
				price: boxPrices[boxType],
				shipping: deliveryMethod === 'shipping' ? shippingPrice : 0,
				total,
				flavors:
					boxType === 'choose-4' ? [flavor1, flavor2, flavor3, flavor4].filter(Boolean) : undefined
			},

			referral: {
				source: referralSource,
				referrerName
			},

			notes
		};

		console.log('Cake tasting box payload:', payload);
	}
</script>

{#if open}
	<div class="fixed inset-0 z-50 overflow-y-auto bg-black/40 p-4">
		<div class="mx-auto max-w-2xl rounded-3xl bg-surface p-6 shadow-2xl">
			<div class="mb-6 flex items-start justify-between gap-4">
				<div>
					<p class="mb-2 text-xs font-medium tracking-[0.3em] text-primary uppercase">
						Cake Tasting
					</p>

					<h2 class="font-heading text-3xl text-primary">Cake Tasting Box</h2>

					<p class="mt-2 text-sm text-muted">
						Choose a tasting box and tell us how you'd like to receive it.
					</p>
				</div>

				<button type="button" class="text-2xl text-primary" onclick={onClose}>×</button>
			</div>

			<form
				class="space-y-6"
				onsubmit={(event) => {
					event.preventDefault();
					submitForm();
				}}
			>
				<div class="grid gap-4 sm:grid-cols-2">
					<input bind:value={firstName} placeholder="First name" class="input" />
					<input bind:value={lastName} placeholder="Last name" class="input" />
					<input bind:value={email} type="email" placeholder="Email" class="input" />
					<input bind:value={phoneNumber} placeholder="Phone number" class="input" />
				</div>

				<section>
					<p class="mb-3 text-sm font-medium text-primary">Preferred contact</p>

					<div class="grid gap-3 sm:grid-cols-2">
						<label
							class="flex items-center gap-3 rounded-md border border-border bg-background p-3"
						>
							<input type="radio" bind:group={preferredContact} value="email" />
							<span>Email</span>
						</label>

						<label
							class="flex items-center gap-3 rounded-md border border-border bg-background p-3"
						>
							<input type="radio" bind:group={preferredContact} value="text" />
							<span>Text</span>
						</label>
					</div>
				</section>

				<section>
					<p class="mb-3 text-sm font-medium text-primary">What interests you in cake tasting?</p>

					<div class="grid gap-3">
						<label
							class="flex items-center gap-3 rounded-md border border-border bg-background p-3"
						>
							<input type="radio" bind:group={interestType} value="custom-cake" />
							<span>Interested in a custom cake</span>
						</label>

						<label
							class="flex items-center gap-3 rounded-md border border-border bg-background p-3"
						>
							<input type="radio" bind:group={interestType} value="sweet-tooth" />
							<span>Satisfying a sweet tooth</span>
						</label>

						<label
							class="flex items-center gap-3 rounded-md border border-border bg-background p-3"
						>
							<input type="radio" bind:group={interestType} value="gift" />
							<span>Purchasing as a gift</span>
						</label>
					</div>
				</section>

				<section>
					<p class="mb-3 text-sm font-medium text-primary">Delivery method</p>

					<div class="grid gap-3 sm:grid-cols-2">
						<label
							class="flex items-center gap-3 rounded-md border border-border bg-background p-3"
						>
							<input type="radio" bind:group={deliveryMethod} value="pickup" />
							<span>Pickup</span>
						</label>

						<label
							class="flex items-center gap-3 rounded-md border border-border bg-background p-3"
						>
							<input type="radio" bind:group={deliveryMethod} value="shipping" />
							<span>Shipping +$15</span>
						</label>
					</div>
				</section>

				<label class="block space-y-2">
					<span class="text-sm font-medium text-primary"> Preferred pickup or ship date </span>

					<input bind:value={requestedDate} type="date" class="input" />
				</label>

				<section>
					<p class="mb-3 text-sm font-medium text-primary">Choose your box</p>

					<div class="space-y-3">
						<label class="flex gap-3 rounded-2xl border border-border bg-background p-4">
							<input type="radio" bind:group={boxType} value="classic" />

							<div class="flex-1">
								<div class="flex justify-between gap-4">
									<p class="font-semibold text-primary">Classic Box</p>
									<p class="font-semibold">$35</p>
								</div>

								<p class="mt-1 text-sm text-muted">
									6 signature best-selling flavors, including vanilla, strawberry, lemon velvet,
									chocolate fudge, wedding cake almond, and red velvet.
								</p>
							</div>
						</label>

						<label class="flex gap-3 rounded-2xl border border-border bg-background p-4">
							<input type="radio" bind:group={boxType} value="luxe" />

							<div class="flex-1">
								<div class="flex justify-between gap-4">
									<p class="font-semibold text-primary">Luxe Box</p>
									<p class="font-semibold">$70</p>
								</div>

								<p class="mt-1 text-sm text-muted">
									Taste the full menu with signature flavors plus marble, cookies and cream, banana,
									lemon blueberry, cinnamon roll, and berry chantilly.
								</p>
							</div>
						</label>

						<label class="flex gap-3 rounded-2xl border border-border bg-background p-4">
							<input type="radio" bind:group={boxType} value="choose-4" />

							<div class="flex-1">
								<div class="flex justify-between gap-4">
									<p class="font-semibold text-primary">Choose 4</p>
									<p class="font-semibold">$25</p>
								</div>

								<p class="mt-1 text-sm text-muted">Choose four preferred flavors.</p>
							</div>
						</label>
					</div>
				</section>

				{#if boxType === 'choose-4'}
					<section class="rounded-2xl border border-border bg-background p-4">
						<p class="mb-3 text-sm font-medium text-primary">Select 4 flavors</p>

						<div class="grid gap-3 sm:grid-cols-2">
							<select class="input" bind:value={flavor1}>
								<option value="">Flavor 1</option>
								{#each flavors as flavor}
									<option value={flavor}>{flavor}</option>
								{/each}
							</select>

							<select class="input" bind:value={flavor2}>
								<option value="">Flavor 2</option>
								{#each flavors as flavor}
									<option value={flavor}>{flavor}</option>
								{/each}
							</select>

							<select class="input" bind:value={flavor3}>
								<option value="">Flavor 3</option>
								{#each flavors as flavor}
									<option value={flavor}>{flavor}</option>
								{/each}
							</select>

							<select class="input" bind:value={flavor4}>
								<option value="">Flavor 4</option>
								{#each flavors as flavor}
									<option value={flavor}>{flavor}</option>
								{/each}
							</select>
						</div>
					</section>
				{/if}

				<div class="grid gap-4 sm:grid-cols-2">
					<label class="space-y-2">
						<span class="text-sm font-medium text-primary">How did you hear about us?</span>

						<select bind:value={referralSource} class="input">
							<option value="">Please Select</option>
							<option value="instagram">Instagram</option>
							<option value="facebook">Facebook</option>
							<option value="google">Google</option>
							<option value="friend-family">Friend / Family</option>
							<option value="returning-customer">Returning Customer</option>
							<option value="other">Other</option>
						</select>
					</label>

					<label class="space-y-2">
						<span class="text-sm font-medium text-primary">Referrer name / other</span>
						<input bind:value={referrerName} class="input" />
					</label>
				</div>

				<textarea
					bind:value={notes}
					rows="4"
					placeholder="Notes, allergies, gift details, or anything else we should know."
					class="input w-full"
				></textarea>

				<div class="rounded-2xl border border-border bg-background p-4">
					<div class="flex justify-between text-sm">
						<span>Box</span>
						<span>${boxPrices[boxType]}</span>
					</div>

					{#if deliveryMethod === 'shipping'}
						<div class="mt-2 flex justify-between text-sm">
							<span>Shipping</span>
							<span>${shippingPrice}</span>
						</div>
					{/if}

					<div class="mt-3 flex justify-between border-t border-border pt-3 font-semibold">
						<span>Total</span>
						<span>${total}</span>
					</div>
				</div>

				<button type="submit" class="btn-primary w-full"> Request Cake Tasting Box </button>
			</form>
		</div>
	</div>
{/if}
