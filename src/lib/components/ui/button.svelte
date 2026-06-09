<script>
	import { Button } from 'bits-ui';
	import { tv } from 'tailwind-variants';
	import { cn } from '$lib/utils.js';

	const buttonVariants = tv({
		base: 'group inline-flex items-center justify-center gap-1.5 rounded-xl font-medium no-underline! transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:pointer-events-none disabled:opacity-50',
		variants: {
			variant: {
				outline:
					'border border-primary bg-transparent text-primary hover:bg-primary-subtle',
				secondary: 'bg-secondary text-white shadow-sm hover:opacity-90 hover:shadow-md',
				ghost: 'text-foreground hover:bg-primary-subtle hover:text-primary',
				cta: 'bg-primary text-white shadow-sm hover:shadow-md hover:brightness-110',
				link: 'h-auto rounded-none px-0 py-0 text-sm font-medium text-foreground hover:text-primary hover:underline'
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
	 *   variant?: 'outline' | 'secondary' | 'ghost' | 'cta' | 'link',
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
