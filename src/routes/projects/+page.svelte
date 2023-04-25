<script>
    import Projectshero from "../../lib/components/projectshero.svelte";
    import { slide } from "svelte/transition";
    import { fade } from "svelte/transition";
    
</script>
<!-- <div in:slide={{duration:1100,delay:300}}> -->
    <div in:fade={{duration:800}}>
    <Projectshero />
</div>