<script>
	import Card from '$lib/components/ui/card.svelte';

	let { entry } = $props();
</script>

<Card class="h-auto">
	<header class="border-b border-border-subtle bg-surface-gradient px-4 py-3">
		<p class="font-semibold tracking-tight">{entry.company}</p>
		{#if entry.organization}
			<p class="text-sm text-muted">{entry.organization}</p>
		{/if}
		<p class="text-sm text-muted">
			{entry.location}
			{#if entry.date_range}
				<span aria-hidden="true"> · </span>{entry.date_range}
			{/if}
		</p>
	</header>

	<div class="space-y-3 px-4 py-4 text-body">
		{#if entry.roles}
			<ul class="space-y-2 border-l-2 border-primary-subtle pl-4">
				{#each entry.roles as role}
					<li>
						<p class="font-medium">
							{role.position}
							{#if role.employment}
								<span class="font-normal text-muted">({role.employment})</span>
							{/if}
						</p>
						<p class="text-sm text-muted">{role.date_range}</p>
					</li>
				{/each}
			</ul>
		{/if}
		{#if entry.description}
			{#if Array.isArray(entry.description)}
				{#each entry.description as paragraph}
					<p>{paragraph}</p>
				{/each}
			{:else}
				<p>{entry.description}</p>
			{/if}
		{/if}
	</div>
</Card>
