<script>
	import { Collapsible } from 'bits-ui';
	import { cn } from '$lib/utils.js';

	/** @type {{
	 *   class?: string,
	 *   children?: import('svelte').Snippet
	 * }} */
	let { class: className = '', children } = $props();
</script>

<Collapsible.Trigger class={cn('section-trigger group', className)}>
	<span class="flex-1">{@render children?.()}</span>
	<span
		class="flex shrink-0 items-center justify-center rounded-full bg-primary-subtle p-1 text-primary transition-colors group-hover:bg-card-muted"
		aria-hidden="true"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1.25em"
			height="1.25em"
			viewBox="0 0 24 24"
			class="transition-transform duration-200 group-data-[state=open]:rotate-180"
		>
			<path
				fill="none"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M6 9l6 6 6-6"
			/>
		</svg>
	</span>
</Collapsible.Trigger>
