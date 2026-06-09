<script>
	import { cn } from '$lib/utils.js';

	/** @type {{
	 *   class?: string,
	 *   children?: import('svelte').Snippet
	 * }} */
	let { class: className = '', children } = $props();
</script>

<article class={cn('surface-card flex flex-col', className)}>
	{@render children?.()}
</article>
