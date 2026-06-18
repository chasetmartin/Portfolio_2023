<script>
	import { cn } from '$lib/utils.js';

	/** @type {{
	 *   title?: string,
	 *   href?: string,
	 *   class?: string,
	 *   children?: import('svelte').Snippet
	 * }} */
	let { title, href, class: className = '', children } = $props();
</script>

<header class={cn('border-b border-border-subtle bg-surface-gradient px-6 py-5', className)}>
	{#if title && href}
		<a
			{href}
			class="group flex items-center justify-between gap-3 no-underline! focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
		>
			<span class="text-xl font-semibold tracking-tight text-foreground">{title}</span>
			<span
				class="text-primary opacity-0 transition-opacity duration-200 group-hover:opacity-100"
				aria-hidden="true"
			>
				→
			</span>
		</a>
	{:else if title}
		<div class="flex items-center justify-between gap-3">
			<span class="text-xl font-semibold tracking-tight text-foreground">{title}</span>
			<span
				class="text-primary opacity-0 transition-opacity duration-200 group-hover:opacity-100"
				aria-hidden="true"
			>
				→
			</span>
		</div>
	{:else}
		{@render children?.()}
	{/if}
</header>
