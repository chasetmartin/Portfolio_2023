<script>

    import { page } from "$app/state";
    let {
        title,
        description,
        keywords,
        type,
        canonical
    } = $props();

    let url = $derived(page.url.href);
</script>

<svelte:head>
    {#if canonical}
        <link rel="canonical" href={canonical}>
    {/if}
    <title>{title}</title>
	<meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />

    <meta name="description" content={description} />
	<meta property="og:description" content={description} />
	<meta name="twitter:description" content={description} />

    <meta name="keywords" content={keywords} />

    <script type="application/ld+json">
        {JSON.stringify({
            '@context': 'http://schema.org',
            '@type': type,
            name: title,
            description,
            url
        })}
    </script>

</svelte:head>