<script>
    import '@picocss/pico';
    import '@fontsource/raleway';
    import '../app.css';

    import Header from '../lib/components/header.svelte';
    import Footer from '../lib/components/footer.svelte';

    import { description, keywords, title, siteBaseUrl } from '$lib/data/meta.js';

</script>

<svelte:head>
    <link rel="“canonical”" href={siteBaseUrl} />
	<meta name="keywords" content={keywords.join(', ')} />

	<meta name="description" content={description} />
	<meta property="og:description" content={description} />
	<meta name="twitter:description" content={description} />

	<title>{title}</title>
	<meta property="og:title" content={title} />
	<meta name="twitter:title" content={title} />
</svelte:head>
<div>
    <Header />
</div>
<main>
    <slot />
</main>
<div class="container footercontainer">
    <Footer />
</div>

<!-- <style>
    main {
        padding-bottom: 100px;
    }

   .footercontainer {    
        position: fixed;
        display: flexbox;
        bottom: 0;
        left: -50%;
        right: -50%;
        height: 100px; /* adjust the height as needed */
        background-color: var(--background-color);
    }
</style> -->

