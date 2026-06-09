<script>
	import { cn } from '$lib/utils.js';

	/** @type {{
	 *   class?: string,
	 *   children?: import('svelte').Snippet
	 * }} */
	let { class: className = '', children } = $props();
</script>

<header class={cn('border-b border-border bg-card-muted px-6 py-4 text-center', className)}>
	{@render children?.()}
</header>
