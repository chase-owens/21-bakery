<script lang="ts">
	import closeIcon from '$lib/assets/icons/close.svg';
	import menuIcon from '$lib/assets/icons/menu.svg';
	import '../../../app.css';

	let { children } = $props();

	let isMenuOpen = $state(false);

	const navItems = [
		{ label: 'Home', href: '/' },
		{ label: 'Cakes', href: '/cakes' },
		{ label: 'Cookies', href: '/cookies' },
		{ label: 'Events', href: '/events' },
		{ label: 'Gallery', href: '/gallery' }
	];

	const occasionItems = [
		{ label: 'Birthdays', href: '/occasions/birthday' },
		{ label: 'Baby Showers', href: '/occasions/baby-shower' },
		{ label: 'Weddings', href: '/occasions/wedding' },
		{ label: 'Graduations', href: '/occasions/graduation' },
		{ label: 'Corporate Events', href: '/occasions/corporate' }
	];

	function closeMenu() {
		isMenuOpen = false;
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') closeMenu();
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<div class="min-h-screen bg-background text-foreground">
	<header class="sticky top-0 z-30 border-b border-border bg-surface">
		<div class="page-container flex h-20 items-center justify-between">
			<button
				type="button"
				aria-expanded={isMenuOpen}
				aria-controls="bakery-menu-drawer"
				aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
				onclick={() => (isMenuOpen = !isMenuOpen)}
				class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background transition"
			>
				<img src={isMenuOpen ? closeIcon : menuIcon} alt="" class="h-5 w-5" />
			</button>

			<a href="/" aria-label="21 Bakehouse Home">
				<img src="/images/logo.webp" alt="21 Bakehouse" class="h-12 w-auto md:h-16" />
			</a>
		</div>
	</header>

	{#if isMenuOpen}
		<button
			type="button"
			class="fixed inset-0 z-40 bg-black/35"
			aria-label="Close menu overlay"
			onclick={closeMenu}
		></button>

		<aside
			id="bakery-menu-drawer"
			class="fixed top-0 left-0 z-50 h-full w-full max-w-md overflow-y-auto border-r border-border bg-background shadow-2xl"
		>
			<div
				class="sticky top-0 flex items-center justify-between border-b border-border bg-surface px-4 py-4"
			>
				<p class="text-xs font-medium tracking-[0.25em] text-highlight uppercase">Menu</p>

				<button
					type="button"
					class="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background"
					aria-label="Close menu"
					onclick={closeMenu}
				>
					✕
				</button>
			</div>

			<div class="space-y-8 p-4">
				<section>
					<p class="mb-3 text-xs font-medium tracking-[0.25em] text-highlight uppercase">Explore</p>

					<div class="grid gap-2">
						{#each navItems as item}
							<a href={item.href} class="card px-4 py-3 text-sm font-medium" onclick={closeMenu}>
								{item.label}
							</a>
						{/each}
					</div>
				</section>

				<section>
					<p class="mb-3 text-xs font-medium tracking-[0.25em] text-highlight uppercase">
						Shop by Occasion
					</p>

					<div class="grid gap-2">
						{#each occasionItems as item}
							<a href={item.href} class="card px-4 py-3 text-sm font-medium" onclick={closeMenu}>
								{item.label}
							</a>
						{/each}
					</div>
				</section>

				<section>
					<a href="/custom-orders" class="btn-primary w-full" onclick={closeMenu}>
						Start a Custom Order
					</a>
				</section>
			</div>
		</aside>
	{/if}

	<main>
		{@render children()}
	</main>

	<footer class="border-t border-border bg-surface">
		<div class="page-container py-8 text-sm text-foreground/70">
			© 2026 21 Bakehouse. Custom cakes, cookies, and celebrations.
		</div>
	</footer>
</div>
