<script>
    import Projectshero from "../../lib/components/projectshero.svelte";
    import Project from "../../lib/cards/project.svelte";

    import { slide } from "svelte/transition";
    import { fade } from "svelte/transition";
    
    export let data;
    const repos = data.repos;
</script>
<!-- <div in:slide={{duration:1100,delay:300}}> -->
<div in:fade={{duration:800}}>
    <Projectshero />
    <div class="container projectcontainer">
        <h5>This page updates using the GitHub REST API and server-side-rendering to quickly load the real-time data &#9889 &#9889 &#9889</h5>
    </div>
</div>
<div class="container" in:fade={{duration:800, delay:500}}>
    <div>
    {#each repos as repo}
        <Project {repo}/>
    {/each}
    </div>
</div>

<style>
    .projectcontainer {
        margin-top: -1em;
    }
</style>
