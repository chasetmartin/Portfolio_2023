<script>
    import { goto } from '$app/navigation';
</script>

<article>
    <header class="center">
        <button class="contrast outline" on:click={() => goto('/blog', {invalidateAll: true})}>Blog</button>
        <!-- <a role="button" class="contrast outline" href="/blog">Blog</a> -->
    </header>
    <div>
        Now up and running!
    </div>
    <footer>
        Writing about programming, data wrangling, and application building.
    </footer>
</article>

<style>
    button {
        width: 50%;
    }
    .center {
        display: flex;
        justify-content: center;
    }
</style>