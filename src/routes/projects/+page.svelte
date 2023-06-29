<script>
    import Projectshero from "../../lib/components/projectshero.svelte";
    import Project from "../../lib/cards/project.svelte";
    import Seo from "../../lib/components/seo.svelte";

    import { slide } from "svelte/transition";
    import { fade } from "svelte/transition";
    
    export let data;
    const repos = data.repos;
</script>
<Seo 
    title="Projects | Chase Martin" 
    description="Here are the software and data projects I'm currently working on, updated automatically from the GitHub REST API."
    keywords="Chase Martin, Projects, Code, Programming, Data, GitHub, Repositories, API"
    type="WebPage"
    />
<!-- <div in:slide={{duration:1100,delay:300}}> -->
<div in:fade={{duration:800}}>
    <Projectshero />
    <div class="container projectcontainer">
        <h5>This page updates using the GitHub REST API and server-side-rendering to quickly load the real-time data &#9889 &#9889 &#9889</h5>
    </div>
</div>
<div class="container" in:fade={{duration:800, delay:500}}>
    <div class="grid">
        <div class="card">
    {#each repos as repo}
        
        <Project {repo}/>
    
    {/each}
        </div>
    </div>
</div>

<style>
    .projectcontainer {
        margin-top: -1em;
    }
</style>
