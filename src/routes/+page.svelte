<script>
    import Homehero from "../lib/components/homehero.svelte";
    import Projectshome from "../lib/cards/projectshome.svelte";
    import Abouthome from "../lib/cards/abouthome.svelte";
    import Bloghome from "../lib/cards/bloghome.svelte";
    import Homefooter from "../lib/components/homefooter.svelte";

    import { slide } from "svelte/transition";
    import { blur } from "svelte/transition";

</script>
<div in:slide={{duration:1500}}>
    <Homehero />
    <div class="container homegrid">
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
</style>
