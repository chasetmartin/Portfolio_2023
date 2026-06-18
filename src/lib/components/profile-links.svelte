<script>
	let { links } = $props();
</script>

<nav aria-label="Profile links" class="breadcrumb-list">
	{#each links as link}
		<a
			href={link.href}
			target={link.external ? '_blank' : undefined}
			rel={link.external ? 'noreferrer' : undefined}
		>
			{link.label}
		</a>
	{/each}
</nav>
