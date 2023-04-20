<script>
    import Homehero from "../lib/components/homehero.svelte";
    import Projectshome from "../lib/cards/projectshome.svelte";
    import Abouthome from "../lib/cards/abouthome.svelte";
    import Bloghome from "../lib/cards/bloghome.svelte";

    import { slide } from "svelte/transition";
    import { blur } from "svelte/transition";
</script>
<div in:slide={{duration:1500}} out:blur>
    <Homehero />
    <div class="container">
    <div class="grid">
        <div><Projectshome /></div>
        <div><Abouthome /></div>
        <div><Bloghome /></div>
    </div>
    </div>
</div>
