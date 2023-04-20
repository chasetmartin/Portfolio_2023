<script>
    import Abouthero from "../../lib/components/abouthero.svelte";
    import { slide } from 'svelte/transition';
</script>
<div in:slide={{duration:1100, delay:500}}>
    <Abouthero />
</div>