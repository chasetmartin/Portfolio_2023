<script>
    import Homehero from "../lib/components/homehero.svelte";
    import Projectshome from "../lib/cards/projectshome.svelte";
    import Abouthome from "../lib/cards/abouthome.svelte";
    import Bloghome from "../lib/cards/bloghome.svelte";
    import Homefooter from "../lib/components/homefooter.svelte";
    import Seo from '$lib/components/seo.svelte';

    import { slide } from "svelte/transition";
    import { blur } from "svelte/transition";

</script>
<Seo 
    title="Chase Martin" 
    description="I'm a Portland, OR based software engineer focused on creative data-driven storytelling, and innovative solutions to current environmental challenges"
    keywords="Chase Martin, Software Devlopment, Data Engineer, Data-driven Storytelling, Open Source"
    type="WebSite"
    />
<div in:slide={{duration:1500}}>
    <Homehero />
    <div class="container homegrid">
        <!-- <div class="container-fluid banner">
            Please take a look around and check out my work, then get in touch and we can discuss how to collaborate!
        </div> -->
    <div class="grid">
        <div class="card"><Projectshome /></div>
        <div class="card"><Abouthome /></div>
        <div class="card"><Bloghome /></div>
    </div>
    </div>
    <div class="container">
        <Homefooter />
    </div>
</div>

<style>
    .homegrid {
        margin-top: -1em;
    }
    .card {
        margin-bottom: -1.35em;
    }
    /* .banner {
        margin-top: 1em;
    } */
</style>
