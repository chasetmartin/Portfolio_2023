<script>
    import '@fontsource/raleway';
    import '../themes/prism-coldark-dark.css';
    import '../app.css';

    import Header from '$lib/components/header.svelte';
    import Footer from '$lib/components/footer.svelte';
    /**
     * @typedef {Object} Props
     * @property {import('svelte').Snippet} [children]
     */

    /** @type {Props} */
    let { children } = $props();

</script>

<div class="min-h-screen bg-background text-foreground">
    <Header />
    <main>
        {@render children?.()}
    </main>
    <div class="container footercontainer">
        <Footer />
    </div>
</div>


