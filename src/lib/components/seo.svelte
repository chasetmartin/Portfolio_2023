<script>
    export let title;
    export let description;
    export let keywords;
    export let type;

    import { page } from "$app/stores";

    $: url = $page.url.href;
</script>

<svelte:head>
    
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
        "description": "${description}",
        "url": "${url}"
        }
        </script>`}

</svelte:head>