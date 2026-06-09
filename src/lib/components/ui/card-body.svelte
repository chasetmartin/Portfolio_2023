<script>
	import { cn } from '$lib/utils.js';

	/** @type {{
	 *   class?: string,
	 *   children?: import('svelte').Snippet
	 * }} */
	let { class: className = '', children } = $props();
</script>

<div class={cn('px-6 py-5 text-body', className)}>
	{@render children?.()}
</div>
