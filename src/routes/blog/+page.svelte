<script>
    import Bloghero from '../../lib/components/bloghero.svelte';
    import Seo from '../../lib/components/seo.svelte';

    import { formatDate } from "$lib/helpers/date.js"

    import { slide } from 'svelte/transition';
    // import { fade } from 'svelte/transition';

    export let data;
</script>
<Seo 
    title="Blog | Chase Martin" 
    description="A personal blog about programming, data wrangling, and application building."
    keywords="Chase Martin, Blog, Learning, How-to, Programming, Writing, Data"
    type="WebPage"
    />
<!-- <div in:slide={{duration:1100}}> -->
    <!-- <div in:fade={{duration:800}}> -->
    <div>
    <Bloghero />
        <div class="container">
            <section>
                <ul>
                {#each data.posts as post}
                  <li>
                    <a role="button" class="contrast" href="blog/{post.slug}">
                      {post.title}
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

    <style>
      li {
    list-style-type: none;
}
a {
  margin-bottom: 1em;
}
    </style>
