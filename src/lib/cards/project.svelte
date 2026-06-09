<script>
	import Markdown from '@magidoc/plugin-svelte-marked';
	import { Collapsible } from 'bits-ui';
	import AccordionTrigger from '$lib/components/ui/accordion-trigger.svelte';
	import Card from '$lib/components/ui/card.svelte';

	let { repo } = $props();

	const sortedTopics = $derived(repo.topics.slice().sort().join(' | '));
</script>

<Card class="mb-6 h-auto">
	<header class="border-b border-border bg-card-muted px-6 py-4">
		<h3 class="text-xl font-semibold text-primary">{repo.name}</h3>
	</header>

	<div class="px-6 py-4">
		<Collapsible.Root>
			<AccordionTrigger>
				<span class="text-left">
					<span class="block font-medium">{repo.description}</span>
					<span class="text-sm text-muted">click to expand README</span>
				</span>
			</AccordionTrigger>
			<Collapsible.Content class="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
				<div class="max-w-none pt-4 text-sm leading-relaxed text-body">
					<Markdown source={repo.readme} />
				</div>
			</Collapsible.Content>
		</Collapsible.Root>
	</div>

	<footer
		class="grid gap-2 border-t border-border bg-card-muted px-6 py-4 text-sm md:grid-cols-2"
	>
		<a href={repo.url} class="truncate text-primary no-underline hover:text-primary-hover">{repo.url}</a>
		<p class="text-muted">{sortedTopics}</p>
	</footer>
</Card>
