<script>
    import Abouthero from "../../lib/components/abouthero.svelte";
    import { slide } from 'svelte/transition';
</script>
<div in:slide={{duration:1100, delay:300}}>
    <Abouthero />
    <div class="container">Here is some copy about me...</div>
</div>