<script>
	import Seoblog from "../../../lib/components/seoblog.svelte";

    import { formatDate } from "$lib/helpers/date.js"

    export let data;
</script>

<Seoblog 
    title={data.meta.title}
    description={data.meta.description}
    keywords={data.meta.categories}
    type="BlogPosting"
    headline={data.meta.headline}
    date={data.meta.date}
/>

<div class="container">
    <article>
        <h1>
            {data.meta.title}
        </h1>
        <p>Published on {formatDate(data.meta.date)}</p>
        <div class="tags">
            {#each data.meta.categories as category}
            <span class="italic">&num;{category}</span>
            <span> </span>
            {/each}
        </div>
        <svelte:component this={data.content} />
    </article>

</div>

<style>
    .italic {
        font-style: italic;
    }
</style>