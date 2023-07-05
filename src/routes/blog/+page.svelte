<script>
    import Bloghero from '../../lib/components/bloghero.svelte';
    import Seo from '../../lib/components/seo.svelte';

    import { formatDate } from "$lib/helpers/date.js"

    import { slide } from 'svelte/transition';
    import { fade } from 'svelte/transition';

    export let data;
</script>
<Seo 
    title="Blog | Chase Martin" 
    description="A personal blog about programming, data wrangling, and application building."
    keywords="Chase Martin, Blog, Learning, How-to, Programming, Writing, Data"
    type="WebPage"
    />
<!-- <div in:slide={{duration:1100, delay:300}}> -->
    <div in:fade={{duration:800}}>
    <Bloghero />
        <div class="container">
            <section>
                <ul>
                {#each data.posts as post}
                  <li>
                    <a href="blog/{post.slug}">
                      <h2>{post.title}</h2>
                    </a>
                    <p>{formatDate(post.date)}</p>
                    <p>{post.description}</p>
                    <hr>
                  </li>
                {/each}
                </ul>
        </section>
        </div>
    </div>
