<script>
	import { cn } from '$lib/utils.js';

	/** @type {{
	 *   class?: string,
	 *   children?: import('svelte').Snippet
	 * }} */
	let { class: className = '', children } = $props();
</script>

<footer class={cn('border-t border-border bg-card-muted px-6 py-4 text-center', className)}>
	{@render children?.()}
</footer>
