<script>
	import { page } from '$app/state';
	import Button from '$lib/components/ui/button.svelte';

	const crumbs = $derived.by(() => {
		const path = page.url.pathname;
		if (path === '/') return [{ href: '/', label: 'home' }];
		if (path === '/about')
			return [
				{ href: '/', label: 'home' },
				{ href: '/about', label: 'about' }
			];
		if (path === '/projects')
			return [
				{ href: '/', label: 'home' },
				{ href: '/projects', label: 'projects' }
			];
		return [];
	});
</script>

<footer class="page-container border-t border-border-subtle py-8">
	<div class="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
		{#if crumbs.length}
			<nav aria-label="breadcrumb">
				<ul class="breadcrumb-list">
					{#each crumbs as crumb, i}
						<li class="flex items-center gap-2">
							{#if i > 0}<span class="text-muted">/</span>{/if}
							<Button variant="ghost" size="sm" href={crumb.href} class="rounded-full px-3">
								{crumb.label}
							</Button>
						</li>
					{/each}
				</ul>
			</nav>
		{/if}

		<div class="flex flex-col gap-2 text-sm text-muted">
			<p>&#169;2026 Chase Martin | Portland, OR</p>
			{#if page.url.pathname !== '/'}
				<p>Built with SvelteKit &#128293;</p>
			{/if}
		</div>
	</div>
</footer>
