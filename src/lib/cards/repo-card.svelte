<script>
	import Card from '$lib/components/ui/card.svelte';
	import CardHeader from '$lib/components/ui/card-header.svelte';
	import TagList from '$lib/components/tag-list.svelte';

	let { repo } = $props();

	const sortedTopics = $derived(repo.topics?.slice().sort() ?? []);
</script>

<Card class="h-auto">
	<CardHeader title={repo.name} href={repo.url} />
	<div class="space-y-3 px-6 py-4">
		{#if repo.description}
			<p class="text-body">{repo.description}</p>
		{/if}
		<div class="flex flex-wrap items-center gap-3 text-sm text-muted">
			{#if repo.language}
				<span>{repo.language}</span>
			{/if}
			{#if repo.stars > 0}
				<span>{repo.stars} stars</span>
			{/if}
		</div>
		{#if sortedTopics.length > 0}
			<TagList tags={sortedTopics} />
		{/if}
	</div>
</Card>
