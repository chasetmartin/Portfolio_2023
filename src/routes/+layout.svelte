<script>
    import '@picocss/pico';
    import '@fontsource/raleway';
    import '../app.css';

    import Header from '$lib/components/header.svelte';
    import Footer from '$lib/components/footer.svelte';

</script>

<div>
    <Header />
</div>
<main>
    <slot />
</main>
<div class="container footercontainer">
    <Footer />
</div>


