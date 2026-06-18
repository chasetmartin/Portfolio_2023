<script>
	import { DropdownMenu, Switch } from 'bits-ui';
	import { cn } from '$lib/utils.js';
	import { theme, applyTheme } from '../helpers/theme.js';
	import Button from '$lib/components/ui/button.svelte';

	const links = [
		{ href: '/', label: 'home' },
		{ href: '/about', label: 'about' },
		{ href: '/projects', label: 'projects' }
	];

	let isDark = $derived($theme === 'dark');

	/** @param {boolean} checked */
	function handleThemeChange(checked) {
		applyTheme(checked ? 'dark' : 'light');
	}
</script>

<nav class="page-container flex items-center justify-between gap-4 pt-6 pb-2">
	<a href="/" class="logo-mark no-underline!">
		C | M
	</a>

	<div class="flex items-center gap-3">
		<div
			class="flex items-center gap-2 rounded-full bg-card-muted-subtle px-2 py-1 backdrop-blur-sm"
		>
			<Switch.Root
				checked={isDark}
				onCheckedChange={handleThemeChange}
				aria-label="Theme toggle"
				class={cn(
					'inline-flex h-[1.5rem] w-[2.75rem] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent px-[2px] transition-colors',
					'bg-card-muted data-[state=checked]:bg-primary'
				)}
			>
				<Switch.Thumb
					class={cn(
						'pointer-events-none block size-[1.25rem] rounded-full bg-white shadow-sm transition-transform',
						'data-[state=unchecked]:translate-x-0 data-[state=checked]:translate-x-[1.125rem]'
					)}
				/>
			</Switch.Root>
			{#if isDark}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="1em"
					height="1em"
					viewBox="0 0 24 24"
					aria-hidden="true"
					class="text-foreground"
				>
					<path
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M12 3a6 6 0 0 0 9 9a9 9 0 1 1-9-9Z"
					/>
				</svg>
			{:else}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="1em"
					height="1em"
					viewBox="0 0 24 24"
					aria-hidden="true"
					class="text-foreground"
				>
					<g
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
					>
						<circle cx="12" cy="12" r="4" />
						<path
							d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"
						/>
					</g>
				</svg>
			{/if}
		</div>

		<nav class="hidden items-center md:flex" aria-label="Main navigation">
			{#each links as link}
				<Button variant="ghost" size="sm" href={link.href} class="rounded-full px-3">
					{link.label}
				</Button>
			{/each}
		</nav>

		<div class="md:hidden">
			<DropdownMenu.Root>
				<DropdownMenu.Trigger>
					{#snippet child({ props })}
						<button
							{...props}
							type="button"
							class="inline-flex items-center gap-1.5 rounded-full bg-card-muted-subtle px-3 py-1.5 text-sm font-medium text-foreground backdrop-blur-sm transition-colors hover:bg-card-muted hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
						>
							menu
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="1em"
								height="1em"
								viewBox="0 0 24 24"
								aria-hidden="true"
							>
								<path
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M6 9l6 6 6-6"
								/>
							</svg>
						</button>
					{/snippet}
				</DropdownMenu.Trigger>
				<DropdownMenu.Portal>
					<DropdownMenu.Content
						class="z-50 min-w-40 animate-in fade-in-0 zoom-in-95 rounded-xl border border-border-subtle bg-card p-1 shadow-card"
						sideOffset={6}
					>
						{#each links as link}
							<DropdownMenu.Item>
								{#snippet child({ props })}
									<a
										{...props}
										href={link.href}
										class="block rounded-lg px-3 py-2 text-sm text-foreground no-underline outline-none transition-colors hover:bg-card-muted focus:bg-card-muted"
									>
										{link.label}
									</a>
								{/snippet}
							</DropdownMenu.Item>
						{/each}
					</DropdownMenu.Content>
				</DropdownMenu.Portal>
			</DropdownMenu.Root>
		</div>
	</div>
</nav>
