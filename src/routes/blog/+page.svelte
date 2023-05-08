<script>
    import Bloghero from '../../lib/components/bloghero.svelte';
    import Seo from '../../lib/components/seo.svelte';

    import { slide } from 'svelte/transition';
    import { fade } from 'svelte/transition';
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
</div>