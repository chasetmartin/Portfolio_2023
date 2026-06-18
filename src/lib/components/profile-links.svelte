<script>
	let { links } = $props();
</script>

<nav aria-label="Profile links" class="profile-links">
	{#each links as link}
		<a
			class="profile-link"
			href={link.href}
			target={link.external ? '_blank' : undefined}
			rel={link.external ? 'noreferrer' : undefined}
		>
			{link.label}
			{#if link.external}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="0.75em"
					height="0.75em"
					viewBox="0 0 24 24"
					aria-hidden="true"
					class="profile-link__icon"
				>
					<path
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M7 17L17 7M17 7H9M17 7v8"
					/>
				</svg>
			{/if}
		</a>
	{/each}
</nav>
