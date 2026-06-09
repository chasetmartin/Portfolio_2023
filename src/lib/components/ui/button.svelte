<script>
	import { Button } from 'bits-ui';
	import { tv } from 'tailwind-variants';
	import { cn } from '$lib/utils.js';

	const buttonVariants = tv({
		base: 'inline-flex items-center justify-center rounded-lg font-medium no-underline transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:pointer-events-none disabled:opacity-50',
		variants: {
			variant: {
				outline:
					'border border-primary bg-transparent text-primary hover:bg-primary hover:text-white',
				secondary: 'bg-secondary text-white hover:opacity-90',
				ghost: 'text-primary hover:bg-card-muted'
			},
			size: {
				default: 'px-4 py-2 text-sm',
				sm: 'px-3 py-1.5 text-sm',
				lg: 'px-5 py-2.5 text-base'
			}
		},
		defaultVariants: {
			variant: 'outline',
			size: 'default'
		}
	});

	/** @type {{
	 *   variant?: 'outline' | 'secondary' | 'ghost',
	 *   size?: 'default' | 'sm' | 'lg',
	 *   href?: string,
	 *   class?: string,
	 *   children?: import('svelte').Snippet,
	 *   [key: string]: unknown
	 * }} */
	let {
		variant = 'outline',
		size = 'default',
		href,
		class: className = '',
		children,
		...restProps
	} = $props();

	const classes = $derived(cn(buttonVariants({ variant, size }), className));
</script>

{#if href}
	<a {href} class={classes} {...restProps}>
		{@render children?.()}
	</a>
{:else}
	<Button.Root {...restProps} class={classes}>
		{@render children?.()}
	</Button.Root>
{/if}
