<script>
    import '@picocss/pico';
    import '@fontsource/raleway';
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

<div>
    <Header />
</div>
<main>
    {@render children?.()}
</main>
<div class="container footercontainer">
    <Footer />
</div>


