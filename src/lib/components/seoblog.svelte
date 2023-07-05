<script>
    export let title;
    export let description;
    export let keywords;
    export let type;
    export let canonical;
    export let headline;
    export let date;

    import { page } from "$app/stores";

    $: url = $page.url.href;
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

    {@html `<script type="application/ld+json">
        {
        "@context": "http://schema.org",
        "@type": "${type}",
        "name": "${title}",
        "headline": "${headline}",
        "description": "${description}",
        "keywords": "${keywords}",
        "datePublished": "${date}",
        "dateCreated": "${date}",
        "dateModified": "${date}",
        "editor": "Chase Martin",
        "publisher": "chasethomasmartin.com",
        "url": "${url}"
        }
        </script>`}

</svelte:head>