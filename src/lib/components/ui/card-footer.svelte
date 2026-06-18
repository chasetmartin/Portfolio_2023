<script>
	import { cn } from '$lib/utils.js';

	/** @type {{
	 *   class?: string,
	 *   children?: import('svelte').Snippet
	 * }} */
	let { class: className = '', children } = $props();
</script>

<footer class={cn('border-t border-border-subtle bg-surface-gradient px-6 py-4', className)}>
	{@render children?.()}
</footer>
