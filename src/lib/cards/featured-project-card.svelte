<script>
	import Card from '$lib/components/ui/card.svelte';
	import CardHeader from '$lib/components/ui/card-header.svelte';
	import TagList from '$lib/components/tag-list.svelte';

	let { project } = $props();
</script>

<Card class="flex h-full flex-col">
	<CardHeader title={project.name} href={project.url} />
	<div class="flex flex-1 flex-col gap-4 px-6 py-4">
		<p class="text-body">{project.focus}</p>
		<TagList tags={project.stack} variant="emphasized" />
	</div>
	{#if project.homepage}
		<footer class="border-t border-border-subtle bg-surface-gradient px-6 py-3 text-sm">
			<a
				href={project.homepage}
				class="text-primary no-underline hover:text-primary-hover hover:underline"
				target="_blank"
				rel="noreferrer"
			>
				{project.homepage}
			</a>
		</footer>
	{/if}
</Card>
