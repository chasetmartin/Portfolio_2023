<script>
	import Card from '$lib/components/ui/card.svelte';
	import CardHeader from '$lib/components/ui/card-header.svelte';
	import TagList from '$lib/components/tag-list.svelte';

	let { project } = $props();
</script>

<Card class="flex h-full flex-col">
	<CardHeader title={project.name} href={project.url} />
	<div class="flex flex-1 flex-col gap-4 px-6 py-5">
		<div class="space-y-1">
			<p class="text-sm font-medium text-foreground">{project.summary}</p>
			<p class="text-sm text-muted">
				{project.organization}
				{#if project.role}
					<span aria-hidden="true"> · </span>{project.role}
				{/if}
			</p>
		</div>

		<p class="text-body">{project.description}</p>

		{#if project.highlights?.length}
			<ul class="space-y-1.5 text-sm text-body">
				{#each project.highlights as highlight}
					<li class="flex gap-2">
						<span class="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true"></span>
						<span>{highlight}</span>
					</li>
				{/each}
			</ul>
		{/if}

		<div>
			<p class="mb-2 text-sm font-medium text-foreground">Stack</p>
			<TagList tags={project.stack} variant="emphasized" />
		</div>
	</div>

	{#if project.links?.length}
		<footer class="flex flex-wrap gap-2 border-t border-border-subtle bg-surface-gradient px-6 py-4">
			{#each project.links as link}
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
		</footer>
	{/if}
</Card>
