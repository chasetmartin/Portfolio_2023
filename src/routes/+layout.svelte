<script>
	import { onMount } from 'svelte';
	import '@fontsource/raleway';
	import '../themes/prism-coldark-dark.css';
	import '../app.css';

	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	import { initTheme } from '$lib/helpers/theme.js';

	/** @type {{ children?: import('svelte').Snippet }} */
	let { children } = $props();

	onMount(() => {
		initTheme();
	});
</script>

<div class="flex min-h-screen flex-col">
	<Header />
	<main class="flex-1">
		{@render children?.()}
	</main>
	<Footer />
</div>
